sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UiComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UiComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootview": {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }
        },

        init() {
            UiComponent.prototype.init.aply(this, arguments);

            const oData = {
                recipient : {
                    name : "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});