import React, { useState, useEffect, useRef, useContext } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import { ThemeFormSubmit, SelectedTheme } from '../Context/ThemeProvider'
import styled from 'styled-components'
const CreateWrapper = styled.div`
  padding: 10rem 0;
`
const ThemeCard = styled.div`
  background: tomato;
  height: 10rem;
  cursor: pointer;
  &:hover {
    background: #ff7860;
  }
`
const Create = () => {
  const [categoryError, setCategoryError] = useState('')
  const [themeError, setThemeError] = useState('')
  const [cardActive, setCardActive] = useState({})
  const themeFormSubmit = useContext(ThemeFormSubmit)
  const [selectedTheme, setSelectedTheme] = useContext(SelectedTheme)
  const selectRef = useRef()
  const nameRef = useRef()
  const themeRef = useRef()
  const history = useHistory()
  useEffect(() => {
    if (selectedTheme) {
      setThemeError('')
    }
  }, [selectedTheme])
  const nextHandler = () => {
    if (!selectedTheme) {
      setThemeError('Please choose a theme')
      themeRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (selectRef.current.value === 'empty') {
      setCategoryError('Please choose a category')
    } else {
      console.log(nameRef.current.value)
      console.log(selectedTheme.id)
      console.log(selectRef.current.value)
      Axios.post('http://localhost:3001/api/post', {
        title: 'haha',
        name: nameRef.current.value,
        subTitle: 'haha',
        theme: selectedTheme.id,
        contentHeader: 'haha',
        contentText: 'hahah',
        sideBarText: 'haha',
        category: selectRef.current.value
      })

      alert('initial data inserted!')
      themeFormSubmit(selectedTheme, selectRef.current.value)
      history.push('/create-blog-post/theme-select')
      setCategoryError('')
    }
  }
  const themeClicked = item => {
    setSelectedTheme(item)
    setCardActive({ cardActive: item.id })
  }
  return (
    <CreateWrapper>
      <Container>
        <h1 className='display-4 mb-5'>Create Blog Post</h1>
        <hr />
        <div className='my-5'>
          <h3 ref={themeRef}>Select a Theme</h3>
          <p className='lead'>Choose from all our available themes!</p>
          {themeError && <Alert variant='danger'>{themeError}</Alert>}
          <Row>
            <Col
              className={`p-3 ${'1' === cardActive.cardActive && 'border'}`}
              lg='3'
              md='4'
              sm='6'
              xs='12'
            >
              <ThemeCard
                className='position-relative overflow-hidden'
                onClick={() => themeClicked({ id: '1' })}
              >
                <img
                  className='position-absolute'
                  style={{ width: '100%' }}
                  src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/94353f68382503.5b5abd502f0ad.jpg'
                  alt=''
                />
              </ThemeCard>
            </Col>
            <Col
              className={`p-3 ${'2' === cardActive.cardActive && 'border'}`}
              lg='3'
              md='4'
              sm='6'
              xs='12'
            >
              <ThemeCard
                className='position-relative overflow-hidden'
                onClick={() => themeClicked({ id: '2' })}
              >
                <img
                  className='position-absolute'
                  style={{ height: '100%' }}
                  src='https://designmodo.com/wp-content/uploads/2020/07/social-blog.jpg'
                  alt=''
                />
              </ThemeCard>
            </Col>
            <Col
              className={`p-3 ${'3' === cardActive.cardActive && 'border'}`}
              lg='3'
              md='4'
              sm='6'
              xs='12'
            >
              <ThemeCard
                className='position-relative overflow-hidden'
                onClick={() => themeClicked({ id: '3' })}
              >
                <img
                  className='position-absolute'
                  style={{ height: '100%' }}
                  src='https://vishnubaliga.com/img/blog/blog-102/css-tricks.png'
                  alt=''
                />
              </ThemeCard>
            </Col>
            <Col
              className={`p-3 ${'4' === cardActive.cardActive && 'border'}`}
              lg='3'
              md='4'
              sm='6'
              xs='12'
            >
              <ThemeCard
                className='position-relative overflow-hidden'
                onClick={() => themeClicked({ id: '4' })}
              >
                <img
                  className='position-absolute'
                  style={{ width: '100%' }}
                  src='https://thumbs.dreamstime.com/z/blog-web-design-templates-shop-flat-vector-webpage-video-channel-social-media-project-development-service-startup-company-178515501.jpg'
                  alt=''
                />
              </ThemeCard>
            </Col>
          </Row>
          <h3 className='mt-5'>Select a Category</h3>
          {categoryError && <Alert variant='danger'>{categoryError}</Alert>}
          <select
            ref={selectRef}
            className='form-control'
            name='category'
            id='category'
          >
            <option value='empty'>Select a category</option>
            <option value='music'>Music</option>
            <option value='work'>Work</option>
            <option value='games'>Games</option>
            <option value='lifehacks'>Life Hacks</option>
            <option value='technology'>Technology</option>
          </select>
        </div>
        <h3>Your name</h3>
        <input
          ref={nameRef}
          placeholder='We want readers to recognize you'
          type='text'
          className='form-control mb-5'
        />
        <Button onClick={nextHandler}>Next</Button>
      </Container>
    </CreateWrapper>
  )
}

export default Create
