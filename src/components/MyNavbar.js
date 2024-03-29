import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">Mao-Planet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              登入
            </Nav.Link>
            {!auth && (
              <Nav.Link as={NavLink} to="/signup">
                註冊
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={NavLink} to="/admin">
                會員專區
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/productcategory">
              產品分類
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student">
              學生資料
            </Nav.Link>
            <NavDropdown
              title="產品"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/product/men"
              >
                MEN
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/product/women"
              >
                WOMEN
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to="/product/kids"
              >
                KIDS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/product/baby"
              >
                BABY
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
