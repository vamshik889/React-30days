import React from 'react'
import { useParams } from 'react-router-dom'

const SingleReport = () => {
    const {reportId} = useParams()
  return (
    <div>SingleReport for id: {reportId}</div>
  )
}

export default SingleReport