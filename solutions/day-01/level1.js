const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  /* 1. Declare an empty array; */
  const emptyArray = [];
  /* 2. Declare an array with more than 5 number of elements */
  const fiveArray = ["a", "b", "c", "d", "e"];
  /* 3. Find the length of your array */
  console.log(fiveArray.length);
  /* 4. Get the first item, the middle item and the last item of the array */
  console.log(fiveArray[0], fiveArray[Math.floor(fiveArray.length / 2)], fiveArray[4]);
  /* 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5 */
  const mixedDataTypes = ["1", 1, true, "hello", "world", "javascript"];
  console.log(mixedDataTypes.length);
  /* 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */
  const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  /* 7. Print the array using console.log() */
  console.log(itCompanies);
  /* 8. Print the number of companies in the array */
  console.log(itCompanies.length);
  /* 9. Print the first company, middle and last company */
  let Middle = Math.floor(itCompanies.length / 2);
  let Last = itCompanies.length - 1;
  console.log(itCompanies[0], itCompanies[Middle], itCompanies[Last]);
  
  /* 10. Print out each company */
  itCompanies.forEach(company => {
    console.log(company);
  });
  /* 11. Change each company name to uppercase one by one and print them out */
  console.log(itCompanies.toString().toUpperCase());
  
  /* 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
    let sentence = '';
    if (itCompanies.length > 1) {
    sentence = itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies[itCompanies.length - 1];
    } else {
        // If only one company in the array, just use the company itself
        sentence = itCompanies[0];
    }
    
    sentence += ' are big IT companies.';

console.log(sentence);
// 13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found
function availableCompany(company){
    if(itCompanies.includes(company)){
        return company;
    } else {
        return `${company} is not found`;
    }
}

console.log(availableCompany("Google"));
console.log(availableCompany("Tesla"));

/* 14. filter companies which have more than one "o" without filter method */
    let newArray = [];
    itCompanies.forEach(company => {
        // console.log(company);
        let word = company.split("");
        let count = 0;
        // console.log(word);
        for (let i = 0; i < word.length; i++){
            if(word[i] === "o"){
                count ++;
                if(count > 1){
                    newArray.push(company);
                    break;
                } 
            }
        }
    });
    console.table(newArray);

    /* 15. Sort the array using sort() method */
    // console.log(itCompanies.sort());

    /* 16. Reverse the array using reverse() method */
    //console.log(itCompanies.reverse());

    /* 17. Slice out the first 3 companies from the array */
    // console.log(itCompanies.slice(0, 3));
    
    /* 18. Slice out the last 3 companies from the array */
    // console.log(itCompanies.slice(-3));

    /* 19. Slice out the middle IT company or companies from the array */
    let middleCompanyIndex = Math.floor(itCompanies.length / 2);
    if (itCompanies.length % 2 === 0) { //if even
        let middleCompanies = itCompanies.slice(middleCompanyIndex - 1, middleCompanyIndex + 1);
        console.log(middleCompanies);
    } else {
        let middleCompany = itCompanies.slice(middleCompanyIndex, middleCompanyIndex + 1);
        console.log(middleCompany);
    }

    /* 20. Remove the first IT company from the array */
    // console.log(itCompanies.splice(0, 1));

    /* 21. Remove the middle IT company or companies from the array */ 
    // if (itCompanies.length % 2 === 0) { //if even
    //     let middleCompanies = itCompanies.splice(middleCompanyIndex - 1, 2); // Remove 2 elements starting from (middleCompanyIndex - 1)
    //     //console.log("Middle companies (even):", middleCompanies);
    //     console.log("Updated companies:", itCompanies);
    // } else {
    //     let middleCompany = itCompanies.splice(middleCompanyIndex, 1); // Remove 1 element at middleCompanyIndex
    //     //console.log("Middle company (odd):", middleCompany);
    //     console.log("Updated companies:", itCompanies);
    // } // Comment out because splice change the original array

    /* 22. Remove the last IT company from the array */
    itCompanies.pop();
    console.log(itCompanies);

    /* 23. Remove all IT companies */
    console.log(itCompanies.splice());
