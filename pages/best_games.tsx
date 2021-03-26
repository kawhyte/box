import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";

import { GetStaticProps } from "next";

import { getGames } from "../util/getGames";

export const getStaticProps: GetStaticProps = getGames("(167,48)");

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

	return (
		<div>
			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
	);
};

export default best_games;
