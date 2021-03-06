import React from "react";

export default function Landing() {
	return (
		<>
			<main className=' bg-red-200 pb-32'>
				<div className='relative   flex items-center justify-center bg-gray-900'>
					<div className='absolute inset-0 bg-red-400 w-full h-full '>
						<img src=' https://res.cloudinary.com/babyhulk/image/upload/v1613672195/GameBox/pexels-stas-knop-1462725.jpg' />
					</div>
					{/*Hero text content*/}
					<div className='relative'>
						<h2 className=' text-4xl text-white font-extrabold'>
							Game Game Game
						</h2>
					</div>
				</div>
			</main>
		</>
	);
}
