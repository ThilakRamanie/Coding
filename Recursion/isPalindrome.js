// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str, i=0){
    // add whatever parameters you deem necessary - good luck!
    let j= str.length - (i+1);
    console.log(str+' '+str[i]+' '+str[j]);
    if(i===j || i===str.length-1) {
        return true;
    }
    if(str[i]!==str[j]) return false;
    return isPalindrome(str, ++i)
  }