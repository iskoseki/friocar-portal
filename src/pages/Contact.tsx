export default function Contacto() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5  xl:pt-44 pt-24 py-24 mx-auto flex xl:flex-nowrap flex-wrap">
        <div className="flex flex-wrap xl:w-1/5 w-full mb-2">
          <div className="lg:w-full w-1/2 mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 text-gray-900">
              Medios de contacto
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="lg:w-full h-96 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6697.094895623311!2d-60.684472!3d-32.936553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acad0f4ddb37%3A0xd3f82fa193f154ac!2sSta%20Fe%204514%2C%20S2002KVL%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1sen!2sus!4v1708099039243!5m2!1sen!2sus"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <a
                href="https://www.google.com/maps/place/Friocar+Full+Service/@-32.9366442,-60.6845011,17z/data=!3m1!4b1!4m6!3m5!1s0x95b7acad0894f5c9:0xdae6768bb8307a2d!8m2!3d-32.9366442!4d-60.6845011!16s%2Fg%2F1tdryhg7?entry=ttu"
                className="mt-1 hover:text-red-500"
                target="_blank"
              >
                Sta Fe 4514, S2002KVL Rosario, Santa Fe, Argentina
              </a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:info@friocarrosario.com.ar"
                target="_blank"
                className="text-red-500 leading-relaxed"
              >
                info@friocarrosario.com.ar{" "}
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                WHATSAPP
              </h2>
              <a
                href="https://wa.me/+5493417076172"
                className="leading-relaxed"
              >
                +5493412614250
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
