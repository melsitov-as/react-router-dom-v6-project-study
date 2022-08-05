import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
	const params = useParams();
	const getCurrentPost = (number) => {
		return posts.find((post) => post.id === number);
	};
	const currentPost = getCurrentPost(parseInt(params.postId, 10));
	console.log(currentPost);
	return <p>{currentPost.label}</p>;
};

export default Post;
