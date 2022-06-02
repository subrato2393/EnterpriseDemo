(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_bna-trainee-biodata_bna-trainee-biodata-routing_module_ts"],{

/***/ 86758:
/*!***************************************************************************!*\
  !*** ./src/app/bna-trainee-biodata/bna-trainee-biodata-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNATraineeBiodataRoutingModule": function() { return /* binding */ BNATraineeBiodataRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    // {
    //   path: 'sailor-biodata-tab',
    //   loadChildren: () =>
    //     import('./sailor-biodata-tab-layout/sailor-biodata-tab-layout.module').then(
    //       (m) => m.SailorTabModule
    //     ),
    // },
    {
        path: 'trainee-biodata-tab',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js-src_app_basic-9e2bcb"), __webpack_require__.e("default-src_app_basic-setup_basic-setup-routing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_bna-trainee-biodata_biodata-tab-layout_biodata-tab-layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./biodata-tab-layout/biodata-tab-layout.module */ 46069)).then((m) => m.TabModule),
    },
    // {
    //   path: 'newentryevaluation-list',
    //   component: NewEntryEvaluationListComponent,
    // },
    // { path: 'update-newentryevaluation/:newEntryEvaluationId', 
    // component: NewNewEntryEvaluationComponent 
    // },
    // {
    //   path: 'add-newentryevaluation',
    //   component: NewNewEntryEvaluationComponent,
    // },
];
class BNATraineeBiodataRoutingModule {
}
BNATraineeBiodataRoutingModule.ɵfac = function BNATraineeBiodataRoutingModule_Factory(t) { return new (t || BNATraineeBiodataRoutingModule)(); };
BNATraineeBiodataRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BNATraineeBiodataRoutingModule });
BNATraineeBiodataRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BNATraineeBiodataRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);