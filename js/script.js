var year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);


  if(century == ""){
    alert("Input gender");
    return false;
  }else if (year == ""){
    alert("Input year");
    return false;
  }else if (month == ""){
    alert("input month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input correct vdate3");
    return false;
  }
}
//func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}

// caller func
 function dayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//checkDayOfWeek 
}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");//Test the radio buttons
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = " is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = " is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = " is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
                // console.log("Pass");//Test male case
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = " is on a sunday." + "  " + "Your akan name is " + femaleNames[0];
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = " is on a monday." + " " + "Your akan name is " + femaleNames[1];
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = " is on a tuesday." + " " + "Your akan name is " + femaleNames[2];
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "is on a wednesday." + " " + "Your akan name is " + femaleNames[3];
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = " is on a thursday." + " " + "Your akan name is " + femaleNames[4];
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = " is on a friday." + " " + "Your akan name is " + femaleNames[5];
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = " is on a saturday." + " " + "Your akan name is " + femaleNames[6];
                  break;
              }
        break
        default:
        console.log("pass");//Test gender
    }
}
