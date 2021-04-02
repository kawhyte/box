import React from "react";
import Link from "next/link";

import { animate, motion } from "framer-motion";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav
				className={
					(props.transparent
						? " top-2 absolute z-50 w-full"
						: "relative  bg-white shadow-lg") +
					" flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg "
				}>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='cursor-pointer w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<a>
								<img
									className=' lg:block h-8 w-auto'
									src='https://res.cloudinary.com/babyhulk/image/upload/v1613758687/GameBox/gamebox-logo-indigo-500-mark-white-text-01.svg'
									alt='Workflow'
								/>

								<div className='flex-shrink-0 flex items-start'>
									<img
										className='hidden  lg:hidden h-8 w-auto'
										src='https://res.cloudinary.com/babyhulk/image/upload/v1613758689/GameBox/gamebox-mark-indigo-500-01.svg'
										alt='Workflow'
									/>
								</div>
							</a>
						</Link>

						<button
							className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<i
								className={
									(props.transparent ? "text-textwhite" : "text-gray-800") +
									" fas fa-bars"
								}></i>
						</button>
					</div>

					<div
						className={
							"lg:flex flex-grow items-center bg-white pl-10 lg:bg-transparent lg:shadow-none" +
							(navbarOpen ? " block rounded shadow-lg bg-gray-300" : " hidden")
						}
						id='example-navbar-warning'>
						<ul className='flex flex-col lg:flex-row list-none mr-auto '>
							<Link href="/goty">
							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-yellow-400 lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800  hover:text-gray-600") +
										" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
									}>
									<i
										className={
											(props.transparent
												? "lg:text-yellow-400 text-yellow-700"
												: "text-gray-500") +
											" fas fa-crown text-lg leading-lg mr-2"
										}
									/>{" "}
									2020 game in review
								</a>
							</motion.li></Link>

							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800  hover:text-gray-600") +
										" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
									}>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fab fa-playstation text-lg leading-lg mr-2"
										}
									/>{" "}
									PlayStation
								</a>
							</motion.li>

							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800  hover:text-gray-600") +
										" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
									}>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fas fa-gamepad text-lg leading-lg mr-2"
										}
									/>{" "}
									Nintendo
								</a>
							</motion.li>

							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800  hover:text-gray-600") +
										" px-3 py-4  cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
									}>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fab fa-xbox text-lg leading-lg mr-2"
										}
									/>{" "}
									Xbox
								</a>
							</motion.li>
						</ul>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='flex items-center'>
								<button
									className={
										(props.transparent
											? "bg-white text-gray-800 active:bg-gray-100"
											: "bg-pink-500 text-textwhite active:bg-pink-600") +
										" text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
									}
									type='button'
									style={{ transition: "all .15s ease" }}>
									<i className='fas fa-arrow-alt-circle-down'></i> Download
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
