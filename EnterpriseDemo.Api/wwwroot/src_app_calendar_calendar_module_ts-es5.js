(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_calendar_calendar_module_ts"], {
    /***/
    19987:
    /*!*****************************************************!*\
      !*** ./src/app/calendar/calendar-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarRoutingModule": function CalendarRoutingModule() {
          return (
            /* binding */
            _CalendarRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _event_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./event-calendar/calendar.component */
      46288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _event_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
      }];

      var _CalendarRoutingModule = function _CalendarRoutingModule() {
        _classCallCheck(this, _CalendarRoutingModule);
      };

      _CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) {
        return new (t || _CalendarRoutingModule)();
      };

      _CalendarRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CalendarRoutingModule
      });
      _CalendarRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CalendarRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    979:
    /*!*********************************************!*\
      !*** ./src/app/calendar/calendar.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarsModule": function CalendarsModule() {
          return (
            /* binding */
            _CalendarsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-routing.module */
      19987);
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fullcalendar/angular */
      52955);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-pick-datetime */
      86050);
      /* harmony import */


      var _event_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-calendar/calendar.component */
      46288);
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      82758);
      /* harmony import */


      var _service_calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./service/calendar.service */
      58366);
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      93520);
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      40111);
      /* harmony import */


      var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fullcalendar/list */
      4129);
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      9549);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);

      _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule.registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__["default"]]);

      var _CalendarsModule = function _CalendarsModule() {
        _classCallCheck(this, _CalendarsModule);
      };

      _CalendarsModule.ɵfac = function CalendarsModule_Factory(t) {
        return new (t || _CalendarsModule)();
      };

      _CalendarsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _CalendarsModule
      });
      _CalendarsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_service_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_CalendarsModule, {
          declarations: [_event_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule]
        });
      })();
      /***/

    }
  }]);
})();