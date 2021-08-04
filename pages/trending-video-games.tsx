import Head from "next/head";
import axios from "axios";
import Welcome from "../components/Welcome";
import Categories from "../components/Categories";
import SectionHero from "../components/SectionHero";
import { gameObj } from "../data/data";
import GOTYList from "../components/GotyList";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { getGames } from "../util/getGames";


// const gameId =
// 	"26192,109462,113112,75235,11169, 133004, 1877, 126098, 134581, 119295, 37001, 115115, 90055, 119313, 75239, 119304, 11155, 119277, 107172, 111837, 131614, 131869, 131970, 123902, 52006, 127816, 107262, 131800, 134606, 133887, 135254, 133152, 131946, 138251, 110834, 36550, 86504, 127591, 123395, 107218, 134706, 114286, 114285, 119260, 90055, 114009, 119386, 103291, 113115, 133923, 116589, 119277, 135301, 137131, 131566, 136498, 103330, 133306, 124701, 127816, 133301, 139032, 123902, 138343, 130216, 119277, 138375, 126459, 124954";

// export const getStaticProps: GetStaticProps = async () => {
// 	const games = await axios({
// 		url: "https://api.igdb.com/v4/games",
// 		method: "POST",
// 		headers: {
// 			Accept: "application/json",
// 			"Client-ID": process.env.ClientID,
// 			Authorization: process.env.Authorization,
// 		},
// 		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms.*,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
// 			 limit 100; where id = (${gameId});;`,
// 	})
// 		.then((response) => {
// 			return response.data;
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});

// 	return {
// 		props: { games },
// 	};
// };

export const getStaticProps:GetStaticProps = getGames("(167,48,130,169,49)");

const GOTY = ({ games }) => {
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHero headerText={"Trending Video Games"} paragraphText = {"Best Video Games of 2021 (so far)"}/>
			<Categories />
			{gameObj.map((item, i) => (
				<GOTYList games={sortedGames} gameDetails={item} key={i} />
			))}
		</motion.div>
	);
};

export default GOTY;
