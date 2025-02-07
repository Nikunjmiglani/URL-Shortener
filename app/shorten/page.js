"use client"

import React from 'react'
import { useState } from 'react';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) =>{

             setshorturl("")
                seturl("")
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            alert(result.message)
            console.log(result)})
          .catch((error) => console.error(error));
    }

 
    
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center">
    <div className="bg-purple-200  p-6 rounded-lg shadow-lg max-w-md mx-auto">
    {/* Header Section */}
    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      Generate Your Short URLs
    </h1>
  
    {/* Input and Button Section */}
    <div className="space-y-4">
      {/* Input for Original URL */}
      <input
      value={url}
        type="text"
        placeholder="Enter Your URL"
        onChange={e => seturl(e.target.value)}  
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
  
      {/* Input for Preferred Short URL */}
      <input
      value={shorturl}
        type="text"
        placeholder="Enter Your Preferred Short URL"
        onChange={e => setshorturl(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
  
      {/* Generate Button */}
      <button
        type="button" onClick={generate}
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-medium hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 transition-all"
      >
        Generate
      </button>
    </div>
    {generated && (
      <div className="mt-4">
        <p className="text-gray-800 text-center">
          Your Short URL is:{" "}
          <a
            href={generated}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            {generated}
          </a>
        </p>
      </div>
    )}
  </div>
  </main>
  
  )
}

export default Shorten
