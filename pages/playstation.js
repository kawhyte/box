import React from "react";
import Head from "next/head";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import axios from "axios";
import HighestRatedCard from "../components/HighestRatedCard";

import { getGames } from "../util/getGames";

export const getStaticProps = getGames("(167,48)");

function playstation({ games }) {
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});
//  console.log("sortedGames len",sortedGames.length)
	return (
		<div>
			<Head>
				<title>GameBox | Playstation</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Categories />
			<SectionHeaderText
				headerText={"Best PS  Games"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>
			<HighestRatedCard games={sortedGames} headerText={"2020 PS Games"} />
		</div>
	);
}

export default playstation;
