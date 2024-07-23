import { colors } from '@styles/colorPalette'

import { css } from '@emotion/react'

import { useCallback } from 'react'

import { useLocation, Link } from 'react-router-dom'

import Button from './Button'
import Flex from './Flex'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', 'signin'].includes(location.pathname) === false

  const user = null

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <img src="" alt="" />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>SignIn/SignUp</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">Home</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar
