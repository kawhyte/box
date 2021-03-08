import React from "react";

function Categories() {
	const categories = [
		{ name: "Game of the Year", link: "#goty" },
		{ name: "Best Casual Games", link: "#casual" },
		{ name: "Most Played Games", link: "#played" },
	];

	return (
		<>
			<div className='container flex	flex-col justify-center  bg-blue-600 text-textwhite text-left py-10 rounded-xl my-12 max-w-md  md:max-w-xl lg:max-w-7xl  '>
				<h1 className='border-b pb-3 text-4xl headings font-black uppercase'>
					Categories
				</h1>

				{categories.map((category, i) => {
					return (
						<a href={category.link}>
							<p
								className='border-b py-3 cursor-pointer hover:bg-blue-700  text-lg tracking-wider font-semibold  mt-0 mb-4 headings uppercase'
								key={i}>
								{category.name}
							</p>
						</a>
					);
				})}

				<p className='py-3  tracking-normal text-sm font-thin mb-4 pt-4 text-center'>
					Small detail will be here
				</p>
			</div>
		</>
	);
}

export default Categories;
