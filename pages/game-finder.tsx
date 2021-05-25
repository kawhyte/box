import React, { useState } from "react";
import Head from "next/head";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";
import { getGames } from "../util/getGames";
import Card from "../components/Card";
import axios from "axios";
import { GetStaticProps, GetServerSideProps } from "next";
import { getGamesByID, getGamesByName } from "../util/getGames";
import { GamesoftheYear2020 } from "../data/gameIDs";

export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
//export const getServerSideProps: GetServerSideProps = getGamesByName("mario");

const nintendo: React.FC<IGameFull> = ({ games, startCountAt }) => {
	const [state, setState] = useState(games);

	const registerUser = async (event) => {
		event.preventDefault();
		//const res = getGamesByName(event.target.name.value)

		const res = await fetch("/api/hello", {
			body: JSON.stringify({
				name: event.target.name.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
		setState(result.games);

		//return result

		// result.user => 'Ada Lovelace'
	};
	console.log("registerUser State ", state);

	const sortedGames = state
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<div>
			<Head>
				<title>GameBox | Game Finder</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHeaderText
				headerText={"Game Finder"}
				paragraphText={"Not sure which game to play next? We can help you out."}
			/>

			<ul className='md:grid md:grid-cols-2 md:col-gap-10 md:row-gap-10'>
				<li>
					<div className='flex mb-5 mt-6'>
						<div className='flex-shrink-0'>
							<div className='flex items-center justify-center  text-white'>
								<svg
									className=' fill-current text-green-600 inline-block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z' />
								</svg>
							</div>
						</div>
						<div className='ml-4'>
							<h5 className='text-lg leading-6 font-medium text-gray-500 md:text-xl'>
								Enter Video Game name
							</h5>
						</div>
					</div>
					<div className='flex mb-5'>
						<div className='flex-shrink-0'>
							<div className='flex items-center justify-center  text-white'>
								<svg
									className=' fill-current text-green-600  inline-block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z' />
								</svg>
							</div>
						</div>
						<div className='ml-4'>
							<h5 className='text-lg leading-6 font-medium text-gray-500 md:text-xl'>
								Click the "FIND GAMES"
							</h5>
						</div>
					</div>
					<div className='flex mb-5'>
						<div className='flex-shrink-0'>
							<div className='flex items-center justify-center  text-white'>
								<svg
									className=' fill-current text-green-600  inline-block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'>
									<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z' />
								</svg>
							</div>
						</div>
						<div className='ml-4'>
							<h5 className='text-lg leading-6 font-medium text-gray-500 md:text-xl'>
								Discover great video games
							</h5>
						</div>
					</div>
				</li>
			</ul>

			<form onSubmit={registerUser}
			className='mb-0 mt-4 sm:mt-4 flex justify-center '>
				<label htmlFor='name'></label>
				<input
				className='w-2/3 rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white'
				placeholder=' Enter a video game  & get some awesome suggestions EX. Mario Maker'
				
				id='name' name='name' type='text' autoComplete='name' required />
				<button className='text-gray-100 bg-green-600 py-1 px-2 rounded-r-lg  hover:bg-green-800  font-bold uppercase border-purple-500 ' type='submit'>Find Games</button>
			</form>
		

			<Card
				games={sortedGames}
				startCountAt={1}
				headerText={
					"Check out the top 50 best video games, according to players:"
				}
			/>
		</div>
	);
};

export default nintendo;
