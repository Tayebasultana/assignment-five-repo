        //   glovaly decleared

// main account
const mainAccount = document.getElementById("main-account").innerText;
const mainAccountBalance = parseFloat(mainAccount);



// donate amount its use there for hystory card- its for noakhali flood
const firstCardAmount = document.getElementById("total-donate-amount-first").innerText;
const totalAmountOfFirstCard = parseFloat(firstCardAmount);



// make the button div blur when i scrool and it make static
const blurDiv = document.getElementById('blur-Div');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) { 
      blurDiv.classList.add('backdrop-blur'); 
  } else {
      blurDiv.classList.remove('backdrop-blur'); 
  }
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


    // history item

    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-4 rounded-lg shadow-md mb-4 border-slate-600";

    historyItem.innerHTML = `
    <h2 class="text-lg text-black font-bold">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
    <p>${new Date().toLocaleDateString}</p>
`;

  const historyList = document.getElementById("history-list");
  historyList. insertBefore(historyItem, historyList.firstChild);

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

   // history item

   const secondhistoryItem = document.createElement("div");
   secondhistoryItem.className = "bg-white p-4 rounded-lg shadow-md mb-4 border-slate-600";

   secondhistoryItem.innerHTML = `
   <h2 class="text-lg text-black font-bold">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
   <p>${new Date().toLocaleDateString}</p>
`;

  const secondHistryList = document.getElementById("second-histry-list");
  secondHistryList. insertBefore(secondhistoryItem, secondHistryList.firstChild);


     })




     //   third donation card    

const aidForInjurPeople = document.getElementById("help-injur-people")
.addEventListener('click',function(){
   
// input amount     
const amountOfAid = parseFloat(document.getElementById("quota-protest").value);
if (isNaN(amountOfAid) || amountOfAid <= 0) {
alert("Please enter a valid donation amount.");
return; 
}

// donate amount    
const totleAidAmount = parseFloat(document.getElementById("this-amount-for-help").innerText);

// main account
const mainAccount = document.getElementById("main-account").innerText;
const mainAccountBalance = parseFloat(mainAccount);

if (mainAccountBalance < amountOfAid) {
   alert("Insufficient balance in main account!");
   return;
  }

//   new aid amount 
const newAidAmount = amountOfAid+totleAidAmount ;
document.getElementById("this-amount-for-help").innerText=newAidAmount;

// new main account balance
const remainingMainBalance =mainAccountBalance-amountOfAid;
document.getElementById("main-account").innerText= remainingMainBalance;

// using modal
const result = document.getElementById("donateModal");
result.classList.remove("hidden");

const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("donateModal");

closeModalBtn.addEventListener("click",function(){
  modal.classList.add("hidden");
});


// history item

const thirdhistoryItem = document.createElement("div");
thirdhistoryItem .className = "bg-white p-4 rounded-lg shadow-md mb-4 border-slate-600";

thirdhistoryItem .innerHTML = `
<h2 class="text-lg text-black font-bold">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
<p>${new Date().toLocaleDateString}</p>
`;

const thirdHistryList = document.getElementById("third-histry-list");
thirdHistryList. insertBefore(thirdhistoryItem , thirdHistryList.firstChild);




})



      // button functionality

 
      const historyTab = document.getElementById("History-tab");
      historyTab.addEventListener("click", function() {
  
    // When clicked donation button
    const donationTab = document.getElementById("donation-tab");
    donationTab.addEventListener("click", function() {
        donationTab.classList.add("bg-lime-500", "text-black");
        donationTab.classList.remove("bg-transparent", "text-slate-600", "border-slate-600");
    
        historyTab.classList.add("bg-transparent", "text-slate-600", "border-slate-600");
        historyTab.classList.remove("bg-lime-500", "text-black", "border-none");
        
        // Show donate page when donation button is clicked
        document.getElementById("donate-page").classList.remove("hidden");
        document.getElementById("history-card").classList.add("hidden");
    });
  
    // When clicked history button
    historyTab.addEventListener("click", function() {
        historyTab.classList.add("bg-lime-500", "text-black", "border-none");
        historyTab.classList.remove("bg-transparent", "text-slate-600", "border-slate-600");
    
        donationTab.classList.add("bg-transparent", "text-slate-600", "border-slate-600");
        donationTab.classList.remove("bg-lime-500", "text-black", "border-none");
        
        // Hide donate page when history button is clicked
        document.getElementById("donate-page").classList.add("hidden");
        document.getElementById("history-card").classList.remove("hidden");
    });

    
});




      
      
      
      
      