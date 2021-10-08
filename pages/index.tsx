import Head from "next/head";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import React from "react";
import { GamesoftheYear2020 } from "../data/gameIDs";
import useSWR from "swr";
import { getGamesByID, getGames } from "../util/getGames";
import SectionHeaderText from "../components/SectionHeaderText";
import IndexTrendingGames from "../components/IndexTrendingGames";
import JustAdded from "../components/JustAdded";

//export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
export const getStaticProps: GetStaticProps = getGames("(167,48,130,169,49)");

const Home = ({ games }) => {

	const sortedGames = games
	.sort((a, b) => {
		return b.total_rating - a.total_rating;
	})
	.sort((a, b) => {
		return b.rating_count - a.rating_count;
	});


	return (
		<>
	
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero games={games} headerText={null} />

			{/*<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-10xl '>
						Recommended{" "}
					</p>
				</div>
	</div>*/}
			<div className='justify-center flex flex-col items-center  '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
				
					<IndexTrendingGames games={games} headerText={"BEST GAMES OF THE DECADE"} />
				</div>
			</div>
			<div className='justify-center flex flex-col items-center  '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
				
					<JustAdded games={games} headerText={"Just Added"} />
				</div>
			</div>

			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-10xl '>
					Popular lists{" "}
					</p>
				</div>
			</div>
			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-10xl '>
						Trending{" "}
					</p>
				</div>
			</div>

		
		</>
	);
};

export default Home;
