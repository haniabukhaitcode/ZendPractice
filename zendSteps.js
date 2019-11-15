let btn =
	'<td><button type="button" name="edit" id="' +
	row.id +
	'" class="btn btn-sm btn-primary update">Update</button></td>&nbsp;' +
	'<td><button type="button" name="delete" id="' +
	row.id +
	'" class="btn btn-sm btn-danger delete">Delete</button></td>';
return btn;
$(document).on('click', '.delete', function() {
	var user_id = $(this).attr('id');
	if (confirm('Are you sure you want to delete this?')) {
		$.ajax({
			url: 'delete.php',
			method: 'POST',
			data: {
				user_id: user_id,
			},
			success: function(data) {
				dataTable.ajax.reload();
			},
		});
	} else {
		return false;
	}
});
