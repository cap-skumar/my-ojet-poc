define(["knockout","ojs/ojasyncvalidator-regexp","text!dataCollection/shipingdata.json", "ojs/ojarraydataprovider", "ojs/ojbufferingdataprovider","ojs/ojknockout","ojs/ojbutton", "ojs/ojtrain","ojs/ojlabel", "ojs/ojformlayout", "ojs/ojinputtext", "ojs/ojvalidationgroup","ojs/ojtable","ojs/ojlabelvalue"], 
    function (ko, AsyncRegExpValidator,shipingData,ArrayDataProvider, BufferingDataProvider) {
    "use strict";
    class SitesModel {
        constructor() {
            var self = this;
            self.selectedStep = ko.observable('stp1');
            self.selectedLabel = ko.observable('Step One');
            self.isFormReadonly = ko.observable(false);
            self.name = ko.observable();
            /*--------- Sites:Shiping Details ----*/
            self.shipDataArray = JSON.parse(shipingData);
            self.shipDataObservableArray = ko.observableArray(self.shipDataArray);
            self.shipDataProvider = new BufferingDataProvider(new ArrayDataProvider(self.shipDataObservableArray, {
                keyAttributes: 'shipment_id'
            }));
            self.firstSelected = ko.observable();
            self.firstSelectedRowChangedListener = (event) => {
                const itemContext = event.detail.value;
                if (itemContext && itemContext.data) {
                    const dept = itemContext.data;
                    console.log("ship data"+dept);
                }
            };

            self.stepArray = ko.observableArray([
                { label: 'Settings', id: 'stp1' },
                { label: 'Site Address', id: 'stp2' },
                { label: 'Shipping', id: 'stp3' },
                { label: 'Finish', id: 'stp4' }
            ]);
            self.regExpValidator = new AsyncRegExpValidator({
                pattern: "[a-zA-Z ,.'-]{1,}",
                hint: "1 or more letters",
                messageDetail: "You must enter at least 1 letter",
            });
            self.update = (event) => {
                var train = document.getElementById('train');
                let selectedStep = train.getStep(event.detail.value);
                if (selectedStep != null) {
                    this.selectedLabel(selectedStep.label);
                }
            };
            
        }
    }
    return SitesModel;
});