import React from 'react'
import styled from 'styled-components'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Context
import ThemeProvider from './Context/ThemeProvider'
import BlogPostSelected from './Context/BlogPostSelected'
// components
import NavbarComp from './components/NavbarComp.jsx'
import Footer from './components/Footer.jsx'
// pages
import Home from './pages/Home.jsx'
import BlogPosts from './pages/BlogPosts.jsx'
import BlogPost from './pages/BlogPost.jsx'
import CreateBlogPost from './pages/Create.jsx'
// themes
import Theme1 from './Themes/Theme1.jsx'

const MainWrapper = styled.div`
  background: #f8f9fe;
`
const App = () => {
  return (
    <MainWrapper>
      <ThemeProvider>
        <Router>
          <BlogPostSelected>
            <NavbarComp />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/blogposts'>
                <BlogPosts />
              </Route>
              <Route path='/blog-post-item'>
                <BlogPost />
              </Route>
              <Route exact path='/create-blog-post'>
                <CreateBlogPost />
              </Route>
              <Route path='/create-blog-post/theme-select'>
                <Theme1 />
              </Route>
            </Switch>
          </BlogPostSelected>
        </Router>
        <Footer />
      </ThemeProvider>
    </MainWrapper>
  )
}

export default App
