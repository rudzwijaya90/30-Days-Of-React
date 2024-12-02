// Import the arrays from the other files
// import { countries } from 'countries.js';  // Path to the countries.js file
// import { webTechs } from 'web_techs.js';   // Path to the web_techs.js file



// console.log(countries);


/* Question 2, 3, 4 based on the following two arrays: users and product */
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  // 1. signUp Function
    function signUp(user) {
    const { username, email, password } = user;
    
    // Check if username or email already exists
    const existingUser = users.find(existing => existing.username === username || existing.email === email);
  
    if (existingUser) {
      console.log("User already exists with that username or email.");
      return;
    }
  
    // If no conflict, create a new user and add to the users array
    const newUser = {
      ...user,
      // _id: Math.random().toString(36).substr(2, 9), //substr deprecated
      _id: Math.random().toString(36).slice(2, 11), // Generate a random ID
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false,
    };
  
    users.push(newUser);
    console.log(`${newUser.username} signed up successfully.`);
  }
  
  // 2. signIn Function
  function signIn(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      user.isLoggedIn = true;
      console.log(`${user.username} signed in successfully.`);
    } else {
      console.log("Invalid username or password.");
    }
  }
  
  // 3. rateProduct Function
  function rateProduct(productId, userId, rating) {
    if (rating < 0 || rating > 5) {
      console.log("Rating must be between 0 and 5.");
      return;
    }
  
    const product = products.find(product => product._id === productId);
    const user = users.find(user => user._id === userId);
  
    if (!product) {
      console.log("Product not found.");
      return;
    }
  
    if (!user || !user.isLoggedIn) {
      console.log("User is not logged in.");
      return;
    }
  
    // Check if the user has already rated the product
    const existingRating = product.ratings.find(rating => rating.userId === userId);
    if (existingRating) {
      // If the user has already rated, update the rating
      existingRating.rate = rating;
      console.log(`Updated rating for ${product.name}.`);
    } else {
      // Otherwise, add a new rating
      product.ratings.push({ userId, rate: rating });
      console.log(`Rating added for ${product.name}.`);
    }
  }
  
  // 4. averageRating Function
  function averageRating(productId) {
    const product = products.find(product => product._id === productId);
  
    if (!product) {
      console.log("Product not found.");
      return;
    }
  
    if (product.ratings.length === 0) {
      console.log("No ratings available for this product.");
      return;
    }
  
    const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    const average = totalRating / product.ratings.length;
  
    console.log(`Average rating for ${product.name} is: ${average}`);
  }
  
  // 5. likeProduct Function
  function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);
    const user = users.find(user => user._id === userId);
  
    if (!product) {
      console.log("Product not found.");
      return;
    }
  
    if (!user || !user.isLoggedIn) {
      console.log("User must be logged in to like a product.");
      return;
    }
  
    const alreadyLiked = product.likes.includes(userId);
  
    if (alreadyLiked) {
      // If the product is already liked by the user, remove the like
      product.likes = product.likes.filter(like => like !== userId);
      console.log(`${user.username} unliked the ${product.name}.`);
    } else {
      // Otherwise, add the like
      product.likes.push(userId);
      console.log(`${user.username} liked the ${product.name}.`);
    }
  }
  
  // Example usage:
  
  // 1. Register a new user
  signUp({
    username: 'Bambang',
    email: 'bambang@gmail.com',
    password: 'password123',
  });
  
  // 2. Sign in with a valid user
  signIn("Asab", "123456"); // Asab signs in
  
  // 3. Rate a product
  rateProduct("eedfcf", "fg12cy", 4); // Asab rates the mobile phone
  
  // 4. Calculate the average rating of a product
  averageRating("eedfcf"); // Calculate the average rating of the mobile phone
  
  // 5. Like a product
  likeProduct("eedfcf", "fg12cy"); // Asab likes the mobile phone
  
  // 6. Like a product again (unlike it)
  likeProduct("eedfcf", "fg12cy"); // Asab unlikes the mobile phone


  /* Exercises from Function */
  /* 1. Declare a function fullName and it takes firstName, 
  lastName as a parameter and it returns your full - name. */
  function fullName(firstName, lastName) {
    return firstName + lastName;
  }

  /* Declare a function addNumbers and 
  it takes two two parameters and it returns sum */
  function addNumbers(a, b) {
    return a + b;
  }

  /* Area of a circle is calculated as follows: area = π x r x r. 
  Write a function which calculates _areaOfCircle */
  function areaOfCircle (pi, r) {
    return pi * r * r;
  }

  /* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
  Write a function which convert oC to oF convertCelciusToFahrenheit. */
  function convertCelciusToFahrenheit (temp) {
    return (temp * 9 / 5) + 32;
  }
  console.log(convertCelciusToFahrenheit(32));

  /* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
  Write a function which calculates bmi */
  function calculateBmi (weight, height) {
    let result = weight * 10000 / (height * height) //multiply 10000 to make into Kg
    if (result < 18.5){
        return `BMI: ${result.toFixed(2)} You are Underweight`;
    } else if (result >= 18.5 && result <= 24.9){
        return `BMI: ${result.toFixed(2)} You have Normal weight`;
    } else  if (result >= 25 && result <= 29.9){
        return `BMI: ${result.toFixed(2)} You are Overweight`;
    } else {
        return `BMI: ${result.toFixed(2)} You are Obese`;
    }
  }
  console.log(calculateBmi(52, 170));
  console.log(calculateBmi(62, 170));

  /* Write a function called checkSeason, it takes a month parameter and return the seasons:
  Autumn, Winter, Spring, or Summer. */
  function checkSeason () {
    const date = new Date();
    const month = date.getMonth() + 1;
    switch (month) {
        case 12:
        case 1:
        case 2:
          console.log("Winter");
          break;
        case 3:
        case 4:
        case 5:
          console.log("Spring");
          break;
        case 6:
        case 7:
        case 8:
          console.log("Summer");
          break;
        case 9:
        case 10:
        case 11:
          console.log("Autumn");
          break;
        default:
          console.log("Invalid month");
      }
  }
  
  checkSeason();

  /* Exercises: Level 2 */
  /* Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
  Write a function which calculates value or values of a quadratic equation, 
  solveQuadEquation. */
  function solveQuadEquation (a, b, c) {
    let root1, root2;
    // calculate discriminant
    let discriminant = b * b - 4 * a * c;
    
    //condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
    }
  }
  solveQuadEquation(1, 4, 4);
  solveQuadEquation(1, -1, -2);
  solveQuadEquation(1, 7, 12);

  /* Declare a function name printArray.
   It takes array as a parameter and it prints out each value of the array. */
   function printArray (arr){
    for (const element of arr){
        console.log(element);
    }
   }
   printArray([2, 5, 9, 10]);

   /* Write a function name showDateTime which shows time in this format: 
   08/01/2020 04:08 using the Date object. */
   function showDateTime () {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1; //because getMonth start with 0 index;
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    // Use padStart to ensure two digits
    date = String(date).padStart(2, '0');
    month = String(month).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    console.log(`${month}/${date}/${year} ${hours}:${minutes}`);
   }
   showDateTime();

   /* Declare a function name swapValues. This function swaps value of x to y */
   function swapValues (x, y) {
        // Destructuring to swap x and y
        [x, y] = [y, x];
        console.log(`Swapped values: x = ${x}, y = ${y}`);
   }
   swapValues(4, 5);

   /* Declare a function name reverseArray. It takes array as a parameter and
    it returns the reverse of the array (don't use method). */
    function reverseArray (array) {
        let output = [];
        for (let i = array.length - 1; i >= 0; i--){
            output.push(array[i]);
        }
        return output;
    }
    console.log(reverseArray([1, 2, 3, 4, 5]))

    /* Declare a function name capitalizeArray. It takes array as 
    a parameter and it returns the - capitalizedarray. */
    function capitalizeArray(arr) {
        return arr.map((element) => {
        // Capitalize the first character and make the rest lowercase
          return element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase();
        });
      }
      console.log(capitalizeArray(["hello", "world"]));

    /* Declare a function name addItem. It takes an item parameter and 
    it returns an array after adding the item */
    let newArr = [];
    function addItem (item) {
        newArr.push(item);
        return newArr;
    }
    console.log(addItem("clothes"));

    /* Declare a function name removeItem. It takes an index 
    parameter and it returns an array after removing an item */
    function removeItem (index) {
        newArr.pop(index);
        return newArr;
    }
    console.log(removeItem("clothes"));

    /* Declare a function name evensAndOdds . It takes a positive integer 
    as parameter and it counts number of evens and odds in the number */
    // Initialize counts outside the function
    let evenCount = 0; // Initialize evenCount outside the function
    let oddCount = 0;  // Initialize oddCount outside the function

    function evensAndOdds(number) {
        // Check if the input is a valid integer
        if (!Number.isInteger(number)) {
            return "Please input a valid integer";
        }

        // If the number is even, increment evenCount
        if (number % 2 === 0) {
            evenCount++;
        } 
        // If the number is odd, increment oddCount
        else {
            oddCount++;
        }

        // Return the updated counts
        return { evenCount, oddCount };
    }
    
    console.log(evensAndOdds(3));
    console.log(evensAndOdds(4));
    console.log(evensAndOdds(8));
    console.log(evensAndOdds("5"));

    /* Write a function which takes any number of arguments 
    and return the sum of the arguments */
    const sumNumber = (...number) => {
        let sum = 0;
        for (const element of number) {
            sum += element;
        }
        return sum;
    }
    console.log(sumNumber(1, 2, 3, 4));

    /* Declare a function name userIdGenerator. 
    When this function is called it generates seven character id. 
    The function return the id */
    const userIdGenerator = () => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let counter = 0;
        // Generate a random length between 8 and 16
        //const length = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
        //const length = Math.floor(Math.random() * 7) + 1;

        /* or use
        // Loop 7 times to generate a string of 7 random characters
        for (let i = 0; i < 7; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        } */
        while (counter < 7) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
        }
        return result;
    }
    console.log(userIdGenerator());


    /* Exercises: Level 3 */
    /* 1. Declare a function name userIdGeneratedByUser. 
    It doesn’t take any parameter but it takes two inputs using prompt(). 
    One of the input is the number of characters and 
    the second input is the number of ids which are supposed to be generated. */
    const userIdGeneratedByUser = () => {
        let numberCharacters = prompt("Please input the number of characters");
        let numberId = prompt("Please input the number of IDs");
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        
        //Convert inputs to integers
        numberCharacters = parseInt(numberCharacters, 10); //10 is base-10 system. read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        numberId = parseInt(numberId, 10); 

        if (isNaN(numberCharacters) || isNaN(numberId)){
            console.error("Please enter valid numbers");
            return;
        }

        let allIds = [];  // Array to store generated IDs
        for (let i = 0; i < numberId; i++){
          let id = "";
          for (let j = 0; j < numberCharacters; j++){
            id += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          allIds.push(id);
        }

        console.log(`Generating ${numberId} user IDs with ${numberCharacters} characters each.`);
        return allIds.join("\n");
    }
    //console.log(userIdGeneratedByUser());



    /* Write a function generateColors which can generate any number 
    of hexa or rgb colors */
    const generateColors = (colorType, numColors) => {
      let allColors = [];  // Array to store generated colors
      // Validate numColors input
      if (isNaN(numColors) || numColors <= 0) {
          return "Please input a valid number for number of colors";
      }

      if (colorType == "hexa"){
       const hexaColor = () => {
          
          let letter = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++){
            color += letter.charAt(Math.floor(Math.random() * letter.length));
           } return color;
        } 
        for (let i = 0; i < numColors; i++){
          allColors.push(hexaColor());
        }
      } 

      else if (colorType == "rgb") {
        const rgbColor = () => {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          return `rgb(${r}, ${g}, ${b})`;
        } 
        for (let i = 0; i < numColors; i++){
          allColors.push(rgbColor());
        }
        
      } else {
        return "Please input with 'hexa' or 'rgb'";
      }
      return allColors;
    }

    console.log(generateColors("hexa", 3));
    console.log(generateColors("rgb", 5));
    console.log(generateColors("abc", -1));
    console.log(generateColors("abc", 1));

    /* Call your function shuffleArray, 
    it takes an array as a parameter and it returns a shuffled array */
    const shuffleArray = (array) => {
      let result = array.sort(() => 0.5 - Math.random()); //gives 0.5 if close to 0, give -0.5 if close to 1
      return result;
    }
    
    /* This example taken from net */
    const shuffleArray2 = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Get a random index
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }
    console.log(shuffleArray([40, 100, 1, 5, 25, 10]));
    console.log(shuffleArray2([40, 100, 1, 5, 25, 10]));
  
    /* Call your function factorial, it takes a whole number as a parameter and 
    it return a factorial of the number */
    const factorial = (numbers) => {
      let result = 1;
      for (let i = 2; i <= numbers; i++){
        result *= i;
      }
      return result;
    }
    console.log(factorial(6));
    console.log(factorial(5));

    /* Call your function isEmpty, it takes a parameter 
    and it checks if it is empty or not */
    const isEmpty = (parameter) => {
      if (parameter == null || parameter == undefined){
        return `Parameter is empty`;
      } else {
        return `Parameter is not empty. There is "${parameter}"`;
      }
    }
    console.log(isEmpty([5, 9, 1, 10, 6]));
    console.log(isEmpty("hello"));
    console.log(isEmpty());

    /* Write a function called average, it takes an array parameter and returns 
    the average of the items. Check if all the array items are number types. 
    If not give return reasonable feedback. */
    const average = (arr) => {
      // Check if input is an array
      if (!Array.isArray(arr)){
        return `Please provide an array`;
      }
      // Check if array contains only numbers
      if (arr.some(num => isNaN(num))){
        return `Please provide an array of numbers`;
      }

      let result = 0;
      for (let i = 0; i < arr.length; i++){
        result += arr[i];
      }
      let average = result / arr.length;
      return average.toFixed(3); //toFixed is a method to show decimal which is 3
    }
    console.log(average([5, 2, 7])); // 4.667
    console.log(average([1.005]));    // 1.005
    console.log(average(5));          // Please provide an array
    console.log(average([5, "a", 7])); // Please provide an array of numbers

    
    /* 9. Higher Order Function */
    // const numbers = [1, 2, 3, 4]

    // const sumArray = arr => {
    //   let sum = 0;
    //   arr.forEach((element) => sum += element);
    //   return sum;
    // }

    // console.log(sumArray(numbers));
    /* Destructuring an array of objects */
    const languages = [
      { lang: 'English', count: 91 },
      { lang: 'French', count: 45 },
      { lang: 'Arabic', count: 25 },
      { lang: 'Spanish', count: 24 },
      { lang: 'Russian', count: 9 },
      { lang: 'Portuguese', count: 9 },
      { lang: 'Dutch', count: 8 },
      { lang: 'German', count: 7 },
      { lang: 'Chinese', count: 5 },
      { lang: 'Swahili', count: 4 },
      { lang: 'Serbian', count: 4 },
    ]
    
    for (const { lang, count } of languages) {
      console.log(`The ${lang} is spoken in ${count} countries.`)
    }

    /* Exercises */
    const person = {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      age: 250,
      country: 'Finland',
      job: 'Instructor and Developer',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
      ],
      languages: ['Amharic', 'English', 'Suomi(Finnish)'],
    }
    
    const {firstName, lastName, age, country, job, skills, languages:[first, second, third]} = person;
    
    const getPersonInfo = () => {
      // Use join() to add a space after each comma
      const skillsList = skills.join(', ');
      console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skillsList}. He speaks ${first}, ${second}, and a little bit of ${third}`);
      };
    getPersonInfo();

    /* without destructuring */
    const getPersonInfo2 = () => {
      // Use join() to add a space after each comma
      const skillsList = person.skills.join(', ');
      console.log(`${person.firstName} ${person.lastName} lives in ${person.country}. He is ${person.age} years old. He is an ${person.job}. He teaches ${skillsList}. He speaks ${person.languages[0]}, ${person.languages[1]}, and a little bit of ${person.languages[2]}`);
      };
    getPersonInfo2();

    /* not exercise, just training forEach */
    const countries = ['finland', 'estonia', 'sweden', 'norway', 'poLAnDiA']
    // countries.forEach((country, i) => console.log(i, country.toUpperCase()))

    const firstLetterUpperCase = () => {
      countries.forEach((country) => {
        const firstLetter = country[0].toUpperCase();
        const theRest = country.slice(1).toLowerCase();
        console.log(firstLetter + theRest);
      })
    }

    firstLetterUpperCase();

    /* Exercises from functional programming chapter */
    /* 1. Print the price of each product using forEach */
    const productsOfArray = [
      { product: 'banana', price: 3 },
      { product: 'mango', price: 6 },
      { product: 'potato', price: ' ' },
      { product: 'avocado', price: 8 },
      { product: 'coffee', price: 10 },
      { product: 'tea', price: '' },
    ]

    function priceProducts() {
      productsOfArray.forEach((element) => {
        if (typeof element.price === 'string' && !element.price.trim()) {
          return false;
        } else {
          return element.price;
        }  
      })
    }
    priceProducts();

    /* 2. Print the product items as follows using forEach */
    productsOfArray.forEach((element) => {
      // `!element.price.trim()` removes any leading or trailing whitespace from the price string
      // and checks if the remaining string is empty.
      if (typeof element.price === 'string' && !element.price.trim()) {
        // If 'price' is falsy (string) OR if the price contains only whitespace:
        console.log(`The price of ${element.product} is unknown.`);
      } else {
        console.log(`The price of ${element.product} is ${element.price} euros.`);
      }
    });
      
    /* 3. Calculate the sum of all the prices using forEach */
    let sum = 0;
    productsOfArray.forEach((element) => {
      if (typeof element.price === 'string' && !element.price.trim()) {
        sum += 0;
      } else {
        sum += element.price;
      } 
    })
    console.log(sum);

    /* 4. Create an array of prices using map and store it in a variable prices */
    productsOfArray.map((item) => {
      const prices = item.price;
      if (typeof prices === 'string' && !prices.trim()) {
        return false;
      } else {
        console.log(prices);
      }
    });

    /* 5. Filter products with prices */
    productsOfArray.filter((item) => {
      if(typeof item.price === 'string' && !item.price.trim()){
        return false;
      } else {
        console.log(item.price);
      }
    });

    /* 6. Use method chaining to get the sum of the prices(map, filter, reduce) */
    let sumOfPrices = productsOfArray.map((currentArray) => {
      return currentArray.price;
    }).filter((element) => {
      if (typeof element === "string" && !element.trim()){
        return false;
      } else {
        return element;
      }
    }).reduce((acc, element) => acc += element);
    
    console.log(sumOfPrices);

    /* 7. Calculate the sum of all the prices using reduce only */
    const totalPrice = productsOfArray.reduce((accumulator, currentValue) => {
      if (typeof currentValue.price === "string" && !currentValue.price.trim()){
        return accumulator;  // Skip invalid price (empty string or space)
      } else {
        return accumulator += Number(currentValue.price) || 0;  // Add valid price
      }
    }, 0);
    
    console.log(totalPrice);

    /* 8. Find the first product which doesn't have a price value */
    const invalidPrice = productsOfArray.find((element) => {
      return typeof element.price === "string" && !element.price.trim();
    })

    if (invalidPrice) {
      console.log(invalidPrice.product);
    } else {
      console.log("No product with invalid price found");
    }

    /* 9. Find the index of the first product which does not have price value */
    console.log(productsOfArray.indexOf(invalidPrice)); // result 2
    
    /* 10. Check if some products do not have a price value */
    const someDontHaveValue = productsOfArray.some((element) => {
      return typeof element.price === "string" && !element.price.trim();
    })
    console.log(someDontHaveValue);

    /* 11. Check if all the products have price value */
    const everyHavePrice = productsOfArray.every((element) => {
      return typeof element.price === "string" && !element.price.trim();
    })
    console.log(everyHavePrice)

    /* Explain the difference between forEach, map, filter and reduce

    Explain the difference between filter, find and findIndex

    Explain the difference between some and every */

    /* Exercises classes */
    /* 1. Create an Animal class. The class will have name, age, color, legs properties 
    and create different methods */
    class Animal {
      constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
      }
      isDifferent(){
        let difference = this.type ? 'Cat' : 'Dog'
        return difference;
      }
    }
      
    /* Create a Dog and Cat child class from the Animal Class. */
    class Dog extends Animal{
      constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.type = 'Dog';
      } 
      // Overriding isDifferent in the Dog class
      isDifferent() {
        return 'I am a Dog, and I bark!';
      }
    }
    
    class Cat extends Animal{
      constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.type = 'Cat';
          } 
      // Overriding isDifferent in the Cat class
        isDifferent() {
          return 'I am a Cat, and I meow!';
      }
    }
      
      
     const bella = new Dog('Bella', 'Von Anna', 'silver', 4);
     const yupie = new Cat('Yupie', 'Santoso', 'abu-abu', 4);
     console.log(bella);
     console.log(yupie);
    
    
    /* Exercises level 3. Let's try to develop a program which calculate measure of central tendency of a 
    sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
    In addition to those measures find the min, max, count, percentile, and 
    frequency distribution of the sample.  You can create a class called Statistics and 
    create all the functions which do statistical calculations as method for the Statistics class*/

    class Statistics {
      constructor(ages) {
        this.ages = ages;  // Initialize the 'ages' property of the instance
      }
      count() {
        return this.ages.length; // Access 'ages' using 'this.ages'
      }
      sum() {
        let sumAll = 0;
        this.ages.forEach((age) => sumAll += age);
        return sumAll;
      }
      min() {
        return Math.min(...this.ages); //or use sort() method and find the first and last index
      }
      max() {
        return Math.max(...this.ages); //or use sort() method and find the first and last index
      }
      range() {
        return Math.max(...this.ages) - Math.min(...this.ages);
      }
      mean() {
        let mean = 0;
        mean = this.sum() / this.count();  // Calculate the mean using sum and count
        return mean;
      }
      median() {
        const newAges = this.ages.slice(); //to avoid changing the original ages array
        const sortAges = newAges.sort((a, b) => a - b); //necessary to sort before counting median in case ages not sorted
        const middle = Math.floor(sortAges.length / 2);
        const result = sortAges.length % 2 === 0
          ? (sortAges[middle - 1] + sortAges[middle]) / 2
          : sortAges[middle];
        return result;
      }
      mode() {
        let map = {};
        for (let i = 0; i < this.count(); i++){
            if (map[this.ages[i]] === undefined) {
              map[this.ages[i]] = 0;
            }
              map[this.ages[i]]++;
          }
        
        let frequentNumber = 0;
        let mode;
          for (const age in map){
            if (map[age] > frequentNumber){
              frequentNumber = map[age];
              mode = age;
            }
          }
          let result = parseInt(mode);
          return {mode: result, count: frequentNumber};
      }
      var() {
        const variance = this.ages.reduce((acc, el) => {
        const difference = el - this.mean();
        const squared = difference ** 2;
          return acc + squared;
        }, 0) / this.count();
          return parseFloat(variance.toFixed(1)); //parseFloat keep the result as a number and toFixed rounded to 1 decimal places
      }
      std() {
        const std = Math.sqrt(this.var());
        return parseFloat(std.toFixed(1));
      }
      freqDist(){ //in tutorial, the result format should be (frequency, value)
        let freqMap = {};
        // Step 1: Calculate frequency of each number
        for (let i = 0; i < this.count(); i++){
          const value = this.ages[i];
          freqMap[value] = (freqMap[value] || 0) + 1;
        }
        // Step 2: Calculate percentage frequency
        let freqArray = [];
        const totalCount = this.count();
        for (let value in freqMap) {
          const count = freqMap[value];
          const percentage = (count / totalCount) * 100;
          freqArray.push([parseFloat(percentage.toFixed(1)), parseInt(value)]);
        }
        // Step 3: Sort the result (optional, depending on requirement)
        freqArray.sort((a, b) => b[0] - a[0]); //Sorting by percentage (descending order);
        // Format the output to match the tutorial style
        return freqArray.map(item => `(${item[0]}, ${item[1]})`);
      }
    }
    
    ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    // Using the constructor version:
    const statistics = new Statistics(ages);
    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range()) // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    // console.log('Variance: ',statistics.var()) // 17.5
    console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
