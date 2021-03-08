import React from "react";
import axios from "axios";
import Card from "./Card";
import ReactPlayer from "react-player/youtube";

const SectionHeaderText = ({ games }) => {
	
	return (
		<div id="casual" className='container container flex	flex-col justify-center max-w-md bg-bgcolor text-textwhite text-center py-10 rounded-xl my-3'>
			<h1 className=' pb-6 text-base font-bold tracking-widest headings uppercase'>
				Trends
			</h1>
			<h1 className='pb-6 text-4xl font-black headings uppercase'>Best Casual Games</h1>
			<p className=' py-2 text-xl font-light leading-relaxed mt-0 mb-6 '>
				We watched a lot of films in 2020. But it wasn’t just about how many..
			</p>
		</div>
	);
};

export default SectionHeaderText;
