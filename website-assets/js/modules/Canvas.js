const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;

module.exports = function (dom){
	console.log("Drawing functions loading");
	const gridcolor = "lightgray";
	const $ = dom.getContext('2d');

	function mousemove(e){ };
	function mouseup(e){ };
	function mousedown(e){ };

	function drawGrid(){
		let { defaultscale, dimensions, zoom } = MODEL;
		let tilesize = defaultscale() * zoom();
		$.lineWidth = 1;
		$.strokeStyle = gridcolor;
		for(let x = 1; x < dimensions.width(); x++){
			$.moveTo( x*tilesize, 0 );
			$.lineTo( x*tilesize, dimensions.height() * tilesize);
		}
		for(let y = 1; y < dimensions.height(); y++){
			$.moveTo( 0, y*tilesize );
			$.lineTo( dimensions.width() * tilesize, y*tilesize );
		}
		$.stroke();
	};

	function setup(){
		redraw();
	}
	function redraw(){
		drawGrid()
	}
	window.addEventListener("mousemove", mousemove);
	window.addEventListener("mouseup", mouseup);
	window.addEventListener("mousedown", mousedown);

	setup();
	console.log("Drawing functions loaded");
}
