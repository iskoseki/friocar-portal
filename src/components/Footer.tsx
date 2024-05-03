import { FooterLinks, Navigation } from "../constants";

function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-end md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400">
            <img src="/logo.png" alt="" width={120} />
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Taller integral del automotor.
          </p>
        </div>
        <div className="flex-grow flex xl:justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
              PORTAL
            </h2>
            <nav className="list-none mb-10">
              {Navigation.map((item) => (
                <li key={item.name}>
                  <a
                    className="text-gray-600 hover:text-gray-400"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
              SERVICIOS
            </h2>
            <nav className="list-none mb-10">
              {FooterLinks.map((link) =>
                link.links.map((item) => (
                  <li key={item.name}>
                    <a
                      className="text-gray-600 hover:text-gray-400"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                ))
              )}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
              CONTACTO
            </h2>
            <nav className="list-none mb-10">
              {FooterLinks.map((link) =>
                link.contacto.map((item) => (
                  <li key={item.name}>
                    <a
                      className="text-gray-600 hover:text-gray-400"
                      href={item.name}
                    >
                      {item.name}
                    </a>
                  </li>
                ))
              )}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Critikal Software —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @critikal.co
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/friocarrosario"
              className="text-gray-400 cursor-pointer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
