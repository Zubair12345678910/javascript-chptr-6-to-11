
// <------------ chptr 1 ------------->


var cityName = prompt("enter your city Name")
if(cityName == "karachi")
alert("welcome to city of light")

 else if(cityName == "lahore")
alert("welcome to metro of city")

else if(cityName == "islamabad")
alert("welcome to cleanest city")

else{
    alert("city is not found")

}

// <------------ chptr 2 ------------->



var gender = prompt("enter your gender")
if(gender == "male")
alert("welcome to city of light")

 else if(gender == "female")
alert("welcome to metro of city")

else{
    alert("welcome to other person")

}

// <------------ chptr 3 ------------->


var traficcolor = prompt("trafic signal color")
if(traficcolor == "red")
alert("must stop")

 else if(traficcolor == "yellow")
alert("ready to move")

else if(traficcolor == "green")
alert("move now")

else{
    alert("this is a not trafic signal color")

}





// <------------ chptr 4 ------------->


var remaininfuel = Number(prompt("enter the remaining fuel in litter"))

if(remaininfuel < 0.25){
    document.write("please refill the fuel in the car")

} else{
    document.write("you have enouch fuel in your car ")

}




// ---------------mark sheet  6----------------

var English = Number(prompt("Enter your English marks"));
var urdu = Number(prompt("Enter your urdu marks"));
var math = Number(prompt("Enter your math marks"));

var totalnum = 300
var obtaindnum = (english + urdu + math)
var percentage = (obtaindnum /totalnum) *100

document.write("<h1>MARK SHEET</h1>") 

document.write("total marks:",totalnum,"</br></br>")
document.write("obtaindmarks:",obtaindnum,"</br></br>")
document.write("percentage:",percentage,"%","</br></br>")

if(percentage >= 80){
document.write("Grade: A-one")
document.write("Remarks: Exclent" + "</br></br>")


}else if(percentage <= 79 && percentage >=70){
document.write("Grade: A")
document.write("Remarks: Good" + "</br></br>")

}else if(percentage <= 69 && percentage >=60){
document.write("Grade: B")
document.write("Remarks: you need to improve" + "</br></br>")

}else if(percentage <= 59 && percentage >=50){
document.write("Grade: fail")
document.write("Remarks: sorry to work hard " + "</br></br>")
}











// ---------- 5 check whether --------

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// -------- Given Condition is true --------


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// -------- Given Condition is false --------

var c = 12;
if (c++ === 13)
alert("condition 1 is true");

// -------- Given Condition is false --------

if (c === 13){
    alert("condition 2 is true");
    }
// -------- Given Condition is true --------

if (c++ < 14){
    alert("condition 3 is true");
    }

    // -------- Given Condition is false --------

    if(c === 14){
        alert("condition 4 is true");
        }

        // -------- Given Condition is true --------

        var materialCost = Number(prompt("Enter A Material Cost"));
        var laborCost = Number(prompt("Enter A Material Cost"));
        var totalCost = materialCost + laborCost;
       
        if (totalCost === laborCost + materialCost){
        alert("The cost equals");
        }

         // --------  5 Given Condition is true --------



        //  --------- True False --------

        var user = Number(prompt("2+2 = ?"))

        var a = 4

         if (user ==a){
            alert("True");
            }
            if (user != a){
            alert("False");
            }



    //   ---------- 5 cat car --------
    
    

         var car = Number(prompt("Enter Car Size"))
         var cat = Number(prompt("Enter Cat Size"))

          if(car < cat){
            alert("car is smaller than cat");
            }
            if(car > cat){
                alert("car is Bigger than cat")
            }


            
        // -------- 6 Mark Sheet --------

var eng = Number(prompt("Enter Your English Marks"))
var urdu = Number(prompt("Enter Your Urdu Marks"))
var math = Number(prompt("Enter Your Math Marks"))

var totalmarks = 300
        
var obtmarks = eng + urdu + math;

var percentage = (obtmarks / totalmarks) * 100;

document.write("<h1>Mark Sheet</h1>")

document.write("Total Marks :", totalmarks,"</br>")
document.write("Marks Obtained :",obtmarks,"</br>")
document.write("Percentage :",percentage,"%","</br>")

if(percentage >= 80){
    document.write("Grade:A-one","</br>")
    document.write("Remarks: Excellent" + "<br>")

}else if(percentage <=79 && percentage >=70){
    document.write("Grade:A")
    document.write("Remarks: Good" + "<br>")

}
else if(percentage <=69 && percentage >=60){
    document.write("Grade:B","</br>")
    document.write("Remarks: You Need To Improve")
}
else if(percentage <=59 && percentage >=50){
    document.write("Grade:fail" ,"</br>")
    document.write("Remarks :Sorry You Work Hard","</br>")
}


// -------- 7 Guess Number ----------

var secretnumber = 4
var Guessnumber = Number(prompt("Guess A any Number in 1 to 10 "))

if (Guessnumber === secretnumber){
    alert("Bingo! Correctanswer")
}else if(Guessnumber == secretnumber +1 || Guessnumber == secretnumber-1){
    alert("Close enough to the correct answer")
}else{
    alert("Wrong Answer")
}





// ------------ 8 Devided by 3 --------

var input = Number(prompt("write a Number Check if it can Divied by 3"))

if(input % 3 == 0){
    alert("Given Number Divied By 3")
}else{
    alert("Given Number can Not Divied By Devided")
}





// --------- 9 Even & odd Number --------

var input = Number(prompt(" Write checks given input is aneven number"))

if(input % 2 == 0){
    alert("Given Number Is even")
}else{
    alert("Given Number Is Odd")
}



// ------------  Weather temperature   10---------

var  temperature = Number(prompt("Enter the temperature in Celsius"))

if(temperature >=40 ){
    document.write("It is too hot outside")
}


else if(temperature <=39 && temperature >=30){
    document.write("The Weather today is Normal")
}


else if(temperature <=29 && temperature >=20){
    document.write("Today’s Weather is cool")
}


else if(temperature >=0 && temperature <=19){
    document.write("OMG! Today’s weather is so Cool")
}



// <------------ chptr 11 ------------->



var firstnum = Number(prompt("enter you first number"))
var secondnum = Number(prompt("enter you second number"))
var operater = prompt("enter your operater")
if (operater === "+")
alert(firstnum + secondnum)

if (operater === "-")
alert(firstnum - secondnum)

if (operater === "*")
alert(firstnum * secondnum)

if (operater === "/")
alert(firstnum / secondnum)

if (operater === "%")
alert(firstnum / secondnum *100)










