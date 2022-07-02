import React,{ useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css';

function ExpenseItem (props) {
  const [title,setTitle] = useState(props.title);

  const clickhandler = () => {
    setTitle('Updated!! ');
    console.log(title);
  };
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick= {clickhandler}>Change title</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
