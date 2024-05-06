import { Link } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Cta from "../components/Cta";
import LogoBrands from "../components/LogoBrands";
import SimpleCta from "../components/SimpleCta";
import Testimonials from "../components/Testimonials";

const HeaderHome = () => {
  return (
    <section className=" bg-[url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-fixed   bg-cover bg-center xl:h-screen  bg-no-repeat  w-full ">
      <div className="absolute backdrop-blur-xl w-full h-screen  inset-0 bg-black opacity-70"></div>
      <div className=" relative justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-end lg:justify-center  lg:px-8">
        <div className="  text-center lg:w-2/3 w-full">
          <div className="flex  justify-center mb-10">
            <img
              src="/logo.png"
              alt="frio-car-logo"
              className="w-[300px] md:w-[350px] "
            />
          </div>
          <p className="mb-8 mx-20 text-gray-400 leading-relaxed">
            Taller integral del automotor. Servicios generales de mecánica
            automotriz, aire acondicionado, reparación de tren delantero,
            electricidad y más.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white  bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
              Servicios
            </button>
            <Link
              to={"https://wa.me/+5493417076172"}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              target="_blank"
            >
              Escribinos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <>
      <HeaderHome />
      <Carrousel />
      <Cta />
      <LogoBrands />
      <Cta />
      <Testimonials />
      <SimpleCta />
    </>
  );
}
