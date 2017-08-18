Author: Nate McGregor
Friday, August 18th

Program Name: pingpong

Description: Program takes an integer from the user then creates a range of numbers from 1 to that number. At each number divisible by 3 it will replace the number with the string "ping", at numbers divisible by 5 it will replace the number with the string "pong", at numbers divisible by 15 it will replace the number with the string "ping-pong".


| Specifications                                                                          | input example | output example                               |
|-----------------------------------------------------------------------------------------|---------------|----------------------------------------------|
| Take number input from user                                                             | "12"          | "12"                                         |
| Return an array of numbers from the user that  are a range from 1 to the entered number | "5"           | "1,2,3,4,5"                                  |
| Iterate through array of numbers and replace any divisible by 3 with the string "ping"  | "6"           | "1,2,ping,4,5,ping"                          |
| Iterate through array of numbers and replace any divisible by 5 with the string "pong"  | "10"          | "1,2,3,4,pong,6,7,8,9,pong"                    |
| Iterate through array of numbers and replace any divisible by 5 with the string "pong"  | "15"          | "1,2,3,4,5,6,7,8,9,10,11,12,13,14,ping-pong" |

copyright Nate McGregor 2017 Epicodus
