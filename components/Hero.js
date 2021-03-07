import React from "react";

export default function Landing() {
	return (
		<>
			<main className=''>
				<div
					className='relative pt-16 pb-6 flex  content-end  items-end justify-center  '
					style={{
						minHeight: "46vh",
					}}>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat bg-fade'
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/babyhulk/image/upload/v1614212348/GameBox/wall8bit.jpg')",
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-blac bg-fade2 '></span>
					</div>
					<div className='container relative mx-auto sm:mt-12 '>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-8/12 px-4 ml-auto mr-auto text-center'>
								<div className='flex flex-col items-center'>
									<p className='headings hero text-textwhite text-4xl sm:text-5xl md:text-6xl  sm:p-5'>
										Video Game 
									</p>
									<p className='headings hero text-textwhite text-4xl sm:text-5xl md:text-6xl  sm:p-2'>Concierge</p>
									<section className='mb-1  mt-6 leading-10 font-extrabold text-gray-900 text-xl  sm:text-3xl md:text-4xl sm:leading-none lg:text-5xl'>
										<p className=' text-textwhite  sm:text-lg p-1'>
											Find the best video games for each year.
										</p>

										<p className='text-textwhite sm:text-lg p-1'>
											Tell your friends what’s good.
										</p>
										<br className='' />
									</section>

									{/*<section>
									
										<button class='uppercase   mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 text-textwhite max-w-max shadow-sm hover:shadow-lg'>
											<i class=" animate-pulse far fa-play-circle">{" "}</i> Get a game Suggestion
										</button>
									</section>*/}
								</div>
							</div>
						</div>
					</div>
					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>
			</main>
		</>
	);
}
