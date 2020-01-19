import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('App component test', () => {
	const { getByText } = render(<App />)

	//getByText('Са2лююывт')
})