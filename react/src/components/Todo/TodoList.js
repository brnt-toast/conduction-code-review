import React from 'react'
import TodoItem from './TodoItem';



const NUM = 3;

export default function TodoList() {
    return (
        <ol>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            
            <p className="message">
                there are {NUM + 1} unfinished tasks
            </p>
        </ol>
    )
}
