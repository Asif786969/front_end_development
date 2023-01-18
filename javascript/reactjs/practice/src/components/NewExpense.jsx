import { useState } from "react";

const NewExpense = () => {
    const [enterTitle,setenterTitle]=useState('')
    const [enterAmount,setenterAmount]=useState('')
    const [enterDate,setenterDate]=useState('')
  
    const titleChangeHandler =(e)=>{
       setenterTitle(e.target.value)        
    }
    const amountChangeHandler=(e)=>{
        setenterAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setenterDate(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        };
        console.log(expenseData);
        setenterTitle('');
        setenterAmount('');
        setenterDate('');

    }
    return ( 
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler}/>

                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enterAmount} onChange={amountChangeHandler}/>

                <label>Date</label>
                <input type="date" min='2000-01-01' max='2022-12-31' value={enterDate} onChange={dateChangeHandler} />

                <button type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default NewExpense;
