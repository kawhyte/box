import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar2";

const Layout = ({ children }) => {
	return (
		<div className='content'>
			<Navbar transparent/>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
