/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['../accUtils', "ojs/ojcorerouter", "ojs/ojknockoutrouteradapter", "ojs/ojmodulerouter-adapter", "ojs/ojarraydataprovider", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojnavigationlist"],
 function(accUtils, CoreRouter, KnockoutRouterAdapter, ModuleRouterAdapter, ArrayDataProvider, ko, ojbootstrap_1) {
  class IncidentsViewModel {
    constructor(args) {
        var self = this;
        this.args = args;
      
        self.childRoutes = [
              { path: "", redirect: "kits" },
              { path: "kits", detail: { label: "Kits" } },
              { path: "branches", detail: { label: "Branches" } },
              { path: "enrollment", detail: { label: "Enrollment" } },
              { path: "sites", detail: { label: "Sites" } },
              { path: "role", detail: { label: "Role" } },
              { path: "trainings", detail: { label: "Trainings" } }
          ];
            // Create ADP with partial array, excluding first redirect route
          self.dataProvider = new ArrayDataProvider(self.childRoutes.slice(1), {
              keyAttributes: "path",
          });
           
          self.childRouter = this.args.parentRouter.createChildRouter(self.childRoutes);

          self.childModule = new ModuleRouterAdapter(self.childRouter, {
            viewPath: "views/adminrouter/",
            viewModelPath: "viewModels/adminrouter/",
          });
          //console.log(self.childModule);
            // Create an observable to react to the current router state path
            self.selection = new KnockoutRouterAdapter(self.childRouter);
            // Synchronize the router, causing it to go to its default route
            self.childRouter.sync();
          }
      }
    return IncidentsViewModel;
  }
);
