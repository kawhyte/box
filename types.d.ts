interface IGame {
	games: [{
	id:number
	name: string
	cover: {
	  id: number
      url: string
	}
}]

headerText: string
}

interface IGameFull{
	games: [{
		id:number
		name: string
		total_rating:number
		rating_count:number
		summary:string
		cover: {
		  id: number
		  url: string
		}
		videos:[{
			id: number,
			name: string,
			video_id: string
		}]
		screenshots:[{
			id: number,
			url: string,
		}]

		platforms: [
			{
			  id: number,
			  abbreviation: string,
			  created_at: number,
			  name: string,
			  platform_logo: number,
			  updated_at: number,
			},
		]
	}]
	
	headerText?: string

}

interface ITags {
list:[
	{name:string}
]
	headerText: string
	tagBGcolor: string
}

interface ISectionHeader {
	paragraphText: string
	headerText: string
}

interface ISectionHeader {
	paragraphText: string
	headerText: string
}