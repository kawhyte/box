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
		<UserProvider>
		<div className=''>
			<Head>
				<title>GameBox | Video Game Bucket List</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHero headerText={"The Ultimate VIDEO GAME BUCKET LIST"} paragraphText = {"100 games you should play before you die. How many of these games have you played?"} /> 

			 <SectionHeaderText
				headerText={" Top 100 Video Game Bucket List"}
				paragraphText={
					"100 games you should play before you die. How many of these games have you played? "
				}
			/> 

			{/*snippets &&
				snippets.map((snippet) => (
					<Snippet key={snippet.id} snippet={snippet} />
				))*/}

			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
		</UserProvider>
	);
};

export default best_games;
