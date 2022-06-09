// Utility
function print(value){
    console.log(value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const array = [20, 13, 22.67, 38, 94.99, 51, 16, 22, 81, 10]
    // return the array
    return array

}
// display value
print(`Scores Array: ${scores()}`)



// TODO: Access an element from the array
function accessScore(index){
    // using array above access the 3rd element
    const values = scores()
    const element = values[index]
    // return the elememt
    return element
}
// display value
print(`n-th Score: ${accessScore(2)}`)


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const numbers = [ [2,3], [4,5,6,7,8,9,10,99], 10 ]
    // return the nested arrays
    return numbers
    // return numbers[1][5]
}
// display value
print(`Nested Score Array: ${nestedScores()}`)


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const nest = nestedScores()
    const len = nest.length

    //length of nested
    // const nested = nest[1].length

    // return the number of elements
    return len

}
// display value
print(`Number of elements: ${getNumberOfScores()}`)


// TODO: Some array methods (push)
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const studentScores = scores()
    studentScores.push(30,50,80,55,22)

    // const otherScores = scores()
    // const newOther = [...otherScores, 30,33,22,45]
    // const fxnArray = [ (a,b)=>{return a + b}, (a,b)=>{return a / b}, (a,b)=>{return a * b} ]
    // const divide = fxnArray[1](20,19)
    // print(`Division: ${divide}`)

    // return the new array with the elements that have been added
    return studentScores
}
// display value
print(`Added elements: ${addElement()}`)



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
    const studentX = {
        name:"Kimathi",
        age:22,
        email:"kimathi@mail.com",
        studentNumber:123,
        isKenyan:true,
        "XYZ A":"xyz",
        10:50
    }
    // print(studentX)
    // return student object
    return studentX
}
// display value
print(`Student: ${JSON.stringify(student())}`)

// TODO: Access student's age
function studentAge(){
    // access student age using key
    const studentDetails = student()
    const  ages ="age"
    const age = studentDetails[ages]
    // return student age
    return age
}
// display value
print(`Student Age: ${studentAge()}`)


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    const studentDetails = student()
    const email = studentDetails.email
    // return student email
    return email

}
// display value
print(`Student Email: ${studentEmail()}`)


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const userX = {
        id:1,
        name:"Tony",
        course:{
            name:"JavaScript",
            number: 250
        }
    }
    // print(userX.course.name)
    // return user object
    return userX

}
// display value
print(`User: ${user()}`)


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    const entries = Object.entries(user())
    // return entries
    return entries

}
// display value
print(`User Entries: ${getUserEntries()}`)


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys: ${getUserKeys()}`)

