import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
// Context
import { CurrentBlogItem } from '../Context/BlogPostSelected'
import { ReadData } from '../Context/GetDataFromDB'

const ThemeWrapper = styled.div`
  padding: 3rem 0;
`
const BlogPost = () => {
  const [data] = useContext(ReadData)
  const { param } = useParams()
  useEffect(() => {
    console.log('testt')
  }, [])
  return (
    <ThemeWrapper>
      <Container>
        {data
          .filter(item => item._id === param)
          .map((item, index) => (
            <div key={index}>
              <h1
                style={{
                  color: '#4D4B7D',
                  fontWeight: '700',
                  fontSize: '3rem'
                }}
                className='mt-5 text-center text-uppercase'
              >
                {item.title}
              </h1>
              <div className='text-muted mb-4 bg-white px-2 py-1 mx-auto lead text-capitalize text-center'>
                Category: {item.category}
              </div>
              <p className='text-secondary text-center'>{item.subTitle}</p>
              <hr />
              <Row>
                <Col md='8' className='mx-auto'>
                  <p className='text-secondary'>{item.contentText}</p>
                </Col>
              </Row>
            </div>
          ))}
      </Container>
    </ThemeWrapper>
  )
}

export default BlogPost
