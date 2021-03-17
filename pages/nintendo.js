import React from 'react'
import Head from "next/head";
import Categories from '../components/Categories';
import SectionHeaderText from '../components/SectionHeaderText';
import axios from "axios";
import HighestRatedCard from '../components/HighestRatedCard';


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
		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 100; where first_release_date > 1577905941 & first_release_date < 1609528341 & rating > 80;`,
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




function nintendo({games}) {

    const sortedGames = games
    .sort((a, b) => {
        return b.total_rating - a.total_rating;
    })
    .sort((a, b) => {
        return b.rating_count - a.rating_count;
    });
    const nintendo = sortedGames.filter((game) => game.platforms.includes(130));
    return (
        <div>
        <Head>
				<title>GameBox | Nintendo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>


            <Categories />
            <SectionHeaderText
            headerText={"Best Nintendo Switch Games"}
            paragraphText={
                "We watched a lot of films in 2020. But it wasn’t just about how many"
            }
        />
        <HighestRatedCard
            games={nintendo}
            headerText={"2020 best Nintendo Switch Games"}
        />
            Games 
        </div>
    )
}

export default nintendo
