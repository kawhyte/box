import React from "react";
import axios from "axios";
import Card from "./Card";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";

const HighestRatedCard = ({ games }) => {
	let factor = 3;
	return (
		<>
			<div className='container flex flex-col justify-center bg-bgcolor my-3    max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
				<div>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${games[0].videos[0].video_id}`}
						playing
						loop
						volume={0}
						muted
					/>
				</div>

				<div className='text-left my-2'>
					<p className='pb-1 text-sm pt-2 font-medium tracking-widest uppercase'>
						Highest rated causal Game
					</p>
                    <Link href={`/games/${games[0].id}`}>
					<p className='text-textwhite py-2 text-3xl  mt-0 smallheadings'>
						{games[0].name}
					</p>
                    </Link>
					<p className='text-textwhite py-2 text-base font-medium  mt-0  '>
						{" "}
						Rating 98%
					</p>
					<p className='text-textgray py-2 text-base font-medium  mt-0 '>
                    {games[0].summary}
					</p>
				</div>

                <Card games={games.splice(0,10)} />
			</div>
		</>
	);
};

export default HighestRatedCard;
