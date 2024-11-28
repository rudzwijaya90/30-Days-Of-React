// Import the arrays from the other files
import { countries } from './countries.js';  // Path to the countries.js file
import { webTechs } from './web_techs.js';   // Path to the web_techs.js file


/* Live Preview extension server http://127.0.0.1:3000/solutions/day-01/index.html */
// console.log(countries);
// console.log(webTechs); 

/* Level 2 exercise day 1 */

/* First remove all the punctuations and change the string to array and 
count the number of words in the array */
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

  const removePunctuation = () => {
    let regex = text.replace(/[^\w\s]+/gi, '').split(' ');
    //console.log(regex.length);
    return regex.length;
  }

  console.log(removePunctuation(text));

  /* 3. In the following shopping cart add, remove, edit items */
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  shoppingCart.unshift('Meat'); //add into beginning of array
  shoppingCart.push('Sugar'); //add into the end of array
  shoppingCart.splice(4, 1); //remove 'Honey'
  shoppingCart[3] = 'Green Tea';
  console.log(shoppingCart);

  /* 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
  If it does not exist add to the countries list */
    // Check if Ethiopia is already in the array before adding it
    let countryIndex = countries.indexOf('Ethiopia');
    if (countryIndex != -1) {
        console.log('ETHIOPIA');
      } else {
        countries.push('Ethiopia');
      }

  /* 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
  If it does not exist add Sass to the array and print the array */
    let techIndex = webTechs.indexOf('Sass');
    if (techIndex != -1){
        console.log('Sass is a CSS preprocess');
    } else {
        webTechs.push('Sass');
        console.table(webTechs);
    }

    /* 6. Concatenate the following two variables and store it in a fullStack variable. */
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd);

    console.log(fullStack)

/* Level 3 exercise day 1 */

    /* 1. Sort the array and find the min and max age */
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    const sortAges = [...ages].sort((a, b) => a - b ); // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
    
    console.log(sortAges);
    console.log(Math.min(...sortAges)); //min age
    console.log(Math.max(...sortAges)); //max age
    console.log(sortAges[0]); //min age
    console.log(sortAges[sortAges.length - 1]); //max age

    /* Find the median age(one middle item or two middle items divided by two)  */
    const median = sortAges.length % 2 === 0
      ? (sortAges[sortAges.length / 2 - 1] + sortAges[sortAges.length / 2]) / 2
      : sortAges[Math.floor(sortAges.length / 2)];
      console.log(median); // result 24
    /* Find the average age(all items divided by number of items) */
    let sum = 0;
    for (let i = 0; i < sortAges.length; i++){
      sum += sortAges[i];
    }
    console.log(sum);
    const averageAge = sum / sortAges.length;
    console.log(`Average age is: ${averageAge}`);
    /* Find the range of the ages(max minus min) */
    const rangeOfAge = Math.max(...sortAges) - Math.min(...sortAges);
    console.log(`Range of the age is: ${rangeOfAge}`);
    /* Compare the value of (min - average) and (max - average), use abs() method */
    const min = Math.min(...sortAges);
    const max = Math.max(...sortAges);
    const diffMin = Math.abs(min - averageAge);
    const diffMax = Math.abs(max - averageAge);
    console.log("Difference between min and average:", diffMin);
    console.log("Difference between max and average:", diffMax);

    /* Slice the first ten countries from the countries array */
    console.log(countries.slice(0, 10)); //this is another countries.js
    // Step 1: Calculate the middle index
    const middleIndex = Math.ceil(countries.length / 2);

    // Step 2: Split the array into two parts
    const firstHalf = countries.slice(0, middleIndex);
    const secondHalf = countries.slice(middleIndex);

    console.log("First half:", firstHalf);
    console.log("Second half:", secondHalf);


    /* Exercises Level 1 */
    /* 1. user prompt */
    // let userInput = prompt("Enter your age:");
    // userInput >= 18
    //   ? alert("You are old enough to drive")
    //   : alert(`You are left with ${18 - userInput} years to drive`);

    /* 2.Compare the values of myAge and yourAge using if … else */
    //const myAge = 25;
    // let yourAge = prompt('Enter your age: '); //comment out to continue the exercises
    // Check if the input is invalid (e.g., a non-numeric value)
    // if (isNaN(yourAge) || yourAge == 0) {
    //   alert('Please input a valid number');
    // } else {
      // Convert the input to a number (since prompt returns a string)
    //   yourAge = Number(yourAge);
    //   if (yourAge > myAge){
    //     alert('You are older than me');
    //     console.log('You are older than me');
    //   } else if (yourAge == myAge){
    //     alert('Your age same as mine');
    //     console.log('Your age same as mine');
    //   } else {
    //     alert('I am older than you');
    //     console.log('I am older than you');
    //   }
    // }

    /* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
    Try to implement it in two ways */
    let a = 4;
    let b = 3;
    if (a > b){
      console.log(`${a} is greater than ${b}`);
    } else {
      console.log(`${a} is less than ${b}`);
    }

    /* 4. Even numbers are divisible by 2 and the remainder is zero. 
    How do you check, if a number is even or not using JavaScript? */
    let randomNumber = Math.floor(Math.random()* 50);
    let evenOrNot = randomNumber % 2 === 0 ? `EVEN` : `ODD`;
    console.log(`Your number is ${randomNumber} and it's an ${evenOrNot} number`);

    /* Exercises: Level 2 */
    /* 1. Write a code which can give grades to students according to theirs scores */
    
    //to make sure grade is not greater than 100. If it is, we set it to 100
    //Then, we use Math.max(0, ...) to make sure grade is not less than 0. If it is, we set it to 0  
    // function scoreStudent(grade) {
    //   const clampedGrade = Math.max(0, Math.min(grade, 100));
    //   console.log(`The clamped grade is: ${clampedGrade}`);

    //   if (clampedGrade >= 80 && clampedGrade <= 100){
    //     return 'A';
    //   } else if (clampedGrade >= 70 && clampedGrade < 80){
    //     return 'B';
    //   } else if (clampedGrade >= 60 && clampedGrade < 70){
    //     return 'C';
    //   } else if (clampedGrade >= 50 && clampedGrade < 60){
    //     return 'D';
    //   } else if (clampedGrade >= 0 && clampedGrade < 50){
    //     return 'F';
    //   } else {
    //     return 'Invalid score';
    //   }
    // }
    // // Example usage
    // let gradeInput = prompt("Enter the student's grade: "); // Suppose the input is 120
    // gradeInput = Number(gradeInput); // Convert input to number

    // let finalGrade = scoreStudent(gradeInput); // Get the grade letter based on the clamped value
    // console.log("The student's letter grade is:", finalGrade);

    /* 2. check Season */
    // let userInputSeason = prompt("Enter the month: ").toLowerCase();
    // if (userInputSeason === "september" || userInputSeason === "october" || userInputSeason === "november"){
    //   console.log("The season is Autumn");
    // } else if (userInputSeason === "december" || userInputSeason === "january" || userInputSeason === "february"){
    //   console.log("The season is Winter");
    // } else if (userInputSeason === "march" || userInputSeason === "april" || userInputSeason === "may"){
    //   console.log("The season is Spring");
    // } else if (userInputSeason === "june" || userInputSeason === "july" || userInputSeason === "august"){
    //   console.log("The season is Summer");
    // } else {
    //   console.log("Please input a valid month name");
    // }

    /* 3. Check if a day is weekend day or a working day. 
    Your script will take day as an input */
    const today = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
    const workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    const weekends = ["saturday", "sunday"];
    if (workingDays.includes(today.toLowerCase())) {
          console.log(`${today} is a working day`);
        } else if (weekends.includes(today.toLowerCase())){
          console.log(`${today} is a weekend`);
        } else {
          console.log(`Please input a valid day`);
        }
    // another way to use prompt user to input day of today, and then use regex to convert it before if else
    // console.log(`What is the day today? ${day}`);

    /* Check how many days a month and handle leap year */
    let year = 4000;
    const leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(leapYear);

    /* Exercises: Level 1 */
    /* Create an empty object called dog */
    const dog = {
      name: "Bella",
      legs: 4,
      color: "silver",
      age: 4.3,
      bark: function () {
        return "woof woof"
      },
    };
    console.log(dog.bark());
    dog.breed = "Pomeranian";
    const getDogInfo = Object.assign({}, dog);
    console.log(getDogInfo);

    /* Exercises: Level 2 */
    const users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }
    /* Find the person who has many skills in the users object. */
    function getMostSkill () {
      let max = 1; //at least everyone has one skill
      let maxSkill = {}; //new object to store the result of finding maxSkill
      for (const key in users) {
        const user = users[key]; //fetches the user object associated with that key.
        if (user.skills.length > max) {
          maxSkill = user; //updates maxSkill to the current user object
          max = user.skills.length; //updates the max variable to reflect this user’s skill count.
        }
      }
      return maxSkill;
    }
    console.log(getMostSkill());

    /* more concise way from stackoverflow, this task hard for me*/
    // const result = Object.fromEntries([
    //   Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
    // ]);
    
    // console.log(result);

    /* Count logged in users */
    function isLogin () {
      let countLoggedIn = 0;
      for (const key in users) {
        const user = users[key];
        if (user.isLoggedIn === true){
            countLoggedIn++;
            console.log(key, user);
        }
      } return countLoggedIn;
    }          
    console.log(`${isLogin()} users has been logged in`);

    /* count users having greater than equal to 50 points from the following object */
    function pointUsers () {
      let countPoint = 0;
      for (const key in users) {
        const user = users[key];
        if (user.points >= 50) {
          countPoint++;
          console.log(key, user);
        }
      } return countPoint;
    }
    console.log(`${pointUsers()} users having points greater than equal to 50`);

    /* find MERN (MongoDB, Express.js, React.js, and Node.js) Stack Developer */
    function findMernDev () {
      let countDev = 0;
      for (const key in users) {
        const user = users[key];
        if (user.skills.includes("MongoDB") &&
            user.skills.includes("Express") &&
            user.skills.includes("React") &&
            user.skills.includes("Node")) {
          countDev++;
          console.log(`${key} is MERN Developer`);
        }
      } return countDev;
    }
    console.log(`Total MERN Developers: ${findMernDev()}`); 

    /* Set your name in the users object without modifying the original users object */
    
    /* Get all keys or properties of users object */
    const keysUsers = Object.keys(users);
    console.log(keysUsers);

    /* Get all the values of users object */
    const valueUsers = Object.values(users);
    console.log(valueUsers);

    /* Use the countries object to print a country name, capital, populations and languages. */
    const countryDetails = {
      Albania: { capital: 'Tirana', population: '2.9 million', languages: ['Albanian'] },
      Bolivia: { capital: 'Sucre', population: '11 million', languages: ['Spanish', 'Quechua'] },
      Canada: { capital: 'Ottawa', population: '37 million', languages: ['English', 'French'] },
      Denmark: { capital: 'Copenhagen', population: '5.8 million', languages: ['Danish'] },
      Ethiopia: { capital: 'Addis Ababa', population: '115 million', languages: ['Amharic'] },
      Finland: { capital: 'Helsinki', population: '5.5 million', languages: ['Finnish', 'Swedish'] },
      Germany: { capital: 'Berlin', population: '83 million', languages: ['German'] },
      Hungary: { capital: 'Budapest', population: '9.7 million', languages: ['Hungarian'] },
      Ireland: { capital: 'Dublin', population: '5 million', languages: ['Irish', 'English'] },
      Japan: { capital: 'Tokyo', population: '126 million', languages: ['Japanese'] },
      Kenya: { capital: 'Nairobi', population: '53 million', languages: ['Swahili', 'English'] },
    };

    countries.forEach(country => {
      const details = countryDetails[country];
      if (details){
        console.log(`${country} Capital: ${details.capital} Population: ${details.population} Languages: ${details.languages}`);
      } else {
        console.log(`${country}: Information is not available`);
      }
    });
    /* I am new learning Javascript, maybe it's best to use prompt the country name and we can input capital, population, languages without hardcode these */
    /* Exercises: Level 3 */
    const personAccount = {
      firstName: 'John',
      lastName: 'Doe',
      incomes: new Set(),  // Set to store incomes as objects
      expenses: new Set(),  // Set to store expenses as objects
      
      // Method to add income
      addIncome(amount, description) {
          this.incomes.add({ amount, description });
      },
      
      // Method to add expense
      addExpense(amount, description) {
          this.expenses.add({ amount, description });
      },
      
      // Method to calculate total income
      totalIncome() {
          let total = 0;
          this.incomes.forEach(income => total += income.amount);
          return total;
      },
      
      // Method to calculate total expense
      totalExpense() {
          let total = 0;
          this.expenses.forEach(expense => total += expense.amount);
          return total;
      },
      
      // Method to get account info (summary)
      accountInfo() {
          return `Account Info for ${this.firstName} ${this.lastName}: 
                  Total Income: $${this.totalIncome()}, 
                  Total Expenses: $${this.totalExpense()}, 
                  Balance: $${this.accountBalance()}`;
      },
      
      // Method to calculate account balance (total income - total expenses)
      accountBalance() {
          return this.totalIncome() - this.totalExpense();
      }
  };
  
  // Example usage:
  
  // Adding incomes
  personAccount.addIncome(2000, 'Salary');
  personAccount.addIncome(500, 'Freelance work');
  
  // Adding expenses
  personAccount.addExpense(200, 'Rent');
  personAccount.addExpense(50, 'Utilities');
  
  // Displaying account info
  console.log(personAccount.accountInfo());  // This will display total income, expenses, and balance
  
    