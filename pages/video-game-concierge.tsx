import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";
import SectionHeaderText from "../components/SectionHeaderText";
import SectionHero from "../components/SectionHero";
import useSWR from "swr";
import Snippet from "../components/Snippet";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GetStaticProps } from "next";
import { GamesoftheYear2020 } from "../data/gameIDs";

import { getGames, getGamesByID } from "../util/getGames";

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

			


<section className="text-gray-600 body-font mt-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Video Game Concierge
        <br className="hidden lg:inline-block" />How many of these games have you played?
      </h1>
      <p className="mb-8 leading-relaxed">Mix and match the filters and the years to explore the best Video Games for each year. </p>
      <div className="flex justify-center">
        <button className="inline-flex text-gray-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">2020</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">2019</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>




			 <SectionHeaderText
				headerText={" Top 100 Video Game Bucket List"}
				paragraphText={
					"How many of these games have you played? "
				}
			/> 

		

			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
		
		
	);
};

export default best_games;
