import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className='content '>
			<Navbar transparent/>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
