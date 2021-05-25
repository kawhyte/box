// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async (req, res) => {

  console.log("REQKen2 ",req.body.name)

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
    search "${req.body.name}"; limit 120; `,
  })
    .then((response) => {

      
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });

  
  res.status(200).json({ games })
}
