import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
	const data = useLoaderData()

	// const [data, setData] = useState([])
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/kirankattii")
	// 		.then((responce) => responce.json())
	// 		.then((data) => {
	// 			console.log(data)
	// 			setData(data)
	// 		})
	// }, [])
	return (
		<div className="text-center m-5 bg-gray-500 text-white p-4 text-3xl">
			GitHub followers: {data.followers}
			<img
				className="flex justify-center"
				src={data.avatar_url}
				alt="git picture"
				width={300}
			/>
		</div>
	)
}

export default Github
export const githubInfoLoader = async () => {
	const responce = await fetch("https://api.github.com/users/kirankattii")
	return responce.json()
}
