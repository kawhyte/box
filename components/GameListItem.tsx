import React from "react";


const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	 console.log( todo)
    
    return (
        
		<div>
			<li>
				<label className={todo.complete ? "line-through": undefined}>
					<input
						type='checkbox'
						checked={todo.complete}
						onChange={() => toggleTodo(todo)}
					/>

					{todo.text}
				</label>
			</li>
		</div>
	);
};

// const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {

//     return (
//         <div>

//             <li>
//                 <label >

//                 <input  type="checkbox" checked={complete}/>
//                 {games.name}
//             </label>

//             </li>

//         </div>
//     )
// }

export default GameListItem;
