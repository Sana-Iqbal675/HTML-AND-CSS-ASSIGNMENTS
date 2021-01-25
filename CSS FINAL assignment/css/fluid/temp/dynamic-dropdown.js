var toupdate = [];

$.each($(".dropdown-menu"), function(i, elem) {
	if ($(elem).height() > $(window).height()) {
		$(elem).css({
			"overflow-y": "scroll"
		});
		$(elem).css({
			"max-height": -1 * (elem.getBoundingClientRect().top - $(window).height())
		});
		toupdate.push(elem);
	}
});

console.log(toupdate);

$(window).scroll(function() {
	console.clear();
	$.each(toupdate, function(i, elem) {
		$(elem).css({
			"max-height": -1 * (elem.getBoundingClientRect().top - $(window).height())
		});
	});
});
