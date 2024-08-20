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

  onNavToMain: function () {
    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    oRouter.navTo("main");
},

  onBotoDeAlertaButtonPress: function() {
    sap.m.MessageToast.show("Alerta!");
  },
        onSideNavButtonPress: function(oEvent) {
          
            var oSideNavigation = this.byId("sideNavigation");
          
            var bExpanded = oSideNavigation.getExpanded();
            oSideNavigation.setExpanded(!bExpanded);
        },





handleEditPress: function () {
  var oModel = this.getView().getModel();
  oModel.setProperty("/editable", true); 
  var oEditButton = this.getView().byId("edit");
  var oSaveButton = this.getView().byId("save");
  var oCancelButton = this.getView().byId("cancel");

  
  oEditButton.setVisible(false);
  oSaveButton.setVisible(true);
  oCancelButton.setVisible(true);
},

handleSavePress: function () {
  var oModel = this.getView().getModel();
  oModel.setProperty("/editable", false); 
  var oEditButton = this.getView().byId("edit");
  var oSaveButton = this.getView().byId("save");
  var oCancelButton = this.getView().byId("cancel");

  oEditButton.setVisible(true);
  oSaveButton.setVisible(false);
  oCancelButton.setVisible(false);
},



handleCancelPress: function () {
  var oModel = this.getView().getModel();
  oModel.setProperty("/editable", false); 
  var oEditButton = this.getView().byId("edit");
  var oSaveButton = this.getView().byId("save");
  var oCancelButton = this.getView().byId("cancel");

  oEditButton.setVisible(true);
  oSaveButton.setVisible(false);
  oCancelButton.setVisible(false);
}



});
});
