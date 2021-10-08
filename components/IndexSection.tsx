import React from "react";
import Head from "next/head";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";
import { getGames } from "../util/getGames";
import IndexCard from "../components/IndexCard";
import { GetStaticProps} from 'next'



const nintendo: React.FC<IGameFull>= ({ games, headerText}) => {

    console.log("games ", games)
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<div>
			<Head>
				<title>GameBox | Nintendo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHeaderText
				headerText={headerText}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>

			<IndexCard
				games={sortedGames}
				startCountAt={1}
				headerText={
					"Check out the top 50 best video games, according to players:"
				}
			/>
		</div>
	);
}

export default nintendo;
