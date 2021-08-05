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
							<Link href='/game-of-the-decade'>
								<motion.li
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className='flex items-center'>
									<a
										className={
											(props.transparent
												? "lg:text-buttonYellow lg:hover:text-gray-300  text-gray-800"
												: "text-gray-800  hover:text-gray-600") +
											" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
										}>
										<i
											className={
												(props.transparent
													? "lg:text-buttonYellow  text-buttonYellow"
													: "text-gray-500") +
												" fas fa-crown text-md leading-lg mr-2"
											}
										/>{" "}
										Best games of the decade (2010-2021)
									</a>
								</motion.li>
							</Link>

							<Link href='/trending-video-games'>
								<motion.li
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className='flex items-center'>
									<a
										className={
											(props.transparent
												? "lg:text-buttonYellow lg:hover:text-gray-300  text-gray-800"
												: "text-gray-800  hover:text-gray-600") +
											" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold"
										}>
										<i
											className={
												(props.transparent
													? "lg:text-buttonYellow  text-buttonYellow"
													: "text-gray-500") +
												" fas fa-crown text-md leading-lg mr-2"
											}
										/>{" "}
										Trending games in 2021
									</a>
								</motion.li>
							</Link>
						</ul>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex items-center'>
								<a
									href='https://www.kennywhyte.com/'
									rel='noreferrer noopener'
									target='_blank'
									className={
										(props.transparent
											? "lg:text-gray-100 lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800  hover:text-gray-600") +
										" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-xs uppercase font-bold bg-grey-900"
									}>
									Made by Kenny
								</a>
							</motion.li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
