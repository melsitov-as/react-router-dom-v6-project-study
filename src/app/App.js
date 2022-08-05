import React from 'react';
import NavBar from '../components/navBar';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import Stats from '../components/stats';
import PostsList from '../components/postsList';
import Post from '../components/post';

const posts = [
	{ id: 1, label: 'post 1' },
	{ id: 2, label: 'post 2' },
	{ id: 3, label: 'post 3' },
];

function App() {
	return (
		<div className='App'>
			<NavBar />

			{/* <h1>App</h1> */}
			<Routes>
				<Route path='/' element={<App />}></Route>
				<Route index element={<Home />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='dashboard' element={<Dashboard />}></Route>
				<Route path='dashboard/stats' element={<Stats />}></Route>
				<Route path='posts' element={<PostsList posts={posts} />}></Route>
				<Route path='posts/:postId' element={<Post posts={posts} />} />
				<Route path='*' element={<p>There's nothing here!</p>} />
			</Routes>
		</div>
	);
}

export default App;
