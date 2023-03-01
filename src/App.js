import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfileCard from './components/UserComponents/ProfileCard';
import Sidebar from './components/comman/Sidebar';
import Login from './components/UserComponents/Login';
import Signup from './components/UserComponents/Signup';
import Profile from './components/UserComponents/Profile';
import Explore from './components/Explore';
import Search from './components/Search';
import Recipe from './components/Recipe/Recipe';
import Header from './components/comman/Header';

function App() {
	return (
		<div
			className={`bg-black border-2 border-red-500 flex md:flex-row w-full h-{100%} m-0 mb-10 flex-col  justify-start`}>
			<BrowserRouter>
				<div className="md:flex hidden h-screen sticky top-0 ">
					<Sidebar direction={'col'} />
				</div>
				<Header />
				<div className="flex md:w-5/6 flex-row justify-between">
					<div className=" h-screen w-full ">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/search" element={<Search />} />
							<Route path="/explore" element={<Explore />} />
							<Route path="/recipe" element={<Recipe />} />
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</div>

					<ProfileCard />
				</div>
				<div className="flex  w-screen  md:hidden lg:w-1/6 sticky top-0">
					<Sidebar direction={'row'} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
