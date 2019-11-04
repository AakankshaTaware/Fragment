sap.ui.define([
	
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller , MessageToast) {
	"use strict";

	return Controller.extend("Month_alert.Month.controller.View1", {

 month : function (evt) {
 
         MessageToast.show(evt.getSource().getId());
      }
	});
}); 
