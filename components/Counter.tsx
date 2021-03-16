import { ClassNamesArg } from '@emotion/react'
import cx from 'classnames'
import { useAtom } from 'jotai'
import { FC, useEffect } from 'react'
import tw, { styled } from 'twin.macro'

import { countAtom, decCountAtom, incCountAtom } from '@/state/counter'

const StyledBtn = styled.button(({ disabled }) => [
  tw`h-12 font-bold rounded-lg bg-blue-100 flex-1`,
  tw`border border-blue-400`,
  disabled && tw`bg-gray-100 border-gray-400 cursor-default opacity-50`,
])

type Props = { className?: ClassNamesArg; start?: number }

const Counter: FC<Props> = (props) => {
  const [count, setCount] = useAtom(countAtom)
  const [, incCount] = useAtom(incCountAtom)
  const [, decCount] = useAtom(decCountAtom)

  useEffect(() => {
    if (typeof props.start !== 'undefined') {
      setCount(props.start)
    }
  }, [setCount, props.start])

  return (
    <div {...props} className={cx(['flex items-center', props.className])}>
      <StyledBtn disabled={count <= 0} onClick={decCount}>
        -
      </StyledBtn>
      <span tw="flex-1 text-center">{count}</span>
      <StyledBtn disabled={count >= 10} onClick={incCount}>
        +
      </StyledBtn>
    </div>
  )
}

export default Counter
