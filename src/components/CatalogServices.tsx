import { Suspense } from "react";
import useServices from "../hooks/useServices";
import { Link } from "react-router-dom";
//import { Button } from "flowbite-react";

export default function CatalogServices() {
  const { data, error } = useServices();
  return (
    <>
      <section className="text-gray-600 body-font" suppressHydrationWarning>
        <div className="container px-6 py-6  mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Nuestros Servicios
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              En Friocar Full Service te ofrecemos todas estas comodidades en
              servicios para tu vehículo, con la mejor mano de obra totalmente
              capacitada, rápida y las mejores herramientas de última
              tecnología.
            </p>
          </div>
          <div className="flex md:justify-normal justify-center flex-wrap -m-4">
            <Suspense fallback={<div>Loading...</div>}>
              {data &&
                !error &&
                data.map((x) => {
                  return (
                    <div
                      key={x.id}
                      className=" w-full xl:w-1/3    sm:w-1/2 jus   p-4 hover:scale-105 transition-all"
                    >
                      <div className="bg-gray-100 p-6 h-full rounded-lg flex flex-col justify-between">
                        <img
                          className="h-40 rounded w-full  object-cover  object-center mb-6"
                          src={x.cover}
                          alt="content"
                        />
                        <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                          SERVICIO DE
                        </h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                          {x.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {x.description}
                        </p>
                        <Link to={`/servicios/${x.id}`} className="mt-4  ">
                          Ver mas
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
