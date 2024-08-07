sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("myApp.controller.Detail", {
    onNavBack: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Main");
    },

    onNavSecond: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Second");
    },


    onBotoDeAlertaButtonPress: function() {
      sap.m.MessageToast.show("Alerta!");
    },
          onSideNavButtonPress: function(oEvent) {
           
              var oSideNavigation = this.byId("sideNavigation");
            
              var bExpanded = oSideNavigation.getExpanded();
              oSideNavigation.setExpanded(!bExpanded);
          },
  });
});
