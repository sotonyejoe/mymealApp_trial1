import React from 'react'

export  function Footer() {
  return (
    <footer className="bg-gray-100 py-4 px-8 mt-12 text-center">
        <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Meal Search. All rights reserved.
        </p>
     </footer>
  )
}
