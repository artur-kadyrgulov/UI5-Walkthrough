sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello() {
            MessageToast.show("This message should appear in the message toast", {
                duration: 3000,                  // default
                width: "15em",                   // default
                my: "center bottom",             // default
                at: "center bottom",             // default
                of: window,                      // default
                offset: "0 0",                   // default
                collision: "fit fit",            // default
                onClose: null,                   // default
                autoClose: true,                 // default
                animationTimingFunction: "ease", // default
                animationDuration: 1000,         // default
                closeOnBrowserNavigation: true   // default
            });
        }
    });
 });