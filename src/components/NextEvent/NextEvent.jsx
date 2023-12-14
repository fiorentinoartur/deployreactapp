import React from "react";
import "./NextEvent.css";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Link } from "react-router-dom";
import Comentario from "../../pages/ComentariosEvento/Comentario";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
const NextEvent = ({ title, description, eventDate, idEvent }) => {
  const {userData} = useContext(UserContext);
  function conectar(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para conectar: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"

        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
      </p>
      {userData.nome && userData.role === "Administrador" ? (

        <Link to={`/comentarios-evento-all/${idEvent}`}
          onClick={() => {
            conectar(idEvent);
          }}
          className="event-card__connect-link"
        >
          Detalhes
        </Link>

      ) : userData.nome && userData.role === "Comum" ? ( <Link to={`/comentarios-evento-only/${idEvent}`}
        onClick={() => {
          conectar(idEvent);
        }}
        className="event-card__connect-link"
      >
        Detalhes
      </Link>) : null}



    </article>
  );
};

export default NextEvent;
