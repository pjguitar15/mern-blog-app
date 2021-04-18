import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
export const BlogItemClicked = React.createContext()
export const CurrentBlogItem = React.createContext()
const BlogPostSelected = ({ children }) => {
  const [currentBlogItem, setCurrentBlogItem] = useState()
  const history = useHistory()

  const blogItemClicked = (item) => {
    setCurrentBlogItem(item)
    history.push(`/blogposts/${item._id}`)
  }
  useEffect(() => {
    console.log(currentBlogItem)
  }, [currentBlogItem])
  return (
    <BlogItemClicked.Provider value={blogItemClicked}>
      <CurrentBlogItem.Provider value={[currentBlogItem, setCurrentBlogItem]}>
        {children}
      </CurrentBlogItem.Provider>
    </BlogItemClicked.Provider>
  )
}

export default BlogPostSelected
