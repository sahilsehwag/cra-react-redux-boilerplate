import React, {
	useEffect,
} from 'react'

import {
	useSelector,
} from 'react-redux'

import Routes from 'routes'

const App = () => {
	const error   = useSelector(state => state.common.error)
	const loading = useSelector(state => state.common.loading)


	useEffect(() => {
		if (error !== null)
			console.log(error.message)
	}, [error])

	return (
		<div className="app">
			<Routes/>
			{/* LOADER */}
			{/* TOAST */}
			{loading && <div className="overlay"></div>}
		</div>
	);
}

export default App;
