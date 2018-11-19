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
	
	// ***
	// SUDO CODE
	// ***
	//
	// CREATE core canvas
	// CREATE a full image canvas.
	// 	Only part of it will be displayed, according to Zoom, X, and Y, coordinates
	// CREATE a preview canvas.
	// 		draw on preview canvas only before applying to a normal canvas. Do not update a normal canvas. Update the preview canvas separately.
	// All of the updates will draw on a single canvas that is the CORE canvas.

	canvases.preview = createCanvas( dom.width, dom.height );

}
