// Q1======================
// let fName = "safia"
// let lName = "bano"
// let fullName = fName.concat (" " +lName)
// let fullName2 = fName+ " "+ lName
// document.write("Hello" +  " "+ fullName)
// document.write("<br> ")
// document.write("Hello" +  " "+ fullName2)
// Q2===================
// let user = prompt('Enter your favorite mobile phone model')
// document.write("My favourite phone is : "+user+ "<br>" + " Length is : " +user.length)
// Q3=================

// let word = prompt("Enter your word")
// let indWord = prompt("Enter your single letter")
// let index = word.indexOf(indWord)
// document.write('String :'+ word+"<br>"+" index :"+ index )
// Q4==================

// let word = prompt('Enter your word')
// let indexWord = prompt('Enter your letter')
// let index = word.lastIndexOf(indexWord)
// document.write("string : "+ word)
// document.write("<br>")

// document.write("Last index of 'l' : "+ index)
// Q5 =======================
// let userValue = prompt('Enter your word')
// let userInd = +prompt('Enter your single word')
// let singleWord = userValue.charAt(userInd)
// document.write('String :'+ userValue + " <br> "+ "Charecter at index is : "+ userInd +" "  + singleWord)

// Q6  =======================
// let fName = "safia"
// let lName = "bano"
// let fullName = fName.concat (" " +lName)
// let fullName2 = fName+ " "+ lName
// document.write("Hello" +  " "+ fullName)
// document.write("<br> ")
// document.write("Hello" +  " "+ fullName2)
// Q7  =======================

// let user = prompt('enter city name',"hyderabad")
// let b = user.replace(user,"islamabad")

// document.write("city : "+ user)
// document.write("<br>")
// document.write("after replacement : "+ b)
// Q8  =======================

// let message = "Ali and Sami are best friends. They play cricket and football together."
// let b = message.replace(/and/g,"&")
// document.write(b)
// Q9  =======================
// let num = "472" ;
// document.write("type of : "+typeof num + num)
// document.write("<br>")
// num = parseInt(num)
// document.write("type of : "+typeof num + num)
// Q10=================
// let word ="peanuts"
// let b =  word.toUpperCase()
// document.write("user input: "+ word)
// document.write("<br>")
// document.write("UPPER CASE :"+ b)
// Q11=================
// let title = "javascript"
// console.log("Userinput :"+ title)
// let titleAns = title[0].toUpperCase() + title.slice(1)
// console.log("Titlecase :"+ titleAns)
// Q12 =================
// let num = 35.36 ;
// document.write('Number is :'+ num)
// let dotRemove = num.toString()
// let ans = dotRemove.replace(".","")

// document.write('<br> ')
// document.write('Result: '+ ans)
// Q13 =============
// let userName = prompt('Enter your Name')
// if(/[@,.! 33 44 46 64 ]/.test(userName) ){
//     alert('Enter a valid username')
// }else{
//     alert("Username:  " +userName)
// }
// Q14 =============
// let user = prompt('Enter your item')
// let a = ["cake", "apple pie", "cookie", "chips","patties"]
// let flag = false
// for(let i = 0 ; i < a.length ; i++){
//   if(user === a[i]){
//     alert(a[i]+" is available at index  " +i+"  in our bakery")
// flag = true
// break
//    }
// }
// if(!flag){
//     alert("we are sorry "+ user +" is not avilable in our bakery")
// }


// Q15================

// let password = prompt("Enter your password");
// if (
//     password.length >= 6 &&
//     /[0-9]/.test(password) &&
//     /[a-zA-Z]/.test(password)
//   ) {
//     alert("Password is valid!");  
//   } else {
//     alert("Invalid password. Please make sure it meets the specified requirements.");
//   }
  
// Q16================

// let uni = "university of karachi"
// for(let i = 0 ; i < uni.length ; i++){

//     document.write(uni[i] + "<br>")
// }
// Q17================
// let userinput = prompt('Enter your word');
// let lastCh = userinput.charAt(userinput.length - 1);
// console.log('Last character of input:', lastCh);

// Q18================

const String = "The quick brown fox jumps over the lazy dog";
const targetWord = "the";
const occurrences = String.split(/\b/gi).filter(word => word.toLowerCase() === targetWord).length;

console.log(`The word  occurs ${occurrences} time(s) in the given string "${targetWord}".`);

