sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
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

    onButtonPress: function() {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      MessageToast.show("Número gerado: " + randomNumber);
    }
  });
});