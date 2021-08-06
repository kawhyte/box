import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC<IGameFull> = ({ games }) => {
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<>
			<main className=''>
				<div
					className='relative flex  items-center mx-auto justify-center  align-middle  '
					style={{
						minHeight: "43vh",
					}}>
					<div className='flex h-screen justify-center overflow-hidden '>
						<div className='absolute h-screen mx-auto container justify-center flex flex-col items-center z-10 '>
							<div className='justify-center flex flex-col items-center '>
								<motion.div
									className='text-6xl mb-4 hero flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider uppercase   sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl headings '
									initial='hidden'
									animate='visible'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className=' h-40 w-40 mb-10 fill-current text-textwhite gradent-text  '
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path d='M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z' />
									</svg>

									<p className=' py-1 px-1   font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-500 to-green-600'>
										Not sure what video game to play next?{" "}
									</p>

									{/*<p className='text-4xl gradient-text text-center font-black  text-textwhite tracking-wider uppercase   sm:text-4xl md:text-5xl '>
										Not sure what game to play next?
				</p>*/}
								</motion.div>
							</div>
							<p className='py-6  text-center text-gray-300 text-xl lg:mx-48  leading-relaxed mt-0 mb-4 md:text-3xl'>
								Choose{" "}
								<span className='text-yellow-500 font-bold'>
									Recommend a Game{" "}
								</span>{" "}
								and let we will find a game for you or view the{" "}
								<span className='text-green-500 '>Game Concierge </span> with a
								collection of the top video games each year.
							</p>
							<div className='flex flex-col md:flex-row p-3 '>
								<div className='flex align-middle items-center '>
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='uppercase py-2 px-4 mx-1 text-base tracking-wide sm:mr-12 sm:px-8 sm:py-3 rounded bg-yellow-500 font-bold text-bgcolor max-w-max shadow-sm hover:shadow-lg'>
										<i className={"  fas fa-random text-md  leading-lg mr-4"} />
										Recommend a Game
									</motion.button>

									<Link href='/video-game-concierge'>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-green-600 font-bold text-textwhite max-w-max shadow-sm hover:shadow-lg'>
											Game CONCIERGE
										</motion.button>
									</Link>
								</div>
							</div>
						</div>

						<div className='relative bg-blend-multiply w-screen grid gap-3 md:gap-6  grid-cols-3 sm:grid-col-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 lg:gap-4 rotate-90 overflow-hidden'>
							{sortedGames.map((game) => (
								<div className=' opacity-20 bg-bgcolor' key={game.id}>
									<motion.img
										initial={{ opacity: 1 }}
										animate={{ opacity: 1 }}
										variants={item}
										whileHover={{
											position: "relative",
											zIndex: 10,
											scale: [1, 1.04, 1],
											transition: {
												duration: 0.3,
											},
										}}
										className='w-full col-span-2  block rounded-2xl opacity-75 bg-bgcolor   '
										src={game?.cover.url.replace("t_thumb", "t_cover_big")}
										alt={game.name}
									/>
								</div>
							))}
						</div>
					</div>

					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>
			</main>
		</>
	);
};

export default Hero;
