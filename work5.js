// завдання 1
for(let i=20; i <= 32; i+=2){
    console.log(i)
}
console.log("")

let numbers = [19, 21, 23, 25, 27, 29, 31]
for (let evennum of numbers) {
  evennum += 1;
  console.log(evennum)
}
console.log("")

let evenNumbers = { a: 20, b: 22, c: 24, d: 26, e: 28, f: 30, g: 32 }
for (let key in evenNumbers) {
    console.log(evenNumbers[key])
}
console.log("")

let i = 18
while(i<=32){
    i+=2
    console.log(i)
}
console.log("")

let k = 20
do {
    if (k % 2 === 0) {
        console.log(k)
    }
    k++;
} while (k <= 32)
console.log("")

//завдання 2
const myArray = ["watermelon", "black", "Olena", 7, 18]

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
console.log("")

for (let element of myArray) {
    console.log(element)
}
console.log("")

for (let index in myArray) {
    console.log(myArray[index])
}
console.log("")

let m = 0
while (m < myArray.length) {
    console.log(myArray[m])
    m++
}
console.log("")

let s = 0
do {
    console.log(myArray[s])
    s++
} while (s < myArray.length)
console.log("")
console.log("Array data type", typeof myArray)

//завдання3
for(let i=21; i <= 32; i+=2){
    console.log(i)
}
console.log("")

let num = [20, 22, 24, 26, 28,30]
for (let oddnum of num) {
  oddnum += 1;
  console.log(oddnum)
}
console.log("")

let oddNumbers = { a: 21, b: 23, c: 25, d: 27, e: 29, f: 31}
for (let key in oddNumbers) {
    console.log(oddNumbers[key])
}
console.log("")

let v = 19
while(v<=31){
    console.log(v)
    v+=2
    
}
console.log("")

let d = 21
do {
    if (d % 2 !== 0) {
        console.log(d)
    }
    d++;
} while (d <= 31)
console.log("")


//завдання 4
const array = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i])
    }
}
console.log("")

let index = 0;
for (let element of array) {
    if (index % 2 === 0) {
        console.log(element)
    }
    index++
}
console.log("")

for (let index in array) {
    if (index % 2 === 0) {
        console.log(array[index])
    }
}
console.log("")

let n = 0
while (n < array.length) {
    if (n % 2 === 0) {
        console.log(array[n])
    }
    n++
}
console.log("")


let f = 0
do {
    if (f % 2 === 0) {
        console.log(array[f])
    }
    f++
} while (f < array.length)
console.log("")

//Завдання 5
const array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (let i = 0; i < array1.length; i++) {
    if (i % 2 !== 0) { 
        console.log(array1[i])
    }
}
console.log("")

let ind = 0;
for (let element of array1) {
    if (ind % 2 !== 0) {
        console.log(element)
    }
    ind++;
}
console.log("")

for (let index in array1) {
    if (index % 2 !== 0) { 
        console.log(array1[index])
    }
}
console.log("")

let p = 0
while (p < array1.length) {
    if (p % 2 !== 0) { 
        console.log(array1[p])
    }
    p++
}
console.log("")

let j = 0
do {
    if (j % 2 !== 0) { 
        console.log(array1[j])
    }
    j++
} while (j < array1.length)
console.log("")


//завдання6
const array2 = [1, 2, 4, 2, 3, 55, 66, 777, 12]

let sumFor = 0
for (let i = 0; i < array2.length; i++) {
    sumFor += array2[i]
}
console.log("Summa:", sumFor)
console.log("")

let sumForOf = 0
for (let element of array2) {
    sumForOf += element
}
console.log("Summa:", sumForOf)
console.log("")

let sumForIn = 0
for (let index in array2) {
    sumForIn += array2[index]
}
console.log("Summa:", sumForIn)
console.log("")

let sumWhile = 0
let r = 0
while (r < array2.length) {
    sumWhile += array2[r]
    r++
}
console.log("Summa:", sumWhile)
console.log("")

let sumDoWhile = 0
let e = 0
do {
    sumDoWhile += array2[e]
    e++;
} while (e < array2.length)
console.log("Summa:", sumDoWhile)
console.log("")


//завдання 7
const array3 = [1, 2, 4, 2, 3, 5, 6, 7, 1]

let vFor = 1
for (let i = 0; i < array.length; i++) {
    vFor *= array3[i]
}
console.log("Result:", vFor)
console.log("")


let vForof = 1
for (let element of array3) {
    vForof *= element
}
console.log("Result:", vForof)
console.log("")

let vForin = 1
for (let index in array) {
    vForin*= array3[index]
}
console.log("Result", vForin)
console.log("")

let vWhile = 1
let y = 0
while (y < array3.length) {
    vWhile*= array3[y]
    y++
}
console.log("Result:", vWhile)
console.log("")

let vDowhile = 1
let h = 0
do {
    vDowhile *= array3[h]
    h++
} while (h < array3.length)
console.log("Result", vDowhile)
console.log("")



//Завдання 8
let input = prompt("Enter max number for itteration(<100):")

for (let i = 0; i <= input; i++) {
    if (i >= 100) {
        break
    }
    if (i >= 5 && i <= 10) {
        continue
    }
    console.log(i)
}


let o = 0;
while (o <= input) {
    if (o >= 100) {
        break
    }
    if (o >= 5 && o <= 10) {
        o++
        continue
    }
    console.log(o)
    o++
}

let q = 0
do {
    if (q >= 100) {
        break
    }
    if (q >= 5 && q <= 10) {
        q++
        continue 
    }
    console.log(q)
    q++
} while (q <= input)