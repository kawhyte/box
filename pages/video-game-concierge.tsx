import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";
import useSWR from "swr";
import { GetStaticProps } from "next";
import { GamesoftheYear2020 } from "../data/gameIDs";
import { filterByConsole, getGamesByID } from "../util/getGames";

export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);

const best_games = ({ games }) => {
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	const [todos, setTodos] = useState(sortedGames);

	const handleFilter = (todos, num, val) => {
		const test = filterByConsole(todos, num, val);
		console.log("TEST", test);
		setTodos(test);
	};

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});

		setTodos(newTodos);
	};

	const { data: snippets, mutate } = useSWR("api/gamedata");

	return (
		<div className=''>
			<Head>
				<title>GameBox | Video Game Bucket List</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='text-gray-600 body-font mt-20'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font  sm:text-5xl text-5xl mb-4 text-gray-100 headings uppercase font-black'>
							Video Game
							<br className='hidden lg:inline-block' /> Concierge
						</h1>
						<p className='my-8 leading-relaxed'>
							Mix and match the console filters and the years to explore the
							best Video Games for each year. How many of these games have you
							played?{" "}
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-gray-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								2020
							</button>
							{/*	<button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								2019
							</button>*/}
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<div className='w-full mx-auto py-16 '>
							<>
								<h1 className='text-3xl text-center font-semibold mb-6 headings'>
									Filter by Console
								</h1>

								<div className='bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center bg-gray-900'>
									<div className='w-full text-center mx-auto'>
										<div>
											<button
												type='button'
												onClick={() => handleFilter(sortedGames, 48, null)}
												className='border border-indigo-500 text-indigo-300 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 hover:text-gray-100 focus:outline-none focus:shadow-outline'>
												<i
													className={
														"fab fa-playstation text-md  leading-lg mr-2"
													}
												/>
												Playstation
											</button>
										</div>

										<button
											type='button'
											onClick={() => handleFilter(sortedGames, 49, null)}
											className='border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 hover:text-gray-100 focus:outline-none focus:shadow-outline'>
											<i className={"  fab fa-xbox text-md  leading-lg mr-2"} />
											Xbox
										</button>

										<button
											type='button'
											onClick={() => handleFilter(sortedGames, 130, null)}
											className='border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 hover:text-gray-100 focus:outline-none focus:shadow-outline'>
											<i
												className={"fas fa-gamepad text-md  leading-lg mr-2"}
											/>
											Nintendo
										</button>

										<button
											type='button'
											onClick={() => handleFilter(sortedGames, 6, null)}
											className='border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 hover:text-gray-100 focus:outline-none focus:shadow-outline'>
											<i
												className={" fas fa-desktop text-md  leading-lg mr-2"}
											/>
											PC
										</button>
									</div>
								</div>
							</>
						</div>
					</div>
				</div>
			</section>

			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
	);
};

export default best_games;
