import { ReactNode } from 'react';
import './Card.css'

interface CardProps
{
    className:any;
    children: ReactNode;
}
function Card(props:CardProps){
    const classes = 'card ' + props.className;  
    return <div className={classes}>{props.children}</div>;
}

export default Card;