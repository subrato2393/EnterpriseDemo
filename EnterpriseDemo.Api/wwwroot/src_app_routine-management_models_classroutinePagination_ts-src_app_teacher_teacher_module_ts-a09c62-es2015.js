(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_routine-management_models_classroutinePagination_ts-src_app_teacher_teacher_module_ts-a09c62"],{

/***/ 22881:
/*!*********************************************************************!*\
  !*** ./src/app/routine-management/models/classroutinePagination.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassRoutinePagination": function() { return /* binding */ ClassRoutinePagination; }
/* harmony export */ });
class ClassRoutinePagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 19927:
/*!***************************************************!*\
  !*** ./src/app/teacher/teacher-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherRoutingModule": function() { return /* binding */ TeacherRoutingModule; }
/* harmony export */ });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../authentication/page404/page404.component */ 1991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class TeacherRoutingModule {
}
TeacherRoutingModule.ɵfac = function TeacherRoutingModule_Factory(t) { return new (t || TeacherRoutingModule)(); };
TeacherRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TeacherRoutingModule });
TeacherRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TeacherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 33042:
/*!*******************************************!*\
  !*** ./src/app/teacher/teacher.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherModule": function() { return /* binding */ TeacherModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_marquee__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-marquee */ 67054);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 93104);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-pick-datetime */ 86050);
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-routing.module */ 19927);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15442);
/* harmony import */ var _assignedsubject_list_assignedsubject_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignedsubject-list/assignedsubject-list.component */ 12479);
/* harmony import */ var _assignedsubjectmark_list_assignedsubjectmark_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignedsubjectmark-list/assignedsubjectmark-list.component */ 82482);
/* harmony import */ var _instructorexam_list_instructorexam_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instructorexam-list/instructorexam-list.component */ 24885);
/* harmony import */ var _assignment_submittedassignment_list_submittedassignment_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignment/submittedassignment-list/submittedassignment-list.component */ 28699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);































class TeacherModule {
}
TeacherModule.ɵfac = function TeacherModule_Factory(t) { return new (t || TeacherModule)(); };
TeacherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TeacherModule });
TeacherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! echarts */ 95252, 23)),
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_15__.NgApexchartsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule,
            ng_marquee__WEBPACK_IMPORTED_MODULE_29__.NgMarqueeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TeacherModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _assignedsubject_list_assignedsubject_list_component__WEBPACK_IMPORTED_MODULE_3__.AssignedSubjectListComponent,
        _assignedsubjectmark_list_assignedsubjectmark_list_component__WEBPACK_IMPORTED_MODULE_4__.AssignedSubjectMarkListComponent,
        _instructorexam_list_instructorexam_list_component__WEBPACK_IMPORTED_MODULE_5__.InstructorExamComponent,
        _assignment_submittedassignment_list_submittedassignment_list_component__WEBPACK_IMPORTED_MODULE_6__.SubmittedAssignmentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_15__.NgApexchartsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule,
        ng_marquee__WEBPACK_IMPORTED_MODULE_29__.NgMarqueeModule] }); })();


/***/ }),

/***/ 65960:
/*!****************************************!*\
  !*** ./src/assets/data/master-data.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterData": function() { return /* binding */ MasterData; }
/* harmony export */ });
const MasterData = {
    paging: {
        showFirstLastButtons: true,
        pageIndex: 1,
        pageSize: 10,
        pageSizeOptions: [5, 10, 15, 20, 25, 50, 100, 200, 500, 1000]
    },
    codevaluetype: {
        LocationType: "LocationType",
        ResultStatus: "ResultStatus",
        DeadStatus: "DeadStatus",
        FundingDetail: "FundingDetail",
        ModuleIcon: "Material Icon"
    },
    coursetype: {
        LocalCourse: 3,
        ForeignCourse: 18,
        InterService: 19,
        MIST: 1022,
        CentralExam: 1021,
    },
    classType: {
        Class: 3,
        Exam: 4,
    },
    courseName: {
        QExam: 1252,
        StaffCollage: 1251,
        JCOsTraining: 1253,
    },
    country: {
        bangladesh: 1
    },
    examtypefromcoursetype: {
        centralExam: 1021
    },
    TraineeStatus: {
        officer: 4,
        sailor: 5,
        civil: 6
    },
    OfficerType: {
        Bangladesh: 1,
        Foreign: 2
    },
    branch: {
        all: 0,
        mpa: 1,
        hel: 2,
        uav: 4
    },
};


/***/ })

}]);