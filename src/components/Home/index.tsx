import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc'
const Home = (): ReactElement => {
	return (
		<main>
			<GameList />
		</main>
	)
}

export default withErrorBoundary(Home)
