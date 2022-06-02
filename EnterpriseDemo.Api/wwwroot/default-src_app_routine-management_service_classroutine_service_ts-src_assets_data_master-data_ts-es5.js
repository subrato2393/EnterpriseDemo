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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"], {
    /***/
    22881:
    /*!*********************************************************************!*\
      !*** ./src/app/routine-management/models/classroutinePagination.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassRoutinePagination": function ClassRoutinePagination() {
          return (
            /* binding */
            _ClassRoutinePagination
          );
        }
        /* harmony export */

      });

      var _ClassRoutinePagination = function _ClassRoutinePagination() {
        _classCallCheck(this, _ClassRoutinePagination);

        this.items = [];
      };
      /***/

    },

    /***/
    60616:
    /*!********************************************************************!*\
      !*** ./src/app/routine-management/service/classroutine.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassRoutineService": function ClassRoutineService() {
          return (
            /* binding */
            _ClassRoutineService
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


      var _models_classroutinePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/classroutinePagination */
      22881);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ClassRoutineService = /*#__PURE__*/function () {
        function _ClassRoutineService(http) {
          _classCallCheck(this, _ClassRoutineService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.ClassRoutines = [];
          this.ClassRoutinePagination = new _models_classroutinePagination__WEBPACK_IMPORTED_MODULE_1__.ClassRoutinePagination();
        }

        _createClass(_ClassRoutineService, [{
          key: "getCourseInstructorByBaseSchoolNameAndCourseName",
          value: function getCourseInstructorByBaseSchoolNameAndCourseName(baseSchoolNameId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/course-instructor/get-instructorByBaseSchoolAndCourseNameSpRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getClassRoutineCountByParameterRequest",
          value: function getClassRoutineCountByParameterRequest(baseSchoolNameId, courseNameId, bnaSubjectNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineCountByParemeterRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId + '&courseDurationId=' + courseDurationId);
          } //class-routine/get-classRoutineByCourseNameBaseSchoolNameCourseModuleAndDateRequest?baseSchoolNameId=20&courseNameId=1065&courseModuleId=14&date=2%2F12%2F2022

        }, {
          key: "getClassRoutineByCourseNameBaseSchoolNameSpRequest",
          value: function getClassRoutineByCourseNameBaseSchoolNameSpRequest(baseSchoolNameId, courseNameId, courseWeekId) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineByCourseNameBaseSchoolNameSpRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseWeekId=' + courseWeekId);
          }
        }, {
          key: "getSubjectlistBySchoolAndCourse",
          value: function getSubjectlistBySchoolAndCourse(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-subjectlistBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getSelectedRoutineId",
          value: function getSelectedRoutineId(baseSchoolNameId, courseNameId, classPeriodId) {
            return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId);
          }
        }, {
          key: "getSelectedRoutineIdFilter",
          value: function getSelectedRoutineIdFilter(baseSchoolNameId, courseNameId, classPeriodId, courseDurationId, date) {
            return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdFilter?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&classPeriodId=' + classPeriodId + '&courseDurationId=' + courseDurationId + '&date=' + date);
          } // class-routine/get-SelectedRoutineIdFilter?baseSchoolNameId=20&courseNameId=1065&classPeriodId=32&courseDurationId=3089&date=2022-04-21

        }, {
          key: "getSubjectNameFromRoutine",
          value: function getSubjectNameFromRoutine(baseSchoolNameId, courseNameId, date, classPeriodId, courseDurationId) {
            return this.http.get(this.baseUrl + '/class-routine/get-subjectNameFromRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&date=' + date + '&classPeriodId=' + classPeriodId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getTotalPeriodByParameterRequest",
          value: function getTotalPeriodByParameterRequest(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectPeriodfromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "getCourseModuleIdForRoutine",
          value: function getCourseModuleIdForRoutine(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-moduleForRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "getSelectedRoutineByParameters",
          value: function getSelectedRoutineByParameters(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "classRoutineBySchoolCourseDuration",
          value: function classRoutineBySchoolCourseDuration(baseSchoolNameId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineBySchoolCourseDuration?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedclasstype",
          value: function getselectedclasstype() {
            return this.http.get(this.baseUrl + '/class-type/get-selectedClassTypes');
          }
        }, {
          key: "getselectedClassPeriodbyschoolandcourse",
          value: function getselectedClassPeriodbyschoolandcourse(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/class-period/get-selectedClassPeriodBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          } // getCourseTitleByBaseSchoolId(id:number){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-duration/get-selectedCourseTitleByBaseSchool?baseSchoolNameId=' + id);
          // }

        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname(baseSchoolNameId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
          }
        }, {
          key: "getSelectedCourseWeeks",
          value: function getSelectedCourseWeeks(baseSchoolNameId, courseDurationId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-week/get-selectedCourseWeeks?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getQexamRoutine",
          value: function getQexamRoutine(courseDurationId) {
            return this.http.get(this.baseUrl + '/class-routine/get-qexamRoutine?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getClassRoutineListByParams",
          value: function getClassRoutineListByParams(baseSchoolNameId, courseDurationId, courseNameId, courseWeekId) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineLisByParams?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId + '&courseWeekId=' + courseWeekId);
          }
        }, {
          key: "getselectedbnasubjectnamebyparameters",
          value: function getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
          }
        }, {
          key: "getselectedSubjectNamesBySchoolAndCourse",
          value: function getselectedSubjectNamesBySchoolAndCourse(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedCourseModules",
          value: function getselectedCourseModules() {
            return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModules');
          } // getselectedCourseModuleByBaseSchoolNameId(id:number){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModuleByBaseSchoolNameId?baseSchoolNameId=' + id)
          // }

        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getClassRoutines",
          value: function getClassRoutines(pageNumber, pageSize, searchText) {
            var _this = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutines', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this.ClassRoutines = [].concat(_toConsumableArray(_this.ClassRoutines), _toConsumableArray(response.body.items));
              _this.ClassRoutinePagination = response.body;
              return _this.ClassRoutinePagination;
            }));
          }
        }, {
          key: "getClassRoutinesByCourseDurationId",
          value: function getClassRoutinesByCourseDurationId(pageNumber, pageSize, searchText, courseDurationId) {
            var _this2 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseDurationId', courseDurationId.toString()); // class-routine/get-classRoutinesByCourseDurationId?PageSize=5&PageNumber=1&courseDurationId=3137

            return this.http.get(this.baseUrl + '/class-routine/get-classRoutinesByCourseDurationId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this2.ClassRoutines = [].concat(_toConsumableArray(_this2.ClassRoutines), _toConsumableArray(response.body.items));
              _this2.ClassRoutinePagination = response.body;
              return _this2.ClassRoutinePagination;
            }));
          }
        }, {
          key: "weeklyRoutineUpdate",
          value: function weeklyRoutineUpdate(model) {
            console.log(model);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.baseUrl + '/class-routine/update-weeklyClassRoutine', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (classRoutine) {
              if (classRoutine) {
                console.log(classRoutine);
                return classRoutine;
              }
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/class-routine/get-classRoutineDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/class-routine/update-classRoutine/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/class-routine/save-classRoutine', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (ClassRoutine) {
              if (ClassRoutine) {
                console.log(ClassRoutine);
                return ClassRoutine;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/class-routine/delete-classRoutine/' + id);
          }
        }]);

        return _ClassRoutineService;
      }();

      _ClassRoutineService.ɵfac = function ClassRoutineService_Factory(t) {
        return new (t || _ClassRoutineService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ClassRoutineService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _ClassRoutineService,
        factory: _ClassRoutineService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    65960:
    /*!****************************************!*\
      !*** ./src/assets/data/master-data.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasterData": function MasterData() {
          return (
            /* binding */
            _MasterData
          );
        }
        /* harmony export */

      });

      var _MasterData = {
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
          CentralExam: 1021
        },
        classType: {
          Class: 3,
          Exam: 4
        },
        courseName: {
          QExam: 1252,
          StaffCollage: 1251,
          JCOsTraining: 1253
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
        }
      };
      /***/
    }
  }]);
})();