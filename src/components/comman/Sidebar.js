import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import {
	MdOutlineExplore,
	MdFavorite,
	MdSettings,
	MdLightMode,
	MdDarkMode,
	MdLogout
} from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
// import {}
const Sidebar = ({ direction }) => {
	return (
		<div
			className={`md:border-r-2 lg:w-full border w-full md:w-20 text-center   `}>
			<div
				className={`md:p-3  md:h-5/6 h-10 px-2 py-0 mb-2 flex flex-${direction} justify-between md:gap-4 mt-5`}>
				<div className=" border-2 border-red-500 text-center h-10  text-2xl  text-red-500 mb-6 hidden md:block ">
					<h1 className="border-b-2 border-x-2  border-red-500 hover:text-black  hover:cursor-pointer hidden md:block lg:hidden  ">
						YR
					</h1>
					<h1 className="border-b-4 border-x-4  border-red-500 hover:text-black hidden hover:cursor-pointer  lg:block  ">
						{' '}YOUR RECIPE
					</h1>
				</div>
				<div className="  lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer  flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10 ">
					<span>
						<FaHome className="w-10  mt-1 h-8 hover:text-red-500  " />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10   ">
						Home
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10  ">
					<span>
						<FaSearch className="w-10  mt-1 h-8 hover:text-red-500 " />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Search
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10  ">
					<span>
						<MdOutlineExplore className="w-10  mt-1 h-8 hover:text-red-500 " />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Explore
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10  ">
					<span>
						<FiPlusCircle className="w-10  mt-1 h-8 hover:text-red-500 " />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Create
					</span>
				</div>

				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    md:flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10 hidden ">
					<span>
						<MdFavorite className="w-10  mt-1 h-8 hover:text-red-500 rounded-full" />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Favorite
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10  ">
					<span>
						<img
							src="/profile.png"
							className="w-9  mt-1 h-9 hover:border-4 hover:border-red-500 rounded-full"
						/>
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Profile
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    md:flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10 hidden ">
					<span>
						<MdSettings className="w-10  mt-1 h-8 hover:text-red-500 rounded-full" />
					</span>
					<span className="w-8 text-lg  mt-1 hidden  lg:inline h-10  ">
						Setting
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    md:flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10 hidden ">
					<span>
						<MdDarkMode className="w-10  mt-1 h-8 hover:text-red-500" />
					</span>
					<span className="w-26 text-lg  mt-1 hidden  lg:inline h-10  ">
						Switch Mode
					</span>
				</div>
				<div className=" lg:hover:bg-slate-900 lg:hover:rounded-3xl  lg:hover:text-red-500  hover:cursor-pointer    md:flex justify-center lg:justify-start lg:px-4  gap-5 lg:w-56 w-12 h-10 hidden">
					<MdLogout className="w-10  mt-1 h-8 hover:text-red-500  " />

					<span className="w-20  text-lg  mt-1 hidden  lg:inline h-10   ">
						Log out
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
