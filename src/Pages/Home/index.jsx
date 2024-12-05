import Layout from "../../Components/Layout"
import escuela from '../../assets/escuela-completa.jpg'; 
import mural from '../../assets/mural.jpg'; 
function Home() {
  return (
      <Layout>
      <header 
        className="bg-indigo-900 w-full h-screen -mt-20 flex justify-center items-center ">   
          <div 
          style={{ backgroundImage: `url(${escuela})` }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed opacity-80 blur-sm z-0"/>
          <div className="flex flex-col md:flex-row items-center z-10">   
            <div  className="md:w-1/2 md:mb-0"> 
              <img src={mural} 
              alt="Imagen de niños felices en el Colegio Pedagogía Freireana" 
              className="rounded-lg shadow-lg w-8/12 h-max  justify-self-center" /> 
            </div>
            <div className="md:w-1/2 text-center md:text-left ">
              <h2 className="text-3xl font-bold mb-4 w-8/12 justify-self-center">
              Formamos personas competitivas y humanas
              </h2>
              <p className="text-lg mb-6 w-8/12 justify-self-center">
              En el Colegio Pedagogía Freireana promovemos un ambiente de equidad y tolerancia que favorece la adquisición de aprendizajes significativos.
              </p>
              <div className= " w-8/12 justify-self-center">
              <a href="#contacto" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Contáctanos
              </a>
              </div>
            </div>
          </div>
        
      </header>

      <section id="quienes-somos" className="bg-slate-50 py-12 w-full h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Quiénes somos</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p>El Colegio Pedagogía Freireana es una institución educativa comprometida con la formación integral de sus alumnos,  basada en los principios de la pedagogía Freireana.  Fomentamos un ambiente de equidad y tolerancia donde cada niño puede desarrollar su máximo potencial.</p>
              <p className="mt-4">Nuestra misión es impulsar el desarrollo de competencias para la vida, contribuyendo en la formación de seres humanos con pensamiento crítico, capaces de trabajar en equipo y desarrollarse eficientemente en un ambiente multicultural.</p>
            </div>
            <div className="md:w-1/2">
              <img src="imagen-instalaciones.jpg" alt="Imagen de las instalaciones del Colegio Pedagogía Freireana" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Valores</h2>   

          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/6 mb-8">
              <img src="icono-colaboracion.svg" alt="Icono de colaboración" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Colaboración</h3>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/6 mb-8">
              <img src="icono-lealtad.svg" alt="Icono de lealtad" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Lealtad</h3>
            </div>
            {/* ... (otros valores) ... */} 
          </div>
        </div>
      </section>

      <section id="oferta-educativa" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Oferta educativa</h2>
          <p>Ofrecemos educación preescolar y primaria, con un programa educativo  que busca desarrollar las competencias necesarias para el éxito académico y personal de nuestros alumnos.</p> 
          {/* ... (más detalles de la oferta educativa) ... */}
        </div>
      </section>

      <section id="contacto" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>   

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                  <input type="text" id="nombre"   
 name="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline" />
                </div>
                {/* ... (otros campos del formulario) ... */}
              </form>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                <span className="font-bold">Dirección:</span> [Dirección del colegio]
              </p>
              <p className="mb-4">
                <span className="font-bold">Teléfono:</span> [Teléfono del colegio]
              </p>
              {/* ... (correo electrónico, mapa, etc.) ... */}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-500 py-4">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2024 Colegio Pedagogía Freireana</p>
        </div>
      </footer>
      </Layout>    
  )
}

export default Home