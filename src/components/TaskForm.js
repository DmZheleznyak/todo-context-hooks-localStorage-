import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const NewTaskForm = () => {
    const { dispatch } = useContext( TaskContext ) 
    const [ name, setName ] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: 'ADD_TASK', task: {
            name
        }} )
        setName('')
    }
    return ( 
        <form onSubmit={ handleSubmit }>
            <input type='text' placeholder='название задачи' value={ name }
                onChange={ e => setName( e.target.value ) } />
            <input type='submit' value='добавить' />
        </form>
     );
}
 
export default NewTaskForm;