import { NavLink } from "react-router-dom"
import { useContext, useState,useEffect } from "react"
import freire from '../../assets/logo.png'; 
import freireBlanco from '../../assets/logo_blanco.png'; 
const Navbar = ()=>{
const actvieStyle ='underline underline-offset-4'
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isMenuHamOpen, setIsMenuHamOpen] = useState(false);
const [hasScrolled, setHasScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {  // Ajusta el valor según tus necesidades
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpiar el listener al desmontar el componente
}, []);
  return (
    <nav className={`flex justify-between items-center fixed z-10 w-full h-24 py-2 px-8 text-sm font-light top-0 transition-colors duration-300 ${hasScrolled ? 'bg-gray-100' : 'bg-transparent'} rounded-b-lg`}>
      
        <ul className="flex items-center gap-3 md:gap-16">
            <li className="font-semibold text-lg ">
                <NavLink to='/'>
                <img src={hasScrolled ? freire : freireBlanco}
                alt="Colegio Pedagogía Freireana"
                className=" h-16 object-contain"                    
                />
                </NavLink>
            </li>
            <li className={`font-bold text-3xl hidden md:block  ${hasScrolled ?  'text-black' :'text-white' } `}>
                <p>
                Colegio Pedagogía Freireana
                </p>
            </li> 
        </ul>
        <ul className="flex items-center ">
            
        </ul>
      <div className="flex items-center gap-3 ">
        
        <ul className={`md:flex items-center gap-3 md:visible ${isMenuHamOpen ? 'block' : 'hidden'}`}>
            <li className= {`font-semibold ${hasScrolled ?  'text-black' :'text-white' } `}>
                <NavLink  
                to='/#quienes-somos'
                className={({ isActive }) => isActive ? actvieStyle : undefined
                }>
                    Quiénes somos
                </NavLink>
            </li >
            <li className= {`font-semibold ${hasScrolled ?  'text-black' :'text-white' } `}>
                <NavLink 
                to='/#oferta-educativa'
                className={({ isActive }) => isActive ? actvieStyle : undefined
                }>
                    Oferta educativa
                </NavLink>
            </li>
            <li>
                <div className="relative inline-block text-left">
                    <div>
                        <button 
                        type="button" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex w-full justify-center   
                        gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-700 font-medium ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button" 
                        aria-expanded={isMenuOpen} 
                        aria-haspopup="true"
                        >
                        Recursos
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    {isMenuOpen  
                    && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
                    ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <NavLink                                     to="/blog" 
                                className={({ isActive }) => (isActive ? activeStyle : 'text-gray-700 block px-4 py-2 text-sm') + ' hover:bg-gray-100 hover:text-gray-900'}
                                role="menuitem" 
                                tabIndex="-1" 
                                id="menu-item-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                            Blog
                            </NavLink>
                            <NavLink 
                                to="/periodico-escolar"
                                className={({ isActive }) => (isActive ? activeStyle : 'text-gray-700 block px-4 py-2 text-sm') + ' hover:bg-gray-100 hover:text-gray-900'}
                                role="menuitem" 
                                tabIndex="-1" 
                                id="menu-item-1"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Periódico Escolar
                            </NavLink>
                            <NavLink 
                                to="/taller-de-freilectores"
                                className={({ isActive }) => (isActive ? activeStyle : 'text-gray-700 block px-4 py-2 text-sm') + ' hover:bg-gray-100 hover:text-gray-900'}
                                role="menuitem" 
                                tabIndex="-1" 
                                id="menu-item-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Taller de Freilectores
                            </NavLink>
                        </div>
                    </div>)}
                </div>
            </li>
        </ul>
        <button 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" 
            onClick={() => setIsMenuHamOpen(!isMenuHamOpen)}>
            <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuHamOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                />
            </svg>
        </button>
      </div>
    </nav>
   )
}
export default Navbar