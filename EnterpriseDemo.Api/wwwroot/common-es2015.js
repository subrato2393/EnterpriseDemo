(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["common"],{

/***/ 12522:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": function() { return /* binding */ MatToolbar; },
/* harmony export */   "MatToolbarModule": function() { return /* binding */ MatToolbarModule; },
/* harmony export */   "MatToolbarRow": function() { return /* binding */ MatToolbarRow; },
/* harmony export */   "throwToolbarMixedModesError": function() { return /* binding */ throwToolbarMixedModesError; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatToolbar.
/** @docs-private */



const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
});
class MatToolbarRow {
}
MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) { return new (t || MatToolbarRow)(); };
MatToolbarRow.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatToolbarRow, selectors: [["mat-toolbar-row"]], hostAttrs: [1, "mat-toolbar-row"], exportAs: ["matToolbarRow"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: 'mat-toolbar-row',
                exportAs: 'matToolbarRow',
                host: { 'class': 'mat-toolbar-row' }
            }]
    }], null, null); })();
class MatToolbar extends _MatToolbarBase {
    constructor(elementRef, _platform, document) {
        super(elementRef);
        this._platform = _platform;
        // TODO: make the document a required param when doing breaking changes.
        this._document = document;
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._checkToolbarMixedModes();
            this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
    }
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     */
    _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            // Check if there are any other DOM nodes that can display content but aren't inside of
            // a <mat-toolbar-row> element.
            const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes)
                .filter(node => !(node.classList && node.classList.contains('mat-toolbar-row')))
                .filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8))
                .some(node => !!(node.textContent && node.textContent.trim()));
            if (isCombinedUsage) {
                throwToolbarMixedModesError();
            }
        }
    }
}
MatToolbar.ɵfac = function MatToolbar_Factory(t) { return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
MatToolbar.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatToolbar, selectors: [["mat-toolbar"]], contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
    } }, hostAttrs: [1, "mat-toolbar"], hostVars: 4, hostBindings: function MatToolbar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    } }, inputs: { color: "color" }, exportAs: ["matToolbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatToolbar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    } }, styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"], encapsulation: 2, changeDetection: 0 });
MatToolbar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
MatToolbar.propDecorators = {
    _toolbarRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren, args: [MatToolbarRow, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'mat-toolbar',
                exportAs: 'matToolbar',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-toolbar',
                    '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
                    '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, { _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [MatToolbarRow, { descendants: true }]
        }] }); })();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
    throw Error('MatToolbar: Attempting to combine different toolbar modes. ' +
        'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' +
        'inside of a `<mat-toolbar>` for a single row.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatToolbarModule {
}
MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) { return new (t || MatToolbarModule)(); };
MatToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatToolbarModule });
MatToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
                exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
                declarations: [MatToolbar, MatToolbarRow]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatToolbarModule, { declarations: function () { return [MatToolbar, MatToolbarRow]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; }, exports: function () { return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ 81439:
/*!********************************************************************!*\
  !*** ./src/app/central-exam/models/traineenominationPagination.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraineeNominationPagination": function() { return /* binding */ TraineeNominationPagination; }
/* harmony export */ });
class TraineeNominationPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 33593:
/*!*******************************************************************!*\
  !*** ./src/app/central-exam/service/traineenomination.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraineeNominationService": function() { return /* binding */ TraineeNominationService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/traineenominationPagination */ 81439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class TraineeNominationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.TraineeNominations = [];
        this.TraineeNominationPagination = new _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationPagination();
    }
    getselectedExamCentern() {
        return this.http.get(this.baseUrl + '/exam-center/get-selectedExamCenters');
    }
    getselectedNewAtempt() {
        return this.http.get(this.baseUrl + '/new-atempt/get-selectedNewAtempts');
    }
    // trainee-nomination/get-selectedTraineeNominationCount?traineeId=44895&courseNameId=1252
    getTraineeNominationCount(traineeId, courseNameId) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-selectedTraineeNominationCount?traineeId=' + traineeId + '&courseNameId=' + courseNameId);
    }
    getselectedpresentbillets() {
        return this.http.get(this.baseUrl + '/present-billet/get-selectedPresentBillets');
    }
    //autocomplete
    //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032
    getSelectedTraineeByparameterRequest(pno, courseDurationId, courseNameId) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.map(item => item)));
    }
    getSelectedTraineeByPno(pno) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.map(item => item)));
    }
    getPresentBilletByTraineeId(traineeId) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-selectedPresentBilletByTraineeId?traineeId=' + traineeId);
    }
    getTraineeNominationByCourseDurationId(courseDurationId) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
    }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getSelectedTrainee() {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-selectedTraineeByPno');
    }
    getselectedcourseduration() {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurations');
    }
    getselectedTraineeCourseStatus() {
        return this.http.get(this.baseUrl + '/trainee-course-status/get-selectedTraineeCourseStatuses');
    }
    getselectedWithdrawnDoc() {
        return this.http.get(this.baseUrl + '/withdrawn-docs/get-selectedWithDrawnDocs');
    }
    getTraineeNominationsByCourseDurationId(pageNumber, pageSize, searchText, courseDurationId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        params = params.append('courseDurationId', courseDurationId.toString());
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsByCourseDurationId', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            this.TraineeNominations = [...this.TraineeNominations, ...response.body.items];
            this.TraineeNominationPagination = response.body;
            return this.TraineeNominationPagination;
        }));
    }
    getTraineeNominations(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominations', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            this.TraineeNominations = [...this.TraineeNominations, ...response.body.items];
            this.TraineeNominationPagination = response.body;
            return this.TraineeNominationPagination;
        }));
    }
    findByCourseDuration(courseDurationId) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationDetailByCourseDurationId?courseDurationId=' + courseDurationId);
    }
    find(id) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/trainee-nomination/update-traineeNomination/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/trainee-nomination/save-traineeNomination', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((TraineeNomination) => {
            if (TraineeNomination) {
                console.log(TraineeNomination);
                return TraineeNomination;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/trainee-nomination/delete-traineeNomination/' + id);
    }
}
TraineeNominationService.ɵfac = function TraineeNominationService_Factory(t) { return new (t || TraineeNominationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TraineeNominationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TraineeNominationService, factory: TraineeNominationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1712:
/*!*********************************************************************!*\
  !*** ./src/app/course-management/service/courseduration.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDurationService": function() { return /* binding */ CourseDurationService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_coursedurationPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/coursedurationPagination */ 41313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CourseDurationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.CourseDurations = [];
        this.CourseDurationPagination = new _models_coursedurationPagination__WEBPACK_IMPORTED_MODULE_1__.CourseDurationPagination();
    }
    getSelectedBaseName() {
        return this.http.get(this.baseUrl + '/base-name/get-selectedBases');
    }
    deactiveCourseDuration(id) {
        return this.http.get(this.baseUrl + '/course-duration/deactive-courseDuration/' + id);
    }
    activeCoursePlan(id) {
        return this.http.get(this.baseUrl + '/course-plan/active-coursePlan/' + id);
    }
    getSchoolByBaseId(id) {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedBaseSchoolByBase?baseNameId=' + id);
    }
    getCourseByType(id) {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByType?courseTypeId=' + id);
    }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getselectedbaseschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedcountry() {
        return this.http.get(this.baseUrl + '/country/get-selectedCountries');
    }
    getselectedcoursetype() {
        return this.http.get(this.baseUrl + '/course-type/get-selectedCourseTypes');
    }
    getCourseDurationsByCourseType(pageNumber, pageSize, searchText, courseTypeId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        params = params.append('courseTypeId', courseTypeId.toString());
        return this.http.get(this.baseUrl + '/course-duration/get-courseDurationByCourseType', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.CourseDurations = [...this.CourseDurations, ...response.body.items];
            this.CourseDurationPagination = response.body;
            return this.CourseDurationPagination;
        }));
    }
    getCourseDurations(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/course-duration/get-courseDurations', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.CourseDurations = [...this.CourseDurations, ...response.body.items];
            this.CourseDurationPagination = response.body;
            return this.CourseDurationPagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/course-duration/get-courseDurationDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/course-duration/update-courseDuration/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/course-duration/save-courseDuration', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((CourseDuration) => {
            if (CourseDuration) {
                console.log(CourseDuration);
                return CourseDuration;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/course-duration/delete-courseDuration/' + id);
    }
}
CourseDurationService.ɵfac = function CourseDurationService_Factory(t) { return new (t || CourseDurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CourseDurationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CourseDurationService, factory: CourseDurationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 82250:
/*!*****************************************************************************!*\
  !*** ./src/app/exam-management/models/bnaexaminstructorassignPagination.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNAExamInstructorAssignPagination": function() { return /* binding */ BNAExamInstructorAssignPagination; }
/* harmony export */ });
class BNAExamInstructorAssignPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 20808:
/*!****************************************************************************!*\
  !*** ./src/app/exam-management/service/bnaexaminstructorassign.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNAExamInstructorAssignService": function() { return /* binding */ BNAExamInstructorAssignService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_bnaexaminstructorassignPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bnaexaminstructorassignPagination */ 82250);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BNAExamInstructorAssignService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BNAExamInstructorAssigns = [];
        this.BNAExamInstructorAssignPagination = new _models_bnaexaminstructorassignPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamInstructorAssignPagination();
    }
    getselectedbnasubjectname() {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
    }
    getselectedcoursedurationbyschoolname(baseSchoolNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
    }
    getselectedschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedbasename() {
        return this.http.get(this.baseUrl + '/base-name/get-selectedBases');
    }
    getSelectedInstructorByParameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-instructorByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    getInstructorBySchoolAndCourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-instructorBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getselectedclassroutinebyparameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/class-routine/get-selectedClassRoutineByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    getselectedbnainstructortype() {
        return this.http.get(this.baseUrl + '/bna-instructor-type/get-selectedBnaInstructorTypes');
    }
    getselectedbnaclasssectionselection() {
        return this.http.get(this.baseUrl + '/bna-class-section-selection/get-selectedBnaClassSectionSelections');
    }
    getBNAExamInstructorAssigns(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-bnaExamInstructorAssigns', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.BNAExamInstructorAssigns = [...this.BNAExamInstructorAssigns, ...response.body.items];
            this.BNAExamInstructorAssignPagination = response.body;
            return this.BNAExamInstructorAssignPagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-bnaExamInstructorAssignDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/bna-exam-instructor-assign/update-bnaExamInstructorAssign/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/bna-exam-instructor-assign/save-bnaExamInstructorAssign', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((BNAExamInstructorAssign) => {
            if (BNAExamInstructorAssign) {
                console.log(BNAExamInstructorAssign);
                return BNAExamInstructorAssign;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/bna-exam-instructor-assign/delete-bnaExamInstructorAssign/' + id);
    }
}
BNAExamInstructorAssignService.ɵfac = function BNAExamInstructorAssignService_Factory(t) { return new (t || BNAExamInstructorAssignService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BNAExamInstructorAssignService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BNAExamInstructorAssignService, factory: BNAExamInstructorAssignService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 82599:
/*!*******************************************************************************************!*\
  !*** ./src/app/trainee-biodata/biodata-tab-layout/models/BIODataGeneralInfoPagination.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BIODataGeneralInfoPagination": function() { return /* binding */ BIODataGeneralInfoPagination; }
/* harmony export */ });
class BIODataGeneralInfoPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 54389:
/*!******************************************************************************************!*\
  !*** ./src/app/trainee-biodata/biodata-tab-layout/service/BIODataGeneralInfo.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BIODataGeneralInfoService": function() { return /* binding */ BIODataGeneralInfoService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_BIODataGeneralInfoPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BIODataGeneralInfoPagination */ 82599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BIODataGeneralInfoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BIODataGeneralInfos = [];
        this.BIODataGeneralInfoPagination = new _models_BIODataGeneralInfoPagination__WEBPACK_IMPORTED_MODULE_1__.BIODataGeneralInfoPagination();
    }
    postFile(fileToUpload) {
        const endpoint = '/src/assets/img';
        const formData = new FormData();
        formData.append('bnaPhotoUrl', fileToUpload, fileToUpload.name);
        return this.http
            .post(endpoint, formData);
    }
    getBIODataGeneralInfos(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineeBioDataGeneralInfoes', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.BIODataGeneralInfos = [...this.BIODataGeneralInfos, ...response.body.items];
            this.BIODataGeneralInfoPagination = response.body;
            return this.BIODataGeneralInfoPagination;
        }));
    }
    //autocomplete for FamilyInfo
    getSelectedPno(pno) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompletePnoForFamilyInfo?pno=' + pno)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((response) => response.map(item => item)));
    }
    //dropdown data 
    getselectedbnabatch() {
        return this.http.get(this.baseUrl + '/bna-batch/get-selectedBnaBatchs');
    }
    getselectedrank() {
        return this.http.get(this.baseUrl + '/ranks/get-selectedRanks');
    }
    getselectedbranch() {
        return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
    }
    getselecteddivision() {
        return this.http.get(this.baseUrl + '/division/get-selectedDivisions');
    }
    getselecteddistrict() {
        return this.http.get(this.baseUrl + '/district/get-selectedDistricts');
    }
    getdistrictbydivision(id) {
        return this.http.get(this.baseUrl + '/district/get-selectedDistrictByDivisions?divisionId=' + id);
    }
    getselectedthana() {
        return this.http.get(this.baseUrl + '/thana/get-selectedThanas');
    }
    getthanaByDistrict(id) {
        return this.http.get(this.baseUrl + '/thana/getSelectedThanaByDistrict?districtid=' + id);
    }
    getselectedheight() {
        return this.http.get(this.baseUrl + '/height/get-selectedHeight');
    }
    getselectedweight() {
        return this.http.get(this.baseUrl + '/weights/get-selectedWeights');
    }
    getselectedcolorofeye() {
        return this.http.get(this.baseUrl + '/color-of-eye/get-selectedColorOfEyes');
    }
    getselectedgender() {
        return this.http.get(this.baseUrl + '/gender/get-selectedGender');
    }
    getselectedbloodgroup() {
        return this.http.get(this.baseUrl + '/blood-group/get-selectedBloodGroups');
    }
    getselectednationality() {
        return this.http.get(this.baseUrl + '/nationality/get-selectedNationalities');
    }
    getselectedreligion() {
        return this.http.get(this.baseUrl + '/religion/get-selectedReligions');
    }
    getselectedcaste() {
        return this.http.get(this.baseUrl + '/Caste/get-selectedCastes');
    }
    getcastebyreligion(id) {
        return this.http.get(this.baseUrl + '/Caste/get-selectedCasteByReligion?religionId=' + id);
    }
    getselectedhaircolor() {
        return this.http.get(this.baseUrl + '/hair-color/get-selectedHairColor');
    }
    // getselectedMaritialStatus(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/marital-status/get-selectedMaritialStatuses')
    // }
    find(id) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineedetail/' + id);
    }
    findTraineeDetails(id) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineedetails/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/trainee-bio-data-general-info/update-traineeBioDataGeneralInfo/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/trainee-bio-data-general-info/save-traineeBioDataGeneralInfo', model);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/trainee-bio-data-general-info/delete-traineeBioDataGeneralInfo/' + id);
    }
}
BIODataGeneralInfoService.ɵfac = function BIODataGeneralInfoService_Factory(t) { return new (t || BIODataGeneralInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BIODataGeneralInfoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BIODataGeneralInfoService, factory: BIODataGeneralInfoService.ɵfac, providedIn: 'root' });


/***/ })

}]);