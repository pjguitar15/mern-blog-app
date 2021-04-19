import React from 'react'
import { useHistory } from 'react-router-dom'
export const BlogItemClicked = React.createContext()
const BlogPostSelected = ({ children }) => {
  const history = useHistory()
  const blogItemClicked = (item) => {
    history.push(`/blogposts/${item._id}`)
  }
  return (
    <BlogItemClicked.Provider value={blogItemClicked}>
      {children}
    </BlogItemClicked.Provider>
  )
}

export default BlogPostSelected
