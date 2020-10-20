import React from 'react'
import { useSelector } from 'react-redux'
import './loader.scss'

export const Loader = () => {

  const loading = useSelector(state => state.app.isLoading)

  if (loading) {
    return (
      <p>Loading...</p>
    )
  } else {
    return null
  }
}