import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste } from '../Reducers/pasteSlice'
import toast from 'react-hot-toast'

const Pastes = () => {

  const pasteList = useSelector((state) => state.paste.pastes)
  const [searchTerm , setSearchTerm] = useState('')
  console.log(pasteList);

  const dispatch = useDispatch();

  const filterData = pasteList.filter((paste) => 
        paste.title.toLowerCase()
        .includes(searchTerm.toLowerCase())
  )
  console.log(filterData);

  const handleDelete = (pasteId) => {
    dispatch(removePaste(pasteId))
  }
  


  
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-4 sm:p-5">
        {/* Search Input */}
        <input
          type="search"
          value={searchTerm}
          placeholder="Search Here"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-2xl p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
    {/* Paste Cards Container */}
    <div className="w-full max-w-3xl mt-8 space-y-6">
        {filterData.length > 0 ? (
          filterData.map((paste) => (
            <div
              key={paste._id}
              className="bg-gray-800 p-4 sm:p-6 rounded-md shadow-md flex flex-col gap-4"
            >
                  {/* Title & Content */}
                  <div className="text-base sm:text-lg font-semibold break-words">{paste.title}</div>
                  <div className="text-sm break-words">{paste.content}</div>
        
                  {/* Buttons Row (Responsive layout) */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-4">
                    <a
                      href={`/?pasteid=${paste?._id}`}
                      className="bg-black px-4 py-2 rounded text-center hover:bg-gray-700 transition"
                    >
                      Edit
                    </a>
        
                    <a
                      href={`/pastes/${paste?._id}`}
                      className="bg-black px-4 py-2 rounded text-center hover:bg-gray-700 transition"
                    >
                      View
                    </a>
        
                    <button
                      className="bg-black px-4 py-2 rounded hover:bg-gray-700 transition"
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied 😉😉");
                      }}
                    >
                      Copy
                    </button>
        
                    <button
                      className="bg-black px-4 py-2 rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(paste?._id)}
                    >
                      Delete
                    </button>
        
                    <button 
                        className="bg-black px-4 py-2 rounded hover:bg-gray-700 transition"
                        onClick={() => {
                          const shareLink = `${window.location.origin}/pastes/${paste?._id}`;
                          navigator.clipboard.writeText(shareLink)
                          toast.success("Link Copied to Clipboard! 📋");
                        }}
                        
                    >
                      Share
                    </button>
                  </div>
        
                  {/* Timestamp */}
                  <div className="text-xs text-gray-400 text-right">
                    {new Date(paste.createdAt).toLocaleString()}
                  </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-10 text-gray-400">No pastes found.</div>
        )}
      </div>
  </div>
  
  )
}

export default Pastes
