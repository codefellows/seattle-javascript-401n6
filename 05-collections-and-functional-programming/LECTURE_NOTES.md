 Class 05
==========
[X] No Code Review
[X] JavaScript Classes
[ ] Binary Data

401n6 JavaScript
18 students
15 currently present
this class goes for 20 weeks
with three classes per week (generally)
in total: 60 classes

Week 1: Henry, Darcy, Patrick, Paul, Mary, Leon, Tim
Week 2: Henry, Patrick, Paul, Mary, Leon, Tim
Week 3: Henry, Darcy, Mary, Leon, Tim
Week 5: Darcy, Patrick, Paul, Mary, Leon, Tim
Week 6: Henry, Darcy, Patrick, Paul, Mary, Leon, Tim
Week 7: Patrick, Paul, Mary, Leon, Tim

here are 8 bits
each bit is only either a zero or one
there are 8 bits to a byte

0000 0000  =>  0
0000 0001  =>  1
0000 0010  =>  2
0000 0100  =>  4
0000 1000  =>  8
0001 0000  =>  16
0010 0000  =>  32
0100 0000  =>  64
1000 0000  =>  128

Day 1: Everyone is present
Day 2: someone was gone
Day 3: two people were gone
Day 3-5: someone was sick
bla bla bla
Last Day: snowy

      012345678901234567
Day 1 111111111111111111
Day 2 111111111111110111
Day 3 110111111110111111
Day 4 111111111110111111
Day 5 110110111110111111
Day 6 111111111111111111
Day 7 111111111111111111
Day 8 111111111100000000

18 bits per class
60 classes in total
total file size of storing every bit:
18 bits per class * 60 classes = 1080 bits 
8 bits per byte
1080 bits / 8 bits per byte = 23 bytes

Hex runs from 0-15 (for 16 total)

8421
0000 0
0110 6  6
1010 a 10
1011 b 11
1100 c 12
1101 d 13
1110 e 14
1111 f 15

Binary Attendance Format
- take the number of students in your class
- the width of the row is equal to that number of students in class
- write a row of that many ones to represent everyone present
- place a zero in the row to record when someone is absent
- each row represents a day of class
- have as many rows as you like
- the first byte represents the number of students in class

18 => binary
1, 2, 4, 8, 16, 32, 64
18 = 16 + 2 = 0010

0000 1111 = 8 + 4 + 2 + 1 = 15
0001 0000 = 16
0001 0010 = 16 + 2 = 18

                          (hex view is 12 but actul val is 18)
0001 0010                 12    
1111 1111 1111 1111 1100 ffffc
1111 1111 1111 1101 1100 fffdc
1101 1111 1110 1111 1100 dfefc
1111 1111 1110 1111 1100 ffefc
1101 1011 1110 1111 1100 dbefc
1111 1111 1111 1111 1100 ffffc
1111 1111 1111 1111 1100 ffffc
1111 1111 1100 0000 0000 ffc00

- header is the first 8 bits
- interpret those bits as the number of students in the class
- the remaining data is the payload of attendance data
- there's N bits "four-bit aligned"
- the N bits represent the number of students from the header
- if the N bits don't land "four-bit-aligned" then fill
  the remaining four bits with zeros

000100101111111111111111110011111111111111011100110111111110111111001111111111101111110011011011111011111100111111111111111111001111111111111111110011111111110000000000

Scheme 2 (Trevor's Idea)
========================
- determine the number of students by writing "that many" 1s
- count the ones up until a byte of zeros arrives

"header" and "payload"
- header gives us important information about the structure
  of the file (how many students)
- the payload is just data (it's interpreted depending on
  information inside the header)
- it's important to be able to differentiate between whether
  binary data is part of the header, or part of the payload
- header information usually exists in one strictly-specified
  region at the area of a file
- headers are super easy to read/write if they're in
  an EXACT location.
- all the data is "four bit aligned"
- "1000" << if there was just one student,
  then fill remaining three of the 4 bits with zeros

1111 1111 1111 1111 1100 ffffc
0000 0000 
0000 0000 1111 1111 1100 ffffc
1111 1111 1111 1111 1100 ffffc
1111 1111 1111 1101 1100 fffdc
1101 1111 1110 1111 1100 dfefc
1111 1111 1110 1111 1100 ffefc
1101 1011 1110 1111 1100 dbefc
1111 1111 1111 1111 1100 ffffc
1111 1111 1111 1111 1100 ffffc
1111 1111 1100 0000 0000 ffc00

## Zero-less Scheme
- the first 8 bits represent the number of students in the class.
- there's no four-bit alignment, unlike other schemes


0001 0010               
1111 1111 1111 1111 11
1111 1111 1111 1101 11
1101 1111 1110 1111 11
1111 1111 1110 1111 11
1101 1011 1110 1111 11
1111 1111 1111 1111 11
1111 1111 1111 1111 11
1111 1111 1100 0000 00

00010010111111111111111111111111111111110111110111111110111111111111111110111111110110111110111111111111111111111111111111111111111111111111111100000000

max number given N bits:

1 bit   1
        2
        4
4 bits  8
        16
        32
        64
8 bits  128
        256
        512
        1024
12 bits 2048   2^(bits-1)
16 bits 32768
32 bits 2147483648
64 bits 9.223372e18



# Endian (Little Endian vs Big Endian)
8421       1248
0000 0     0000 0
0110 6  6  1000 1
1010 a 10  0100 2
1011 b 11  1100 3
1100 c 12  0010 4
1101 d 13  1010 5
1110 e 14  0110 6
1111 f 15  1110 7

1248 16   256  4096
0000 0000 0000 0000 0000 0000 0000 0000

## One way to represent negatives
Simply flip the first bit

0111 => 7
1111 => -7

## Another way
Simply flip ALL the bits
0111 => 7
1000 => -7
