import { useState } from 'react';
import '../styles/ExpenseItem.css' ;
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    
    const [title,setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle('Updated!');
        console.log(title);
    }
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
           
            <p className="expense-item__description">{title}</p>
            <p className="expense-item__price">${props.amount}</p>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}
export default ExpenseItem