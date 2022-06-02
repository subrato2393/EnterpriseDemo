(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"],{

/***/ 80445:
/*!***********************************************************!*\
  !*** ./src/app/basic-setup/models/CodeValuePagination.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeValuePagination": function() { return /* binding */ CodeValuePagination; }
/* harmony export */ });
class CodeValuePagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 88509:
/*!**********************************************************!*\
  !*** ./src/app/basic-setup/service/codevalue.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeValueService": function() { return /* binding */ CodeValueService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_CodeValuePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/CodeValuePagination */ 80445);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CodeValueService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.CodeValues = [];
        this.CodeValuePagination = new _models_CodeValuePagination__WEBPACK_IMPORTED_MODULE_1__.CodeValuePagination();
    }
    getCodeValues(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        //params =params.append('searchText',searchText.toString());
        return this.http.get(this.baseUrl + '/code-value/get-codeValues', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.CodeValues = [...this.CodeValues, ...response.body.items];
            this.CodeValuePagination = response.body;
            return this.CodeValuePagination;
        }));
    }
    getCheckBoxSelectedCodeValueByTypeWithChecked(type) {
        return this.http.get(this.baseUrl + '/code-value/get-selectedCodeValueByTypeWithChecked?type=' + type);
    }
    getSelectedCodeValueByType(type) {
        return this.http.get(this.baseUrl + '/code-value/get-selectedCodeValueByType?type=' + type);
    }
    getselectedcodevaluetype() {
        return this.http.get(this.baseUrl + '/code-value-type/get-selectedCodeValueTypes');
    }
    find(id) {
        return this.http.get(this.baseUrl + '/code-value/get-codeValueDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/code-value/update-codeValue/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/code-value/save-codeValue', model);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/code-value/delete-codeValue/' + id);
    }
}
CodeValueService.ɵfac = function CodeValueService_Factory(t) { return new (t || CodeValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CodeValueService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CodeValueService, factory: CodeValueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77808:
/*!*****************************************************************!*\
  !*** ./src/app/exam-management/models/bnaexammarkPagination.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNAExamMarkPagination": function() { return /* binding */ BNAExamMarkPagination; }
/* harmony export */ });
class BNAExamMarkPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 64990:
/*!****************************************************************!*\
  !*** ./src/app/exam-management/service/bnaexammark.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNAExamMarkService": function() { return /* binding */ BNAExamMarkService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bnaexammarkPagination */ 77808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BNAExamMarkService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BNAExamMarks = [];
        this.BNAExamMarkPagination = new _models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkPagination();
    }
    getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationIdByBaseSchoolNameAndCourseNameRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-SelectedSubjectMarkByBaseSchoolCourseNameAndBnaSubjectNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
    }
    GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdWithSchoolCourseSubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
    }
    GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, subjectName) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkFromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectName);
    }
    getselectedbaseschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedexammarkremark() {
        return this.http.get(this.baseUrl + '/exam-mark-remark/get-selectedExamMarkRemark');
    }
    getselectedmarktypes(baseSchoolNameId, courseNameId, subjectNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedMarkTypeByParametersFromSubjectMark?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&courseModuleId=' + courseModuleId);
    }
    getapprovededmarktypes(baseSchoolNameId, courseNameId, subjectNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-approvedMarkTypeByParametersFromSubjectMark?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&courseModuleId=' + courseModuleId);
    }
    getselectedcoursedurationbyschoolname(baseSchoolNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
    }
    getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByParametersFromRoutineTable?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    getSelectedSubjectNameListForInstructorDashBoardByBaseSchoolNameIdAndCourseNameId(traineeId, baseSchoolNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-subjectNameListForInstructorDashboardDropdown?traineeId=' + traineeId + '&baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId);
    }
    getApprovedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-approvedSubjectNameByParametersFromRoutineTable?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    getexamMarkListByParameters(baseSchoolNameId, courseNameId, subjectNameId, subjectMarkId, approveStatus) {
        return this.http.get(this.baseUrl + '/bna-exam-mark/get-examMarkListByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&subjectMarkId=' + subjectMarkId + '&approveStatus=' + approveStatus);
    }
    getSelectedClassTypeByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/class-type/get-selectedClassTypeByParameterRequestFromClassRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getTraineeMarkListByDuration(courseDurationId) {
        return this.http.get(this.baseUrl + '/bna-exam-mark/get-traineeMarkListByDuration?courseDurationId=' + courseDurationId);
    }
    // getselectebnaexamschedule(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-exam-schedule/get-selectedBnaExamSchedules')
    // }
    // getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId,courseNameId){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId);
    // }
    getBNAExamMarks(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarks', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.BNAExamMarks = [...this.BNAExamMarks, ...response.body.items];
            this.BNAExamMarkPagination = response.body;
            return this.BNAExamMarkPagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarkDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/bna-exam-mark/update-bnaExamMark/' + id, model);
    }
    submit(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/bna-exam-mark/save-bnaExamMarklist', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((BNAExamMark) => {
            if (BNAExamMark) {
                console.log(BNAExamMark);
                return BNAExamMark;
            }
        }));
    }
    approve(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/bna-exam-mark/approve-bnaExamMarklist', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((BNAExamMark) => {
            if (BNAExamMark) {
                console.log(BNAExamMark);
                return BNAExamMark;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/bna-exam-mark/delete-bnaExamMark/' + id);
    }
}
BNAExamMarkService.ɵfac = function BNAExamMarkService_Factory(t) { return new (t || BNAExamMarkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BNAExamMarkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BNAExamMarkService, factory: BNAExamMarkService.ɵfac, providedIn: 'root' });


/***/ })

}]);