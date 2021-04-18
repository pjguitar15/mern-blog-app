import React, { useState, useEffect } from 'react'
import Axios from 'axios'
export const ReadData = React.createContext()
export const DataLoading = React.createContext()
const GetDataFromDB = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const getData = () => {
    setLoading(true)
    Axios.get('http://localhost:3001/api/read')
      .then(res => setData(res.data))
      .then(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <ReadData.Provider value={[data, setData]}>
      <DataLoading.Provider value={[loading, setLoading]}>
        {children}
      </DataLoading.Provider>
    </ReadData.Provider>
  )
}

export default GetDataFromDB
