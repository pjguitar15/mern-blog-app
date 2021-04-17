import React, { useState, useEffect } from 'react'

export const UserThemeSelect = React.createContext()
export const SelectedTheme = React.createContext()
export const ThemeFormSubmit = React.createContext()
const ThemeProvider = ({ children }) => {
  const [userThemeSelect, setUserThemeSelect] = useState({})
  const [selectedTheme, setSelectedTheme] = useState('')
  const themeFormSubmit = (theme, category) => {
    setUserThemeSelect({ theme, category })
  }
  useEffect(() => {
    console.log(userThemeSelect)
  }, [userThemeSelect])
  return (
    <UserThemeSelect.Provider value={[userThemeSelect,
      setUserThemeSelect]}>
      <ThemeFormSubmit.Provider value={themeFormSubmit}>
        <SelectedTheme.Provider value={[selectedTheme, setSelectedTheme]}>
          {children}
        </SelectedTheme.Provider>
      </ThemeFormSubmit.Provider>
    </UserThemeSelect.Provider>
  )
}

export default ThemeProvider
