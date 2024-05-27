import Cta from "../components/SimpleCta";
import Testimonials from "../components/Testimonials";
import AboutBento from "../components/Bento";
import AnimateDiv from "../components/AnimateDiv";

export const Abouthead = () => {
  return (
    <section className="  bg-[url(/frente2.jpg)]  backdrop-blur-sm  bg-fixed bg-cover bg-center w-full  bg-no-repeat">
      <div className="absolute w-full h-full   inset-0 bg-black    opacity-70"></div>

      <div className="relative   mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-end lg:justify-center lg:px-8">
        <div className="max-w-xl   sm:text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="animate__animated animate__fadeInUp text-4xl text-center  drop-shadow-md font-black sm:text-5xl bg-clip-text bg-gradient-to-r  outline-red-600 font-outline-4">
            ‎¿Quiénes somos?
          </h1>

          <p className="animate__animated animate__fadeInUp mt-4 max-w-lg drop-shadow-sm text-center  text-gray-300 sm:text-xl/relaxed">
            Servicios Taller integral del automotor. Servicios generales de
            mecánica automotriz, aire acondicionado, reparación de tren
            delantero, electricidad y más.{" "}
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
            <a
              href="#"
              className="animate__animated animate__fadeInBottomLeft block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Nuestros Servicios
            </a>

            <a
              href="#"
              className="animate__animated animate__fadeInBottomRight block w-full rounded bg-white px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            >
              Escribinos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function About() {
  return (
    <>
      <Abouthead />

      <AboutBento />
      <Testimonials />
      <AnimateDiv>
        <Cta />
      </AnimateDiv>
    </>
  );
}
export default About;
