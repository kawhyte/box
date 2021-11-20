import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


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
			<div className='flex flex-col   align-middle items-center '>
				<section className='bg-black p-8 rounded-2xl w-4/5  container mx-auto relative overflow-hidden flex   justify-start items-end'>
					<div className='absolute   flex flex-col justify-end align-baseline  z-10 '>
						<p className=' py-1 px-1 text-white   font-extrabold  text-4xl sm:text-6xl  lg:text-7xl xl:text-11xl '>
							Find Your Next Favorite{" "}
						</p>

						<p className='py-2  text-indigo-500 text-lg   leading-relaxed mt-0 lg:mb-4 md:text-2xl'>
							Personalized recommendations for Nintendo, Xbox, Playstation and
							PC Games.
						</p>

						<div className='flex align-middle items-center '>
							<Link href='/video-game-concierge'>
								<button className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold text-textwhite  shadow-sm hover:shadow-lg'>
									View Games
								</button>
							</Link>
						</div>
					</div>

					<div className='w-screen grid gap-3 md:gap-6  grid-cols-3 sm:grid-col-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 lg:gap-4 rotate-90 overflow-hidden'>
						{sortedGames.slice(0, 12).map((game) => (
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
				</section>

				<section className='cursor-pointer container mx-auto grid grid-cols-2  lg:grid-cols-4  gap-3     my-6  w-full  '>
					<Link  href='/nintendo'>
					<div className='bg-gray-900  flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
						<Image width={96} height={96} src='/console.png' />
						Nintendo
					</div>
					</Link>
					<Link  href='/xbox'>
					<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
						<Image width={96} height={96} src='/game-console.png' />
						Xbox
					</div>
					</Link>
					<Link  href='/playstation'>
					<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
						<Image width={96} height={96} src='/playstation.png' />
						PlayStation
					</div>
					</Link>
					<Link  href='/playstation'>
					<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
						<Image width={96} height={96} src='/pc.png' />
						PC
					</div>
					</Link>
				</section>
			</div>
		</>
	);
};

export default Hero;
