import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/Card";

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

			<Card games={games.slice(0, 50)} headerText={"Top 50 best video games, according to players:"} />
		</>
	);
};

export default Home;
