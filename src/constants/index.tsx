import PhoneSvg from "../components/icons/PhoneSvg";
import LocationSvg from "../components/icons/LocationSvg";
import MailSvg from "../components/icons/MailSvg";
export const Navigation = [
  { name: "Principal", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export const ContactLinks = [
  {
    name: "info@friocarrosario.com.ar",
    svg: <MailSvg />,
  },
  {
    name: "03414380965",
    svg: <PhoneSvg />,
  },
  {
    name: "Santa Fe 4514, Rosario",
    svg: <LocationSvg />,
  },
];

export const FooterLinks = [
  {
    links: [
      { name: "Calefacción", href: "servicios/1" },
      { name: "Tren delantero", href: "servicios/6" },
      { name: "Electricidad", href: "servicios/3" },
      { name: "Todos los Servicios", href: "/servicios" },
    ],
    contacto: [
      { name: "info@friocarrosario.com.ar", svg: <MailSvg /> },
      { name: "03414380965", svg: <PhoneSvg /> },
      { name: "Santa Fe 4514, Rosario", svg: <LocationSvg /> },
    ],
  },
];
