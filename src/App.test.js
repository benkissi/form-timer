import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('should render all elements', () => {
  const {getByLabelText, queryByText} = render(<App/>)

  const nameLabel = getByLabelText('Name')
  const institutionLabel = getByLabelText("Institution")
  const bioLabel = getByLabelText("Bio")

  expect(nameLabel && institutionLabel && bioLabel).toBeTruthy()
})

it('should render timer', () => {
  const {queryByText} = render(<App/>)
  expect(queryByText(/Duration/)).toBeTruthy()
})

it('should render error message', async () => {
  const {getByText} = render(<App/>)

  const button = getByText('Submit')
  expect(button).toBeTruthy()

  fireEvent.click(button)

  setTimeout(() => {
    const errorText = getByText(/fill in all fields/)
    expect(errorText).toBeTruthy()
  }, 10)
})
