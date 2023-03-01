import React from 'react';

const Header = () => {
	return (
		<div className=" flex  w-full text-lg justify-between p-3 md:hidden">
			<div>
				<span className="text-red-500">YOUR RECIPE</span>
			</div>
			<div className="flex w-1/4  justify-between">
				<div>profile</div>
				<div>action</div>
			</div>
		</div>
	);
};

export default Header;
