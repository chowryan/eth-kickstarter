import React from 'react'
import { Menu } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>
        CrowdCoin
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
