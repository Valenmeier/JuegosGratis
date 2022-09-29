import React from "react";
import "./estilosAtencion.css";
import { BiSupport } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { CgMail } from "react-icons/cg";

export const AtencionAlCliente = () => {
  let crearNuevoIcono = (link, icono, nombre) => {
    return (
      <a className="redes" href={link} target="_blank">
        {icono}
        <h4>{nombre}</h4>
      </a>
    );
  };
  return (
    <div className="contactoContenedor">
      <div className="contactarme">
        <BiSupport />
        <h4>
          Ante cualquier problema <br /> contactame:
        </h4>
      </div>
      <div className="contacto">
        {crearNuevoIcono("https://www.linkedin.com/in/valentinmeier",<BsLinkedin />,"Linkedin")}
        {crearNuevoIcono("https://github.com/Valenmeier",<BsGithub />,"Github")}
        {crearNuevoIcono("https://api.whatsapp.com/send?phone=5493541211401&text=Hola Valentín, quiero contactarme con vos",<SiWhatsapp />,"Whatsapp")}
        {crearNuevoIcono("mailto:valentinmeier123@gmail.com",<CgMail/>,"Gmail")}
      </div>
    </div>
  );
};
