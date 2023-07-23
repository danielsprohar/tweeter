import React from 'react'
import { Children } from '../../../types/children'
import Home from '../../../components/Home'

export default function GipSearchLayout(props: Children) {
  return (
    <>
      <Home />
      {props.children}
    </>
  )
}
