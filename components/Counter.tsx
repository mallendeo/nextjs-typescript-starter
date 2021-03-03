import { ClassNamesArg } from '@emotion/react'
import cx from 'classnames'
import { useAtom } from 'jotai'
import { FC } from 'react'
import tw, { styled } from 'twin.macro'

import { countAtom, decCountAtom, incCountAtom } from '@/state/counter'

const StyledBtn = styled.button(({ disabled }) => [
  tw`h-12 font-bold rounded-lg bg-blue-100 flex-1`,
  disabled && tw`bg-gray-100 cursor-default`,
])

const Counter: FC<{ className?: ClassNamesArg }> = (props) => {
  const [count] = useAtom(countAtom)
  const [, incCount] = useAtom(incCountAtom)
  const [, decCount] = useAtom(decCountAtom)

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
