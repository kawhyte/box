import React from 'react'
import Head from "next/head";
import Categories from '../components/Categories';
import SectionHeaderText from '../components/SectionHeaderText';
import HighestRatedCard from '../components/HighestRatedCard';
import { getGames } from "../util/getGames";


export const getStaticProps = getGames(130);




function nintendo({games}) {

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


            <Categories />
            <SectionHeaderText
            headerText={"Best Nintendo Switch Games"}
            paragraphText={
                "We watched a lot of films in 2020. But it wasn’t just about how many"
            }
        />
        <HighestRatedCard
            games={sortedGames}
            headerText={"2020 best Nintendo Switch Games"}
        />

        </div>
    )
}

export default nintendo
