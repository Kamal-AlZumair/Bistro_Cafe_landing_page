import React from "react";
import {
	Hero,
	About,
	Menu,
	Team,
	Testimonials,
	Reservation,
	Footer,
} from "./components";
const App = () => {
	return (
		<div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
			<Hero />
			<About />
			<Menu />
			<Team />
			<Testimonials />
			<Reservation />
			<Footer />
			<div className='h-[380px] md:h-[370px]'></div>
		</div>
	);
};

export default App;
