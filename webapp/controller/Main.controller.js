sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("myApp.controller.Main", {
      onNavigateToDetail: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Detail");
      },

      onNavSecond: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Second");
      },

      onInit: function () {
        var oModel = new JSONModel({
          items: [
            { Value1: "Nome", Value2: "Luana Da Costa" },
            { Value1: "País", Value2: "Brasil" },
            { Value1: "CPF", Value2: "987.789.987-12" },
          ],
          editable: false,
        });

        this.getView().setModel(oModel);
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
      },
    });
  }
);
