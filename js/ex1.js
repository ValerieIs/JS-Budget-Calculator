"use strict";

let money,
    time;

// Right Fields

const startCount = document.querySelector('#start'),
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
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-icome'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: true,
    chooseExpenses: function () {
        let i = 0;

        for ( let i = 0; i < 2; ) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt("Во сколько обойдется?");
    
        if ((typeof(a)) === "string" && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            i++;
        } else {
            alert("Введите другое значение");    
        }    
    }
    }, 
    detectDayBudget:function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(0);
        alert(appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 400) {
            alert("Минимальный заработок");
        } else if (appData.moneyPerDay < 2000) {
            alert("Средний заработок");
        } else {
            alert("Высокий заработок");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с вашего депозита составляет:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let i = 1;
        for ( let i = 1; i < 4; i++ ) {
            let a = prompt("Статья необязательных расходов?");
    
        appData.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход? (Введите ответы через запятую)', '');
        
        if ((typeof(items)) === "string" && (typeof(a)) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort ();
        } else {
            alert("Введите правильную информацию");    
        }
    }
};

appData.chooseIncome();
appData.income.forEach(element => {
    alert('Способы доп. заработка: ' + element);
});

for (element in appData) {
    console.log("Наша программа включает в себя данные: " + element);
}

