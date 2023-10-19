import React from 'react'
import CallToAction from '../components/CallToAction'
import Specials from '../components/Specials'
import CustomersSay from '../components/CustomersSay'
import Chicago from '../components/Chicago'

export default function Homepage() {
  return (
    <>
        <CallToAction></CallToAction>
        <Specials></Specials>
        <CustomersSay></CustomersSay>
        <Chicago></Chicago>
    </>
  )
}
