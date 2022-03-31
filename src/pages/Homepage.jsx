import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../api";

export default function TodoList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const todos = await getItems();
			setItems(todos);
		};
		fetchItems();
	}, []);

	return (
		<div className="flex flex-col p-2 gap-4 w-1/3">
			<div className="text-4xl">CPU List</div>
			<div className="relative overflow-x-auto shadow-md ounded-sm">
				<table className="w-full text-sm text-left text-gray-500">
					<thead class="text-xs text-gray-700 uppercase bg-blue-100">
						<tr>
							<th scope="col" class="px-6 py-3">
								Brand
							</th>
							<th scope="col" class="px-6 py-3">
								Model
							</th>
							<th scope="col" class="px-6 py-3">
								Socket
							</th>
							<th scope="col" class="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody>
						{items.map((todo) => (
							<tr key={todo._id} class="border-b odd:bg-white even:bg-gray-50">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{todo.brand}
								</th>
								<td class="px-6 py-4">{todo.model}</td>
								<td class="px-6 py-4">{todo.socket}</td>
								<td class="px-6 py-4 underline text-blue-700">
									<Link to={`/edit/${todo._id}`}>Edit</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
