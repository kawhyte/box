import React from "react";

export default function Landing() {
	return (
		<>
			<main className=" bg-red-200 pb-32">
				<div className='relative   flex items-center justify-center bg-gray-900'>
				
                
                <div className="absolute inset-0 bg-red-400 w-full h-full ">
                
            <img src=" https://res.cloudinary.com/babyhulk/image/upload/v1613672195/GameBox/pexels-stas-knop-1462725.jpg" />
                
                </div>
        {/*Hero text content*/}
                <div className="relative">
						<h2 className=' text-4xl text-white font-extrabold'>
							Game Game Game
						</h2>




                        <div className='container relative mx-auto '>
						<div className='items-center flex flex-wrap'>
							<div className='w-full lg:w-8/12 px-4 ml-auto mr-auto text-center'>
								<div className='pr-12'>
									<section className='headings text-2xl mb-1  leading-10 font-extrabold text-gray-900 md:sm:text-3xl sm:text-4xl sm:leading-none md:text-5xl'>
										<p className='text-white p-1'>
											Track video games you’ve played.
										</p>
										<p className='text-white p-1'>Save those you want to play.</p>
										<p className='text-white p-1'>Tell your friends what’s good.</p>
										<br className='' />
									</section>
                                    <button class="uppercase tracking-widest px-8 py-3 rounded bg-indigo-600 text-white max-w-max shadow-sm hover:shadow-lg">See the best games of 2020</button>
                                    

								</div>
							</div>
						</div>
					</div>
					</div>






                    
				</div>
			</main>
		</>
	);
}
