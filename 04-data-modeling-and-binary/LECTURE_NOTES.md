 Class 04
==========
[X] Review Lab 3
  - async callbacks
  - sync vs async
    - async is non-blocking 
    - sync is blocking
    - sync code "blocks" other code from running until it's done
  - async and jest
  - why read three files?
    - Business owner with three locations
    - Seattle, Bellevue, Kirkland
    - we want to analyze sales reports
    - input: three files
            seattle.sales.txt
            bellevue.sales.txt
            kirkland.sales.txt
    - ouput: iterate through each of the files
             process the text as numbers
             calculate the total sales for each area
             finally sum each of the three totals
             return the sum of the total sales of all locations
  - returns vs callbacks
[X] Errata
[X] Data Modeling (representing the world in programs)
  - JavaScript primitives:
    - booleans (true, false)
    - number
      - integers
      - decimal point numbers
      - (rare non-JS) fractions
    - Strings
    - [] arrays
    - {} objects 

  - Truck
    - isRunning (true/false)
    - Brandname (String)
    - doors     ("four")
    - seats     (number)
[X] Binary Counting
  Numerals: 0123456789    (symbols representing values)
  Non-numerals: 10, 42, 928
  Base-10 counting system
  Base-10 means there's 10 symbols in the set of numerals

  Hex (Base 16) Numerals: 0123456789abcdef 

  Value     | Base 10 | Base 16
  =========================
  zero      |00       |  0
  one       |01       |  1
  two       |02       |  2
  three     |03       |  3
  four      |04       |  4
  five      |05       |  5
  six       |06       |  6
  seven     |07       |  7
  eight     |08       |  8
  nine      |09       |  9
  ten       |10       |  a
  eleven    |11       |  b
  twelve    |12       |  c
  thirteen  |13       |  d
  fourteen  |14       |  e
  fifteen   |15       |  f
  sixteen   |16       | 10
  seventeen |17       | 11
  eighteen  |18       | 12            |---10 * 10 = 100
  nineteen  |19       | 13            ||--10
  twenty    |20       | 14            |||-0
             21         15            vvv
             22         16   Base 10: 856
             23         17
             24         18
             25         19
             26         1a
             27         1b
             28         1c
             29         1d
             20         1e
             31         1f
             32         20 = 2*16 + 0*0 = 32


         b8f2 Base 16 =  9824 Base 10 =
             b * (16^3)     9 * (10^3) = 9 * 1000
           + 8 * (16^2)   + 8 * (10^2) = 8 * 100
           + f * (16^1)   + 2 * (10^1) = 2 * 10
           + 2 * (16^0)   + 4 * (10^0) = 4 * 1

Base 2: 01

 0000
 0001
 0010
 0011 =====>  99 => 100
 0100
 0101
 0110
 0111
 1000
 1001
 1010
 1011
 1100
 1101
 1110
 1111
10000 

Base  1: !
Base  2: 0, 1
Base  3: 123
Base 10: 0123456789
Base 16: 0123456789abcdef
Base 26: qwertyuiopasdfghjklzxcvbnm
Base 36: 0123456789qwertyuiopzxcvbnmasdfghjkl
Base Infinity: 


111
112
113
121
122
123
131
132
133
211

!
!!
!!!
!!!!
!!!!!
!!!!!!
!!!!!!!
!!!!!!!!

[ ] Classes (ES6)

