// 1. Write a JavaScript function to print the “Hello World” message
// Function `displayMessage()` prints “Hello World” string using console.log() function.

function displayMessage(){
    console.log("Hello World!");
}

// 2. Write a function that returns the square of a number
// Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

function findSquare(x){
    x = x * x;
    return x;
}

// 3. Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

function calFahrenheit(temp){
    let fah = 0;
    fah = (temp * 9 / 5) + 32;
    return fah;
}

// 4. Write a function to find the area of a given Rectangle
// Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.

function rectangleAre(width, height){
    let rectarea = 0;
    rectarea = width * height;
    return rectarea;
}

// 5. Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

function circleValues(radius){
    let perimeter = 0;
    let area = 0;
    perimeter = (2 * 3.14) * radius;
    area = 3.14 * (radius ** 2);
    let cvalues = "Perimeter is " + perimeter + " and area is " + area;
    return cvalues;
}

// 6. Write a function to convert Age to Days
// Function `calAge()` takes the age in years and returns the age in days. Use 365 days as the length of a year for this challenge. Ignore leap years and days between last birthday and now. Expect only positive integer inputs.

function calAge(age){
    age = age * 365;
    return age;
}

// 7. Write a function to convert Hours into Seconds
// Function `howManySeconds()` converts hours into seconds. 60 seconds in a minute, 60 minutes in an hour. Don't forget to return your answer.

function howManySeconds(hours){
    let minutes = hours * 60;
    let seconds = minutes * 60;
    return seconds;
}