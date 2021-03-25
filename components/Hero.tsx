import React from "react";
import { animate, motion } from 'framer-motion';


const Hero: React.FC <IGame> = ({games}) => {

	return (
		<>
			<main className=''>
				<div
					className='relative flex  items-center mx-auto justify-center align-middle  '
					style={{
						minHeight: "43vh",
					}}>
					{/*<div
						className='absolute top-0 w-full max-w-screen-2xl  h-full bg-center bg-cover bg-no-repeat '
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/babyhulk/image/upload/ar_16:9,b_rgb:212830,c_fill,e_gradient_fade:71,g_auto,w_1.0,y_-0.3/a_0/v1615142268/GameBox/ars-games-of-the-year-2020.webp')",
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-black  '></span>
					</div>*/}
					<div className='flex h-screen justify-center overflow-hidden '>
						<div className='absolute h-screen mx-auto justify-center flex flex-col items-center z-10 '>
							
						
						<div className='justify-center flex flex-col items-center '>
							<motion.div initial="hidden" animate="visible" variants={{
								hidden: {
									scale: .8,
									opacity: 0
								  },
								  visible: {
									scale: 1,
									opacity: 1,
									rotate:[0,10,-10,0],
									transition: {
									  delay: .4
									}
								}
							  }}> 	
							<p className='text-4xl mb-4 hero text-center font-black  text-textwhite tracking-wider uppercase   sm:text-5xl md:text-7xl lg:text-15xl xl:text-10xl  '>
									Video Game
								</p></motion.div>
								<p className='text-4xl text-center font-black  text-textwhite tracking-wider uppercase   sm:text-5xl md:text-6xl '>
									Concierge
								</p>
								
							</div>
							<p className='py-6  text-center text-textwhite  font-light leading-relaxed mt-0 mb-4 md:text-2xl'>
								Not sure which game to play next? We can help you out.
							</p>
							<div className='flex flex-col md:flex-row '>
							
								<motion.button whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }} className='uppercase  shake-lr color-change-2x  mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 text-textwhite max-w-max shadow-sm hover:shadow-lg'>
									<i className='far fa-play-circle text-yellow-200'> </i> Get a game Suggestion
								</motion.button>
							</div>
						</div>

						<motion.div  className='relative w-full grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 overflow-hidden'
						
						>
							{games.slice(0, 24).map((game) => (
								<div className=''  key={game.id}>
									<motion.img initial={{ rotateY:180, opacity:0}}
									animate={{rotateY :0, opacity:1}}
									transition={{delay:.3}}
										className='w-full col-span-2  block rounded'
										src={
											
											game?.cover.url.replace("t_thumb", "t_cover_big")
										}
										alt={game.name}
									/>
								</div>
									))}

							<span
								id='blackOverlay'
								className='w-full h-screen absolute  opacity-80 bg-gray-900  '></span>
						</motion.div>
					</div>

					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>
				{/*<div className=' relative mx-auto -mt-40  '>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-11/12 h-10/12  px-4 ml-auto mr-auto text-center'>
							<div className='flex flex-col p-12 items-center text-pop-up-top'>
								<p className='text-5xl bg-red-100 font-black heading text-textwhite tracking-wider uppercase   sm:text-6xl md:text-6xl lg:text-15xl xl:text-10xl  '>
									Video Game
								</p>
								<p className='text-5xl font-black heading text-accentColor tracking-wider uppercase   sm:text-5xl md:text-6xl '>
									Concierge
								</p>

								<section className='mb-1  mt-6 leading-10 font- text-gray-900 text-xl  sm:text-3xl md:text-4xl sm:leading-none lg:text-5xl'>
								<p className=' text-textwhite  sm:text-lg p-1'>
									Find the best video games for each year.
								</p>

								<p className='text-textwhite sm:text-lg p-1'>
									Tell your friends what’s good.
								</p>
								<br className='' />
							</section> */}

				{/*<section>
							
								<button className='uppercase   mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 text-textwhite max-w-max shadow-sm hover:shadow-lg'>
									<i className=" animate-pulse far fa-play-circle">{" "}</i> Get a game Suggestion
								</button>
							</section>
							</div>
						</div>
					</div>
				</div>*/}
			</main>
		</>
	);
}

export default Hero