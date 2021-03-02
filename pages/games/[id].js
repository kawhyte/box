import React from "react";
import ReactPlayer from 'react-player';

export const getStaticPaths = async () => {
	const response = await fetch(
		"http://localhost:8001/games",

		{
			method: "GET",
			headers: {
				// update with your user-agent
				"User-Agent":
					"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
				Accept: "application/json; charset=UTF-8",
			},
		}
	);
	const data = await response.json();

	const paths = data.map((game) => {
		return {
			params: { id: game.id.toString() },
		};
	});

	// console.log("PATHSSS___", paths)

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	// console.log("New ID___", id)

	const response = await fetch(
		"http://localhost:8001/games/" + id,

		{
			method: "GET",
			headers: {
				// update with your user-agent
				"User-Agent":
					"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
				Accept: "application/json; charset=UTF-8",
			},
		}
	);
	const data = await response.json();

	

	return {
		props: { data: data },
	};
};









const Details = ({ data }) => {


	let color = "";
	let skip = "hidden";
	let must_play = "hidden";
	let outstanding = "hidden";
	let try_it = "hidden";

	// console.log(`Game Name: ${name} , Game ID: ${id} `)

	let ratings = (data.rating * 2 * 10).toFixed(0);

	console.log(ratings)

	if (ratings < 80 && ratings >= 60) {
		color = "bg-yellow-500";
		try_it = "";
	}

	if (ratings < 60 && ratings > 0) {
		color = "bg-red-500";
		skip = "";
	}

	if (ratings >= 80) {
		color = "bg-green-600";
		outstanding = "";
	}

	if (ratings === "0") {
		color = "bg-gray-500";
		try_it = "";
	}

	if (ratings >= 86) {
		
		must_play = "";
	}
















	return (
		<>
			<main>
				<div
					className='relative pt-16 pb-32 flex content-center items-center justify-center'
					style={{
						minHeight: "65vh",
					}}>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover'
						style={{
							backgroundImage: `url('${
								"https://res.cloudinary.com/babyhulk/image/fetch/w_1248,h_256,c_fill,r_20,f_auto/" +
								data.background_image
							}')`,
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-black'></span>
					</div>
				
					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>

				<section className='pb-20 bg-gray-300  -mt-32  '>
					<div className='container mx-auto px-4'>
						<div class='py-6'>
							<div class=' relative flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
							<img class='w-3/6 bg-cover' src={data.background_image_additional}></img>
							
								<div class='w-2/3 p-4'>
									<p class='text-gray-900 font-bold text-2xl'>{data.name}</p> 
									 <p class='mt-2 text-gray-600 text-sm'>Released on {data.released}</p>
									<p class='mt-2 text-gray-600 text-sm'>
									Developed by<a className="text-blue-400" href={data.website}> {data.developers[0].name}</a>
									</p>
					


									

									
				









									
								</div>
							</div>
						</div>

						<div className='flex flex-wrap   items-center '>
							<div className='w-full md:w-6/12 px-4 mr-auto ml-auto mb-12 md:mb-0'>
							
								<h3 className='text-3xl mb-2 font-semibold leading-normal'>
									Description
								</h3>
								<p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
									{data.description_raw}
								</p>

								<a
									href='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
									className='font-bold text-gray-800 mt-8'>
									Check Tailwind Starter Kit!
								</a>
							</div>

							<div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
								<div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600'>
					



									<div className="w-full align-middle rounded-t-lg">
									<ReactPlayer url= {data.clip && data.clip.clips[320] ? data.clip.clips[320]  : ""} 
									
									width='100%'
									height='100%'
									controls
									volume={0}
									muted
									
									
									 />
								</div>


									<blockquote className='relative p-8 mb-4'>
								
										<h4 className='text-xl font-bold text-white'>
											{data.name} Video Clip 
										</h4>
										

										<div className="flex"> 

										<div className='mt-4'>
										<span
											className={
												"ml-2 pt-2 text-white text-2xl font-extrabold inline-block py-1 px-3 uppercase rounded-lg last:mr-0 mr-1 space-x-0 " +
												color
											}>
											{ratings === "0" ? "NR" : ratings}
										</span>
										<p className='ml-2 pt-1 py-1 px-1 text-gray-500  text-xs w-24'>
											based on {data.ratings_count} reviews{" "}
										</p>


										</div>




										<div className='flex items-center justify-start leading-tight'>
										<span
											className={
												"py-2 px-2 items-center mr-2 flex flex-col  " +
												must_play
											}>
											<svg
												className="fill-current text-green-600  inline-block h-8 w-8"
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'>
												<path d='M12 12c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.687 6-6-2.686-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm1.39 5.939l-1.39-.743-1.39.744.276-1.552-1.136-1.094 1.562-.215.688-1.419.688 1.419 1.562.215-1.137 1.093.277 1.552zm-9.732-17.925l-.658.986 5.234 7.946c.355-.19.731-.345 1.116-.48l-5.692-8.452zm11.537.986l3.051-3h-12.539l3.293 3h6.195zm4.699-1.661l-.667-1-6.605 9.692c.437.034.859.112 1.274.213l5.998-8.905zm-15.787.001l5.996 8.903c.397-.097.802-.173 1.219-.208l-6.571-9.66-.644.965zm10.541 9.127c.369.13.73.277 1.073.458l5.279-7.925-.657-.986-5.695 8.453z' />
											</svg>
											<p className='px-2 text-xs mt-2 text-gray-400  '>Must-Play</p>
										</span>
										<span
											className={
												"rounded items-center mr-2 text-gray-700 flex flex-col " +
												outstanding
											}>
											<svg
												className='fill-current text-yellow-500 inline-block h-8 w-8'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'>
												<path d='M13.408 18c.498-3.947 5.592-7.197 5.592-17h-14c0 9.803 5.105 13.053 5.604 17h2.804zm-3.614-11.472l1.46-.202.643-1.326.643 1.326 1.46.202-1.063 1.021.26 1.451-1.3-.695-1.3.695.26-1.451-1.063-1.021zm-3.803 4.128c.286.638.585 1.231.882 1.783-4.065-1.348-6.501-5.334-6.873-9.439h4.077c.036.482.08.955.139 1.405h-2.689c.427 2.001 1.549 4.729 4.464 6.251zm10.009 10.963v1.381h-8v-1.381c1.941 0 2.369-1.433 2.571-2.619h2.866c.193 1.187.565 2.619 2.563 2.619zm8-18.619c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076z' />
											</svg>
											<p className={"px-2 text-xs mt-2 text-gray-400  " + outstanding}>Outstanding</p>
										</span>
					
										<span
											className={
												"rounded p-2   items-center mr-2 text-gray-700 flex flex-col " +
												skip
											}>
											<svg
												className='fill-current text-red-500 inline-block h-8 w-8 '
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'>
												<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm.5-11c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5zm-9-5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5z' />
											</svg>
											<p className='px-2 text-xs mt-2 text-gray-500 '>Meh</p>
										</span>
										<span
											className={
												"items-center mr-2 text-gray-700 flex flex-col " +
												try_it
											}>
											<svg
												className='fill-current text-yellow-500 inline-block h-8 w-8 '
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'>
												<path d='M7.084.584c-.216-.375-.608-.584-1.012-.584-.198 0-.399.05-.583.156l-4.905 2.832c-.349.201-.555.556-.581.93-.016.224.032.456.153.665l9.605 16.632c.323.559 1.037.75 1.595.428l4.905-2.831c.559-.322.75-1.037.428-1.595l-9.605-16.633zm5.924 17.231c-.104.386-.5.615-.886.512s-.615-.5-.512-.886c.104-.386.5-.614.886-.512.386.104.615.501.512.886zm-1.139-1.971c-.104.386-.5.615-.886.512-.386-.104-.615-.5-.512-.886.104-.386.5-.614.886-.512.387.104.616.5.512.886zm-2.717-3.682c-.53.307-1.208.125-1.514-.405s-.125-1.208.406-1.514 1.208-.125 1.514.405c.306.531.125 1.208-.406 1.514zm-1.73-7.246l-1.319.762.762 1.318-1.044.603-.761-1.319-1.32.761-.602-1.043 1.319-.762-.762-1.318 1.044-.603.761 1.319 1.32-.761.602 1.043zm16.446 10c-.433-2.17-1.867-2.939-2.964-2.939-1.752 0-3.09 1.759-2.084 4.08 1.055 2.432 1.213 4.507.435 5.692-.793 1.208-2.376 1.208-3.534.3-.252-.207-.491-.464-.713-.766l-1.122.649c.292.432.638.807 1.031 1.117.807.659 1.696.951 2.593.951 1.64 0 3.306-.977 4.54-2.48 1.262-1.54 1.95-3.426 1.95-5.249 0-.459-.043-.912-.132-1.355zm-2.923 5.921c.25-1.447-.068-3.265-.947-5.292-.631-1.454.068-2.284.906-2.284.976 0 1.521.985 1.704 1.906.395 1.98-.32 4.111-1.663 5.67z' />
											</svg>
											<p className=' text-xs mt-2 text-gray-500 '>Worth a try</p>
										</span>
									</div>



									
	
									</div>








									
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='relative py-20'>
			

					<div className='container mx-auto px-4'>
						<div className='items-center flex flex-wrap'>
							<div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
								<img
									alt='...'
									className='max-w-full rounded-lg shadow-lg'
									src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
								/>
							</div>
							<div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
								<div className='md:pr-12'>
									<div className='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
										<i className='fas fa-rocket text-xl'></i>
									</div>
									<h3 className='text-3xl font-semibold'>A growing company</h3>
									<p className='mt-4 text-lg leading-relaxed text-gray-600'>
										The extension comes with three pre-built pages to help you
										get started faster. You can change the text and images and
										you're good to go.
									</p>
									<ul className='list-none mt-6'>
										<li className='py-2'>
											<div className='flex items-center'>
												<div>
													<span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
														<i className='fas fa-fingerprint'></i>
													</span>
												</div>
												<div>
													<h4 className='text-gray-600'>
														Carefully crafted components
													</h4>
												</div>
											</div>
										</li>
										<li className='py-2'>
											<div className='flex items-center'>
												<div>
													<span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
														<i className='fab fa-html5'></i>
													</span>
												</div>
												<div>
													<h4 className='text-gray-600'>
														Amazing page examples
													</h4>
												</div>
											</div>
										</li>
										<li className='py-2'>
											<div className='flex items-center'>
												<div>
													<span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
														<i className='far fa-paper-plane'></i>
													</span>
												</div>
												<div>
													<h4 className='text-gray-600'>Dynamic components</h4>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='pt-20 pb-48'>
					<div className='container mx-auto px-4'>
						<div className='flex flex-wrap justify-center text-center mb-24'>
							<div className='w-full lg:w-6/12 px-4'>
								<h2 className='text-4xl font-semibold'>Here are our heroes</h2>
								<p className='text-lg leading-relaxed m-4 text-gray-600'>
									According to the National Oceanic and Atmospheric
									Administration, Ted, Scambos, NSIDClead scentist, puts the
									potentially record maximum.
								</p>
							</div>
						</div>
						<div className='flex flex-wrap'>
							<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
								<div className='px-6'>
									<img
										alt='...'
										src='/team-1-800x800.jpg'
										className='shadow-lg rounded-full max-w-full mx-auto'
										style={{ maxWidth: "120px" }}
									/>
									<div className='pt-6 text-center'>
										<h5 className='text-xl font-bold'>Ryan Tompson</h5>
										<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
											Web Developer
										</p>
										<div className='mt-6'>
											<button
												className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-twitter'></i>
											</button>
											<button
												className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-facebook-f'></i>
											</button>
											<button
												className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-dribbble'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
								<div className='px-6'>
									<img
										alt='...'
										src='/team-2-800x800.jpg'
										className='shadow-lg rounded-full max-w-full mx-auto'
										style={{ maxWidth: "120px" }}
									/>
									<div className='pt-6 text-center'>
										<h5 className='text-xl font-bold'>Romina Hadid</h5>
										<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
											Marketing Specialist
										</p>
										<div className='mt-6'>
											<button
												className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-google'></i>
											</button>
											<button
												className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-facebook-f'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
								<div className='px-6'>
									<img
										alt='...'
										src='/team-3-800x800.jpg'
										className='shadow-lg rounded-full max-w-full mx-auto'
										style={{ maxWidth: "120px" }}
									/>
									<div className='pt-6 text-center'>
										<h5 className='text-xl font-bold'>Alexa Smith</h5>
										<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
											UI/UX Designer
										</p>
										<div className='mt-6'>
											<button
												className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-google'></i>
											</button>
											<button
												className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-twitter'></i>
											</button>
											<button
												className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-instagram'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
								<div className='px-6'>
									<img
										alt='...'
										src='/team-4-470x470.png'
										className='shadow-lg rounded-full max-w-full mx-auto'
										style={{ maxWidth: "120px" }}
									/>
									<div className='pt-6 text-center'>
										<h5 className='text-xl font-bold'>Jenna Kardi</h5>
										<p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
											Founder and CEO
										</p>
										<div className='mt-6'>
											<button
												className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-dribbble'></i>
											</button>
											<button
												className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-google'></i>
											</button>
											<button
												className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-twitter'></i>
											</button>
											<button
												className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
												type='button'>
												<i className='fab fa-instagram'></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='pb-20 relative block bg-gray-900'>
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

					<div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
						<div className='flex flex-wrap text-center justify-center'>
							<div className='w-full lg:w-6/12 px-4'>
								<h2 className='text-4xl font-semibold text-white'>
									Build something
								</h2>
								<p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
									Put the potentially record low maximum sea ice extent tihs
									year down to low ice. According to the National Oceanic and
									Atmospheric Administration, Ted, Scambos.
								</p>
							</div>
						</div>
						<div className='flex flex-wrap mt-12 justify-center'>
							<div className='w-full lg:w-3/12 px-4 text-center'>
								<div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
									<i className='fas fa-medal text-xl'></i>
								</div>
								<h6 className='text-xl mt-5 font-semibold text-white'>
									Excelent Services
								</h6>
								<p className='mt-2 mb-4 text-gray-500'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
							<div className='w-full lg:w-3/12 px-4 text-center'>
								<div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
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
								<div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
									<i className='fas fa-lightbulb text-xl'></i>
								</div>
								<h5 className='text-xl mt-5 font-semibold text-white'>
									Launch time
								</h5>
								<p className='mt-2 mb-4 text-gray-500'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='relative block py-24 lg:pt-0 bg-gray-900'>
					<div className='container mx-auto px-4'>
						<div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
							<div className='w-full lg:w-6/12 px-4'>
								<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
									<div className='flex-auto p-5 lg:p-10'>
										<h4 className='text-2xl font-semibold'>
											Want to work with us?
										</h4>
										<p className='leading-relaxed mt-1 mb-4 text-gray-600'>
											Complete this form and we will get back to you in 24
											hours.
										</p>
										<div className='relative w-full mb-3 mt-8'>
											<label
												className='block uppercase text-gray-700 text-xs font-bold mb-2'
												htmlFor='full-name'>
												Full Name
											</label>
											<input
												type='text'
												className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
												placeholder='Full Name'
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className='relative w-full mb-3'>
											<label
												className='block uppercase text-gray-700 text-xs font-bold mb-2'
												htmlFor='email'>
												Email
											</label>
											<input
												type='email'
												className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
												placeholder='Email'
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className='relative w-full mb-3'>
											<label
												className='block uppercase text-gray-700 text-xs font-bold mb-2'
												htmlFor='message'>
												Message
											</label>
											<textarea
												rows='4'
												cols='80'
												className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
												placeholder='Type a message...'
											/>
										</div>
										<div className='text-center mt-6'>
											<button
												className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
												type='button'
												style={{ transition: "all .15s ease" }}>
												Send Message
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
export default Details;
