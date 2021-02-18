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
						<span id='blackOverlay'className='w-full h-full absolute opacity-75 bg-blac bg-fade2 '></span>  
					</div>
					<div className='container relative mx-auto '>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
								<div className='pr-12'>
									<h1 className='text-white font-semibold text-5xl'>
										Your story starts with us.
									</h1>
									<p className='mt-4 text-lg text-gray-300'>
										This is a simple example of a Landing Page you can build
										using Tailwind Starter Kit. It features multiple CSS
										components based on the Tailwindcss design system.
									</p>
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
