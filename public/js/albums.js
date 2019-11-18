$(document).ready(function() {
	// console.log(username);
	var options = {
		clearForm: true,
		resetForm: true,
		cache: false,
		ajax: albumsTableLink,
		beforeSubmit: validate(),

		success: function(msg) {
			$('#userModal').modal('hide');

			dataTable.ajax.reload();
		},
	};

	function validate() {
		$('#user_form').validate({
			rules: {
				'title': 'required',
				'tags[]': 'required',
			},
			messages: {
				'tags[]': 'Select at least one tag',
			},
		});
	}

	$('#user_form').ajaxForm(options);

	$('#add_button').click(function() {
		$('#user_form')[0].reset();

		$('.modal-title').text('Add User');
		$('.select2-single').select2({
			width: null,
		});
	});

	var dataTable = $('#albumTable').DataTable({
		sAjaxSource: albumsTableLink,
		sAjaxDataProp: 'data',

		columns: [
			{ data: 'id' },
			{ data: 'title' },
			{
				render: function(data, type, row, meta) {
					return '<td><a> ' + row.artist + ' </a></td>';
				},
				data: 'artist',
			},

			{
				render: function(data, type, row, meta) {
					return '<td><a>' + row.tagName + ' </a></td>';
				},
				data: 'tagName',
			},

			{
				render: function(data, type, row) {
					let btn =
						'<td><a class="btn btn-sm btn-primary edit" href="index/edit?id=' +
						row.id +
						' "> Edit </a></td>' +
						'<td><button type="button" id="delete_button" data-toggle="modal" data-target="#userModal" style="cursor:pointer; color:white;" class="btn btn-sm btn-danger">Delete</button></td>';
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

	$(document).on('click', '.update', function() {
		var validator = $('#userModal').validate();

		validator.resetForm();
		$.ajax({
			url: albumsTableLinkEdit,
			method: 'POST',
			dataType: 'json',
			success: function(data) {
				$('#title').val(data.title);
				$('#artist_id').val(data.artist_id);
				$('.select2-single').select2();
				$('#tags').val(data.tagName.split(','));
				$('.select2-multiple').select2();
				$('.modal-title').text('Edit User');

			},
		});
	});

	$(document).on('click', '.delete', function() {
		if (confirm('Are you sure you want to delete this?')) {
			$.ajax({
				url: albumsTableLinkDelete,
				method: 'POST',
				success: function(data) {
					dataTable.ajax.reload();
				},
			});
		} else {
			return false;
		}
	});
});
