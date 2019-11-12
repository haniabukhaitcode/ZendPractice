$(document).ready(function() {
  console.log(username);

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
