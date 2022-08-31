import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function Alert() {

function excluir() {
  new MySwal({
    title: "Tem Certeza que deseja excluir?",
    text: "Ao excluir não será possível recuperar o treino!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    denyButtonText: `Cancelar`,
    showDenyButton: true,
  }).then((willDelete) => {
    if (willDelete) {
      MySwal("Treino excluido com sucesso!", {
        icon: "success",
      });
    } else {
      MySwal("Seu treino está salvo!");
    }
  });
}

  return (
    <>
      <Button onClick={excluir}>Excluir treino</Button>
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    </>
  );
}
