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
	zoom: m.stream(1),
	type: m.stream(""),
	canvas: undefined,
	menuopen: m.stream(false),
	toolsopen: m.stream(true),
	currenttool: m.stream("Brush"),
	tools: [ "Brush", "Eraser", "Line", "Square" ],
	currenttile: m.stream(1),
	modalopen: m.stream(false),
	modalcomponent: m.stream([]),
	session: { //JSON will be exported
		output: m.stream(""),
		tiles: [ //Sample tiles. Testing purposes
			{
				id: m.stream(tileid(tileid()+1)),
				title: m.stream("Stone"),
				color: m.stream("#999999"),
				symbol: m.stream("o"),
				selected: m.stream(false)
			},
			{
				id: m.stream(tileid(tileid()+1)),
				title: m.stream("Air"),
				color: m.stream("#aa3333"),
				symbol: m.stream("-"),
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
	}
}

module.exports = {
	CTRL, MODEL
};
