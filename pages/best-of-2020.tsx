import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";
import SectionHeaderText from "../components/SectionHeaderText";
import SectionHero from "../components/SectionHero";
import useSWR from "swr";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GetStaticProps } from "next";
import { GamesoftheYear2020, TrendingGames } from "../data/gameIDs";
import { getGames,getIndexPageGamesByID, getGamesByID } from "../util/getGames";

//export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
//export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
//export const getStaticProps:GetStaticProps = getGames(130);
export const getStaticProps: GetStaticProps = getIndexPageGamesByID(
	TrendingGames,
	GamesoftheYear2020
);

const best_games = ({ games2020 }) => {
	const sortedGames = games2020
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

			<SectionHero games={games2020} headerText={"BEST GAMES OF 2020"} paragraphText = {"Best Games of the Year"} /> 

			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
		</UserProvider>
	);
};

export default best_games;
