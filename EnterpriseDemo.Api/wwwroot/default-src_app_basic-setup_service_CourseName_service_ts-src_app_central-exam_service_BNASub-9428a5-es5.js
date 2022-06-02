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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_basic-setup_service_CourseName_service_ts-src_app_central-exam_service_BNASub-9428a5"], {
    /***/
    69144:
    /*!************************************************************!*\
      !*** ./src/app/basic-setup/models/CourseNamePagination.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseNamePagination": function CourseNamePagination() {
          return (
            /* binding */
            _CourseNamePagination
          );
        }
        /* harmony export */

      });

      var _CourseNamePagination = function _CourseNamePagination() {
        _classCallCheck(this, _CourseNamePagination);

        this.items = [];
      };
      /***/

    },

    /***/
    37295:
    /*!***********************************************************!*\
      !*** ./src/app/basic-setup/service/CourseName.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseNameService": function CourseNameService() {
          return (
            /* binding */
            _CourseNameService
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


      var _models_CourseNamePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/CourseNamePagination */
      69144);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CourseNameService = /*#__PURE__*/function () {
        function _CourseNameService(http) {
          _classCallCheck(this, _CourseNameService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.CourseNames = [];
          this.CourseNamePagination = new _models_CourseNamePagination__WEBPACK_IMPORTED_MODULE_1__.CourseNamePagination();
        }

        _createClass(_CourseNameService, [{
          key: "getCourseNames",
          value: function getCourseNames(pageNumber, pageSize, searchText) {
            var _this = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/course-name/get-courseNames', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this.CourseNames = [].concat(_toConsumableArray(_this.CourseNames), _toConsumableArray(response.body.items));
              _this.CourseNamePagination = response.body;
              return _this.CourseNamePagination;
            }));
          }
        }, {
          key: "getCourseModuleListByBaseSchoolNameIdCourseNameId",
          value: function getCourseModuleListByBaseSchoolNameIdCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-module/get-CourseModuleListByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          } //autocomplete for Course

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
          key: "getSelectedCourseByNameAndType",
          value: function getSelectedCourseByNameAndType(courseTypeId, courseName) {
            return this.http.get(this.baseUrl + '/course-name/get-autocompleteCourseByNameAndType?courseTypeId=' + courseTypeId + '&courseName=' + courseName).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
          }
        }, {
          key: "getSelectedCourseByType",
          value: function getSelectedCourseByType(courseTypeId) {
            // course-name/get-selectedCourseByType?courseTypeId=1021
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByType?courseTypeId=' + courseTypeId);
          }
        }, {
          key: "getSelectedCourseName",
          value: function getSelectedCourseName() {
            return this.http.get(this.baseUrl + '/course-type/get-selectedCourseTypes');
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/course-name/get-courseNameDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/course-name/update-courseName/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/course-name/save-courseName', model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/course-name/delete-courseName/' + id);
          }
        }]);

        return _CourseNameService;
      }();

      _CourseNameService.ɵfac = function CourseNameService_Factory(t) {
        return new (t || _CourseNameService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CourseNameService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CourseNameService,
        factory: _CourseNameService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    19443:
    /*!*****************************************************************!*\
      !*** ./src/app/central-exam/models/BNASubjectNamePagination.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNASubjectNamePagination": function BNASubjectNamePagination() {
          return (
            /* binding */
            _BNASubjectNamePagination
          );
        }
        /* harmony export */

      });

      var _BNASubjectNamePagination = function _BNASubjectNamePagination() {
        _classCallCheck(this, _BNASubjectNamePagination);

        this.items = [];
      };
      /***/

    },

    /***/
    15018:
    /*!****************************************************************!*\
      !*** ./src/app/central-exam/service/BNASubjectName.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNASubjectNameService": function BNASubjectNameService() {
          return (
            /* binding */
            _BNASubjectNameService
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


      var _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/BNASubjectNamePagination */
      19443);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BNASubjectNameService = /*#__PURE__*/function () {
        function _BNASubjectNameService(http) {
          _classCallCheck(this, _BNASubjectNameService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.BNASubjectNames = [];
          this.BNASubjectNamePagination = new _models_BNASubjectNamePagination__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNamePagination();
        }

        _createClass(_BNASubjectNameService, [{
          key: "getSubjectNameByFromCourseNameIdAndBranchId",
          value: function getSubjectNameByFromCourseNameIdAndBranchId(courseNameId, branchId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByFromCourseNameIdAndBranchId?courseNameId=' + courseNameId + '&branchId=' + branchId);
          }
        }, {
          key: "getSelectedSubjectNameByCourseNameId",
          value: function getSelectedSubjectNameByCourseNameId(courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
          } // getSelectedBnaSemester(){
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

        }, {
          key: "getSelectedSchoolName",
          value: function getSelectedSchoolName() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getSelectedCourseName",
          value: function getSelectedCourseName() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByCourseTypeId');
          }
        }, {
          key: "getselectedSubjectNameByBranchId",
          value: function getselectedSubjectNameByBranchId(branchId, courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByBranchId?branchId=' + branchId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedSubjectName",
          value: function getselectedSubjectName() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByCourseNameInQExamId');
          }
        }, {
          key: "getSelectedSubjectType",
          value: function getSelectedSubjectType() {
            return this.http.get(this.baseUrl + '/subject-type/get-getSelectedSubjectType');
          }
        }, {
          key: "getSelectedResultStatus",
          value: function getSelectedResultStatus() {
            return this.http.get(this.baseUrl + '/result-status/get-selectedResultStatuses');
          }
        }, {
          key: "getSelectedBranch",
          value: function getSelectedBranch() {
            return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
          }
        }, {
          key: "getBNASubjectNames",
          value: function getBNASubjectNames(pageNumber, pageSize, searchText, status) {
            var _this2 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('status', status.toString());
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNames', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this2.BNASubjectNames = [].concat(_toConsumableArray(_this2.BNASubjectNames), _toConsumableArray(response.body.items));
              _this2.BNASubjectNamePagination = response.body;
              return _this2.BNASubjectNamePagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/bna-subject-name/update-bnaSubjectName/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/bna-subject-name/save-bnaSubjectName', model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/bna-subject-name/delete-bnaSubjectName/' + id);
          }
        }]);

        return _BNASubjectNameService;
      }();

      _BNASubjectNameService.ɵfac = function BNASubjectNameService_Factory(t) {
        return new (t || _BNASubjectNameService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _BNASubjectNameService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _BNASubjectNameService,
        factory: _BNASubjectNameService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    31698:
    /*!*************************************************************!*\
      !*** ./src/app/central-exam/service/bnaexammark.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamMarkService": function BNAExamMarkService() {
          return (
            /* binding */
            _BNAExamMarkService
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


      var _exam_management_models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../exam-management/models/bnaexammarkPagination */
      77808);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BNAExamMarkService = /*#__PURE__*/function () {
        function _BNAExamMarkService(http) {
          _classCallCheck(this, _BNAExamMarkService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.BNAExamMarks = [];
          this.BNAExamMarkPagination = new _exam_management_models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkPagination();
        }

        _createClass(_BNAExamMarkService, [{
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId(courseTypeId, courseNameId) {
            // course-duration/get-selectedCourseDurationByCourseTypeIdAndCourseNameId?courseTypeId=1021&courseNameId=1252
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationByCourseTypeIdAndCourseNameId?courseTypeId=' + courseTypeId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getCourseDurationByBaseSchoolNameIdAndCourseNameId",
          value: function getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationIdByBaseSchoolNameAndCourseNameRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId",
          value: function GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-SelectedSubjectMarkByBaseSchoolCourseNameAndBnaSubjectNameId?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "GetSubjectMarkByCourseNameIdSubjectNameId",
          value: function GetSubjectMarkByCourseNameIdSubjectNameId(courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedSubjectMarkByCourseNameIdSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "getClassRoutineIdForStaffCollege",
          value: function getClassRoutineIdForStaffCollege(courseDurationId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdForStaffCollege?courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          } // class-routine/get-SelectedRoutineIdForStaffCollege?courseDurationId=3149&courseNameId=1251&bnaSubjectNameId=3426
          // subject-mark/get-selectedSubjectMarkByCourseNameIdSubjectNameId?courseNameId=1251&bnaSubjectNameId=3425

        }, {
          key: "GetRoutineIdWithSchoolCourseSubject",
          value: function GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdWithSchoolCourseSubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId",
          value: function GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, subjectName) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkFromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectName);
          } // bna-subject-name/get-totalmarkAndPassMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=1251&bnaSubjectNameId=3425

        }, {
          key: "GetTotalMarkAndPassMarkByCourseNameIdAndSubjectId",
          value: function GetTotalMarkAndPassMarkByCourseNameIdAndSubjectId(courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkByCourseNameIdAndBnaSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedexammarkremark",
          value: function getselectedexammarkremark() {
            return this.http.get(this.baseUrl + '/exam-mark-remark/get-selectedExamMarkRemark');
          }
        }, {
          key: "getselectedmarktypes",
          value: function getselectedmarktypes(baseSchoolNameId, courseNameId, subjectNameId, courseModuleId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedMarkTypeByParametersFromSubjectMark?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&courseModuleId=' + courseModuleId);
          }
        }, {
          key: "getselectedmarktypesByCourseNameIdAndSubjectNameId",
          value: function getselectedmarktypesByCourseNameIdAndSubjectNameId(courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-selectedMarkTypeByCourseNameIdAndSubjectNameId?courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "getapprovededmarktypes",
          value: function getapprovededmarktypes(baseSchoolNameId, courseNameId, subjectNameId, courseModuleId) {
            return this.http.get(this.baseUrl + '/subject-mark/get-approvedMarkTypeByParametersFromSubjectMark?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&courseModuleId=' + courseModuleId);
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname(baseSchoolNameId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
          }
        }, {
          key: "getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByParametersFromRoutineTable?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getSelectedSubjectNameListForInstructorDashBoardByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedSubjectNameListForInstructorDashBoardByBaseSchoolNameIdAndCourseNameId(traineeId, baseSchoolNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-subjectNameListForInstructorDashboardDropdown?traineeId=' + traineeId + '&baseSchoolNameId=' + baseSchoolNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getApprovedSubjectNameByBaseSchoolNameIdAndCourseNameId",
          value: function getApprovedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-approvedSubjectNameByParametersFromRoutineTable?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getexamMarkListByParameters",
          value: function getexamMarkListByParameters(baseSchoolNameId, courseNameId, subjectNameId, subjectMarkId, approveStatus) {
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-examMarkListByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId + '&subjectMarkId=' + subjectMarkId + '&approveStatus=' + approveStatus);
          }
        }, {
          key: "getSelectedClassTypeByBaseSchoolNameIdAndCourseNameId",
          value: function getSelectedClassTypeByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/class-type/get-selectedClassTypeByParameterRequestFromClassRoutine?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getTraineeMarkListByDuration",
          value: function getTraineeMarkListByDuration(courseDurationId) {
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-traineeMarkListByDuration?courseDurationId=' + courseDurationId);
          }
        }, {
          key: "getSelectedSubjectNameByCourseNameId",
          value: function getSelectedSubjectNameByCourseNameId(courseNameId) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedSubjectNameByCourseNameId?courseNameId=' + courseNameId);
          } // getselectebnaexamschedule(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-exam-schedule/get-selectedBnaExamSchedules')
          // }
          // getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId,courseNameId){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId);
          // }

        }, {
          key: "getBNAExamMarks",
          value: function getBNAExamMarks(pageNumber, pageSize, searchText) {
            var _this3 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarks', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this3.BNAExamMarks = [].concat(_toConsumableArray(_this3.BNAExamMarks), _toConsumableArray(response.body.items));
              _this3.BNAExamMarkPagination = response.body;
              return _this3.BNAExamMarkPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarkDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/bna-exam-mark/update-bnaExamMark/' + id, model);
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
            return this.http.post(this.baseUrl + '/bna-exam-mark/save-bnaExamMarklist', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (BNAExamMark) {
              if (BNAExamMark) {
                console.log(BNAExamMark);
                return BNAExamMark;
              }
            }));
          }
        }, {
          key: "approve",
          value: function approve(model) {
            console.log(model);
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            return this.http.post(this.baseUrl + '/bna-exam-mark/approve-bnaExamMarklist', model, httpOptions).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (BNAExamMark) {
              if (BNAExamMark) {
                console.log(BNAExamMark);
                return BNAExamMark;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/bna-exam-mark/delete-bnaExamMark/' + id);
          }
        }]);

        return _BNAExamMarkService;
      }();

      _BNAExamMarkService.ɵfac = function BNAExamMarkService_Factory(t) {
        return new (t || _BNAExamMarkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _BNAExamMarkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _BNAExamMarkService,
        factory: _BNAExamMarkService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77808:
    /*!*****************************************************************!*\
      !*** ./src/app/exam-management/models/bnaexammarkPagination.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamMarkPagination": function BNAExamMarkPagination() {
          return (
            /* binding */
            _BNAExamMarkPagination
          );
        }
        /* harmony export */

      });

      var _BNAExamMarkPagination = function _BNAExamMarkPagination() {
        _classCallCheck(this, _BNAExamMarkPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    84295:
    /*!********************************************************************!*\
      !*** ./src/app/routine-management/models/classperiodPagination.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassPeriodPagination": function ClassPeriodPagination() {
          return (
            /* binding */
            _ClassPeriodPagination
          );
        }
        /* harmony export */

      });

      var _ClassPeriodPagination = function _ClassPeriodPagination() {
        _classCallCheck(this, _ClassPeriodPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    80438:
    /*!*******************************************************************!*\
      !*** ./src/app/routine-management/service/classperiod.service.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassPeriodService": function ClassPeriodService() {
          return (
            /* binding */
            _ClassPeriodService
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


      var _models_classperiodPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/classperiodPagination */
      84295);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ClassPeriodService = /*#__PURE__*/function () {
        function _ClassPeriodService(http) {
          _classCallCheck(this, _ClassPeriodService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.ClassPeriods = [];
          this.ClassPeriodPagination = new _models_classperiodPagination__WEBPACK_IMPORTED_MODULE_1__.ClassPeriodPagination();
        }

        _createClass(_ClassPeriodService, [{
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getSelectedPeriodBySchoolAndCourse",
          value: function getSelectedPeriodBySchoolAndCourse(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/class-period/get-selectedPeriodBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedbnaclassschedulestatus",
          value: function getselectedbnaclassschedulestatus() {
            return this.http.get(this.baseUrl + '/bna-class-schedule-status/get-selectedbnaClassScheduleStatuses');
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getClassPeriods",
          value: function getClassPeriods(pageNumber, pageSize, searchText) {
            var _this4 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/class-period/get-classPeriods', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this4.ClassPeriods = [].concat(_toConsumableArray(_this4.ClassPeriods), _toConsumableArray(response.body.items));
              _this4.ClassPeriodPagination = response.body;
              return _this4.ClassPeriodPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/class-period/get-classPeriodDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/class-period/update-classPeriod/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/class-period/save-classPeriod', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (ClassPeriod) {
              if (ClassPeriod) {
                console.log(ClassPeriod);
                return ClassPeriod;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/class-period/delete-classPeriod/' + id);
          }
        }]);

        return _ClassPeriodService;
      }();

      _ClassPeriodService.ɵfac = function ClassPeriodService_Factory(t) {
        return new (t || _ClassPeriodService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ClassPeriodService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _ClassPeriodService,
        factory: _ClassPeriodService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();