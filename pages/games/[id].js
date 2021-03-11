import React from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import toDate from "date-fns/toDate";
import TagList from "../../components/TagList";

const gameId =
	"26192,109462,113112,75235,11169,133004, 1877, 126098, 134581, 119295, 37001, 115115, 90055, 119313, 75239, 119304, 11155, 119277, 107172, 111837, 131614, 131869, 131970, 123902, 52006, 127816, 107262, 131800, 134606, 133887, 135254, 133152, 131946, 138251, 110834, 36550, 86504, 127591, 123395, 107218, 134706, 114286, 114285, 119260, 90055, 114009, 119386, 103291, 113115, 133923, 116589, 119277, 135301, 137131, 131566, 136498, 103330, 133306, 124701, 127816, 133301, 139032, 123902, 138343, 130216, 119277, 138375, 126459, 124954";

export const getStaticPaths = async () => {
	const games = await axios({
		url: "https://api.igdb.com/v4/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": process.env.ClientID,
			Authorization: process.env.Authorization,
		},
		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
		limit 500; where release_dates.date >= 1578681411 & id = (${gameId}) & version_parent = null;`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.error(err);
		});

	const paths = games.map((game) => {
		return {
			params: { id: game.id.toString() },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const data = await axios({
		url: "https://api.igdb.com/v4/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": process.env.ClientID,
			Authorization: process.env.Authorization,
		},
		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms.*,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;limit 1; where id = ${id};`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.error(err);
		});

	return {
		props: { data: data },
	};
};

const Details = ({ data }) => {
	let factor = 3.5;
	let color = "";
	let skip = "hidden";
	let must_play = "hidden";
	let outstanding = "hidden";
	let try_it = "hidden";
	let convertedDate = toDate(data[0].first_release_date);

	let ratings = data[0].rating && data[0].rating.toFixed(0);

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
	console.log("YYYYY3", data[0].release_dates[0].date);
	return (
		<>
			<main>
				<div
					className='relative pt-16 pb-32 flex content-center items-center justify-center'
					style={{
						minHeight: "35vh",
					}}>
					<div
						className='absolute top-0 w-full h-full bg-center bg-cover'
						style={{
							backgroundImage: `url('${
								"https://res.cloudinary.com/babyhulk/image/fetch/w_1248,h_256,c_fill,r_20,f_auto/" +
									data.screenshots &&
								data[0].screenshots[0].url.replace(
									"t_thumb",
									"t_screenshot_big"
								)
							}')`,
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-black bg-bgcolor'></span>
					</div>

					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>

				<section className='pb-8 md:pb-20 bg-bgcolor  -mt-32   '>
					<div className='container mx-auto px-4'>
						<div className='py-6'>
							<div className=' relative flex flex-col md:flex-row justify-center items-center  max-w-xl min-w-min bg-white overflow-hidden'>
								<img
									className='w-3/6 min-w-max bg-cover '
									src={
										data[0].cover &&
										data[0].cover.url.replace("t_thumb", "t_cover_big")
									}></img>

								<div className='w-2/3 p-4'>
									<p className='text-textwhite text-center md:text-left font-bold text-2xl'>
										{data[0].name}
									</p>
									<time className='mt-2  text-base text-center md:text-left md:text-base'>
										Released on {data[0].release_dates[0].date}
									</time>
									<p className='mt-2  text-base text-center md:text-left md:text-base'>
										Genre: {data[0].genres[0].name}
									</p>

									<div className='mt-6 flex flex-col justify-center px-4 py-2 bg-white border border-gray-300 rounded'>
										<div>
											<p
												className={
													"text-3xl rounded font-semibold text-center bg-green-500 text-textwhite mt-2 " +
													color
												}>
												{data[0].rating && data[0].rating.toFixed(0)
													? data[0].rating.toFixed(0) + "%"
													: "Not Rated"}
											</p>

											<div className='flex items-center justify-center  leading-tight mt-2 '>
												<span
													className={
														"py-2 px-2 items-center mr-2 flex flex-col  " +
														must_play
													}>
													<svg
														className='fill-current text-green-600  inline-block h-8 w-8'
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'>
														<path d='M12 12c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.687 6-6-2.686-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm1.39 5.939l-1.39-.743-1.39.744.276-1.552-1.136-1.094 1.562-.215.688-1.419.688 1.419 1.562.215-1.137 1.093.277 1.552zm-9.732-17.925l-.658.986 5.234 7.946c.355-.19.731-.345 1.116-.48l-5.692-8.452zm11.537.986l3.051-3h-12.539l3.293 3h6.195zm4.699-1.661l-.667-1-6.605 9.692c.437.034.859.112 1.274.213l5.998-8.905zm-15.787.001l5.996 8.903c.397-.097.802-.173 1.219-.208l-6.571-9.66-.644.965zm10.541 9.127c.369.13.73.277 1.073.458l5.279-7.925-.657-.986-5.695 8.453z' />
													</svg>
													<p className='px-2 text-xs mt-2 text-gray-100  '>
														Superb
													</p>
												</span>
												<span
													className={
														"rounded items-center mr-2 text-gray-100 flex flex-col " +
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
													<p
														className={
															"px-2 text-xs mt-2 text-gray-100  " + outstanding
														}>
														Gold
													</p>
												</span>

												<span
													className={
														"rounded p-2   items-center mr-2 text-gray-100 flex flex-col " +
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
													<p className='px-2 text-xs mt-2 text-gray-100 '>
														Meh
													</p>
												</span>
												<span
													className={
														"items-center mr-2 text-gray-100 flex flex-col " +
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
													<p className=' text-xs mt-2 text-gray-100 '>
														Worth a try
													</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='flex flex-wrap flex-col items-center  '>
							<div className='w-full  px-4 mr-auto sm:mb-12 md:mb-0'>
								<p className='text-lg font-light leading-relaxed mt-4 mb-4  '>
									{data[0].summary}
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='container bg-lightgray flex flex-col justify-center items-center py-3 '>
					<div className=' flex flex-col align-middle justify-center items-center rounded-t-lg '>
						<h4 className='text-xl text-textwhite font-bold  py-4 text-center  '>
							{data[0].name} Trailer
						</h4>

						<ReactPlayer
							className=' bg-red-200'
							url={`https://www.youtube.com/watch?v=${data[0].videos[0].video_id}`}
							width={`${factor * 16}vw`}
							height={`${factor * 9}vw`}
							playing
							loop
							controls
							volume={0}
							muted
						/>
					</div>
				</section>

				<section className='pt-20 pb-48'>
					<div className='container mx-auto px-4'>
						{data[0].storyline ? (
							<div className='flex flex-wrap justify-center text-center mb-24'>
								<div className='w-full lg:w-11/12 px-4'>
									<h2 className='text-xl font-semibold'>STORYLINE</h2>
									<p className='text-lg leading-relaxed m-4 text-gray-600'>
										{data[0].storyline}
									</p>
								</div>
							</div>
						) : (
							""
						)}
						<div className='flex flex-wrap'>
							<TagList
								list={data[0].genres}
								tagBGcolor={"bg-gray-700"}
								bg-blue-100
								headerText={"Genre"}
							/>

							<TagList
								list={data[0].platforms}
								tagBGcolor={"bg-blue-100"}
								headerText={"Platform"}
							/>

							<TagList
								list={data[0].platforms}
								tagBGcolor={"bg-green-700"}
								headerText={"Platform"}
							/>

							<TagList
								list={data[0].platforms}
								tagBGcolor={"bg-indigo-700"}
								headerText={"Platform"}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
export default Details;
