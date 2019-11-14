$(document).ready(function () {

  $('#add_button').click(function () {
    $.ajax({
      url: albumsTableAdd,
      type: 'POST',
      datatype: 'json',
      success: function (data) {
        $('.modal-body').html(data);
        // $('#albumModal').modal('show');
      }
    });
  });

  $('#user_data').DataTable({
    sAjaxSource: albumsTableLink,
    sAjaxDataProp: "data",

    columns: [
      { data: 'id' },
      { data: 'title' },
      {
        render: function (data, type, row, meta) {
          return '<td><a> ' + row.artist + ' </a></td>';
        },
        data: 'artist',
      },

      {
        render: function (data, type, row, meta) {
          return '<td><a>' + row.tagName + ' </a></td>';
        },
        data: 'tagName',
      },

      {
        render: function (data, type, row) {
          let btn =
            '<td><a class="btn btn-sm btn-primary edit" href="/index/edit?id=' + row.id + ' "> Edit </a></td>' +
            '<td><a class="btn btn-sm btn-danger" href="/index/delete?id=' + row.id + ' "> Delete </a></td>'
          return btn;
        },
      },
    ],
    columnDefs: [
      {
        orderable: true,
      },
    ],
  });




});