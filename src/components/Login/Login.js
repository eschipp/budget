import React from 'react';

const Login = ({ onRouteChange }) => {
	return (
		<div>
			<h1>Welcome to Erin's Budget App!</h1>
			<h2>Please sign in below:</h2>
				<form>
					<label for="user">username:</label><br />
					<input type="text"></input><br />
					<label for="user">password:</label><br />
					<input type="text"></input>
				</form>
			<h2>Or, create a new account!</h2>
		</div>

	)
}

export default Login;