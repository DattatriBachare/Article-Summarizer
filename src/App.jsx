import React from 'react';
import { useState } from "react"
import axios from 'axios';

function App(){
  const [text, setText] = useState(null)
  const [summary, setSummary ] =useState("")

  const handdleInput = (e) => {
    setText(e.target.value)
  }

  const Summarizer = async () => {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': 'ee210af6c7mshe0cf93028ed3a1bp17b5f4jsn8ffeb34f5aa6',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
     const response = await axios.request(options)
     setSummary(response.data.summary)
  }
 



  console.log(text)

  return (
    <div className='text-blue-600 text-xl'>
     <div className='h-screen w-screen bg-slate-300 flex items-center justify-center flex-col gap-y-10'>
        <h1 className='text-2xl font-bold'>Article Summarizer</h1>
        <div className='flex item-center justify-center gap-x-2 '>
          <input type="text" className='outline-none border-none rounded-lg px-5' onChange={handdleInput}/>
          <button className='bg-black text-white px-1 rounded-lg'onClick={Summarizer}>click</button>
        </div>
        <div className='h-64 w-96 bg-gray-400 overflow-x-hidden'>
          {summary}
        </div>
     </div>
    </div>
  )
}
export default App;