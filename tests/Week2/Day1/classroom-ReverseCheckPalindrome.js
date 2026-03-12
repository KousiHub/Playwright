function checkForPalindrome(palindromeWord){

    let reverseWord = "";
    let lengthOfString = palindromeWord.length;
    console.log("Length of the word is",lengthOfString);

    for (let index = lengthOfString-1; index >=0; index--)
    {
        reverseWord = reverseWord + palindromeWord.charAt(index);
    }
    console.log("Reverse of the word is" ,reverseWord);

    if(palindromeWord === reverseWord){
        console.log("This is a palindrome");
        
    }
    else{
        console.log("This is not a palindrome");
        
    }  

}
checkForPalindrome("madam");