// Utility
function print(value){
    console.info(value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
        const grades = [99, 80, 75, 88, 99, 100, 45, 0, 60, 66]
    // return the array
        return grades

}
// display value
print(`Scores Array: ${scores()}`)



// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
    const grades = scores();
    const third = grades[2]
    // return the elememt
    return third
}
// display value
print(`Third Score: ${accessScore()}`)


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
        const shirtNumbers = [10, 7]
        const ages = [34, 37]
        const totalGoals = 1600
        const nestedArray = [shirtNumbers, ages, totalGoals]
    // return the nested arrays
        return nestedArray
}
// display value
const appScores = nestedScores()
print(`Nested Score Array: ${appScores[1][0]}`)
console.log("Nested:", nestedScores())


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const grades = scores()
    // return the number of elements
    return grades.length

}
// display value
print(`Number of elements: ${getNumberOfScores()}`)
print(`Nested Length: ${nestedScores().length}`)


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const grades = nestedScores()
    grades.push(78, 99, 100)
    grades.unshift(100, [5,6], "Hello", true)
    // return the new array with the elements that have been added
    return grades

}
// display value
print(`Added elements: ${addElement()}`)



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object

    // return student object
}
// display value
// print(`Student: ${student()}`)

// TODO: Access student's age
function studentAge(){
    // access student age using key


    // return student age

}
// display value
// print(`Student Age: ${studentAge()}`)


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator


    // return student email

}
// display value
// print(`Student Email: ${studentEmail()}`)


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object


    // return user object

}
// display value
// print(`User: ${user()}`)


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries


    // return entries

}
// display value
// print(`User Entries: ${getUserEntries()}`)


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys: ${getUserKeys()}`)

