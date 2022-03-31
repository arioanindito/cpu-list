import React from "react";
import { useNavigate } from "react-router-dom";
import { createItems } from "../api";
import ItemForm from "../components/ItemForm";

export default function CreateTodo() {
	const navigate = useNavigate();

	const onSubmit = async (d) => {
		await createItems(d);
		navigate("/");
	};

	return (
		<div className="flex flex-col p-2 gap-4">
			<div className="flex text-xl">Create New Item</div>
			<ItemForm onSubmit={onSubmit} />
		</div>
	);
}
