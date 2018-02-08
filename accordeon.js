var spin;
var first = 1;

$(window).on("load", function() {
	spin = $("#spinner").spinner();
	spin.spinner("value", 5);
	generate();

	$('#refresh').on({
		click: function() {
			generate();
		}
	});
});

function generate() {
	$('#accordeon').empty();
	var i = 0;
	while (i < spin.spinner("value")) {
		$('#accordeon').append( '<h3>Section</h3><div><p>Mauris mauris ante vulputate.</p></div>');
		++i;
	}

    if (first == 1) {
    	$('#accordeon').accordion();
    	first = 0;
    }
    else $('#accordeon').accordion("refresh");
}