/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Month_alert/Month/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});