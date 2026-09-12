// Logical Thinking Questions
// 71. Take two numbers and print which one is greater.
let a = 10
let b = 21
let greater = Math.max(a, b)
console.log(greater)

// 72. Check whether a number lies between 10 and 50.
let val = 180
if (val > 10 && val < 50){
    console.log(`${val} is lies between 10 and 50`)
} else console.log(`${val} is not lies between 10 and 50`)

// 73. Check whether a password length is greater than 8.
let password = 1234567
if(String(password).length <= 8){
    console.log("Password must be greater than 8 characters")
} else console.log("Strong Password")

// 74. Check if a person can drive: age > 18 & has license = true
let age = 17
let hasLicense = false
if (age >= 18 && hasLicense === true){
    console.log("The person can Drive")
} else console.log("Can't Drive")

// 75. Check whether a number is divisible by 2, 3, or both.
let num = 18
if (num % 2 === 0 && num % 3 === 0){
    console.log(`${num} is divisivle by both 2 & 3`)
} else if (num % 3){
    console.log(`${num} is divisible by 3`)
} else if (num % 2){
    console.log(`${num} is divisible by 2`)
} else console.log(`${num} is NOT divisible by 2 or 3.`)

// 76. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
let time = 18
if(time >= 5 && time < 12){
    console.log("Good Morning")
} else if (time >= 12 && time <= 17){
    console.log("Good Afternoon")
} else console.log("Good Afternoon")

// 77. Find whether a number is a multiple of 10.
let i = 100
if (i % 10 === 0){
    console.log(`${i} is divisible by 10.`)
} else console.log(`${i} is not divisible by 10.`)

// 78. Create a simple discount calculator.
let amount = 1280
let discount = 10
const netAmount = amount - (amount * discount) / 100
console.log("Net Amount =",netAmount)

// 79. Check whether a product is in stock.
inStock = true
if(inStock){
    console.log("Product is in stock")
} else console.log("Product is out of stock")

// 80. Calculate final bill after GST.
const gst = 18
const billAfterGST = amount + (amount * discount) / 100
console.log("Final bill after GST =", billAfterGST)
