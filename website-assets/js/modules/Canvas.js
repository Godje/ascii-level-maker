const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

module.exports = function (dom){
	MODEL.toggleRedraw(false)
	//REUSABLE FUNCTIONS
	let createCanvas = function(w, h){ 
		let el = document.createElement("canvas");
		el.width = w;
		el.height = h;
		return el 
	};

	//CONSTANTS
	const $ = dom.getContext("2d");
	const w = dom.width;
	const h = dom.height;
	const image = createCanvas(w, h);
	const preview = createCanvas(w, h);

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
	let stoploop = false;

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
		tool = MODEL.currenttool();
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
	function drawPreview(){ 
		console.log("called drawPreview");
	}
	function drawGrid( ctx ){
		let { defaultscale, dimensions, zoom } = MODEL;
		let tilesize = defaultscale() * zoom();
		let $ = ctx;
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
		$.clearRect(0,0,w,h);
		drawTiles(MODEL.session.data(), image)
		stoploop = true;
		redraw();
	}
	function redraw(){
		$.drawImage( image, 0, 0 );
		$.drawImage( preview, 0, 0 );
		drawGrid( $ );
		stoploop = false;
		loop();
	}
	function loop(){
		//I honestly think this is ineffective and retarded, but I know nothing better
		drawing ? drawPreview( tool, startpos, brushpos ) : void 0; 

		//fake redraw stop. Quick fix. Better solutions will come later.
		if(stoploop) return;
		requestAnimationFrame(loop);
	}
	dom.addEventListener("mousemove", mousemove);
	dom.addEventListener("mouseup", mouseup);
	dom.addEventListener("mousedown", mousedown);
	MODEL.session.tiles
	setup();
}
