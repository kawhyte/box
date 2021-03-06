import React from "react";
import axios from 'axios';
import Card from './Card'






const SectionHeaderText = ({ games }) => {

    console.log("GGGGGGGGGG ", games)
	return (
		<div className='container text-textwhite text-center py-10 rounded-xl my-3'>
			<h1 className=' pb-6 text-base font-bold tracking-widest headings uppercase'>Trends</h1>
			<h1 className='pb-6 text-4xl font-black headings'>Best Casual Games</h1>
	
            <Card  	games={games}
            headerText={
                "We watched a lot of films in 2020. But it wasn’t just about how many.."
            }  />

		</div>
	);
}

export default SectionHeaderText;
