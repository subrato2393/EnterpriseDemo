(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_central-exam_service_SubjectMark_service_ts-src_app_subject-management_servic-61b6cc"],{

/***/ 46923:
/*!**************************************************************!*\
  !*** ./src/app/central-exam/models/SubjectMarkPagination.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectMarkPagination": function() { return /* binding */ SubjectMarkPagination; }
/* harmony export */ });
class SubjectMarkPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 49718:
/*!*************************************************************!*\
  !*** ./src/app/central-exam/service/SubjectMark.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectMarkService": function() { return /* binding */ SubjectMarkService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/environments/environment */ 92340);
/* harmony import */ var _models_SubjectMarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/SubjectMarkPagination */ 46923);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class SubjectMarkService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.SubjectMarks = [];
        this.SubjectMarkPagination = new _models_SubjectMarkPagination__WEBPACK_IMPORTED_MODULE_1__.SubjectMarkPagination();
    }
    getSubjectMarks(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/subject-mark/get-subjectmarks', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.SubjectMarks = [...this.SubjectMarks, ...response.body.items];
            this.SubjectMarkPagination = response.body;
            return this.SubjectMarkPagination;
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/subject-mark/get-subjectmarkdetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/subject-mark/update-subjectmark/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/subject-mark/save-subjectmark', model);
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/subject-mark/delete-subjectmark/' + id);
    }
    getSelectedBranch() {
        return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
    }
    getSelectedSubjectNameByBranchId(branchId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByBranchId?branchId=' + branchId);
    }
    getselectedmarktypes() {
        return this.http.get(this.baseUrl + '/mark-type/get-selectedmarktypes');
    }
    getSelectedSubjectNameByCourseNameId(courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
    }
    getSelectedSchoolName() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
    }
    getselectedsubjectmarkbyparameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    getSelectedSubjectMarkByCourseNameIdAndBnaSubjectNameId(courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    // subject-mark/get-selectedSubjectMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=1252&bnaSubjectNameId=3420
    getSelectedsubjectMarksBySubject(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkBySubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    //autocomplete
    //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032
    getSelectedCourseByName(courseName) {
        return this.http.get(this.baseUrl + '/course-name/get-autocompleteCourseByName?courseName=' + courseName)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((response) => response.map(item => item)));
    }
    getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
}
SubjectMarkService.ɵfac = function SubjectMarkService_Factory(t) { return new (t || SubjectMarkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SubjectMarkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SubjectMarkService, factory: SubjectMarkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14750:
/*!*************************************************************************!*\
  !*** ./src/app/subject-management/models/courseinstructorPagination.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseInstructorPagination": function() { return /* binding */ CourseInstructorPagination; }
/* harmony export */ });
class CourseInstructorPagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 12260:
/*!************************************************************************!*\
  !*** ./src/app/subject-management/service/courseinstructor.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseInstructorService": function() { return /* binding */ CourseInstructorService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_courseinstructorPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/courseinstructorPagination */ 14750);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CourseInstructorService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.CourseInstructors = [];
        this.CourseInstructorPagination = new _models_courseinstructorPagination__WEBPACK_IMPORTED_MODULE_1__.CourseInstructorPagination();
    }
    getSelectedModule() {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModules');
    }
    getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getCourseByBaseSchoolId(id) {
        return this.http.get(this.baseUrl + '/course-duration/get-courseDurationByBaseSchool?baseSchoolNameId=' + id);
    }
    getselectedcoursedurationbyschoolname(baseSchoolNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
    }
    getSelectedTraineeByPno(pno) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.map(item => item)));
    }
    getselectedschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedbnasubjectname() {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
    }
    getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
    }
    getselectedcourseduration() {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurations');
    }
    getCourseInstructors(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructors', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            this.CourseInstructors = [...this.CourseInstructors, ...response.body.items];
            this.CourseInstructorPagination = response.body;
            return this.CourseInstructorPagination;
        }));
    }
    stopCourseInstructor(courseInstructorId) {
        return this.http.get(this.baseUrl + '/course-instructor/stop-courseinstructor/' + courseInstructorId);
    }
    RunningCourseInstructor(courseInstructorId) {
        return this.http.get(this.baseUrl + '/course-instructor/running-courseinstructor/' + courseInstructorId);
    }
    getInstructorByParameters(baseSchoolNameId, bnaSubjectNameId, courseModuleId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorByParameters?baseSchoolNameId=' + baseSchoolNameId + '&bnaSubjectNameId=' + bnaSubjectNameId + '&courseModuleId=' + courseModuleId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    // course-instructor/get-courseInstructorByCourseDurationIdandSubjectNameId?bnaSubjectNameId=3426&courseNameId=1251&courseDurationId=3138
    getCourseInstructorByCourseDurationIdANdSubjectNameId(subjectNameId, courseDurationId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorByCourseDurationIdandSubjectNameId?bnaSubjectNameId=' + subjectNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    getInstructorBySchoolAndCourse(baseSchoolNameId, courseDurationId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-instructor/get-instructorByCourseAndSchool?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId);
    }
    getInstructorListBySchoolAndCourse(baseSchoolNameId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/course-instructor/get-instructorListByCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    find(id) {
        return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/course-instructor/update-courseInstructor/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/course-instructor/save-courseInstructor', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((CourseInstructor) => {
            if (CourseInstructor) {
                console.log(CourseInstructor);
                return CourseInstructor;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/course-instructor/delete-courseInstructor/' + id);
    }
}
CourseInstructorService.ɵfac = function CourseInstructorService_Factory(t) { return new (t || CourseInstructorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CourseInstructorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CourseInstructorService, factory: CourseInstructorService.ɵfac, providedIn: 'root' });


/***/ })

}]);