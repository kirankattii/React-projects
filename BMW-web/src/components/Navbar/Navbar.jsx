import "./navbar.css"

const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-logo">
				<img
					src="https://www.clipartkey.com/mpngs/m/175-1759035_clip-art-bmw-m3-logo-bmw-m3-logo.png"
					alt=""
				/>
			</div>
			<ul className="nav-menu">
				<li>Home</li>
				<li>Explore</li>
				<li>About</li>
				<li className="nav-contact">Contact</li>
			</ul>
		</div>
	)
}

export default Navbar
