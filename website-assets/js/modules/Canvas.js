const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

let createCanvas = function(w, h){
	let el = document.createElement("canvas");
	el.width = w;
	el.height = h;
	return el;
}

const canvases = {
	realcanvas: null,
	image: null,
	preview: null,
}

module.exports = function (dom){
	MODEL.toggleRedraw(false); //crutch

	canvases.realcanvas = dom;
	canvases.image = createCanvas(
		m.stream.combine(  ),
		MODEL.dimensions.width, MODEL.defaultscale, MODEL.zoom,
		MODEL.dimensions.height() * MODEL.defaultscale() * MODEL.zoom(),
	);
	canvases.preview = createCanvas( dom.width, dom.height );

	function draw(){

	}
}
