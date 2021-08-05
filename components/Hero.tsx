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
	return (
		<>
			<main className=''>
				<div
					className='relative flex  items-center mx-auto justify-center  align-middle  '
					style={{
						minHeight: "43vh",
					}}>
					<div className='flex h-screen justify-center overflow-hidden '>
						<div className='absolute h-screen mx-auto justify-center flex flex-col items-center z-10 '>
							<div className='justify-center flex flex-col items-center '>
								<motion.div
									className='text-6xl mb-4 hero text-center font-black  text-textwhite tracking-wider uppercase   sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl  '
									initial='hidden'
									animate='visible'>
									<p className='gradient-text py-1 px-1'>Video Game </p>

									<p className='text-4xl gradient-text text-center font-black  text-textwhite tracking-wider uppercase   sm:text-4xl md:text-5xl '>
										Concierge
									</p>
								</motion.div>
							</div>
							<p className='py-6  text-center text-textwhite  font-light leading-relaxed mt-0 mb-4 md:text-2xl'>
								A collection of the top video games each year.
							</p>
							<div className='flex flex-col md:flex-row p-3 '>
								<Link href='/video-game-concierge'>
									<button
										
										className='uppercase main-button  mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 font-bold text-textwhite max-w-max shadow-sm hover:shadow-lg'>
										View game Library
									</button>

									
								</Link>
							</div>
						</div>



						<motion.div className='relative w-screen grid gap-3 md:gap-6  grid-cols-3 sm:grid-col-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 lg:gap-4 rotate-90 overflow-hidden'>
							{sortedGames.map((game) => (
								<div className='' key={game.id}>
									<motion.img
										initial={{ rotateY: 180, opacity: 0 }}
										animate={{ rotateY: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
										className='w-full col-span-2  block rounded-2xl'
										src={game?.cover.url.replace("t_thumb", "t_cover_big")}
										alt={game.name}
									/>
								</div>
							))}

							<span
								id='blackOverlay'
								className='w-full h-screen absolute  opacity-75 bg-bgcolor  '></span>
						</motion.div>
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
