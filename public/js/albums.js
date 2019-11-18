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
	
	$('#add_button').click(function() {
		$.ajax({
			url: albumsTableLinkAdd,
			type: 'POST',
			datatype: 'json',
			success: function(data) {
				$('.modal-body').html(data);
				// $('#albumModal').modal('show');
			},
		});
	});

	$('#delete_button').click(function() {
		$.ajax({
			url: albumsTableLinkDelete,
			type: 'POST',
			datatype: 'json',
			success: function(data) {
				$('.modal-body').html(data);
				// $('#albumModal').modal('show');
			},
		});
	});
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
						'<td><button type="button" id="delete_button" data-toggle="modal" data-target="#albumModal" style="cursor:pointer; color:white;" class="btn btn-sm btn-danger">Delete</button></td>';
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