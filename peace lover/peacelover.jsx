import React, { useState, useEffect } from 'react';
import { Globe, Heart, Users, MapPin, Calendar, MessageCircle, Book, Video, Award, TrendingUp, Menu, X, ChevronDown, Search, Bell, Share2, Download, Play, Star, Languages, Mail } from 'lucide-react';

export default function PeaceLoverGlobal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const [liveCount, setLiveCount] = useState(15234789);
  const [newsIndex, setNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setNewsIndex(prev => (prev + 1) % globalNews.length);
    }, 5000);
    return () => clearInterval(newsInterval);
  }, []);

  const languages = ['English', 'Español', '中文', 'العربية', 'Français', 'Deutsch', 'हिन्दी', 'Português', '日本語', 'Русский'];
  
  const regions = [
    { name: 'Global', count: '15.2M', flag: '🌍', active: 234567 },
    { name: 'Africa', count: '2.1M', flag: '🌍', active: 45234 },
    { name: 'Asia', count: '5.8M', flag: '🌏', active: 98765 },
    { name: 'Europe', count: '3.2M', flag: '🇪🇺', active: 56432 },
    { name: 'North America', count: '2.4M', flag: '🌎', active: 43210 },
    { name: 'South America', count: '1.1M', flag: '🌎', active: 23456 },
    { name: 'Oceania', count: '600K', flag: '🌏', active: 12345 },
    { name: 'Middle East', count: '850K', flag: '🌍', active: 18765 }
  ];

  const globalNews = [
    { title: '10,000 People Join Peace March in Tokyo', location: 'Japan 🇯🇵', time: '2 hours ago' },
    { title: 'Peace Education Program Launches in 50 Schools', location: 'Kenya 🇰🇪', time: '4 hours ago' },
    { title: 'Virtual Unity Concert Reaches 2M Viewers', location: 'Global 🌍', time: '6 hours ago' },
    { title: 'Community Peace Garden Opens in São Paulo', location: 'Brazil 🇧🇷', time: '8 hours ago' },
  ];

  const upcomingEvents = [
    { 
      title: 'Global Peace Summit 2026', 
      date: 'March 21, 2026', 
      location: 'Geneva, Switzerland',
      attendees: '5,000+',
      type: 'In-Person',
      flag: '🇨🇭'
    },
    { 
      title: 'Virtual Meditation Marathon', 
      date: 'December 15, 2025', 
      location: 'Online - All Time Zones',
      attendees: '500,000+',
      type: 'Virtual',
      flag: '🌐'
    },
    { 
      title: 'Youth Peace Leadership Training', 
      date: 'January 10, 2026', 
      location: 'Multiple Cities Worldwide',
      attendees: '10,000+',
      type: 'Hybrid',
      flag: '🌍'
    },
    { 
      title: 'International Peace Festival', 
      date: 'May 1, 2026', 
      location: 'Nairobi, Kenya',
      attendees: '25,000+',
      type: 'In-Person',
      flag: '🇰🇪'
    },
  ];

  const initiatives = [
    {
      title: 'Schools for Peace',
      description: 'Peace education programs in 12,000+ schools across 85 countries',
      impact: '4.5M students',
      icon: Book,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Community Peace Hubs',
      description: 'Local centers providing conflict resolution and community building',
      impact: '3,200 hubs globally',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Digital Peace Platform',
      description: 'Online tools, courses, and resources available in 45 languages',
      impact: '8M users monthly',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Youth Ambassador Program',
      description: 'Training young leaders to spread peace in their communities',
      impact: '45,000 ambassadors',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const successStories = [
    {
      country: 'Colombia',
      flag: '🇨🇴',
      title: 'Former Conflict Zones Now Peaceful Communities',
      description: 'Through our reconciliation programs, 120 former conflict areas have transformed into thriving peaceful communities.',
      members: '85,000',
      image: '🕊️'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      title: 'Inter-Faith Harmony Initiative',
      description: 'United 500+ religious leaders to promote understanding and cooperation across diverse communities.',
      members: '1.2M',
      image: '🤝'
    },
    {
      country: 'Nigeria',
      flag: '🇳🇬',
      title: 'Youth Peace Corps',
      description: '15,000 young people trained in conflict mediation, reducing community violence by 60%.',
      members: '250,000',
      image: '✌️'
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="animate-pulse" size={16} />
              <span className="font-semibold">{liveCount.toLocaleString()} Peace Lovers Online Now</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white/20 px-3 py-1 rounded text-white text-sm border border-white/30"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <button className="flex items-center gap-1 hover:text-purple-200">
              <Bell size={16} />
              <span>Alerts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Globe className="text-blue-500 animate-spin" style={{animationDuration: '20s'}} size={48} />
                <Heart className="text-pink-500 absolute top-1 left-1 animate-pulse" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Peace Lover Global
                </h1>
                <p className="text-xs text-gray-600">Uniting Humanity Worldwide</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 font-medium">Home</button>
              <button onClick={() => scrollToSection('regions')} className="text-gray-700 hover:text-purple-600 font-medium">Regions</button>
              <button onClick={() => scrollToSection('initiatives')} className="text-gray-700 hover:text-purple-600 font-medium">Initiatives</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-purple-600 font-medium">Events</button>
              <button onClick={() => scrollToSection('stories')} className="text-gray-700 hover:text-purple-600 font-medium">Stories</button>
              <button onClick={() => scrollToSection('join')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg">
                Join Movement
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('regions')} className="block w-full text-left py-2 text-gray-700">Regions</button>
              <button onClick={() => scrollToSection('initiatives')} className="block w-full text-left py-2 text-gray-700">Initiatives</button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left py-2 text-gray-700">Events</button>
              <button onClick={() => scrollToSection('stories')} className="block w-full text-left py-2 text-gray-700">Stories</button>
              <button onClick={() => scrollToSection('join')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold">
                Join Movement
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Live News Ticker */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold animate-pulse">LIVE</span>
          <div className="flex-1 overflow-hidden">
            <p className="text-gray-800 font-medium animate-fadeIn">
              📢 {globalNews[newsIndex].title} - {globalNews[newsIndex].location} • {globalNews[newsIndex].time}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-6">
              <Globe className="text-purple-600 animate-pulse" size={24} />
              <span className="font-semibold text-purple-800">Operating in 195 Countries</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              Peace Without Borders
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              The world's largest grassroots peace movement connecting millions across continents, cultures, and communities in the shared pursuit of global harmony.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('join')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition flex items-center gap-2"
              >
                <Heart size={24} />
                Join 15M+ Peace Lovers
              </button>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold border-2 border-purple-300 hover:border-purple-500 transition flex items-center gap-2">
                <Play size={24} />
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Global Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition">
              <Globe className="text-blue-500 mx-auto mb-2" size={40} />
              <p className="text-3xl font-bold text-gray-800">195</p>
              <p className="text-gray-600 text-sm">Countries</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition">
              <Users className="text-purple-500 mx-auto mb-2" size={40} />
              <p className="text-3xl font-bold text-gray-800">15.2M</p>
              <p className="text-gray-600 text-sm">Active Members</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition">
              <MapPin className="text-pink-500 mx-auto mb-2" size={40} />
              <p className="text-3xl font-bold text-gray-800">3,200</p>
              <p className="text-gray-600 text-sm">Peace Hubs</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition">
              <Languages className="text-green-500 mx-auto mb-2" size={40} />
              <p className="text-3xl font-bold text-gray-800">45</p>
              <p className="text-gray-600 text-sm">Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section id="regions" className="py-16 px-4 bg-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Global Community Network
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            From every continent, culture, and corner of the world—united in peace
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedRegion(region.name)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2 ${
                  selectedRegion === region.name ? 'ring-4 ring-purple-500' : ''
                }`}
              >
                <div className="text-5xl mb-3 text-center">{region.flag}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{region.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Total Members</span>
                    <span className="font-bold text-purple-600">{region.count}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Active Now</span>
                    <span className="font-bold text-green-600">{region.active.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: `${(region.active / region.count.replace(/[^\d]/g, '')) * 100}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Initiatives */}
      <section id="initiatives" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Worldwide Initiatives
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Programs making real impact in communities around the globe
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <div className={`bg-gradient-to-r ${initiative.color} p-8 flex items-center justify-center`}>
                  <initiative.icon className="text-white" size={64} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                  <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                    <span className="text-gray-700 font-semibold">Global Impact:</span>
                    <span className="text-purple-600 font-bold text-xl">{initiative.impact}</span>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Global Peace Events
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Join thousands in person or millions online
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{event.flag}</div>
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    event.type === 'Virtual' ? 'bg-blue-100 text-blue-600' :
                    event.type === 'Hybrid' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Stories of Global Impact
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Real transformation happening in communities worldwide
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-40 flex items-center justify-center text-8xl">
                  {story.image}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{story.flag}</span>
                    <h3 className="text-xl font-bold text-gray-800">{story.country}</h3>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{story.title}</h4>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between bg-purple-50 p-4 rounded-xl">
                    <span className="text-gray-700 font-semibold">Community Members</span>
                    <span className="text-purple-600 font-bold">{story.members}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="text-white mx-auto mb-6 animate-pulse" size={64} />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Be Part of the Global Movement
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join millions of peace lovers across 195 countries. Together, we're proving that peace isn't just possible—it's unstoppable.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-white focus:bg-white/30 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-xl border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-white focus:bg-white/30 outline-none transition"
              />
              <select className="w-full px-6 py-4 rounded-xl border-2 border-white/30 bg-white/20 text-white focus:border-white focus:bg-white/30 outline-none transition">
                <option value="">Select Your Country</option>
                {regions.map(region => (
                  <option key={region.name} value={region.name}>{region.flag} {region.name}</option>
                ))}
              </select>
              <button className="w-full bg-white text-purple-600 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
                <Heart size={24} />
                Join Peace Lover Global
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">Free</p>
                <p className="text-purple-100 text-sm">Always</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-purple-100 text-sm">Support</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">Global</p>
                <p className="text-purple-100 text-sm">Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-blue-400" size={40} />
                <div>
                  <h3 className="text-2xl font-bold">Peace Lover Global</h3>
                  <p className="text-gray-400 text-sm">Uniting Humanity Worldwide</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Operating in 195 countries with 15+ million members working together for global peace and harmony.
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <MessageCircle size={20} />
                </button>
                <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <Share2 size={20} />
                </button>
                <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Regions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Africa</a></li>
                <li><a href="#" className="hover:text-white transition">Asia</a></li>
                <li><a href="#" className="hover:text-white transition">Europe</a></li>
                <li><a href="#" className="hover:text-white transition">Americas</a></li>
                <li><a href="#" className="hover:text-white transition">Oceania</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Initiatives</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Schools for Peace</a></li>
                <li><a href="#" className="hover:text-white transition">Peace Hubs</a></li>
                <li><a href="#" className="hover:text-white transition">Youth Program</a></li>
                <li><a href="#" className="hover:text-white transition">Digital Platform