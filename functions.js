//js function that accepts a string as a parameter and find the longest word
//within the string.
/*
1. define a function that takes a string as a parameter
2. split the string into arrays of words
3. save the first word into a variable called longest 
5. start looping through the array of words and compare each word to the word
stored in our variable longest.
6. if the word in our loop is longer than the word in the longest variable
we set the longest variable to be equal to that word.
7. return the longest word 
*/

let findLongestWord = (stringOfWords) => {
  let arrayOfWords = stringOfWords.split(' '); 
  let longest = arrayOfWords[0];
  
  
  for(let i = 0; i < arrayOfWords.length; i = i + 1) {
    if(arrayOfWords[i].length > longest.length) {
      longest = arrayOfWords[i];  
    }
  }
  return longest; 
}

console.log(findLongestWord('which animal is bigger than an elephant'));

//js function that accepts a string as a parameter and counts the number of vowels within the string 
/*
1. define a function that takes a string as a parameter 
2. split the string into arrays of characters 
3. create a variable that stores array of vowels 
4. create a variable that stores number of vowel and set it to 0 to start with 
5. start looping through the array of characters
6. if the characters in our loop is included in our vowel array, 
we want to increase our variable that stores our number of vowels by 1. 
7. return the variable that stores number of vowels.
*/

let countNumberOfVowels = (stringOfWords) => {
  let arrayOfCharacters = stringOfWords.split('');
  let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
  let numberOfVowels = 0;
  
  for(let i = 0; i < arrayOfCharacters.length; i++) {
    console.log(arrayOfCharacters[i]); 
    if(arrayOfVowels.includes(arrayOfCharacters[i])) {
      numberOfVowels = numberOfVowels + 1;
      console.log('this is a vowel')
      console.log(arrayOfCharacters[i]);
      
    } 
  }
  return numberOfVowels; 
}
console.log(countNumberOfVowels('How are you Ade'));  