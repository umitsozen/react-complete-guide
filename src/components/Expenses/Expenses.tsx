
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

interface ExpensesProps{
    items: any;
}

function Expenses(props:ExpensesProps) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}

export default Expenses;
