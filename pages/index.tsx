import LandingPage from "../src/layouts/landingPage";
import MenuPopover from "../src/components/menuPopover";
import Timer from "../src/components/timer/Timer";
import Information from "../src/layouts/info";
import Testimonies from "../src/layouts/testimonies";
import AfexStory from "../src/layouts/afexstory";

function Main() {
	return (
		<div className='relative'>
			{/* <Header /> */}
			<LandingPage />
			<MenuPopover />
			<Information />
			<Timer />
			<Testimonies />
			<AfexStory />
			{/* <Footer /> */}
		</div>
	);
}

export default Main;
