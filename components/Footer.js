import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
	return (
		<>
			<section className='pb-2 relative block bg-gray-900 mt-12'>
				<div
					className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
					style={{ height: "80px", transform: "translateZ(0)" }}>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'>
						<polygon
							className='text-gray-900 fill-current'
							points='2560 0 2560 100 0 100'></polygon>
					</svg>
				</div>

				<div className='container mx-auto px-4 lg:pt-12 lg:pb-3'>
					<div className='flex flex-wrap justify-center'>
						<div className='w-full lg:w-3/12 px-4 text-center'>
							<div className='text-gray-100 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
								<i className='fas fa-medal text-xl'></i>
							</div>
							<h6 className='text-xl mt-5 font-semibold text-white'>GameBox</h6>
							<p className='mt-2 mb-4 text-gray-500'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className='w-full lg:w-3/12 px-4 text-center'>
							<div className='text-gray-100 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
								<i className='fas fa-poll text-xl'></i>
							</div>
							<h5 className='text-xl mt-5 font-semibold text-white'>
								Grow your market
							</h5>
							<p className='mt-2 mb-4 text-gray-500'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className='w-full lg:w-3/12 px-4 text-center'>
							<div className='text-gray-100 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
								<i className='fas fa-lightbulb text-xl'></i>
							</div>
							<h5 className='text-lg mt-5 font-semibold text-white'>
								Powered by
							</h5>
							<a
								href='https://www.igdb.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<p className='mt-2 mb-4 text-blue-500'>www.igdb.com</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
