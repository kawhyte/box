import Head from "next/head";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import React from "react";
import { GamesoftheYear2020 } from "../data/gameIDs";
import useSWR from "swr";
import { getGamesByID, getGames } from "../util/getGames";
import SectionHeaderText from "../components/SectionHeaderText";

//export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
export const getStaticProps: GetStaticProps = getGames("(167,48,130,169,49)");

const Home = ({ games }) => {
	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero games={games} headerText={null} />

			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-4xl sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl '>
						Recommended{" "}
					</p>
				</div>
			</div>
			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-4xl sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl '>
					Trending{" "}
					</p>
				</div>
			</div>
			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-4xl sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl '>
					Popular lists{" "}
					</p>
				</div>
			</div>
			<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-4xl sm:text-6xl md:text-7xl lg:text-15xl xl:text-11xl '>
						Trending{" "}
					</p>
				</div>
			</div>

		
		</>
	);
};

export default Home;
