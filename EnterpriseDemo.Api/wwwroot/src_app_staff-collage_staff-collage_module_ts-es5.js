(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_staff-collage_staff-collage_module_ts"], {
    /***/
    14857:
    /*!*************************************************************************************!*\
      !*** ./src/app/staff-collage/attendance/new-attendance/new-attendance.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewAttendanceComponent": function NewAttendanceComponent() {
          return (
            /* binding */
            _NewAttendanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _app_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../app/routine-management/service/classroutine.service */
      60616);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _app_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app/course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var _basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../attendance-management/service/attendance.service */
      70499);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function NewAttendanceComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewAttendanceComponent_mat_option_33_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r18.onCourseNameSelectionChangeGetSubjectList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r17.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r17.text, " ");
        }
      }

      function NewAttendanceComponent_h5_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Subject Name : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](dropdown_r20.text);
        }
      }

      function NewAttendanceComponent_div_36_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_36_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r33 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r23.paging.pageIndex - 1) * ctx_r23.paging.pageSize + i_r33 + 1, " ");
        }
      }

      function NewAttendanceComponent_div_36_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Rank & Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_36_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", element_r34.rankPosition, " ", element_r34.traineeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" - ( P No ", element_r34.traineePNo, ")");
        }
      }

      function NewAttendanceComponent_div_36_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Attendance Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_36_mat_cell_13_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r38.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r38.text, " ");
        }
      }

      function NewAttendanceComponent_div_36_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewAttendanceComponent_div_36_mat_cell_13_Template_mat_select_selectionChange_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);

            var i_r36 = restoredCtx.index;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r39.onOptionsSelected(i_r36, $event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, NewAttendanceComponent_div_36_mat_cell_13_mat_option_5_Template, 2, 2, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r27.selectedbnaattendanceremark);
        }
      }

      function NewAttendanceComponent_div_36_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Attendance");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_36_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 64, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function NewAttendanceComponent_div_36_mat_cell_16_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);

            var i_r42 = restoredCtx.index;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r44.onCheckboxChange(i_r42, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", element_r41.attendanceStatus)("ngClass", "tbl-checkbox");
        }
      }

      function NewAttendanceComponent_div_36_mat_header_row_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewAttendanceComponent_div_36_mat_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewAttendanceComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Trainee List");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-table", 51, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, NewAttendanceComponent_div_36_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewAttendanceComponent_div_36_mat_cell_7_Template, 2, 1, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, NewAttendanceComponent_div_36_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NewAttendanceComponent_div_36_mat_cell_10_Template, 4, 3, "mat-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, NewAttendanceComponent_div_36_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NewAttendanceComponent_div_36_mat_cell_13_Template, 6, 1, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, NewAttendanceComponent_div_36_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NewAttendanceComponent_div_36_mat_cell_16_Template, 3, 2, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NewAttendanceComponent_div_36_mat_header_row_17_Template, 1, 0, "mat-header-row", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, NewAttendanceComponent_div_36_mat_row_18_Template, 1, 0, "mat-row", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.traineeNominationListForAttendance);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
        }
      }

      function NewAttendanceComponent_div_37_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_37_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r59 = ctx.index;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r49.paging.pageIndex - 1) * ctx_r49.paging.pageSize + i_r59 + 1, " ");
        }
      }

      function NewAttendanceComponent_div_37_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Rank & Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_37_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", element_r60.rankPosition, " ", element_r60.traineeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" - ( P No ", element_r60.traineePNo, ")");
        }
      }

      function NewAttendanceComponent_div_37_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Attendance Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_37_mat_cell_13_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r64.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r64.text, " ");
        }
      }

      function NewAttendanceComponent_div_37_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewAttendanceComponent_div_37_mat_cell_13_Template_mat_select_selectionChange_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);

            var i_r62 = restoredCtx.index;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r65.onOptionsSelected(i_r62, $event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, NewAttendanceComponent_div_37_mat_cell_13_mat_option_5_Template, 2, 2, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r53.selectedbnaattendanceremark);
        }
      }

      function NewAttendanceComponent_div_37_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Attendance");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_div_37_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 64, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function NewAttendanceComponent_div_37_mat_cell_16_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r71);

            var i_r68 = restoredCtx.index;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r70.onCheckboxChange(i_r68, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", element_r67.attendanceStatus)("ngClass", "tbl-checkbox");
        }
      }

      function NewAttendanceComponent_div_37_mat_header_row_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewAttendanceComponent_div_37_mat_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewAttendanceComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Trainee List");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-table", 51, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, NewAttendanceComponent_div_37_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewAttendanceComponent_div_37_mat_cell_7_Template, 2, 1, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, NewAttendanceComponent_div_37_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NewAttendanceComponent_div_37_mat_cell_10_Template, 4, 3, "mat-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, NewAttendanceComponent_div_37_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NewAttendanceComponent_div_37_mat_cell_13_Template, 6, 1, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, NewAttendanceComponent_div_37_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NewAttendanceComponent_div_37_mat_cell_16_Template, 3, 2, "mat-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NewAttendanceComponent_div_37_mat_header_row_17_Template, 1, 0, "mat-header-row", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, NewAttendanceComponent_div_37_mat_row_18_Template, 1, 0, "mat-row", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r3.traineeNominationListForAttendance);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
        }
      }

      function NewAttendanceComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r74 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r6.paging.pageIndex - 1) * ctx_r6.paging.pageSize + i_r74 + 1, " ");
        }
      }

      function NewAttendanceComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r75.bnaSubjectName, " ");
        }
      }

      function NewAttendanceComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, element_r76.date, "fullDate"), " ");
        }
      }

      function NewAttendanceComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Time Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewAttendanceComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r77.timeDuration, " ");
        }
      }

      function NewAttendanceComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1, a2, a3, a4, a5) {
        return ["/staff-collage/add-staffcollegetraineeattendance", a1, a2, a3, a4, a5];
      };

      function NewAttendanceComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Attendance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewAttendanceComponent_mat_cell_62_Template_button_click_3_listener($event) {
            return $event.stopPropagation();
          })("click", function NewAttendanceComponent_mat_cell_62_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);

            var row_r78 = restoredCtx.$implicit;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r81.deleteItem(row_r78);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r78 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction5"](1, _c0, ctx_r14.courseDurationId, row_r78.date, ctx_r14.courseNameId, row_r78.classRoutineId, row_r78.bnaSubjectNameId));
        }
      }

      function NewAttendanceComponent_mat_header_row_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewAttendanceComponent_mat_row_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      var _NewAttendanceComponent = /*#__PURE__*/function () {
        // displayedColumns: string[] = ['ser','traineePNo','attendanceStatus','bnaAttendanceRemarksId'];
        // dataSource ;
        function _NewAttendanceComponent(snackBar, BNAExamMarkService, classRoutineService, datepipe, confirmService, traineeNominationService, CodeValueService, AttendanceService, fb, router, route) {
          _classCallCheck(this, _NewAttendanceComponent);

          this.snackBar = snackBar;
          this.BNAExamMarkService = BNAExamMarkService;
          this.classRoutineService = classRoutineService;
          this.datepipe = datepipe;
          this.confirmService = confirmService;
          this.traineeNominationService = traineeNominationService;
          this.CodeValueService = CodeValueService;
          this.AttendanceService = AttendanceService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.myModel = true;
          this.validationErrors = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumnsRoutine = ['ser', 'bnaSubjectName', 'date', 'timeDuration', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
          this.checked = false;
          this.isShown = false;
          this.isShownForTraineeList = false;
        }

        _createClass(_NewAttendanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // 3136
            var id = this.route.snapshot.paramMap.get('attendanceId');
            console.log(id);
            this.courseDurationId = this.route.snapshot.paramMap.get('courseDurationId');
            console.log("Course duration id");
            console.log(this.courseDurationId);

            if (id) {
              this.pageTitle = 'Edit Attendance';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.AttendanceService.find(+id).subscribe(function (res) {
                _this.AttendanceForm.patchValue({
                  attendanceId: res.attendanceId,
                  classRoutineId: res.classRoutineId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseNameId: res.courseNameId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  classPeriodId: res.classPeriodId,
                  bnaAttendanceRemarksId: res.bnaAttendanceRemarksId,
                  attendanceDate: res.attendanceDate,
                  classLeaderName: res.classLeaderName,
                  attendanceStatus: res.attendanceStatus,
                  isApproved: res.isApproved,
                  approvedUser: res.approvedUser,
                  approvedDate: res.approvedDate,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Attendance';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedclassroutine();
            this.getselectedbaseschools();
            this.getselectedcoursename();
            this.getselectedbnasubjectname();
            this.getselectedclassperiod();
            this.getselectedbnaattendanceremark();
            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.AttendanceForm = this.fb.group({
              attendanceId: [0],
              baseSchoolNameId: [''],
              courseNameId: [''],
              courseDurationId: [''],
              classPeriodId: [''],
              attendanceDate: [],
              classLeaderName: [''],
              attendanceStatus: [true],
              traineeList: this.fb.array([this.createTraineeData()])
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectList",
          value: function onCourseNameSelectionChangeGetSubjectList(dropdown) {
            var _this2 = this;

            if (dropdown.isUserInput) {
              // console.log(dropdown);
              var courseNameArr = dropdown.source.value.split('_');
              this.courseDurationId = courseNameArr[0];
              this.courseNameId = courseNameArr[1]; // console.log("courseDurationId");
              // console.log(this.courseDurationId);

              this.AttendanceForm.get('courseNameId').setValue(this.courseNameId);
              this.AttendanceForm.get('courseDurationId').setValue(this.courseDurationId); // this.subjectNameService.getSelectedSubjectNameByCourseNameId(courseNameId).subscribe(res => {
              //   this.selectedSubjectNameByCourseNameId = res;
              // });

              this.isLoading = true;
              this.classRoutineService.getClassRoutinesByCourseDurationId(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.courseDurationId).subscribe(function (response) {
                _this2.dataSource.data = response.items.filter(function (x) {
                  return x.attendanceComplete === 0;
                });
                _this2.paging.length = response.totalItemsCount;
                _this2.isLoading = false;
                console.log("Subject name");
                console.log(_this2.dataSource.data);
              });
            }
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this3 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(_src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              _this3.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "onOptionsSelected",
          value: function onOptionsSelected(index, value) {
            this.traineeNominationListForAttendance[index]["bnaAttendanceRemarksId"] = value;
          }
        }, {
          key: "onCheckboxChange",
          value: function onCheckboxChange(index, event) {
            this.traineeNominationListForAttendance[index]["attendanceStatus"] = event.checked;
          }
        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              bnaAttendanceRemarksId: [''],
              courseDurationId: [''],
              traineeId: ['']
            });
          } // if(baseSchoolNameId != null && courseNameId != null && this.courseDurationId !=null && classPeriodId !=null){
          // this.traineeNominationService.getTraineeNominationByCourseDurationId(this.courseDurationId).subscribe(res=>{
          // this.traineeNominationListForAttendance=res; 
          // for(let i=0;i<=this.traineeNominationListForAttendance.length;i++)
          // {
          //   this.traineeNominationListForAttendance[i].attendanceStatus=true
          // }
          //  });
          // } 

        }, {
          key: "onBaseSchoolNameSelectionChangeGetCourse",
          value: function onBaseSchoolNameSelectionChangeGetCourse(baseSchoolNameId) {
            var _this4 = this;

            this.AttendanceService.getCourseByBaseSchoolNameId(baseSchoolNameId).subscribe(function (res) {
              _this4.selectedCourse = res;
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.AttendanceForm.controls;
          }
        }, {
          key: "t",
          get: function get() {
            return this.f.traineeLists;
          }
        }, {
          key: "onClassPeriodSelectionChangeGetCourseDuration",
          value: function onClassPeriodSelectionChangeGetCourseDuration() {
            var _this5 = this;

            this.isShown = true;
            var baseSchoolNameId = this.AttendanceForm.value['baseSchoolNameId'];
            var courseNameId = this.AttendanceForm.value['courseNameId'];
            var classPeriodId = this.AttendanceForm.value['classPeriodId'];
            var date = this.AttendanceForm.value['attendanceDate'];
            var courseNameArr = courseNameId.split('_');
            this.courseDurationId = courseNameArr[0];
            var courseNameId = courseNameArr[1];
            var formatedDate = this.datepipe.transform(date, 'MM/dd/yyyy');
            this.classRoutineService.getSubjectNameFromRoutine(baseSchoolNameId, courseNameId, formatedDate, classPeriodId, this.courseDurationId).subscribe(function (res) {
              _this5.subjectNamefromClassRoutine = res;

              for (var i = 0; i < _this5.subjectNamefromClassRoutine.length; i++) {
                _this5.bnaSubjectNameId = _this5.subjectNamefromClassRoutine[i].value;
              }
            });
            this.classRoutineService.getSelectedRoutineId(baseSchoolNameId, courseNameId, classPeriodId).subscribe(function (res) {
              _this5.classRoutineId = res;
            });

            if (baseSchoolNameId != null && courseNameId != null && this.courseDurationId != null && classPeriodId != null) {
              this.traineeNominationService.getTraineeNominationByCourseDurationId(this.courseDurationId).subscribe(function (res) {
                _this5.traineeNominationListForAttendance = res;

                for (var i = 0; i <= _this5.traineeNominationListForAttendance.length; i++) {
                  _this5.traineeNominationListForAttendance[i].attendanceStatus = true;
                }
              });
            }
          } //  onDateSelectionChange(event){
          //   var date=this.datepipe.transform((event.value), 'MM/dd/yyyy');
          //        var baseSchoolNameId=this.AttendanceForm.value['baseSchoolNameId'];
          //        var courseNameId=this.AttendanceForm.value['courseNameId'];
          //        var courseNameArr = courseNameId.split('_');
          //        var courseDurationId = courseNameArr[0];
          //        var courseNameId=courseNameArr[1];
          //         if(baseSchoolNameId != null && courseNameId != null  && courseDurationId !=null){
          //           this.AttendanceService.getSelectedClassPeriodByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId,courseNameId,courseDurationId,date).subscribe(res=>{
          //             this.selectedClassPeriodByBaseSchoolNameIdAndCourseNameId=res;     
          //             console.log( this.selectedClassPeriodByBaseSchoolNameIdAndCourseNameId); 
          //           });
          //         }  
          //  }

        }, {
          key: "onCourseNameSelectionChangeGetClassPeriod",
          value: function onCourseNameSelectionChangeGetClassPeriod() {}
        }, {
          key: "getselectedclassroutine",
          value: function getselectedclassroutine() {
            var _this6 = this;

            this.AttendanceService.getselectedclassroutine().subscribe(function (res) {
              _this6.selectedclassroutine = res;
            });
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this7 = this;

            this.AttendanceService.getselectedbaseschools().subscribe(function (res) {
              _this7.selectedbaseschools = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this8 = this;

            this.AttendanceService.getselectedcoursename().subscribe(function (res) {
              _this8.selectedcoursename = res;
            });
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            var _this9 = this;

            this.AttendanceService.getselectedbnasubjectname().subscribe(function (res) {
              _this9.selectedbnasubjectname = res;
            });
          }
        }, {
          key: "getselectedclassperiod",
          value: function getselectedclassperiod() {
            var _this10 = this;

            this.AttendanceService.getselectedclassperiod().subscribe(function (res) {
              _this10.selectedclassperiod = res;
            });
          }
        }, {
          key: "getselectedbnaattendanceremark",
          value: function getselectedbnaattendanceremark() {
            var _this11 = this;

            this.AttendanceService.getselectedbnaattendanceremark().subscribe(function (res) {
              _this11.selectedbnaattendanceremark = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            var id = this.AttendanceForm.get('attendanceId').value;
            var classLeaderName = this.AttendanceForm.value['classLeaderName'];
            var attendanceDate = this.AttendanceForm.value['attendanceDate'];
            var baseSchoolNameId = this.AttendanceForm.value['baseSchoolNameId'];
            var classPeriodId = this.AttendanceForm.value['classPeriodId'];

            for (var i = 0; i < this.traineeNominationListForAttendance.length; i++) {
              this.traineeNominationListForAttendance[i]["classLeaderName"] = classLeaderName;
              this.traineeNominationListForAttendance[i]["attendanceDate"] = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
              this.traineeNominationListForAttendance[i]["bnaSubjectNameId"] = this.bnaSubjectNameId;
              this.traineeNominationListForAttendance[i]["baseSchoolNameId"] = baseSchoolNameId;
              this.traineeNominationListForAttendance[i]["classPeriodId"] = classPeriodId;
              this.traineeNominationListForAttendance[i]["classRoutineId"] = this.classRoutineId;
            }

            console.log(this.AttendanceForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this12.AttendanceService.update(+id, JSON.stringify(_this12.traineeNominationListForAttendance)).subscribe(function (response) {
                    _this12.router.navigateByUrl('/attendance-management/add-attendance');

                    _this12.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this12.validationErrors = error;
                  });
                }
              });
            } else {
              this.AttendanceService.submit(JSON.stringify(this.traineeNominationListForAttendance)).subscribe(function (response) {
                _this12.AttendanceForm.reset();

                _this12.AttendanceForm.get('attendanceId').setValue(0);

                _this12.isShown = false;

                _this12.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this12.validationErrors = error;
              });
            }
          }
        }]);

        return _NewAttendanceComponent;
      }();

      _NewAttendanceComponent.ɵfac = function NewAttendanceComponent_Factory(t) {
        return new (t || _NewAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__.ClassRoutineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
      };

      _NewAttendanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewAttendanceComponent,
        selectors: [["app-new-attendance"]],
        decls: 65,
        vars: 12,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "form-border-design", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseNameId"], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "cls-header", 4, "ngFor", "ngForOf"], ["class", "container mt-2 att-tbl", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [1, "row", "create-table", "db-tbl", "cls-rtn"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaSubjectName"], ["matColumnDef", "date"], ["matColumnDef", "timeDuration"], ["matColumnDef", "actions"], ["ngClass", "attendanceCellHeader", "class", "pr-0", 4, "matHeaderCellDef"], ["ngClass", "attendanceCell", "class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "value", "onSelectionChange"], [1, "cls-header"], [1, "container", "mt-2", "att-tbl"], [1, "text-center"], ["matSort", "", 1, "mat-cell", "db-li-n", 3, "dataSource"], ["matColumnDef", "traineePNo"], ["class", "t-nm-cl", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "t-nm-cl", 4, "matCellDef"], ["matColumnDef", "bnaAttendanceRemarksId"], ["matColumnDef", "attendanceStatus"], ["mat-sort-header", ""], ["mat-sort-header", "", 1, "t-nm-cl"], [1, "t-nm-cl"], [1, "t-n-pno-d"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "checked", "ngClass", "change"], ["checkBox", ""], ["ngClass", "attendanceCellHeader", 1, "pr-0"], ["ngClass", "attendanceCell", 1, "pr-0"], ["mat-raised-button", "", 1, "custom-btn", "courseplan-btn", "attendance", 3, "routerLink"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewAttendanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Attendance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewAttendanceComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, NewAttendanceComponent_mat_option_33_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, NewAttendanceComponent_h5_35_Template, 4, 1, "h5", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, NewAttendanceComponent_div_36_Template, 19, 3, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, NewAttendanceComponent_div_37_Template, 19, 3, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Routine List");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-table", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, NewAttendanceComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, NewAttendanceComponent_mat_cell_50_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](51, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, NewAttendanceComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, NewAttendanceComponent_mat_cell_53_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](54, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, NewAttendanceComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, NewAttendanceComponent_mat_cell_56_Template, 3, 4, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](57, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, NewAttendanceComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, NewAttendanceComponent_mat_cell_59_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](60, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, NewAttendanceComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, NewAttendanceComponent_mat_cell_62_Template, 6, 7, "mat-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, NewAttendanceComponent_mat_header_row_63_Template, 1, 0, "mat-header-row", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, NewAttendanceComponent_mat_row_64_Template, 1, 0, "mat-row", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.AttendanceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedCourseDurationByCourseTypeAndCourseName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.subjectNamefromClassRoutine);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShownForTraineeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.AttendanceForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsRoutine);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsRoutine);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    85420:
    /*!***********************************************************************************************************!*\
      !*** ./src/app/staff-collage/attendance/new-attendancetraineelist/new-attendancetraineelist.component.ts ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewAttendanceTraineeListComponent": function NewAttendanceTraineeListComponent() {
          return (
            /* binding */
            _NewAttendanceTraineeListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../routine-management/service/classroutine.service */
      60616);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var _basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../attendance-management/service/attendance.service */
      70499);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function NewAttendanceTraineeListComponent_tr_43_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r4.text, " ");
        }
      }

      function NewAttendanceTraineeListComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, NewAttendanceTraineeListComponent_tr_43_mat_option_14_Template, 2, 2, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", unit_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r0.getControlLabel(i_r2, "rankPosition"), " - ", ctx_r0.getControlLabel(i_r2, "traineeName"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(P No ", ctx_r0.getControlLabel(i_r2, "traineePNo"), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.selectedbnaattendanceremark);
        }
      }

      var _NewAttendanceTraineeListComponent = /*#__PURE__*/function () {
        // displayedColumns: string[] = ['ser','traineePNo','attendanceStatus','bnaAttendanceRemarksId'];
        // dataSource ;
        function _NewAttendanceTraineeListComponent(snackBar, BNAExamMarkService, classRoutineService, datepipe, confirmService, traineeNominationService, CodeValueService, AttendanceService, fb, router, route) {
          _classCallCheck(this, _NewAttendanceTraineeListComponent);

          this.snackBar = snackBar;
          this.BNAExamMarkService = BNAExamMarkService;
          this.classRoutineService = classRoutineService;
          this.datepipe = datepipe;
          this.confirmService = confirmService;
          this.traineeNominationService = traineeNominationService;
          this.CodeValueService = CodeValueService;
          this.AttendanceService = AttendanceService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.myModel = true;
          this.validationErrors = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumnsRoutine = ['ser', 'bnaSubjectName', 'date', 'timeDuration', 'actions'];
          this.checked = false;
          this.isShown = false;
          this.isShownForTraineeList = false;
        }

        _createClass(_NewAttendanceTraineeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var id = this.route.snapshot.paramMap.get('attendanceId');
            this.courseDurationId = this.route.snapshot.paramMap.get('courseDurationId');
            this.bnaSubjectNameId = this.route.snapshot.paramMap.get('bnaSubjectNameId');
            this.attendanceDate = this.route.snapshot.paramMap.get('date');
            this.classRoutineId = this.route.snapshot.paramMap.get('classRoutineId');
            console.log("course duration id");
            console.log(this.courseDurationId);

            if (id) {
              this.pageTitle = 'Edit Attendance';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.AttendanceService.find(+id).subscribe(function (res) {
                _this13.AttendanceForm.patchValue({
                  attendanceId: res.attendanceId,
                  classRoutineId: res.classRoutineId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseNameId: res.courseNameId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  classPeriodId: res.classPeriodId,
                  bnaAttendanceRemarksId: res.bnaAttendanceRemarksId,
                  attendanceDate: res.attendanceDate,
                  classLeaderName: res.classLeaderName,
                  attendanceStatus: res.attendanceStatus,
                  isApproved: res.isApproved,
                  approvedUser: res.approvedUser,
                  approvedDate: res.approvedDate,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Attendance';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getTraineeNominationByCourseDurationId();
            this.getTraineeList(); //  this.getselectedclassroutine();
            //  this.getselectedbaseschools();
            //  this.getselectedcoursename();
            //  this.getselectedbnasubjectname();
            //  this.getselectedclassperiod();

            this.getselectedbnaattendanceremark(); //  this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
          }
        }, {
          key: "getTraineeList",
          value: function getTraineeList() {}
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.AttendanceForm = this.fb.group({
              attendanceId: [0],
              baseSchoolNameId: [''],
              bnaSubjectNameId: [''],
              courseNameId: [''],
              courseDurationId: [''],
              classRoutineId: [''],
              classPeriodId: [''],
              status: [0],
              attendanceDate: [],
              classLeaderName: [''],
              attendanceStatus: [true],
              traineeListForm: this.fb.array([this.createTraineeData()])
            });
          }
        }, {
          key: "getControlLabel",
          value: function getControlLabel(index, type) {
            return this.AttendanceForm.get('traineeListForm').at(index).get(type).value;
          }
        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              attendanceId: [],
              baseSchoolNameId: [''],
              courseNameId: [''],
              classPeriodId: [''],
              bnaSubjectNameId: [''],
              classRoutineId: [''],
              courseDurationId: [''],
              attendanceDate: [],
              attendanceStatus: [''],
              bnaAttendanceRemarksId: [''],
              traineeId: [''],
              traineePNo: [''],
              traineeName: [''],
              classLeaderName: [''],
              rankPosition: [''],
              dateCreated: [],
              createdBy: []
            });
          }
        }, {
          key: "clearList",
          value: function clearList() {
            var control = this.AttendanceForm.controls["traineeListForm"];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "getTraineeNominationByCourseDurationId",
          value: function getTraineeNominationByCourseDurationId() {
            var _this14 = this;

            this.traineeNominationService.getTraineeNominationByCourseDurationId(this.courseDurationId).subscribe(function (res) {
              _this14.traineeNominationListForAttendance = res;
              console.log("Trainee Nomination");
              console.log(_this14.traineeNominationListForAttendance);

              _this14.clearList();

              _this14.getTraineeListonClick();
            });
          }
        }, {
          key: "getTraineeListonClick",
          value: function getTraineeListonClick() {
            var control = this.AttendanceForm.controls["traineeListForm"]; // console.log(this.dataSource)   

            for (var i = 0; i < this.traineeNominationListForAttendance.length; i++) {
              control.push(this.createTraineeData());
              console.log("data source");
              console.log(this.traineeNominationListForAttendance[i]);
            }

            this.AttendanceForm.patchValue({
              traineeListForm: this.traineeNominationListForAttendance
            });
          }
        }, {
          key: "getselectedclassroutine",
          value: function getselectedclassroutine() {
            var _this15 = this;

            this.AttendanceService.getselectedclassroutine().subscribe(function (res) {
              _this15.selectedclassroutine = res;
            });
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this16 = this;

            this.AttendanceService.getselectedbaseschools().subscribe(function (res) {
              _this16.selectedbaseschools = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this17 = this;

            this.AttendanceService.getselectedcoursename().subscribe(function (res) {
              _this17.selectedcoursename = res;
            });
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            var _this18 = this;

            this.AttendanceService.getselectedbnasubjectname().subscribe(function (res) {
              _this18.selectedbnasubjectname = res;
            });
          }
        }, {
          key: "getselectedclassperiod",
          value: function getselectedclassperiod() {
            var _this19 = this;

            this.AttendanceService.getselectedclassperiod().subscribe(function (res) {
              _this19.selectedclassperiod = res;
            });
          }
        }, {
          key: "getselectedbnaattendanceremark",
          value: function getselectedbnaattendanceremark() {
            var _this20 = this;

            this.AttendanceService.getselectedbnaattendanceremark().subscribe(function (res) {
              _this20.selectedbnaattendanceremark = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            var id = this.AttendanceForm.get('attendanceId').value;
            this.AttendanceForm.get('courseDurationId').setValue(this.courseDurationId);
            this.AttendanceForm.get('bnaSubjectNameId').setValue(this.bnaSubjectNameId);
            this.AttendanceForm.get('attendanceDate').setValue(this.attendanceDate);
            this.AttendanceForm.get('classRoutineId').setValue(this.classRoutineId);
            console.log(this.AttendanceForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this21.AttendanceService.update(+id, JSON.stringify(_this21.AttendanceForm.value)).subscribe(function (response) {
                    _this21.router.navigateByUrl('/attendance-management/add-attendance');

                    _this21.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this21.validationErrors = error;
                  });
                }
              });
            } else {
              this.AttendanceService.submitAttendance(this.AttendanceForm.value).subscribe(function (response) {
                // this.AttendanceForm.reset();staff-collage/add-staffcollegeattendance
                // this.AttendanceForm.get('attendanceId').setValue(0);
                // this.isShown=false;
                _this21.router.navigateByUrl('/staff-collage/add-staffcollegeattendance');

                _this21.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this21.validationErrors = error;
              });
            }
          }
        }]);

        return _NewAttendanceTraineeListComponent;
      }();

      _NewAttendanceTraineeListComponent.ɵfac = function NewAttendanceTraineeListComponent_Factory(t) {
        return new (t || _NewAttendanceTraineeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__.ClassRoutineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
      };

      _NewAttendanceTraineeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewAttendanceTraineeListComponent,
        selectors: [["app-new-attendance"]],
        decls: 53,
        vars: 6,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [1, "cl-mrk-rmrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["mat-raised-button", "", "color", "warn", "routerLink", "/staff-collage/add-staffcollegeattendance", 1, "btn-space"], [1, "col-white"], [1, "row", "create-table", "db-tbl", "cls-rtn"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], [1, "t-n-pno-d"], ["type", "checkbox", "formControlName", "attendanceStatus"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "bnaAttendanceRemarksId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function NewAttendanceTraineeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Attendance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewAttendanceTraineeListComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Ser");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Name & Rank");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Attendance Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Attendance Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, NewAttendanceTraineeListComponent_tr_43_Template, 15, 6, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-icon", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.AttendanceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.AttendanceForm.get("traineeListForm")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.AttendanceForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption],
        styles: [""]
      });
      /***/
    },

    /***/
    11505:
    /*!***************************************************************************************************!*\
      !*** ./src/app/staff-collage/bnasubjectname/bnasubjectname-list/bnasubjectname-list.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNASubjectNameListComponent": function BNASubjectNameListComponent() {
          return (
            /* binding */
            _BNASubjectNameListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/BNASubjectName.service */
      39846);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function BNASubjectNameListComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BNASubjectNameListComponent_mat_header_cell_46_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return $event ? ctx_r24.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function BNASubjectNameListComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNASubjectNameListComponent_mat_cell_47_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function BNASubjectNameListComponent_mat_cell_47_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var row_r26 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return $event ? ctx_r28.selection.toggle(row_r26) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r26 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r26))("ngClass", "tbl-checkbox");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r31 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r5.paging.pageIndex - 1) * ctx_r5.paging.pageSize + i_r31 + 1, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r32.subjectName, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r33.qExamTime, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r34.subjectType, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r35.totalMark, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pass Mark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r36.passMarkBna, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Result Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r37.resultStatusId, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNASubjectNameListComponent_mat_cell_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r38.remarks, " ");
        }
      }

      function BNASubjectNameListComponent_mat_header_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/update-bnasubjectname", a1];
      };

      function BNASubjectNameListComponent_mat_cell_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNASubjectNameListComponent_mat_cell_74_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function BNASubjectNameListComponent_mat_cell_74_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);

            var row_r39 = restoredCtx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r42.deleteItem(row_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r39.bnaSubjectNameId));
        }
      }

      function BNASubjectNameListComponent_mat_header_row_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BNASubjectNameListComponent_mat_row_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _BNASubjectNameListComponent = /*#__PURE__*/function () {
        function _BNASubjectNameListComponent(snackBar, BNASubjectNameService, router, confirmService) {
          _classCallCheck(this, _BNASubjectNameListComponent);

          this.snackBar = snackBar;
          this.BNASubjectNameService = BNASubjectNameService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.status = 1;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'subjectName', 'subjectType', 'totalMark', 'passMarkBna', 'qExamTime', 'resultStatusId', 'remarks', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_BNASubjectNameListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBNASubjectNames();
          }
        }, {
          key: "getBNASubjectNames",
          value: function getBNASubjectNames() {
            var _this22 = this;

            this.isLoading = true;
            this.BNASubjectNameService.getBNASubjectNames(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.status).subscribe(function (response) {
              _this22.dataSource.data = response.items;
              _this22.paging.length = response.totalItemsCount;
              _this22.isLoading = false;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getBNASubjectNames();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getBNASubjectNames();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this23 = this;

            var id = row.bnaSubjectNameId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This BNASubjectName Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this23.BNASubjectNameService["delete"](id).subscribe(function () {
                  _this23.getBNASubjectNames();

                  _this23.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _BNASubjectNameListComponent;
      }();

      _BNASubjectNameListComponent.ɵfac = function BNASubjectNameListComponent_Factory(t) {
        return new (t || _BNASubjectNameListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _BNASubjectNameListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BNASubjectNameListComponent,
        selectors: [["app-bnasubjectname"]],
        decls: 78,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/staff-collage/add-bnasubjectname", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "subjectName"], ["matColumnDef", "qExamTime"], ["matColumnDef", "subjectType"], ["matColumnDef", "totalMark"], ["matColumnDef", "passMarkBna"], ["matColumnDef", "resultStatusId"], ["matColumnDef", "remarks"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function BNASubjectNameListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BNA Subject Names");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "BNA Subject Names");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BNASubjectNameListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNASubjectNameListComponent_Template_button_click_32_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-table", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, BNASubjectNameListComponent_mat_header_cell_46_Template, 2, 4, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, BNASubjectNameListComponent_mat_cell_47_Template, 2, 3, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BNASubjectNameListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BNASubjectNameListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BNASubjectNameListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, BNASubjectNameListComponent_mat_cell_53_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BNASubjectNameListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BNASubjectNameListComponent_mat_cell_56_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BNASubjectNameListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, BNASubjectNameListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, BNASubjectNameListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BNASubjectNameListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BNASubjectNameListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BNASubjectNameListComponent_mat_cell_65_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](66, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BNASubjectNameListComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, BNASubjectNameListComponent_mat_cell_68_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](69, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, BNASubjectNameListComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, BNASubjectNameListComponent_mat_cell_71_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](72, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, BNASubjectNameListComponent_mat_header_cell_73_Template, 2, 0, "mat-header-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, BNASubjectNameListComponent_mat_cell_74_Template, 7, 3, "mat-cell", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, BNASubjectNameListComponent_mat_header_row_75_Template, 1, 0, "mat-header-row", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, BNASubjectNameListComponent_mat_row_76_Template, 1, 0, "mat-row", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-paginator", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function BNASubjectNameListComponent_Template_mat_paginator_page_77_listener($event) {
              return ctx.pageChanged($event);
            });

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    67135:
    /*!*************************************************************************************************!*\
      !*** ./src/app/staff-collage/bnasubjectname/new-bnasubjectname/new-bnasubjectname.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBNASubjectNameComponent": function NewBNASubjectNameComponent() {
          return (
            /* binding */
            _NewBNASubjectNameComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _basic_setup_service_CourseName_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../basic-setup/service/CourseName.service */
      37295);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/BNASubjectName.service */
      39846);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function NewBNASubjectNameComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SubjectName is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Paper No is Required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Menu Position is Required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Data Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Paper No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r20.paperNo, " ");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r21.subjectName, " ");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Total Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.totalMark, " ");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r23.passMarkBna, " ");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Menu Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r24.menuPosition, " ");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/update-bnasubjectname", a1];
      };

      function NewBNASubjectNameComponent_div_57_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewBNASubjectNameComponent_div_57_mat_cell_24_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function NewBNASubjectNameComponent_div_57_mat_cell_24_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var row_r25 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r28.deleteItem(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, row_r25.bnaSubjectNameId));
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_header_row_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewBNASubjectNameComponent_div_57_mat_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewBNASubjectNameComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Subject Name List");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NewBNASubjectNameComponent_div_57_div_4_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-table", 37, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewBNASubjectNameComponent_div_57_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, NewBNASubjectNameComponent_div_57_mat_cell_9_Template, 2, 1, "mat-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, NewBNASubjectNameComponent_div_57_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NewBNASubjectNameComponent_div_57_mat_cell_12_Template, 2, 1, "mat-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NewBNASubjectNameComponent_div_57_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NewBNASubjectNameComponent_div_57_mat_cell_15_Template, 2, 1, "mat-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, NewBNASubjectNameComponent_div_57_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, NewBNASubjectNameComponent_div_57_mat_cell_18_Template, 2, 1, "mat-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, NewBNASubjectNameComponent_div_57_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, NewBNASubjectNameComponent_div_57_mat_cell_21_Template, 2, 1, "mat-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, NewBNASubjectNameComponent_div_57_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NewBNASubjectNameComponent_div_57_mat_cell_24_Template, 7, 3, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, NewBNASubjectNameComponent_div_57_mat_header_row_25_Template, 1, 0, "mat-header-row", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NewBNASubjectNameComponent_div_57_mat_row_26_Template, 1, 0, "mat-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isNoDataFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r3.subjectNameList);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
        }
      }

      var _NewBNASubjectNameComponent = /*#__PURE__*/function () {
        function _NewBNASubjectNameComponent(snackBar, CourseNameService, confirmService, CodeValueService, BNASubjectNameService, fb, router, route) {
          _classCallCheck(this, _NewBNASubjectNameComponent);

          this.snackBar = snackBar;
          this.CourseNameService = CourseNameService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BNASubjectNameService = BNASubjectNameService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.status = 1;
          this.isShown = false;
          this.options = [];
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['paperNo', 'subjectName', 'totalMark', 'passMarkBna', 'menuPosition', 'actions'];
        }

        _createClass(_NewBNASubjectNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            var id = this.route.snapshot.paramMap.get('bnaSubjectNameId');

            if (id) {
              this.pageTitle = 'Edit Subject Name';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNASubjectNameService.find(+id).subscribe(function (res) {
                _this24.BNASubjectNameForm.patchValue({
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  //bnaSemesterId: res.bnaSemesterId,
                  courseModuleId: res.courseModuleId,
                  subjectCategoryId: res.subjectCategoryId,
                  bnaSubjectCurriculumId: res.bnaSubjectCurriculumId,
                  courseNameId: res.courseNameId,
                  courseTypeId: res.courseTypeId,
                  branchId: res.branchId,
                  resultStatusId: res.resultStatusId,
                  subjectTypeId: res.subjectTypeId,
                  kindOfSubjectId: res.kindOfSubjectId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  subjectClassificationId: res.subjectClassificationId,
                  subjectName: res.subjectName,
                  subjectNameBangla: res.subjectNameBangla,
                  subjectShortName: res.subjectShortName,
                  subjectCode: res.subjectCode,
                  totalMark: res.totalMark,
                  passMarkBna: res.passMarkBna,
                  passMarkBup: res.passMarkBup,
                  classTestMark: res.classTestMark,
                  assignmentMark: res.assignmentMark,
                  caseStudyMark: res.caseStudyMark,
                  totalPeriod: res.totalPeriod,
                  qExamTime: res.qExamTime,
                  paperNo: res.paperNo,
                  isActive: res.isActive,
                  remarks: res.remarks,
                  menuPosition: res.menuPosition,
                  course: res.courseName
                }); //this.courseNameId = res.courseNameId;

              });
            } else {
              this.pageTitle = 'Create Subject Name';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.getSelectedBranch();
            this.getSelectedCourseName(); //this.getSelectedSubjectType();
            //this.getSelectedResultStatus();
            //this.getSelectedRank();
            //this.getSelectedModule();

            this.intitializeForm();
            this.onBranchSelectionChange();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BNASubjectNameForm = this.fb.group({
              bnaSubjectNameId: [0],
              //bnaSemesterId: [''],
              courseModuleId: [''],
              subjectCategoryId: [''],
              bnaSubjectCurriculumId: [''],
              courseNameId: [1251],
              course: [''],
              courseTypeId: [],
              branchId: [],
              resultStatusId: [''],
              subjectTypeId: [''],
              kindOfSubjectId: [''],
              baseSchoolNameId: [''],
              subjectClassificationId: [''],
              subjectName: [''],
              subjectNameBangla: [''],
              subjectShortName: [''],
              subjectCode: [''],
              totalMark: [''],
              passMarkBna: [''],
              passMarkBup: [''],
              classTestMark: [''],
              assignmentMark: [''],
              caseStudyMark: [''],
              totalPeriod: [''],
              qExamTime: [''],
              status: [this.status],
              remarks: [''],
              paperNo: [''],
              menuPosition: [],
              isActive: [true]
            });
          }
        }, {
          key: "getSelectedBranch",
          value: function getSelectedBranch() {
            var _this25 = this;

            this.BNASubjectNameService.getSelectedBranch().subscribe(function (res) {
              _this25.selectedBranch = res;
            });
          }
        }, {
          key: "getSelectedCourseName",
          value: function getSelectedCourseName() {
            var _this26 = this;

            this.BNASubjectNameService.getSelectedCourseName().subscribe(function (res) {
              _this26.selectedCourseName = res;
            });
          }
        }, {
          key: "onBranchSelectionChange",
          value: function onBranchSelectionChange() {
            var _this27 = this;

            this.isShown = true;
            this.BNASubjectNameService.getselectedSubjectNameByBranchId().subscribe(function (res) {
              _this27.subjectNameList = res;
              console.log(_this27.subjectNameList);
            });
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this28 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this28.router.navigate([currentUrl]);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this29 = this;

            var id = this.BNASubjectNameForm.get('bnaSubjectNameId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This Item?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this29.BNASubjectNameService.update(+id, _this29.BNASubjectNameForm.value).subscribe(function (response) {
                    _this29.router.navigateByUrl('/staff-collage/add-bnasubjectname');

                    _this29.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this29.validationErrors = error;
                  });
                }
              });
            } else {
              this.BNASubjectNameService.submit(this.BNASubjectNameForm.value).subscribe(function (response) {
                //this.router.navigateByUrl('/staff-collage/add-bnasubjectname');
                _this29.reloadCurrentRoute();

                _this29.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this29.validationErrors = error;
              });
            }
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this30 = this;

            var id = row.bnaSubjectNameId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item?').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this30.BNASubjectNameService["delete"](id).subscribe(function () {
                  //this.onModuleSelectionChangeGetsubjectList();
                  _this30.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _NewBNASubjectNameComponent;
      }();

      _NewBNASubjectNameComponent.ɵfac = function NewBNASubjectNameComponent_Factory(t) {
        return new (t || _NewBNASubjectNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_basic_setup_service_CourseName_service__WEBPACK_IMPORTED_MODULE_1__.CourseNameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_4__.BNASubjectNameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
      };

      _NewBNASubjectNameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewBNASubjectNameComponent,
        selectors: [["app-edit-bnasubjectname"]],
        decls: 58,
        vars: 9,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-3", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "subjectName", "required", ""], [4, "ngIf"], [1, "col-xl-2", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "totalMark"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "passMarkBna"], ["matInput", "", "formControlName", "paperNo", "required", ""], ["matInput", "", "formControlName", "menuPosition", "required", ""], [1, "col-xl-1", "col-lg-2", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", "routerLink", "/staff-collage/add-bnasubjectname"], ["class", "row create-table db-tbl cls-rtn", 4, "ngIf"], [1, "row", "create-table", "db-tbl", "cls-rtn"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "paperNo"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "subjectName"], ["matColumnDef", "totalMark"], ["matColumnDef", "passMarkBna"], ["matColumnDef", "menuPosition"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewBNASubjectNameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NewBNASubjectNameComponent_Template_form_ngSubmit_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, NewBNASubjectNameComponent_mat_error_30_Template, 2, 0, "mat-error", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Total Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Pass Mark ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Paper No");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, NewBNASubjectNameComponent_mat_error_46_Template, 2, 0, "mat-error", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Menu Position");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, NewBNASubjectNameComponent_mat_error_52_Template, 2, 0, "mat-error", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, NewBNASubjectNameComponent_div_57_Template, 27, 4, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.BNASubjectNameForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNASubjectNameForm.get("subjectName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNASubjectNameForm.get("paperNo").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNASubjectNameForm.get("menuPosition").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.BNASubjectNameForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    77743:
    /*!*******************************************************************************************!*\
      !*** ./src/app/staff-collage/classroutine/new-classroutine/new-classroutine.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewClassRoutineComponent": function NewClassRoutineComponent() {
          return (
            /* binding */
            _NewClassRoutineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _central_exam_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../central-exam/service/BNASubjectName.service */
      15018);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _routine_management_service_classperiod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../routine-management/service/classperiod.service */
      80438);
      /* harmony import */


      var _src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../routine-management/service/classroutine.service */
      60616);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function NewClassRoutineComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewClassRoutineComponent_mat_option_31_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r21.onCourseNameSelectionChangeGetSubjectList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r20.text, " ");
        }
      }

      function NewClassRoutineComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Course Title is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewClassRoutineComponent_mat_option_40_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r24.onSubjectNameSelectionChangeGet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r23.text, " ");
        }
      }

      function NewClassRoutineComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Base Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_header_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r27 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r8.paging.pageIndex - 1) * ctx_r8.paging.pageSize + i_r27 + 1, " ");
        }
      }

      function NewClassRoutineComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r28.bnaSubjectName, " ");
        }
      }

      function NewClassRoutineComponent_mat_header_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, element_r29.date, "fullDate"), " ");
        }
      }

      function NewClassRoutineComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Time Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewClassRoutineComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r30.timeDuration, " ");
        }
      }

      function NewClassRoutineComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/update-staffcollageroutine", a1];
      };

      function NewClassRoutineComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewClassRoutineComponent_mat_cell_79_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function NewClassRoutineComponent_mat_cell_79_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r34.deleteItem(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, row_r31.classRoutineId));
        }
      }

      function NewClassRoutineComponent_mat_header_row_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewClassRoutineComponent_mat_row_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewClassRoutineComponent_div_82_ng_container_2_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](col_r41);
        }
      }

      function NewClassRoutineComponent_div_82_ng_container_2_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r45 = ctx.$implicit;

          var col_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r45[col_r41], " ");
        }
      }

      function NewClassRoutineComponent_div_82_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NewClassRoutineComponent_div_82_ng_container_2_th_1_Template, 4, 1, "th", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NewClassRoutineComponent_div_82_ng_container_2_td_2_Template, 2, 1, "td", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var col_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matColumnDef", col_r41);
        }
      }

      function NewClassRoutineComponent_div_82_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 71);
        }
      }

      function NewClassRoutineComponent_div_82_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 72);
        }
      }

      function NewClassRoutineComponent_div_82_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Instructor List");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1, a2, a3, a4) {
        return ["/routine-management/edit-weeklyroutine", a1, a2, a3, a4];
      };

      function NewClassRoutineComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NewClassRoutineComponent_div_82_ng_container_2_Template, 3, 1, "ng-container", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NewClassRoutineComponent_div_82_tr_3_Template, 1, 0, "tr", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, NewClassRoutineComponent_div_82_tr_4_Template, 1, 0, "tr", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NewClassRoutineComponent_div_82_div_10_Template, 8, 0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r19.selectedRoutineByParametersAndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r19.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r19.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r19.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](6, _c1, ctx_r19.schoolId, ctx_r19.durationId, ctx_r19.courseId, ctx_r19.weekId));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.isShown);
        }
      }

      var _NewClassRoutineComponent = /*#__PURE__*/function () {
        function _NewClassRoutineComponent(snackBar, subjectNameService, BNAExamMarkService, ClassPeriodService, confirmService, CodeValueService, ClassRoutineService, fb, router, route) {
          _classCallCheck(this, _NewClassRoutineComponent);

          this.snackBar = snackBar;
          this.subjectNameService = subjectNameService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.ClassPeriodService = ClassPeriodService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.ClassRoutineService = ClassRoutineService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'bnaSubjectName', 'date', 'timeDuration', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
          this.isShown = false;
        }

        _createClass(_NewClassRoutineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            var id = this.route.snapshot.paramMap.get('classRoutineId');

            if (id) {
              this.pageTitle = 'Edit Class Routine';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.ClassRoutineService.find(+id).subscribe(function (res) {
                _this31.ClassRoutineForm.patchValue({
                  classRoutineId: res.classRoutineId,
                  courseModuleId: res.courseModuleId,
                  courseNameId: res.courseNameId,
                  classPeriodId: res.classPeriodId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseDurationId: res.courseDurationId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  courseWeekId: res.courseWeekId,
                  classTypeId: res.classTypeId,
                  timeDuration: res.timeDuration,
                  date: res.date,
                  classLocation: res.classLocation,
                  isApproved: res.isApproved,
                  approvedDate: res.approvedDate,
                  approvedBy: res.approvedBy,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });

                var editArr = [res.courseDurationId, res.courseNameId, res.baseSchoolNameId];
              });
            } else {
              this.pageTitle = 'Create Class Routine';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedclasstype();
            this.getselectedcoursename();
            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.ClassRoutineForm = this.fb.group({
              classRoutineId: [0],
              courseModuleId: [],
              courseName: [''],
              courseNameId: [this.masterData.courseName.StaffCollage],
              classPeriodId: [''],
              baseSchoolNameId: [''],
              courseDurationId: [],
              subjectName: [''],
              timeDuration: [''],
              bnaSubjectNameId: [],
              courseWeekId: [],
              examMarkComplete: [0],
              classTypeId: [this.masterData.classType.Exam],
              classCountPeriod: [],
              subjectCountPeriod: [],
              date: [],
              classLocation: [''],
              isApproved: [true],
              approvedDate: [],
              approvedBy: [],
              status: [1],
              isActive: [true]
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectList",
          value: function onCourseNameSelectionChangeGetSubjectList(dropdown) {
            var _this32 = this;

            if (dropdown.isUserInput) {
              var courseNameArr = dropdown.source.value.split('_');
              this.courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              this.ClassRoutineForm.get('courseNameId').setValue(courseNameId);
              this.ClassRoutineForm.get('courseDurationId').setValue(this.courseDurationId);
              this.subjectNameService.getSelectedSubjectNameByCourseNameId(courseNameId).subscribe(function (res) {
                _this32.selectedSubjectNameByCourseNameId = res;
              });
              this.getClassRoutineList();
            }
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
          }
        }, {
          key: "onSubjectNameSelectionChangeGet",
          value: function onSubjectNameSelectionChangeGet(dropdown) {
            var bnaSubjectNameId = dropdown.source.value.value;
            this.ClassRoutineForm.get('subjectName').setValue(bnaSubjectNameId);
            this.ClassRoutineForm.get('bnaSubjectNameId').setValue(bnaSubjectNameId);
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this33 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(_src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              _this33.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "getClassRoutineList",
          value: function getClassRoutineList() {
            var _this34 = this;

            this.isLoading = true;
            this.ClassRoutineService.getClassRoutinesByCourseDurationId(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.courseDurationId).subscribe(function (response) {
              _this34.dataSource.data = response.items;
              _this34.paging.length = response.totalItemsCount;
              _this34.isLoading = false;
              console.log("Subject name");
              console.log(_this34.dataSource.data);
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this35 = this;

            this.ClassRoutineService.getselectedcoursename().subscribe(function (res) {
              _this35.selectedcoursename = res;
            });
          }
        }, {
          key: "getselectedclasstype",
          value: function getselectedclasstype() {
            var _this36 = this;

            this.ClassRoutineService.getselectedclasstype().subscribe(function (res) {
              _this36.selectedclasstype = res;
            });
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this37 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this37.router.navigate([currentUrl]);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this38 = this;

            var id = this.ClassRoutineForm.get('classRoutineId').value;
            console.log(this.ClassRoutineForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this38.ClassRoutineService.update(+id, _this38.ClassRoutineForm.value).subscribe(function (response) {
                    _this38.reloadCurrentRoute();

                    _this38.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this38.validationErrors = error;
                  });
                }
              });
            } else {
              this.ClassRoutineService.submit(this.ClassRoutineForm.value).subscribe(function (response) {
                _this38.reloadCurrentRoute();

                _this38.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this38.validationErrors = error;
              });
            }

            console.log("after save");
            console.log(this.ClassRoutineForm.value);
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this39 = this;

            var id = row.classRoutineId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this39.ClassRoutineService["delete"](id).subscribe(function () {
                  _this39.getClassRoutineList();

                  _this39.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _NewClassRoutineComponent;
      }();

      _NewClassRoutineComponent.ɵfac = function NewClassRoutineComponent_Factory(t) {
        return new (t || _NewClassRoutineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_central_exam_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_2__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_routine_management_service_classperiod_service__WEBPACK_IMPORTED_MODULE_3__.ClassPeriodService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_6__.ClassRoutineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
      };

      _NewClassRoutineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewClassRoutineComponent,
        selectors: [["app-new-classroutine"]],
        decls: 83,
        vars: 16,
        consts: [[1, "content", "routine-entry"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "form-border-design", 3, "formGroup", "ngSubmit"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName"], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "subjectName"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["matInput", "", "formControlName", "timeDuration", "required", ""], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-12", "mb-2", "m-t-10"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [1, "row", "create-table", "db-tbl", "cls-rtn"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaSubjectName"], ["matColumnDef", "date"], ["matColumnDef", "timeDuration"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "row load-routine create-table db-tbl cls-rtn", 4, "ngIf"], [3, "value", "onSelectionChange"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], [1, "row", "load-routine", "create-table", "db-tbl", "cls-rtn"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", "dynamic-tbl-forroutine", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "div-class", "div-left", "m-t-20"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["class", "col-xs-6 col-sm-12 col-md-6 col-lg-6 mt-3 routine", 4, "ngIf"], [3, "matColumnDef"], ["class", "rotate", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", 1, "rotate"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "col-xs-6", "col-sm-12", "col-md-6", "col-lg-6", "mt-3", "routine"], [1, "row", "dash-cd-m-0"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "div-class", "div-left"]],
        template: function NewClassRoutineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Class Routine");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewClassRoutineComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Course Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, NewClassRoutineComponent_mat_option_31_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, NewClassRoutineComponent_mat_error_32_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, NewClassRoutineComponent_mat_option_40_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, NewClassRoutineComponent_mat_error_41_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "mat-datepicker-toggle", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "mat-datepicker", null, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Time Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, NewClassRoutineComponent_mat_error_55_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "h3", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Routine List");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-table", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, NewClassRoutineComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, NewClassRoutineComponent_mat_cell_67_Template, 2, 1, "mat-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, NewClassRoutineComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, NewClassRoutineComponent_mat_cell_70_Template, 2, 1, "mat-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, NewClassRoutineComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, NewClassRoutineComponent_mat_cell_73_Template, 3, 4, "mat-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, NewClassRoutineComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, NewClassRoutineComponent_mat_cell_76_Template, 2, 1, "mat-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](77, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, NewClassRoutineComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, NewClassRoutineComponent_mat_cell_79_Template, 7, 3, "mat-cell", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, NewClassRoutineComponent_mat_header_row_80_Template, 1, 0, "mat-header-row", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, NewClassRoutineComponent_mat_row_81_Template, 1, 0, "mat-row", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, NewClassRoutineComponent_div_82_Template, 11, 11, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.ClassRoutineForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedCourseDurationByCourseTypeAndCourseName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ClassRoutineForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ClassRoutineForm.get("subjectName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ClassRoutineForm.get("timeDuration").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.ClassRoutineForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    74057:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/staff-collage/courseinstructor/new-courseinstructor/new-courseinstructor.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewCourseInstructorComponent": function NewCourseInstructorComponent() {
          return (
            /* binding */
            _NewCourseInstructorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_central_exam_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/central-exam/service/BNASubjectName.service */
      15018);
      /* harmony import */


      var src_app_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _subject_management_service_courseinstructor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../subject-management/service/courseinstructor.service */
      12260);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function NewCourseInstructorComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewCourseInstructorComponent_mat_option_31_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r7.onCourseNameSelectionChangeGetSubjectList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r6.text, " ");
        }
      }

      function NewCourseInstructorComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Course Title is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r9.text, " ");
        }
      }

      function NewCourseInstructorComponent_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewCourseInstructorComponent_mat_option_48_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);

            var item_r10 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.onTraineeSelectionChanged(item_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r10.text, " ");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r27 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r15.paging.pageIndex - 1) * ctx_r15.paging.pageSize + i_r27 + 1, " ");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " BNA Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r28.bnaSubjectName, " ");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Instructor");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", element_r29.traineeRank, " ", element_r29.trainee, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(P No ", element_r29.traineePno, ")");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewCourseInstructorComponent_div_53_mat_cell_17_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);

            var element_r30 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r31.stopCourseInstructor(element_r30);
          })("click", function NewCourseInstructorComponent_div_53_mat_cell_17_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", element_r30.status == 0 ? "Running" : "Stop", " ");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/update-subjectinstructor", a1];
      };

      function NewCourseInstructorComponent_div_53_mat_cell_20_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, row_r34.courseInstructorId));
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_20_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewCourseInstructorComponent_div_53_mat_cell_20_button_2_Template_button_click_0_listener($event) {
            return $event.stopPropagation();
          })("click", function NewCourseInstructorComponent_div_53_mat_cell_20_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);

            var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r40.deleteItem(row_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewCourseInstructorComponent_div_53_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NewCourseInstructorComponent_div_53_mat_cell_20_button_1_Template, 3, 3, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NewCourseInstructorComponent_div_53_mat_cell_20_button_2_Template, 3, 0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r34.status == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r34.status == 0);
        }
      }

      function NewCourseInstructorComponent_div_53_mat_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewCourseInstructorComponent_div_53_mat_row_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewCourseInstructorComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "INSTRUCTORS LIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-table", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](6, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewCourseInstructorComponent_div_53_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NewCourseInstructorComponent_div_53_mat_cell_8_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](9, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NewCourseInstructorComponent_div_53_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NewCourseInstructorComponent_div_53_mat_cell_11_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](12, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NewCourseInstructorComponent_div_53_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, NewCourseInstructorComponent_div_53_mat_cell_14_Template, 4, 3, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NewCourseInstructorComponent_div_53_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NewCourseInstructorComponent_div_53_mat_cell_17_Template, 3, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, NewCourseInstructorComponent_div_53_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, NewCourseInstructorComponent_div_53_mat_cell_20_Template, 3, 2, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, NewCourseInstructorComponent_div_53_mat_header_row_21_Template, 1, 0, "mat-header-row", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, NewCourseInstructorComponent_div_53_mat_row_22_Template, 1, 0, "mat-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r5.GetInstructorByParameters);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r5.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r5.displayedColumns);
        }
      }

      var _NewCourseInstructorComponent = /*#__PURE__*/function () {
        function _NewCourseInstructorComponent(snackBar, subjectNameService, BNAExamMarkService, authService, confirmService, CodeValueService, CourseInstructorService, fb, router, route) {
          _classCallCheck(this, _NewCourseInstructorComponent);

          this.snackBar = snackBar;
          this.subjectNameService = subjectNameService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.authService = authService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.CourseInstructorService = CourseInstructorService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isShown = false;
          this.options = [];
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['ser', 'bnaSubjectName', 'trainee', 'status', 'actions'];
        }

        _createClass(_NewCourseInstructorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.role = this.authService.currentUserValue.role.trim();
            this.traineeId = this.authService.currentUserValue.traineeId.trim();
            this.branchId = this.authService.currentUserValue.branchId.trim();
            console.log(this.role, this.traineeId, this.branchId);
            var id = this.route.snapshot.paramMap.get('courseInstructorId');

            if (id) {
              this.pageTitle = 'Update Course Instructor Assign';
              this.destination = "Update";
              this.buttonText = "Update";
              this.CourseInstructorService.find(+id).subscribe(function (res) {
                _this40.CourseInstructorForm.patchValue({
                  courseInstructorId: res.courseInstructorId,
                  courseDurationId: res.courseDurationId,
                  courseNameId: res.courseNameId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseModuleId: res.courseModuleId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  traineeId: res.traineeId,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });

                console.log("Update course Instructorid");
                console.log(res);
              } //  onCourseNameSelectionChangeGetSubjectList(res.courseNameId)
              );
            } else {
              this.pageTitle = 'Course Instructor Assign';
              this.destination = "Assign";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedschools();
            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
            this.getSelectedModule();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            var _this41 = this;

            this.CourseInstructorForm = this.fb.group({
              courseInstructorId: [0],
              courseDurationId: [''],
              baseSchoolNameId: [''],
              courseModuleId: [''],
              bnaSubjectNameId: [''],
              traineeId: [''],
              courseName: [''],
              traineeName: [''],
              courseNameId: [''],
              status: [],
              isActive: [true]
            }); //autocomplete

            this.CourseInstructorForm.get('traineeName').valueChanges.subscribe(function (value) {
              _this41.getSelectedTraineeByPno(value);
            });
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this42 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              _this42.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectList",
          value: function onCourseNameSelectionChangeGetSubjectList(dropdown) {
            var _this43 = this;

            if (dropdown.isUserInput) {
              console.log(dropdown);
              var courseNameArr = dropdown.source.value.value.split('_');
              this.courseDurationId = courseNameArr[0];
              this.courseNameId = courseNameArr[1];
              console.log("CourseName Id");
              this.CourseInstructorForm.get('courseNameId').setValue(this.courseNameId);
              this.CourseInstructorForm.get('courseDurationId').setValue(this.courseDurationId);
              this.subjectNameService.getSelectedSubjectNameByCourseNameId(this.courseNameId).subscribe(function (res) {
                _this43.selectedSubjectNameByCourseNameId = res;
                console.log("jjgjjggj");
                console.log(_this43.selectedSubjectNameByCourseNameId);
              });
            }
          } //autocomplete

        }, {
          key: "getSelectedTraineeByPno",
          value: function getSelectedTraineeByPno(pno) {
            var _this44 = this;

            this.CourseInstructorService.getSelectedTraineeByPno(pno).subscribe(function (response) {
              _this44.options = response;
              _this44.filteredOptions = response;
            });
          }
        }, {
          key: "stopCourseInstructor",
          value: function stopCourseInstructor(element) {
            var _this45 = this;

            this.confirmService.confirm('Confirm Stop message', 'Are You Sure Stop This Item').subscribe(function (result) {
              if (result) {
                _this45.CourseInstructorService.stopCourseInstructor(element.courseInstructorId).subscribe(function () {
                  var bnaSubjectNameId = _this45.CourseInstructorForm.value['bnaSubjectNameId'];
                  var courseNameId = _this45.CourseInstructorForm.value['courseNameId'];
                  var courseDurationId = _this45.CourseInstructorForm.value['courseDurationId'];
                  console.log(bnaSubjectNameId + '-' + courseNameId + '-' + courseDurationId);

                  _this45.CourseInstructorService.getCourseInstructorByCourseDurationIdANdSubjectNameId(bnaSubjectNameId, courseDurationId, courseNameId).subscribe(function (res) {
                    _this45.GetInstructorByParameters = res;
                    console.log(_this45.GetInstructorByParameters);
                  });

                  _this45.snackBar.open('Information Stop Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-warning'
                  });
                });
              }
            });
          } //autocomplete

        }, {
          key: "onTraineeSelectionChanged",
          value: function onTraineeSelectionChanged(item) {
            console.log(item);
            this.CourseInstructorForm.get('traineeId').setValue(item.value);
            this.CourseInstructorForm.get('traineeName').setValue(item.text);
          }
        }, {
          key: "onBaseNameSelectionChangeGetModule",
          value: function onBaseNameSelectionChangeGetModule(dropdown) {
            var _this46 = this;

            if (dropdown.isUserInput) {
              console.log(dropdown);
              var baseSchoolNameId = this.CourseInstructorForm.value['baseSchoolNameId'];
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              this.CourseInstructorForm.get('courseName').setValue(dropdown.text);
              this.CourseInstructorForm.get('courseNameId').setValue(courseNameId);
              this.CourseInstructorForm.get('courseDurationId').setValue(courseDurationId);
              console.log("course duration" + courseDurationId);
              console.log("course name" + courseNameId);

              if (baseSchoolNameId != null && courseNameId != null) {
                this.CourseInstructorService.getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                  _this46.selectedCourseModuleByBaseSchoolAndCourseNameId = res;
                });
              }
            }
          }
        }, {
          key: "getSelectedModule",
          value: function getSelectedModule() {
            var _this47 = this;

            this.CourseInstructorService.getSelectedModule().subscribe(function (res) {
              _this47.selectedModule = res;
            });
          }
        }, {
          key: "getselectedschools",
          value: function getselectedschools() {
            var _this48 = this;

            this.CourseInstructorService.getselectedschools().subscribe(function (res) {
              _this48.selectedSchool = res;
              console.log(_this48.selectedSchool);
            });
          }
        }, {
          key: "getselectedcourseduration",
          value: function getselectedcourseduration() {
            var _this49 = this;

            this.CourseInstructorService.getselectedcourseduration().subscribe(function (res) {
              _this49.selectedcourseduration = res;
            });
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            var _this50 = this;

            var baseSchoolNameId = this.CourseInstructorForm.value['baseSchoolNameId'];
            var courseNameId = this.CourseInstructorForm.value['courseNameId'];
            var courseModuleId = this.CourseInstructorForm.value['courseModuleId'];
            this.CourseInstructorService.getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId).subscribe(function (res) {
              _this50.selectedsubjectname = res;
            });
          }
        }, {
          key: "onModuleSelectionChangeGetInstructorList",
          value: function onModuleSelectionChangeGetInstructorList() {
            var _this51 = this;

            var bnaSubjectNameId = this.CourseInstructorForm.value['bnaSubjectNameId'];
            var courseNameId = this.CourseInstructorForm.value['courseNameId'];
            var courseDurationId = this.CourseInstructorForm.value['courseDurationId'];
            console.log("Dropdown value");
            this.isShown = true;
            this.CourseInstructorService.getCourseInstructorByCourseDurationIdANdSubjectNameId(bnaSubjectNameId, courseDurationId, courseNameId).subscribe(function (res) {
              _this51.GetInstructorByParameters = res;
              console.log(_this51.GetInstructorByParameters);
            });
          }
        }, {
          key: "GetInstructorListAfterDelete",
          value: function GetInstructorListAfterDelete(baseSchoolNameId, bnaSubjectNameId, courseModuleId, courseNameId, courseDurationId) {
            var _this52 = this;

            this.isShown = true;

            if (baseSchoolNameId != null && bnaSubjectNameId != null && courseModuleId != null && courseNameId != null) {
              this.CourseInstructorService.getInstructorByParameters(baseSchoolNameId, bnaSubjectNameId, courseModuleId, courseNameId, courseDurationId).subscribe(function (res) {
                _this52.GetInstructorByParameters = res;
                console.log(_this52.GetInstructorByParameters);
              });
            }
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this53 = this;

            var id = row.courseInstructorId;
            var bnaSubjectNameId = row.bnaSubjectNameId;
            var courseNameId = row.courseNameId;
            var courseDurationId = row.courseDurationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this53.CourseInstructorService["delete"](id).subscribe(function () {
                  _this53.CourseInstructorService.getCourseInstructorByCourseDurationIdANdSubjectNameId(bnaSubjectNameId, courseDurationId, courseNameId).subscribe(function (res) {
                    _this53.GetInstructorByParameters = res;
                    console.log(_this53.GetInstructorByParameters);
                  });

                  _this53.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this54 = this;

            var id = this.CourseInstructorForm.get('courseInstructorId').value;
            this.CourseInstructorForm.get('status').setValue(0);
            console.log(this.CourseInstructorForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this54.CourseInstructorService.update(+id, _this54.CourseInstructorForm.value).subscribe(function (response) {
                    _this54.router.navigateByUrl('/staff-collage/add-subjectinstructor'); // staff-collage/update-staffcollagecourse/3149


                    _this54.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this54.validationErrors = error;
                  });
                }
              });
            } else {
              this.CourseInstructorService.submit(this.CourseInstructorForm.value).subscribe(function (response) {
                _this54.onModuleSelectionChangeGetInstructorList();

                _this54.CourseInstructorForm.reset();

                _this54.CourseInstructorForm.get('courseInstructorId').setValue(0);

                _this54.CourseInstructorForm.get('isActive').setValue(true);

                _this54.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this54.validationErrors = error;
              });
            }
          }
        }]);

        return _NewCourseInstructorComponent;
      }();

      _NewCourseInstructorComponent.ɵfac = function NewCourseInstructorComponent_Factory(t) {
        return new (t || _NewCourseInstructorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_central_exam_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_2__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_subject_management_service_courseinstructor_service__WEBPACK_IMPORTED_MODULE_6__.CourseInstructorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
      };

      _NewCourseInstructorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewCourseInstructorComponent,
        selectors: [["app-new-courseinstructor"]],
        decls: 54,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "form-border-design", 3, "formGroup", "ngSubmit"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName"], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "bnaSubjectNameId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "traineeName", "matInput", "", "type", "text", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [1, "col-xl-2", "col-lg-2", "col-md-6", "col-sm-12", "mb-2", "m-t-10"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["class", "row create-table", 4, "ngIf"], [3, "value", "onSelectionChange"], [3, "value"], [1, "row", "create-table"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaSubjectName"], ["matColumnDef", "trainee"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "t-n-pno-d"], ["mat-raised-button", "", 1, "custom-btn", "courseplan-btn", 3, "click"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", "class", "btn-tbl-edit", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "class", "btn-tbl-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewCourseInstructorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Course Instructor");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewCourseInstructorComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Course Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, NewCourseInstructorComponent_mat_option_31_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, NewCourseInstructorComponent_mat_error_32_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "BNA Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewCourseInstructorComponent_Template_mat_select_selectionChange_37_listener() {
              return ctx.onModuleSelectionChangeGetInstructorList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, NewCourseInstructorComponent_mat_option_40_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Instructor");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-autocomplete", null, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, NewCourseInstructorComponent_mat_option_48_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, NewCourseInstructorComponent_div_53_Template, 23, 3, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.CourseInstructorForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedCourseDurationByCourseTypeAndCourseName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.CourseInstructorForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.CourseInstructorForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    92716:
    /*!****************************************************************************!*\
      !*** ./src/app/staff-collage/indexno/new-indexno/new-indexno.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewIndexNoComponent": function NewIndexNoComponent() {
          return (
            /* binding */
            _NewIndexNoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../routine-management/service/classroutine.service */
      60616);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var _basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../attendance-management/service/attendance.service */
      70499);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function NewIndexNoComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewIndexNoComponent_mat_option_33_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r4.onCourseNameSelectionChangeGetSubjectList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r3.text, " ");
        }
      }

      function NewIndexNoComponent_h5_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Subject Name : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](dropdown_r6.text);
        }
      }

      function NewIndexNoComponent_div_36_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", unit_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r9 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r7.getControlLabel(i_r9, "rankPosition"), " - ", ctx_r7.getControlLabel(i_r9, "traineeName"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(P No ", ctx_r7.getControlLabel(i_r9, "traineePNo"), ")");
        }
      }

      function NewIndexNoComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "table", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Name & Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Index No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NewIndexNoComponent_div_36_tr_17_Template, 10, 5, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.AttendanceForm.get("traineeListForm")["controls"]);
        }
      }

      var _NewIndexNoComponent = /*#__PURE__*/function () {
        // displayedColumns: string[] = ['ser','traineePNo','attendanceStatus','bnaAttendanceRemarksId'];
        // dataSource ;
        function _NewIndexNoComponent(snackBar, BNAExamMarkService, classRoutineService, datepipe, confirmService, traineeNominationService, CodeValueService, AttendanceService, fb, router, route) {
          _classCallCheck(this, _NewIndexNoComponent);

          this.snackBar = snackBar;
          this.BNAExamMarkService = BNAExamMarkService;
          this.classRoutineService = classRoutineService;
          this.datepipe = datepipe;
          this.confirmService = confirmService;
          this.traineeNominationService = traineeNominationService;
          this.CodeValueService = CodeValueService;
          this.AttendanceService = AttendanceService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.myModel = true;
          this.validationErrors = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumnsRoutine = ['ser', 'bnaSubjectName', 'date', 'timeDuration', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
          this.checked = false;
          this.isShown = false;
          this.isShownForTraineeList = false;
        }

        _createClass(_NewIndexNoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this55 = this;

            // 3136
            var id = this.route.snapshot.paramMap.get('attendanceId');
            console.log(id);
            this.courseDurationId = this.route.snapshot.paramMap.get('courseDurationId');
            console.log("Course duration id");
            console.log(this.courseDurationId);

            if (id) {
              this.pageTitle = 'Edit Nomination Index';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.AttendanceService.find(+id).subscribe(function (res) {
                _this55.AttendanceForm.patchValue({
                  attendanceId: res.attendanceId,
                  classRoutineId: res.classRoutineId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseNameId: res.courseNameId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  classPeriodId: res.classPeriodId,
                  bnaAttendanceRemarksId: res.bnaAttendanceRemarksId,
                  attendanceDate: res.attendanceDate,
                  classLeaderName: res.classLeaderName,
                  attendanceStatus: res.attendanceStatus,
                  isApproved: res.isApproved,
                  approvedUser: res.approvedUser,
                  approvedDate: res.approvedDate,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Nomination Index';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm(); //  this.getselectedclassroutine();
            //  this.getselectedbaseschools();
            //  this.getselectedcoursename();
            //  this.getselectedbnasubjectname();
            //  this.getselectedclassperiod();
            //  this.getselectedbnaattendanceremark();

            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.AttendanceForm = this.fb.group({
              attendanceId: [0],
              baseSchoolNameId: [''],
              courseNameId: [''],
              courseNameIds: [''],
              courseDurationId: [''],
              classPeriodId: [''],
              attendanceDate: [],
              classLeaderName: [''],
              indexNo: [''],
              attendanceStatus: [true],
              traineeListForm: this.fb.array([this.createTraineeData()])
            });
          } // public int? CourseDurationId { get; set; }
          // public string? PresentBillet { get; set; } 
          // public int? FamilyAllowId { get; set; }

        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              courseNameId: [],
              status: [],
              traineePNo: [],
              courseDurationId: [],
              presentBillet: [],
              examCenterId: [],
              dateCreated: [],
              createdBy: [],
              traineeId: [],
              traineeName: [],
              rankPosition: [],
              indexNo: [],
              traineeNominationId: [],
              examAttemptTypeId: [],
              examTypeId: [],
              familyAllowId: [],
              traineeCourseStatusId: [],
              withdrawnDocId: [],
              withdrawnRemarks: [],
              withdrawnDate: [],
              newAtemptId: [],
              menuPosition: []
            });
          }
        }, {
          key: "getControlLabel",
          value: function getControlLabel(index, type) {
            return this.AttendanceForm.get('traineeListForm').at(index).get(type).value;
          }
        }, {
          key: "getTraineeListonClick",
          value: function getTraineeListonClick() {
            var control = this.AttendanceForm.controls["traineeListForm"];
            console.log(this.traineeList);

            for (var i = 0; i < this.traineeList.length; i++) {
              control.push(this.createTraineeData());
            }

            this.AttendanceForm.patchValue({
              traineeListForm: this.traineeList
            });
            console.log("value...");
            console.log(this.traineeList);
          }
        }, {
          key: "clearList",
          value: function clearList() {
            var control = this.AttendanceForm.controls["traineeListForm"];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectList",
          value: function onCourseNameSelectionChangeGetSubjectList(dropdown) {
            var _this56 = this;

            if (dropdown.isUserInput) {
              this.isShown = true;
              var courseNameArr = dropdown.source.value.split('_');
              this.courseDurationId = courseNameArr[0];
              this.courseNameId = courseNameArr[1];
              this.AttendanceForm.get('courseNameId').setValue(this.courseNameId);
              this.AttendanceForm.get('courseDurationId').setValue(this.courseDurationId);
              console.log("Course duration id");
              console.log(this.courseDurationId);
              this.traineeNominationService.getTestTraineeNominationByCourseDurationId(this.courseDurationId).subscribe(function (res) {
                _this56.traineeList = res;
                console.log("trainee List");
                console.log(_this56.traineeList);

                _this56.clearList();

                _this56.getTraineeListonClick();
              });
            }
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this57 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              _this57.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this58 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this58.router.navigate([currentUrl]);
            });
          } // getselectedclassroutine(){
          //   this.AttendanceService.getselectedclassroutine().subscribe(res=>{
          //     this.selectedclassroutine=res
          //   });
          // } 
          // getselectedbaseschools(){
          //   this.AttendanceService.getselectedbaseschools().subscribe(res=>{
          //     this.selectedbaseschools=res
          //   });
          // } 
          // getselectedcoursename(){
          //   this.AttendanceService.getselectedcoursename().subscribe(res=>{
          //     this.selectedcoursename=res
          //   });
          // }
          // getselectedbnasubjectname(){
          //   this.AttendanceService.getselectedbnasubjectname().subscribe(res=>{
          //     this.selectedbnasubjectname=res
          //   });
          // }
          // getselectedclassperiod(){
          //   this.AttendanceService.getselectedclassperiod().subscribe(res=>{
          //     this.selectedclassperiod=res
          //   });
          // }
          // getselectedbnaattendanceremark(){
          //   this.AttendanceService.getselectedbnaattendanceremark().subscribe(res=>{
          //     this.selectedbnaattendanceremark=res
          //   });
          // }

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this59 = this;

            //  const id = this.AttendanceForm.get('traineeNominationId').value;
            console.log(this.AttendanceForm.value); // if (id) {
            //   this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(result => {
            //     console.log(result);
            //     if (result) {
            //       this.traineeNominationService.update(+id, JSON.stringify(this.AttendanceForm.value)).subscribe(response => {
            //         this.router.navigateByUrl('/exam-management/bnaexammark-list');
            //         this.snackBar.open('Information Updated Successfully ', '', {
            //           duration: 2000,
            //           verticalPosition: 'bottom',
            //           horizontalPosition: 'right',
            //           panelClass: 'snackbar-success'
            //         });
            //       }, error => {
            //         this.validationErrors = error;
            //       })
            //     }
            //   })
            // } else {

            this.confirmService.confirm('Confirm Save message', 'Are You Sure Save This Records?').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this59.traineeNominationService.updateTraineeNominationList(_this59.AttendanceForm.value).subscribe(function (response) {
                  _this59.reloadCurrentRoute();

                  _this59.snackBar.open('Information Inserted Successfully ', '', {
                    duration: 2000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-success'
                  });
                }, function (error) {
                  _this59.validationErrors = error;
                });
              }
            });
          }
        }]);

        return _NewIndexNoComponent;
      }();

      _NewIndexNoComponent.ɵfac = function NewIndexNoComponent_Factory(t) {
        return new (t || _NewIndexNoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_2__.ClassRoutineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_4__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_attendance_management_service_attendance_service__WEBPACK_IMPORTED_MODULE_6__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
      };

      _NewIndexNoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewIndexNoComponent,
        selectors: [["app-new-indexno"]],
        decls: 41,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "form-border-design", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseNameIds"], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "cls-header", 4, "ngFor", "ngForOf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [3, "value", "onSelectionChange"], [1, "cls-header"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], [1, "t-n-pno-d"], ["matInput", "", "type", "text", "formControlName", "indexNo"]],
        template: function NewIndexNoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Nomination Index");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewIndexNoComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, NewIndexNoComponent_mat_option_33_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, NewIndexNoComponent_h5_35_Template, 4, 1, "h5", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, NewIndexNoComponent_div_36_Template, 18, 1, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.AttendanceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedCourseDurationByCourseTypeAndCourseName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.subjectNamefromClassRoutine);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.AttendanceForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor],
        styles: [""]
      });
      /***/
    },

    /***/
    801:
    /*!******************************************************************!*\
      !*** ./src/app/staff-collage/models/BNASubjectNamePagination.ts ***!
      \******************************************************************/

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
    56281:
    /*!******************************************************************!*\
      !*** ./src/app/staff-collage/models/coursedurationPagination.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseDurationPagination": function CourseDurationPagination() {
          return (
            /* binding */
            _CourseDurationPagination
          );
        }
        /* harmony export */

      });

      var _CourseDurationPagination = function _CourseDurationPagination() {
        _classCallCheck(this, _CourseDurationPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    78106:
    /*!*********************************************************************!*\
      !*** ./src/app/staff-collage/models/traineenominationPagination.ts ***!
      \*********************************************************************/

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
    4529:
    /*!**********************************************************************************!*\
      !*** ./src/app/staff-collage/qexammark/new-qexammark/new-qexammark.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewQExamMarkComponent": function NewQExamMarkComponent() {
          return (
            /* binding */
            _NewQExamMarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var _app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function NewQExamMarkComponent_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewQExamMarkComponent_mat_option_35_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.onCourseNameSelectionChangeGetSubjectAndTraineeList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r8.text, " ");
        }
      }

      function NewQExamMarkComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Course Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_mat_option_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewQExamMarkComponent_mat_option_44_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.onSubjectNameSelectionChangeGetTotalMarkAndPassMark($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r11.text, " ");
        }
      }

      function NewQExamMarkComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r14.text, " ");
        }
      }

      function NewQExamMarkComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_65_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_65_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r27 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r17.paging.pageIndex - 1) * ctx_r17.paging.pageSize + i_r27 + 1, " ");
        }
      }

      function NewQExamMarkComponent_div_65_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_65_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r28.passMark, " ");
        }
      }

      function NewQExamMarkComponent_div_65_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_65_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r29.mark, " ");
        }
      }

      function NewQExamMarkComponent_div_65_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mark Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_65_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r30.markType, " ");
        }
      }

      function NewQExamMarkComponent_div_65_mat_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewQExamMarkComponent_div_65_mat_row_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewQExamMarkComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-table", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NewQExamMarkComponent_div_65_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewQExamMarkComponent_div_65_mat_cell_5_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NewQExamMarkComponent_div_65_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewQExamMarkComponent_div_65_mat_cell_8_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, NewQExamMarkComponent_div_65_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, NewQExamMarkComponent_div_65_mat_cell_11_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NewQExamMarkComponent_div_65_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NewQExamMarkComponent_div_65_mat_cell_14_Template, 2, 1, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NewQExamMarkComponent_div_65_mat_header_row_15_Template, 1, 0, "mat-header-row", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NewQExamMarkComponent_div_65_mat_row_16_Template, 1, 0, "mat-row", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r6.subjectMarkList);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
        }
      }

      function NewQExamMarkComponent_div_66_tr_20_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewQExamMarkComponent_div_66_tr_20_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r37.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r37.text, " ");
        }
      }

      function NewQExamMarkComponent_div_66_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewQExamMarkComponent_div_66_tr_20_mat_error_8_Template, 2, 0, "mat-error", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-select", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NewQExamMarkComponent_div_66_tr_20_mat_option_14_Template, 2, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r33 = ctx.$implicit;
          var i_r34 = ctx.index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", unit_r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r34 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r32.getControlLabel(i_r34, "indexNo"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r32.BNAExamMarkForm.get("obtaintMark").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r32.selectedmarkremarks);
        }
      }

      function NewQExamMarkComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Index No");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Obtaint Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Exam Mark Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, NewQExamMarkComponent_div_66_tr_20_Template, 15, 5, "tr", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.BNAExamMarkForm.get("traineeListForm")["controls"]);
        }
      }

      var _NewQExamMarkComponent = /*#__PURE__*/function () {
        function _NewQExamMarkComponent(snackBar, traineeNominationService, confirmService, CodeValueService, BNAExamMarkService, fb, router, route) {
          _classCallCheck(this, _NewQExamMarkComponent);

          this.snackBar = snackBar;
          this.traineeNominationService = traineeNominationService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isShown = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['sl', 'markType', 'passMark', 'mark'];
          this.displayedColumnsForTraineeList = ['sl', 'traineePNo', 'traineeName', 'obtaintMark', 'examMarkRemarksId'];
        }

        _createClass(_NewQExamMarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this60 = this;

            var id = this.route.snapshot.paramMap.get('bnaExamMarkId');

            if (id) {
              this.pageTitle = 'Edit Staff College Mark';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNAExamMarkService.find(+id).subscribe(function (res) {
                _this60.BNAExamMarkForm.patchValue({
                  bnaExamMarkId: res.bnaExamMarkId,
                  bnaExamScheduleId: res.bnaExamScheduleId,
                  bnaSemesterId: res.bnaSemesterId,
                  bnaBatchId: res.bnaBatchId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseNameId: res.courseNameId,
                  examTypeId: res.examTypeId,
                  bnaCurriculamTypeId: res.bnaCurriculamTypeId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  totalMark: res.totalMark,
                  passMark: res.passMark,
                  isApproved: res.isApproved,
                  isApprovedBy: res.isApprovedBy,
                  isApprovedDate: res.isApprovedDate,
                  remarks: res.remarks,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Staff College Mark';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedbaseschools();
            this.getselectedcoursename(); //this.getSelectedMarkType();

            this.getselectedexammarkremark(); //..................................

            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BNAExamMarkForm = this.fb.group({
              bnaExamMarkId: [0],
              traineeId: [],
              bnaExamScheduleId: [],
              bnaSemesterId: [],
              courseName: [''],
              bnaBatchId: [],
              baseSchoolNameId: [],
              courseNameId: [],
              courseTypeId: [],
              SubjectMarkId: [],
              bnaCurriculamTypeId: [],
              bnaSubjectNameId: [],
              bnaSubjectName: [''],
              courseDurationId: [],
              classRoutineId: [],
              totalMark: [''],
              passMark: [''],
              obtaintMark: [],
              examTypeCount: [],
              isApproved: [false],
              isApprovedBy: [],
              isApprovedDate: [],
              remarks: [],
              traineeListForm: this.fb.array([this.createTraineeData()]),
              status: [],
              isActive: [true]
            });
          }
        }, {
          key: "getControlLabel",
          value: function getControlLabel(index, type) {
            return this.BNAExamMarkForm.get('traineeListForm').at(index).get(type).value;
          }
        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              courseNameId: [],
              status: [],
              traineePNo: [],
              traineeId: [],
              traineeName: [],
              rankPosition: [],
              indexNo: [],
              obtaintMark: [],
              examMarkRemarksId: []
            });
          }
        }, {
          key: "getTraineeListonClick",
          value: function getTraineeListonClick() {
            var control = this.BNAExamMarkForm.controls["traineeListForm"];
            console.log(this.traineeList);

            for (var i = 0; i < this.traineeList.length; i++) {
              control.push(this.createTraineeData());
              console.log("value...");
              console.log(this.traineeList);
            }

            this.BNAExamMarkForm.patchValue({
              traineeListForm: this.traineeList
            });
            console.log("value...");
            console.log(this.traineeList);
          }
        }, {
          key: "clearList",
          value: function clearList() {
            var control = this.BNAExamMarkForm.controls["traineeListForm"];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this61 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              console.log("courseName");
              _this61.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectAndTraineeList",
          value: function onCourseNameSelectionChangeGetSubjectAndTraineeList(dropdown) {
            var _this62 = this;

            if (dropdown.isUserInput) {
              // console.log(dropdown);
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseNameTextArr = dropdown.source.value.text.split('_');
              var courseName = courseNameTextArr[0];
              var coursetitle = courseNameTextArr[1];
              this.courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1]; //   console.log(courseDurationId+ ' - '+courseNameId);
              // console.log("coursename"+courseNameId);

              this.BNAExamMarkForm.get('courseName').setValue(courseName);
              this.BNAExamMarkForm.get('courseNameId').setValue(courseNameId);
              this.BNAExamMarkForm.get('courseDurationId').setValue(this.courseDurationId);
              this.isShown = false;
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              this.baseSchoolNameId = baseSchoolNameId;
              var courseNameId = this.BNAExamMarkForm.value['courseNameId']; // console.log(baseSchoolNameId +" -"+courseNameId);
              // if (baseSchoolNameId != null && courseNameId != null) {
              //   this.BNAExamMarkService.getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId).subscribe(res => {
              //     this.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId = res;
              //   });
              // }

              this.BNAExamMarkService.getSelectedSubjectNameByCourseNameId(courseNameId).subscribe(function (res) {
                _this62.selectedSubjectNameByCourseNameId = res;
              }); // console.log("staff college courseduration id");
              //  console.log(courseDurationId);
              // this.BNAExamMarkService.getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(res => {
              //   this.selectedCourseDuration = res;
              //  console.log("course duration "+this.selectedCourseDuration);
              // this.BNAExamMarkForm.get('courseDurationId').setValue(this.selectedCourseDuration);

              this.traineeNominationService.getTestTraineeNominationByCourseDurationId(this.courseDurationId).subscribe(function (res) {
                _this62.traineeList = res;
                console.log("Trainee List");
                console.log(_this62.traineeList);
              }); // });
            }
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this63 = this;

            this.BNAExamMarkService.getselectedbaseschools().subscribe(function (res) {
              _this63.selectedbaseschools = res; // console.log(this.selectedbaseschools);
            });
          }
        }, {
          key: "getselectedexammarkremark",
          value: function getselectedexammarkremark() {
            var _this64 = this;

            this.BNAExamMarkService.getselectedexammarkremark().subscribe(function (res) {
              _this64.selectedmarkremarks = res; // console.log(this.selectedbaseschools);
            });
          }
        }, {
          key: "onSubjectNameSelectionChangeGetTotalMarkAndPassMark",
          value: function onSubjectNameSelectionChangeGetTotalMarkAndPassMark(dropdown) {
            var _this65 = this;

            if (dropdown.isUserInput) {
              //console.log(dropdown);
              this.isShown = true;
              var subjectNameId = dropdown.source.value.value;
              var subjectName = dropdown.source.value.text;
              console.log("dropdown");
              console.log(dropdown);
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              var courseNameId = this.BNAExamMarkForm.value['courseNameId']; //this.bnaSubjectNameId = dropdown.source.value.value;

              this.bnaSubjectNameId = subjectNameId; //var courseModuleId = subjectArr[1]; GetSubjectMarkByCourseNameIdSubjectNameId

              this.BNAExamMarkForm.get('bnaSubjectName').setValue(subjectName);
              this.BNAExamMarkForm.get('bnaSubjectNameId').setValue(this.bnaSubjectNameId);
              this.clearList();
              this.getTraineeListonClick(); // this.BNAExamMarkService.GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(res => {
              //   console.log("ddddddddddddd");
              //   this.subjectMarkList = res;
              //   console.log(this.subjectMarkList);
              // });

              this.BNAExamMarkService.GetSubjectMarkByCourseNameIdSubjectNameId(courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this65.subjectMarkList = res;
                console.log(_this65.subjectMarkList);

                _this65.BNAExamMarkForm.get('classRoutineId').setValue(3447);
              });
              this.BNAExamMarkService.getClassRoutineIdForStaffCollege(this.courseDurationId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this65.classRoutineId = res;
                console.log("ddddddddddddd");
                console.log(_this65.classRoutineId);

                _this65.BNAExamMarkForm.get('classRoutineId').setValue(_this65.classRoutineId);
              }); // getClassRoutineIdForStaffCollege
              // this.BNAExamMarkService.getselectedmarktypes(baseSchoolNameId, courseNameId, this.bnaSubjectNameId, 5).subscribe(res => {
              //   this.selectedmarktype = res
              //   this.examTypeCount = res.length;
              //   this.BNAExamMarkForm.get('examTypeCount').setValue(this.examTypeCount);
              //   console.log("selectedmarktype count" + this.examTypeCount)
              // });

              this.BNAExamMarkService.getselectedmarktypesByCourseNameIdAndSubjectNameId(courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this65.selectedmarktype = res;
                _this65.examTypeCount = res.length;

                _this65.BNAExamMarkForm.get('examTypeCount').setValue(_this65.examTypeCount);

                console.log("selectedmarktype count" + _this65.examTypeCount);
              }); // GetTotalMarkAndPassMarkByCourseNameIdAndSubjectId

              this.BNAExamMarkService.GetTotalMarkAndPassMarkByCourseNameIdAndSubjectId(courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this65.getTotalMarkAndPassMark = res;
                _this65.totalMark = res[0].totalMark;
                _this65.passMarkBna = res[0].passMarkBNA;

                _this65.BNAExamMarkForm.get('totalMark').setValue(_this65.totalMark);

                _this65.BNAExamMarkForm.get('passMark').setValue(_this65.passMarkBna);
              });
            } //   this.BNAExamMarkService.GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(res => {
            //     this.getTotalMarkAndPassMark = res;
            //     this.totalMark = res[0].totalMark;
            //     this.passMarkBna = res[0].passMarkBNA
            //     this.BNAExamMarkForm.get('totalMark').setValue(this.totalMark);
            //     this.BNAExamMarkForm.get('passMark').setValue(this.passMarkBna);
            //   });
            // }

          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this66 = this;

            var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
            this.isShown = false; //console.log(baseSchoolNameId);

            this.BNAExamMarkService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              console.log("check name");
              _this66.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this67 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this67.router.navigate([currentUrl]);
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this68 = this;

            this.BNAExamMarkService.getselectedcoursename().subscribe(function (res) {
              _this68.selectedcoursename = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this69 = this;

            var id = this.BNAExamMarkForm.get('bnaExamMarkId').value;
            console.log(this.BNAExamMarkForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this69.BNAExamMarkService.update(+id, JSON.stringify(_this69.BNAExamMarkForm.value)).subscribe(function (response) {
                    _this69.router.navigateByUrl('/exam-management/bnaexammark-list');

                    _this69.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this69.validationErrors = error;
                  });
                }
              });
            } else {
              this.confirmService.confirm('Confirm Save message', 'Are You Sure Save This Records?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this69.BNAExamMarkService.submit(JSON.stringify(_this69.BNAExamMarkForm.value)).subscribe(function (response) {
                    _this69.BNAExamMarkForm.reset();

                    _this69.isShown = false;

                    _this69.BNAExamMarkForm.get('bnaExamMarkId').setValue(0);

                    _this69.BNAExamMarkForm.get('isActive').setValue(true);

                    _this69.BNAExamMarkForm.get('isApproved').setValue(true);

                    _this69.snackBar.open('Information Inserted Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this69.validationErrors = error;
                  });
                }
              });
            }
          }
        }]);

        return _NewQExamMarkComponent;
      }();

      _NewQExamMarkComponent.ɵfac = function NewQExamMarkComponent_Factory(t) {
        return new (t || _NewQExamMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
      };

      _NewQExamMarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewQExamMarkComponent,
        selectors: [["app-new-qexammark"]],
        decls: 71,
        vars: 15,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "exam-mark"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], [1, "row", "left-row"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName", "required", ""], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "bnaSubjectName", "required", ""], ["formControlName", "SubjectMarkId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "right-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["class", "container col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 mt-2 sticky-table ex-mrk-li", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "mt-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [3, "value", "onSelectionChange"], [3, "value"], [1, "container", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "mt-2", "sticky-table", "ex-mrk-li"], ["matSort", "", 1, "mat-cell", "ex-mrk-lft-tbl", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "passMark"], ["matColumnDef", "mark"], ["matColumnDef", "markType"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [1, "cl-mrk-rmrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], ["matInput", "", "type", "text", "formControlName", "obtaintMark", "required", ""], ["formControlName", "examMarkRemarksId"], ["value", ""]],
        template: function NewQExamMarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Create Staff College Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NewQExamMarkComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, NewQExamMarkComponent_mat_option_35_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, NewQExamMarkComponent_mat_error_36_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, NewQExamMarkComponent_mat_option_44_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, NewQExamMarkComponent_mat_error_45_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Mark Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, NewQExamMarkComponent_mat_option_53_Template, 2, 2, "mat-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, NewQExamMarkComponent_mat_error_54_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, NewQExamMarkComponent_div_65_Template, 17, 3, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, NewQExamMarkComponent_div_66_Template, 21, 1, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.BNAExamMarkForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedCourseDurationByCourseTypeAndCourseName);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("bnaSubjectName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedmarktype);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("SubjectMarkId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Mark : ", ctx.totalMark, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Pass Mark : ", ctx.passMarkBna, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.BNAExamMarkForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor],
        styles: [""]
      });
      /***/
    },

    /***/
    39846:
    /*!*****************************************************************!*\
      !*** ./src/app/staff-collage/service/BNASubjectName.service.ts ***!
      \*****************************************************************/

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
      801);
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
          key: "getSelectedCourseName",
          value: function getSelectedCourseName() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByCourseTypeId');
          }
        }, {
          key: "getselectedSubjectNameByBranchId",
          value: function getselectedSubjectNameByBranchId() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByCourseNameId');
          } // getselectedSubjectName(){
          //   return this.http.get<BNASubjectName[]>(this.baseUrl + '/bna-subject-name/get-bnaSubjectNameListByCourseNameId')
          // }

        }, {
          key: "getSelectedBranch",
          value: function getSelectedBranch() {
            return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
          }
        }, {
          key: "getBNASubjectNames",
          value: function getBNASubjectNames(pageNumber, pageSize, searchText, status) {
            var _this70 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('status', status.toString());
            return this.http.get(this.baseUrl + '/bna-subject-name/get-bnaSubjectNames', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this70.BNASubjectNames = [].concat(_toConsumableArray(_this70.BNASubjectNames), _toConsumableArray(response.body.items));
              _this70.BNASubjectNamePagination = response.body;
              return _this70.BNASubjectNamePagination;
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
    40405:
    /*!*****************************************************************!*\
      !*** ./src/app/staff-collage/service/courseduration.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CourseDurationService": function CourseDurationService() {
          return (
            /* binding */
            _CourseDurationService
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


      var _models_coursedurationPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/coursedurationPagination */
      56281);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CourseDurationService = /*#__PURE__*/function () {
        function _CourseDurationService(http) {
          _classCallCheck(this, _CourseDurationService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.CourseDurations = [];
          this.CourseDurationPagination = new _models_coursedurationPagination__WEBPACK_IMPORTED_MODULE_1__.CourseDurationPagination();
        } // getSelectedBaseName(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/base-name/get-selectedBases');
        // }
        // getSchoolByBaseId(id:number){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/base-School-name/get-selectedBaseSchoolByBase?baseNameId=' + id);
        // }
        // getCourseByType(id:string){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-name/get-selectedCourseByType?courseTypeId=' + id);
        // }
        // getselectedcoursename(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-name/get-selectedCourseNames')
        // }
        // getselectedbaseschools(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/base-School-name/get-selectedSchools')
        // }
        // getselectedcountry(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/country/get-selectedCountries')
        // }
        // getselectedexamtype(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/exam-type/get-selectedExamType')
        // }
        // getselectedcoursetype(){
        //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-type/get-selectedCourseTypes')
        // }


        _createClass(_CourseDurationService, [{
          key: "getselectedFiscalYear",
          value: function getselectedFiscalYear() {
            return this.http.get(this.baseUrl + '/fiscal-year/get-selectedFiscalYear');
          }
        }, {
          key: "stopCentralExam",
          value: function stopCentralExam(courseDurationId) {
            return this.http.get(this.baseUrl + '/course-duration/stop-interService/' + courseDurationId);
          } // stopNotices(noticeId){
          //   return this.http.get<Notice[]>(this.baseUrl + '/notice/stop-notices/'+noticeId)
          // }

        }, {
          key: "getCourseDurationsByCourseType",
          value: function getCourseDurationsByCourseType(pageNumber, pageSize, searchText, courseTypeId) {
            var _this71 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseTypeId', courseTypeId.toString());
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurationByCourseNameId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this71.CourseDurations = [].concat(_toConsumableArray(_this71.CourseDurations), _toConsumableArray(response.body.items));
              _this71.CourseDurationPagination = response.body;
              return _this71.CourseDurationPagination;
            }));
          }
        }, {
          key: "getCourseDurations",
          value: function getCourseDurations(pageNumber, pageSize, searchText) {
            var _this72 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this72.CourseDurations = [].concat(_toConsumableArray(_this72.CourseDurations), _toConsumableArray(response.body.items));
              _this72.CourseDurationPagination = response.body;
              return _this72.CourseDurationPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurationDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/course-duration/update-courseDuration/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/course-duration/save-courseDuration', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (CourseDuration) {
              if (CourseDuration) {
                console.log(CourseDuration);
                return CourseDuration;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/course-duration/delete-courseDuration/' + id);
          }
        }]);

        return _CourseDurationService;
      }();

      _CourseDurationService.ɵfac = function CourseDurationService_Factory(t) {
        return new (t || _CourseDurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CourseDurationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CourseDurationService,
        factory: _CourseDurationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    72198:
    /*!********************************************************************!*\
      !*** ./src/app/staff-collage/service/traineenomination.service.ts ***!
      \********************************************************************/

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
      78106);
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
        }

        _createClass(_TraineeNominationService, [{
          key: "getselectedExamCentern",
          value: function getselectedExamCentern() {
            return this.http.get(this.baseUrl + '/exam-center/get-selectedExamCenters');
          }
        }, {
          key: "getselectedNewAtempt",
          value: function getselectedNewAtempt() {
            return this.http.get(this.baseUrl + '/new-atempt/get-selectedNewAtempts');
          } // trainee-nomination/get-selectedTraineeNominationCount?traineeId=44895&courseNameId=1252

        }, {
          key: "getTraineeNominationCount",
          value: function getTraineeNominationCount(traineeId, courseNameId) {
            return this.http.get(this.baseUrl + '/trainee-nomination/get-selectedTraineeNominationCount?traineeId=' + traineeId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedpresentbillets",
          value: function getselectedpresentbillets() {
            return this.http.get(this.baseUrl + '/present-billet/get-selectedPresentBillets');
          } //autocomplete
          //trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=345&courseDurationId=3026&courseNameId=1023&traineeId=1032

        }, {
          key: "getSelectedTraineeByparameterRequest",
          value: function getSelectedTraineeByparameterRequest(pno, courseDurationId, courseNameId) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompleteTraineeByPno?pNo=' + pno + '&courseDurationId=' + courseDurationId + '&courseNameId=' + courseNameId).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
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
          key: "getPresentBilletByTraineeId",
          value: function getPresentBilletByTraineeId(traineeId) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-selectedPresentBilletByTraineeId?traineeId=' + traineeId);
          }
        }, {
          key: "getTraineeNominationByCourseDurationId",
          value: function getTraineeNominationByCourseDurationId(courseDurationId) {
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
            var _this73 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseDurationId', courseDurationId.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsByCourseDurationId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this73.TraineeNominations = [].concat(_toConsumableArray(_this73.TraineeNominations), _toConsumableArray(response.body.items));
              _this73.TraineeNominationPagination = response.body;
              return _this73.TraineeNominationPagination;
            }));
          }
        }, {
          key: "getTraineeNominations",
          value: function getTraineeNominations(pageNumber, pageSize, searchText) {
            var _this74 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this74.TraineeNominations = [].concat(_toConsumableArray(_this74.TraineeNominations), _toConsumableArray(response.body.items));
              _this74.TraineeNominationPagination = response.body;
              return _this74.TraineeNominationPagination;
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
    },

    /***/
    89967:
    /*!***************************************************************!*\
      !*** ./src/app/staff-collage/staff-collage-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffCollageRoutingModule": function StaffCollageRoutingModule() {
          return (
            /* binding */
            _StaffCollageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bnasubjectname_bnasubjectname_list_bnasubjectname_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bnasubjectname/bnasubjectname-list/bnasubjectname-list.component */
      11505);
      /* harmony import */


      var _bnasubjectname_new_bnasubjectname_new_bnasubjectname_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bnasubjectname/new-bnasubjectname/new-bnasubjectname.component */
      67135);
      /* harmony import */


      var _staffcollagecourse_new_staffcollagecourse_new_staffcollagecourse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./staffcollagecourse/new-staffcollagecourse/new-staffcollagecourse.component */
      33923);
      /* harmony import */


      var _staffcollagecourse_staffcollagecourse_list_staffcollagecourse_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./staffcollagecourse/staffcollagecourse-list/staffcollagecourse-list.component */
      20880);
      /* harmony import */


      var _staffcollagecourse_viewsubjectbystaffcollage_list_viewsubjectbystaffcollage_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./staffcollagecourse/viewsubjectbystaffcollage-list/viewsubjectbystaffcollage-list.component */
      16617);
      /* harmony import */


      var _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./traineenomination/new-traineenomination/new-traineenomination.component */
      26280);
      /* harmony import */


      var _traineenomination_traineenomination_list_traineenomination_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./traineenomination/traineenomination-list/traineenomination-list.component */
      42823);
      /* harmony import */


      var _qexammark_new_qexammark_new_qexammark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./qexammark/new-qexammark/new-qexammark.component */
      4529);
      /* harmony import */


      var _staff_collage_classroutine_new_classroutine_new_classroutine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../staff-collage/classroutine/new-classroutine/new-classroutine.component */
      77743);
      /* harmony import */


      var _staff_collage_subjectmark_new_subjectmark_new_subjectmark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../staff-collage/subjectmark/new-subjectmark/new-subjectmark.component */
      26697);
      /* harmony import */


      var _staff_collage_attendance_new_attendance_new_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../staff-collage/attendance/new-attendance/new-attendance.component */
      14857);
      /* harmony import */


      var _staff_collage_attendance_new_attendancetraineelist_new_attendancetraineelist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../staff-collage/attendance/new-attendancetraineelist/new-attendancetraineelist.component */
      85420);
      /* harmony import */


      var _staff_collage_indexno_new_indexno_new_indexno_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../staff-collage/indexno/new-indexno/new-indexno.component */
      92716);
      /* harmony import */


      var _staff_collage_courseinstructor_new_courseinstructor_new_courseinstructor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../staff-collage/courseinstructor/new-courseinstructor/new-courseinstructor.component */
      74057);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, // add-staffcollegeattendance NewAttendanceTraineeListComponent 
      {
        path: 'add-staffcollegeexammark',
        component: _qexammark_new_qexammark_new_qexammark_component__WEBPACK_IMPORTED_MODULE_7__.NewQExamMarkComponent
      }, {
        path: 'add-subjectinstructor',
        component: _staff_collage_courseinstructor_new_courseinstructor_new_courseinstructor_component__WEBPACK_IMPORTED_MODULE_13__.NewCourseInstructorComponent
      }, {
        path: 'update-subjectinstructor/:courseInstructorId',
        component: _staff_collage_courseinstructor_new_courseinstructor_new_courseinstructor_component__WEBPACK_IMPORTED_MODULE_13__.NewCourseInstructorComponent
      }, // staff-collage/add-subjectinstructor
      {
        path: 'add-staffcollegetraineeattendance/:courseDurationId/:date/:courseNameId/:classRoutineId/:bnaSubjectNameId',
        component: _staff_collage_attendance_new_attendancetraineelist_new_attendancetraineelist_component__WEBPACK_IMPORTED_MODULE_11__.NewAttendanceTraineeListComponent
      }, {
        path: 'add-staffcollegeattendance',
        component: _staff_collage_attendance_new_attendance_new_attendance_component__WEBPACK_IMPORTED_MODULE_10__.NewAttendanceComponent
      }, // {
      //   path: 'update-staffcollegeattendance',
      //   component: NewAttendanceComponent,
      // },
      {
        path: 'update-staffcollageroutine/:classRoutineId',
        component: _staff_collage_classroutine_new_classroutine_new_classroutine_component__WEBPACK_IMPORTED_MODULE_8__.NewClassRoutineComponent
      }, {
        path: 'add-staffcollageroutinecreate',
        component: _staff_collage_classroutine_new_classroutine_new_classroutine_component__WEBPACK_IMPORTED_MODULE_8__.NewClassRoutineComponent
      }, {
        path: 'add-staffcollagesubjectmark',
        component: _staff_collage_subjectmark_new_subjectmark_new_subjectmark_component__WEBPACK_IMPORTED_MODULE_9__.NewSubjectMarkComponent
      }, {
        path: 'update-staffcollagesubjectmark/:subjectMarkId',
        component: _staff_collage_subjectmark_new_subjectmark_new_subjectmark_component__WEBPACK_IMPORTED_MODULE_9__.NewSubjectMarkComponent
      }, {
        path: 'bnasubjectname-list',
        component: _bnasubjectname_bnasubjectname_list_bnasubjectname_list_component__WEBPACK_IMPORTED_MODULE_0__.BNASubjectNameListComponent
      }, {
        path: 'update-bnasubjectname/:bnaSubjectNameId',
        component: _bnasubjectname_new_bnasubjectname_new_bnasubjectname_component__WEBPACK_IMPORTED_MODULE_1__.NewBNASubjectNameComponent
      }, {
        path: 'add-bnasubjectname',
        component: _bnasubjectname_new_bnasubjectname_new_bnasubjectname_component__WEBPACK_IMPORTED_MODULE_1__.NewBNASubjectNameComponent
      }, {
        path: 'staffcollagecourse-list',
        component: _staffcollagecourse_staffcollagecourse_list_staffcollagecourse_list_component__WEBPACK_IMPORTED_MODULE_3__.StaffCollageCourseListComponent
      }, {
        path: 'update-staffcollagecourse/:courseDurationId',
        component: _staffcollagecourse_new_staffcollagecourse_new_staffcollagecourse_component__WEBPACK_IMPORTED_MODULE_2__.NewStaffCollageCourseComponent
      }, {
        path: 'add-staffcollagecourse',
        component: _staffcollagecourse_new_staffcollagecourse_new_staffcollagecourse_component__WEBPACK_IMPORTED_MODULE_2__.NewStaffCollageCourseComponent
      }, {
        path: 'add-nominationindex',
        component: _staff_collage_indexno_new_indexno_new_indexno_component__WEBPACK_IMPORTED_MODULE_12__.NewIndexNoComponent
      }, // NewIndexNoComponent
      {
        path: 'view-viewsubjectbystaffcollage',
        component: _staffcollagecourse_viewsubjectbystaffcollage_list_viewsubjectbystaffcollage_list_component__WEBPACK_IMPORTED_MODULE_4__.ViewSubjectListByStaffCollageComponent
      }, {
        path: 'traineenomination-list/:courseDurationId',
        component: _traineenomination_traineenomination_list_traineenomination_list_component__WEBPACK_IMPORTED_MODULE_6__.TraineeNominationListComponent
      }, {
        path: 'update-traineenomination/:traineeNominationId',
        component: _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_5__.NewTraineeNominationComponent
      }, {
        path: 'add-traineenomination/:courseDurationId/:courseNameId',
        component: _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_5__.NewTraineeNominationComponent
      }, {
        path: 'add-traineenomination',
        component: _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_5__.NewTraineeNominationComponent
      }];

      var _StaffCollageRoutingModule = function _StaffCollageRoutingModule() {
        _classCallCheck(this, _StaffCollageRoutingModule);
      };

      _StaffCollageRoutingModule.ɵfac = function StaffCollageRoutingModule_Factory(t) {
        return new (t || _StaffCollageRoutingModule)();
      };

      _StaffCollageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: _StaffCollageRoutingModule
      });
      _StaffCollageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](_StaffCollageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    17648:
    /*!*******************************************************!*\
      !*** ./src/app/staff-collage/staff-collage.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffCollageModule": function StaffCollageModule() {
          return (
            /* binding */
            _StaffCollageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ngx-material-file-input */
      4904);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _staff_collage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-collage-routing.module */
      89967);
      /* harmony import */


      var _bnasubjectname_bnasubjectname_list_bnasubjectname_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bnasubjectname/bnasubjectname-list/bnasubjectname-list.component */
      11505);
      /* harmony import */


      var _bnasubjectname_new_bnasubjectname_new_bnasubjectname_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bnasubjectname/new-bnasubjectname/new-bnasubjectname.component */
      67135);
      /* harmony import */


      var _staffcollagecourse_staffcollagecourse_list_staffcollagecourse_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./staffcollagecourse/staffcollagecourse-list/staffcollagecourse-list.component */
      20880);
      /* harmony import */


      var _staffcollagecourse_new_staffcollagecourse_new_staffcollagecourse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./staffcollagecourse/new-staffcollagecourse/new-staffcollagecourse.component */
      33923);
      /* harmony import */


      var _traineenomination_traineenomination_list_traineenomination_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./traineenomination/traineenomination-list/traineenomination-list.component */
      42823);
      /* harmony import */


      var _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./traineenomination/new-traineenomination/new-traineenomination.component */
      26280);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _staffcollagecourse_viewsubjectbystaffcollage_list_viewsubjectbystaffcollage_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./staffcollagecourse/viewsubjectbystaffcollage-list/viewsubjectbystaffcollage-list.component */
      16617);
      /* harmony import */


      var _qexammark_new_qexammark_new_qexammark_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./qexammark/new-qexammark/new-qexammark.component */
      4529);
      /* harmony import */


      var _staff_collage_classroutine_new_classroutine_new_classroutine_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../staff-collage/classroutine/new-classroutine/new-classroutine.component */
      77743);
      /* harmony import */


      var _staff_collage_subjectmark_new_subjectmark_new_subjectmark_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../staff-collage/subjectmark/new-subjectmark/new-subjectmark.component */
      26697);
      /* harmony import */


      var _staff_collage_attendance_new_attendance_new_attendance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../staff-collage/attendance/new-attendance/new-attendance.component */
      14857);
      /* harmony import */


      var _staff_collage_attendance_new_attendancetraineelist_new_attendancetraineelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../staff-collage/attendance/new-attendancetraineelist/new-attendancetraineelist.component */
      85420);
      /* harmony import */


      var _staff_collage_indexno_new_indexno_new_indexno_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../staff-collage/indexno/new-indexno/new-indexno.component */
      92716);
      /* harmony import */


      var _staff_collage_courseinstructor_new_courseinstructor_new_courseinstructor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../staff-collage/courseinstructor/new-courseinstructor/new-courseinstructor.component */
      74057);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StaffCollageModule = function _StaffCollageModule() {
        _classCallCheck(this, _StaffCollageModule);
      };

      _StaffCollageModule.ɵfac = function StaffCollageModule_Factory(t) {
        return new (t || _StaffCollageModule)();
      };

      _StaffCollageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: _StaffCollageModule
      });
      _StaffCollageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _staff_collage_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffCollageRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_29__.MaterialFileInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](_StaffCollageModule, {
          declarations: [_bnasubjectname_bnasubjectname_list_bnasubjectname_list_component__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNameListComponent, _bnasubjectname_new_bnasubjectname_new_bnasubjectname_component__WEBPACK_IMPORTED_MODULE_2__.NewBNASubjectNameComponent, _staffcollagecourse_staffcollagecourse_list_staffcollagecourse_list_component__WEBPACK_IMPORTED_MODULE_3__.StaffCollageCourseListComponent, _staffcollagecourse_new_staffcollagecourse_new_staffcollagecourse_component__WEBPACK_IMPORTED_MODULE_4__.NewStaffCollageCourseComponent, _traineenomination_traineenomination_list_traineenomination_list_component__WEBPACK_IMPORTED_MODULE_5__.TraineeNominationListComponent, _traineenomination_new_traineenomination_new_traineenomination_component__WEBPACK_IMPORTED_MODULE_6__.NewTraineeNominationComponent, _staffcollagecourse_viewsubjectbystaffcollage_list_viewsubjectbystaffcollage_list_component__WEBPACK_IMPORTED_MODULE_7__.ViewSubjectListByStaffCollageComponent, _qexammark_new_qexammark_new_qexammark_component__WEBPACK_IMPORTED_MODULE_8__.NewQExamMarkComponent, _staff_collage_classroutine_new_classroutine_new_classroutine_component__WEBPACK_IMPORTED_MODULE_9__.NewClassRoutineComponent, _staff_collage_subjectmark_new_subjectmark_new_subjectmark_component__WEBPACK_IMPORTED_MODULE_10__.NewSubjectMarkComponent, _staff_collage_attendance_new_attendance_new_attendance_component__WEBPACK_IMPORTED_MODULE_11__.NewAttendanceComponent, _staff_collage_attendance_new_attendancetraineelist_new_attendancetraineelist_component__WEBPACK_IMPORTED_MODULE_12__.NewAttendanceTraineeListComponent, _staff_collage_indexno_new_indexno_new_indexno_component__WEBPACK_IMPORTED_MODULE_13__.NewIndexNoComponent, _staff_collage_courseinstructor_new_courseinstructor_new_courseinstructor_component__WEBPACK_IMPORTED_MODULE_14__.NewCourseInstructorComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _staff_collage_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffCollageRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_29__.MaterialFileInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule]
        });
      })();
      /***/

    },

    /***/
    33923:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/staff-collage/staffcollagecourse/new-staffcollagecourse/new-staffcollagecourse.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewStaffCollageCourseComponent": function NewStaffCollageCourseComponent() {
          return (
            /* binding */
            _NewStaffCollageCourseComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_CourseName_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/basic-setup/service/CourseName.service */
      37295);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_courseduration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/courseduration.service */
      40405);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);

      function NewStaffCollageCourseComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Course Title is Required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fiscalYear_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", fiscalYear_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", fiscalYear_r21.text, " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Attend Year is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_cell_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r23 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r8.paging.pageIndex - 1) * ctx_r8.paging.pageSize + i_r23 + 1, " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Exam Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_cell_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", element_r24.courseName, " - ", element_r24.courseTitle, " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Duration From");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_cell_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, element_r25.durationFrom, "mediumDate"), " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Duration To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_cell_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, element_r26.durationTo, "mediumDate"), " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewStaffCollageCourseComponent_mat_cell_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewStaffCollageCourseComponent_mat_cell_97_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var element_r27 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r28.stopCentralExam(element_r27);
          })("click", function NewStaffCollageCourseComponent_mat_cell_97_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r27.isCompletedStatus == 0 ? "Running" : "Stop", " ");
        }
      }

      function NewStaffCollageCourseComponent_mat_header_cell_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1, a2) {
        return ["/staff-collage/add-traineenomination/", a1, a2];
      };

      var _c1 = function _c1() {
        return ["/staff-collage/view-viewsubjectbystaffcollage"];
      };

      var _c2 = function _c2(a1) {
        return ["/staff-collage/update-staffcollagecourse", a1];
      };

      function NewStaffCollageCourseComponent_mat_cell_100_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "supervisor_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "book");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewStaffCollageCourseComponent_mat_cell_100_Template_button_click_10_listener($event) {
            return $event.stopPropagation();
          })("click", function NewStaffCollageCourseComponent_mat_cell_100_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r34.deleteItem(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c0, row_r31.courseDurationId, row_r31.courseNameId));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, row_r31.courseDurationId));
        }
      }

      function NewStaffCollageCourseComponent_mat_header_row_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewStaffCollageCourseComponent_mat_row_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      var _NewStaffCollageCourseComponent = /*#__PURE__*/function () {
        function _NewStaffCollageCourseComponent(snackBar, confirmService, CourseNameService, CodeValueService, CourseDurationService, fb, router, route) {
          _classCallCheck(this, _NewStaffCollageCourseComponent);

          this.snackBar = snackBar;
          this.confirmService = confirmService;
          this.CourseNameService = CourseNameService;
          this.CodeValueService = CodeValueService;
          this.CourseDurationService = CourseDurationService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isLoading = false;
          this.options = []; //courseNameIdQExam:1252;

          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'courseName', 'durationFrom', 'durationTo', 'status', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        }

        _createClass(_NewStaffCollageCourseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this75 = this;

            var id = this.route.snapshot.paramMap.get('courseDurationId');

            if (id) {
              this.pageTitle = 'Edit Staff Collage Course';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.CourseDurationService.find(+id).subscribe(function (res) {
                _this75.CourseDurationForm.patchValue({
                  courseDurationId: res.courseDurationId,
                  courseNameId: res.courseNameId,
                  courseTypeId: res.courseTypeId,
                  courseTitle: res.courseTitle,
                  fiscalYearId: res.fiscalYearId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  durationFrom: res.durationFrom,
                  durationTo: res.durationTo,
                  remark: res.remark,
                  course: res.courseName,
                  status: res.status,
                  isActive: res.isActive
                });

                _this75.courseNameId = res.courseNameId;
              });
            } else {
              this.pageTitle = 'Create Staff Collage Course';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedfiscalyear();
            this.getSelectedCourseByType();
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "getCourseDurationsByCourseType",
          value: function getCourseDurationsByCourseType() {
            var _this76 = this;

            this.isLoading = true;
            this.CourseDurationService.getCourseDurationsByCourseType(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.masterData.courseName.StaffCollage).subscribe(function (response) {
              _this76.dataSource.data = response.items.filter(function (x) {
                return x.isCompletedStatus === 0;
              });
              _this76.paging.length = response.totalItemsCount;
              _this76.isLoading = false;
              console.log("Response course");
              console.log(_this76.dataSource.data);
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            var _this77 = this;

            this.CourseDurationForm = this.fb.group({
              courseDurationId: [0],
              courseNameId: [src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage],
              course: [''],
              courseTypeId: [src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam],
              courseTitle: [''],
              fiscalYearId: [],
              baseSchoolNameId: [],
              durationFrom: [],
              durationTo: [],
              remark: [''],
              isCompletedStatus: [0],
              isActive: [true]
            }); //AutoComplete for courseName

            this.CourseDurationForm.get('course').valueChanges.subscribe(function (value) {
              _this77.getSelectedCourseAutocomplete(value);
            });
          } //AutoComplete for courseName

        }, {
          key: "onCourseSelectionChanged",
          value: function onCourseSelectionChanged(item) {
            this.courseNameId = item.value;
            this.CourseDurationForm.get('courseNameId').setValue(item.value);
            this.CourseDurationForm.get('course').setValue(item.text);
          } //AutoComplete for courseName

        }, {
          key: "getSelectedCourseAutocomplete",
          value: function getSelectedCourseAutocomplete(cName) {
            var _this78 = this;

            this.CourseNameService.getSelectedCourseByNameAndType(this.masterData.coursetype.CentralExam, cName).subscribe(function (response) {
              _this78.options = response;
              _this78.filteredOptions = response;
            });
          }
        }, {
          key: "getSelectedCourseByType",
          value: function getSelectedCourseByType() {
            var _this79 = this;

            this.CourseNameService.getSelectedCourseByType(1021).subscribe(function (res) {
              _this79.selectedCourseByType = res;
              console.log("Selected Course By Type");
              console.log(_this79.selectedCourseByType);
            });
          }
        }, {
          key: "stopCentralExam",
          value: function stopCentralExam(element) {
            var _this80 = this;

            if (element.isCompletedStatus === 0) {
              console.log("element id");
              console.log(element.status);
              this.confirmService.confirm('Confirm Stop message', 'Are You Sure Stop This Item').subscribe(function (result) {
                if (result) {
                  _this80.CourseDurationService.stopCentralExam(element.courseDurationId).subscribe(function () {
                    _this80.getCourseDurationsByCourseType(); // this.getCourseDurationsByCourseType().subscribe(res=>{
                    //         this.selectedNotice=res
                    //         console.log("ffff");
                    //         console.log(this.selectedNotice);
                    //  });
                    //  var baseSchoolNameId=this.NoticeForm.value['baseSchoolNameId'];
                    //     this.noticeService.getNoticeBySchool(baseSchoolNameId).subscribe(res=>{
                    //       this.selectedNotice=res
                    // console.log("ffff");
                    //       console.log(this.selectedNotice);
                    //     }); 
                    // this.getCourseplanCreates();


                    _this80.snackBar.open('Information Stop Successfully ', '', {
                      duration: 3000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-warning'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "getselectedfiscalyear",
          value: function getselectedfiscalyear() {
            var _this81 = this;

            this.CourseDurationService.getselectedFiscalYear().subscribe(function (res) {
              _this81.selectedfiscalyear = res;
            });
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this82 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this82.router.navigate([currentUrl]);
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this83 = this;

            var id = row.courseDurationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this83.CourseDurationService["delete"](id).subscribe(function () {
                  _this83.getCourseDurationsByCourseType();

                  _this83.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this84 = this;

            var id = this.CourseDurationForm.get('courseDurationId').value;
            console.log(this.CourseDurationForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                if (result) {
                  _this84.CourseDurationService.update(+id, _this84.CourseDurationForm.value).subscribe(function (response) {
                    _this84.router.navigateByUrl('/staff-collage/add-staffcollagecourse');

                    _this84.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this84.validationErrors = error;
                  });
                }
              });
            } else {
              this.CourseDurationService.submit(this.CourseDurationForm.value).subscribe(function (response) {
                _this84.router.navigateByUrl('/staff-collage/add-staffcollagecourse');

                _this84.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this84.validationErrors = error;
              });
            }
          }
        }]);

        return _NewStaffCollageCourseComponent;
      }();

      _NewStaffCollageCourseComponent.ɵfac = function NewStaffCollageCourseComponent_Factory(t) {
        return new (t || _NewStaffCollageCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_basic_setup_service_CourseName_service__WEBPACK_IMPORTED_MODULE_2__.CourseNameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_courseduration_service__WEBPACK_IMPORTED_MODULE_4__.CourseDurationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _NewStaffCollageCourseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewStaffCollageCourseComponent,
        selectors: [["app-new-staffcollagecourse"]],
        decls: 104,
        vars: 20,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "courseTitle", "required", ""], [4, "ngIf"], ["formControlName", "fiscalYearId", "required", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "durationFrom", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["frompicker", ""], ["matInput", "", "formControlName", "durationTo", 3, "matDatepicker"], ["topicker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "courseName"], ["matColumnDef", "durationFrom"], ["matColumnDef", "durationTo"], ["matColumnDef", "status"], ["class", "stc-s", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "stc-s", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "stc-0", 4, "matHeaderCellDef"], ["class", "stc-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [3, "value"], ["mat-sort-header", ""], ["mat-sort-header", "", 1, "stc-s"], [1, "stc-s"], ["mat-raised-button", "", 1, "custom-btn", "courseplan-btn", 3, "click"], [1, "stc-0"], ["mat-icon-button", "", "title", "List Of Trainee", 1, "btn-tbl-nomination", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", "title", " Subject List", 1, "btn-tbl-view", 3, "routerLink"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewStaffCollageCourseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Staff Collage Course");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NewStaffCollageCourseComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Course Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, NewStaffCollageCourseComponent_mat_error_29_Template, 2, 0, "mat-error", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Attend Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, NewStaffCollageCourseComponent_mat_option_37_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, NewStaffCollageCourseComponent_mat_error_38_Template, 2, 0, "mat-error", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Duration From");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "mat-datepicker-toggle", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "mat-datepicker", null, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Duration To");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "mat-datepicker-toggle", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "mat-datepicker", null, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "input", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NewStaffCollageCourseComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewStaffCollageCourseComponent_Template_button_click_74_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-icon", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ul", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-table", 48, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](83, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, NewStaffCollageCourseComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, NewStaffCollageCourseComponent_mat_cell_85_Template, 2, 1, "mat-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](86, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, NewStaffCollageCourseComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, NewStaffCollageCourseComponent_mat_cell_88_Template, 2, 2, "mat-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](89, 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, NewStaffCollageCourseComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, NewStaffCollageCourseComponent_mat_cell_91_Template, 3, 4, "mat-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](92, 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, NewStaffCollageCourseComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, NewStaffCollageCourseComponent_mat_cell_94_Template, 3, 4, "mat-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](95, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, NewStaffCollageCourseComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, NewStaffCollageCourseComponent_mat_cell_97_Template, 3, 1, "mat-cell", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](98, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, NewStaffCollageCourseComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, NewStaffCollageCourseComponent_mat_cell_100_Template, 13, 9, "mat-cell", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, NewStaffCollageCourseComponent_mat_header_row_101_Template, 1, 0, "mat-header-row", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, NewStaffCollageCourseComponent_mat_row_102_Template, 1, 0, "mat-row", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "mat-paginator", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function NewStaffCollageCourseComponent_Template_mat_paginator_page_103_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.CourseDurationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.CourseDurationForm.get("courseTitle").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedfiscalyear);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.CourseDurationForm.get("fiscalYearId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.CourseDurationForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    20880:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/staff-collage/staffcollagecourse/staffcollagecourse-list/staffcollagecourse-list.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StaffCollageCourseListComponent": function StaffCollageCourseListComponent() {
          return (
            /* binding */
            _StaffCollageCourseListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_courseduration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/courseduration.service */
      40405);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function StaffCollageCourseListComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StaffCollageCourseListComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r17 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r17 + 1, " ");
        }
      }

      function StaffCollageCourseListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Exam Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StaffCollageCourseListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", element_r18.courseName, " - ", element_r18.courseTitle, " ");
        }
      }

      function StaffCollageCourseListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Duration From");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StaffCollageCourseListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r19.durationFrom, "mediumDate"), " ");
        }
      }

      function StaffCollageCourseListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Duration To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StaffCollageCourseListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r20.durationTo, "mediumDate"), " ");
        }
      }

      function StaffCollageCourseListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Course Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StaffCollageCourseListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.remark, " ");
        }
      }

      function StaffCollageCourseListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/traineenomination-list", a1];
      };

      var _c1 = function _c1(a1) {
        return ["/staff-collage/update-staffcollagecourse", a1];
      };

      function StaffCollageCourseListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "supervisor_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StaffCollageCourseListComponent_mat_cell_62_Template_button_click_7_listener($event) {
            return $event.stopPropagation();
          })("click", function StaffCollageCourseListComponent_mat_cell_62_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var row_r22 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r25.deleteItem(row_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, row_r22.courseDurationId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, row_r22.courseDurationId));
        }
      }

      function StaffCollageCourseListComponent_mat_header_row_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function StaffCollageCourseListComponent_mat_row_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c2 = function _c2() {
        return ["/staff-collage/add-staffcollagecourse"];
      };

      var _StaffCollageCourseListComponent = /*#__PURE__*/function () {
        function _StaffCollageCourseListComponent(snackBar, CourseDurationService, router, confirmService) {
          _classCallCheck(this, _StaffCollageCourseListComponent);

          this.snackBar = snackBar;
          this.CourseDurationService = CourseDurationService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.courseTypeId = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.ForeignCourse;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'courseName', 'durationFrom', 'durationTo', 'remark', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_StaffCollageCourseListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "getCourseDurationsByCourseType",
          value: function getCourseDurationsByCourseType() {
            var _this85 = this;

            this.isLoading = true;
            this.CourseDurationService.getCourseDurationsByCourseType(this.paging.pageIndex, this.paging.pageSize, this.searchText, this.masterData.examtypefromcoursetype.centralExam).subscribe(function (response) {
              _this85.dataSource.data = response.items;
              _this85.paging.length = response.totalItemsCount;
              _this85.isLoading = false;
              console.log(response);
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getCourseDurationsByCourseType();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this86 = this;

            var id = row.courseDurationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this86.CourseDurationService["delete"](id).subscribe(function () {
                  _this86.getCourseDurationsByCourseType();

                  _this86.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _StaffCollageCourseListComponent;
      }();

      _StaffCollageCourseListComponent.ɵfac = function StaffCollageCourseListComponent_Factory(t) {
        return new (t || _StaffCollageCourseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_courseduration_service__WEBPACK_IMPORTED_MODULE_1__.CourseDurationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _StaffCollageCourseListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _StaffCollageCourseListComponent,
        selectors: [["app-staffcollagecourse-list"]],
        decls: 66,
        vars: 10,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "courseName"], ["matColumnDef", "durationFrom"], ["matColumnDef", "durationTo"], ["matColumnDef", "remark"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "title", "Nomination", 1, "btn-tbl-nomination", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function StaffCollageCourseListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Staff Collage List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Staff Collage");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StaffCollageCourseListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StaffCollageCourseListComponent_Template_button_click_32_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-table", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, StaffCollageCourseListComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, StaffCollageCourseListComponent_mat_cell_47_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, StaffCollageCourseListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, StaffCollageCourseListComponent_mat_cell_50_Template, 2, 2, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, StaffCollageCourseListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, StaffCollageCourseListComponent_mat_cell_53_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, StaffCollageCourseListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, StaffCollageCourseListComponent_mat_cell_56_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, StaffCollageCourseListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, StaffCollageCourseListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, StaffCollageCourseListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, StaffCollageCourseListComponent_mat_cell_62_Template, 10, 6, "mat-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, StaffCollageCourseListComponent_mat_header_row_63_Template, 1, 0, "mat-header-row", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, StaffCollageCourseListComponent_mat_row_64_Template, 1, 0, "mat-row", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-paginator", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function StaffCollageCourseListComponent_Template_mat_paginator_page_65_listener($event) {
              return ctx.pageChanged($event);
            });

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    16617:
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/staff-collage/staffcollagecourse/viewsubjectbystaffcollage-list/viewsubjectbystaffcollage-list.component.ts ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewSubjectListByStaffCollageComponent": function ViewSubjectListByStaffCollageComponent() {
          return (
            /* binding */
            _ViewSubjectListByStaffCollageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/BNASubjectName.service */
      39846);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      32091); //import { BNASubjectName } from '../../../subject-management/models/BNASubjectName';
      //import { BNASubjectNameService } from '../../../subject-management/service/BNASubjectName.service';


      function ViewSubjectListByStaffCollageComponent_mat_header_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Paper No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r11.paperNo, " ");
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_header_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.subjectName, " ");
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_header_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_cell_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.totalMark, " ");
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_header_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.passMarkBna, " ");
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_header_row_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ViewSubjectListByStaffCollageComponent_mat_row_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _ViewSubjectListByStaffCollageComponent = /*#__PURE__*/function () {
        function _ViewSubjectListByStaffCollageComponent(snackBar, BNASubjectNameService, router, confirmService, route) {
          _classCallCheck(this, _ViewSubjectListByStaffCollageComponent);

          this.snackBar = snackBar;
          this.BNASubjectNameService = BNASubjectNameService;
          this.router = router;
          this.confirmService = confirmService;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.status = 1; //SelectedsubjectsBySchoolAndCourse:BNASubjectName[];

          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['paperNo', 'subjectName', 'totalMark', 'passMarkBna'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
        }

        _createClass(_ViewSubjectListByStaffCollageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBranchSelectionChange();
          }
        }, {
          key: "onBranchSelectionChange",
          value: function onBranchSelectionChange() {
            var _this87 = this;

            this.isLoading = true; //this.isShown = true;

            this.BNASubjectNameService.getselectedSubjectNameByBranchId().subscribe(function (res) {
              _this87.subjectNameList = res;
              console.log(_this87.subjectNameList);
            });
          }
        }]);

        return _ViewSubjectListByStaffCollageComponent;
      }();

      _ViewSubjectListByStaffCollageComponent.ɵfac = function ViewSubjectListByStaffCollageComponent_Factory(t) {
        return new (t || _ViewSubjectListByStaffCollageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_BNASubjectName_service__WEBPACK_IMPORTED_MODULE_1__.BNASubjectNameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
      };

      _ViewSubjectListByStaffCollageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewSubjectListByStaffCollageComponent,
        selectors: [["app-viewsubjectbystaffcollage"]],
        decls: 54,
        vars: 3,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "icon-button-demo", "m-l-10"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", "routerLink", "/staff-collage/add-staffcollagecourse", 1, "btn-space"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "paperNo"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "subjectName"], ["matColumnDef", "totalMark"], ["matColumnDef", "passMarkBna"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""]],
        template: function ViewSubjectListByStaffCollageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Subject List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Subject List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-table", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](40, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ViewSubjectListByStaffCollageComponent_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ViewSubjectListByStaffCollageComponent_mat_cell_42_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](43, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ViewSubjectListByStaffCollageComponent_mat_header_cell_44_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ViewSubjectListByStaffCollageComponent_mat_cell_45_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](46, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ViewSubjectListByStaffCollageComponent_mat_header_cell_47_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ViewSubjectListByStaffCollageComponent_mat_cell_48_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](49, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ViewSubjectListByStaffCollageComponent_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ViewSubjectListByStaffCollageComponent_mat_cell_51_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ViewSubjectListByStaffCollageComponent_mat_header_row_52_Template, 1, 0, "mat-header-row", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ViewSubjectListByStaffCollageComponent_mat_row_53_Template, 1, 0, "mat-row", 37);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.subjectNameList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    26697:
    /*!****************************************************************************************!*\
      !*** ./src/app/staff-collage/subjectmark/new-subjectmark/new-subjectmark.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewSubjectMarkComponent": function NewSubjectMarkComponent() {
          return (
            /* binding */
            _NewSubjectMarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../central-exam/service/bnaexammark.service */
      31698);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _central_exam_service_SubjectMark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../central-exam/service/SubjectMark.service */
      49718);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function NewSubjectMarkComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", dropdown_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", dropdown_r4.text, " ");
        }
      }

      function NewSubjectMarkComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var marktype_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", marktype_r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", marktype_r5.text, " ");
        }
      }

      function NewSubjectMarkComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select Any Mark Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewSubjectMarkComponent_div_56_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r20 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r8.paging.pageIndex - 1) * ctx_r8.paging.pageSize + i_r20 + 1, " ");
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Mark Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewSubjectMarkComponent_div_56_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.markType, " ");
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pass Mark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewSubjectMarkComponent_div_56_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.passMark, " ");
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Total Mark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewSubjectMarkComponent_div_56_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.mark, " ");
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/staff-collage/update-staffcollagesubjectmark", a1];
      };

      function NewSubjectMarkComponent_div_56_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewSubjectMarkComponent_div_56_mat_cell_20_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function NewSubjectMarkComponent_div_56_mat_cell_20_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var row_r24 = restoredCtx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r27.deleteItem(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, row_r24.subjectMarkId));
        }
      }

      function NewSubjectMarkComponent_div_56_mat_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewSubjectMarkComponent_div_56_mat_row_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewSubjectMarkComponent_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "SUBJECT LIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-table", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NewSubjectMarkComponent_div_56_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NewSubjectMarkComponent_div_56_mat_cell_8_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NewSubjectMarkComponent_div_56_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NewSubjectMarkComponent_div_56_mat_cell_11_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](12, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NewSubjectMarkComponent_div_56_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, NewSubjectMarkComponent_div_56_mat_cell_14_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NewSubjectMarkComponent_div_56_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, NewSubjectMarkComponent_div_56_mat_cell_17_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NewSubjectMarkComponent_div_56_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NewSubjectMarkComponent_div_56_mat_cell_20_Template, 7, 3, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NewSubjectMarkComponent_div_56_mat_header_row_21_Template, 1, 0, "mat-header-row", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, NewSubjectMarkComponent_div_56_mat_row_22_Template, 1, 0, "mat-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r3.selectedSubjectMark);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
        }
      }

      var _NewSubjectMarkComponent = /*#__PURE__*/function () {
        function _NewSubjectMarkComponent(snackBar, BNAExamMarkService, confirmService, SubjectMarkService, fb, router, route) {
          _classCallCheck(this, _NewSubjectMarkComponent);

          this.snackBar = snackBar;
          this.BNAExamMarkService = BNAExamMarkService;
          this.confirmService = confirmService;
          this.SubjectMarkService = SubjectMarkService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isShown = false;
          this.options = [];
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['ser', 'markType', 'mark', 'passMark', 'actions'];
        }

        _createClass(_NewSubjectMarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this88 = this;

            var id = this.route.snapshot.paramMap.get('subjectMarkId');

            if (id) {
              this.pageTitle = 'Edit Staff College Subject Mark';
              this.destination = "Edit";
              this.btnText = 'Update';
              this.SubjectMarkService.find(+id).subscribe(function (res) {
                _this88.SubjectMarkForm.patchValue({
                  subjectMarkId: res.subjectMarkId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseNameId: res.courseNameId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  courseModuleId: res.courseModuleId,
                  markTypeId: res.markTypeId,
                  passMark: res.passMark,
                  mark: res.mark,
                  remarks: res.remarks,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  course: res.courseName,
                  isActive: res.isActive
                });

                _this88.courseNameId = res.courseNameId;
              });
            } else {
              this.pageTitle = 'Staff College Subject Mark';
              this.destination = "Add";
              this.btnText = 'Save';
            }

            this.intitializeForm();
            this.getSelectedMarkType();
            this.getSelectedCourseDurationByCourseTypeIdAndCourseNameId();
            this.getSelectedSubjectNameByCourseNameId();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.SubjectMarkForm = this.fb.group({
              subjectMarkId: [0],
              baseSchoolNameId: [''],
              courseNameId: [this.masterData.courseName.StaffCollage],
              course: [''],
              courseNames: [''],
              bnaSubjectNameId: [],
              courseModuleId: [],
              markTypeId: [],
              passMark: [],
              mark: [],
              remarks: [''],
              status: [],
              menuPosition: [],
              isActive: [true]
            });
          }
        }, {
          key: "getSelectedCourseDurationByCourseTypeIdAndCourseNameId",
          value: function getSelectedCourseDurationByCourseTypeIdAndCourseNameId() {
            var _this89 = this;

            this.BNAExamMarkService.getSelectedCourseDurationByCourseTypeIdAndCourseNameId(_src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.coursetype.CentralExam, _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              console.log("courseName");
              _this89.selectedCourseDurationByCourseTypeAndCourseName = res;
            });
          }
        }, {
          key: "getSelectedSubjectNameByCourseNameId",
          value: function getSelectedSubjectNameByCourseNameId() {
            var _this90 = this;

            this.SubjectMarkService.getSelectedSubjectNameByCourseNameId(_src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage).subscribe(function (res) {
              _this90.selectedsubjectname = res;
            });
          }
        }, {
          key: "getAllSubjectList",
          value: function getAllSubjectList() {
            var _this91 = this;

            this.SubjectMarkService.getSelectedSubjectMarkByCourseNameIdAndBnaSubjectNameId(this.masterData.courseName.StaffCollage, this.bnaSubjectNameId).subscribe(function (res) {
              _this91.selectedSubjectMark = res;
              console.log(_this91.selectedSubjectMark);
            });
          }
        }, {
          key: "getSelectedMarkType",
          value: function getSelectedMarkType() {
            var _this92 = this;

            this.SubjectMarkService.getselectedmarktypes().subscribe(function (res) {
              _this92.selectedmarktype = res;
            });
          }
        }, {
          key: "onsubjectSelectionChangeGetsubjectMarkList",
          value: function onsubjectSelectionChangeGetsubjectMarkList() {
            var courseNameId = _src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData.courseName.StaffCollage;
            this.SubjectMarkForm.get('courseNameId').setValue(courseNameId);
            this.bnaSubjectNameId = this.SubjectMarkForm.value['bnaSubjectNameId'];
            this.isShown = true;

            if (courseNameId != null && this.bnaSubjectNameId != null) {
              this.getAllSubjectList();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this93 = this;

            var id = this.SubjectMarkForm.get('subjectMarkId').value;
            console.log(this.SubjectMarkForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                if (result) {
                  _this93.SubjectMarkService.update(+id, _this93.SubjectMarkForm.value).subscribe(function (response) {
                    _this93.router.navigateByUrl('/staff-collage/add-staffcollagesubjectmark');

                    _this93.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this93.validationErrors = error;
                  });
                }
              });
            } else {
              this.SubjectMarkService.submit(this.SubjectMarkForm.value).subscribe(function (response) {
                _this93.router.navigateByUrl('/staff-collage/add-staffcollagesubjectmark');

                _this93.onsubjectSelectionChangeGetsubjectMarkList();

                _this93.SubjectMarkForm.reset();

                _this93.SubjectMarkForm.get('subjectMarkId').setValue(0);

                _this93.SubjectMarkForm.get('isActive').setValue(true);

                _this93.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this93.validationErrors = error;
              });
            }
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this94 = this;

            var id = row.subjectMarkId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This  Item').subscribe(function (result) {
              if (result) {
                _this94.SubjectMarkService["delete"](id).subscribe(function () {
                  _this94.getAllSubjectList();

                  _this94.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 2000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _NewSubjectMarkComponent;
      }();

      _NewSubjectMarkComponent.ɵfac = function NewSubjectMarkComponent_Factory(t) {
        return new (t || _NewSubjectMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_central_exam_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_central_exam_service_SubjectMark_service__WEBPACK_IMPORTED_MODULE_3__.SubjectMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
      };

      _NewSubjectMarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _NewSubjectMarkComponent,
        selectors: [["app-new-subjectmark"]],
        decls: 57,
        vars: 9,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "body"], [1, "m-t-10", "m-l-10", "m-r-10", "m-b-0", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "multi-box", "first-box"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "bnaSubjectNameId", 3, "selectionChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "multi-box"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "mb-2"], ["formControlName", "markTypeId", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "mark"], ["matInput", "", "formControlName", "passMark"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["class", "row create-table", 4, "ngIf"], [3, "value"], [1, "row", "create-table"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "markType"], ["matColumnDef", "passMark"], ["matColumnDef", "mark"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewSubjectMarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Staff College Subject Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "form", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function NewSubjectMarkComponent_Template_form_ngSubmit_21_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function NewSubjectMarkComponent_Template_mat_select_selectionChange_29_listener() {
              return ctx.onsubjectSelectionChangeGetsubjectMarkList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, NewSubjectMarkComponent_mat_option_32_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Mark Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NewSubjectMarkComponent_mat_option_40_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, NewSubjectMarkComponent_mat_error_41_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Total Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Pass Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, NewSubjectMarkComponent_div_56_Template, 23, 3, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.SubjectMarkForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedsubjectname);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedmarktype);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.SubjectMarkForm.get("markTypeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.SubjectMarkForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.btnText);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShown);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    26280:
    /*!**********************************************************************************************************!*\
      !*** ./src/app/staff-collage/traineenomination/new-traineenomination/new-traineenomination.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewTraineeNominationComponent": function NewTraineeNominationComponent() {
          return (
            /* binding */
            _NewTraineeNominationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_traineenomination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/traineenomination.service */
      72198);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);

      function NewTraineeNominationComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function NewTraineeNominationComponent_mat_option_31_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);

            var item_r22 = restoredCtx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.onTraineeSelectionChanged(item_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r22.text, " ");
        }
      }

      function NewTraineeNominationComponent_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var examcenter_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", examcenter_r25.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", examcenter_r25.text, " ");
        }
      }

      function NewTraineeNominationComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " exam center is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var newatempt_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", newatempt_r26.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", newatempt_r26.text, " ");
        }
      }

      function NewTraineeNominationComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " newa tempt is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_cell_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r28 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r9.paging.pageIndex - 1) * ctx_r9.paging.pageSize + i_r28 + 1, " ");
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rank & Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_cell_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", element_r29.rankPosition, " ", element_r29.traineeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - (P No ", element_r29.traineePNo, ")");
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Exam Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_cell_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r30.examCenter, " ");
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Index No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_cell_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r31.indexNo, " ");
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Present Billet");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewTraineeNominationComponent_mat_cell_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r32.presentBillet, " ");
        }
      }

      function NewTraineeNominationComponent_mat_header_cell_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/central-exam/update-traineenomination", a1];
      };

      function NewTraineeNominationComponent_mat_cell_107_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewTraineeNominationComponent_mat_cell_107_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function NewTraineeNominationComponent_mat_cell_107_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var row_r33 = restoredCtx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r36.deleteItem(row_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, row_r33.traineeNominationId));
        }
      }

      function NewTraineeNominationComponent_mat_header_row_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewTraineeNominationComponent_mat_row_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
        }
      }

      var _NewTraineeNominationComponent = /*#__PURE__*/function () {
        function _NewTraineeNominationComponent(snackBar, confirmService, CodeValueService, TraineeNominationService, fb, router, route) {
          _classCallCheck(this, _NewTraineeNominationComponent);

          this.snackBar = snackBar;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.TraineeNominationService = TraineeNominationService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isLoading = false; //  courseDurationId:number;

          this.options = [];
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'traineeName', 'examCenter', 'presentBillet', 'indexNo', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        }

        _createClass(_NewTraineeNominationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this95 = this;

            var id = this.route.snapshot.paramMap.get('traineeNominationId');
            this.courseNameId = this.route.snapshot.paramMap.get('courseNameId');
            this.courseDurationId = this.route.snapshot.paramMap.get('courseDurationId');
            this.TraineeNominationService.findByCourseDuration(+this.courseDurationId).subscribe(function (res) {
              _this95.TraineeNominationForm.patchValue({
                traineeNominationId: res.traineeNominationId,
                courseDurationId: res.courseDurationId,
                courseNameId: res.courseNameId,
                traineeId: res.traineeId,
                examCenterId: res.examCenterId,
                newAtemptId: res.newAtemptId,
                traineeCourseStatusId: res.traineeCourseStatusId,
                withdrawnDocId: res.withdrawnDocId,
                withdrawnRemarks: res.withdrawnRemarks,
                withdrawnDate: res.withdrawnDate,
                status: res.status,
                menuPosition: res.menuPosition,
                isActive: res.isActive
              });
            });

            if (id) {
              this.pageTitle = 'Edit Trainee Nomination';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.TraineeNominationService.find(+id).subscribe(function (res) {
                _this95.TraineeNominationForm.patchValue({
                  traineeNominationId: res.traineeNominationId,
                  courseDurationId: res.courseDurationId,
                  courseNameId: res.courseNameId,
                  traineeId: res.traineeId,
                  examCenterId: res.examCenterId,
                  newAtemptId: res.newAtemptId,
                  traineeCourseStatusId: res.traineeCourseStatusId,
                  withdrawnDocId: res.withdrawnDocId,
                  withdrawnRemarks: res.withdrawnRemarks,
                  withdrawnDate: res.withdrawnDate,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Trainee Nomination';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedcoursename(); // this.getselectedcourseduration();

            this.getselectedTraineeCourseStatus();
            this.getselectedWithdrawnDoc();
            this.getSelectedTrainee();
            this.getselectedExamCentern();
            this.getselectedNewAtempt();
            this.getselectedpresentbillets();
            this.getTraineeNominationsByCourseDurationId(this.courseDurationId);
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            var _this96 = this;

            this.TraineeNominationForm = this.fb.group({
              traineeNominationId: [0],
              courseDurationId: [''],
              courseNameId: [''],
              traineeId: [''],
              presentBilletId: [''],
              previousAttemp: [''],
              presentBillet: [''],
              examCenterId: [''],
              newAtemptId: [''],
              traineeName: [''],
              traineeCourseStatusId: [],
              withdrawnDocId: [],
              withdrawnRemarks: [''],
              withdrawnDate: [],
              status: [1],
              isActive: [true]
            }); //autocomplete

            this.TraineeNominationForm.get('traineeName').valueChanges.subscribe(function (value) {
              _this96.getSelectedTraineeByPno(value, _this96.courseDurationId, _this96.courseNameId);
            });
          } //autocomplete

        }, {
          key: "onTraineeSelectionChanged",
          value: function onTraineeSelectionChanged(item) {
            var _this97 = this;

            console.log("Name");
            console.log(item.value);
            this.TraineeNominationService.getPresentBilletByTraineeId(item.value).subscribe(function (res) {
              _this97.presentBillet = res;
              _this97.presentBilletName = _this97.presentBillet[0].text; //this.presentBilletName=this.presentBillet[0].text

              console.log("Present");
              console.log(_this97.presentBilletName);

              _this97.TraineeNominationForm.get('presentBillet').setValue(_this97.presentBilletName);
            });
            this.traineeId = item.value;
            this.TraineeNominationForm.get('traineeId').setValue(item.value);
            this.TraineeNominationForm.get('traineeName').setValue(item.text);
            this.TraineeNominationService.getTraineeNominationCount(this.traineeId, this.courseNameId).subscribe(function (res) {
              _this97.nominationCount = res;
              console.log("nomination count");
              console.log(_this97.nominationCount);
            });
          } //autocomplete

        }, {
          key: "getSelectedTraineeByPno",
          value: function getSelectedTraineeByPno(pno, courseDurationId, courseNameId) {
            var _this98 = this;

            this.TraineeNominationService.getSelectedTraineeByparameterRequest(pno, courseDurationId, courseNameId).subscribe(function (response) {
              _this98.options = response;
              _this98.filteredOptions = response;
            });
          }
        }, {
          key: "getSelectedTrainee",
          value: function getSelectedTrainee() {
            var _this99 = this;

            this.TraineeNominationService.getSelectedTrainee().subscribe(function (res) {
              _this99.selectedTrainee = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this100 = this;

            this.TraineeNominationService.getselectedcoursename().subscribe(function (res) {
              _this100.selectedcourse = res;
            });
          }
        }, {
          key: "getselectedWithdrawnDoc",
          value: function getselectedWithdrawnDoc() {
            var _this101 = this;

            this.TraineeNominationService.getselectedWithdrawnDoc().subscribe(function (res) {
              _this101.selecteddoc = res;
            });
          }
        }, {
          key: "getselectedcourseduration",
          value: function getselectedcourseduration() {
            var _this102 = this;

            this.TraineeNominationService.getselectedcourseduration().subscribe(function (res) {
              _this102.selectedduration = res;
            });
          }
        }, {
          key: "getselectedTraineeCourseStatus",
          value: function getselectedTraineeCourseStatus() {
            var _this103 = this;

            this.TraineeNominationService.getselectedTraineeCourseStatus().subscribe(function (res) {
              _this103.selectedcoursestatus = res;
            });
          }
        }, {
          key: "getselectedExamCentern",
          value: function getselectedExamCentern() {
            var _this104 = this;

            this.TraineeNominationService.getselectedExamCentern().subscribe(function (res) {
              _this104.selectedExamCenter = res;
            });
          }
        }, {
          key: "getselectedNewAtempt",
          value: function getselectedNewAtempt() {
            var _this105 = this;

            this.TraineeNominationService.getselectedNewAtempt().subscribe(function (res) {
              _this105.selectedNewAtempt = res;
            });
          }
        }, {
          key: "getselectedpresentbillets",
          value: function getselectedpresentbillets() {
            var _this106 = this;

            this.TraineeNominationService.getselectedpresentbillets().subscribe(function (res) {
              _this106.selectedpresentbillet = res;
            });
          }
        }, {
          key: "getTraineeNominationsByCourseDurationId",
          value: function getTraineeNominationsByCourseDurationId(courseDurationId) {
            var _this107 = this;

            this.isLoading = true;
            this.TraineeNominationService.getTraineeNominationsByCourseDurationId(this.paging.pageIndex, this.paging.pageSize, this.searchText, courseDurationId).subscribe(function (response) {
              _this107.dataSource.data = response.items;
              _this107.paging.length = response.totalItemsCount;
              _this107.isLoading = false;
              console.log("Data source");
              console.log(_this107.dataSource.data);
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
          }
        }, {
          key: "reloadCurrentRoute",
          value: function reloadCurrentRoute() {
            var _this108 = this;

            var currentUrl = this.router.url;
            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              _this108.router.navigate([currentUrl]);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this109 = this;

            var id = this.TraineeNominationForm.get('traineeNominationId').value;
            console.log(this.TraineeNominationForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                if (result) {
                  _this109.TraineeNominationService.update(+id, _this109.TraineeNominationForm.value).subscribe(function (response) {
                    // this.router.navigateByUrl('/central-exam/traineenomination-list/'+this.courseDurationId);
                    _this109.reloadCurrentRoute();

                    _this109.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this109.validationErrors = error;
                  });
                }
              });
            } else {
              this.TraineeNominationService.submit(this.TraineeNominationForm.value).subscribe(function (response) {
                // this.router.navigateByUrl('/central-exam/traineenomination-list/'+this.courseDurationId);
                _this109.reloadCurrentRoute();

                _this109.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this109.validationErrors = error;
              });
            }
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this110 = this;

            var id = row.traineeNominationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              // console.log(result);
              _this110.reloadCurrentRoute();

              if (result) {
                _this110.TraineeNominationService["delete"](id).subscribe(function () {
                  _this110.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _NewTraineeNominationComponent;
      }();

      _NewTraineeNominationComponent.ɵfac = function NewTraineeNominationComponent_Factory(t) {
        return new (t || _NewTraineeNominationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_2__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_3__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
      };

      _NewTraineeNominationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _NewTraineeNominationComponent,
        selectors: [["app-new-traineenomination"]],
        decls: 111,
        vars: 21,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "traineeName", "matInput", "", "type", "text", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-12", "mb-2"], ["formControlName", "examCenterId", "required", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "newAtemptId", "required", ""], ["matInput", "", "formControlName", "presentBillet", "readonly", "true", 3, "value"], ["matInput", "", "formControlName", "previousAttemp", "readonly", "true", 3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["mat-raised-button", "", "color", "warn", "routerLink", "/staff-collage/add-staffcollagecourse", 1, "btn-space"], [1, "col-white"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-4"], [1, "header-buttons"], ["matSort", "", 1, "mat-cell", "stuff-clg-nominated", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "traineeName"], ["class", "name-col", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "name-col", 4, "matCellDef"], ["matColumnDef", "examCenter"], ["class", "center-col", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "center-col", 4, "matCellDef"], ["matColumnDef", "indexNo"], ["matColumnDef", "presentBillet"], ["class", "billet-col", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "billet-col", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [3, "value", "onSelectionChange"], [3, "value"], ["mat-sort-header", ""], ["mat-sort-header", "", 1, "name-col"], [1, "name-col"], [1, "t-n-pno-d"], ["mat-sort-header", "", 1, "center-col"], [1, "center-col"], ["mat-sort-header", "", 1, "billet-col"], [1, "billet-col"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewTraineeNominationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Trainee Nomination");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function NewTraineeNominationComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Trainee");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-autocomplete", null, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, NewTraineeNominationComponent_mat_option_31_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Exam Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, NewTraineeNominationComponent_mat_option_39_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NewTraineeNominationComponent_mat_error_40_Template, 2, 0, "mat-error", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "New Atempt");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, NewTraineeNominationComponent_mat_option_48_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, NewTraineeNominationComponent_mat_error_49_Template, 2, 0, "mat-error", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Present Billet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Previews Attempt");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-icon", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "ul", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "input", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NewTraineeNominationComponent_Template_input_ngModelChange_79_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewTraineeNominationComponent_Template_button_click_83_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-icon", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "ul", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "mat-table", 49, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](90, 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, NewTraineeNominationComponent_mat_header_cell_91_Template, 2, 0, "mat-header-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, NewTraineeNominationComponent_mat_cell_92_Template, 2, 1, "mat-cell", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](93, 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, NewTraineeNominationComponent_mat_header_cell_94_Template, 2, 0, "mat-header-cell", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, NewTraineeNominationComponent_mat_cell_95_Template, 4, 3, "mat-cell", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](96, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, NewTraineeNominationComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, NewTraineeNominationComponent_mat_cell_98_Template, 2, 1, "mat-cell", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](99, 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, NewTraineeNominationComponent_mat_header_cell_100_Template, 2, 0, "mat-header-cell", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, NewTraineeNominationComponent_mat_cell_101_Template, 2, 1, "mat-cell", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](102, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, NewTraineeNominationComponent_mat_header_cell_103_Template, 2, 0, "mat-header-cell", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, NewTraineeNominationComponent_mat_cell_104_Template, 2, 1, "mat-cell", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](105, 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, NewTraineeNominationComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, NewTraineeNominationComponent_mat_cell_107_Template, 7, 3, "mat-cell", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, NewTraineeNominationComponent_mat_header_row_108_Template, 1, 0, "mat-header-row", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, NewTraineeNominationComponent_mat_row_109_Template, 1, 0, "mat-row", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "mat-paginator", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function NewTraineeNominationComponent_Template_mat_paginator_page_110_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.TraineeNominationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedExamCenter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.TraineeNominationForm.get("examCenterId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedNewAtempt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.TraineeNominationForm.get("newAtemptId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.presentBilletName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.nominationCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.TraineeNominationForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    42823:
    /*!************************************************************************************************************!*\
      !*** ./src/app/staff-collage/traineenomination/traineenomination-list/traineenomination-list.component.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TraineeNominationListComponent": function TraineeNominationListComponent() {
          return (
            /* binding */
            _TraineeNominationListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/traineenomination.service */
      72198);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);

      function TraineeNominationListComponent_mat_header_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TraineeNominationListComponent_mat_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r15 + 1, " ");
        }
      }

      function TraineeNominationListComponent_mat_header_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Rank & Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TraineeNominationListComponent_mat_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", element_r16.rankPosition, " ", element_r16.traineeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - (P No ", element_r16.traineePNo, ")");
        }
      }

      function TraineeNominationListComponent_mat_header_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Exam Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TraineeNominationListComponent_mat_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r17.examCenter, " ");
        }
      }

      function TraineeNominationListComponent_mat_header_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Present Billet");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TraineeNominationListComponent_mat_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r18.presentBillet, " ");
        }
      }

      function TraineeNominationListComponent_mat_header_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/central-exam/update-traineenomination", a1];
      };

      function TraineeNominationListComponent_mat_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TraineeNominationListComponent_mat_cell_63_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function TraineeNominationListComponent_mat_cell_63_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var row_r19 = restoredCtx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r22.deleteItem(row_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r19.traineeNominationId));
        }
      }

      function TraineeNominationListComponent_mat_header_row_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function TraineeNominationListComponent_mat_row_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c1 = function _c1(a1, a2) {
        return ["/central-exam/add-traineenomination", a1, a2];
      };

      var _TraineeNominationListComponent = /*#__PURE__*/function () {
        function _TraineeNominationListComponent(route, snackBar, TraineeNominationService, router, confirmService) {
          _classCallCheck(this, _TraineeNominationListComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.TraineeNominationService = TraineeNominationService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'traineeName', 'examCenter', 'presentBillet', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_TraineeNominationListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this111 = this;

            var courseDurationId = this.route.snapshot.paramMap.get('courseDurationId');
            this.TraineeNominationService.findByCourseDuration(+courseDurationId).subscribe(function (res) {
              _this111.courseDurationId = res.courseDurationId, _this111.courseNameId = res.courseNameId; //  console.log(res);
            });
            this.getTraineeNominationsByCourseDurationId(courseDurationId);
          }
        }, {
          key: "getTraineeNominationsByCourseDurationId",
          value: function getTraineeNominationsByCourseDurationId(courseDurationId) {
            var _this112 = this;

            this.isLoading = true;
            this.TraineeNominationService.getTraineeNominationsByCourseDurationId(this.paging.pageIndex, this.paging.pageSize, this.searchText, courseDurationId).subscribe(function (response) {
              _this112.dataSource.data = response.items;
              _this112.paging.length = response.totalItemsCount;
              _this112.isLoading = false;
              console.log("Data source");
              console.log(_this112.dataSource.data);
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this113 = this;

            var id = row.traineeNominationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              // console.log(result);
              if (result) {
                _this113.TraineeNominationService["delete"](id).subscribe(function () {
                  _this113.snackBar.open('Information Deleted Successfully ', '', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-danger'
                  });
                });
              }
            });
          }
        }]);

        return _TraineeNominationListComponent;
      }();

      _TraineeNominationListComponent.ɵfac = function TraineeNominationListComponent_Factory(t) {
        return new (t || _TraineeNominationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _TraineeNominationListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _TraineeNominationListComponent,
        selectors: [["app-traineenomination-list"]],
        decls: 67,
        vars: 12,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", "routerLink", "/central-exam/centralexam-list", 1, "btn-space"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "traineeName"], ["matColumnDef", "examCenter"], ["matColumnDef", "presentBillet"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "t-n-pno-d"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function TraineeNominationListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Trainee Nomination");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Trainee Nomination");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TraineeNominationListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TraineeNominationListComponent_Template_button_click_32_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-table", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](49, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, TraineeNominationListComponent_mat_header_cell_50_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, TraineeNominationListComponent_mat_cell_51_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](52, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, TraineeNominationListComponent_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, TraineeNominationListComponent_mat_cell_54_Template, 4, 3, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](55, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, TraineeNominationListComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, TraineeNominationListComponent_mat_cell_57_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](58, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, TraineeNominationListComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, TraineeNominationListComponent_mat_cell_60_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](61, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, TraineeNominationListComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, TraineeNominationListComponent_mat_cell_63_Template, 7, 3, "mat-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, TraineeNominationListComponent_mat_header_row_64_Template, 1, 0, "mat-header-row", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, TraineeNominationListComponent_mat_row_65_Template, 1, 0, "mat-row", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-paginator", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function TraineeNominationListComponent_Template_mat_paginator_page_66_listener($event) {
              return ctx.pageChanged($event);
            });

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c1, ctx.courseDurationId, ctx.courseNameId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    }
  }]);
})();