interface IGame {
	games: [{
	id:number
	name: string
	cover: {
	  id: number
      url: string
	}
}]
startCountAt?: number
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
	startCountAt?:number

}
interface IGameList{
	games: [{
		complete?: boolean
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
	
	complete: boolean

	

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




interface TodoListItemProps{
	todo:IGameList
	ToggleTodo:ToggleTodo
}


interface GameListItemProps {
	todo: Todo;
	toggleTodo: ToggleTodo;
}


type ToggleTodo = (slectedTodo :Todo) => void

interface TodoListProps{

    todos: Array<Todo> 
    toggleTodo: ToggleTodo
}




type Todo = {

    text: string
    complete: boolean
}
