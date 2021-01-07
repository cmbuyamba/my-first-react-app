import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
	it('should render', () => {
		const { container } = render(<HelloWorld />)
		expect(container).toMatchSnapshot();
	})
})