
// ==========================================
// DAY 4 - CONDITIONAL STATEMENTS & LOOPS
// ==========================================


// ==========================================
// PART A - CONDITIONAL STATEMENTS
// ==========================================


// 1. EVEN OR ODD

function checkEvenOdd() {
    let number = Number(document.getElementById("evenInput").value);

    if (document.getElementById("evenInput").value.trim() === "") {
        showResult("evenResult", "Please enter a number.");
        return;
    }

    if (number % 2 === 0) {
        showResult("evenResult", number + " is Even");
    } else {
        showResult("evenResult", number + " is Odd");
    }
}


// 2. LARGEST OF THREE

function findLargest() {
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;
    let c = document.getElementById("numC").value;

    if (a.trim() === "" || b.trim() === "" || c.trim() === "") {
        showResult("largestResult", "Please enter all three numbers.");
        return;
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);

    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    showResult("largestResult", "Largest number: " + largest);
}


// 3. LEAP YEAR

function checkLeapYear() {
    let year = Number(document.getElementById("yearInput").value);

    if (document.getElementById("yearInput").value.trim() === "" ||
        !Number.isInteger(year) || year <= 0) {
        showResult("leapResult", "Please enter a valid year.");
        return;
    }

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        showResult("leapResult", year + " is a Leap Year");
    } else {
        showResult("leapResult", year + " is Not a Leap Year");
    }
}


// 4. ELECTRICITY BILL

function calculateBill() {
    let units = Number(document.getElementById("unitsInput").value);

    if (document.getElementById("unitsInput").value.trim() === "" ||
        !Number.isFinite(units) || units < 0) {
        showResult("billResult", "Enter valid electricity units.");
        return;
    }

    let bill = 0;

    if (units <= 100) {
        bill = 0;
    } else if (units <= 200) {
        bill = (units - 100) * 2;
    } else if (units <= 500) {
        bill = 100 * 2 + (units - 200) * 5;
    } else {
        bill = 100 * 2 + 300 * 5 + (units - 500) * 8;
    }

    showResult("billResult", "Total Electricity Bill: ₹" + bill);
}


// 5. DAY NAME USING SWITCH

function findDay() {
    let day = Number(document.getElementById("dayInput").value);

    if (document.getElementById("dayInput").value.trim() === "" ||
        !Number.isInteger(day)) {
        showResult("dayResult", "Please enter a valid day number.");
        return;
    }

    let dayName;

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }

    showResult("dayResult", dayName);
}


// 6. LOGIN CHECK

function checkLogin() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let isBlocked = document.getElementById("blockedInput").checked;

    let correctUsername = "sharon";
    let correctPassword = "12345";

    if (isBlocked) {
        showResult("loginResult", "Account blocked");
    } else if (username !== correctUsername || password !== correctPassword) {
        showResult("loginResult", "Invalid credentials");
    } else if (!isBlocked && username === correctUsername && password === correctPassword) {
        showResult("loginResult", "Welcome " + username);
    }
}


// ==========================================
// PART B - LOOPS
// ==========================================


// 7. MULTIPLICATION TABLE

function generateTable() {
    let number = document.getElementById("tableInput").value;

    if (number.trim() === "" || !Number.isFinite(Number(number))) {
        showResult("tableResult", "Enter a valid number.");
        return;
    }

    number = Number(number);

    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += number + " × " + i + " = " + (number * i) + "\n";
    }

    showResult("tableResult", output);
}


// 8. SUM OF DIGITS USING WHILE

function calculateSum() {
    let input = document.getElementById("sumInput").value;

    if (input.trim() === "" || !Number.isSafeInteger(Number(input))) {
        showResult("sumResult", "Enter a valid whole number.");
        return;
    }

    let number = Math.abs(Number(input));
    let sum = 0;

    while (number > 0) {
        let digit = number % 10;
        sum = sum + digit;
        number = Math.floor(number / 10);
    }

    showResult("sumResult", "Sum of digits: " + sum);
}


// 9. REVERSE A NUMBER

function reverseNumber() {
    let input = document.getElementById("reverseInput").value;

    if (input.trim() === "" || !Number.isSafeInteger(Number(input))) {
        showResult("reverseResult", "Enter a valid whole number.");
        return;
    }

    let number = Math.abs(Number(input));
    let reverse = 0;

    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }

    if (Number(input) < 0) {
        reverse = -reverse;
    }

    showResult("reverseResult", "Reversed Number: " + reverse);
}


// 10. PALINDROME STRING

function checkPalindrome() {
    let word = document.getElementById("palindromeInput").value.toLowerCase();

    if (word.trim() === "") {
        showResult("palindromeResult", "Please enter a word.");
        return;
    }

    let isPalindrome = true;

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        showResult("palindromeResult", word + " is a Palindrome: true");
    } else {
        showResult("palindromeResult", word + " is a Palindrome: false");
    }
}


// 11. FIZZBUZZ

function runFizzBuzz() {
    let output = "";

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            output += "Fizz\n";
        } else if (i % 5 === 0) {
            output += "Buzz\n";
        } else {
            output += i + "\n";
        }
    }

    showResult("fizzResult", output);
}


// 12. PRIME CHECK

function checkPrime() {
    let input = document.getElementById("primeInput").value;

    if (input.trim() === "" || !Number.isSafeInteger(Number(input))) {
        showResult("primeResult", "Enter a valid whole number.");
        return;
    }

    let number = Number(input);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        showResult("primeResult", number + " is a Prime Number");
    } else {
        showResult("primeResult", number + " is Not a Prime Number");
    }
}


// 13. COUNT VOWELS USING FOR...OF

function countVowels() {
    let sentence = document.getElementById("vowelInput").value.toLowerCase();

    let vowelCount = 0;

    for (let char of sentence) {
        if ("aeiou".includes(char)) {
            vowelCount++;
        }
    }

    showResult("vowelResult", "Total Vowels: " + vowelCount);
}


// 14. STAR PATTERN USING NESTED LOOPS

function generatePattern() {
    let pattern = "";

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        pattern += "\n";
    }

    showResult("patternResult", pattern);
}


// ==========================================
// COMMON RESULT DISPLAY FUNCTION
// ==========================================

function showResult(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

console.log("Day 4 JavaScript tasks loaded successfully!");
