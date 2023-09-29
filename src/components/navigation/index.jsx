"use client"
import { useState } from "react"
import Navbar from "./navbar"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(True)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
    </>
  )
}

export default Navigation
