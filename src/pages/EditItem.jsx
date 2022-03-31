import React, { useEffect } from "react";
import { useState } from "react";
import ItemForm from "../components/ItemForm";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem } from "../api";

export default function EditTodo() {
	const navigate = useNavigate();
	const params = useParams();
	const [todo, setTodo] = useState("");

	useEffect(() => {
		const fetchItem = async () => {
			const res = await fetch(`http://localhost:4000/${params.id}`);
			const todo = await res.json();
			setTodo(todo);
		};
		fetchItem();
	}, []);

	const onSubmit = async (d) => {
		await updateItem(d, params.id);
		navigate("/");
	};

	return todo ? (
		<div className="flex flex-col p-2 gap-4">
			<div className="flex text-xl">Edit Item</div>
			<ItemForm
				todo={todo}
				disabled="true"
				cursor="cursor-not-allowed"
				onSubmit={onSubmit}
			/>
		</div>
	) : (
		<div>No Item has Found</div>
	);
}
