import React from 'react'
import GameListItem from './GameListItem';
import { animate, motion } from 'framer-motion';


const  GameList: React.FC<TodoListProps> = ({todos , toggleTodo}) => {
    return (
        <main className='grid container mx-auto pb-3  content-start items-center justify-center'>
        <motion.div  className='relative w-full  grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 overflow-hidden'> 

            {todos.map(todo =>{

                return <GameListItem key={todo.id} todo = {todo} toggleTodo={toggleTodo} />
            })}
            </motion.div>
        </main>
    )
}

export default GameList

