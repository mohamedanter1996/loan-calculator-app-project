/*
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
let DeductionPercentage =document.querySelector(".deduction-percentage .value");
let TotalInterest =document.querySelector(".total-interest .value");
let TotalPaid =document.querySelector(".total-paid .value");
let MonthlyInstallment =document.querySelector(".monthly-installment .value");
let CalculateButton=document.querySelector(".calculate-button");
let ClearButton=document.querySelector(".clear-button");

function addchart(LoanAmount,TotalInterest){
   let xValues = ["Loan Amount", "Total Interest"];
   let yValues = [LoanAmount,TotalInterest];
   let barColors = [
      "#FADA9D",
      "#FBF1D3"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "World Wide Chart for Loan Amount and Total Interest"
        }
      }
    });

}


function updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){
    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
}


let loancalculator=(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod)=>{
    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
    
    totalpaidvalue=((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2);
     MonthlyInstallmentvalue=(totalpaidvalue/((loanperiod)*12)).toFixed(2);
    TotalInterest.innerHTML=(totalpaidvalue-loanamountvalue).toFixed(2);
    DeductionPercentage.innerHTML=(( MonthlyInstallmentvalue/monthsalary)*100).toFixed(2);

 addchart(loanamountvalue,TotalInterest.innerHTML);   
 updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);
}

function calculateloan(event){
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");

if((MonthlySalary.value.match(/^[-+]?[0-9]+$/))&&(LoanAmount.value.match(/^[-+]?[0-9]+$/))&&(FixedInterestAnnually.value.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+\.[0-9]+$/))&&(LoanRepaymentPeriod.value.match(/^[-+]?[0-9]+$/))){
    loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

}
else{
    window.alert("please insert all required inputs in numbered formate without any character");
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";

}
}

function addblackbordertocalculatebutton(event){


if(event.target.classList.contains("calculatebutton-blackborder")){
    event.target.classList.remove("calculatebutton-blackborder");
    event.target.classList.add("calculate-button");
}

}

function removeblackbordertocalculatebutton(event){

    event.target.classList.add("calculatebutton-blackborder");
    event.target.classList.remove("calculate-button");
}


function addblackbordertoclearbutton(event){


  if(event.target.classList.contains("clearbutton-blackborder")){
      event.target.classList.remove("clearbutton-blackborder");
      event.target.classList.add("clear-button");
  }
  
  }
  
  function removeblackbordertoclearbutton(event){
  
      event.target.classList.add("clearbutton-blackborder");
      event.target.classList.remove("clear-button");
  }

CalculateButton.addEventListener("click",calculateloan);

CalculateButton.addEventListener("mouseup",addblackbordertocalculatebutton);

CalculateButton.addEventListener("mousedown",removeblackbordertocalculatebutton);

ClearButton.addEventListener("mouseup",addblackbordertoclearbutton);

ClearButton.addEventListener("mousedown",removeblackbordertoclearbutton);





*/
/////////////////////////////////////////////////////////////////////////////////////////////////with localstorage code 1//////////////////////////////////////////////////////////////////////////////
/*
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
let DeductionPercentage =document.querySelector(".deduction-percentage .value");
let TotalInterest =document.querySelector(".total-interest .value");
let TotalPaid =document.querySelector(".total-paid .value");
let MonthlyInstallment =document.querySelector(".monthly-installment .value");
let CalculateButton=document.querySelector(".calculate-button");
let ClearButton=document.querySelector(".clear-button");
let dataexest={};
if(window.localStorage.getItem("info")){
   dataexest=JSON.parse(window.localStorage.getItem("info"));
   let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
MonthlySalary.value=dataexest.salary;
LoanAmount.value=dataexest.loanvalue;
FixedInterestAnnually.value=dataexest.Interest;
LoanRepaymentPeriod.value=dataexest.period;

totalpaidvalue=addobjecttoloocalstorage(dataexest).totalloan;
     MonthlyInstallmentvalue=addobjecttoloocalstorage(dataexest).installmonth;
    TotalInterest.innerHTML=addobjecttoloocalstorage(dataexest).totalinstall;
    DeductionPercentage.innerHTML=addobjecttoloocalstorage(dataexest).deductpersentage;
    addchart(dataexest.loanvalue,TotalInterest.innerHTML);   
    updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

   console.log(dataexest);
   
}
else{dataexest={
  salary:"",
  loanvalue:"",
  Interest:"",
  period:"",
  totalloan:"",
  installmonth:"",
  totalinstall:"",
  deductpersentage:""
};}

let info=dataexest;


function addobjecttoloocalstorage(info){
  let data=window.localStorage.setItem("info",JSON.stringify(info));
  
  let dataneeded=window.localStorage.getItem("info");
  let dataused=JSON.parse(dataneeded);
  return dataused;

}

function  addinputstoobject(monthsalary,loanamountvalue,InterestAnnually,loanperiod){

  info={
salary:monthsalary,
loanvalue:loanamountvalue,
Interest:InterestAnnually,
period:loanperiod,
totalloan:((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2),
installmonth:(((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2)/((loanperiod)*12)).toFixed(2),
totalinstall:(((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2)-loanamountvalue).toFixed(2),
deductpersentage:(((((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2)/((loanperiod)*12)).toFixed(2)/monthsalary)*100).toFixed(2)
  }
}

function addchart(LoanAmount,TotalInterest){
   let xValues = ["Loan Amount", "Total Interest"];
   let yValues = [LoanAmount,TotalInterest];
   let barColors = [
      "#FADA9D",
      "#FBF1D3"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "World Wide Chart for Loan Amount and Total Interest"
        }
      }
    });

}


function updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){
    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
}


let loancalculator=(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod)=>{
    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
    addinputstoobject(monthsalary,loanamountvalue,InterestAnnually,loanperiod);
    /*
    totalpaidvalue=((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2);
     MonthlyInstallmentvalue=(totalpaidvalue/((loanperiod)*12)).toFixed(2);
    TotalInterest.innerHTML=(totalpaidvalue-loanamountvalue).toFixed(2);
    DeductionPercentage.innerHTML=(( MonthlyInstallmentvalue/monthsalary)*100).toFixed(2);
    */

   /* totalpaidvalue=addobjecttoloocalstorage(info).totalloan;
     MonthlyInstallmentvalue=addobjecttoloocalstorage(info).installmonth;
    TotalInterest.innerHTML=addobjecttoloocalstorage(info).totalinstall;
    DeductionPercentage.innerHTML=addobjecttoloocalstorage(info).deductpersentage;
  

   if(DeductionPercentage.innerHTML<=50) {
    addchart(loanamountvalue,TotalInterest.innerHTML);   
 updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);
   }
   else{
window.alert("Please enter a suitable loan amount for the monthly salary");
LoanAmount.value="";
   }
 
}

function calculateloan(event){
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");

if((MonthlySalary.value.match(/^[-+]?[0-9]+$/))&&(LoanAmount.value.match(/^[-+]?[0-9]+$/))&&(FixedInterestAnnually.value.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+\.[0-9]+$/))&&(LoanRepaymentPeriod.value.match(/^[-+]?[0-9]+$/))){
    loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

}
else{
    window.alert("please insert all required inputs in numbered formate without any character");
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";

}
}

function addblackbordertocalculatebutton(event){


if(event.target.classList.contains("calculatebutton-blackborder")){
    event.target.classList.remove("calculatebutton-blackborder");
    event.target.classList.add("calculate-button");
}

}

function removeblackbordertocalculatebutton(event){

    event.target.classList.add("calculatebutton-blackborder");
    event.target.classList.remove("calculate-button");
}


function addblackbordertoclearbutton(event){


  if(event.target.classList.contains("clearbutton-blackborder")){
      event.target.classList.remove("clearbutton-blackborder");
      event.target.classList.add("clear-button");
  }
  
  }
  
  function removeblackbordertoclearbutton(event){
  
      event.target.classList.add("clearbutton-blackborder");
      event.target.classList.remove("clear-button");
  }

CalculateButton.addEventListener("click",calculateloan);

CalculateButton.addEventListener("mouseup",addblackbordertocalculatebutton);

CalculateButton.addEventListener("mousedown",removeblackbordertocalculatebutton);

ClearButton.addEventListener("mouseup",addblackbordertoclearbutton);

ClearButton.addEventListener("mousedown",removeblackbordertoclearbutton);*/

//////////////////////////////////////////////////////////////////////with localstorage code 2//////////////////////////////////////////////////////////////////////////////////
/*let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
let DeductionPercentage =document.querySelector(".deduction-percentage .value");
let TotalInterest =document.querySelector(".total-interest .value");
let TotalPaid =document.querySelector(".total-paid .value");
let MonthlyInstallment =document.querySelector(".monthly-installment .value");
let CalculateButton=document.querySelector(".calculate-button");
let ClearButton=document.querySelector(".clear-button");
let dataexest={};
if(window.localStorage.getItem("info")){
   dataexest=JSON.parse(window.localStorage.getItem("info"));
   MonthlySalary.value=dataexest.salary;
   LoanAmount.value=dataexest.loanvalue;
   FixedInterestAnnually.value=dataexest.Interest;
   LoanRepaymentPeriod.value=dataexest.period;
   addobjecttoloocalstoragetocalculate(dataexest);

   console.log(dataexest);
   
}
else{dataexest={
  salary:"",
  loanvalue:"",
  Interest:"",
  period:"",
  totalloan:"",
  installmonth:"",
  totalinstall:"",
  deductpersentage:""
};}

let info=dataexest;




function  addinputstoobject(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){

  let monthsalary=parseFloat(MonthlySalary.value);
  let loanamountvalue=parseFloat(LoanAmount.value);
  let InterestAnnually=parseFloat(FixedInterestAnnually.value);
  let loanperiod=parseFloat(LoanRepaymentPeriod.value);

  info={
salary:monthsalary,
loanvalue:loanamountvalue,
Interest:InterestAnnually,
period:loanperiod,
totalloan:"",
installmonth:"",
totalinstall:"",
deductpersentage:""
  }
}

function addchart(LoanAmount,TotalInterest){
   let xValues = ["Loan Amount", "Total Interest"];
   let yValues = [LoanAmount,TotalInterest];
   let barColors = [
      "#FADA9D",
      "#FBF1D3"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "World Wide Chart for Loan Amount and Total Interest"
        }
      }
    });

}


function updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){
    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
}

function addobjecttoloocalstoragetocalculate(info){
  info.totalloan=((1+((info.Interest*info.period)/100))*info.loanvalue).toFixed(2);
  info.installmonth=( info.totalloan/((info.period)*12)).toFixed(2);
  info.totalinstall=(info.totalloan-info.loanvalue).toFixed(2);
  info.deductpersentage=((info.installmonth/info.salary)*100).toFixed(2);
  let data=window.localStorage.setItem("info",JSON.stringify(info));
  
  let dataneeded=window.localStorage.getItem("info");
  let dataused=JSON.parse(dataneeded);
  totalpaidvalue=dataused.totalloan;
     MonthlyInstallmentvalue=dataused.installmonth;
    TotalInterest.innerHTML=dataused.totalinstall;
    DeductionPercentage.innerHTML=dataused.deductpersentage;

    if(DeductionPercentage.innerHTML<=50) {
      addchart(info.loanvalue,TotalInterest.innerHTML);   
   updateinputvalues(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);
     }
     else{
  window.alert("Please enter a suitable loan amount for the monthly salary");
  LoanAmount.value="";
     }
 

}

let loancalculator=(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod)=>{
   
    addinputstoobject(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);
    /*
    totalpaidvalue=((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2);
     MonthlyInstallmentvalue=(totalpaidvalue/((loanperiod)*12)).toFixed(2);
    TotalInterest.innerHTML=(totalpaidvalue-loanamountvalue).toFixed(2);
    DeductionPercentage.innerHTML=(( MonthlyInstallmentvalue/monthsalary)*100).toFixed(2);
    */
    
   /* addobjecttoloocalstoragetocalculate(info);
    
}

function calculateloan(event){
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");

if((MonthlySalary.value.match(/^[-+]?[0-9]+$/))&&(LoanAmount.value.match(/^[-+]?[0-9]+$/))&&(FixedInterestAnnually.value.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+\.[0-9]+$/))&&(LoanRepaymentPeriod.value.match(/^[-+]?[0-9]+$/))){
    loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

}
else{
    window.alert("please insert all required inputs in numbered formate without any character");
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";

}
}

function addblackbordertocalculatebutton(event){


if(event.target.classList.contains("calculatebutton-blackborder")){
    event.target.classList.remove("calculatebutton-blackborder");
    event.target.classList.add("calculate-button");
}

}

function removeblackbordertocalculatebutton(event){

    event.target.classList.add("calculatebutton-blackborder");
    event.target.classList.remove("calculate-button");
}


function addblackbordertoclearbutton(event){


  if(event.target.classList.contains("clearbutton-blackborder")){
      event.target.classList.remove("clearbutton-blackborder");
      event.target.classList.add("clear-button");
  }
  
  }
  
  function removeblackbordertoclearbutton(event){
  
      event.target.classList.add("clearbutton-blackborder");
      event.target.classList.remove("clear-button");
  }

  function removelocalstorage(event){
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";
    dataexest={};
    addobjecttoloocalstoragetocalculate(dataexest);
    window.localStorage.clear();
  }

CalculateButton.addEventListener("click",calculateloan);

CalculateButton.addEventListener("mouseup",addblackbordertocalculatebutton);

CalculateButton.addEventListener("mousedown",removeblackbordertocalculatebutton);

ClearButton.addEventListener("mouseup",addblackbordertoclearbutton);

ClearButton.addEventListener("mousedown",removeblackbordertoclearbutton);

ClearButton.addEventListener("click",removelocalstorage);*/
////////////////////////////////////////////////with localstorage code 3////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////let MonthlySalary =document.querySelector(".monthly-salary");
let MonthlySalary =document.querySelector(".monthly-salary");
let LoanAmount =document.querySelector(".loan-amount");
let FixedInterestAnnually =document.querySelector(".fixed-interest");
let LoanRepaymentPeriod =document.querySelector(".loan-repayment");
let DeductionPercentage =document.querySelector(".deduction-percentage .value");
let TotalInterest =document.querySelector(".total-interest .value");
let TotalPaid =document.querySelector(".total-paid .value");
let MonthlyInstallment =document.querySelector(".monthly-installment .value");
let CalculateButton=document.querySelector(".calculate-button");
let ClearButton=document.querySelector(".clear-button");

if(window.localStorage.getItem("info")){
 
  showoutputtobrowser(window.localStorage.getItem("info"));

}

else{

}

function addchart(LoanAmount,TotalInterest){
 let xValues = ["Loan Amount", "Total Interest"];
 let yValues = [LoanAmount,TotalInterest];
 let barColors = [
    "#FADA9D",
    "#FBF1D3"
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Chart for Loan Amount and Total Interest"
      }
    }
  });

}


function showoutputtobrowser(localstoragevalue){
  if(localstoragevalue){
     
    let dataneeded=window.localStorage.getItem("info");
    let dataused=JSON.parse(dataneeded);

    MonthlySalary.value=dataused.salary;
    LoanAmount.value=dataused.loanvalue;
    FixedInterestAnnually.value=dataused.Interest;
    LoanRepaymentPeriod.value=dataused.period;

    TotalPaid.innerHTML =dataused.totalloan;
    MonthlyInstallment.innerHTML=dataused.installmonth;
    TotalInterest.innerHTML=dataused. totalinstall;
    DeductionPercentage.innerHTML=dataused.deductpersentage;

  }
  else{
    TotalPaid.innerHTML ="";
    MonthlyInstallment.innerHTML="";
    TotalInterest.innerHTML="";
    DeductionPercentage.innerHTML=""

  }
  if(DeductionPercentage.innerHTML<=50) {
    addchart(LoanAmount.value,TotalInterest.innerHTML);   
   }
   else{
window.alert("Please enter a suitable loan amount for the monthly salary");
LoanAmount.value="";
   }
 
}



function addobjecttolocalstorage(info){
  let data=window.localStorage.setItem("info",JSON.stringify(info));
  showoutputtobrowser(window.localStorage.getItem("info"));
}


function addloancalculationvaluestoobject( monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue){
  let info={
   
    salary:monthsalary,
  loanvalue:loanamountvalue,
  Interest:InterestAnnually,
  period:loanperiod,
  totalloan:totalpaidvalue,
  installmonth:MonthlyInstallmentvalue,
  totalinstall:TotalInterestvalue,
  deductpersentage:DeductionPercentagevalue

  };

console.log(info);
addobjecttolocalstorage(info);



}

function loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod){

    let monthsalary=parseFloat(MonthlySalary.value);
    let loanamountvalue=parseFloat(LoanAmount.value);
    let InterestAnnually=parseFloat(FixedInterestAnnually.value);
    let loanperiod=parseFloat(LoanRepaymentPeriod.value);
    
   let totalpaidvalue=((1+((InterestAnnually*loanperiod)/100))*loanamountvalue).toFixed(2);
   let MonthlyInstallmentvalue=(totalpaidvalue/((loanperiod)*12)).toFixed(2);
   let TotalInterestvalue=(totalpaidvalue-loanamountvalue).toFixed(2);
   let DeductionPercentagevalue=(( MonthlyInstallmentvalue/monthsalary)*100).toFixed(2);
  console.log(monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue);
   addloancalculationvaluestoobject(monthsalary,loanamountvalue,InterestAnnually,loanperiod,totalpaidvalue,MonthlyInstallmentvalue,TotalInterestvalue,DeductionPercentagevalue);




}




function calculateloan(event){

  if((MonthlySalary.value.match(/^[-+]?[0-9]+$/))&&(LoanAmount.value.match(/^[-+]?[0-9]+$/))&&(FixedInterestAnnually.value.match(/^[-+]?[0-9]+$|^[-+]?[0-9]+\.[0-9]+$/))&&(LoanRepaymentPeriod.value.match(/^[-+]?[0-9]+$/))){
    loancalculator(MonthlySalary,LoanAmount,FixedInterestAnnually,LoanRepaymentPeriod);

}
else{
    window.alert("please insert all required inputs in numbered formate without any character");
    MonthlySalary.value="";
    LoanAmount.value="";
    FixedInterestAnnually.value="";
    LoanRepaymentPeriod.value="";

}

location.reload();
}


function addblackbordertocalculatebutton(event){


  if(event.target.classList.contains("calculatebutton-blackborder")){
      event.target.classList.remove("calculatebutton-blackborder");
      event.target.classList.add("calculate-button");
  }
  
  }
  
  function removeblackbordertocalculatebutton(event){
  
      event.target.classList.add("calculatebutton-blackborder");
      event.target.classList.remove("calculate-button");
  }
  
  
  function addblackbordertoclearbutton(event){
  
  
    if(event.target.classList.contains("clearbutton-blackborder")){
        event.target.classList.remove("clearbutton-blackborder");
        event.target.classList.add("clear-button");
    }
    
    }
    
    function removeblackbordertoclearbutton(event){
    
        event.target.classList.add("clearbutton-blackborder");
        event.target.classList.remove("clear-button");
    }

    function removelocalstorage(event){
      MonthlySalary.value="";
      LoanAmount.value="";
      FixedInterestAnnually.value="";
      LoanRepaymentPeriod.value="";
      window.localStorage.clear();
      showoutputtobrowser(window.localStorage.getItem("info"));
      location.reload();


    }

CalculateButton.addEventListener("click",calculateloan);

CalculateButton.addEventListener("mouseup",addblackbordertocalculatebutton);

CalculateButton.addEventListener("mousedown",removeblackbordertocalculatebutton);

ClearButton.addEventListener("mouseup",addblackbordertoclearbutton);

ClearButton.addEventListener("mousedown",removeblackbordertoclearbutton);

ClearButton.addEventListener("click",removelocalstorage)

