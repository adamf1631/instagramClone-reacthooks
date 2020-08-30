import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./photo";

const Photos = () => {
	const [photos, getPhotos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const results = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			);
			getPhotos(results.data);
		};
		fetchData();
	}, []);
	console.log(photos);
	return (
		<div className='photos'>
			{photos.map((photo, index) => (
				<Photo key={index} index={index} photo={photo} />
			))}
		</div>
	);
};

export default Photos;
