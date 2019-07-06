
$('.head-portfolio').hover(
	function() {
        alert("hi");
		$('.panel-portfolio').collapse('show');
	},
    function() {   
        alert("bye");
        $('.panel-portfolio').collapse('hide');
	}
);