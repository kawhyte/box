import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";

const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	const green = "lg:text-green-300 text-green-500   text-xl leading-lg  pr-2";
	const gray = "lg:text-gray-300 text-red-500  text-xl leading-lg pr-2";
	const red = "lg:text-red-700 text-red-800  text-xl leading-lg pr-2";

	return (
		<div className='py-4'>
			<div className='relative ' key={todo.id}>
				<span
					className={
						todo.complete
							? " w-full h-full absolute z-10   opacity-80 bg-gray-900  "
							: "w-full h-full absolute z-10  opacity-0 bg-gray-900  "
					}>
					<p className='grid place-items-center rounded-lg bg-gray-700 text-sm my-2  mx-12 p-2'>
						{" "}
						I've played this game{" "}
					</p>
				</span>
				<motion.img
					initial={{ rotateY: 180, opacity: 0 }}
					animate={{ rotateY: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className='w-full col-span-2  block rounded opacity-0 hover:bg-red-100 duration-300 '
					src={todo?.cover.url.replace("t_thumb", "t_cover_big")}
					alt={todo.name}
				/>
				<div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-end pb-4 text-6xl text-white font-semibold'>
					<div className='grid grid-cols-3 gap-2 px-2 py-2 mx-2 my-1 bg-bgcolor rounded-lg '>
						<span
							onClick={() => toggleTodo(todo)}
							className='flex flex-col items-center px-4'>
							<i
								onClick={() => toggleTodo(todo)}
								className={
									todo.complete
										? green + " far fa-check-circle "
										: gray + " far fa-check-circle"
								}
							/>
							<p className='py-1 text-sm text-gray-100 font-normal'>Played</p>
						</span>

						<span
							onClick={() => toggleTodo(todo)}
							className='flex flex-col items-center px-4 '>
							<i
								onClick={() => toggleTodo(todo)}
								className={
									todo.complete ? red + " fas fa-heart" : gray + " fas fa-heart"
								}
							/>
							<p className='py-1 text-sm text-gray-100  font-normal'>
								Favorite
							</p>
						</span>
						<span
							className='flex flex-col items-center px-4 '
							onClick={() => toggleTodo(todo)}>
							<i
								className={
									todo.complete
										? green + " fas fa-thumbs-up text-lg leading-lg"
										: gray + " fas fa-thumbs-up text-lg leading-lg"
								}
							/>{" "}
							<p className='py-1 text-sm text-gray-100  font-normal'> Like</p>
						</span>
					</div>

					{/* <Link href={`/games/${todo.id}`} key={todo.id}>

							<button className='text-white opacity font-bold py-2 px-4 bg-buttonYellow   rounded-full  hover:bg-yellow-500'>
					
									<p className='py-1 text-sm font-normal text-gray-900'> View Game Detail</p>
								</button>
								</Link> */}
				</div>
			</div>

			<Link href={`/games/${todo.id}`} key={todo.id}>
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
