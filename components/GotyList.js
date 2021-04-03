import React from "react";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";
import { filterByConsole } from "../util/getGames";

function GotyList({ games, gameDetails }) {
	const { headerText, paragraphText, gamePlatform } = gameDetails;

	const filteredGames = filterByConsole(games, gamePlatform, null);

	return (
		<>
			<SectionHeaderText
				headerText={headerText}
				paragraphText={paragraphText}
			/>
			<HighestRatedCard
				games={filteredGames}
				headerText={"2020 Highest rated Games"}
				startCountAt={4}
			/>
		</>
	);
}

export default GotyList;
