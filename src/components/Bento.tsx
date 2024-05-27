import { Link } from "react-router-dom";
import AnimateDiv from "./AnimateDiv";

export default function Bento() {
  const phoneNumber = "+5493417076172"; // Reemplaza esto con el número de teléfono del cliente

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <AnimateDiv>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                ¿Quiénes somos?
              </h2>
              <p className="leading-relaxed text-base">
                Somos una empresa de Rosario fundada en 2004, dedicada al
                servicio del automotor en distintas especialidades, para
                satisfacer las necesidades de nuestros clientes. Tenemos como
                meta lograr rapidez y calidad en cada uno de nuestros trabajos.
                Para eso contamos con personal especializado y la tecnología
                necesaria para todo tipo de vehículos.
              </p>
              <p className="mt-3">
                En{" "}
                <span className="text-red-500 italic font-bold mx-1">
                  FRIOCAR FULL SERVICE
                </span>{" "}
                también contamos con un amplio taller equipado con todas las
                herramientas y las normas de seguridad correspondientes
                utilizando siempre productos de primera calidad y respetando el
                medio ambiente.
              </p>
              <button
                className="mt-3 text-red-500 inline-flex items-center"
                onClick={handleClick}
              >
                Escribinos
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </AnimateDiv>
        <AnimateDiv>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-2">
                ¿Qué hacemos?
              </h2>
              <ul className="list-inside  my-4">
                <li className="leading-relaxed text-base">
                  Reparacióne instalación de Aire acondicionado y Calefacción
                  para vehículos.
                </li>
                <li className="leading-relaxed text-base">
                  Direcciones Hidráulicas.
                </li>
                <li className="leading-relaxed text-base">
                  Reparación de Tren delantero.
                </li>
                <li className="leading-relaxed text-base">
                  Reparación y cambios de Frenos Cambios de distribución.
                </li>
                <li className="leading-relaxed text-base">Mecánica ligera.</li>
                <li className="leading-relaxed text-base">Electricidad.</li>

                <li className="leading-relaxed text-base">
                  Reparación de mangueras.
                </li>
              </ul>
              <Link
                to={`/servicios`}
                className="mt-3 text-red-500 inline-flex items-center"
              >
                Conocer mas
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
        </AnimateDiv>
        <AnimateDiv>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                ¿Dónde nos encontramos?
              </h2>
              <ul>
                <li className="leading-relaxed text-base">
                  Nos podes encontrar en nuestro taller en calle Santa Fe 4514,
                  Rosario, provincia de Santa Fe.
                </li>
                <li>
                  Nuestros horarios son: De Lunes a Viernes de 8:30 a 17hs.
                </li>
              </ul>
              <Link
                to={`/contacto`}
                className="mt-3 text-red-500 inline-flex items-center"
              >
                ¿Cómo llegar?
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </AnimateDiv>
        <AnimateDiv>
          <Link to="/servicios">
            <button className="flex mx-auto mt-24 text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg">
              Nuestros Servicios
            </button>
          </Link>
        </AnimateDiv>
      </div>
    </section>
  );
}
