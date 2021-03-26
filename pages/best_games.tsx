import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";

import { GetStaticProps } from "next";

import { getGames } from "../util/getGames";

export const getStaticProps: GetStaticProps = getGames("(167,48)");

const InitialTodos: Array<Todo> = [
	{ text: "mario bro", complete: true },
	{ text: "Zelda", complete: false },
	{ text: "Metroid 2", complete: true },
];

const best_games = ({games}) => {
	const [todos, setTodos] = useState(InitialTodos);

	// const toggleTodo: ToggleTodo = (selectedTodo) => {
	// 	const newTodos = todos.map((todo) => {
	// 		if (todo === selectedTodo) {
	// 			return { ...todo, complete: !todo.complete };
	// 		}
	// 		return todo;
	// 	});

	// 	setTodos(newTodos);
	// };
	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});

		setTodos(newTodos);
	};

	// const sortedGames = games
	// .sort((a, b) => {
	//     return b.total_rating - a.total_rating;
	// })
	// .sort((a, b) => {
	//     return b.rating_count - a.rating_count;
	// });

	return (
		<div>
			<GameList todos={todos} toggleTodo={toggleTodo} />

			{/* <GameListItem  games= {sortedGames[0]} toggleTodo ={toggleTodo}/>
            <GameListItem  games= {sortedGames[1]} toggleTodo ={toggleTodo}/> */}
		</div>
	);
};

export default best_games;
