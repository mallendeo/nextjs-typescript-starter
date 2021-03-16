import { render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter', () => {
  it('render', () => {
    render(<Counter />)
    expect(screen.getByText('-')).toBeDisabled()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeEnabled()
  })

  it('increase', () => {
    render(<Counter />)
    const plusBtn = screen.getByText('+')
    plusBtn.click()
    plusBtn.click()

    expect(plusBtn.previousSibling).toHaveTextContent('2')
  })

  it('decrease', () => {
    render(<Counter start={10} />)
    const minusBtn = screen.getByText('-')
    minusBtn.click()
    minusBtn.click()

    expect(minusBtn.nextSibling).toHaveTextContent('8')
  })
})
