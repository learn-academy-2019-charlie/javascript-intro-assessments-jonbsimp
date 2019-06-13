// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

function getFirstLetter (str) {
    var firstLetter = str.charAt(0)
    return firstLetter
}

console.log(mantra.charAt(0))
console.log(getFirstLetter(mantra) + '\n')

// 2. Write the code that determines if there is a 'x' in mantra.


const findX = (string) => {
    if (string.includes('x')) {
        return 'X in mantra'
    } else {
        return 'no X in mantra'
    }
}

console.log(findX(mantra) + '\n')

// 3. Write the code that determines if there is a 'v' in mantra.

const findV = (string) => {
    if (string.includes('v')) {
        return 'V in mantra'
    } else {
        return 'no V in mantra'
    }
}

console.log(findV(mantra) + '\n')

// Stretch: Write the code that returns the position of 'v' in mantra.

// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false 

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding! \n')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

for (let i=0; i < mantra.length; i++) {
    console.log(mantra.charAt(i))
}

console.log('\n')

// Stretch: Using a while loop.


// Super Stretch: Using forEach().

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

function removeVowels (str) {
    let vowels = 'aeiou'
    let holder = []
    str.split("").forEach(element => {
        if (vowels.indexOf(element) === -1)
            holder.push(element)
    })
    
    return holder.join('')
}

console.log(removeVowels(message))
console.log('\n')

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.


const catsOnly = (list) => {
    let holder = []
    for(let i=0; i<toonimals.length; i++)
        if(toonimals[i].animal === 'cat') {
            holder.push(toonimals[i])
        } return holder
}

 console.log(catsOnly(toonimals))