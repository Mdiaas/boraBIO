import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '@stitches/react'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: '$gray800',
  borderRadius: 4,
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  '&[data-state="checked"]': {
    backgroundColor: '$golden',
  },
  '&:focus': {
    border: '2px solid $golden',
  },
})

export const CheckboxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: '$white',
  width: '1.5rem',
  height: '1.5rem',
})
