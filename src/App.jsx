import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";


const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`flex items-center justify-center w-full h-screen ${theme === 'dark' ? 'dark:bg-zinc-800' : 'bg-zinc-200'}`}>
     <button onClick={toggleTheme} className="py-2 px-8 bg-slate-300 text-black text-sm uppercase ">
      switch theme
     </button>
    </div>
  )
}

export default App
