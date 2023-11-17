import React, { useEffect, useState } from "react"
import Background from "./components/Background/Background"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

const App = () => {
	let heroData = [
		{ text1: "Drive into", text2: "what you love" },
		{ text1: "Indulge", text2: "your Passion" },
		{ text1: "Give in to", text2: "your passion" },
	]
	const [heroCount, setHeroCount] = useState(0)
	const [playStatus, setPlayStatus] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setHeroCount((count) => {
				return count === 2 ? 0 : count + 1
			})
		}, 3000)
	}, [])

	return (
		<div>
			<Background
				playStatus={playStatus}
				heroCount={heroCount}
			/>
			<Navbar />
			<Hero
				heroData={heroData[heroCount]}
				heroCount={heroCount}
				playStatus={playStatus}
				setHeroCount={setHeroCount}
				setPlayStatus={setPlayStatus}
			/>
		</div>
	)
}

export default App
