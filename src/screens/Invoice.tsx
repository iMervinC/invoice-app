import React from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>Het {id}</h1>
    </div>
  )
}

export default Invoice
