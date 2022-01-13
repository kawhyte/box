import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Trending: React.FC<IGame> = ({ games, headerText, startCountAt }) => {
	return (
		<main className=' pb-3 mx-8 justify-start'>
			<div>
				<motion.div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7  grid-row-2 gap-2'>
					{games.slice(0, 50).map((game, i) => (
						<Link href={`/games/${game.id}`} key={game.id}>
							<div className='flex flex-col'>
								<motion.div
									key={game.id}
									className=' shadow-lg relative rounded p-1 max-w-sm cursor-pointer '
									animate={{
										y: 0,
										opacity: 1,
										transition: {
											duration: 0.6,
											ease: [0.6, -0.05, 0.01, 0.99],
										},
									}}
									initial={{ y: 60, opacity: 0 }}
									whileTap={{ scale: 1 }}
									whileHover={{
										position: "relative",
										zIndex: 10,
										//background: "white",
										scale: [1, 1.02, 1.01],
										transition: {
											duration: 0.3,
										},
									}}>
									{/*<div className='px-2 py-2 '>
									<h3 className='text-white text-sm my-2'>{game.name}</h3>
									<p className='text-gray-400 text-sm'>{game.genres[0].name}</p>
									</div>*/}

									<div className='flex flex-col justify-center'>
										<img
											className='w-full   block rounded'
											src={
												game.cover &&
												game.cover.url.replace("t_thumb", "t_cover_big")
											}
											alt={game.name}
										/>

										<p className='mt-3 text-gray-600'>{game.name}</p>

										<div className='flex flex-col items-start w-4 justify-start  absolute   rounded bg-opacity-0 group-hover:bg-opacity-60 h-full top-0   group-hover:opacity-100 transition '>
											<button className='hover:scale-125  text-white transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-7 w-7 my-2 mx-2  text-gray-300'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>

											<button className='hover:scale-110 text-white  transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-7 w-7 my-2 mx-2  text-gray-300'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>

											<button className='hover:scale-110   transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-7 w-7 my-2 mx-2  text-gray-300'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
										</div>
									</div>
								</motion.div>
							</div>
						</Link>
					))}
				</motion.div>
			</div>
		</main>
	);
};

export default Trending;
