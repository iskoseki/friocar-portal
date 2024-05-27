import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/wsp";
import Loading from "./components/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [galleryLoading, setGalleryLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setGalleryLoading(false); // Marca la galería como cargada
    }, 400); // Simulación de tiempo de carga
  }, []);
  return (
    <>
      <Navbar />
      <main>{galleryLoading ? <Loading /> : children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
