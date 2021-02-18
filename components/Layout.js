import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className='content'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
