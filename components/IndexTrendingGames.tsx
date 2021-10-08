import React from "react";
import Head from "next/head";
import Categories from "./Categories";
import SectionHeaderText from "./SectionHeaderText";
import HighestRatedCard from "./HighestRatedCard";
import { getGames } from "../util/getGames";
import IndexCard from "./IndexCard";
import { GetStaticProps } from "next";

const nintendo: React.FC<IGameFull> = ({ games, headerText }) => {
	console.log("games ", games);
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<div>
			<Head>
				<title>GameBox | Nintendo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container container flex lg:bg-transparent	flex-col justify-center bg-bgcolor text-textwhite text-center py-10 rounded-xl mt-48 max-w-md  md:max-w-xl lg:max-w-7xl'>
				<h1 className=' pb-6 text-base font-bold tracking-widest headings uppercase'>
					BEST GAMES OF THE DECADE
				</h1>
				<h1 className='pb-6 text-3xl font-black headings uppercase'>
					{"Video games you should play before you die."}
				</h1>
				{/*<p className=' py-2 text-xl font-light leading-relaxed mt-0 mb-6 '>
				{paragraphText}
	</p>*/}
			</div>

			<IndexCard games={sortedGames} startCountAt={1} headerText='' />
		</div>
	);
};

export default nintendo;
