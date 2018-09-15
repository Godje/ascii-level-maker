const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;
const Tiles = require("./Tiles.js");
const Modal = require("./Modal.js");
const CreateModal = require("./CreateModal.js");
const CanvasMonitor = require("./CanvasMonitor.js");

const buttons = [
	{
		title: "+ Add Tile",
		click: "createTile",
		class: "add-tile",
	},
	{
		title: "Save JSON session",
		click: "saveSession",
		class: "save-session",
	},
	{
		title: "Get Ouput",
		click: "getOutput",
		class: "get-output",
	}
];



const Monitor = {
	oninit: function(vnode){
		this.ctrl = {
			createTile: function (e){
				CTRL.openModal( CreateModal )
			},
			saveSession: function (e){
				console.log(e)
				return;
			},
			getOutput: function (e){
				let output = MODEL.session.data().map(function (row){
					return row.map(function (col){
						return col.symbol();
					});
				});
				let component = {
					view: function (vnode){
						return m("div.output-modal", [
							m("textarea", {
								style: `
									width: ${ MODEL.dimensions.width() * 40 }px;
									height: ${ MODEL.dimensions.height() * 30 }px;
								`,
								oncreate: function (vnode){
									console.log(e)
									vnode.dom.select()
								}
							}, [
								JSON.stringify( output ).replace(/]\,/g, "],\n")
							])
						]);
					}
				}
				CTRL.openModal( component )
				return;
			},
			zoom: function (dir){
				return;
			}
		}
		return;
	},
	view: function(vnode){
		const that = this;
		return m("div.monitor", { }, [
			m("h1", "ASCII Level Maker"),
			m(CanvasMonitor),
			m(Tiles),
			m("div.buttons", [
				buttons.map(function (b){
					return m("button", {
						class: b.class,
						onclick: that.ctrl[b.click],
					}, b.title);
				})
			]),
		]);
	}
}
module.exports = Monitor;
