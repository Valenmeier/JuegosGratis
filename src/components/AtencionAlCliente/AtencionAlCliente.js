import React from "react";
import "./estilosAtencion.css";
import { BiSupport } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { CgMail } from "react-icons/cg";

export const AtencionAlCliente = () => {
  return (
    <div className="contactoContenedor">
      <div className="contactarme">
        <BiSupport />
        <h4>Ante cualquier problema <br /> contactame:</h4>
      </div>
      <div className="contacto">
        <a className="redes"  href="https://www.linkedin.com/in/valentinmeier" target="_blank">
          <BsLinkedin />
          <h4>Linkedin</h4>
        </a>
        <a className="redes" href="https://github.com/Valenmeier" target="_blank">
          <BsGithub />
          <h4>Github</h4>
        </a>
        <a className="redes" href="https://api.whatsapp.com/send?phone=5493541211401&text=Hola Valentín, quiero contactarme con vos" target="_blank">
          <SiWhatsapp />
          <h4>Whatsapp</h4>
        </a>
        <a className="redes" href="mailto:valentinmeier123@gmail.com" target="_blank">
          <CgMail />
          <h4>Gmail</h4>
        </a>
      </div>
    </div>
  );
};
