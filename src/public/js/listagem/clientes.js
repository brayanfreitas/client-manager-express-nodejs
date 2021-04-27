$(() => {
  //Constroi a tabela
  let id, linha;
  $("#tabelaClientes").DataTable({
    ajax: {
      url: "http://localhost:8080/tabelaCliente",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      {
        data: "nome_cliente",
        fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
          $(nTd).html("<a href='#'>" + oData.nome_cliente + "</a>");
        },
      },
      { data: "cpf_cliente" },
      { data: "email" },
      { data: "celular" },
      { data: "updated_at" },
      {
        defaultContent:
          "<div class='text-center'><div class='btn-group'><button class='btn btn-primary' style='margin-right: 10px' id='btnExcluir'><i class='far fa-trash-alt'></i></button><button class='btn btn-primary'  style='margin-right: 10px' id='btnEditar'><i class='far fa-edit'></i></button></div></div>",
      },
    ],
    fixedColumns: {
      rightColumns: 1,
    },
    columnDefs: [
      {
        targets: [0],
        visible: false,
        searchable: false,
      },
    ],
    scrollX: true,
  });
  //editar cliente
  $(document).on("click", "#btnEditar", function (event) {
    event.preventDefault();
    linha = $(this).closest("tr");
    id = parseInt(linha.find("td:eq(0)").text());
    window.localStorage.setItem("id", id);
    window.location.href = "http://localhost:8080/atualizarCliente";
  });
  //esxportar excel
  $(document).on("click", "#btnExportar", function (event) {
    event.preventDefault();
    window.location = "/baixarExcel";
  });
  //excluir cliente
  $(document).on("click", "#btnExcluir", function (event) {
    event.preventDefault();
    const linha = $(this).closest("tr");
    var id = $("#tabelaClientes").DataTable().row(linha).data().id;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    Swal.fire({
      title: "Tem certeza que deseja excluir?",
      text: "Não será possível reverter!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#183859",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("/excluirClientes/" + id, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": Cookies.get("XSRF-TOKEN"),
          },
          body: JSON.stringify({ id: id }),
        });
        swalWithBootstrapButtons.fire("Cliente Excluído");
        $("#tabelaClientes").DataTable().ajax.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "O cliente não foi excluído"
        );
      }
    });
  });
});
