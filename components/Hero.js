import React from "react";
import Welcome from "./Welcome";

export default function Landing({ games }) {
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
					<div class='flex h-screen justify-center overflow-hidden '>
						<div className='absolute h-screen mx-auto justify-center flex flex-col items-center z-10 '>
							<div className='justify-center flex flex-col items-center text-pop-up-top'>
								<p className='text-6xl  text-center font-black  text-textwhite tracking-wider uppercase   sm:text-6xl md:text-8xl lg:text-15xl xl:text-10xl  '>
									Video Game
								</p>
								<p className='text-5xl font-black heading text-accentColor tracking-wider uppercase   sm:text-5xl md:text-6xl '>
									Concierge
								</p>
							</div>
							<p className='py-6  text-textwhite  font-light leading-relaxed mt-0 mb-4 md:text-2xl'>
								Not sure which game to play next? We can help you out.
							</p>

							<button className='uppercase    mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 text-textwhite max-w-max shadow-sm hover:shadow-lg'>
								<i className='far fa-play-circle'> </i> Get a
								game Suggestion
							</button>
						</div>

						<div className='relative w-full grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 overflow-hidden'>
							{games.slice(0, 20).map((game) => (
								<div className='animate-puls'>
									<img
										className='w-full col-span-2  md:w-72 block rounded'
										src={
											game.cover &&
											game.cover.url.replace("t_thumb", "t_cover_big")
										}
										alt={game.name}
									/>
								</div>
							))}

							<span
								id='blackOverlay'
								className='w-full h-screen absolute opacity-80 bg-gray-900  '></span>
						</div>
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
