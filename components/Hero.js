import React from "react";

export default function Landing() {
	return (
		<>
			<main className=''>
				<div
					className='relative pt-16 pb-6 flex  content-end  items-end justify-center  '
					style={{
						minHeight: "45vh",
					}}>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover   bg-no-repeat bg-fade'
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/babyhulk/image/upload/v1614212348/GameBox/wall8bit.jpg')",
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-blac bg-fade2 '></span>
					</div>
					<div className='container relative mx-auto '>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-8/12 px-4 ml-auto mr-auto text-center'>
								<div className='flex flex-col items-center'>
									<section className='mb-6 sm:mb-2'>
										<img
											class='lg:hidden h-9'
											src='https://res.cloudinary.com/babyhulk/image/upload/v1613758687/GameBox/gamebox-logo-indigo-500-mark-white-text-01.svg'
											alt=''
										/>
									</section>
									<h1 className='headings text-white text-4xl sm:text-5xl font-extrabold sm:p-8'>
										Video Game Finder & Concierge
									</h1>
									<section className='mb-1  mt-6 leading-10 font-extrabold text-gray-900 md:sm:text-3xl sm:text-4xl sm:leading-none md:text-5xl'>
										<p className='text-white text-base  sm:text-lg p-1'>
											Find the best video games for each year. 
										</p>
										<p className='text-white text-base  sm:text-lg p-1'>
											 Save those you
											want to play.
										</p>
										<p className='text-white text-base  sm:text-lg p-1'>
											 Tell your friends what’s good.
										</p>
										<br className='' />
									</section>

									<section>
										<button class='uppercase headings animate-pulse mx-1 text-xs tracking-wide px-8 py-3 rounded bg-indigo-600 text-white max-w-max shadow-sm hover:shadow-lg'>
											Get a game Suggestion
										</button>
									</section>
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
