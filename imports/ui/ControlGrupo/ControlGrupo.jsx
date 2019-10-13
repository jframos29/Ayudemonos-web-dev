import React from "react";
import "./ControlGrupo.css";
import ModalAgregarIntegrante from "../ModalAgregarIntegrante/ModalAgregarIntegrante";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

function ControlGroup(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <React.Fragment>
      <button
        className="botonControl shadow"
        onClick={() => setModalShow(true)}
      >
        Agregar Integrate
      </button>
      <button
        className="botonControl shadow"
        onClick={() => setModalShow2(true)}
      >
        Agregar Tarea
      </button>
      <ModalAgregarIntegrante
        show={modalShow}
        onHide={name => {
          setModalShow(false);
          Meteor.call("grupos.entrar", props.selectedGroup._id, name);
        }}
      />
      <ModalAgregarTarea
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </React.Fragment>
  );
}
export default ControlGroup;
