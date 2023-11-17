import "./background.css"
import video1 from "../../assets/v1.mp4"
import img1 from "../../assets/b4.jpg"
import img2 from "../../assets/b6.jpg"
import img3 from "../../assets/b8.jpg"
// import img4 from "../../assets/b4.jpg"

const Background = ({ playStatus, heroCount }) => {
	if (playStatus) {
		return (
			<video
				className="background fade-in"
				autoPlay
				loop
				muted
			>
				<source
					src={video1}
					type="video/mp4"
				/>
			</video>
		)
	} else if (heroCount === 0) {
		return (
			<img
				src={img1}
				className="background fade-in"
				alt=""
			/>
		)
	} else if (heroCount === 1) {
		return (
			<img
				src={img2}
				className="background fade-in"
				alt=""
			/>
		)
	} else if (heroCount === 2) {
		return (
			<img
				src={img3}
				className="background fade-in"
				alt=""
			/>
		)
	}
}

export default Background
