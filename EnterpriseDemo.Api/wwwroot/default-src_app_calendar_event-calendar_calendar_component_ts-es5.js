(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["default-src_app_calendar_event-calendar_calendar_component_ts"], {
    /***/
    27976:
    /*!***************************************************************!*\
      !*** ./src/app/admin/dashboard/services/dashboard.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dashboardService": function dashboardService() {
          return (
            /* binding */
            _dashboardService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _dashboardService = /*#__PURE__*/function () {
        function _dashboardService(http) {
          _classCallCheck(this, _dashboardService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.SpCourseDurations = [];
          this.SpTotalTrainees = [];
        } // getCourseDurationsByCourseType(pageNumber, pageSize,searchText,courseTypeId:number) {
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


        _createClass(_dashboardService, [{
          key: "getCourseDurationForEventCalendar",
          value: function getCourseDurationForEventCalendar() {
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurationForEventCalendar');
          }
        }, {
          key: "getSpCourseDurationsByType",
          value: function getSpCourseDurationsByType(id, current) {
            return this.http.get(this.baseUrl + '/dashboard/get-courseDurationfromprocedure?courseTypeId=' + id + '&CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getSpForeignCourseDurationsByType",
          value: function getSpForeignCourseDurationsByType(id, current) {
            return this.http.get(this.baseUrl + '/dashboard/get-foreignCourseDurationfromprocedure?courseTypeId=' + id + '&CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getnominatedCourseListFromSpRequest",
          value: function getnominatedCourseListFromSpRequest(current) {
            return this.http.get(this.baseUrl + '/dashboard/get-nominatedCourseListFromSpRequest?CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getrunningCourseTotalOfficerListfromprocedureRequest",
          value: function getrunningCourseTotalOfficerListfromprocedureRequest(current, id) {
            return this.http.get(this.baseUrl + '/dashboard/get-runningCourseTotalOfficerListfromprocedure?TraineeStatusId=' + id + '&CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getSpRunningCourseDurationsByType",
          value: function getSpRunningCourseDurationsByType(id, current) {
            return this.http.get(this.baseUrl + '/dashboard/get-runningCourseDurationfromprocedure?courseTypeId=' + id + '&CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getSpRunningForeignCourseDurationsByType",
          value: function getSpRunningForeignCourseDurationsByType(id, current) {
            return this.http.get(this.baseUrl + '/dashboard/get-runningForeignCourseDurationfromprocedure?courseTypeId=' + id + '&CurrentDate=' + current).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getTrainingSyllabusListByParams",
          value: function getTrainingSyllabusListByParams(baseSchoolNameId, courseNameId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/training-syllabus/get-trainingSyllabusListByParamsFromSpRequest?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&bnaSubjectNameId=' + bnaSubjectNameId).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getSpTotalTraineeByTraineeStatus",
          value: function getSpTotalTraineeByTraineeStatus() {
            return this.http.get(this.baseUrl + '/dashboard/get-spGetTotalTraineeList').pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "getSpSchoolCount",
          value: function getSpSchoolCount() {
            return this.http.get(this.baseUrl + '/dashboard/get-spGetSchoolCount').pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }]);

        return _dashboardService;
      }();

      _dashboardService.ɵfac = function dashboardService_Factory(t) {
        return new (t || _dashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _dashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _dashboardService,
        factory: _dashboardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    82758:
    /*!***********************************************************************!*\
      !*** ./src/app/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormDialogComponent": function FormDialogComponent() {
          return (
            /* binding */
            _FormDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _models_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/calendar */
      37856);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/calendar.service */
      58366);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _FormDialogComponent = /*#__PURE__*/function () {
        function _FormDialogComponent(dialogRef, data, calendarService, fb) {
          _classCallCheck(this, _FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.calendarService = calendarService;
          this.fb = fb;
          this.showDeleteBtn = false;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            console.log("check");
            console.log(this.calendar);
            this.courseTitle = this.calendar.courseTitle;
            this.durationFrom = this.calendar.durationForm;
            this.durationTo = this.calendar.durationTo;
            this.noOfCandidates = this.calendar.noOfCandidates;
            this.professional = this.calendar.professional;
            this.nbcd = this.calendar.nbcd;
            this.location = this.calendar.location;
            this.remark = this.calendar.remark;
            this.showDeleteBtn = true;
          } else {
            this.dialogTitle = 'New Event';
            this.calendar = new _models_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
            this.showDeleteBtn = false;
          }

          this.calendarForm = this.createContactForm();
        }

        _createClass(_FormDialogComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.calendar.id],
              title: [this.calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              courseTitle: [this.calendar.courseTitle],
              durationForm: [this.calendar.durationForm],
              durationTo: [this.calendar.durationTo],
              startDate: [this.calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              endDate: [this.calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              details: [this.calendar.details]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent() {
            this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('delete');
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('submit');
          }
        }]);

        return _FormDialogComponent;
      }();

      _FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || _FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
      };

      _FormDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _FormDialogComponent,
        selectors: [["app-form-dialog"]],
        decls: 54,
        vars: 16,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "table", "table-bordered"], ["scope", "row"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Course Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "No Of Candidates");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Duration From");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Duration To");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Professional");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "nbcd");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Remark");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.calendarForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.courseTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.noOfCandidates);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 10, ctx.durationFrom, "mediumDate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](35, 13, ctx.durationTo, "mediumDate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.professional);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nbcd);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.location);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.remark);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    46288:
    /*!***************************************************************!*\
      !*** ./src/app/calendar/event-calendar/calendar.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarComponent": function CalendarComponent() {
          return (
            /* binding */
            _CalendarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _models_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/calendar */
      37856);
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dialogs/form-dialog/form-dialog.component */
      82758);
      /* harmony import */


      var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _admin_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../admin/dashboard/services/dashboard.service */
      27976);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _service_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/calendar.service */
      58366);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fullcalendar/angular */
      52955);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _c0 = ["calendar"];

      var _c1 = function _c1() {
        return ["/admin/dashboard/main"];
      };

      function CalendarComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "keyboard_backspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["/admin/dashboard/interservice-dashboard"];
      };

      function CalendarComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "keyboard_backspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c2));
        }
      }

      var _CalendarComponent = /*#__PURE__*/function (_shared_UnsubscribeOn) {
        _inherits(_CalendarComponent, _shared_UnsubscribeOn);

        var _super = _createSuper(_CalendarComponent);

        function _CalendarComponent(fb, authService, dashboardService, dialog, calendarService, snackBar) {
          var _this;

          _classCallCheck(this, _CalendarComponent);

          _this = _super.call(this);
          _this.fb = fb;
          _this.authService = authService;
          _this.dashboardService = dashboardService;
          _this.dialog = dialog;
          _this.calendarService = calendarService;
          _this.snackBar = snackBar;
          _this.filterOptions = 'All';
          _this.filterItems = ['work', 'personal', 'important', 'travel', 'friends'];
          _this.filters = [{
            name: 'work',
            value: 'Work',
            checked: true
          }, {
            name: 'personal',
            value: 'Personal',
            checked: true
          }, {
            name: 'important',
            value: 'Important',
            checked: true
          }, {
            name: 'travel',
            value: 'Travel',
            checked: true
          }, {
            name: 'friends',
            value: 'Friends',
            checked: true
          }];
          _this.calendarOptions = {
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: _this.handleDateSelect.bind(_assertThisInitialized(_this)),
            eventClick: _this.handleEventClick.bind(_assertThisInitialized(_this)),
            eventsSet: _this.handleEvents.bind(_assertThisInitialized(_this))
          };
          _this.dialogTitle = 'Add New Event';
          _this.calendar = new _models_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
          _this.addCusForm = _this.createCalendarForm(_this.calendar);
          return _this;
        }

        _createClass(_CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.role = this.authService.currentUserValue.role.trim();
            this.traineeId = this.authService.currentUserValue.traineeId.trim();
            this.branchId = this.authService.currentUserValue.branchId.trim();
            console.log(this.role, this.traineeId, this.branchId); //    this.calendarEvents = INITIAL_EVENTS;
            //    console.log(INITIAL_EVENTS)
            //   // this.tempEvents = this.calendarEvents;
            //    this.calendarOptions.initialEvents = this.calendarEvents;
            //  //this.initializeEvents()

            this.dashboardService.getCourseDurationForEventCalendar().subscribe(function (res) {
              //  this.calendarEvents=INITIAL_EVENTS;
              _this2.calendarEvents = res;
              console.log(res);
              _this2.calendarOptions = {
                headerToolbar: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                },
                initialView: 'dayGridMonth',
                weekends: true,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                events: _this2.calendarEvents,
                select: _this2.handleDateSelect.bind(_this2),
                eventClick: _this2.handleEventClick.bind(_this2),
                eventsSet: _this2.handleEvents.bind(_this2)
              }; // this.calendarOptions.initialEvents = this.calendarEvents;
            });
          }
        }, {
          key: "initializeEvents",
          value: function initializeEvents() {
            var _this3 = this;

            this.calendarService.getCourseDurationForEventCalendar().subscribe(function (res) {
              //var durationData: EventInput[] = res;
              var durationData = res;
              console.log(durationData);
              _this3.calendarEvents = durationData; //  this.tempEvents = this.calendarEvents;

              _this3.calendarOptions.initialEvents = _this3.calendarEvents;
            });
          }
        }, {
          key: "handleDateSelect",
          value: function handleDateSelect(selectInfo) {
            this.addNewEvent();
          }
        }, {
          key: "addNewEvent",
          value: function addNewEvent() {
            var _this4 = this;

            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                calendar: this.calendar,
                action: 'add'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 'submit') {
                _this4.calendarData = _this4.calendarService.getDialogData();
                _this4.calendarEvents = _this4.calendarEvents.concat({
                  // add new event data. must create new array
                  id: _this4.calendarData.id,
                  title: _this4.calendarData.title,
                  start: _this4.calendarData.startDate,
                  end: _this4.calendarData.endDate,
                  className: _this4.getClassNameValue(_this4.calendarData.category),
                  groupId: _this4.calendarData.category,
                  details: _this4.calendarData.details
                });
                _this4.calendarOptions.events = _this4.calendarEvents;

                _this4.addCusForm.reset();

                _this4.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "changeCategory",
          value: function changeCategory(event, filter) {
            if (event.checked) {
              this.filterItems.push(filter.name);
            } else {
              this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
            }

            this.filterEvent(this.filterItems);
          }
        }, {
          key: "filterEvent",
          value: function filterEvent(element) {
            var list = this.calendarEvents.filter(function (x) {
              return element.map(function (y) {
                return y;
              }).includes(x.groupId);
            });
            this.calendarOptions.events = list;
          }
        }, {
          key: "handleEventClick",
          value: function handleEventClick(clickInfo) {
            this.eventClick(clickInfo);
          }
        }, {
          key: "eventClick",
          value: function eventClick(row) {
            var _this5 = this;

            console.log("check event click");
            console.log(row);
            var calendarData = {
              id: row.event.id,
              title: row.event.title,
              courseTitle: row.event._def.extendedProps.courseTitle,
              durationForm: row.event._def.extendedProps.durationFrom,
              durationTo: row.event._def.extendedProps.durationTo,
              noOfCandidates: row.event._def.extendedProps.noOfCandidates,
              professional: row.event._def.extendedProps.professional,
              nbcd: row.event._def.extendedProps.nbcd,
              location: row.event._def.extendedProps.location,
              remark: row.event._def.extendedProps.remark,
              startDate: row.event.start,
              endDate: row.event.end,
              details: row.event.extendedProps.details
            };
            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                calendar: calendarData,
                action: 'edit'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 'submit') {
                _this5.calendarData = _this5.calendarService.getDialogData();

                _this5.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    this.editEvent(index, this.calendarData);
                  }
                }, _this5);

                _this5.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');

                _this5.addCusForm.reset();
              } else if (result === 'delete') {
                _this5.calendarData = _this5.calendarService.getDialogData();

                _this5.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    row.event.remove();
                  }
                }, _this5);

                _this5.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editEvent",
          value: function editEvent(eventIndex, calendarData) {
            var calendarEvents = this.calendarEvents.slice();
            var singleEvent = Object.assign({}, calendarEvents[eventIndex]);
            singleEvent.id = calendarData.id;
            singleEvent.title = calendarData.title;
            singleEvent.start = calendarData.startDate;
            singleEvent.end = calendarData.endDate;
            singleEvent.className = this.getClassNameValue(calendarData.category);
            singleEvent.groupId = calendarData.category;
            singleEvent.details = calendarData.details;
            calendarEvents[eventIndex] = singleEvent;
            this.calendarEvents = calendarEvents; // reassign the array

            this.calendarOptions.events = calendarEvents;
          }
        }, {
          key: "handleEvents",
          value: function handleEvents(events) {// this.currentEvents = events;
          }
        }, {
          key: "createCalendarForm",
          value: function createCalendarForm(calendar) {
            return this.fb.group({
              id: [calendar.id],
              title: [calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              category: [calendar.category],
              startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
              endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
              details: [calendar.details, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]]
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }, {
          key: "getClassNameValue",
          value: function getClassNameValue(category) {
            var className;
            if (category === 'work') className = 'fc-event-success';else if (category === 'personal') className = 'fc-event-warning';else if (category === 'important') className = 'fc-event-primary';else if (category === 'travel') className = 'fc-event-danger';else if (category === 'friends') className = 'fc-event-info';
            return className;
          }
        }]);

        return _CalendarComponent;
      }(_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_2__.UnsubscribeOnDestroyAdapter);

      _CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
        return new (t || _CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.dashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
      };

      _CalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _CalendarComponent,
        selectors: [["app-calendar"]],
        viewQuery: function CalendarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
        decls: 39,
        vars: 3,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "row", "event-calendar"], [1, "col-xl-2", "col-md-2", "col-sm-12", "p-l-30"], [1, "m-b-25"], ["class", "btn-space", "mat-raised-button", "", "color", "warn", 3, "routerLink", 4, "ngIf"], [1, "col-xl-10", "col-md-10", "col-sm-12", "p-l-30"], [1, "right-float"], [1, "fc-event-color", "color1", "spn"], [1, "fc-event-color", "color2", "spn"], [1, "fc-event-color", "color3", "spn"], [1, "fc-event-color", "color4", "spn"], [1, "fc-event-color", "color5", "spn"], [1, "col-xl-12", "col-md-12", "col-sm-12"], [1, "panel-body"], [3, "options"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"]],
        template: function CalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CalendarComponent_button_21_Template, 4, 2, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CalendarComponent_button_22_Template, 4, 2, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Local");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Foreign");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Inter Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Central Exam");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "MIST");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "full-calendar", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role === "Master Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role === "Inter Seevice Course");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.calendarOptions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__.FullCalendarComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon],
        styles: [""]
      });
      /***/
    },

    /***/
    37856:
    /*!*********************************************!*\
      !*** ./src/app/calendar/models/calendar.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Calendar": function Calendar() {
          return (
            /* binding */
            _Calendar
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _Calendar = /*#__PURE__*/function () {
        function _Calendar(calendar) {
          _classCallCheck(this, _Calendar);

          {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.courseTitle = calendar.courseTitle;
            this.durationForm = calendar.durationForm;
            this.durationTo = calendar.durationTo;
            this.noOfCandidates = calendar.noOfCandidates;
            this.professional = calendar.professional;
            this.nbcd = calendar.nbcd;
            this.location = calendar.location;
            this.remark = calendar.remark;
            this.startDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
          }
        }

        _createClass(_Calendar, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return _Calendar;
      }();
      /***/

    },

    /***/
    58366:
    /*!******************************************************!*\
      !*** ./src/app/calendar/service/calendar.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarService": function CalendarService() {
          return (
            /* binding */
            _CalendarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      75894);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CalendarService = /*#__PURE__*/function () {
        function _CalendarService(httpClient) {
          _classCallCheck(this, _CalendarService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.API_URL = "assets.json"; //private readonly API_URL = "assets/data/calendar.json";

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              "Content-Type": "application/json"
            })
          };
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        }

        _createClass(_CalendarService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
        }, {
          key: "getAllCalendars",
          value: function getAllCalendars() {
            console.log(this.API_URL);
            return this.httpClient.get(this.API_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorHandler));
          }
        }, {
          key: "getCourseDurationForEventCalendar",
          value: function getCourseDurationForEventCalendar() {
            return this.httpClient.get(this.baseUrl + '/course-duration/get-courseDurationForEventCalendar');
          }
        }, {
          key: "addUpdateCalendar",
          value: function addUpdateCalendar(calendar) {
            this.dialogData = calendar;
          }
        }, {
          key: "deleteCalendar",
          value: function deleteCalendar(calendar) {
            this.dialogData = calendar;
          }
        }, {
          key: "errorHandler",
          value: function errorHandler(error) {
            var errorMessage = "";

            if (error.error instanceof ErrorEvent) {
              // Get client-side error
              errorMessage = error.error.message;
            } else {
              // Get server-side error
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            console.log(errorMessage);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
          }
        }]);

        return _CalendarService;
      }();

      _CalendarService.ɵfac = function CalendarService_Factory(t) {
        return new (t || _CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _CalendarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _CalendarService,
        factory: _CalendarService.ɵfac
      });
      /***/
    }
  }]);
})();