import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppWrapper } from "../context/AppContent";
import { UserProvider } from "@auth0/nextjs-auth0";
// import '../styles.css'

function MyApp({ Component, pageProps, router }) {
	return (

			<Layout>
			
						<Component {...pageProps} />
					
			
			</Layout>

	);
}

export default MyApp;
