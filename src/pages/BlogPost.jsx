import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { CurrentBlogItem } from '../Context/BlogPostSelected'

const ThemeWrapper = styled.div`
  padding: 3rem 0;
`
const BlogPost = () => {
  const [currentBlogItem] = useContext(CurrentBlogItem)

  return (
    <ThemeWrapper>
      <Container>
        <h1
          style={{ color: '#4D4B7D', fontWeight: '700', fontSize: '3rem' }}
          className='mt-5 text-center text-uppercase'
        >
          {currentBlogItem.title}
        </h1>
        <div className='text-muted mb-4 bg-white px-2 py-1 mx-auto lead text-capitalize text-center'>
          Category: {currentBlogItem.category}
        </div>
        <p className='text-secondary text-center'>{currentBlogItem.subTitle}</p>
        <hr />
        <Row>
          <Col md='8' className='mx-auto'>
            <p className='text-secondary'>{currentBlogItem.contentText}</p>
          </Col>
          {/* <Col md='4'>
            <p className='text-secondary'>{currentBlogItem.sideBarText}</p>
          </Col> */}
        </Row>
      </Container>
    </ThemeWrapper>
  )
}

export default BlogPost
