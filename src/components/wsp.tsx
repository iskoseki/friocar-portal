"use client"
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+5493417076172"; // Reemplaza esto con el número de teléfono del cliente

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="hover:animate-bounce"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
       
        color: "white",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        zIndex: "9999",
      }}
    >
      <img src="/wspIcon.png" alt="whatsapp" className="hover:animate-pulse" />
    </button>
  );
};

export default WhatsAppButton;
