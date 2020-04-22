import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import TaskForm from './TaskForm';
import { TaskContext } from './../context/TaskContext';

const Tasks = () => {
    const { tasks, dispatch } = useContext( TaskContext )
    console.log(tasks)

    const listTasks = tasks.map( task => (
        <li key={ task.id }> { task.name } <button onClick={ () => dispatch({ type: 'REMOVE_TASK', id: task.id }) } >Выполнена</button> </li>
    ) )
     
    return tasks.length ? ( 
        <div>
            <h1>Задачи ( покупки )</h1>
            <p><strong>У вас { tasks.length } { tasks.length === 1 ? `задача ожидает выполнения` : `задачи ожидают выполнения` }</strong></p>
            <ol>
                { listTasks }
            </ol>
            <TaskForm />
            <Link to='/donetasks'>Перейти к Выполненным задачам</Link>
        </div>
     ) : (
        <div>
            <h1>Задачи ( покупки )</h1>
            <p>Вперёд за победами !</p>
            <TaskForm />
            <Link to='/donetasks'>Перейти к Выполненным задачам</Link>
        </div>
     )
}
 
export default Tasks;