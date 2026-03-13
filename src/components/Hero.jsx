import React, {useState} from 'react'
import {FaCheck} from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import axios from 'axios';
import RecentSummary from './RecentSummary';

const Hero = () => {
  const [url, setUrl] = useState("")

  const getNewsText = async (articleUrl) => {
    try {
      const data = await axios.post("http://localhost:3000/analyze", {url: articleUrl});
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(url !== "") {
      getNewsText(url);
    } else {
      console.log("incorrect input")
    }
  }


  return (
    <section className=''>

      <div className="mb-8 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="">
          <h3 className='text-black font-bold text-4xl mb-2'>Summarize the News</h3>
          <p className='text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed'>paste any artilce link below. Quickly use AI to extract the key points, main arguments and takeaway in seconds.</p>

          {/* url form */}
          <form onSubmit={handleSubmit} className='flex items-center'>

            <input type='text' onChange={(e) => setUrl(e.target.value)} className='w-96 mr-4 px-2 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400' placeholder='e.g https://www.nytimes.com'/>

            <button className='bg-[#2214b8] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform cursor-pointer active:scale-95 shadow-lg shadow-primary/20'>submit 
            <span className='text-2xl font-bold'>
              <AiOutlineThunderbolt />
            </span></button>

          </form>


          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <span className="text-sm">
                <FaCheck />
              </span> Any News Source</span>
            <span className="flex items-center gap-1"><span className="text-sm"><FaCheck /></span> Multi-language Support</span>
          </div>
        </div>
      </div>
      <RecentSummary/>
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-primary/60">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-bold">Briefly AI</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">API</a>
            <a className="hover:text-primary" href="#">Support</a>
          </div>
          <div className="text-slate-400 text-xs">
            © 2024 Briefly. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Hero