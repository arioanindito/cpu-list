import { Link, Route, Routes } from "react-router-dom";
import CreateItem from "./pages/CreateItem";
import EditItem from "./pages/EditItem";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<div>
			{/* Navbar */}
			<nav className="navbar flex bg-orange-200 p-3">
				{/* Navbar Item */}
				<div className="navbarItem flex items-center justify-between rounded-md text-white p-1 px-2 bg-blue-400 hover:bg-blue-600 mr-2">
					<Link to="/">List of CPUs</Link>
				</div>
				<div className="navbarItem flex items-center justify-between rounded-md text-white p-1 px-2 bg-blue-400  hover:bg-blue-600">
					<Link to="/create">Add Item</Link>
				</div>
			</nav>

			{/* Pages */}
			<div className="p-3 h-max">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/edit/:id" element={<EditItem />} />
					<Route path="/create" element={<CreateItem />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
