import React from "react";

const TagList: React.FC <ITags> = ({ list, headerText, tagBGcolor }) => {

	return (
		<>
			<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
				<h3 className='text-xl font-semibold my-2'>{headerText}</h3>
				<ul className='flex flex-wrap items-center mt-1 mb-2'>
					{list.map((platform, i) => {
						return (
							<span
								key={i}
								className={
									"text-xs font-semibold inline-block py-1 px-2  rounded  uppercase last: m-1  mr-1 " +
									tagBGcolor
								}>
								{platform.name}
							</span>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default TagList;
