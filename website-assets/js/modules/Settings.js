const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

const settings = [
	{
		name: "Canvas Width",
		stream: MODEL.dimensions.width,
	},
	{
		name: "Canvas Height",
		stream: MODEL.dimensions.height,
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
		this.applySettings = function (e){

			return;
		}
		return;
	}
	view(vnode){
		let that = this;
		return m("div", {
			class: "settings "+(MODEL.menuopen() ? "open":"")
		}, [
			m("div.wrapper", [
				m("h1", "Settings"),
				settings.map(function(el, ind){
					return m(that.nodes.Field, el)
				}),
				m("input", {
					type: "button",
					onclick: this.applySettings,
					value: "Apply"
				})
			])
		])
	}
}

module.exports = Settings;
