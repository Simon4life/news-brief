import React from 'react'

const Summary = () => {
  return (
    <section className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">

            <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary transition-colors" href="#">Home</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <a className="hover:text-primary transition-colors" href="#">Technology</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-medium">Article Summary</span>
            </nav>


            {/* article header */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded">Innovation</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">6 min read original</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-4">
                    The Future of Sustainable Energy: Solar Breakthroughs in 2024
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        <span>Published October 12, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">link</span>
                        <a className="text-primary hover:underline font-medium" href="#">techwire.com/solar-future</a>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 relative">
            <div className="absolute inset-0 bg-gradient-to- from-black/40 to-transparent"></div>
            <img alt="Solar Panels" className="w-full h-full object-cover" data-alt="Modern solar panels reflecting clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBol4OujYsXlLucZ97gjseY2MwSSPij3vqmq4EWI25IrUT5HfoKJQeWVVo2STj-XtXRHsawvjx9g2dAqt5knIkySuPOzq-BpLm1N2Rn90CY_WXLzw6oVhNfxO4lrmHvVROpR3RDmtScMZgDYVDI3Ow_8u78l75plqU4TVggwxACRIyiAqgO1H2lQr93Wz_Ra7m8sfFRzr9dWp4Xc22IfUSL3tKxddDusi6Lk9jgx9dIPX1EBeUiEG0bsosfuOE5r-IqL3mBBhp1IBNP"/>
            </div>

            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                            AI-Generated Summary
                                        </h3>
            <span className="text-xs font-medium text-slate-400 italic">Summarized in 2 seconds</span>
            </div>
            <ul className="space-y-6">
            <li className="flex gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Researchers at MIT have developed a new multi-junction perovskite solar cell that achieves a record-breaking 32.5% efficiency in laboratory tests.
            </p>
            </li>
            <li className="flex gap-4">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                The new technology utilizes sustainable organic materials, significantly reducing the environmental impact and cost compared to traditional silicon-based panels.
                                            </p>
            </li>
            <li class="flex gap-4">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                Commercial scalability has improved with new thin-film manufacturing processes, potentially allowing panels to be integrated into windows and clothing by late 2025.
                                            </p>
            </li>
            <li class="flex gap-4">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                The European Union has announced a €500M grant to accelerate the deployment of these next-gen cells across residential districts in Southern Europe.
                                            </p>
            </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined">content_copy</span>
                                            Copy Summary
                                        </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined">share</span>
                                            Share Article
                                        </button>
            <button className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 w-14 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined">more_horiz</span>
            </button>
            </div>
            </div>

                {/* implications section */}
            <div className="mt-8 bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                        Potential Implications
                    </h3>
                </div>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">eco</span>
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            <span className="font-bold text-slate-900 dark:text-slate-100">Environmental Impact:</span> The transition from silicon to organic materials could reduce the carbon footprint of solar manufacturing by up to 40%.
                        </p>
                    </li>
                    <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span class="material-symbols-outlined text-[14px]">trending_up</span>
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-slate-100">Market Shifts:</span> Increased efficiency and lower production costs are expected to disrupt the current energy market, making decentralized solar power grids economically viable for emerging economies.
                                                    </p>
                    </li>
                    <li className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">rocket_launch</span>
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            <span className="font-bold text-slate-900 dark:text-slate-100">Future Adoption:</span> Integration into everyday objects like windows and wearables will transform infrastructure design, turning cities into massive, passive energy collectors.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Perovskite Cells</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Renewable Tech</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">MIT Research</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Green Energy 2024</span>
                </div>
            </div>
        </div>
    </section>
)}

export default Summary