import "./hero.css"
import { FaPlay } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const Hero = ({
	heroData,
	heroCount,
	playStatus,
	setHeroCount,
	setPlayStatus,
}) => {
	return (
		<div className="hero">
			<div className="hero-text">
				<p>{heroData.text1}</p>
				<p>{heroData.text2}</p>
			</div>
			<div className="hero-explore">
				<p>Explore The Features</p>
				<FaArrowRight className="imgg" />
			</div>
			<div className="hero-dot-play">
				<ul className="hero-dots">
					{/* <p>{heroData.text1}</p> */}
					<li
						onClick={() => setHeroCount(0)}
						className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
					></li>
					<li
						onClick={() => setHeroCount(1)}
						className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
					></li>
					<li
						onClick={() => setHeroCount(2)}
						className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
					></li>
				</ul>
				<div className="hero-play">
					<div onClick={() => setPlayStatus(!playStatus)}>
						{playStatus ? (
							<FaPause className="play" />
						) : (
							<FaPlay className="play" />
						)}
					</div>
					<p>See the video</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
