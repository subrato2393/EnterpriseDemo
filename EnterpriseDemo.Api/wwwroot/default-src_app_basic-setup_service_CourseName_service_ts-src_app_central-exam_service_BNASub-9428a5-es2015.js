(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_basic-setup_service_CourseName_service_ts-src_app_central-exam_service_BNASub-9428a5"],{

/***/ 69144:
/*!************************************************************!*\
  !*** ./src/app/basic-setup/models/CourseNamePagination.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNamePagination": function() { return /* binding */ CourseNamePagination; }
/* harmony export */ });
class CourseNamePagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 37295:
/*!***********************************************************!*\
  !*** ./src/app/basic-setup/service/CourseName.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNameService": function() { return /* binding */ CourseNameService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_CourseNamePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/CourseNamePagination */ 69144);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CourseNameService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.CourseNames = [];
        this.CourseNamePagination = new _models_CourseNamePagination__WEBPACK_IMPORTED_MODULE_1__.CourseNamePagination();
    }
    getCourseNames(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/course-name/get-courseNames', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.CourseNames = [...this.CourseNames, ...response.body.items];
            this.CourseNamePagination = response.body;
            return this.CourseNamePagination;
        }));
    }
    getCourseModuleListByBaseSchoolNameIdCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-module/get-CourseModuleListByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    //autocomplete for Course
    getSelectedCourseByName(courseName) {
        return this.http.get(this.baseUrl + '/course-name/get-autocompleteCourseByName?courseName=' + courseName)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((response) => response.map(item => item)));
    }
    getSelectedCourseByNameAndType(courseTypeId, courseName) {
        return this.http.get(this.baseUrl + '/course-name/get-autocompleteCourseByNameAndType?courseTypeId=' + courseTypeId + '&courseName=' + courseName)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((response) => response.map(item => item)));
    }
    getSelectedCourseByType(courseTypeId) {
        // course-name/get-selectedCourseByType?courseTypeId=1021
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByType?courseTypeId=' + courseTypeId);
    }
    getSelectedCourseName() {
        return this.http.get(this.baseUrl + '/course-type/get-selectedCourseTypes');
    }
    find(id) {
        return this.http.get(this.baseUrl + '/course-name/get-courseNameDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/course-name/update-courseName/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/course-name/save-courseName', model);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/course-name/delete-courseName/' + id);
    }
}
CourseNameService.ɵfac = function CourseNameService_Factory(t) { return new (t || CourseNameService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CourseNameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CourseNameService, factory: CourseNameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19443:
/*!*****************************************************************!*\
  !*** ./src/app/central-exam/models/BNASubjectNamePagination.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNASubjectNamePagination": function() { return /* binding */ BNASubjectNamePagination; }
/* harmony export */ });
class BNASubjectNamePagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 15018:
/*!****************************************************************!*\
  !*** ./src/app/central-exam/service/BNASubjectName.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNASubjectNameService": function() { return /* binding */ BNASubjectNameService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BNASubjectNamePagination */ 19443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BNASubjectNameService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BNASubjectNames = [];
        this.BNASubjectNamePagination = new _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNamePagination();
    }
    getSubjectNameByFromCourseNameIdAndBranchId(courseNameId, branchId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByFromCourseNameIdAndBranchId?courseNameId=' + courseNameId + '&branchId=' + branchId);
    }
    getSelectedSubjectNameByCourseNameId(courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
    }
    // getSelectedBnaSemester(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-semester/get-selectedBnaSemesters')
    // }
    // getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId:number,courseNameId:number){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId)
    // }
    // getSelectedCourseByParameters(baseSchoolNameId:number,courseNameId:number, courseModuleId:number, status:number){
    //   return this.http.get<BNASubjectName[]>(this.baseUrl + '/bna-subject-name/get-celectedCourseByParameters?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId+'&courseModuleId='+courseModuleId+'&status='+status)
    // }
    // getSelectedsubjectsBySchoolAndCourse(baseSchoolNameId:number,courseNameId:number){
    //   return this.http.get<BNASubjectName[]>(this.baseUrl + '/bna-subject-name/get-selectedSubjectBySchoolAndCourse?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId)
    // }
    // getSelectedSubjectCategory(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/subject-category/get-selectedSubjectCategories')
    // }
    // getSelectedSubjectCurriculum(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-subject-curriculum/get-selectedBnaSubjectCurriculums')
    // } 
    // getSelectedSubjectClassification(){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/subject-classification/get-selectedSubjectClassification')
    // }
    getSelectedSchoolName() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getSelectedCourseName() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByCourseTypeId');
    }
    getselectedSubjectNameByBranchId(branchId, courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByBranchId?branchId=' + branchId + '&courseNameId=' + courseNameId);
    }
    getselectedSubjectName() {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByCourseNameInQExamId');
    }
    getSelectedSubjectType() {
        return this.http.get(this.baseUrl + '/subject-type/get-getSelectedSubjectType');
    }
    getSelectedResultStatus() {
        return this.http.get(this.baseUrl + '/result-status/get-selectedResultStatuses');
    }
    getSelectedBranch() {
        return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
    }
    getBNASubjectNames(pageNumber, pageSize, searchText, status) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        params = params.append('status', status.toString());
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNames', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.BNASubjectNames = [...this.BNASubjectNames, ...response.body.items];
            this.BNASubjectNamePagination = response.body;
            return this.BNASubjectNamePagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/bna-subject-name/update-bnaSubjectName/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/bna-subject-name/save-bnaSubjectName', model);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/bna-subject-name/delete-bnaSubjectName/' + id);
    }
}
BNASubjectNameService.ɵfac = function BNASubjectNameService_Factory(t) { return new (t || BNASubjectNameService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BNASubjectNameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BNASubjectNameService, factory: BNASubjectNameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31698:
/*!*************************************************************!*\
  !*** ./src/app/central-exam/service/bnaexammark.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNAExamMarkService": function() { return /* binding */ BNAExamMarkService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _exam_management_models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exam-management/models/bnaexammarkPagination */ 77808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BNAExamMarkService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BNAExamMarks = [];
        this.BNAExamMarkPagination = new _exam_management_models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkPagination();
    }
    getSelectedCourseDurationByCourseTypeIdAndCourseNameId(courseTypeId, courseNameId) {
        // course-duration/get-selectedCourseDurationByCourseTypeIdAndCourseNameId?courseTypeId=1021&courseNameId=1252
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationByCourseTypeIdAndCourseNameId?courseTypeId=' + courseTypeId + '&courseNameId=' + courseNameId);
    }
    getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationIdByBaseSchoolNameAndCourseNameRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-SelectedSubjectMarkByBaseSchoolCourseNameAndBnaSubjectNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
    }
    GetSubjectMarkByCourseNameIdSubjectNameId(courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByCourseNameIdSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
    }
    getClassRoutineIdForStaffCollege(courseDurationId, courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdForStaffCollege?courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    // class-routine/get-SelectedRoutineIdForStaffCollege?courseDurationId=3149&courseNameId=1251&bnaSubjectNameId=3426
    // subject-mark/get-selectedSubjectMarkByCourseNameIdSubjectNameId?courseNameId=1251&bnaSubjectNameId=3425
    GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdWithSchoolCourseSubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
    }
    GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, subjectName) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkFromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectName);
    }
    // bna-subject-name/get-totalmarkAndPassMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=1251&bnaSubjectNameId=3425
    GetTotalMarkAndPassMarkByCourseNameIdAndSubjectId(courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
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
    getselectedmarktypesByCourseNameIdAndSubjectNameId(courseNameId, subjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedMarkTypeByCourseNameIdAndSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
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
    getSelectedSubjectNameByCourseNameId(courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
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

/***/ 84295:
/*!********************************************************************!*\
  !*** ./src/app/routine-management/models/classperiodPagination.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassPeriodPagination": function() { return /* binding */ ClassPeriodPagination; }
/* harmony export */ });
class ClassPeriodPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 80438:
/*!*******************************************************************!*\
  !*** ./src/app/routine-management/service/classperiod.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassPeriodService": function() { return /* binding */ ClassPeriodService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_classperiodPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/classperiodPagination */ 84295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class ClassPeriodService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.ClassPeriods = [];
        this.ClassPeriodPagination = new _models_classperiodPagination__WEBPACK_IMPORTED_MODULE_1__.ClassPeriodPagination();
    }
    getselectedbaseschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getSelectedPeriodBySchoolAndCourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/class-period/get-selectedPeriodBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getselectedbnaclassschedulestatus() {
        return this.http.get(this.baseUrl + '/bna-class-schedule-status/get-selectedbnaClassScheduleStatuses');
    }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getClassPeriods(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/class-period/get-classPeriods', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.ClassPeriods = [...this.ClassPeriods, ...response.body.items];
            this.ClassPeriodPagination = response.body;
            return this.ClassPeriodPagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/class-period/get-classPeriodDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/class-period/update-classPeriod/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/class-period/save-classPeriod', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((ClassPeriod) => {
            if (ClassPeriod) {
                console.log(ClassPeriod);
                return ClassPeriod;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/class-period/delete-classPeriod/' + id);
    }
}
ClassPeriodService.ɵfac = function ClassPeriodService_Factory(t) { return new (t || ClassPeriodService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ClassPeriodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ClassPeriodService, factory: ClassPeriodService.ɵfac, providedIn: 'root' });


/***/ })

}]);