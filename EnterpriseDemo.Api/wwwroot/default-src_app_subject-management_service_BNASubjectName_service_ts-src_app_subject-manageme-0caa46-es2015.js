(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_subject-management_service_BNASubjectName_service_ts-src_app_subject-manageme-0caa46"],{

/***/ 61931:
/*!***********************************************************************!*\
  !*** ./src/app/subject-management/models/BNASubjectNamePagination.ts ***!
  \***********************************************************************/
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

/***/ 70017:
/*!********************************************************************!*\
  !*** ./src/app/subject-management/models/SubjectMarkPagination.ts ***!
  \********************************************************************/
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

/***/ 23089:
/*!**********************************************************************!*\
  !*** ./src/app/subject-management/service/BNASubjectName.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BNASubjectNameService": function() { return /* binding */ BNASubjectNameService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BNASubjectNamePagination */ 61931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class BNASubjectNameService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.BNASubjectNames = [];
        this.BNASubjectNamePagination = new _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNamePagination();
    }
    getSelectedBnaSemester() {
        return this.http.get(this.baseUrl + '/bna-semester/get-selectedBnaSemesters');
    }
    getSelectedCourseModule() {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModules');
    }
    getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getSelectedCourseByParameters(baseSchoolNameId, courseNameId, courseModuleId, status) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-celectedCourseByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&status=' + status);
    }
    getSelectedsubjectsBySchoolAndCourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getbnaSubjectListForStudentDashboard(baseSchoolNameId, courseNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectListForStudentDashboard?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
    }
    getSelectedSchoolName() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getSelectedCourseName() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getSelectedSubjectCategory() {
        return this.http.get(this.baseUrl + '/subject-category/get-selectedSubjectCategories');
    }
    getSelectedSubjectCurriculum() {
        return this.http.get(this.baseUrl + '/bna-subject-curriculum/get-selectedBnaSubjectCurriculums');
    }
    getSelectedSubjectType() {
        return this.http.get(this.baseUrl + '/subject-type/get-getSelectedSubjectType');
    }
    getSelectedKindOfSubject() {
        return this.http.get(this.baseUrl + '/kind-of-subject/get-selectedKindOfSubject');
    }
    getSelectedSubjectClassification() {
        return this.http.get(this.baseUrl + '/subject-classification/get-selectedSubjectClassification');
    }
    // getCourseDurationsByCourseType(pageNumber, pageSize,searchText,courseTypeId:number) {
    //   let params = new HttpParams(); 
    //   params = params.append('searchText', searchText.toString());
    //   params = params.append('pageNumber', pageNumber.toString());
    //   params = params.append('pageSize', pageSize.toString());
    //   params = params.append('courseTypeId', courseTypeId.toString());
    //   return this.http.get<ICourseDurationPagination>(this.baseUrl + '/course-duration/get-courseDurationByCourseType', { observe: 'response', params })
    //   .pipe(
    //     map(response => {
    //       this.CourseDurations = [...this.CourseDurations, ...response.body.items];
    //       this.CourseDurationPagination = response.body;
    //       return this.CourseDurationPagination;
    //     })
    //   ); 
    // }
    // getBNASubjectNames(pageNumber, pageSize,searchText) {
    //   let params = new HttpParams();
    //   params = params.append('searchText', searchText.toString());
    //   params = params.append('pageNumber', pageNumber.toString());
    //   params = params.append('pageSize', pageSize.toString());
    //   return this.http.get<IBNASubjectNamePagination>(this.baseUrl + '/bna-subject-name/get-bnaSubjectNames', { observe: 'response', params })
    //   .pipe(
    //     map(response => {
    //       this.BNASubjectNames = [...this.BNASubjectNames, ...response.body.items];
    //       this.BNASubjectNamePagination = response.body;
    //       return this.BNASubjectNamePagination;
    //     })
    //   );
    // }
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

/***/ 96935:
/*!*******************************************************************!*\
  !*** ./src/app/subject-management/service/SubjectMark.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectMarkService": function() { return /* binding */ SubjectMarkService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_SubjectMarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/SubjectMarkPagination */ 70017);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class SubjectMarkService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
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
    getselectedmarktypes() {
        return this.http.get(this.baseUrl + '/mark-type/get-selectedmarktypes');
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