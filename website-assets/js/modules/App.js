const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Canvas = require("./Canvas.js");

const settings = [
	{
		name: "Canvas Size",
		stream: MODEL.size,
	},
	{
		name: "Tile Size",
		stream: MODEL.tilesize
	}
];

class Settings {
	constructor(vnode){
		this.nodes = {
			Field: {
				oninit: function (vnode){
					this.processInput = function (value){
						vnode.attrs.stream(value);
						return value;
					}
					return vnode;
				},
				view: function (vnode){
					let that = this;
					let lowname = vnode.attrs.name.toLowerCase().replace(" ", "-");
					return m("div.input-wrapper", [
						m("label", {
							for: "input-"+lowname
						}, vnode.attrs.name),
						m("input", {
							id: "input-"+lowname,
							oninput: m.withAttr("value", that.processInput),
							value: vnode.attrs.stream(),
						})
					])
				}
			}
		}
		return;
	}
	view(vnode){
		let that = this;
		return m("div.settings", {
			class: "settings "+(MODEL.menuopen() ? "open":"")
		}, [
			m("div.wrapper", [
				m("h1", "Settings"),
				settings.map(function(el, ind){
					return m(that.nodes.Field, el)
				})
			])
		])
	}
}

class App {
	constructor(vnode){
		this.menuClick = function(e){
			MODEL.menuopen( !MODEL.menuopen() )
		}
		return;
	}
	view(vnode){
		return m(".screen", [
			m("div.menu-button", {
				class: "menu-button "+(MODEL.menuopen() ? "open" : ""),
				onclick: this.menuClick
			}, [
				m("div.line-1"), m("div.line-2"), m("div.line-3")
			]),
			m(Settings),
			m("div.monitor", [
				m(Canvas)
			])
		]);
	}
}

module.exports = App;
