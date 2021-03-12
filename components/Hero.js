import React from "react";

export default function Landing({ games }) {
	console.log(games);
	return (
		<>
			<main className=''>
				<div
					className='relative  pb-6 flex  content-end items-center justify-center  '
					style={{
						minHeight: "50vh",
					}}>
					{/*<div
						className='absolute top-0 w-full max-w-screen-2xl  h-full bg-center bg-cover bg-no-repeat '
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/babyhulk/image/upload/ar_16:9,b_rgb:212830,c_fill,e_gradient_fade:71,g_auto,w_1.0,y_-0.3/a_0/v1615142268/GameBox/ars-games-of-the-year-2020.webp')",
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-75 bg-black  '></span>
					</div>*/}
<div className="">

          <div class="relative w-full grid grid-cols-4 lg:grid-cols-5 lg:gap-4 -skew-y-12">
          <div>		<img
          className='w-full col-span-2  md:w-72 block rounded'
          src={
            games[0].cover &&
            games[0].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[0].name}
        /></div>
          <div>		<img
          className='w-full col-span-3  md:w-72 block rounded'
          src={
            games[1].cover &&
            games[1].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[1].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[2].cover &&
            games[2].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[2].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[3].cover &&
            games[3].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[3].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[4].cover &&
            games[4].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[4].name}
        /></div>
          
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[5].cover &&
            games[5].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[5].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[6].cover &&
            games[6].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[6].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[7].cover &&
            games[7].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[7].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[8].cover &&
            games[8].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[8].name}
        /></div>
          <div>		<img
          className='w-full  md:w-72 block rounded'
          src={
            games[9].cover &&
            games[9].cover.url.replace("t_thumb", "t_cover_big")
          }
          alt={games[9].name}
        /></div>
        </div>


				</div>	

					<div
						className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
						style={{ height: "70px", transform: "translateZ(0)" }}></div>
				</div>
				<div className='container relative mx-auto -mt-32  '>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-10/12 h-10/12  px-4 ml-auto mr-auto text-center'>
							<div className='flex flex-col bg-bgcolor p-12 items-center text-pop-up-top'>
								<p className='text-5xl  font-black headings text-textwhite tracking-wider uppercase   sm:text-6xl md:text-6xl lg:text-15xl xl:text-10xl  '>
									Video Game
								</p>
								<p className='text-5xl font-black headings text-textwhite tracking-wider uppercase   sm:text-5xl md:text-6xl '>
									Concierge
								</p>

								{/*<section className='mb-1  mt-6 leading-10 font- text-gray-900 text-xl  sm:text-3xl md:text-4xl sm:leading-none lg:text-5xl'>
								<p className=' text-textwhite  sm:text-lg p-1'>
									Find the best video games for each year.
								</p>

								<p className='text-textwhite sm:text-lg p-1'>
									Tell your friends what’s good.
								</p>
								<br className='' />
							</section> */}

								{/*<section>
							
								<button className='uppercase   mx-1 text-base tracking-wide px-8 py-3 rounded bg-indigo-600 text-textwhite max-w-max shadow-sm hover:shadow-lg'>
									<i className=" animate-pulse far fa-play-circle">{" "}</i> Get a game Suggestion
								</button>
							</section>*/}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
