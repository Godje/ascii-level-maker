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
		MODEL.dimensions.width() * MODEL.defaultscale() * MODEL.zoom(),
		MODEL.dimensions.height() * MODEL.defaultscale() * MODEL.zoom(),
	);
	
	// ***
	// SUDO CODE
	// ***
	//
	// INITIATE the core DOM canvas
	// CREATE a full image canvas.
	// 		only part of it will be displayed, according to Zoom, X, and Y, coordinates
	// CREATE a preview canvas.
	//		transparent copy of the image canvas with size and coordinates.
	// 		draw on preview canvas only before applying to a normal canvas. Do not update a normal canvas. Update the preview canvas separately.
	// All of the updates will draw on a single canvas that is the CORE canvas.
	// BrushRelease will add modifications to the main canvas
	//
	// DRAWIMAGE function (x, y, zoom){
	//		basically scales up the image canvas to zoom, and draws at X and Y on the CORE canvas.
	// }
	// BRUSHDOWN function (starpos object){
	//		@param {object} startpos - Object carries x and y coordinates of the start of the drawing position.
	//		1. Create a temporary array with same dimensions as a main DATA 2d Array.
	//		call the brushmove function
	// }
	// BRUSHMOVE function(startpos object){
	//
	// }
	// DRAWPREVIEW function(){
	//		draws the preview canvas. Doens't have to have the x,y. Only relates to the main grid.
	// }

	canvases.preview = createCanvas( dom.width, dom.height );
}
