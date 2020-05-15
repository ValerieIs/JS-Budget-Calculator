"use strict";

// Right Fields

const startBtn = document.querySelector('.start'),
    budget = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    expenses = document.querySelector('.expenses-value'),
    level = document.querySelector('.level-value'),
    optionalExpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    yearDate = document.querySelector('.year-value'),
    monthDate = document.querySelector('.month-value'),
    dayDate = document.querySelector('.day-value');

// Left Fields

const expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');

let time, money;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed(0);
    yearDate.value = new Date(Date.parse(time)).getFullYear();
    monthDate.value = new Date(Date.parse(time)).getMonth() + 1;
    dayDate.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for ( let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) === "string" && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;   
        }    
        expenses.textContent = sum;
    }        
});

optionalExpensesBtn.addEventListener('click', function() {
    optionalExpenses.textContent = optionalExpensesItem[0].value +
     ", " + optionalExpensesItem[1].value + ", " + optionalExpensesItem[2].value;
});

countBtn.addEventListener('click', function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(0);
    dayBudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 400) {
        level.textContent = "Минимальный заработок";
    } else if (appData.moneyPerDay < 1000) {
        level.textContent = "Средний заработок";
    } else {
        level.textContent = "Высокий заработок";
    }
});

chooseIncome.addEventListener('input', function() {
    income.textContent = chooseIncome.value;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(2);
        yearSavings.textContent = appData.yearIncome.toFixed(2);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(2);
        yearSavings.textContent = appData.yearIncome.toFixed(2);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: false
};


