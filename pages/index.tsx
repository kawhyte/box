import Head from "next/head";
import Hero from "../components/Hero";
import axios from "axios";
import { GetStaticProps } from 'next'
import  React  from 'react';
import {GamesoftheYear2020} from '../data/gameIDs'
import useSWR from 'swr'
import Snippet from '../components/Snippet'



export const getStaticProps: GetStaticProps = async () => {
	const games = await axios({
		//url: "http://localhost:8001/games",
		url: "https://api.igdb.com/v4/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": process.env.ClientID,
			Authorization: process.env.Authorization,
		},
		data: `fields age_ratings,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 100; where id = (${GamesoftheYear2020});;`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.error(err);
		});

	return {
		props: { games },
	};
};





const Home  = ({ games }) => {



	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

	

			<Hero games ={games} headerText={null}  />
		</>
	);
};

export default Home;
