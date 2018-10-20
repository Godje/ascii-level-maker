const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

module.exports = function (dom){
	MODEL.toggleRedraw(false); //crutch

	//REUSABLE FUNCTIONS
	let createCanvas = function(w, h){ 
		let el = document.createElement("canvas");
		el.width = w;
		el.height = h;
		return el 
	};
	let resetPreview = function (){
		let arr = new Array( MODEL.dimensions.height() ).fill();
		arr = arr.map(function (el){
			return new Array( MODEL.dimensions.width() ).fill();
		});
		previewData = arr;
		drawPreview( previewData, preview )
	}

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
	let previewData = [];

	//PREFERENCES
	const gridcolor = "lightgray";

	resetPreview();

	//FUNCTIONS and PROCESS
	function mousemove(e){ 
		let el = e.target;
		let coords = {
			x: e.offsetX,
			y: e.offsetY
		}
		Object.assign( mousepos, coords );
		brushpos.x = Math.floor( coords.x / MODEL.defaultscale() / MODEL.zoom() );
		brushpos.y = Math.floor( coords.y / MODEL.defaultscale() / MODEL.zoom() );
	};
	function mouseup(e){ 
		drawing = false; 
		applyPreview();
	};
	function mousedown(e){ 
		Object.assign( startpos, brushpos );
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
	function modifyPreview( tool, tile, startpos, brushpos ){ 
		let zoom = MODEL.zoom;
		let scale = MODEL.scale;

		const applyBrush = function (){
			previewData[ brushpos.y ][ brushpos.x ] = tile;
		}
		const applySquare = function (){
			resetPreview();
			clearCanvas( preview );
			for(let y = startpos.y; y <= brushpos.y; y++){
				for(let x = startpos.x; x <= brushpos.x; x++){
					if(y == startpos.y || y == brushpos.y)
						previewData[y][x] = tile;
					if(x == startpos.x || x == brushpos.x)
						previewData[y][x] = tile;
				}
			}
		}
		switch( tool ){
			case "Brush": applyBrush();
				break;
			case "Square": applySquare();
		}
		drawPreview( previewData, preview );
	}
	function drawPreview( data, canvas ){
		let { defaultscale, zoom, dimensions } = MODEL;
		let tilesize = defaultscale() * zoom();
		for(let y = 0; y < data.length; y++){
			for(let x = 0; x < data[y].length; x++){
				let tile = data[y][x];
				let $ = canvas.getContext('2d');
				let color = 'rgba(0,0,0,0)';
				tile == undefined ? void 0 : color = tile.color();
				$.fillStyle = color;
				$.fillRect(x * tilesize, y * tilesize, tilesize, tilesize)
			}
		}
		$.drawImage( image, 0, 0 );
		$.drawImage( preview, 0, 0 );
		drawGrid( $ );
	}
	function applyPreview(){
		let data = MODEL.session.data;
		let arr = data().map(function (row, y, arr){
			return row.map(function (col, x, row){
				let pdvalue = previewData[y][x];
				let rvalue = (pdvalue != "undefined" && pdvalue != null) ? pdvalue : col;
				return rvalue;
			});
		});
		data(arr);
		drawTiles( data(), image );
		resetPreview();
		clearCanvas( preview );
		redraw();
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
	function clearCanvas( canvas ){
		canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
	}
	function setup(){
		clearCanvas(dom);
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
		drawing ? modifyPreview( MODEL.currenttool(), MODEL.currenttile(), startpos, brushpos ) : void 0; 

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
