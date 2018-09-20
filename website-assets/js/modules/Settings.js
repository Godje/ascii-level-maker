const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

const Settings = {
	oninit: function(vnode){
		let that = this;
		this.displayWarning = false;
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
							if( value != vnode.attrs.target() ) that.displayWarning = true;

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
			},
			Warning: {
				view: function (vnode){
					return m("p.warning", "You may lose your work if you apply changes. Save your progress before you click \"Apply\"")
				}
			}
		}
		this.ctrl = {
			applySettings: function (event){
				this.displayWarning = false;
				this.fields.forEach( function (field){
					field.target( field.value() );
				});
				CTRL.refillData();
				CTRL.redrawCanvas()
			}
		}
		return;
	},
	view: function(vnode){
		let that = this;
		return m("div.settings-modal", {
		}, [
				m("h2", "Settings"),
				m("div.text-inputs", [
					this.fields.map( function (fieldData){
						return m(that.nodes.Field, fieldData)
					} ),	
				]),
				m("div.buttons", [
					m("button", {
						onclick: this.ctrl.applySettings.bind(this),
					}, "Apply")
				]),
				this.displayWarning ? m(this.nodes.Warning) : "",
		])
	}
}

module.exports = Settings;
