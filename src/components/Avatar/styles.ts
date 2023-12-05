import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '9999px',
  display: 'inline-block',
  width: 96,
  height: 96,
  overflow: 'hidden',
  border: '2px solid $golden'
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$golden',

  svg: {
    width: 24,
    height: 24,
  },
})
