import React, { useEffect, useState } from 'react'
import {  Link, useSearchParams } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updatePaste } from '../Reducers/pasteSlice';

const Home = () => {

    const [title , setTitle] = useState('');
    const [PasteContent , SetPasteContent] = useState('')
    const [serchParams, setSearchParams] = useSearchParams()
    const pasteId = serchParams.get("pasteid")
    console.log(pasteId);
    
    const dispatch = useDispatch()

    const allPaste = useSelector((state) => state.paste.pastes)
    console.log(allPaste);

    useEffect(() => {
        if(pasteId){{
            const paste = allPaste.find((p) => p._id === pasteId)
            setTitle(paste?.title)
            SetPasteContent(paste?.content)
        }}
    },[pasteId])
    

    function createPaste () {
        const paste = {
            title : title ,
            content: PasteContent,
            _id : pasteId || Date.now().toString(36) ,
            createdAt : new Date().toISOString(),
        }

        if(pasteId){
            //Update
            dispatch(updatePaste(paste))
        }
        else {
            //create
            dispatch( addToPaste(paste))
        }

        // * After Creation and Updation  We Want Clean Form 
        setTitle('')
        SetPasteContent('')
        setSearchParams({})
 
    }

  return (
   
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
            {/* Create / Update Paste Section */}
            <div className="flex flex-col items-center space-y-6">
                {/* Top Row Inputs & Buttons */}
                <div className="flex flex-col sm:flex-row w-full sm:items-center sm:justify-center gap-4">
                    <input
                        className="p-3 rounded-md w-full sm:w-7/12 bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
                        type="text"
                        value={title}
                        placeholder="Enter Title Here"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button
                        onClick={() => createPaste()}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md transition w-full sm:w-fit text-center"
                    >
                        {pasteId ? "Update Paste" : "Create Paste"}
                    </button>

                    {pasteId && (
                        <Link
                        to="/"
                        className="bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-md transition text-center w-full sm:w-fit"
                        onClick={() => {
                            setTitle("");
                            SetPasteContent("");
                        }}
                        >
                        New Paste
                        </Link>
                    )}
                    </div>

                    {/* Textarea Content Input */}
                    <div className="w-full sm:w-11/12 lg:w-[1000px]">
                        <textarea
                            className="w-full bg-slate-800 text-white rounded-xl p-5 min-h-[300px] resize-none focus:outline-none placeholder-gray-400"
                            value={PasteContent}
                            placeholder="Enter your content..."
                            onChange={(e) => SetPasteContent(e.target.value)}
                            rows={20}
                        />
                    </div>
            </div>
        </div>
  )
}

export default Home
