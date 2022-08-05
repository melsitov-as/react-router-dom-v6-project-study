import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Post from '../components/post';

const PostsList = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<h3 key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.label}</Link>
				</h3>
			))}
			<Outlet />
		</>
	);
};

export default PostsList;
