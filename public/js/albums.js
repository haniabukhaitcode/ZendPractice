$(document).ready(function() {
	// console.log(username);
	// var options = {
	// 	clearForm: true,
	// 	resetForm: true,
	// 	cache: false,
	// 	ajax: 'index',
	// 	beforeSubmit: validate(),

	// 	success: function(msg) {
	// 		$('#userModal').modal('hide');
	// 		dataTable.ajax.reload();
	// 	},
	// };

	// function validate() {
	// 	$('#user_form').validate({
	// 		rules: {
	// 			'title': 'required',
	// 			'tags[]': 'required',
	// 			'book_image': 'required',
	// 		},
	// 		messages: {
	// 			'tags[]': 'Select at least one tag',
	// 			'book_image': 'Select an Image',
	// 		},
	// 	});
	// }

	// $('#user_form').ajaxForm(options);

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
						'<td><a class="btn btn-sm btn-danger delete" href="index/delete?id=' +
						row.id +
						' "> Delete </a></td>';
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

// 	let btn =
// 	'<td><button type="button" name="edit" id="' +
// 	row.id +
// 	'" class="btn btn-sm btn-primary update">Update</button></td>&nbsp;' +
// 	'<td><button type="button" name="delete" id="' +
// 	row.id +
// 	'" class="btn btn-sm btn-danger delete">Delete</button></td>';
// return btn;



	$(document).on('click', '.delete', function() {
		$.ajax({
			method: 'POST',
			dataType: 'json',
			success: function(data) {
				$('#userModal .modal-body').html(data);
				$('.modal-body').modal('show');
				// dataTable.ajax.reload();
			},
		});
	});
});
