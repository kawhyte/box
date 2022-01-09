import Head from "next/head";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import React from "react";
import { GamesoftheYear2020, TrendingGames } from "../data/gameIDs";
import useSWR from "swr";
import { getGamesByID, getGames, getIndexPageGamesByID } from "../util/getGames";

import SectionHeaderText from "../components/SectionHeaderText";
import IndexTrendingGames from "../components/IndexTrendingGames";
import JustAdded from "../components/JustAdded";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

//export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
export const getStaticProps: GetStaticProps = getIndexPageGamesByID(TrendingGames, GamesoftheYear2020);

const Home = ({ trendingGames, games2020 }) => {



	const sortedGames = trendingGames
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
			

			<Hero games={trendingGames} headerText={null} />

			{/*<div className='justify-center flex flex-col items-center mt-12 '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<p className=' py-1 px-1   font-extrabold  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-10xl '>
						Recommended{" "}
					</p>
				</div>
	</div>*/}	



	
	<div className='justify-center flex flex-col items-center  '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
				
					<IndexTrendingGames games={trendingGames} headerText={"TRENDING VIDEO GAMES"} subText={"Video Games to keep an eye on"} />
				</div>
			</div>

			<div className='flex flex-col   align-middle items-center mt-16 '>
				

				<section className='cursor-pointer container mx-auto grid grid-cols-2  lg:grid-cols-4  gap-3     my-6  w-full  '>
					<Link href='/nintendo'>
						<div className='bg-gray-900  flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/console.png' />
							Nintendo
						</div>
					</Link>
					<Link href='/xbox'>
						<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/game-console.png' />
							Xbox
						</div>
					</Link>
					<Link href='/playstation'>
						<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/playstation.png' />
							PlayStation
						</div>
					</Link>
					<Link href='/playstation'>
						<div className='bg-gray-900 flex flex-col align-middle items-center px-16 py-4  mx-8  rounded-3xl hover:bg-gray-700'>
							<Image width={96} height={96} src='/pc.png' />
							PC
						</div>
					</Link>
				</section>
			</div>
			<div className='justify-center flex flex-col items-center  '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
				
					<JustAdded games={trendingGames} headerText={"Just Added"} />
				</div>
			</div>
			<div className='justify-center flex flex-col items-center  '>
				<div className=' mb-4  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
				
					<IndexTrendingGames games={games2020} headerText={"BEST VIDEO GAMES OF 2020"} subText={"Play these Video Games now"}  />
				</div>
			</div>
		
			


{/*
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
*/}
		
		</>
	);
};

export default Home;
