// Utility
function print(tag, value){
    console.info(tag, value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const grades = [15, 7, 9, 10, 13, 0, 10, 5, 14, 7]
    // return the array
    return grades
}
// display value
print(`Scores Array:`, scores())



// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
    const grades = scores();
    const third = grades[2]
    // return the elememt
    return third
}
// display value
print(`Third Score:`, accessScore())


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const nested = [
        [45, 90],[33, 65], 8
    ]
    // return the nested arrays
    return nested
}
// display value
print(`Nested Score Array:`, 
nestedScores())
const nestedArray = nestedScores()
print(`33`, nestedArray[1][0])


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const grades = scores()
    const size = grades.length
    // return the number of elements
    return size
}
// display value
print(`Number of elements:`, getNumberOfScores())


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const grades = scores()

    // push -> adds the new element
    grades.push(23, 45, 12, 0)

    // unshift -> add the new element(front)
    grades.unshift(true, true)

    // shift -> remove from front
    grades.shift()

    // pop -> remove from end
    grades.pop()

    // return the new array with the elements that have been added
    return grades
}
// display value
print(`Added elements:`, addElement())

const x = [0, 1, 1, 2, 3, 5, 8, 13]

function square(x){
    return x * x
}

const y = x.map(square)

print('Squares', y)




// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object

    // return student object
}
// display value
// print(`Student:`, student())

// TODO: Access student's age
function studentAge(){
    // access student age using key


    // return student age

}
// display value
// print(`Student Age:`, studentAge())


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator


    // return student email

}
// display value
// print(`Student Email:`, studentEmail())


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object


    // return user object

}
// display value
// print(`User:`, user())


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries


    // return entries

}
// display value
// print(`User Entries:`, getUserEntries())


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys:`, getUserKeys())

