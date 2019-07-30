import React, { Fragment } from "react";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { Cards } from "./cards";
import { Footer } from "./footer";
export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Header />
			<Cards />
			<Footer />
		</Fragment>
	);
}
