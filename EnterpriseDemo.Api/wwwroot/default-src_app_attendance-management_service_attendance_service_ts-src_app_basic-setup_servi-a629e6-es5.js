(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"], {
    /***/
    97746:
    /*!**********************************************************************!*\
      !*** ./src/app/attendance-management/models/attendancePagination.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePagination": function AttendancePagination() {
          return (
            /* binding */
            _AttendancePagination
          );
        }
        /* harmony export */

      });

      var _AttendancePagination = function _AttendancePagination() {
        _classCallCheck(this, _AttendancePagination);

        this.items = [];
      };
      /***/

    },

    /***/
    70499:
    /*!*********************************************************************!*\
      !*** ./src/app/attendance-management/service/attendance.service.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendanceService": function AttendanceService() {
          return (
            /* binding */
            _AttendanceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _models_attendancePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/attendancePagination */
      97746);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AttendanceService = /*#__PURE__*/function () {
        function _AttendanceService(http) {
          _classCallCheck(this, _AttendanceService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.Attendances = [];
          this.AttendancePagination = new _models_attendancePagination__WEBPACK_IMPORTED_MODULE_1__.AttendancePagination();
        }

        _createClass(_AttendanceService, [{
          key: "getAttendanceListForUpdate",
          value: function getAttendanceListForUpdate(pageNumber, pageSize, searchText, baseSchoolNameId, courseNameId, classPeriodId) {
            var _this = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('baseSchoolNameId', baseSchoolNameId.toString());
            params = params.append('courseNameId', courseNameId.toString());
            params = params.append('classPeriodId', classPeriodId.toString()); // attendance/get-attendancesForUpdate?PageSize=5&PageNumber=1&baseSchoolNameId=20&courseNameId=1065&classPeriodId=28

            return this.http.get(this.baseUrl + '/attendance/get-attendancesForUpdate', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this.Attendances = [].concat(_toConsumableArray(_this.Attendances), _toConsumableArray(response.body.items));
              _this.AttendancePagination = response.body;
              return _this.AttendancePagination;
            }));
          }
        }, {
          key: "getSelectedClassPeriodForAttendanceInstructorBySpRequest",
          value: function getSelectedClassPeriodForAttendanceInstructorBySpRequest(traineeId) {
            return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodForAttendanceInstructorSpRequest?traineeId=' + traineeId);
          }
        }, {
          key: "getSelectedCourseDurationByParameterRequestFromClassRoutine",
          value: function getSelectedCourseDurationByParameterRequestFromClassRoutine(baseSchoolNameId, courseNameId, classPeriodId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationByParameterRequestFromRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId);
          }
        }, {
          key: "getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId, date) {
            return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId + '&date=' + date);
          }
        }, {
          key: "getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameIdforAttendances",
          value: function getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameIdforAttendances(baseSchoolNameId, courseNameId, courseDurationId, date) {
            return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequestForAttendances?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId + '&date=' + date);
          } // getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameIdAndDate(baseSchoolNameId,courseNameId,date){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/class-period/get-selectedClassPeriodByParameterRequest?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId);
          //class-period/get-selectedClassPeriodByParameterRequestForAttendances?baseSchoolNameId=20&courseNameId=1065&date=2%2F12%2F2022
          //  }

        }, {
          key: "getCourseByBaseSchoolNameId",
          value: function getCourseByBaseSchoolNameId(baseSchoolNameId) {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByBaseNameId?baseSchoolNameId=' + baseSchoolNameId);
          }
        }, {
          key: "getselectedclassroutine",
          value: function getselectedclassroutine() {
            return this.http.get(this.baseUrl + '/class-routine/get-selectedClassRoutines');
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
          }
        }, {
          key: "getselectedclassperiod",
          value: function getselectedclassperiod() {
            return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriod');
          }
        }, {
          key: "getselectedbnaattendanceremark",
          value: function getselectedbnaattendanceremark() {
            return this.http.get(this.baseUrl + '/bna-attendance-remark/get-selectedBnaAttendanceRemarks');
          }
        }, {
          key: "getAttendances",
          value: function getAttendances(pageNumber, pageSize, searchText) {
            var _this2 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/attendance/get-attendances', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this2.Attendances = [].concat(_toConsumableArray(_this2.Attendances), _toConsumableArray(response.body.items));
              _this2.AttendancePagination = response.body;
              return _this2.AttendancePagination;
            }));
          }
        }, {
          key: "updateAttendanceList",
          value: function updateAttendanceList(model) {
            console.log(model);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.baseUrl + '/attendance/approved-attendancelist', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (attendanceUpdate) {
              if (attendanceUpdate) {
                console.log(attendanceUpdate);
                return attendanceUpdate;
              }
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/attendance/get-attendanceDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/attendance/update-attendance/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            console.log(model);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.baseUrl + '/attendance/save-attendancelist', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (Attendance) {
              if (Attendance) {
                console.log(Attendance);
                return Attendance;
              }
            }));
          }
        }, {
          key: "submitAttendance",
          value: function submitAttendance(model) {
            console.log(model);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.baseUrl + '/attendance/save-attendancelistnstructor', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (Attendance) {
              if (Attendance) {
                console.log(Attendance);
                return Attendance;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/attendance/delete-attendance/' + id);
          }
        }]);

        return _AttendanceService;
      }();

      _AttendanceService.ɵfac = function AttendanceService_Factory(t) {
        return new (t || _AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _AttendanceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AttendanceService,
        factory: _AttendanceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    80445:
    /*!***********************************************************!*\
      !*** ./src/app/basic-setup/models/CodeValuePagination.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CodeValuePagination": function CodeValuePagination() {
          return (
            /* binding */
            _CodeValuePagination
          );
        }
        /* harmony export */

      });

      var _CodeValuePagination = function _CodeValuePagination() {
        _classCallCheck(this, _CodeValuePagination);

        this.items = [];
      };
      /***/

    },

    /***/
    88509:
    /*!**********************************************************!*\
      !*** ./src/app/basic-setup/service/codevalue.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CodeValueService": function CodeValueService() {
          return (
            /* binding */
            _CodeValueService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _models_CodeValuePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/CodeValuePagination */
      80445);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CodeValueService = /*#__PURE__*/function () {
        function _CodeValueService(http) {
          _classCallCheck(this, _CodeValueService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.CodeValues = [];
          this.CodeValuePagination = new _models_CodeValuePagination__WEBPACK_IMPORTED_MODULE_1__.CodeValuePagination();
        }

        _createClass(_CodeValueService, [{
          key: "getCodeValues",
          value: function getCodeValues(pageNumber, pageSize, searchText) {
            var _this3 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString()); //params =params.append('searchText',searchText.toString());

            return this.http.get(this.baseUrl + '/code-value/get-codeValues', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this3.CodeValues = [].concat(_toConsumableArray(_this3.CodeValues), _toConsumableArray(response.body.items));
              _this3.CodeValuePagination = response.body;
              return _this3.CodeValuePagination;
            }));
          }
        }, {
          key: "getCheckBoxSelectedCodeValueByTypeWithChecked",
          value: function getCheckBoxSelectedCodeValueByTypeWithChecked(type) {
            return this.http.get(this.baseUrl + '/code-value/get-selectedCodeValueByTypeWithChecked?type=' + type);
          }
        }, {
          key: "getSelectedCodeValueByType",
          value: function getSelectedCodeValueByType(type) {
            return this.http.get(this.baseUrl + '/code-value/get-selectedCodeValueByType?type=' + type);
          }
        }, {
          key: "getselectedcodevaluetype",
          value: function getselectedcodevaluetype() {
            return this.http.get(this.baseUrl + '/code-value-type/get-selectedCodeValueTypes');
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/code-value/get-codeValueDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/code-value/update-codeValue/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/code-value/save-codeValue', model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/code-value/delete-codeValue/' + id);
          }
        }]);

        return _CodeValueService;
      }();

      _CodeValueService.ɵfac = function CodeValueService_Factory(t) {
        return new (t || _CodeValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CodeValueService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CodeValueService,
        factory: _CodeValueService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    310:
    /*!*************************************************************************!*\
      !*** ./src/app/course-management/models/traineenominationPagination.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TraineeNominationPagination": function TraineeNominationPagination() {
          return (
            /* binding */
            _TraineeNominationPagination
          );
        }
        /* harmony export */

      });

      var _TraineeNominationPagination = function _TraineeNominationPagination() {
        _classCallCheck(this, _TraineeNominationPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    22247:
    /*!************************************************************************!*\
      !*** ./src/app/course-management/service/traineenomination.service.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TraineeNominationService": function TraineeNominationService() {
          return (
            /* binding */
            _TraineeNominationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/traineenominationPagination */
      310);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TraineeNominationService = /*#__PURE__*/function () {
        function _TraineeNominationService(http) {
          _classCallCheck(this, _TraineeNominationService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.TraineeNominations = [];
          this.TraineeNominationPagination = new _models_traineenominationPagination__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationPagination();
        } //autocomplete
        //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032


        _createClass(_TraineeNominationService, [{
          key: "getSelectedTraineeByparameterRequest",
          value: function getSelectedTraineeByparameterRequest(pno, courseDurationId, courseNameId) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
          } // getSelectedTraineeByPno(pno){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo='+pno+'&courseDurationId='+courseDurationId+'&courseNameId='+courseNameId)
          //     .pipe(
          //       map((response:[]) => response.map(item => item))
          //     )
          // }

        }, {
          key: "getSelectedTraineeByPno",
          value: function getSelectedTraineeByPno(pno) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
          }
        }, {
          key: "getTraineeNominationByCourseDurationId",
          value: function getTraineeNominationByCourseDurationId(courseDurationId) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getTestTraineeNominationByCourseDurationId",
          value: function getTestTraineeNominationByCourseDurationId(courseDurationId) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getNewTraineeNominationByCourseDurationId",
          value: function getNewTraineeNominationByCourseDurationId(courseDurationId) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsForAttendanceByCourseDurationId?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getSelectedTrainee",
          value: function getSelectedTrainee() {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-selectedTraineeByPno');
          }
        }, {
          key: "getselectedcourseduration",
          value: function getselectedcourseduration() {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurations');
          }
        }, {
          key: "getselectedTraineeCourseStatus",
          value: function getselectedTraineeCourseStatus() {
            return this.http.get(this.baseUrl + '/trainee-course-status/get-selectedTraineeCourseStatuses');
          }
        }, {
          key: "getselectedWithdrawnDoc",
          value: function getselectedWithdrawnDoc() {
            return this.http.get(this.baseUrl + '/withdrawn-docs/get-selectedWithDrawnDocs');
          }
        }, {
          key: "getTraineeNominationsByCourseDurationId",
          value: function getTraineeNominationsByCourseDurationId(pageNumber, pageSize, searchText, courseDurationId) {
            var _this4 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseDurationId', courseDurationId.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsByCourseDurationId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this4.TraineeNominations = [].concat(_toConsumableArray(_this4.TraineeNominations), _toConsumableArray(response.body.items));
              _this4.TraineeNominationPagination = response.body;
              return _this4.TraineeNominationPagination;
            }));
          }
        }, {
          key: "getTraineeNominations",
          value: function getTraineeNominations(pageNumber, pageSize, searchText) {
            var _this5 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this5.TraineeNominations = [].concat(_toConsumableArray(_this5.TraineeNominations), _toConsumableArray(response.body.items));
              _this5.TraineeNominationPagination = response.body;
              return _this5.TraineeNominationPagination;
            }));
          }
        }, {
          key: "findByCourseDuration",
          value: function findByCourseDuration(courseDurationId) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationDetailByCourseDurationId?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/trainee-nomination/update-traineeNomination/' + id, model);
          }
        }, {
          key: "updateTraineeNominationList",
          value: function updateTraineeNominationList(model) {
            return this.http.post(this.baseUrl + '/trainee-nomination/update-traineeNominationList', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (TraineeNomination) {
              if (TraineeNomination) {
                console.log(TraineeNomination);
                return TraineeNomination;
              }
            }));
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/trainee-nomination/save-traineeNomination', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (TraineeNomination) {
              if (TraineeNomination) {
                console.log(TraineeNomination);
                return TraineeNomination;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/trainee-nomination/delete-traineeNomination/' + id);
          }
        }]);

        return _TraineeNominationService;
      }();

      _TraineeNominationService.ɵfac = function TraineeNominationService_Factory(t) {
        return new (t || _TraineeNominationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _TraineeNominationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _TraineeNominationService,
        factory: _TraineeNominationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();