import React from "react";

function Welcome() {
	return (
		<div className='container flex	flex-col justify-center  bg-accentColor lg:bg-transparent  text-textwhite text-center py-8 rounded-xl my-3 mt-48 max-w-md  md:max-w-xl lg:max-w-7xl '>
			<h1 className='border-b pb-6 text-4xl font-black headings md:text-6xl'>WELCOME</h1>
			<p className='border-b py-6 text-xl  font-light leading-relaxed mt-0 mb-4 md:text-2xl '>
				We watched a lot of films in 2020. But it wasn’t just about how many, it
				was about what we saw. As our worlds contracted, our horizons expanded.
				The unasked-for gift of time indoors saw us plug historical gaps,
				discover missing voices, revisit familiar favorites and examine our
				biases. We couldn’t see each other, but we could see movies, and in them
				we saw more of each other than we thought possible. We roamed with
				nomads, walked with wolves, rocked with lovers, crashed the system,
				called for another round, and then we danced. Bring on the world of
				tomorrow.
			</p>
			<p className='  tracking-normal text-sm font-thin  pt-4 text-center'>
			Small detail will be here
		   </p>
		</div>
	);
}

export default Welcome;
