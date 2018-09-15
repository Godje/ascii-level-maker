const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

module.exports = function (dom){
	MODEL.toggleRedraw(false)
	//REUSABLE FUNCTIONS
	let createCanvas = function(){ return document.createElement("canvas") };

	//CONSTANTS
	const $ = dom.getContext("2d");
	const image = createCanvas();
	const image$ = image.getContext("2d");
	const w = dom.width;
	const h = dom.height;

	//VARIABLES
	let drawing = false;
	let mousepos = {
		x: 0,
		y: 0,
	};
	let brushpos = {
		x: 0,
		y: 0
	};
	let startpos = {
		x: -1,
		y: -1
	};

	//PREFERENCES
	const gridcolor = "lightgray";

	//FUNCTIONS and PROCESS
	function mousemove(e){ 
		let el = e.target;
		let coords = {
			x: e.offsetX,
			y: e.offsetY
		}
		Object.assign( mousepos, coords );
		brushpos.x = Math.floor( coords.x / MODEL.defaultscale() );
		brushpos.y = Math.floor( coords.y / MODEL.defaultscale() );
	};
	function mouseup(e){ 
		drawing = false; 
	};
	function mousedown(e){ 
		startpos = {
			x: brushpos.x,
			y: brushpos.y
		}
		drawing = true; 
	};
	function drawTiles(data, canvas){ 
		let { defaultscale, zoom, dimensions } = MODEL;
		let tilesize = defaultscale() * zoom();
		for(let y = 0; y < data.length; y++){
			for(let x = 0; x < data[y].length; x++){
				let tile = data[y][x];
				let $ = canvas.getContext('2d');
				$.fillStyle = tile.color();
				$.fillRect(x * tilesize, y * tilesize, tilesize, tilesize)
			}
		}
	};
	function drawGrid(){
		let { defaultscale, dimensions, zoom } = MODEL;
		let tilesize = defaultscale() * zoom();
		$.lineWidth = 1;
		$.strokeStyle = gridcolor;
		console.log("Tilesize: ",tilesize)
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
		$.clearRect(0,0,w,h);
		image.width = dom.width;
		image.height = dom.height;
		drawTiles(MODEL.session.data(), image)
		redraw();
		console.log("called")
	}
	function redraw(){
		$.drawImage( image, 0, 0 )
		drawGrid()
	}

	dom.addEventListener("mousemove", mousemove);
	dom.addEventListener("mouseup", mouseup);
	dom.addEventListener("mousedown", mousedown);
	MODEL.session.tiles
	setup();
}
