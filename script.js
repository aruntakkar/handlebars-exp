$(document).ready(function() {
    $.getJSON('information.json', function(data) {
		var source = $('#school-template').html()
		var template = Handlebars.compile(source);
		var html = template({ school: data });
		$('body').append(html)
    });
});

