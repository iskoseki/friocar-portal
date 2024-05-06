import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  url?: string;
  color: string;
}

export default function Btn({ children, url, onClick, color }: Props) {
  return (
    <Link
      to={url ? url : "#"}
      onClick={onClick}
      className={`inline-flex text-white  bg-${color}-500 hover:bg-${color}-600 
      py-2 px-6 focus:outline-none hover:rounded-xl hover:drop-shadow-xl
     rounded transition-all text-lg ml-auto `}
    >
      {children}
    </Link>
  );
}
