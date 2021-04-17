import React from 'react'
import { MyButton } from '../components/MyButton.jsx'
import styled from 'styled-components'
import blogpostlayoutimg from '../Assets/blog-post-layout.png'
import { Container } from 'react-bootstrap'
const Jumbotron = styled.div`
  background: #398d80;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlogPostLayout = styled.div`
  padding: 10rem 0;
  background: #f3f5fd;
  margin: 0;
`
const Home = () => {
  return (
    <>
      <Jumbotron className='text-center text-white'>
        <div>
          <h1 className='display-4 text-capitalize font-weight-bold'>
            Publish your passions, your way
          </h1>
          <p className='lead'>
            Create a unique and beautiful blog. It's easy and free.
          </p>
          <MyButton className='mt-4'>CREATE YOUR BLOG</MyButton>
        </div>
      </Jumbotron>
      <BlogPostLayout className='text-dark'>
        <Container>
          <div className='text-center mb-5'>
            <h1 className='display-4 p-0'>A Guide for Beginners</h1>
            <p className='lead'>
              To make it look pretty and get people's attention, make sure to
              follow this guide.
            </p>
          </div>
          <div className='row mt-5 bg-white align-items-center d-flex'>
            <div className='col-md-6 mx-auto m-0 p-0'>
              <img style={{ width: '100%' }} src={blogpostlayoutimg} alt='' />
            </div>
            <div className='col-md-6 text-left p-5'>
              <h3>Select a Preffered theme</h3>
              <p className='lead' style={{ lineHeight: '2.5rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate animi enim ad harum rerum, nam ratione quae eveniet
                odio non itaque quis numquam mollitia laudantium velit
                architecto id iste fugit!
              </p>
              <p className='lead' style={{ lineHeight: '2.5rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate animi enim ad harum rerum, nam ratione.
              </p>
            </div>
          </div>
        </Container>
      </BlogPostLayout>
    </>
  )
}

export default Home
