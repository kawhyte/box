import React from "react";
import axios from "axios";
import Card from "./Card";
import ReactPlayer from "react-player/youtube";

const SectionHeaderText = ({headerText, paragraphText}) => {
	
	return (
		<div id="casual" className='container container flex lg:bg-transparent	flex-col justify-center bg-bgcolor text-textwhite text-center py-10 rounded-xl my-3 max-w-md  md:max-w-xl lg:max-w-7xl'>
			<h1 className=' pb-6 text-base font-bold tracking-widest headings uppercase'>
				Trends
			</h1>
			<h1 className='pb-6 text-3xl font-black headings uppercase'>{headerText}</h1>
			<p className=' py-2 text-xl font-light leading-relaxed mt-0 mb-6 '>
				{paragraphText}
			</p>
		</div>
	);
};

export default SectionHeaderText;
