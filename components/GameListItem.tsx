import React from "react";
import { animate, motion } from "framer-motion";

const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	console.log(todo?.cover.url);

	return (
		<div className=''>
			<div className='relative' key={todo.id}>
				<span
					className={
						todo.complete
							? " w-full h-full absolute z-10  opacity-80 bg-gray-900  "
							: "w-full h-full absolute z-10  opacity-0 bg-gray-900  "
					}>
					Played
				</span>
				<motion.img
					initial={{ rotateY: 180, opacity: 0 }}
					animate={{ rotateY: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className='w-full col-span-2  block rounded '
					src={todo?.cover.url.replace("t_thumb", "t_cover_big")}
					alt={todo.name}
				/>
			</div>

				<label className={todo.complete ? "line-through" : undefined}>
					<input
						type='checkbox'
						checked={todo.complete}
						onChange={() => toggleTodo(todo)}
					/>
					{todo.name}
				</label>

			
				<div>
					<button className='hover:scale-110 text-white opacity transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
						<i
							className={
								todo.complete
									? "lg:text-green-300 text-green-500 "
									: "lg:text-gray-300 text-gray-500 " +
									  "z-10 far fa-check-circle text-lg leading-lg mr-2"
							}
						/>
					</button>
				</div>
			

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
