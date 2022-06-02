(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"],{

/***/ 97746:
/*!**********************************************************************!*\
  !*** ./src/app/attendance-management/models/attendancePagination.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePagination": function() { return /* binding */ AttendancePagination; }
/* harmony export */ });
class AttendancePagination {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ 70499:
/*!*********************************************************************!*\
  !*** ./src/app/attendance-management/service/attendance.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceService": function() { return /* binding */ AttendanceService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_attendancePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/attendancePagination */ 97746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class AttendanceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.Attendances = [];
        this.AttendancePagination = new _models_attendancePagination__WEBPACK_IMPORTED_MODULE_1__.AttendancePagination();
    }
    getAttendanceListForUpdate(pageNumber, pageSize, searchText, baseSchoolNameId, courseNameId, classPeriodId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        params = params.append('baseSchoolNameId', baseSchoolNameId.toString());
        params = params.append('courseNameId', courseNameId.toString());
        params = params.append('classPeriodId', classPeriodId.toString());
        // attendance/get-attendancesForUpdate?PageSize=5&PageNumber=1&baseSchoolNameId=20&courseNameId=1065&classPeriodId=28
        return this.http.get(this.baseUrl + '/attendance/get-attendancesForUpdate', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.Attendances = [...this.Attendances, ...response.body.items];
            this.AttendancePagination = response.body;
            return this.AttendancePagination;
        }));
    }
    getSelectedClassPeriodForAttendanceInstructorBySpRequest(traineeId) {
        return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodForAttendanceInstructorSpRequest?traineeId=' + traineeId);
    }
    getSelectedCourseDurationByParameterRequestFromClassRoutine(baseSchoolNameId, courseNameId, classPeriodId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationByParameterRequestFromRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId);
    }
    getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId, date) {
        return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId + '&date=' + date);
    }
    getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameIdforAttendances(baseSchoolNameId, courseNameId, courseDurationId, date) {
        return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequestForAttendances?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId + '&date=' + date);
    }
    // getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameIdAndDate(baseSchoolNameId,courseNameId,date){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequest?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId);
    //class-period/get-selectedClassPeriodByParameterRequestForAttendances?baseSchoolNameId=20&courseNameId=1065&date=2%2F12%2F2022
    //  }
    getCourseByBaseSchoolNameId(baseSchoolNameId) {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByBaseNameId?baseSchoolNameId=' + baseSchoolNameId);
    }
    getselectedclassroutine() {
        return this.http.get(this.baseUrl + '/class-routine/get-selectedClassRoutines');
    }
    getselectedbaseschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getselectedbnasubjectname() {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
    }
    getselectedclassperiod() {
        return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriod');
    }
    getselectedbnaattendanceremark() {
        return this.http.get(this.baseUrl + '/bna-attendance-remark/get-selectedBnaAttendanceRemarks');
    }
    getAttendances(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/attendance/get-attendances', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.Attendances = [...this.Attendances, ...response.body.items];
            this.AttendancePagination = response.body;
            return this.AttendancePagination;
        }));
    }
    updateAttendanceList(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/attendance/approved-attendancelist', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((attendanceUpdate) => {
            if (attendanceUpdate) {
                console.log(attendanceUpdate);
                return attendanceUpdate;
            }
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/attendance/get-attendanceDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/attendance/update-attendance/' + id, model);
    }
    submit(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/attendance/save-attendancelist', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((Attendance) => {
            if (Attendance) {
                console.log(Attendance);
                return Attendance;
            }
        }));
    }
    submitAttendance(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/attendance/save-attendancelistnstructor', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((Attendance) => {
            if (Attendance) {
                console.log(Attendance);
                return Attendance;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/attendance/delete-attendance/' + id);
    }
}
AttendanceService.ɵfac = function AttendanceService_Factory(t) { return new (t || AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AttendanceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AttendanceService, factory: AttendanceService.ɵfac, providedIn: 'root' });


/***/ }),

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

/***/ 310:
/*!*************************************************************************!*\
  !*** ./src/app/course-management/models/traineenominationPagination.ts ***!
  \*************************************************************************/
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

/***/ 22247:
/*!************************************************************************!*\
  !*** ./src/app/course-management/service/traineenomination.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraineeNominationService": function() { return /* binding */ TraineeNominationService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/traineenominationPagination */ 310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class TraineeNominationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.TraineeNominations = [];
        this.TraineeNominationPagination = new _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationPagination();
    }
    //autocomplete
    //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032
    getSelectedTraineeByparameterRequest(pno, courseDurationId, courseNameId) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.map(item => item)));
    }
    // getSelectedTraineeByPno(pno){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo='+pno+'&courseDurationId='+courseDurationId+'&courseNameId='+courseNameId)
    //     .pipe(
    //       map((response:[]) => response.map(item => item))
    //     )
    // }
    getSelectedTraineeByPno(pno) {
        return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.map(item => item)));
    }
    getTraineeNominationByCourseDurationId(courseDurationId) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
    }
    getTestTraineeNominationByCourseDurationId(courseDurationId) {
        return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
    }
    getNewTraineeNominationByCourseDurationId(courseDurationId) {
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
    updateTraineeNominationList(model) {
        return this.http.post(this.baseUrl + '/trainee-nomination/update-traineeNominationList', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((TraineeNomination) => {
            if (TraineeNomination) {
                console.log(TraineeNomination);
                return TraineeNomination;
            }
        }));
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


/***/ })

}]);