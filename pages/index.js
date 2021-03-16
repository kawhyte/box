import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/Card";
import axios from "axios";
import Welcome from "../components/Welcome";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";

const gameId =
	"26192,109462,113112,75235,11169,133004, 1877, 126098, 134581, 119295, 37001, 115115, 90055, 119313, 75239, 119304, 11155, 119277, 107172, 111837, 131614, 131869, 131970, 123902, 52006, 127816, 107262, 131800, 134606, 133887, 135254, 133152, 131946, 138251, 110834, 36550, 86504, 127591, 123395, 107218, 134706, 114286, 114285, 119260, 90055, 114009, 119386, 103291, 113115, 133923, 116589, 119277, 135301, 137131, 131566, 136498, 103330, 133306, 124701, 127816, 133301, 139032, 123902, 138343, 130216, 119277, 138375, 126459, 124954";

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
		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 500; where release_dates.date > 1577903637 & id = (${gameId});`,
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

const Home = ({ games }) => {
	const sortedGames = games.sort((a, b) => {
		return b.total_rating - a.total_rating;
	}).sort((a,b)=>{
		return b.rating_count - a.rating_count;

	}


	);

	const nintendo = sortedGames.filter((game) => game.platforms.includes(130));
	const ps4 = sortedGames.filter((game) => game.platforms.includes(48));
	const xbox = sortedGames.filter((game) => game.platforms.includes(49));
	const pc = sortedGames.filter((game) => game.platforms.includes(6));



	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero games={sortedGames} />
			<Welcome />
			<Categories />
		
			<SectionHeaderText
				headerText={"Highest rated  OF THE YEAR"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>
			<HighestRatedCard
				games={sortedGames}
				headerText={"2020 Highest rated Games"}
			/>
	
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
		
			<SectionHeaderText
				headerText={"Best PlayStation Games"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>
			<HighestRatedCard games={ps4} headerText={"2020 best PS Games"} />
			
			<SectionHeaderText
				headerText={"Best Xbox Games"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>
			<HighestRatedCard games={xbox} headerText={"2020 best Xbox Games"} />
		
			<SectionHeaderText
				headerText={"Best PC Games"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
			/>
			<HighestRatedCard games={pc} headerText={"2020 best PC Games"} />
			<Card
				games={sortedGames}
				headerText={
					"Check out the top 50 best video games, according to players:"
				}
			/>
		</>
	);
};

export default Home;
