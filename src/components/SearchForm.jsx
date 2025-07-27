import React, { useEffect, useState, useRef } from 'react'

export function SearchForm({search, setSearch, handleSearch}) {
  const inputRef = useRef(null)

  const onSearch = (e) => {
    console.log(e)
    e.preventDefault()


    handleSearch(search)
  }

  useEffect(() => {
    if(inputRef.current)
        inputRef.current.focus()
  }, [])

  return (
    <div>
    <form  onSubmit={onSearch}className="flex gap-2 mb-6 w-full max-w-md">
      <input
        type="text"
        name="search"
        ref={inputRef}
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search for meals..."
        className="h-10 px-3 flex-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <button
        type="submit"
        className="h-10 px-4 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition duration-200"
      >
        Search
      </button>
    </form>
  </div>
  )
}
