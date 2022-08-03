define(["require", "exports", "knockout", "text!dataCollection/kitsdata.json","ojs/ojarraydataprovider","ojs/ojformlayout", "ojs/ojinputtext"], 
    function (require,exports,ko,jsonKitsData,ArrayDataProvider) {
    "use strict";
    class KitesModel {
        constructor(args) {
            this.distributionValue = ko.observable("Blinded");
            this.discriptionValue = ko.observable("Kit A Description");
            this.typeValue = ko.observable("Bottle");
            this.storageValue = ko.observable("Ambient (15-25C)");
            this.kitsCount = ko.observable(1);
            this.kitsUnitCount = ko.observable(1);

            try{
                this.arr = JSON.parse(jsonKitsData);
                this.kitData = new ArrayDataProvider(this.arr, {
                    keyAttributes: "kit_id",
                });
                console.log(this.kitData);
            }catch(e){}
           
        }
    }
 
    return KitesModel;
});
