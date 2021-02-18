import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Trending from "../components/Trending";

export const getStaticProps = async () => {
	// const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const response = await fetch("http://localhost:8001/games");
	// const response = await fetch("http://zelda-api.apius.cc/api/games?limit=2");

	const data = await response.json();
	console.log("response ", data);
	return {
		props: { games: data },
	};
};

const Home = ({ games }) => {
	//console.log(games)
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
        
			</Head>

			<Hero />

			<Trending games={games.slice(0, 6)} />
		</>
	);
};

export default Home;
