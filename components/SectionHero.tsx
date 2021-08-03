import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Hero: React.FC<ISectionHeader> = ({headerText, paragraphText}) => {
	return (
		<>
			<main className=''>
				<div
					className='flex flex-col mx-auto justify-center  bg-center bg-bgcolor  bg-no-repeat bg-cover '
					style={{
						minHeight: "50vh",
						backgroundImage:
							"linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80)",
					}}>
					<Head>
						<title> GameBox | Best trending games </title>

						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main className='flex flex-col items-center justify-center flex-1 px-20 text-center my-24'>
						<h1 className='text-4xl sm:text-6xl uppercase gradient-text  font-extrabold text-white max-w-xl tracking-wide'>
						{headerText}	
						</h1>
						<h2 className='text-2xl text-gray-200 mt-4 mb-8'>
							{paragraphText}
						</h2>
					</main>
				</div>
			</main>
		</>
	);
};

export default Hero;
