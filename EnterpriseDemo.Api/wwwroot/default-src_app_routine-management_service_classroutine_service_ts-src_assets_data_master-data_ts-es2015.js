(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"],{

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

/***/ 60616:
/*!********************************************************************!*\
  !*** ./src/app/routine-management/service/classroutine.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassRoutineService": function() { return /* binding */ ClassRoutineService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_classroutinePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/classroutinePagination */ 22881);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class ClassRoutineService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.ClassRoutines = [];
        this.ClassRoutinePagination = new _models_classroutinePagination__WEBPACK_IMPORTED_MODULE_1__.ClassRoutinePagination();
    }
    getCourseInstructorByBaseSchoolNameAndCourseName(baseSchoolNameId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/course-instructor/get-instructorByBaseSchoolAndCourseNameSpRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    getClassRoutineCountByParameterRequest(baseSchoolNameId, courseNameId, bnaSubjectNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineCountByParemeterRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId + '&courseDurationId=' + courseDurationId);
    }
    //class-routine/get-classRoutineByCourseNameBaseSchoolNameCourseModuleAndDateRequest?baseSchoolNameId=20&courseNameId=1065&courseModuleId=14&date=2%2F12%2F2022
    getClassRoutineByCourseNameBaseSchoolNameSpRequest(baseSchoolNameId, courseNameId, courseWeekId) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineByCourseNameBaseSchoolNameSpRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseWeekId=' + courseWeekId);
    }
    getSubjectlistBySchoolAndCourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-subjectlistBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getSelectedRoutineId(baseSchoolNameId, courseNameId, classPeriodId) {
        return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId);
    }
    getSelectedRoutineIdFilter(baseSchoolNameId, courseNameId, classPeriodId, courseDurationId, date) {
        return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdFilter?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId + '&courseDurationId=' + courseDurationId + '&date=' + date);
    }
    // class-routine/get-SelectedRoutineIdFilter?baseSchoolNameId=20&courseNameId=1065&classPeriodId=32&courseDurationId=3089&date=2022-04-21
    getSubjectNameFromRoutine(baseSchoolNameId, courseNameId, date, classPeriodId, courseDurationId) {
        return this.http.get(this.baseUrl + '/class-routine/get-subjectNameFromRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&date=' + date + '&classPeriodId=' + classPeriodId + '&courseDurationId=' + courseDurationId);
    }
    getTotalPeriodByParameterRequest(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectPeriodfromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    getCourseModuleIdForRoutine(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-moduleForRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    getSelectedRoutineByParameters(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
    }
    classRoutineBySchoolCourseDuration(baseSchoolNameId, courseNameId, courseDurationId) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineBySchoolCourseDuration?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
    }
    getselectedbaseschools() {
        return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
    }
    getselectedclasstype() {
        return this.http.get(this.baseUrl + '/class-type/get-selectedClassTypes');
    }
    getselectedClassPeriodbyschoolandcourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    // getCourseTitleByBaseSchoolId(id:number){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-duration/get-selectedCourseTitleByBaseSchool?baseSchoolNameId=' + id);
    // }
    getselectedcoursedurationbyschoolname(baseSchoolNameId) {
        return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
    }
    getselectedbnasubjectname() {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
    }
    getSelectedCourseWeeks(baseSchoolNameId, courseDurationId, courseNameId) {
        return this.http.get(this.baseUrl + '/course-week/get-selectedCourseWeeks?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId);
    }
    getQexamRoutine(courseDurationId) {
        return this.http.get(this.baseUrl + '/class-routine/get-qexamRoutine?courseDurationId=' + courseDurationId);
    }
    getClassRoutineListByParams(baseSchoolNameId, courseDurationId, courseNameId, courseWeekId) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineLisByParams?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId + '&courseWeekId=' + courseWeekId);
    }
    getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
    }
    getselectedSubjectNamesBySchoolAndCourse(baseSchoolNameId, courseNameId) {
        return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
    }
    getselectedCourseModules() {
        return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModules');
    }
    // getselectedCourseModuleByBaseSchoolNameId(id:number){
    //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModuleByBaseSchoolNameId?baseSchoolNameId=' + id)
    // }
    getselectedcoursename() {
        return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
    }
    getClassRoutines(pageNumber, pageSize, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutines', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.ClassRoutines = [...this.ClassRoutines, ...response.body.items];
            this.ClassRoutinePagination = response.body;
            return this.ClassRoutinePagination;
        }));
    }
    getClassRoutinesByCourseDurationId(pageNumber, pageSize, searchText, courseDurationId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('searchText', searchText.toString());
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        params = params.append('courseDurationId', courseDurationId.toString());
        // class-routine/get-classRoutinesByCourseDurationId?PageSize=5&PageNumber=1&courseDurationId=3137
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutinesByCourseDurationId', { observe: 'response', params })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            this.ClassRoutines = [...this.ClassRoutines, ...response.body.items];
            this.ClassRoutinePagination = response.body;
            return this.ClassRoutinePagination;
        }));
    }
    weeklyRoutineUpdate(model) {
        console.log(model);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.baseUrl + '/class-routine/update-weeklyClassRoutine', model, httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((classRoutine) => {
            if (classRoutine) {
                console.log(classRoutine);
                return classRoutine;
            }
        }));
    }
    find(id) {
        return this.http.get(this.baseUrl + '/class-routine/get-classRoutineDetail/' + id);
    }
    update(id, model) {
        return this.http.put(this.baseUrl + '/class-routine/update-classRoutine/' + id, model);
    }
    submit(model) {
        return this.http.post(this.baseUrl + '/class-routine/save-classRoutine', model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((ClassRoutine) => {
            if (ClassRoutine) {
                console.log(ClassRoutine);
                return ClassRoutine;
            }
        }));
    }
    delete(id) {
        return this.http.delete(this.baseUrl + '/class-routine/delete-classRoutine/' + id);
    }
}
ClassRoutineService.ɵfac = function ClassRoutineService_Factory(t) { return new (t || ClassRoutineService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ClassRoutineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ClassRoutineService, factory: ClassRoutineService.ɵfac, providedIn: 'root' });


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