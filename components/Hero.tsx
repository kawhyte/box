import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC<IGameFull> = ({ games }) => {
	console.log("Games ", games);
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
			<section className='text-gray-600 body-font  container '>
				<div className=' mx-auto flex px-5 items-center justify-center flex-col'>
					<img
						className=' mb-10 object-cover object-center rounded  top-0 w-full h-full bg-center bg-cover'
						alt='hero'
						src={games[
							Math.floor(Math.random() * games.length)
						].screenshots[0].url.replace("t_thumb", "t_screenshot_big")}
					/>
					<div className='text-center  w-full  -mt-24  flex flex-col  justify-center '>
						<p className='py-1 px-1 text-white   font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-6xl xl:text-11xl'>
							Track games you've played.
						</p>
						<p className='py-1 px-1 text-white   font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-6xl xl:text-11xl'>
							Save those you want to play.
						</p>
						<p className='py-1 px-1 text-white   font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-6xl xl:text-11xl'>
							Tell your friends what's good.
						</p>
						<p className='py-2  text-indigo-500 text-lg   leading-relaxed mt-0 lg:mb-4 md:text-2xl'>
							Personalized recommendations for Nintendo, Xbox, Playstation and
							PC Games.
						</p>
						<div className='flex justify-center'>
							<div className='flex align-middle items-center '>
								<Link href='/video-game-concierge'>
									<button className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold text-textwhite  shadow-sm hover:shadow-lg'>
									GET STARTED — IT‘S FREE!
									</button>
								</Link>
							</div>

							
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
