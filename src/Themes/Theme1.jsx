import React, { useState, useContext } from 'react'
import { UserThemeSelect } from '../Context/ThemeProvider'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ThemeWrapper = styled.div`
  padding: 3rem 0;
`
const Theme1 = () => {
  const [title, setTitle] = useState('blog')
  const [
    subTitle,
    setSubTitle
  ] = useState(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi
  iste ipsa perspiciatis minus nemo optio ab asperiores voluptatibus
  nostrum dolores, officiis beatae et! Quisquam saepe recusandae minima
  non similique.`)
  const [userThemeSelect] = useContext(UserThemeSelect)
  const history = useHistory()
  return (
    <ThemeWrapper>
      <Container>
        <Button size='sm' onClick={() => history.goBack()}>
          Back
        </Button>
        <h1
          style={{ color: '#4D4B7D', fontWeight: '700', fontSize: '3rem' }}
          className='mt-5 text-center text-uppercase'
        >
          {title}
        </h1>
        <div className='text-muted mb-4 bg-white px-2 py-1 mx-auto lead text-capitalize text-center'>
          Category: {userThemeSelect.category}
        </div>
        <p className='text-secondary text-center'>{subTitle}</p>
        <hr />
        <Row>
          <Col md='8'>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              quasi iste ipsa perspiciatis minus nemo optio ab asperiores
              voluptatibus nostrum dolores, officiis beatae et! Quisquam saepe
              recusandae minima non similique.
            </p>
          </Col>
          <Col md='4'>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              quasi iste ipsa perspiciatis minus nemo optio ab asperiores
              voluptatibus nostrum dolores, officiis beatae et! Quisquam saepe
              recusandae minima non similique.
            </p>
          </Col>
        </Row>
        <Button size='sm'>Publish</Button>
      </Container>
    </ThemeWrapper>
  )
}

export default Theme1
