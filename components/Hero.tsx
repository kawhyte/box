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
						<div className='absolute h-screen mx-auto container justify-center flex flex-col items-center z-10  '>
							<div className='justify-center flex flex-col items-center '>
								<div className='text-6xl mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider uppercase   sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl headings '>
									<p className=' py-1 px-1   font-extrabold  text-6xl '>
										Find Your Next Favorite{" "}
									</p>
								</div>
							</div>
							<p className='py-6  text-center text-gray-500 text-xl lg:mx-48  leading-relaxed mt-0 mb-4 md:text-2xl'>
								Personalized recommendations for Nintendo, Xbox, Playstation and
								PC Games.
							</p>
							<div className='flex flex-col md:flex-row p-3 '>
								<div className='flex align-middle items-center '>
									{/*<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='uppercase py-2 px-4 mx-1 text-base tracking-wide sm:mr-12 sm:px-8 sm:py-3 rounded bg-yellow-500 font-semibold text-bgcolor max-w-max shadow-sm hover:shadow-lg'>
										<i className={"  fas fa-random text-md  leading-lg mr-4"} />
										I feel Lucky
									</motion.button>*/}

									<Link href='/video-game-concierge'>
										<button className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold text-textwhite  shadow-sm hover:shadow-lg'>
											Get Started
										</button>
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
