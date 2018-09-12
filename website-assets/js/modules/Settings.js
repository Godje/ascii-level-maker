const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;

const Settings = {
	oninit: function(vnode){
		this.fields = [
			{
				name: "Canvas Width",
				value: m.stream( MODEL.dimensions.width() ),
				target: MODEL.dimensions.width
			},
			{
				name: "Canvas Height",
				value: m.stream( MODEL.dimensions.height() ),
				target: MODEL.dimensions.height
			}
		];
		this.nodes = {
			Field: {
				oninit: function (vnode){
					this.ctrl = {
						processInput: function (value){
							let str = value.replace(/\D+/g, ''); //only numbers
							vnode.attrs.value( str )
						}
					}
				},
				view: function(vnode){
					let lowname = vnode.attrs.name.toLowerCase().replace(" ", "-");
					return m("div.input-wrapper", [
						m("label", {
							for: "input-"+lowname
						}, vnode.attrs.name),
						m("input", {
							oninput: m.withAttr("value", this.ctrl.processInput),
							value: vnode.attrs.value
						})
					])
				}
			}
		}
		this.ctrl = {
			applySettings: function (event){
				this.fields.forEach( function (field){
					field.target( field.value() );
				})
			}
		}
		return;
	},
	view: function(vnode){
		let that = this;
		return m("div", {
			class: "settings "+(MODEL.menuopen() ? "open":"")
		}, [
			m("div.wrapper", [
				m("h1", "Settings"),
				this.fields.map( function (fieldData){
					return m(that.nodes.Field, fieldData)
				} ),
				m("input", {
					type: "button",
					onclick: this.ctrl.applySettings.bind(this),
					value: "Apply"
				})
			])
		])
	}
}

module.exports = Settings;
