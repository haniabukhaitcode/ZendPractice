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

  $('#albumTable').ajaxForm(options);

  $('#add_button').click(function () {
    $('#albumTable')[0].reset();

    $('.modal-title').text('Add User');
    $('.select2-single').select2({
      width: null,
    });

    $('#e2').select2({
      allowClear: true,
    });
    $('#action').val('Add');
    $('#operation').val('Add');
    $('#user_uploaded_image').html('');
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

