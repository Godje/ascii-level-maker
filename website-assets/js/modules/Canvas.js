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

const maxResolution = 20;

const canvases = {
	realcanvas: null,
	image: null,
	preview: null,
}

module.exports = function (dom){
	MODEL.toggleRedraw(false); //crutch

	canvases.realcanvas = dom;
	canvases.image = createCanvas();

	function draw(){

	}
	function render(){

	}
}
