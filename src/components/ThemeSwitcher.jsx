import { useState } from 'react';
import { Palette, Check, X, RotateCcw, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { AnimatePresence, motion } from 'framer-motion';

const PRESETS = [
  "#D4FF00", // neon yellow (default)
  "#00E5FF", // cyan
  "#2979FF", // blue
  "#7C4DFF", // purple
  "#FF2E93", // pink
  "#FF6A00"  // orange
];

const DEFAULT_COLOR = "#D4FF00";

export default function ThemeSwitcher() {
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`p-4 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 w-64 ${
              isDark ? 'bg-black text-white border-white' : 'bg-white text-black border-black'
            }`}
          >
            <div className={`flex justify-between items-center border-b-2 pb-2 ${isDark ? 'border-white/20' : 'border-black'}`}>
              <span className="font-bold text-sm uppercase">Theme Settings</span>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">
                <X size={18} />
              </button>
            </div>

            {/* Current mode indicator — click the floating button to toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-gray-500">Mode</span>
              <span className={`text-xs font-bold uppercase px-2 py-1 border ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                {isDark ? 'Dark' : 'Light'}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase text-gray-500">Presets</span>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((color) => {
                  const isActive = accentColor.toUpperCase() === color.toUpperCase();
                  return (
                    <button
                      key={color}
                      onClick={() => setAccentColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center ${isActive ? 'border-black scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent'
                        }`}
                      style={{ backgroundColor: color }}
                      title={`Switch to ${color}`}
                    >
                      {isActive && <Check size={14} color={color === '#D4FF00' ? '#000' : '#fff'} className="mix-blend-difference" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={`flex items-center justify-between border-t-2 pt-3 ${isDark ? 'border-white/20' : 'border-black'}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-gray-500">Custom</span>
                <div
                  className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 transition-transform"
                  title="Pick Custom Color"
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: accentColor }} />
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="absolute -top-2 -left-2 w-10 h-10 cursor-pointer opacity-0"
                  />
                </div>
              </div>

              {accentColor.toUpperCase() !== DEFAULT_COLOR.toUpperCase() && (
                <button
                  onClick={() => setAccentColor(DEFAULT_COLOR)}
                  className={`flex items-center gap-1 text-xs uppercase font-bold px-2 py-1 border-2 border-transparent transition-colors ${
                    isDark ? 'hover:bg-white hover:text-black hover:border-white' : 'hover:bg-black hover:text-white hover:border-black'
                  }`}
                  title="Reset to default yellow"
                >
                  <RotateCcw size={12} />
                  Reset
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark/Light toggle button — always visible */}
      <button
        onClick={toggleTheme}
        className={`w-14 h-14 border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center hover:scale-105 transition-transform ${
          isDark ? 'bg-black text-white border-white' : 'bg-white text-black border-black'
        }`}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Palette / color picker button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center hover:scale-105 transition-transform group ${
          isDark ? 'bg-black text-white border-white' : 'bg-white text-black border-black'
        }`}
        title="Theme Settings"
      >
        <Palette size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
