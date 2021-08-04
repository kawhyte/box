import Head from "next/head";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import React from "react";
import { GamesoftheYear2020 } from "../data/gameIDs";
import useSWR from "swr";
import Snippet from "../components/Snippet";
import { getGamesByID } from "../util/getGames";

export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);

const Home = ({ games }) => {
	console.log("GAMES- 1", games)
	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero games={games} headerText={null} />
		</>
	);
};

export default Home;
