import React from 'react'

const NUM = 3;

export default function TodoList() {
    return (
        <ol>
            <li>
                <div className="todo">
                    <p>sample todo </p>
                    <button>del</button>
                </div>
            </li>

            <p className="message">
                there are {NUM + 1} unfinished tasks
            </p>
        </ol>
    )
}
