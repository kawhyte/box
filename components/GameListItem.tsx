import React from "react";
import { animate, motion } from "framer-motion";

const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	console.log(todo);

	return (
		<div>

			<div className='' key={todo.id}>
				<motion.img
					initial={{ rotateY: 180, opacity: 0 }}
					animate={{ rotateY: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className='w-full col-span-2  block rounded'
					src={todo?.cover.url.replace("t_thumb", "t_cover_big")}
					alt={todo.name}
				/>
			</div>
			<li>
				<label className={todo.complete ? "line-through" : undefined}>
					<input
						type='checkbox'
						checked={todo.complete}
						onChange={() => toggleTodo(todo)}
					/>

					{todo.name}
				</label>
			</li>
		</div>
	);
};

// const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {

//     return (
//         <div>

//             <li>
//                 <label >

//                 <input  type="checkbox" checked={complete}/>
//                 {games.name}
//             </label>

//             </li>

//         </div>
//     )
// }

export default GameListItem;
