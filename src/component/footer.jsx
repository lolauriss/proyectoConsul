import React from "react";

export default function Footer() {
	return (
		<div className="container">
			<p className="m-0 text-center text-white">
				Copyright © Your Website {new Date().getFullYear()}
			</p>
		</div>
	);
}