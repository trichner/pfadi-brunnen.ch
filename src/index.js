'use strict';

let m = require('mithril');

console.log('Hello World!');

let url = "https://dl.dropboxusercontent.com/s/uzwsry3gyzyicyt/cheese.txt";
//model
var Page = {
	list: () => {
		//return m.request({method: "GET", url: "pages.json"});
		return m.prop([{
			"title": "n1b.ch",
			"url": "https://www.n1b.ch",
		}, {
			"title": "pfadi-brunnen.ch",
			"url": "https://www.pfadi-brunnen.ch",
		}, ]);
	},
	cheese: () => {
		return m.request({
			method: "GET",
			url: url,
			deserialize: (v) => v
		});
	}
};

var Demo = {
	//controller
	controller: function() {
		let pages = Page.list();
		let cheese = Page.cheese();

		cheese.then((txt) => console.log(txt));

		return {
			pages: pages,
			cheese: cheese,
			rotate: function() {
				pages().push(pages().shift());
			}
		}
	},

	//view
	view: function(ctrl) {
		return m("div", [
			ctrl.pages().map(function(page) {
				return m("a", {
					href: page.url
				}, page.title);
			}),
			m("button", {
				onclick: ctrl.rotate
			}, "Rotate links"),
			m("div", ctrl.cheese())
		]);
	}
};


//initialize
m.mount(document.getElementById("example"), Demo);