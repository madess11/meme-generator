import React from 'react'

export const isTestMode = process.env.NODE_ENV === 'test';

export default function TestNode() {
  return (
    <h1>TestNode</h1>
  )
}
