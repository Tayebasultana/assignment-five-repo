        //   glovaly decleared

// main account
const mainAccount = document.getElementById("main-account").innerText;
const mainAccountBalance = parseFloat(mainAccount);

// using modal

const result = document.getElementById("donateModal");
result.classList.remove("hidden");

const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("donateModal");

closeModalBtn.addEventListener("click",function(){
    modal.classList.add("hidden");
});






            //  first donation card

const donateForFlood = document.getElementById("donate-for-flood");
donateForFlood.addEventListener('click',function(){
   
    // input amount
    const firstDonateAmount = parseFloat(document.getElementById("first-donate-amount").value);
    if (isNaN(firstDonateAmount) || firstDonateAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return; 
    }

    // donate amount
    const firstCardAmount = document.getElementById("total-donate-amount-first").innerText;
    const totalAmountOfFirstCard = parseFloat(firstCardAmount);

    // main account
    const mainAccount = document.getElementById("main-account").innerText;
    const mainAccountBalance = parseFloat(mainAccount);

    if (mainAccountBalance < firstDonateAmount) {
        alert("Insufficient balance in main account!");
        return;
       }
    //   new donate amount 
    const newAmountOfFirstCard = firstDonateAmount+totalAmountOfFirstCard ;
    document.getElementById("total-donate-amount-first").innerText=newAmountOfFirstCard;
   
    // new main account balance
   const newMainAccountBalance =mainAccountBalance-firstDonateAmount;
   document.getElementById("main-account").innerText=newMainAccountBalance;
   

    // using modal

    const result = document.getElementById("donateModal");
    result.classList.remove("hidden");

    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("donateModal");

    closeModalBtn.addEventListener("click",function(){
        modal.classList.add("hidden");
    });


})




        //   second donation card

const donateForFeni = document.getElementById("donate-for-feni")
     .addEventListener('click',function(){
        
    // input amount
  const feniDonateAmount = parseFloat(document.getElementById("donate-amount-for-feni").value);

    if (isNaN(feniDonateAmount) || feniDonateAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return; 
    }
    // donate amount
    const totleDonateAmount = parseFloat(document.getElementById("total-donate-amount-in-feni").innerText);

    // main account
    const mainAccount = document.getElementById("main-account").innerText;
    const mainAccountBalance = parseFloat(mainAccount);

    if (mainAccountBalance < feniDonateAmount) {
        alert("Insufficient balance in main account!");
        return;
       }

    //   new donate amount 
    const newDonateAmount = feniDonateAmount+totleDonateAmount ;
    document.getElementById("total-donate-amount-in-feni").innerText=newDonateAmount;
    
     // new main account balance
   const newMainAccountBalanceForFeni =mainAccountBalance-feniDonateAmount;
   document.getElementById("main-account").innerText=newMainAccountBalanceForFeni;

   // using modal

   const result = document.getElementById("donateModal");
   result.classList.remove("hidden");

   const closeModalBtn = document.getElementById("closeModalBtn");
   const modal = document.getElementById("donateModal");

   closeModalBtn.addEventListener("click",function(){
       modal.classList.add("hidden");
   });



   
     })