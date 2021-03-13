import React from "react";
import Link from "next/link";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav
				className={
					(props.transparent
						? "top-0 absolute z-50 w-full"
						: "relative  bg-white shadow-lg") +
					" flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
				}>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							href='/'
							className={
								(props.transparent ? "text-textwhite" : "text-gray-800") +
								" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
							}>
							<a>
								<img
									className=' lg:block h-8 w-auto'
									src='https://res.cloudinary.com/babyhulk/image/upload/v1613758687/GameBox/gamebox-logo-indigo-500-mark-white-text-01.svg'
									alt='Workflow'
								/>
							</a>
						</Link>

						<div className='flex-shrink-0 flex items-start'>
							<img
								className='hidden  lg:hidden h-8 w-auto'
								src='https://res.cloudinary.com/babyhulk/image/upload/v1613758689/GameBox/gamebox-mark-indigo-500-01.svg'
								alt='Workflow'
							/>
						</div>

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
							"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
							(navbarOpen ? " block rounded shadow-lg bg-gray-300" : " hidden")
						}
						id='example-navbar-warning'>
						<ul className='flex flex-col lg:flex-row list-none mr-auto '>
							<li className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300  text-gray-800"
											: "text-gray-800 hover:text-gray-600") +
										" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									}
									href='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing'>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" far fa-file-alt text-lg leading-lg mr-2"
										}
									/>{" "}
									About
								</a>
							</li>
						</ul>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300 text-gray-800"
											: "text-gray-800 hover:text-gray-600") +
										" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									}
									href='#pablo'>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fab fa-facebook text-lg leading-lg "
										}
									/>
									<span className='lg:hidden inline-block ml-2'>Share</span>
								</a>
							</li>

							<li className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300 text-gray-800"
											: "text-gray-800 hover:text-gray-600") +
										" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									}
									href='#pablo'>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fab fa-twitter text-lg leading-lg "
										}
									/>
									<span className='lg:hidden inline-block ml-2'>Tweet</span>
								</a>
							</li>

							<li className='flex items-center'>
								<a
									className={
										(props.transparent
											? "lg:text-textwhite lg:hover:text-gray-300 text-gray-800"
											: "text-gray-800 hover:text-gray-600") +
										" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									}
									href='#pablo'>
									<i
										className={
											(props.transparent
												? "lg:text-gray-300 text-gray-500"
												: "text-gray-500") +
											" fab fa-github text-lg leading-lg "
										}
									/>
									<span className='lg:hidden inline-block ml-2'>Star</span>
								</a>
							</li>

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
