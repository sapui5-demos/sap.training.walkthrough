sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "/destinations/ODATA_ORG/V2/Northwind/Northwind.svc/"
			});
			// configure
			MockServer.config({
				autoRespondAfter: 1000
			});
			// simulate
			var sPath = jQuery.sap.getModulePath("sap.training.walkthrough.test.service");
			oMockServer.simulate(sPath + "/metadata.xml", sPath);
			// start
			oMockServer.start();
		}
	};
});