$(document).ready(function () {
    var options = {
        clearForm: true,
        resetForm: true,
        cache: false,
        ajax: 'read.php',
        beforeSubmit: validate(),

        success: function (msg) {
            $('#userModal').modal('hide');

            dataTable.ajax.reload();
        },
    };

    function validate() {
        $('#user_form').validate({
            rules: {
                'title': 'required',
                'tags[]': 'required',
                'book_image': 'required',
            },
            messages: {
                'tags[]': 'Select at least one tag',
                'book_image': 'Select an Image',
            },
        });
    }

    $('#user_form').ajaxForm(options);

    $('#add_button').click(function () {
        $('#user_form')[0].reset();

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
        processing: true,
        serverSide: true,

        order: [],
        ajax: {
            url: 'read.php',
            type: 'POST',
        },

        columns: [
            { data: 'id' },
            { data: 'title' },

            {
                render: function (data, type, row, meta) {
                    return '<td><a href="/authorsBooks/index.php?id=' + row.author_id + ' "> ' + row.author + ' </a></td>';
                },
                data: 'author',
            },

            {
                render: function (data, type, row, meta) {
                    return '<td><a href="/tagsBooks/index.php?id[]=' + row.tagID + ' "> ' + row.tagName + ' </a></td>';
                },
                data: 'tagName',
            },

            {
                render: function (data, type, row, meta) {
                    return '<img style="width:100px; height:100px;" src="../public/images/' + row.book_image + '">';
                },
                data: 'book_image',
            },

            {
                render: function (data, type, row) {
                    let btn =
                        '<td><button type="button" name="edit" id="' +
                        row.id +
                        '" class="btn btn-sm btn-primary update">Update</button></td>&nbsp;' +
                        '<td><button type="button" name="delete" id="' +
                        row.id +
                        '" class="btn btn-sm btn-danger delete">Delete</button></td>';
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

    $(document).on('click', '.update', function () {
        var user_id = $(this).attr('id');
        var validator = $('#userModal').validate();

        validator.resetForm();
        $.ajax({
            url: 'update.php',
            method: 'POST',
            data: {
                user_id: user_id,
            },
            dataType: 'json',
            success: function (data) {
                $('#title').val(data.title);
                $('#author_id').val(data.author_id);
                $('.select2-single').select2();
                $('#tags').val(data.tagID.split(','));
                $('.select2-multiple').select2();
                $('.modal-title').text('Edit User');
                $('#user_id').val(user_id);
                $('#action').val('Edit');
                $('#operation').val('Edit');
                $('#userModal').modal('show');
            },
        });
    });

    $(document).on('click', '.delete', function () {
        var user_id = $(this).attr('id');
        if (confirm('Are you sure you want to delete this?')) {
            $.ajax({
                url: 'delete.php',
                method: 'POST',
                data: {
                    user_id: user_id,
                },
                success: function (data) {
                    dataTable.ajax.reload();
                },
            });
        } else {
            return false;
        }
    });
});
