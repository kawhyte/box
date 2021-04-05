import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Hero: React.FC = () => {
	return (
		<>
			<main className=''>
				<div
					className='flex flex-col mx-auto justify-center  bg-center bg-bgcolor  bg-no-repeat bg-cover '
					style={{
						minHeight: "50vh",
						backgroundImage:
							"linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://res.cloudinary.com/babyhulk/image/upload/a_0/v1615142268/GameBox/ars-games-of-the-year-2020.webp)",
					}}>
					<Head>
						<title> GameBox | Best trending games </title>

						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
						<h1 className='text-4xl sm:text-6xl uppercase gradient-text  font-extrabold text-white max-w-xl tracking-wide'>
							Best trending games in 2021
						</h1>
						<h2 className='text-2xl text-gray-200 mt-4 mb-8'>
							Video games you should be playing on each console.
						</h2>
					</main>
				</div>
			</main>
		</>
	);
};

export default Hero;
