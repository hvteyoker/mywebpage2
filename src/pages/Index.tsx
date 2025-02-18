import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [workRef, workInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const { scrollY } = useScroll();
  const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Header visibility logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderVisible(currentScrollY > 100 && currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#222222] geometric-bg"
      style={{ 
        backgroundImage: "url('/background.jpg')", 
        backgroundSize: "1920px 1080px", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "1920px",  
        height: "1080px"
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-medium tracking-tight">RECKLESS</span>

          {/* Кнопка бургера */}
          <button 
            className="flex items-center gap-2 link-underline"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="text-sm">{isMenuOpen ? "Close" : "Menu"}</span>
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Бургер-меню */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isMenuOpen ? 0 : -100, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 left-0 right-0 bg-white shadow-md z-40 p-6 flex flex-col items-center space-y-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#home" className="text-lg font-medium hover:text-gray-700">Home</a>
        <a href="#about" className="text-lg font-medium hover:text-gray-700">About Us</a>
        <a href="#portfolio" className="text-lg font-medium hover:text-gray-700">Portfolio</a>
      </motion.nav>
    </div>
  );
};
export default Header;

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="h-screen flex flex-col items-center justify-center px-6 relative"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center tracking-tighter">
          Radical Minimalism.
          <br />
          Maximum Impact.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md text-center">
          We craft digital experiences that leave a lasting impression through bold simplicity.
        </p>
        <motion.button 
          className="px-8 py-3 border border-[#222222] hover:bg-[#222222] hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project
        </motion.button>
      </motion.section>

      {/* Manifesto Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Manifesto</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              "In the age of excess, we choose reduction. Every element serves a purpose. 
              Nothing more, nothing less."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Observe", "Create", "Disrupt"].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8"
            >
              <h3 className="text-3xl font-light mb-4">{step}</h3>
              <div className="w-12 h-[1px] bg-gray-200 mx-auto" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Founders Section */}
     {/* Founders Section */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
    {[
      {
        img: "/alex.JPG", // 
        name: "Alexander Tatarnikov",
        role: "Creative Director & Co-founder",
        bio: "Pushing the boundaries of digital minimalism through considered design and purposeful interaction."
      },
      {
        img: "/Dima.jpg", 
        name: "Dmitry Berezhnoi",
        role: "Technical Director & Co-founder",
        bio: "Bridging the gap between aesthetic vision and technical excellence with innovative solutions."
      }
    ].map((founder, index) => (
      <motion.div
        key={founder.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="space-y-4 text-center"
      >
        <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
          <motion.img
            src={founder.img} 
            alt={founder.name}
            className="w-full h-full object-cover" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          />
        </div>
        {/* Остальная информация о человеке */}
        <h3 className="text-2xl font-light">{founder.name}</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{founder.role}</p>
        <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-6 py-20"
      >
        <div className="writing-vertical text-sm tracking-widest transform -rotate-180 md:h-[300px]"
             style={{ writingMode: "vertical-rl" }}>
          ABOUT US
        </div>
        <div className="max-w-2xl">
          <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
            We believe in the power of reduction. Every pixel, every interaction, every moment is crafted with purpose.
          </p>
          <p className="text-lg text-gray-600">
            Founded in 2024, Reckless.Studio pushes the boundaries of digital design through radical simplicity.
          </p>
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section
        ref={workRef}
        initial={{ opacity: 0, y: 20 }}
        animate={workInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-6 py-20"
      >
        <h2 className="text-2xl mb-12 text-center">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="aspect-square bg-gray-100 hover:bg-gray-200 transition-colors duration-300 cursor-pointer flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Project {item}</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0 }}
        animate={contactInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-2xl mb-12">Get in Touch</h2>
        <form className="w-full max-w-md space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-b border-gray-300 focus:border-[#222222] outline-none transition-colors bg-transparent"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border-b border-gray-300 focus:border-[#222222] outline-none transition-colors bg-transparent resize-none"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-[#222222] text-white hover:bg-[#333333] transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Running Text Marquee */}
      <div className="h-24 border-t border-gray-100 flex items-center overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content text-6xl font-light tracking-tight text-gray-200">
            RADICAL SIMPLICITY · BOLD DESIGN · MAXIMUM IMPACT · 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
