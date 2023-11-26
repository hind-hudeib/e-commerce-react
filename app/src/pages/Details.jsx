import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const id = useParams()
  return (
    <div>    <div>
        <ul>
            <li>{id}</li>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>

        </ul>
    </div>
    </div>
  )
}

export default Details