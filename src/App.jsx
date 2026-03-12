import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Summary from './pages/article-summary'
import axios from 'axios';
import * as cheerio from "cheerio";
function App() {

// const API_KEY = "AIzaSyCD4gjEs1WbY83mTfhtDbj8G23WUw7WmeY";
// const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// async function analyzeNewsWithAxios(articleUrl) {
//   const requestBody = {
//     contents: [{
//       parts: [{
//         text: `Analyze this news article: ${articleUrl}. Return the headline, a 3-sentence summary, the main image URL, and 3 potential implications.`
//       }]
//     }],
//     tools: [{ url_context: {} }],
//     generationConfig: {
//       responseMimeType: "application/json",
//       responseSchema: {
//         type: "object",
//         properties: {
//           headline: { type: "string" },
//           summary: { type: "string" },
//           main_image_url: { type: "string" },
//           implications: { 
//             type: "array", 
//             items: { type: "string" } 
//           }
//         },
//         required: ["headline", "summary", "main_image_url", "implications"]
//       }
//     }
//   };

//   try {
//     const response = await axios.post(`${BASE_URL}?key=${API_KEY}`, requestBody);
    
//     // The response is nested in candidates[0].content.parts[0].text
//     const rawText = response.data.candidates[0].content.parts[0].text;
//     const data = JSON.parse(rawText);
    
//     console.log("Analysis Result:", data);
//     return data;
//   } catch (error) {
//     console.error("API Error:", error.response ? error.response.data : error.message);
//   }


"https://www.nature.com/articles/d41586-024-00000-x"

  return (
  
      <main className='bg-[#f6f6f8]'>
        <Navbar />
        <section className='max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-6 py-10'>
          <Sidebar/>
          <Hero/>
        </section>
        {/* <Summary /> */}
        
        
      </main>
  )
}

export default App
