export const getItems = () =>
	fetch("http://localhost:4000").then((res) => res.json());

export const createItems = (todo) =>
	fetch("http://localhost:4000/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});

export const updateItem = (todo, id) =>
	fetch(`http://localhost:4000/${id}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});
