<form action="<?php echo $this->url(array('action' => 'delete')); ?>" method="post">
	<div>
		<input type="hidden" name="id" value="<?php echo $this->album['id']; ?>" />
		<input type="submit" name="delete" value="Yes" />
		<input type="submit" name="delete" value="No" />
	</div>
</form>