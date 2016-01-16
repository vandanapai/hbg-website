$(document).ready(function () {

	$('.hidden').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).fadeIn();


		return false;
	});
});

