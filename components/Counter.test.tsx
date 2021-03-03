import { render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter', () => {
  it('render', () => {
    render(<Counter />)
    expect(screen.getByText('-')).toBeDisabled()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeEnabled()
  })
})
