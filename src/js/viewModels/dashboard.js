/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils',"require", "knockout","ojs/ojconverterutils-i18n","ojs/ojlabel", "ojs/ojinputtext", "ojs/ojformlayout","ojs/ojinputnumber","ojs/ojdatetimepicker","ojs/ojbutton","ojs/ojselectsingle","ojs/ojradioset","ojs/ojcheckboxset", "ojs/ojselectcombobox"],
 function(accUtils,require,ko) {
    function DashboardViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      
    var self = this;
    self.dateVal = ko.observable("");
    self.fName = ko.observable("");
    self.genderVal = ko.observable("Male");
    self.phoneNumberValue = ko.observable("");
    self.subjectWeightVal = ko.observable(65);
    self.dateTimeVal = ko.observable("");
    self.saveSubjectData = (event) =>{
      console.log("Save subject Data");
    };
    self.deleteSubjectData  =(event) => {
      console.log("Delete Suject Data");
    };
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
