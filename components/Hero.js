import React from "react";

export default function Landing() {
	return (
		<>
			<main>
				<div
					className='relative pt-16 pb-6 flex  content-end items-end justify-center  '
					style={{
						minHeight: "60vh",
					}}>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover container  bg-no-repeat bg-fade'
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/babyhulk/image/upload/v1613672195/GameBox/pexels-stas-knop-1462725.jpg')",
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-blac bg-fade2 '></span>
					</div>
					<div className='container relative mx-auto '>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-8/12 px-4 ml-auto mr-auto text-center'>
								<div className='pr-12'>
									<h2 className='text-2xl mb-1  leading-10 font-extrabold text-gray-900 md:sm:text-3xl sm:text-3xl sm:leading-none md:text-4xl'>
										<p className='text-white p-1'>
											Track Video Games you’ve played.
										</p>
										<p className='text-white p-1'>Save those you want to play.</p>
										<p className='text-white p-1'>Tell your friends what’s good.</p>
										<br className='' />
									</h2>
                                    <button class="uppercase tracking-widest px-8 py-3 rounded bg-indigo-600 text-white max-w-max shadow-sm hover:shadow-lg">Get Started  - Its Free!</button>
                                    

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
