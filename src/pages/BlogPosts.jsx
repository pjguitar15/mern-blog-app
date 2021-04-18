import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { MyButton } from '../components/MyButton.jsx'
import LoadingBlog from '../components/LoadingBlog.jsx'
import { useHistory } from 'react-router-dom'
// Context
import { BlogItemClicked } from '../Context/BlogPostSelected'
import { DataLoading, ReadData } from '../Context/GetDataFromDB'
const BlogPostWrapper = styled.div`
  /* padding: 10rem 0; */
`
const BlogItemsDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BlogItem = styled.div`
  cursor: pointer;
  transition: box-shadow ease-in-out 100ms;
  padding: 0 2rem;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

const BlogPosts = () => {
  const blogItemClicked = useContext(BlogItemClicked)
  const [data] = useContext(ReadData)
  const [loading] = useContext(DataLoading)
  const history = useHistory()
  return (
    <BlogPostWrapper className='text-dark'>
      <div
        className='text-white text-center'
        style={{ background: '#398D80', padding: '6rem 0' }}
      >
        <h1 className='display-4 font-weight-bold'>Blog Posts</h1>
        <p className='lead'>Read Blog Posts From Around The World</p>
      </div>
      <Container>
        <MyButton
          className='mt-5'
          onClick={() => history.push('/create-blog-post')}
          variant='info mt-4'
          size='sm'
        >
          Create a Blog Post
        </MyButton>
        <BlogItemsDiv>
          {loading && <LoadingBlog />}
          {data.map((item, index) => (
            <BlogItem onClick={() => blogItemClicked(item)} key={index}>
              <div className='my-5'>
                <h5 className='m-0 p-0'>{item.title}</h5>
                <div
                  style={{ fontSize: '12px', letterSpacing: '.5px' }}
                  className='text-secondary'
                >
                  posted by {item.name}
                </div>
                <p className='mt-3 text-secondary'>{item.contentText}</p>
              </div>
            </BlogItem>
          ))}
        </BlogItemsDiv>
      </Container>
    </BlogPostWrapper>
  )
}

export default BlogPosts
