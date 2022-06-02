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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_central-exam_service_SubjectMark_service_ts-src_app_subject-management_servic-61b6cc"], {
    /***/
    46923:
    /*!**************************************************************!*\
      !*** ./src/app/central-exam/models/SubjectMarkPagination.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubjectMarkPagination": function SubjectMarkPagination() {
          return (
            /* binding */
            _SubjectMarkPagination
          );
        }
        /* harmony export */

      });

      var _SubjectMarkPagination = function _SubjectMarkPagination() {
        _classCallCheck(this, _SubjectMarkPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    49718:
    /*!*************************************************************!*\
      !*** ./src/app/central-exam/service/SubjectMark.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubjectMarkService": function SubjectMarkService() {
          return (
            /* binding */
            _SubjectMarkService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../src/environments/environment */
      92340);
      /* harmony import */


      var _models_SubjectMarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/SubjectMarkPagination */
      46923);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SubjectMarkService = /*#__PURE__*/function () {
        function _SubjectMarkService(http) {
          _classCallCheck(this, _SubjectMarkService);

          this.http = http;
          this.baseUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.SubjectMarks = [];
          this.SubjectMarkPagination = new _models_SubjectMarkPagination__WEBPACK_IMPORTED_MODULE_1__.SubjectMarkPagination();
        }

        _createClass(_SubjectMarkService, [{
          key: "getSubjectMarks",
          value: function getSubjectMarks(pageNumber, pageSize, searchText) {
            var _this = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/subject-mark/get-subjectmarks', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this.SubjectMarks = [].concat(_toConsumableArray(_this.SubjectMarks), _toConsumableArray(response.body.items));
              _this.SubjectMarkPagination = response.body;
              return _this.SubjectMarkPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/subject-mark/get-subjectmarkdetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/subject-mark/update-subjectmark/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/subject-mark/save-subjectmark', model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/subject-mark/delete-subjectmark/' + id);
          }
        }, {
          key: "getSelectedBranch",
          value: function getSelectedBranch() {
            return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
          }
        }, {
          key: "getSelectedSubjectNameByBranchId",
          value: function getSelectedSubjectNameByBranchId(branchId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByBranchId?branchId=' + branchId);
          }
        }, {
          key: "getselectedmarktypes",
          value: function getselectedmarktypes() {
            return this.http.get(this.baseUrl + '/mark-type/get-selectedmarktypes');
          }
        }, {
          key: "getSelectedSubjectNameByCourseNameId",
          value: function getSelectedSubjectNameByCourseNameId(courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
          }
        }, {
          key: "getSelectedSchoolName",
          value: function getSelectedSchoolName() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedbnasubjectnamebyparameters",
          value: function getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
          }
        }, {
          key: "getselectedsubjectmarkbyparameters",
          value: function getselectedsubjectmarkbyparameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "getSelectedSubjectMarkByCourseNameIdAndBnaSubjectNameId",
          value: function getSelectedSubjectMarkByCourseNameIdAndBnaSubjectNameId(courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          } // subject-mark/get-selectedSubjectMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=1252&bnaSubjectNameId=3420

        }, {
          key: "getSelectedsubjectMarksBySubject",
          value: function getSelectedsubjectMarksBySubject(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkBySubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          } //autocomplete
          //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032

        }, {
          key: "getSelectedCourseByName",
          value: function getSelectedCourseByName(courseName) {
            return this.http.get(this.baseUrl + '/course-name/get-autocompleteCourseByName?courseName=' + courseName).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
          }
        }, {
          key: "getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }]);

        return _SubjectMarkService;
      }();

      _SubjectMarkService.ɵfac = function SubjectMarkService_Factory(t) {
        return new (t || _SubjectMarkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _SubjectMarkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _SubjectMarkService,
        factory: _SubjectMarkService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14750:
    /*!*************************************************************************!*\
      !*** ./src/app/subject-management/models/courseinstructorPagination.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseInstructorPagination": function CourseInstructorPagination() {
          return (
            /* binding */
            _CourseInstructorPagination
          );
        }
        /* harmony export */

      });

      var _CourseInstructorPagination = function _CourseInstructorPagination() {
        _classCallCheck(this, _CourseInstructorPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    12260:
    /*!************************************************************************!*\
      !*** ./src/app/subject-management/service/courseinstructor.service.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseInstructorService": function CourseInstructorService() {
          return (
            /* binding */
            _CourseInstructorService
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


      var _models_courseinstructorPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/courseinstructorPagination */
      14750);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CourseInstructorService = /*#__PURE__*/function () {
        function _CourseInstructorService(http) {
          _classCallCheck(this, _CourseInstructorService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.CourseInstructors = [];
          this.CourseInstructorPagination = new _models_courseinstructorPagination__WEBPACK_IMPORTED_MODULE_1__.CourseInstructorPagination();
        }

        _createClass(_CourseInstructorService, [{
          key: "getSelectedModule",
          value: function getSelectedModule() {
            return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModules');
          }
        }, {
          key: "getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getCourseByBaseSchoolId",
          value: function getCourseByBaseSchoolId(id) {
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurationByBaseSchool?baseSchoolNameId=' + id);
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname(baseSchoolNameId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
          }
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
          key: "getselectedschools",
          value: function getselectedschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
          }
        }, {
          key: "getselectedbnasubjectnamebyparameters",
          value: function getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNamesByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId);
          }
        }, {
          key: "getselectedcourseduration",
          value: function getselectedcourseduration() {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurations');
          }
        }, {
          key: "getCourseInstructors",
          value: function getCourseInstructors(pageNumber, pageSize, searchText) {
            var _this2 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructors', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this2.CourseInstructors = [].concat(_toConsumableArray(_this2.CourseInstructors), _toConsumableArray(response.body.items));
              _this2.CourseInstructorPagination = response.body;
              return _this2.CourseInstructorPagination;
            }));
          }
        }, {
          key: "stopCourseInstructor",
          value: function stopCourseInstructor(courseInstructorId) {
            return this.http.get(this.baseUrl + '/course-instructor/stop-courseinstructor/' + courseInstructorId);
          }
        }, {
          key: "RunningCourseInstructor",
          value: function RunningCourseInstructor(courseInstructorId) {
            return this.http.get(this.baseUrl + '/course-instructor/running-courseinstructor/' + courseInstructorId);
          }
        }, {
          key: "getInstructorByParameters",
          value: function getInstructorByParameters(baseSchoolNameId, bnaSubjectNameId, courseModuleId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorByParameters?baseSchoolNameId=' + baseSchoolNameId + '&bnaSubjectNameId=' + bnaSubjectNameId + '&courseModuleId=' + courseModuleId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          } // course-instructor/get-courseInstructorByCourseDurationIdandSubjectNameId?bnaSubjectNameId=3426&courseNameId=1251&courseDurationId=3138

        }, {
          key: "getCourseInstructorByCourseDurationIdANdSubjectNameId",
          value: function getCourseInstructorByCourseDurationIdANdSubjectNameId(subjectNameId, courseDurationId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorByCourseDurationIdandSubjectNameId?bnaSubjectNameId=' + subjectNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getInstructorBySchoolAndCourse",
          value: function getInstructorBySchoolAndCourse(baseSchoolNameId, courseDurationId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-instructor/get-instructorByCourseAndSchool?baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getInstructorListBySchoolAndCourse",
          value: function getInstructorListBySchoolAndCourse(baseSchoolNameId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/course-instructor/get-instructorListByCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/course-instructor/get-courseInstructorDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/course-instructor/update-courseInstructor/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/course-instructor/save-courseInstructor', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (CourseInstructor) {
              if (CourseInstructor) {
                console.log(CourseInstructor);
                return CourseInstructor;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/course-instructor/delete-courseInstructor/' + id);
          }
        }]);

        return _CourseInstructorService;
      }();

      _CourseInstructorService.ɵfac = function CourseInstructorService_Factory(t) {
        return new (t || _CourseInstructorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _CourseInstructorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CourseInstructorService,
        factory: _CourseInstructorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();