import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020')
    // const [expenses,setExpenses]=useState(props.items);

    const filterChangeHandler = (selectedYear) => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent=<p>No expenses found</p>;

    if(filteredExpenses.length>0){
        expensesContent=filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>);
    }

    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {expensesContent}
        </Card>
        </div>
    )
}

export default Expenses;