import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarComp = () => {
  return (
    <div>
      <Navbar className='p-0' bg='white'>
        <Container>
          <Navbar.Brand className='font-weight-bold text-dark'>
            MERN BLOG APP
          </Navbar.Brand>
          <Nav>
            <NavLink
              activeClassName='is-active'
              className='tags text-dark px-3 text-decoration-none py-3'
              to='/'
              exact
            >
              Home
            </NavLink>
            <NavLink
              activeClassName='is-active'
              className='py-3 text-dark px-3 text-decoration-none'
              to='/blogposts'
            >
              Blog Posts
            </NavLink>
            <NavLink
              activeClassName='is-active'
              className='py-3 text-dark px-3 text-decoration-none'
              to='/create-blog-post'
            >
              Create
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp
