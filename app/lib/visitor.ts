'use client'

import { useState, useEffect } from 'react'

export function getVisitor() {
  const [visitorDetails, setVisitorDetails] = useState({})

  useEffect(() => {
    const url = 'http://ip-api.com/json'
    fetch(url)
      .then((response) => response.json())
      .then((response) => setVisitorDetails(response))
      .catch((error) => console.error(error))
  }, [])

  return {
    visitorDetails
  }
}