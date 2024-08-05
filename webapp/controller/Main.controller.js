sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
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
      // Um modelo de dados de exemplo
      var oModel = new JSONModel({
          items: [
              { Value1: "Nome", Value2: "Luana Da Costa" },
              { Value1: "País", Value2: "Brasil" },
              { Value1: "CPF", Value2: "987.789.987-12" },
          ],
          editable: false // Adicionando uma nova propriedade para controle de edição

      });
      // Definir o modelo para o modo de exibição
      this.getView().setModel(oModel);
  },

  
  handleEditPress: function () {
    var oModel = this.getView().getModel();
    oModel.setProperty("/editable", true); // Permitindo a edição dos campos
    var oEditButton = this.getView().byId("edit");
    var oSaveButton = this.getView().byId("save");
    var oCancelButton = this.getView().byId("cancel");

    // Ocultar botão de edição, mostrar botões salvar e cancelar
    oEditButton.setVisible(false);
    oSaveButton.setVisible(true);
    oCancelButton.setVisible(true);
},

handleSavePress: function () {
    var oModel = this.getView().getModel();
    oModel.setProperty("/editable", false); // Desabilitando a edição dos campos
    var oEditButton = this.getView().byId("edit");
    var oSaveButton = this.getView().byId("save");
    var oCancelButton = this.getView().byId("cancel");
  
    // Mostrar botão de edição, ocultar botões de salvar e cancelar
    oEditButton.setVisible(true);
    oSaveButton.setVisible(false);
    oCancelButton.setVisible(false);
},



handleCancelPress: function () {
    var oModel = this.getView().getModel();
    oModel.setProperty("/editable", false); // Desabilitando a edição dos campos
    var oEditButton = this.getView().byId("edit");
    var oSaveButton = this.getView().byId("save");
    var oCancelButton = this.getView().byId("cancel");

    // Show edit button, hide save and cancel buttons
    oEditButton.setVisible(true);
    oSaveButton.setVisible(false);
    oCancelButton.setVisible(false);
}



 });
});
