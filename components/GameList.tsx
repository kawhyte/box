import React from 'react'
import GameListItem from './GameListItem';


const  GameList: React.FC<TodoListProps> = ({todos , toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo =>{

                return <GameListItem key={todo.text} todo = {todo} toggleTodo={toggleTodo} />
            })}
        </ul>
    )
}

export default GameList

