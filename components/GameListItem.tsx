import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";

const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	const green = "lg:text-green-300 text-green-500   text-xl leading-lg  pr-2";
	const gray = "lg:text-gray-300 text-red-500  text-xl leading-lg pr-2";
	const red = "lg:text-red-700 text-red-800  text-xl leading-lg pr-2";

	return (
		<div className='py-4'>
			<div className='relative ' >
				<div className='opacity-100 hover:opacity-100 duration-300 z-50 flex flex-col justify-between h-full   absolute  text-6xl text-gray-100  rounded-lg font-thin '>
                    
					
					<p className="text-3xl px-4 py-4 z-50">	
					
					<button
						onClick={() => toggleTodo(todo)}
						className='outline-none  flex-auto'>
						<i
							onClick={() => toggleTodo(todo)}
							className={
								todo.complete
									? red + " fas fa-heart" : gray + " fas fa-heart"
							}
						/>
						<p className='py-1 text-sm'>10345</p>
					</button>
					
					
					</p>
					
					<span
								id='blackOverlay'
								className='w-full h-20  mb-8 absolute opacity-60 bg-gray-900  '></span>
					
					
				
	</div>

				<Link href={`/games/${todo.id}`} >
					<motion.img
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.6,
								ease: [0.6, -0.05, 0.01, 0.99],
							},
						}}
						initial={{ y: 0, opacity: 0 }}
						whileTap={{ scale: 1 }}
						whileHover={{
							position: "relative",
							zIndex: 10,
							background: "white",
							scale: [1, 1.2, 1.01],
							transition: {
								duration: 0.3,
							},
						}}
						className='w-full col-span-2 cursor-pointer block rounded opacity-0 hover:bg-blue-100 duration-300 '
						src={todo?.cover.url.replace("t_thumb", "t_cover_big")}
						alt={todo.name}
					/>
				</Link>

				<Link href={`/games/${todo.id}`} >
					<div className='grid place-items-center pt-4 cursor-pointer'>
						<h2 className='text-blue-400 hover:text-blue-300 font-normal '>
							{" "}
							{todo.name}
						</h2>
					</div>
				</Link>

				

				{/* <div className='grid grid-2 place-items-center gap-2 pt-2 '>
				<div className='flex flex-row justify-between  container '>
			

					<button
						onClick={() => toggleTodo(todo)}
						className='outline-none  flex-auto'>
						<i
							onClick={() => toggleTodo(todo)}
							className={
								todo.complete
									? green + " far fa-check-circle"
									: gray + " far fa-check-circle"
							}
						/>
						<p className='py-1 text-sm'>Played</p>
					</button>
					<button className='text-white opacity flex-auto'>
						<i
							className={
								todo.complete
									? green + " fas fa-bookmark"
									: gray + " fas fa-bookmark"
							}
						/>{" "}
						<p className='py-1 text-sm'> Watchlist</p>
					</button>

					 <div className='text-white opacity flex-auto flex flex-row border px-1 rounded-lg py-1'>
					

					<button className='text-white opacity flex-auto'>
						<i
							className={ 
								todo.complete
									? green + " fas fa-thumbs-up text-lg leading-lg "
									: gray + " fas fa-thumbs-up text-lg leading-lg "
									  
							}
						/>
						<p className="py-1 text-sm"> Like</p>
					</button>

					

					<button className='outline-none text-white opacity flex-auto'>
						<i
							className={
								todo.complete
									? "lg:text-green-300 text-green-500 "
									: "lg:text-gray-300 text-gray-500 " +
									  " fas fa-thumbs-down  text-lg leading-lg"
							}
						/>
						<p className="py-1 text-xs"> Dislike</p>
					</button>
				</div> 
				</div>
			</div> */}

				{/* <label className={todo.complete ? "line-through" : undefined}>
				<input
					type='checkbox'
					checked={todo.complete}
					onChange={() => toggleTodo(todo)}
				/>
				<span className="pl-2"> Played</span>
			</label> */}
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
