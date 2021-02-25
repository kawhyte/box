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

	console.log("PATHSSS___", paths)

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	console.log("New ID___", id)


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
	
	//console.log("New ZELDA-before___", data)

	return {
		props: { zelda: data },
	};
};

const Details = ({zelda}) => {
	
	return (
		<div>
			<h1 className="text-red-500">{zelda.name}</h1>
			<h3 className="text-blue-500">{zelda.description}</h3>
			
			<p>
				<span>Developer: {}</span> 
			</p>
			<p>
				<span>Release date: </span>
			</p>
			<p></p>
		</div>
	);
};
export default Details;
