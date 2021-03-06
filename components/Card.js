import React from "react";
import Link from "next/link";

const Trending = ({ games, headerText }) => {
	return (
		<main class='grid  min-h-screen mt-12  p-5 container mx-auto pb-6  content-start items-center justify-center'>
			<h1 className='pb-8  md:text-xl text-gray-400'> {headerText}</h1>
			<div>
				<section class='grid grid-cols-2 sm:grid-cols-4 gap-4'>
					{games.map((game) => (
						<Link href={`/games/${game.id}`} key={game.id}>
							<div class='bg-gray-800 shadow-lg rounded p-3 max-w-xs '>
								<div class='group relative'>
									<img
										class='w-full  md:w-72 block rounded'
										src={
											game.cover &&
											game.cover.url.replace("t_thumb", "t_cover_big")
										}
										alt={game.name}
									/>
									<div class='absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly'>
										<button class='hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='20'
												height='20'
												fill='currentColor'
												class='bi bi-heart'
												viewBox='0 0 16 16'>
												<path d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
											</svg>
										</button>

										<button class='hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='40'
												height='40'
												fill='currentColor'
												class='bi bi-play-circle-fill'
												viewBox='0 0 16 16'>
												<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z' />
											</svg>
										</button>

										<button class='hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='20'
												height='20'
												fill='currentColor'
												class='bi bi-three-dots'
												viewBox='0 0 16 16'>
												<path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
											</svg>
										</button>
									</div>
								</div>
								<div class='px-2 py-2 '>
									<h3 class='text-white text-sm my-2'>{game.name}</h3>
									<p class='text-gray-400 text-sm'>{game.genres[0].name}</p>
								</div>
							</div>
						</Link>
					))}
				</section>
			</div>
		</main>
	);
};

export default Trending;
