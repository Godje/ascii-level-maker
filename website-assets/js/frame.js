const m = require("mithril");
			m.stream = require("mithril-stream");

const tileid = m.stream(0);
const monitorwidth = 600;

const MODEL = {
	dimensions: {
		width: m.stream(10),
		height: m.stream(10)
	},
	canvasposition: {
		x: 0,
		y: 0,
	},
	scroll: {
		x: m.stream(0),
		y: m.stream(0),
	},
	defaultscale: null, //defined later in this file
	zoom: m.stream(1),
	type: m.stream(""),
	toggleRedraw: m.stream(false), //the value of this doesn't matter
	canvas: undefined,
	menuopen: m.stream(false),
	toolsopen: m.stream(true),
	currenttool: m.stream("Brush"),
	tools: [ "Brush", "Line", "Square" ],
	currenttile: m.stream(1),
	modalopen: m.stream(false),
	modalcomponent: m.stream([]),
	session: { //JSON will be exported
		data: [],
		output: m.stream(),
		tiles: [ //Sample tiles. Testing purposes
			{
				id: m.stream( tileid(tileid()+1) ),
				title: m.stream("Air"),
				color: m.stream("rgba(255,255,255,0)"),
				symbol: m.stream(" "),
				selected: m.stream(true)
			},
			{
				id: m.stream( tileid(tileid()+1) ),
				title: m.stream("Stone"),
				color: m.stream("#999999"),
				symbol: m.stream("o"),
				selected: m.stream(false)
			},
			{
				id: m.stream( tileid(tileid()+1) ),
				title: m.stream("Grass"),
				color: m.stream("#99ff99"),
				symbol: m.stream("="),
				selected: m.stream(false)
			},
		],
	},
	tileid: m.stream(tileid())
}


//assignment after defining
MODEL.currenttile( MODEL.session.tiles[0] );
MODEL.defaultscale = m.stream.combine( function ( width, height, zoom ){
	let size = 600 / width();
	console.log(size)
	return size;
}, [ MODEL.dimensions.width, MODEL.dimensions.height, MODEL.zoom] );

const minzoom = 1;
const zoomstep = 0.25;

const CTRL = {
	setZoom: function(v){
		if(v >= minzoom) MODEL.zoom( v );
		return;
	},
	zoomIn: function (){
		let futurezoom = MODEL.zoom() + zoomstep;
		futurezoom >= minzoom ? CTRL.setZoom( futurezoom ) : void 0;
	},
	zoomOut: function (){
		let futurezoom = MODEL.zoom() - zoomstep;
		futurezoom >= minzoom ? CTRL.setZoom( futurezoom ) : void 0;
	},
	openModal: function (ch){
		MODEL.modalopen(true);
		MODEL.modalcomponent(ch);
	},
	redrawCanvas: function (){ 
		MODEL.toggleRedraw(true);
	}
}

module.exports = {
	CTRL, MODEL
};
