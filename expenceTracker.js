const inputBudget = document.querySelector("#screen1").children[0];

const setBudgetBtn = document.querySelector("#screen1").children[1];

const inputExpenseDetails =
  document.querySelector("#enterExpense").children[0].children[0];

const inputExpenseAmount =
  document.querySelector("#enterExpense").children[0].children[2];

const addExpenseBtn =
  document.querySelector("#enterExpense").children[0].children[4];

const totalAmountSpan = document.querySelector("#totalHeading span");
const totalHeadingSpan = document.querySelector("#spentHeading span");
const remainingAmountSpan = document.querySelector("#remainingHeading span");

let totalAmount = 0;
let spentAmount = 0;
let remainingAmount = 0;
let serialNo = 0;
const infoArr = [];

setBudgetBtn.addEventListener("click", setBudgetFunc);

addExpenseBtn.addEventListener("click", addExpenseBtnFunc);

function setBudgetFunc() {
  totalAmount = inputBudget.value;
  totalAmountSpan.innerHTML = totalAmount;

  document.querySelector("#screen1").classList.add("disabled");

  document.querySelector("#screen2").classList.remove("disabled");
}

function addExpenseBtnFunc(e) {
  e.preventDefault();

  if (spentAmount < totalAmount) {
    serialNo = serialNo + 1;
    spentAmount = Number(inputExpenseAmount.value) + spentAmount;

    remainingAmount = totalAmount - spentAmount;
    totalHeadingSpan.innerHTML = spentAmount;
    remainingAmountSpan.innerHTML = remainingAmount;
  } else {
    alert("amount exceed");
  }
  infoArr.push({
    sNo: serialNo,
    info: inputExpenseDetails.value,
    amount: Number(inputExpenseAmount.value),
  });
  console.log(infoArr);

  infoArr.forEach((obj) => {

    const addExpenseTr = document.createElement("tr");
    const addExpenseTdSNo = document.createElement("td");
    const addExpenseTdInfo = document.createElement("td");
    const addExpenseTdAmount = document.createElement("td");

     addExpenseTdSNo.innerHTML = obj.sNo;
    addExpenseTdInfo.innerHTML = obj.info;
    addExpenseTdAmount.innerHTML = obj.amount;

    addExpenseTr.appendChild(addExpenseTdSNo);
    addExpenseTr.appendChild(addExpenseTdInfo);
    addExpenseTr.appendChild(addExpenseTdAmount);

    document.querySelector("#expenseTracker table tbody").appendChild(addExpenseTr);

    // const addExpenseTdSNo = document.createElement("td");
    // const addExpenseTdInfo = document.createElement("td");
    // const addExpenseTdAmount = document.createElement("td");
    // document
    //   .querySelector("expenseTracker")
    //   .children[0].children[1].append(addExpenseTdSNo);
    // document
    // console.log(addExpenseTdSNo);

    //   document.querySelector("expenseTracker")
    //   .children[0].children[1].append(addExpenseTdInfo);
    // document
    // .querySelector("expenseTracker")
    //   .children[0].children[1].append(addExpenseTdAmount);
    // console.log(obj.info);
  });
}
