//js function that accepts a string as a parameter and find the longest word
//within the string.
/*
1. define a function that takes a string as a parameter
2. split the string into arrays of words
3. save the first word into a variable called longest 
5. use the forEach method to compare each word to the word
stored in our variable longest.
6. if the word in our array is longer than the word in the longest variable
we set the longest variable to be equal to that word.
7. return the longest word 
*/

let findLongestWord = (stringOfWords) => {
  let arrayOfWords = stringOfWords.split(' '); 
  let longest = arrayOfWords[0];
  
  arrayOfWords.forEach(arrayOfWords => {
    if(arrayOfWords.length > longest.length) {
      longest = arrayOfWords;
    }
  });
  return longest; 
}

console.log(findLongestWord('which animal is bigger than an elephant'));

//js function that accepts a string as a parameter and counts the number of vowels within the string 
/*
1. define a function that takes a string as a parameter 
2. split the string into arrays of characters 
3. create a variable that stores array of vowels 
4. create a variable that stores number of vowel and set it to 0 to start with 
5. use the filter method to check every element in the array 
6. if the charaters in our array is included in our vowel array, 
we want to increase our variable that stores our number of vowels by 1. 
7. return the variable that stores number of vowels.
*/

let countNumberOfVowels = (stringOfWords) => {
  let arrayOfCharacters = stringOfWords.split('');
  let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
  let numberOfVowels = 0;
  
  arrayOfCharacters.filter(arrayOfCharacters => {
    if(arrayOfVowels.includes(arrayOfCharacters)) {
      numberOfVowels = numberOfVowels + 1;
      
      
    } 
  });
  return numberOfVowels; 
}
console.log(countNumberOfVowels('How are you Ade'.toLowerCase())); 

//Accepts two arguments(string & letter)
//Count the number of occurrences of the letter within the string

let countNumberOfLetter = (stringOfWords, letter) => {
  let arrayOfCharacters = stringOfWords.split('');
  let numberOfLetter = 0
  
  arrayOfCharacters.map(arrayOfCharacters => {
    if(letter.includes(arrayOfCharacters)) {
      numberOfLetter++;
    }
  });
  return numberOfLetter;
}
console.log(countNumberOfLetter('how are you', 'o'));

//Accepts a number as parameter 
//Check to see whether it's prime or not
/*
number that is divisible by itself and 1
*/

let isItPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}
console.log((isItPrimeNumber(15))); 


//checks whether a passed string is palindrome or not
/*
1. define a function that takes a string as a parameter
2. split the string into array of characters 
3. create a variable that stores the reversed characters 
4. if the paramter equals the reversed variable, using the join method 
on the reversed variable, return true else return false 
*/

let isStringPalindrome = (stringOfWord) => {
  let arrayOfCharacters = stringOfWord.split(''); 
  let wordReversed = arrayOfCharacters.reverse();
  
  if(stringOfWord === wordReversed.join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(isStringPalindrome('run')); 

/*
write a program which iterates the integers from 1 to 100. 
for multiples of 3, print "Fizz", for multiples of 5, print "Buzz"
for numbers which are multiples of 3 and 5, print "FizzBuzz"
*/

for(let i = 1; i < 101; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}




