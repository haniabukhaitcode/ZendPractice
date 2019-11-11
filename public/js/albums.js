$(document).ready(function() {
  console.log(username);
  // var options = {
  //   clearForm: true,
  //   ajax: "url",
  //   success: function(msg) {
  //     //$("#userModal").modal("hide");
  //     dataTable.ajax.reload();
  //   }
  // };

  // $("#user_form").ajaxForm(options);

  $("#albumTable").DataTable({
    sAjaxSource: albumsTableLink,

    // which key the response data is looking for , check /application/controllers/IndexController.php->albumsAction->sendJson
    sAjaxDataProp: "data",

    order: [],

    columns: [{ data: "id" }, { data: "artist" }, { data: "title" }],
    columnDefs: [
      {
        orderable: true
      }
    ]
  });
});
