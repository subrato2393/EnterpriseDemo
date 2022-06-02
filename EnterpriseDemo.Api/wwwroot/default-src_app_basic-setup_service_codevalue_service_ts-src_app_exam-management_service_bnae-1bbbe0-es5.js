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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"], {
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
            var _this = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString()); //params =params.append('searchText',searchText.toString());

            return this.http.get(this.baseUrl + '/code-value/get-codeValues', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this.CodeValues = [].concat(_toConsumableArray(_this.CodeValues), _toConsumableArray(response.body.items));
              _this.CodeValuePagination = response.body;
              return _this.CodeValuePagination;
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
    64990:
    /*!****************************************************************!*\
      !*** ./src/app/exam-management/service/bnaexammark.service.ts ***!
      \****************************************************************/

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


      var _models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/bnaexammarkPagination */
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
          this.BNAExamMarkPagination = new _models_bnaexammarkPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkPagination();
        }

        _createClass(_BNAExamMarkService, [{
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
          key: "GetRoutineIdWithSchoolCourseSubject",
          value: function GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, subjectNameId) {
            return this.http.get(this.baseUrl + '/class-routine/get-SelectedRoutineIdWithSchoolCourseSubject?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectNameId);
          }
        }, {
          key: "GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId",
          value: function GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, subjectName) {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-totalmarkAndPassMarkFromprocedure?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + subjectName);
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
          } // getselectebnaexamschedule(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-exam-schedule/get-selectedBnaExamSchedules')
          // }
          // getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId,courseNameId){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-module/get-selectedCourseModulesByBaseSchoolNameIdAndCourseNameId?baseSchoolNameId='+baseSchoolNameId+'&courseNameId='+courseNameId);
          // }

        }, {
          key: "getBNAExamMarks",
          value: function getBNAExamMarks(pageNumber, pageSize, searchText) {
            var _this2 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarks', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this2.BNAExamMarks = [].concat(_toConsumableArray(_this2.BNAExamMarks), _toConsumableArray(response.body.items));
              _this2.BNAExamMarkPagination = response.body;
              return _this2.BNAExamMarkPagination;
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
    }
  }]);
})();