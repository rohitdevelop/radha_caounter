import React, { useState, useEffect, useRef } from "react";
import { RotateCcw, Image, Sparkles, Volume2, VolumeX, Settings , X, Music, Moon, Sun } from "lucide-react";

const App = () => {
  // Load from localStorage or set defaults
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('japCount');
    return saved ? parseInt(saved) : 0;
  });
  
  const [ripples, setRipples] = useState([]);
  const [showGoal, setShowGoal] = useState(false);
  
  const [selectedBg, setSelectedBg] = useState(() => {
    const saved = localStorage.getItem('selectedBg');
    return saved ? parseInt(saved) : 0;
  });
  
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('soundEnabled');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [selectedMusic, setSelectedMusic] = useState(() => {
    const saved = localStorage.getItem('selectedMusic');
    return saved ? parseInt(saved) : 0;
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState('backgrounds');  
  
   const musicRef = useRef(null);

  // God images backgrounds
  const backgrounds = [
    {
      name: "Radha Krishna",
      gradient: "from-orange-400 via-amber-500 to-orange-600",
      darkGradient: "from-orange-900 via-amber-900 to-orange-950",
       image: "https://i.pinimg.com/736x/03/f0/49/03f0491b0ff49252205090f54468031d.jpg" ,
    },
    {
      name: "Lord Shiva",
      gradient: "from-blue-400 via-indigo-500 to-blue-600",
      darkGradient: "from-blue-900 via-indigo-900 to-blue-950",
        image: "https://wallpapers.com/images/hd/lord-shiva-hd-statue-under-sunset-wdj1k04xnmc7kmjh.jpg"
    },
    {
      name: "Ganesha",
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      darkGradient: "from-rose-900 via-pink-900 to-rose-950",
       image: "https://i.pinimg.com/736x/18/eb/e6/18ebe6c10156f890af2440f5b1b7bc9c.jpg",
    },
    {
      name: "Tempale",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      darkGradient: "from-orange-950 via-red-950 to-orange-950",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
    },
    {
      name: "Hanuman ji",
      gradient: "from-purple-400 via-fuchsia-500 to-purple-600",
      darkGradient: "from-purple-900 via-fuchsia-900 to-purple-950",
       image: "https://myindianthings.com/cdn/shop/files/Ram_Ram_Textured_Hanuman_Ji_Wallpaper_b4139c37-3c30-4ad4-9319-bec8935cb28f_1024x.png?v=1711649154" ,
    },
    {
      name: "Banaras ",
      gradient: "from-purple-400 via-violet-500 to-purple-600",
      darkGradient: "from-purple-900 via-violet-900 to-purple-950",
       image: "https://t3.ftcdn.net/jpg/07/16/99/30/360_F_716993097_iUNrir313lTW9L9i7WTwmt4qJ5VmEh8a.jpg" ,
    },
    {
      name: "Sacred Sunrise",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      darkGradient: "from-yellow-900 via-orange-900 to-red-950",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    },
    {
      name: "Meditation",
      gradient: "from-teal-400 via-cyan-500 to-teal-600",
      darkGradient: "from-teal-900 via-cyan-900 to-teal-950",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
    },
    {
      name: "Nature",
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
      darkGradient: "from-indigo-900 via-purple-900 to-pink-950",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200",
    },
    {
      name: "Premanand maharaj ji",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      darkGradient: "from-amber-900 via-yellow-900 to-amber-950",
       image: "https://radhakelikunj.com/wp-content/uploads/2024/06/DSC07823.jpg" ,
    },
    {
      name: "Peaceful Buddha",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      darkGradient: "from-green-900 via-emerald-900 to-green-950",
       image: "https://i.pinimg.com/736x/65/85/b2/6585b2acf606343ce63e24a3ea59ad6e.jpg",
    },
    {
      name: "Mala jaap",
      gradient: "from-sky-400 via-blue-500 to-sky-600",
      darkGradient: "from-sky-900 via-blue-900 to-sky-950",
       image: "https://c1.wallpaperflare.com/preview/688/255/681/meditation-bodhi-seeds-mala-spiritual.jpg" ,
    },
  ];

  // Background music options
  const musicOptions = [
    { name: "Radha Naam music", url: "/music/radha.mp3" },
    { name: "Meditation music", url: "/music/maditaion.mp3" },
    { name: "Happy music", url: "/music/krishna.mp3" },
    { name: "Positive music", url: "/music/Positive.mp3" },
    { name: "Krishna mantra", url: "/music/krishna-mantras.mp3" },
    ];

  const milestones = [108, 216, 324, 432, 540, 648, 756, 864, 972, 1080];
  const isMilestone = milestones.includes(count);

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('japCount', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem('selectedBg', selectedBg.toString());
  }, [selectedBg]);

  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem('selectedMusic', selectedMusic.toString());
  }, [selectedMusic]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (isMilestone) {
      const timer = setTimeout(() => setShowGoal(false), 3000);
      setShowGoal(true);
      return () => clearTimeout(timer);
    }
  }, [count, isMilestone]);

 
  useEffect(() => {
    if (musicRef.current) {
      if (soundEnabled) {
        musicRef.current.play().catch(e => console.log("Music play failed:", e));
      } else {
        musicRef.current.pause();
      }
    }
  }, [soundEnabled]);

  const handleIncrement = (e) => {
     setCount(count + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const handleReset = (e) => {
    e.stopPropagation();
       setCount(0);
   };

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setShowSidebar(!showSidebar);
  };

  const changeBg = (index, e) => {
    e.stopPropagation();
    setSelectedBg(index);
  };

  const changeMusic = (index, e) => {
    e.stopPropagation();
    setSelectedMusic(index);
    if (musicRef.current) {
      musicRef.current.src = musicOptions[index].url;
      if (soundEnabled) {
        musicRef.current.play().catch(e => console.log("Music change failed:", e));
      }
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    setSoundEnabled(!soundEnabled);
  };

  const toggleDarkMode = (e) => {
    e.stopPropagation();
    setDarkMode(!darkMode);
  };

  const currentGradient = darkMode 
    ? backgrounds[selectedBg].darkGradient 
    : backgrounds[selectedBg].gradient;

  return (
    <div
      onClick={handleIncrement}
      className={`relative bg-gradient-to-br ${currentGradient} w-full h-screen flex flex-col justify-center items-center cursor-pointer overflow-hidden select-none transition-all duration-500`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${darkMode ? 0.6 : 0.3}), rgba(0,0,0,${darkMode ? 0.6 : 0.3})), url(${backgrounds[selectedBg].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Audio elements */}
       <audio ref={musicRef} src={musicOptions[selectedMusic].url} loop />

      {/* Decorative overlay */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-black/40' : 'bg-black/20'}`}></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
      </div>

      {/* Title */}
      <div className="absolute top-8 text-center z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-2 flex items-center justify-center gap-2 sm:gap-3">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
          <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            राधे राधे
          </span>
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
        </h1>
        <p className="text-white/90 text-base sm:text-lg font-medium drop-shadow-lg">Naam Jap Counter</p>
      </div>

      {/* Top Control Buttons */}
      <div className="absolute top-8 right-8 flex gap-2 sm:gap-3 z-20">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
          aria-label="Toggle sound"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
          aria-label="Reset counter"
        >
          <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-8 left-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 z-20"
        aria-label="Open menu"
      >
        <Settings  className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Sidebar */}
    <div
  className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-[#0a0a0a]/95 text-gray-100 backdrop-blur-xl shadow-[0_0_25px_rgba(255,191,0,0.1)] z-50 transform transition-transform duration-300 ${
    showSidebar ? "translate-x-0" : "-translate-x-full"
  }`}
  onClick={(e) => e.stopPropagation()}
>
  <div className="flex flex-col h-full">
    {/* Sidebar Header */}
    <div className="p-5 sm:p-6 border-b border-gray-700/60">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-400 drop-shadow-md">
          Customize
        </h2>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-gray-400 hover:text-white" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("backgrounds")}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold transition-all ${
            activeTab === "backgrounds"
              ? "bg-amber-500 text-white shadow-md"
              : "bg-[#1a1a1a] text-gray-400 hover:bg-[#222]"
          }`}
        >
          <Image className="w-4 h-4" />
          Backgrounds
        </button>
        <button
          onClick={() => setActiveTab("music")}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold transition-all ${
            activeTab === "music"
              ? "bg-amber-500 text-white shadow-md"
              : "bg-[#1a1a1a] text-gray-400 hover:bg-[#222]"
          }`}
        >
          <Music className="w-4 h-4" />
          Music
        </button>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-1 overflow-y-auto p-4 sm:p-6">
      {activeTab === "backgrounds" ? (
        <div className="space-y-3">
          <p className="text-sm text-gray-400 mb-4">
            Choose your meditation background ({backgrounds.length} options)
          </p>
          {backgrounds.map((bg, index) => (
            <button
              key={index}
              onClick={(e) => changeBg(index, e)}
              className={`w-full rounded-xl overflow-hidden transition-all duration-200 ${
                selectedBg === index
                  ? "ring-4 ring-amber-500 scale-105 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                  : "hover:scale-102 shadow-md hover:shadow-lg"
              }`}
            >
              <div
                className="relative h-24 sm:h-28 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg.image})`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    darkMode ? bg.darkGradient : bg.gradient
                  } opacity-40`}
                ></div>
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg drop-shadow-lg">
                    {bg.name}
                  </span>
                </div>
                {selectedBg === index && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white p-1.5 rounded-full">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-gray-400 mb-4">
            Choose background music for meditation
          </p>
          {musicOptions.map((music, index) => (
            <button
              key={index}
              onClick={(e) => changeMusic(index, e)}
              className={`w-full p-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                selectedMusic === index
                  ? "bg-amber-500 text-white ring-4 ring-amber-300 shadow-xl scale-105"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#222]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Music className="w-5 h-5" />
                <span className="font-semibold">{music.name}</span>
              </div>
              {selectedMusic === index && (
                <div className="animate-pulse">
                  <Volume2 className="w-5 h-5" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>

    {/* Sidebar Footer */}
    <div className="p-2 sm:p-4 border-t border-gray-800 bg-[#0d0d0d]">
      <p className="text-center text-gray-500 text-sm">
         Settings saved automatically
      </p>
    </div>
  </div>
</div>

      {/* Overlay when sidebar is open */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Counter Display */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div
          className={`relative flex items-center justify-center bg-gradient-to-br ${
            darkMode ? 'from-amber-900/90 to-amber-950/90' : 'from-amber-800/90 to-amber-900/90'
          } backdrop-blur-sm rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 ${
            isMilestone ? "scale-110 ring-4 ring-yellow-300 animate-pulse" : ""
          }`}
          style={{ width: "220px", height: "220px" }}
        >
          {/* Ripple effects */}
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="absolute w-4 h-4 bg-white rounded-full animate-ping opacity-75"></span>
            </span>
          ))}

          {/* Circular Progress Border */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="95"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="95"
              stroke="url(#grad)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={2 * Math.PI * 95}
              strokeDashoffset={2 * Math.PI * 95 * (1 - (count % 108) / 108)}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
            </defs>
          </svg>

          {/* Counter Number */}
          <div className="text-center">
            <div className="text-7xl sm:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
              {count}
            </div>
          </div>
        </div>
 

        {/* Progress Info */}
        {count > 0 && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 shadow-lg border border-white/30">
            <p className="text-white font-medium text-sm sm:text-base text-center">
              Progress to {Math.ceil((count + 1) / 108) * 108}:{" "}
              <span className="font-bold text-yellow-200">
                {((count % 108) / 108 * 100).toFixed(0)}%
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Milestone Celebration */}
      {showGoal && isMilestone && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl animate-bounce max-w-md">
            <div className="text-center">           
              <p className="text-xl sm:text-2xl text-amber-800 font-semibold">
                {count} Japs Completed
              </p>
              <p className="text-base sm:text-lg text-gray-600 mt-2">
                🙏 Radhe Radhe 🙏
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom decoration */}
      <div className="absolute bottom-4 sm:bottom-8 text-center text-white/80 text-xs sm:text-sm px-4">
        <p className="drop-shadow-lg">🌺 Hare Krishna Hare Krishna Krishna Krishna Hare Hare 🌺</p>
        <p className="text-white/60 mt-1">Hare Rama Hare Rama Rama Rama Hare Hare</p>
      </div>
    </div>
  );
};

export default App;