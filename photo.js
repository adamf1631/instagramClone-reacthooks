import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Photo = ({ photo }) => {
	const [like, setLike] = useState(false);
	const likeFunction = () => {
		setLike((like) => !like);
	};

	return (
		<div className='photo'>
			<img src={photo.url} width={"100%"} alt={`Thumbnail: ${photo.id}`} />
			<div className='title'>
				<p className='title'>{photo.title}</p>{" "}
				<div className='icons'>
					<h3>
						<FaHeart
							style={like ? { color: "#a846dd" } : { color: "#fff" }}
							className='heart'
							size={30}
							onClick={() => likeFunction()}
						/>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Photo;
