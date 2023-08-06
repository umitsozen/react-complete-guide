
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


interface Props {
    id:string ;
    title: string;
    amount: number;
    date:Date;
  }

function ExpenseItem({ id , title, amount, date }:Props) {

    return (
        <Card className='expense-item'>
          <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>

        </Card>
    )
}


export default ExpenseItem;