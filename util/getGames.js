import axios from "axios";

export function getGames(platform) {
	return async () => {
		const games = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 350; where first_release_date > 1609535390 & platforms = ${platform} & rating > 65;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
			revalidate: 1
		};
	};
}

export function getGamesByID(gameIds) {
	return async () => {
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
			 limit 120; where id = (${gameIds});;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
			revalidate: 1
		};
	};
}
export function getGamesByName(gameName) {
	
	return async () => {
		const games = await axios({
			url: "https://api.igdb.com/v4/games",
			//url: "https://api.igdb.com/v4/search",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			search "${gameName}"; limit 120; `,
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
}

export function filterByConsole(sortedGames, gameId, gameId2) {
	return sortedGames.filter((platforms) => {
		let found = false;
		platforms.platforms.map((element) => {
			if (element.id === gameId || element.id === gameId2) {
				found = true;
			}
		});

		//console.log("Look what I found",found)
		return found;
	});
}
