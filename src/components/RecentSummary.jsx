import React from 'react'

const RecentSummary = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Summaries</h3>
        <button className="text-primary font-semibold text-sm hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* card 1 */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Technology</span>
            <span className="text-xs text-slate-400">2 hours ago</span>
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">The Future of Generative AI in Professional Journalism</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">Exploring how newsrooms are integrating large language models to assist in data analysis and initial drafting...</p>
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400 text-lg">description</span>
              <span className="text-xs font-medium text-slate-500">4 min read original</span>
            </div>
            <div className="flex gap-2">
              <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">bookmark</span></button>
              <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">share</span></button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
        <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Economy</span>
        <span className="text-xs text-slate-400">Yesterday</span>
        </div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">Central Banks Navigate Inflationary Pressures in 2024</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">An analysis of recent policy shifts across major economies and the impact on consumer spending power...</p>
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
        <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-lg">description</span>
        <span className="text-xs font-medium text-slate-500">12 min read original</span>
        </div>
        <div className="flex gap-2">
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">bookmark</span></button>
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">share</span></button>
        </div>
        </div>
        </div>
        
        {/* card 3 */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
        <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Science</span>
        <span className="text-xs text-slate-400">Oct 24, 2023</span>
        </div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">New Insights into Mars Habitability from Rover Data</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">Latest findings from the Perseverance rover suggest ancient river deltas might have harbored microbial life...</p>
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
        <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-lg">description</span>
        <span className="text-xs font-medium text-slate-500">8 min read original</span>
        </div>
        <div className="flex gap-2">
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">bookmark</span></button>
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">share</span></button>
        </div>
        </div>
        </div>
        
        {/* card 3 */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
        <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Health</span>
        <span className="text-xs text-slate-400">Oct 22, 2023</span>
        </div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">Breakthrough in Vaccine Delivery via Nanotechnology</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">Scientists develop a new method to stabilize mRNA vaccines at room temperature using lipid nanoparticles...</p>
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
        <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-lg">description</span>
        <span className="text-xs font-medium text-slate-500">6 min read original</span>
        </div>
        <div className="flex gap-2">
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">bookmark</span></button>
        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">share</span></button>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default RecentSummary