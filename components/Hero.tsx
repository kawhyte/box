import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC<IGameFull> = ({ games }) => {

	console.log("Games ",games)
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
	console.log(" sortedGames[0] ", sortedGames[0]);
	return (
		<>
			<section className='text-gray-600 body-font max-w-full '>
				<div className=' mx-auto flex px-5 pb-24 items-center justify-center flex-col'>
					<img
						className='lg:w-5/6 md:w-5/6  mb-10 object-cover object-center rounded  top-0 w-full h-full bg-center bg-cover'
						alt='hero'
						src={games[0].screenshots[0].url.replace(
							"t_thumb",
							"t_screenshot_big"
						)}
					/>
					<div className='text-center lg:w-2/3 w-full  -m-24  backdrop-blur-xl '>
						<h1 className='py-1 px-1 text-white   font-extrabold  text-4xl sm:text-6xl  lg:text-7xl xl:text-11xl'>
							Find Your Next Favorite
						</h1>
						<p className='py-2  text-indigo-500 text-lg   leading-relaxed mt-0 lg:mb-4 md:text-2xl'>
							Personalized recommendations for Nintendo, Xbox, Playstation and
							PC Games.
						</p>
						{/*<div class='flex justify-center'>
							<div className='flex align-middle items-center '>
								<Link href='/video-game-concierge'>
									<button className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold text-textwhite  shadow-sm hover:shadow-lg'>
										View Games
									</button>
								</Link>
							</div>

							<button class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								Button
							</button>
						</div>*/}
					</div>
				</div>
			</section>

			<div className='flex flex-col   align-middle items-center mt-16 '>
				

				<section className='cursor-pointer container mx-auto grid grid-cols-2  lg:grid-cols-4  gap-3     my-6  w-full  '>
					<Link href='/nintendo'>
						<div className='bg-gray-900  flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/console.png' />
							Nintendo
						</div>
					</Link>
					<Link href='/xbox'>
						<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/game-console.png' />
							Xbox
						</div>
					</Link>
					<Link href='/playstation'>
						<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/playstation.png' />
							PlayStation
						</div>
					</Link>
					<Link href='/playstation'>
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
