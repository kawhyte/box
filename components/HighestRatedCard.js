import React from "react";
import axios from "axios";
import Card from "./Card";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";

const HighestRatedCard = ({ games }) => {
	let factor = 4.5;
	let ratings = games[0] && games[0].rating.toFixed(0);
	return (
		<>
		
			<div className='flex flex-col justify-center bg-bgcolor my-3   mx-auto rounded-xl shadow-md overflow-hidden max-w-md  md:max-w-xl lg:max-w-7xl'>
				<div className="hidden md:block  ">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${
							games[0] && games[0].videos[0].video_id
						}`}
						playing
						loop
						volume={0}
						muted
						width={`${factor * 16}vw`}
						height={`${factor * 9}vw`}
					/>
				</div>

				<div className="block md:hidden ">
				
				


				<div
				className='relative pt-16 pb-32 flex content-center items-center justify-center'
				style={{
					minHeight: "35vh",
				}}>
				<div
					className='absolute top-0 w-full h-full bg-center bg-cover'
					style={{
						backgroundImage: `url('${
							"https://res.cloudinary.com/babyhulk/image/fetch/w_1248,h_256,c_fill,r_20,f_auto/" +
								games.screenshots &&
							games[0].screenshots[0].url.replace(
								"t_thumb",
								"t_screenshot_big"
							)
						}')`,
					}}>
					<span
						id='blackOverlay'
						className='w-full h-full absolute opacity-50 bg-black bg-bgcolor'>
						
					</span>
						


						
				</div>

				<div
					className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
					style={{ height: "70px", transform: "translateZ(0)" }}></div>
			</div>





				
				</div>

				<div className='container text-left my-2 mx-5 -mt-16  flex flex-col z-10 '>
					<p className='pb-1 text-sm pt-2 font-medium tracking-widest uppercase'>
						Highest rated causal Game
					</p>
					<div className='flex flex-row '>
						<p className='pt-3 top-0 left-0 z-20 ml-0 mr-3  '>
							<span
								className={
									"text-3xl font-semibold py-1 px-5 rounded text-gray-800 align-middle bg-textwhite  "
								}>
								{1}
							</span>
						</p>

						<Link href={`/games/${games[0].id}`}>
							<p className='text-textwhite hover:text-blue-700 cursor-pointer  py-2 text-3xl  mt-0 smallheadings'>
								{games[0].name}
							</p>
						</Link>
					</div>
					<p className='text-textwhite py-2 text-base font-medium  mt-2  '>
						Rating {ratings}%
					</p>
					<p className='text-textgray py-2 text-base font-medium  mt-0 '>
						{games[0].summary}
					</p>
				</div>

			<div className='flex flex-col justify-center pb-4 bg-bgcolor max-w-md mx-auto rounded-xl shadow-md  md:max-w-3xl'>
			<Card games={games.splice(1, 12) }  />
			</div>
			</div>
			
			
		</>
	);
};

export default HighestRatedCard;
