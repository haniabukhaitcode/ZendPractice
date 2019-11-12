$(document).ready(function () {
  // console.log(username);

  $("#albumTable").DataTable({
    sAjaxSource: albumsTableLink,

    // which key the response data is looking for , check /application/controllers/IndexController.php->albumsAction->sendJson
    sAjaxDataProp: "data",

    order: [],

    // <td class= "col-12" > <a href="<?= $this->url(['controller' => 'index', 'action' => 'edit']); ?>">Edit Albums</a></td >
    //   <td class="col-12"><a href="<?= $this->url(['controller' => 'index', 'action' => 'delete']); ?>">Delete Albums</a></td>

    columns: [
      { data: "id" },
      { data: "artist" },
      { data: "title" },

      {
        render: function (data, type, row) {
          let btn =
            '<td><a class="btn btn-sm btn-primary edit" href="/index/edit?id=' + row.id + ' "> Edit </a></td>' +
            '<td><a class="btn btn-sm btn-danger" href="/index/delete?id=' + row.id + ' "> Delete </a></td>'
          return btn;
        }
      },
    ],
    columnDefs: [
      {
        orderable: true
      }
    ]
  });
});
