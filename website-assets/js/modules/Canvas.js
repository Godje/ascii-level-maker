const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

module.exports = function (dom){
	console.log("Re-initiated");
	let frame = 0;

	function mousemove(e){ };
	function mouseup(e){ };
	function mousedown(e){ };

	function setup(){
		redraw();
	}
	function redraw(){
		frame++;
	}
	window.addEventListener("mousemove", mousemove);
	window.addEventListener("mouseup", mouseup);
	window.addEventListener("mousedown", mousedown);

	setup();
}
