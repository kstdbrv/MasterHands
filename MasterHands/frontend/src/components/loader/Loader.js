import React from 'react'
import { useSelector } from 'react-redux'
import './loader.scss'

export const Loader = () => {

  const loading = useSelector(state => state.app.isLoading)

    return (
      <p>Loading...</p>
    )
  
}