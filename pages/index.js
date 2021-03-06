import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/Card";
import axios from 'axios';
import Welcome from "../components/Welcome";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";

export const getStaticProps = async () => {
	const games = await axios({
		//url: "http://localhost:8001/games",
		url: "https://api.igdb.com/v4/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": process.env.ClientID,
			Authorization: process.env.Authorization,
		},
		data:
			"fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;limit 50; where rating >= 80 & release_dates.date > 1609801680; sort rating desc;",
	})
		.then((response) => {
			// console.log(response.data);
			return response.data;
		})
		.catch((err) => {
			console.error(err);
		});

	return {
		props: { games },
	};
};

const Home = ({ games }) => {
	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<SectionHeaderText
			
			games={games.slice(0, 12)}
			headerText={
				"Check out the top 50 best video games, according to players:"
			}
			/>
			<Welcome />
			<Categories />

			<Card
				games={games}
				headerText={
					"Check out the top 50 best video games, according to players:"
				}
			/>
		</>
	);
};

export default Home;
