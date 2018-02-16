"use strict";

const fs = require('fs');

/*
three students. two days:
let data = [
 [0, 0, 0],
 [0, 0, 0]
]
data[0][2] // third student on the first day
data[0][0] // first student on the first day
data[1][0] // first student on the second day
 */

class Attendance {
  constructor(classSize, totalDays) {
    this.classSize = classSize;
    this.totalDays = totalDays;
    this.data = [];
    for (let day = 0; day < totalDays; day++) {
      this.data[day] = [];
      for (let student = 0; student < classSize; student++) {
        this.data[day][student] = 1;
      }
    }
  }

  markPresent(dayNum, studentIndex) {
    this.data[dayNum - 1][studentIndex] = 1;
  }

  markAbsent(dayNum, studentIndex) {
    console.log('set', dayNum, studentIndex, this.data[dayNum - 1])
    this.data[dayNum - 1][studentIndex] = 0;
  }

  // this converts the array to an actual binary file.
  toBinary(filepath) {
    let requiredBytes = this.classSize * this.totalDays / 8;
    let buffer = Buffer.alloc(2 + requiredBytes);
    console.log(buffer + requiredBytes);
    buffer.writeInt8(this.classSize, 0);
    buffer.writeInt8(this.totalDays, 1);
    
    let byteIndex = 2;
    let dayString = '';
    let byte = '';
    for (let day = 0; day < this.totalDays; day++) {
      for (let student = 0; student < this.classSize; student++) {
        if (this.data[day][student] === 0) {
          byte += '0';
        } else {
          byte += '1';
        }

        if (byte.length === 8) {
          dayString += byte + ' '
          buffer.writeUInt8(parseInt(byte, 2), byteIndex)
          byteIndex++;
          byte = '';
        }
      }
      if (byte) {
        dayString += byte
      }
      console.log('day', day, dayString, '$')
      dayString = ''
    }
  }

  // reads a binary file and initializes this attendance object
  fromBinary(filepath) {
    fs.readFile(filepath, (err, buffer) => {
      if(err) {
          console.error(err)
          process.exit()
      }
      console.log(buffer);
      this.classSize = buffer.readUInt8(0);
      this.totalDays = buffer.readUInt8(1);
      console.log("Class size:", this.classSize);
      console.log("Days in class:", this.totalDays);
      let index = 2;
      let day = 1;
      while (day < this.totalDays) {
        let student = 0;
        while (student < this.classSize) {
          let hex = buffer[index].toString(16);
          let binary = buffer[index].toString(2);
          index++;
          console.log("Day", day, binary, hex);
          for (let c = 0; c < binary.length; c++) {
            if (student === this.classSize) {
              student = 0;
              day++;
            }

            // ignore any trailing zeros past the number of students.
            if (student < this.classSize) {
              if (binary.charAt(c) === '0') {
                let message = `Student ${student} absent on day ${day}`;
                console.log(message);
              }
            }
            student++;
          }
        }
      }
    })
  }
}

//       012345678901234567
// Day 1 111111111111111111
// Day 2 111111111111110111
// Day 3 110111111110111111
// Day 4 111111111110111111
// Day 5 110110111110111111
// Day 6 111111111111111111
// Day 7 111111111111111111
// Day 8 111111111100000000   
let attendance = new Attendance(18, 8);
attendance.markAbsent(2, 14);
attendance.markAbsent(3, 2);
attendance.markAbsent(3, 11);
attendance.markAbsent(4, 11);
attendance.markAbsent(5, 11);
attendance.markAbsent(5, 2);
attendance.markAbsent(5, 5);
attendance.markAbsent(8, 10);
attendance.markAbsent(8, 11);
attendance.markAbsent(8, 12);
attendance.markAbsent(8, 13);
attendance.markAbsent(8, 14);
attendance.markAbsent(8, 15);
attendance.markAbsent(8, 16);
attendance.markAbsent(8, 17);

attendance.toBinary('2018-02-14-attendance.out')
attendance.fromBinary('2018-02-14-attendence.binary');