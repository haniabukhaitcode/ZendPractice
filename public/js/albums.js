$(document).ready(function () {
  var options = {

    clearForm: true,
    sAjaxSource: albumsTableLink,
    sAjaxDataProp: "data",
    cache: false,

    beforeSubmit: validate(),

    success: function (msg) {
      $('#userModal').modal('hide');

      dataTable.ajax.reload();
    },
  };

  function validate() {
    $('#albumTable').validate({
      rules: {
        'title': 'required',
        'tags[]': 'required',
      },
      messages: {
        'tags[]': 'Select at least one tag',
      },
    });
  }

  $('#album').ajaxForm(options);

  $('#add_button').click(function () {
    $('#album')[0].reset();

    $('.select2-artist').select2({
      width: null,
    });

    $('#artist').select2({
      allowClear: true,
    });

  });

  var dataTable = $('#user_data').DataTable({
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

