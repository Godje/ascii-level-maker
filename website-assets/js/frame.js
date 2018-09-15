const m = require("mithril");
			m.stream = require("mithril-stream");

const tileid = m.stream(0);
const monitorwidth = 600;

const MODEL = {
	dimensions: {
		width: m.stream(10),
		height: m.stream(10)
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
	tools: [ "Brush", "Eraser", "Line", "Square" ],
	currenttile: m.stream(1),
	modalopen: m.stream(false),
	modalcomponent: m.stream([]),
	session: { //JSON will be exported
		data: m.stream([
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
			"----------",
		]),
		output: m.stream(),
		tiles: [ //Sample tiles. Testing purposes
			{
				id: m.stream(tileid(tileid()+1)),
				title: m.stream("Air"),
				color: m.stream("#aa3333"),
				symbol: m.stream("-"),
				selected: m.stream(false)
			},
			{
				id: m.stream(tileid(tileid()+1)),
				title: m.stream("Stone"),
				color: m.stream("#999999"),
				symbol: m.stream("o"),
				selected: m.stream(false)
			},
			{
				id: m.stream(tileid(tileid()+1)),
				title: m.stream("Grass"),
				color: m.stream("#99ff99"),
				symbol: m.stream("="),
				selected: m.stream(true)
			},
		],
	},
	tileid: m.stream(tileid())
}


MODEL.defaultscale = m.stream.combine( function ( width, height, zoom ){
	let size = 600 / width();
	return size;
}, [ MODEL.dimensions.width, MODEL.dimensions.height, MODEL.zoom] );

const minzoom = 0.99;
const zoomstep = 0.25;

const CTRL = {
	zoomIn: function (){
		let futurezoom = MODEL.zoom() + zoomstep;
		futurezoom > minzoom ? MODEL.zoom( futurezoom ) : void 0;
	},
	zoomOut: function (){
		let futurezoom = MODEL.zoom() - zoomstep;
		futurezoom > minzoom ? MODEL.zoom( futurezoom ) : void 0;
	},
	fillData: function (){
		MODEL.session.data(
			new Array( MODEL.dimensions.height() ).fill(
				new Array( MODEL.dimensions.height() ).fill(
					MODEL.session.tiles[0]
				)
			)
		)
	},
	redrawCanvas: function (){ //very fake, don't blame me, i suck. Change of width in stream will re-plant the canvas element and redraw
		MODEL.toggleRedraw(true)
	}
}

CTRL.fillData();
module.exports = {
	CTRL, MODEL
};
