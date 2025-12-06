import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Mic, BarChart3, Heart, Brain, ChevronDown, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Database, Network, Zap, Search, Waypoints, Cpu, Layers, BookOpen, X, Maximize2, MessageSquare, Play, Film, CheckCircle2, AlertCircle, Volume2, Timer, Edit2, Link, Globe, RefreshCw } from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-800 shadow-teal-700/20",
    secondary: "bg-white text-teal-800 border border-teal-100 hover:bg-teal-50",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="flex items-center opacity-80" aria-hidden="true">
      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
      <div className="w-6 h-[1.5px] bg-current"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
    </div>
    <span className="font-serif font-bold text-xl tracking-tight">2 Dots 1 Line</span>
  </div>
);

const Hero = () => (
  <div className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-b from-teal-50 to-[#FAFAF9]">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

    <FadeIn>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-teal-100 shadow-sm mb-8 text-teal-800 text-sm font-medium backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-teal-600" />
        <span>Discover the unseen in the everyday</span>
      </div>
    </FadeIn>

    <FadeIn delay={200}>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
        See beyond the <span className="text-teal-700 italic">Line</span>.
      </h1>
    </FadeIn>

    <FadeIn delay={400}>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        "Two dots, one line" is a proverb for a predictable life—the routine path from home to school. We help you break the dullness of path dependency to realize inner needs and discern subtle trends hidden in the daily loop.
      </p>
    </FadeIn>

    <FadeIn delay={600}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
        <Button className="w-full sm:w-auto">Start Your Journey <ArrowRight size={18} /></Button>
        <Button variant="secondary" className="w-full sm:w-auto">Watch Demo</Button>
      </div>
    </FadeIn>

    <div className="absolute bottom-10 animate-bounce text-gray-400">
      <ChevronDown size={32} />
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <FadeIn delay={delay}>
    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-teal-900/5 border border-teal-50 h-full hover:border-teal-200 transition-colors">
      <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-700">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

const ProblemSolution = () => (
  <Section className="bg-white rounded-t-[3rem] -mt-10 relative z-10 shadow-inner">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect the dots of their childhood</h2>
      <p className="text-gray-600">Parenting is a marathon of details. Seemingly irrelevant events—a mood swing, a sudden interest in blocks, a grade in math—are actually clues to their inner universe.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard 
        icon={Mic} 
        title="Just Talk" 
        description="No complex forms. Just spend 2 minutes speaking or writing about their day. We handle the rest." 
        delay={0}
      />
      <FeatureCard 
        icon={Brain} 
        title="We Analyze" 
        description="Our system tracks growth, interactions, and feelings to build a comprehensive psychological and developmental profile." 
        delay={200}
      />
      <FeatureCard 
        icon={TrendingUp} 
        title="Discover Strengths" 
        description="Identify hidden talents and patterns early. Optimize your resources to guide them where they naturally thrive." 
        delay={400}
      />
    </div>
  </Section>
);

const DecisionMastery = () => (
  <Section className="bg-[#1C1917] text-[#E7E5E4] !max-w-none rounded-t-[4rem] relative overflow-hidden mt-12 pb-32">
     <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#292524] to-transparent pointer-events-none"></div>
     
     <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 pt-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-semibold tracking-wider uppercase mb-6">
                Parental Confidence
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                Silence the Noise.<br/>Master Your Decisions.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                The world is full of expensive camps and peer pressure. Stop guessing what they need based on what others are doing. Start deciding based on the data you already have.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Story Card 1: Math */}
            <div className="bg-[#292524] rounded-3xl p-1 shadow-2xl hover:shadow-teal-900/10 transition-shadow duration-500 group">
                <div className="bg-[#1C1917] h-full rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
                    {/* The Struggle */}
                    <div className="relative z-10 mb-8">
                        <div className="inline-flex gap-3 items-center mb-4 opacity-50">
                            <AlertCircle size={16} className="text-orange-400"/>
                            <span className="text-sm font-mono uppercase tracking-widest text-orange-200">The Struggle</span>
                        </div>
                        <div className="text-2xl font-serif text-white leading-relaxed italic relative">
                            <span className="text-6xl absolute -top-4 -left-4 text-white/5 font-serif">“</span>
                            I'm just not a math person. Everyone finishes before me.
                            <span className="text-6xl absolute -bottom-8 -right-4 text-white/5 font-serif">”</span>
                        </div>
                    </div>

                    {/* The Noise (Peer Pressure) */}
                    <div className="flex flex-wrap gap-2 mb-8 opacity-40 group-hover:opacity-20 transition-opacity">
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Kumon?</span>
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Speed Drills</span>
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Math Olympiad</span>
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Tutors</span>
                    </div>

                    {/* The Dot Insight */}
                    <div className="bg-gradient-to-br from-[#2D3330] to-[#1F2422] rounded-xl p-6 border border-[#3D5A42]/30 mb-8 transform group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                            <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">Dot Analysis</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0"/>
                                <p className="text-sm text-gray-300"><span className="text-white font-medium">Pattern Recognition:</span> Excellent (Top 10% in Logic Puzzles).</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Timer size={16} className="text-red-400 mt-0.5 shrink-0"/>
                                <p className="text-sm text-gray-300"><span className="text-white font-medium">Anxiety Trigger:</span> Timed drills & public recitation.</p>
                            </div>
                        </div>
                    </div>

                    {/* The Master Decision */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-sm text-gray-500 mb-2 font-mono uppercase">Your Decision</p>
                        <p className="text-lg text-white font-medium">
                            Cancelled the speed drills. Switched to untimed logic games. <span className="text-teal-400">Confidence restored.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Card 2: Swimming */}
            <div className="bg-[#292524] rounded-3xl p-1 shadow-2xl hover:shadow-teal-900/10 transition-shadow duration-500 group">
                <div className="bg-[#1C1917] h-full rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
                    {/* The Struggle */}
                    <div className="relative z-10 mb-8">
                        <div className="inline-flex gap-3 items-center mb-4 opacity-50">
                            <AlertCircle size={16} className="text-orange-400"/>
                            <span className="text-sm font-mono uppercase tracking-widest text-orange-200">The Struggle</span>
                        </div>
                        <div className="text-2xl font-serif text-white leading-relaxed italic relative">
                            <span className="text-6xl absolute -top-4 -left-4 text-white/5 font-serif">“</span>
                            I don't want to go to the pool. It's too scary.
                            <span className="text-6xl absolute -bottom-8 -right-4 text-white/5 font-serif">”</span>
                        </div>
                    </div>

                    {/* The Noise (Peer Pressure) */}
                    <div className="flex flex-wrap gap-2 mb-8 opacity-40 group-hover:opacity-20 transition-opacity">
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Survival Skills</span>
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">Swim Team</span>
                         <span className="px-3 py-1 border border-white/20 rounded-full text-xs">"They need grit"</span>
                    </div>

                    {/* The Dot Insight */}
                    <div className="bg-gradient-to-br from-[#2D3330] to-[#1F2422] rounded-xl p-6 border border-[#3D5A42]/30 mb-8 transform group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                            <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">Dot Analysis</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Volume2 size={16} className="text-yellow-400 mt-0.5 shrink-0"/>
                                <p className="text-sm text-gray-300">
                                    Recurring mentions of <span className="text-white italic">"shivering"</span> and <span className="text-white italic">"too loud"</span>.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Database size={16} className="text-blue-400 mt-0.5 shrink-0"/>
                                <p className="text-sm text-gray-300"><span className="text-white font-medium">Root Cause:</span> Sensory sensitivity (Temperature/Sound), not hydrophobia.</p>
                            </div>
                        </div>
                    </div>

                    {/* The Master Decision */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-sm text-gray-500 mb-2 font-mono uppercase">Your Decision</p>
                        <p className="text-lg text-white font-medium">
                            Left the crowded swim school. Found a smaller, heated pool. <span className="text-teal-400">He won't get out of the water now.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     </div>
  </Section>
);

const JourneyGallery = () => (
  <Section className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
     <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-gray-900">The Life Library</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
           Every pivotal moment is captured as a beautifully crafted card, annotated with <em>your</em> unique observations. These aren't just records; they are conversation starters—turning potential conflicts into fun, objective discussions about growth.
        </p>
     </div>

     {/* Grid of Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        
        {/* Card 1: Independent Thinking */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
           {/* Background Image */}
           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1465409042654-5314e9d17402?auto=format&fit=crop&q=80&w=800')` }}> {/* Clouds/Sky for abstract thought */}
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
           
           {/* Content */}
           <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 rounded-md bg-yellow-500/20 text-yellow-200 border border-yellow-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Core Value</span>
                 <span className="text-xs text-white/60 font-mono">12/06/2025</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 leading-tight">Independent Thinking</h3>
              <p className="text-sm text-gray-300 line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                 Lu Fu values personal ability and worries about passive acceptance...
              </p>
           </div>

           {/* Hover Overlay - Parent Annotation / Action */}
           <div className="absolute inset-0 bg-[#1C1917]/90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
               <div className="flex items-center gap-2 mb-4 text-teal-400">
                   <div className="w-6 h-6 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700"><MessageSquare size={12}/></div>
                   <span className="text-xs font-bold uppercase tracking-widest">Your Observation</span>
               </div>
               <p className="text-white/90 font-serif italic text-lg leading-relaxed mb-6">
                  "I noticed you questioning the source of that news. That skepticism is your superpower."
               </p>
               <Button variant="outline" className="w-full !py-2 !text-sm border-teal-500 text-teal-400 hover:bg-teal-900/30">
                  Discuss this Card
               </Button>
           </div>
        </div>

        {/* Card 2: Media Habits */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 delay-100">
           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800')` }}> {/* Movie/Screen related */}
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-200 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Habit Loop</span>
                 <span className="text-xs text-white/60 font-mono">Yesterday</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 leading-tight">Media Consumption</h3>
              <p className="text-sm text-gray-300 line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                 Reflecting on 5-minute recaps vs full experiences...
              </p>
           </div>

           <div className="absolute inset-0 bg-[#1C1917]/90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
               <div className="flex items-center gap-2 mb-4 text-purple-400">
                   <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center border border-purple-700"><Brain size={12}/></div>
                   <span className="text-xs font-bold uppercase tracking-widest">Your Observation</span>
               </div>
               <p className="text-white/90 font-serif italic text-lg leading-relaxed mb-6">
                  "We realized you watch recaps because you're afraid of 'wasting time' on bad movies. Let's curate a list together."
               </p>
               <Button variant="outline" className="w-full !py-2 !text-sm border-purple-500 text-purple-400 hover:bg-purple-900/30">
                  Start The Conversation
               </Button>
           </div>
        </div>

        {/* Card 3: Deep Connection */}
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 delay-200 hidden md:block">
           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800')` }}> {/* Cat/Soft texture from screenshot */}
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-200 border border-teal-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Growth</span>
                 <span className="text-xs text-white/60 font-mono">2 days ago</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 leading-tight">Reinforcing Values</h3>
              <p className="text-sm text-gray-300 line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                 Actively seeking methods to align actions with beliefs...
              </p>
           </div>

           <div className="absolute inset-0 bg-[#1C1917]/90 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
               <div className="flex items-center gap-2 mb-4 text-teal-400">
                   <div className="w-6 h-6 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700"><Heart size={12}/></div>
                   <span className="text-xs font-bold uppercase tracking-widest">Shared Memory</span>
               </div>
               <p className="text-white/90 font-serif italic text-lg leading-relaxed mb-6">
                  "You taught me that 'giving up' on a bad book is actually a sign of knowing what you want."
               </p>
               <Button variant="outline" className="w-full !py-2 !text-sm border-teal-500 text-teal-400 hover:bg-teal-900/30">
                  View Timeline
               </Button>
           </div>
        </div>

     </div>
  </Section>
);

const CardDetailShowcase = () => (
  <Section className="bg-[#100F0E] !max-w-none py-20 relative overflow-hidden">
    {/* Ambient Background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/10 rounded-full blur-[100px]"></div>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-white">
            Customize your cards with high-end AI-gen pictures
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Generate unique, artistic covers for your insights. Make your life journey and memory personal and fun.
        </p>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* The Modal/Card UI */}
        <div className="bg-[#1C1917]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative">
             {/* Toolbar */}
             <div className="flex flex-wrap justify-end gap-3 p-4 border-b border-white/5 bg-white/5">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 text-xs transition-colors"><Edit2 size={14}/> Edit</button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 text-xs transition-colors"><Link size={14}/> Link User</button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 text-xs transition-colors"><Globe size={14}/> Cosmic</button>
                
                {/* Highlighted Feature */}
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-purple-900/50 hover:scale-105 transition-transform">
                    <Sparkles size={14}/> Generate Cover (AI)
                </button>
                
                <div className="hidden sm:block w-px h-6 bg-white/10 mx-1"></div>
                <button className="text-gray-500 hover:text-white"><RefreshCw size={14}/></button>
                <button className="text-gray-500 hover:text-white"><X size={14}/></button>
             </div>

             {/* Main Card Content */}
             <div className="p-8 md:p-12 flex flex-col items-center">
                 {/* Central Image */}
                 <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group cursor-pointer">
                     <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
                        alt="AI Generated Concept Art" 
                        className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 transform transition-transform group-hover:scale-[1.02]"
                     />
                     <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/10 flex items-center gap-1 opacity-100 transition-opacity">
                        <Sparkles size={10} className="text-purple-400"/> AI Generated
                     </div>
                 </div>

                 {/* Title */}
                 <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 font-serif text-center">Passive Information Acceptance</h3>

                 {/* Tags */}
                 <div className="flex flex-wrap justify-center gap-3 mb-8">
                     <span className="px-3 py-1 rounded-full bg-[#2A2624] border border-white/10 text-blue-400 text-xs font-medium">Active</span>
                     <span className="px-3 py-1 rounded-full bg-[#2A2624] border border-white/10 text-purple-400 text-xs font-medium">Concept</span>
                     <span className="px-3 py-1 rounded-full bg-[#1E293B] border border-blue-900/30 text-blue-300 text-xs font-medium">Type: behavior</span>
                     <span className="px-3 py-1 rounded-full bg-[#3F2E18] border border-yellow-900/30 text-yellow-500 text-xs font-medium">High Priority</span>
                 </div>

                 {/* Description Box */}
                 <div className="w-full max-w-2xl bg-[#2A2624]/50 rounded-xl p-6 border border-white/5 mb-8">
                    <p className="text-gray-300 leading-relaxed font-light text-center text-sm md:text-base">
                        "Lu Fu observed that the daughter was quickly browsing film reviews, likely without deep thought, thus passively accepting information and viewpoints."
                    </p>
                 </div>

                 {/* Related Entities */}
                 <div className="w-full max-w-3xl border-t border-white/5 pt-8">
                    <div className="text-center text-gray-500 text-xs uppercase tracking-widest mb-4">Related Entities</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2A2624] border border-white/5 text-gray-300 text-xs md:text-sm hover:bg-[#36302C] transition-colors cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            Independent Thinking
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2A2624] border border-white/5 text-gray-300 text-xs md:text-sm hover:bg-[#36302C] transition-colors cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            Film Reviews
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2A2624] border border-white/5 text-gray-300 text-xs md:text-sm hover:bg-[#36302C] transition-colors cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            Passive Viewpoint Adoption
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    </div>
  </Section>
);

const DashboardShowcase = () => (
  <Section className="!px-0 !max-w-none bg-gradient-to-b from-white to-gray-50 overflow-hidden">
     <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">A Palate of Knowledge</h2>
        <p className="text-gray-600 max-w-2xl text-lg">
          Our Insight Worker processes your daily memory units to generate profound narratives about your child's developing interests.
        </p>
     </div>
     
     <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Main Dashboard Container - Dark Glassmorphism */}
        <div className="bg-[#4A443F] rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative">
             {/* Background Image/Blur */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 filter blur-3xl mix-blend-overlay"></div>
             
             {/* Header Section */}
             <div className="relative z-10 p-6 md:p-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
                 <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="text-2xl font-serif text-white mb-2">Opening</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl font-light">
                           Lu Fu, happy to know your daughter is 10 this year. This age is indeed a critical period for cultivating independent thinking capabilities. You mentioned she likes watching film reviews instead of movies, which worries you. Let's continue chatting about this topic.
                        </p>
                     </div>
                     <button className="text-white/40 hover:text-white transition-colors"><X size={20}/></button>
                 </div>
                 
                 <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-400 font-mono mb-6">
                    <Timer size={14} /> <span>12/6/2025 - 12/6/2025</span> 
                    <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Completed</span>
                 </div>

                 <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs backdrop-blur-sm transition-colors border border-white/5">
                        <BookOpen size={14} /> Opening
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs backdrop-blur-sm transition-colors border border-white/5">
                        <Brain size={14} /> Dynamic Insight
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs backdrop-blur-sm transition-colors border border-white/5">
                        <TrendingUp size={14} /> Growth Trajectory
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 text-xs backdrop-blur-sm transition-colors border border-white/5">
                        <Zap size={14} /> Activity
                    </button>
                 </div>
             </div>

             {/* Main Content Split */}
             <div className="relative z-10 flex flex-col lg:flex-row bg-[#36302C]/90 backdrop-blur-xl">
                {/* Left: Editor's Note */}
                <div className="flex-1 p-6 md:p-12 border-r border-white/5">
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-3 text-xs font-sans tracking-widest uppercase opacity-60 text-white">
                          <BookOpen size={16} /> <span>Editor's Note</span>
                       </div>
                       <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 text-xs border border-white/10 transition-colors">
                          <Play size={12} fill="currentColor"/> Listen
                       </button>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#EAE8E4] leading-tight font-serif">
                       Exploring the Boundary of Depth & Independent Thought
                    </h1>
                    
                    <div className="prose prose-invert prose-lg leading-relaxed text-gray-300 font-sans font-light space-y-6">
                      <p>
                        Lu Fu, your recent reflection on your daughter watching <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#5E5466] text-[#D9C8EF] text-xs font-medium border border-[#7A6E85] shadow-sm align-middle mx-1">● Film Reviews</span> rather than the films themselves acts as a mirror. It reflects your own relentless pursuit of depth in knowledge acquisition and independent thinking. This is not just a worry about a specific phenomenon, but a manifestation of the core values in your personal knowledge universe.
                      </p>
                      
                      <p>
                        You question the potential impact of passively accepting information, much like a Renaissance thinker challenging established dogma. This scrutiny of information sources—comparing <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-900/40 text-green-300 text-xs font-medium border border-green-700/50 align-middle mx-1">● Taste</span> and <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-900/40 text-green-300 text-xs font-medium border border-green-700/50 align-middle mx-1">● Mushrooms</span> in different contexts—remains consistent: a desire to deconstruct and understand deep structures. You are unsatisfied with the surface and crave the essence.
                      </p>

                      <p>
                        This cherishing of independent thought is your compass in a complex world. Continuing to cultivate this critical perspective will not only guide you further in your exploration of knowledge but also set an example for your daughter, helping her find her own direction in the flood of information.
                      </p>
                    </div>
                </div>

                {/* Right: Recent Cards (Sidebar) */}
                <div className="w-full lg:w-96 bg-[#2A2624]/50 p-6 md:p-8 flex flex-col border-t lg:border-t-0 border-white/5">
                    <div className="flex items-center gap-2 mb-6 text-gray-400">
                       <span className="w-2 h-2 rounded-full bg-white/20"></span>
                       <span className="text-xs font-bold uppercase tracking-widest">Recent Cards</span>
                    </div>

                    <div className="space-y-4">
                        {/* Card 1 */}
                        <div className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800" alt="Plant" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <h4 className="text-white font-bold text-sm mb-1 leading-tight">Reinforcing value of ind...</h4>
                                <p className="text-gray-400 text-xs line-clamp-1">You are actively seeking methods...</p>
                            </div>
                        </div>

                         {/* Card 2 */}
                         <div className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" alt="Portrait" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <h4 className="text-white font-bold text-sm mb-1 leading-tight">Lu Fu</h4>
                                <p className="text-gray-400 text-xs line-clamp-1">The user (Lu Fu) in this knowledge...</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
     </div>
  </Section>
);

const TechSpecs = () => (
  <Section className="bg-black text-white rounded-[3rem] mx-4 md:mx-auto my-12 overflow-hidden relative shadow-2xl">
    {/* Starry Background for Cosmos Effect */}
    <div className="absolute inset-0 bg-black">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-60"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
    
    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Info */}
        <div className="p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Cpu className="w-3 h-3" /> Hardcore Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                The Child Cosmos <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">3D Knowledge Graph</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We embed vector databases and use graph projections to form a "Cosmos" with intrinsic connections. Your daily observations become a living constellation of your child's growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-purple-400 font-bold mb-1 flex items-center gap-2"><Network size={16}/> Neo4j</div>
                    <div className="text-xs text-gray-400 mb-1">Graph Projections</div>
                    <div className="text-xs text-gray-500 leading-snug">Connects unrelated events to find hidden behavioral patterns.</div>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-pink-400 font-bold mb-1 flex items-center gap-2"><Waypoints size={16}/> Weaviate</div>
                    <div className="text-xs text-gray-400 mb-1">Vector Embeddings</div>
                    <div className="text-xs text-gray-500 leading-snug">Understands the vague feelings and context behind your words.</div>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-blue-400 font-bold mb-1 flex items-center gap-2"><Layers size={16}/> Postgres</div>
                    <div className="text-xs text-gray-400 mb-1">Structured Data</div>
                    <div className="text-xs text-gray-500 leading-snug">The secure vault for your child's entire developmental history.</div>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-orange-400 font-bold mb-1 flex items-center gap-2"><Zap size={16}/> Redis</div>
                    <div className="text-xs text-gray-400 mb-1">Real-time Caching</div>
                    <div className="text-xs text-gray-500 leading-snug">Delivers instant insights the moment you speak to Dot.</div>
                 </div>
            </div>
        </div>

        {/* Right Column: Visual Simulation of Cosmos Screenshot */}
        <div className="relative h-[500px] w-full bg-black rounded-2xl border border-gray-800 overflow-hidden group">
            {/* Background Stars */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"></div>
            
            {/* Overlay UI elements mimicking screenshot */}
            <div className="absolute top-4 left-4 text-white font-mono text-xs z-20">
                <div className="font-bold mb-1">宇宙视图 (Cosmos View)</div>
                <div className="text-gray-400">Nodes: 17</div>
                <div className="text-gray-400">Edges: 8</div>
            </div>

            <div className="absolute top-4 right-4 z-20">
                <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer backdrop-blur-md">
                   <Maximize2 size={14} className="text-white"/>
                </div>
            </div>

            {/* Floating Nodes */}
            <div className="absolute inset-0 w-full h-full">
                 {/* Center Node: Passive Acceptance (50% 50%) */}
                 <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group/node cursor-pointer">
                     <div className="w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_20px_5px_rgba(45,212,191,0.6)] group-hover/node:scale-125 transition-transform"></div>
                     <span className="mt-2 text-[10px] text-teal-300 font-sans tracking-wide bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">Passive Acceptance</span>
                 </div>

                 {/* Node: Movie Reviews (25% 35%) */}
                 <div className="absolute top-[35%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                     <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]"></div>
                     <span className="mt-2 text-[10px] text-gray-400 font-sans tracking-wide">Movie Reviews</span>
                 </div>
                 
                 {/* Node: Independent Thought (70% 60%) */}
                 <div className="absolute top-[60%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                     <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_2px_rgba(251,146,60,0.5)]"></div>
                     <span className="mt-2 text-[10px] text-gray-400 font-sans tracking-wide">Ind. Thought</span>
                 </div>

                 {/* Node: Efficiency (30% 75%) */}
                 <div className="absolute top-[30%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div>
                     <span className="mt-2 text-[10px] text-gray-500 font-sans tracking-wide">Efficiency</span>
                 </div>

                 {/* Connecting Lines (SVG) - Coordinates match top/left percentages above */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none">
                     {/* Line from Passive Acceptance (50,50) to Movie Reviews (25,35) */}
                     <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="rgba(45,212,191,0.3)" strokeWidth="1" />
                     
                     {/* Line from Passive Acceptance (50,50) to Ind. Thought (70,60) */}
                     <line x1="50%" y1="50%" x2="70%" y2="60%" stroke="rgba(45,212,191,0.3)" strokeWidth="1" />
                     
                     {/* Line from Movie Reviews (25,35) to Efficiency (75,30) - faint connection */}
                     <line x1="25%" y1="35%" x2="75%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
                 </svg>
            </div>
            
            {/* Bottom Controls */}
            <div className="absolute bottom-4 right-4 bg-[#1A1A1A] border border-gray-700 rounded-xl p-3 w-48 z-20">
               <div className="flex items-center gap-2 mb-2 text-white">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <span className="font-bold text-sm">Ask Dot</span>
               </div>
               <div className="bg-[#2A2A2A] rounded p-2 text-xs text-gray-500">
                  Ask anything...
               </div>
            </div>
        </div>
    </div>
  </Section>
);

const Step = ({ number, title, text, image, reverse }: any) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 py-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-4">
      <span className="text-6xl font-serif text-teal-100 font-bold opacity-80">{number}</span>
      <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
    </div>
    <div className="flex-1 w-full">
      <div className="bg-[#3A3532] p-8 rounded-3xl aspect-square flex items-center justify-center shadow-2xl relative overflow-hidden group border border-white/5">
        {/* Soft Background Glow for consistency with screenshot */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 w-full max-w-sm">
            {image}
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <Section className="bg-[#FAFAF9]">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
      <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full"></div>
    </div>

    {/* Step 1: Input */}
    <Step 
      number="01"
      title="Daily Brain Dump"
      text="Whether it's the car ride home or just before bed, open the app and log anything. 'She watches these 5-minute movie recaps instead of the real thing.' It takes seconds."
      image={
        <div className="flex flex-col gap-4">
            <div className="bg-[#4D4540] text-[#EBE9E4] p-5 rounded-2xl rounded-tr-sm self-end max-w-[95%] shadow-lg border border-white/5 relative group">
                <div className="absolute -right-2 top-0 w-3 h-3 bg-[#4D4540] transform rotate-45 border-r border-t border-white/5"></div>
                <p className="text-sm leading-relaxed text-gray-200">My daughter loves watching movie reviews. I asked her why not watch the movie directly? She said she has no time.</p>
                <div className="text-[10px] opacity-40 mt-3 text-right font-mono">03:18 PM</div>
            </div>
            <div className="flex justify-end gap-3 px-2">
                 <div className="w-10 h-10 rounded-full bg-[#2A2624] flex items-center justify-center text-white/30 border border-white/5 shadow-inner"><Mic size={16}/></div>
            </div>
        </div>
      }
    />
    
    {/* Step 2: Analysis */}
    <Step 
      number="02"
      title="Dot Reflects"
      text="We don't just record; we reflect. 'Dot', our AI, spots the nuance between 'efficiency' and 'critical thinking'. Is she optimizing time, or outsourcing her opinion?"
      reverse
      image={
        <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-[#5E544F] flex-shrink-0 flex items-center justify-center border border-white/10 shadow-lg relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                 </div>
                 <div className="bg-[#413B36]/90 backdrop-blur-xl text-[#EBE9E4] p-5 rounded-2xl rounded-tl-sm shadow-2xl border border-white/5 w-full">
                    <p className="text-sm leading-relaxed text-gray-200"><span className="font-bold text-teal-200">Dot</span> understands. Movie reviews are processed secondary cuts. This might affect independent judgment. Does she consume other content this way?</p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                        <div className="text-[10px] opacity-40 font-mono">03:19 PM</div>
                         <div className="flex gap-2">
                             <span className="p-1.5 bg-black/20 rounded-lg hover:bg-black/40 cursor-pointer transition-colors border border-white/5"><MessageSquare size={12} className="text-white/60"/></span>
                             <span className="px-2.5 py-1.5 bg-black/20 rounded-lg hover:bg-black/40 cursor-pointer flex items-center gap-1.5 text-[10px] text-white/80 transition-colors border border-white/5"><Play size={10} fill="currentColor"/> Listen</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      }
    />

    {/* Step 3: Insight */}
    <Step 
      number="03"
      title="Realize the Pattern"
      text="The breakthrough happens when you connect the dots. You realize it's not just about movies—it's about 'Passive Acceptance'. Now you can guide her back to deep work."
      image={
         <div className="flex flex-col gap-4 relative">
             <div className="bg-[#4D4540] text-[#EBE9E4] p-4 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-lg opacity-40 filter blur-[1px]">
                <p className="text-sm leading-relaxed">She just swipes through... she is likely passively accepting the reviewer's viewpoint.</p>
            </div>
            
            {/* Insight Pop-up Effect */}
            <div className="absolute top-10 left-0 right-0 bg-gradient-to-br from-[#2D3330] to-[#1F2422] text-[#A3D9A5] p-5 rounded-xl border border-[#3D5A42]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-105 z-10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#3D5A42]/30 pb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-[#3D5A42]/20"><TrendingUp size={14} className="text-teal-400"/></div>
                        <span className="font-bold text-[10px] uppercase tracking-widest text-teal-500">Insight Detected</span>
                    </div>
                    <Film size={14} className="text-white/20"/>
                </div>
                <p className="font-serif text-xl text-white mb-2">Passive Acceptance</p>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                    3 recent observations suggest a reliance on curated opinions over raw experience.
                    <span className="block mt-2 text-teal-400/80 italic">"The danger of efficiency is the loss of discovery."</span>
                </p>
            </div>
        </div>
      }
    />
  </Section>
);

const Testimonial = () => (
  <Section className="bg-teal-900 text-white rounded-3xl mx-4 md:mx-auto my-12 text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <svg width="100%" height="100%">
         <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
           <circle cx="20" cy="20" r="2" className="text-white" fill="currentColor" />
         </pattern>
         <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
       </svg>
    </div>
    
    <div className="relative z-10 max-w-2xl mx-auto py-12">
      <div className="mb-6 flex justify-center text-orange-300">
        {[1,2,3,4,5].map(i => <Heart key={i} className="w-6 h-6 fill-current" />)}
      </div>
      <h3 className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
        "I never realized my son's 'moodiness' on Tuesdays was actually fatigue from swimming. This app helped me adjust his schedule and he's been thriving ever since."
      </h3>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center font-bold text-xl">M</div>
        <div className="text-left">
          <div className="font-bold">Maria D.</div>
          <div className="text-teal-300 text-sm">Mother of two, User for 8 months</div>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <BrandLogo className="text-teal-900 justify-center md:justify-start" />
        <p className="text-gray-500 mt-2">Breaking the routine. Finding the insight.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
         <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
            <ShieldCheck className="text-teal-600" />
            <div className="text-sm text-left">
                <div className="font-bold text-gray-900">100% Private</div>
                <div className="text-gray-500">Your child's data is secure</div>
            </div>
         </div>
         <Button>Get Early Access</Button>
      </div>
    </div>
    <div className="mt-12 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} 2 Dots 1 Line Inc. All rights reserved.
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <BrandLogo className="text-teal-800" />
          <Button variant="primary" className="!py-2 !px-4 text-sm">Sign In</Button>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <DashboardShowcase />
        <JourneyGallery />
        <CardDetailShowcase />
        <DecisionMastery />
        <TechSpecs />
        <Testimonial />
        <Section className="text-center py-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to understand their world?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">Join thousands of parents who are optimizing their children's future with data-driven love.</p>
            <Button className="w-full md:w-auto text-lg px-10 py-4 shadow-xl shadow-teal-700/30">Start Tracking Today</Button>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);