import React, { createContext, useReducer, useEffect } from 'react';
import { taskReducer } from '../reducer/taskReducer';

export const TaskContext = createContext()

const TaskContextProveder = (props) => {
    const [ tasks, dispatch ] = useReducer( taskReducer, [], () => {
        const localData = localStorage.getItem('tasks')
        return localData ? JSON.parse(localData) : []
    } )
    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [ tasks ] ) 
    return ( 
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProveder;