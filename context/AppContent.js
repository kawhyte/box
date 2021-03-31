import { createContext, useContext, useState } from "react";
import { useState } from "react";

const AppContext = createContext();

import { getGames } from "../util/getGames";

export const getStaticProps = getGames("(130)");

export function AppWrapper({ children }) {
	const [todos, setTodos] = useState([]);

	let sharedState = {
		todos,
		setTodo,
		refreshTodo,
		updateTodo,
		deleteTodo,
		addTodo,
		/* whatever you want */
	};

  const refreshTodos = async () => {
    try {
        const res = await fetch('/api/getTodos');
        const latestTodos = await res.json();
        setTodos(latestTodos);
    } catch (err) {
        console.error(err);
    }
};

	return (
		<AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
