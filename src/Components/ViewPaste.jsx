import React from 'react'
import { RiUserSmileLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams()
  const allPaste = useSelector((state) => state.paste.pastes)
  
  const paste = allPaste.filter((p) => p._id === id)[0];
  console.log("FinalPaste" , paste);
  


  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8 text-">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* Title Input (View Only) */}
          <input
            className="w-full sm:w-9/12 px-4 py-3 text-slate-400 rounded-md bg-gray-900 text-sl  placeholder-gray-400 cursor-not-allowed"
            type="text"
            value={paste?.title || ""}
            placeholder="Title Not Found"
            disabled
          />

        {/* Content Textarea (View Only) */}
          <textarea
            className="w-full bg-slate-800 text-slate-400  placeholder-gray-400 p-5 rounded-xl min-h-[300px] resize-none cursor-not-allowed"
            value={paste?.content || ""}
            placeholder="No Content Available"
            disabled
            rows={20}
          />
        
      </div>
</div>

  )
}

export default ViewPaste
