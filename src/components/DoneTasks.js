import React from 'react';
import { Link } from 'react-router-dom';

const DoneTasks = () => {
    return ( 
        <div>
            <h1>Выполненных задач ( покупок )</h1>
            <Link to='/'>Перейти к задачам</Link>
        </div>
     );
}
 
export default DoneTasks;