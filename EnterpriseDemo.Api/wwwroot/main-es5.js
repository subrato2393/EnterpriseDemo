(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication/page404/page404.component */
      1991);
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      17050);
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      9899);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/guard/auth.guard */
      19390);
      /* harmony import */


      var _core_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/models/role */
      38252);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [{
          path: 'basic-setup',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js-src_app_basic-9e2bcb"), __webpack_require__.e("default-src_app_basic-setup_basic-setup-routing_module_ts"), __webpack_require__.e("src_app_basic-setup_basic-setup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./basic-setup/basic-setup.module */
            78858)).then(function (m) {
              return m.BasicSetupModule;
            });
          }
        }, {
          path: 'security',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_security_security_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./security/security.module */
            71484)).then(function (m) {
              return m.SecurityModule;
            });
          }
        }, {
          path: 'semester-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("src_app_semester-management_semester-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./semester-management/semester-management.module */
            9505)).then(function (m) {
              return m.SemesterManagementModule;
            });
          }
        }, {
          path: 'notice-bulletin',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_notice-bulletin_notice-bulletin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./notice-bulletin/notice-bulletin.module */
            73739)).then(function (m) {
              return m.NoticeBulletinModule;
            });
          }
        }, {
          path: 'trainee-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("src_app_trainee-management_trainee-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./trainee-management/trainee-management.module */
            94664)).then(function (m) {
              return m.TraineeManagementModule;
            });
          }
        }, {
          path: 'subject-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_subject-management_service_BNASubjectName_service_ts-src_app_subject-manageme-0caa46"), __webpack_require__.e("src_app_subject-management_subject-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./subject-management/subject-management.module */
            79329)).then(function (m) {
              return m.SubjectManagementModule;
            });
          }
        }, {
          path: 'bna-subject-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.BNA]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_bna-subject-management_bna-subject-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./bna-subject-management/bna-subject-management.module */
            40096)).then(function (m) {
              return m.BNASubjectManagementModule;
            });
          }
        }, {
          path: 'attendance-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Instructor]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"), __webpack_require__.e("src_app_attendance-management_attendance-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./attendance-management/attendance-management.module */
            19159)).then(function (m) {
              return m.AttendanceManagementModule;
            });
          }
        }, // BnaRoutineManagementModule
        {
          path: 'bnaattendance-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.BNA]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("src_app_bnaattendance-management_bnaattendance-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./bnaattendance-management/bnaattendance-management.module */
            36775)).then(function (m) {
              return m.BnaAttendanceManagementModule;
            });
          }
        }, {
          path: 'bnaroutine-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.BNA]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("src_app_bnaroutine-management_bnaroutine-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./bnaroutine-management/bnaroutine-management.module */
            15641)).then(function (m) {
              return m.BnaRoutineManagementModule;
            });
          }
        }, {
          path: 'allowance-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("src_app_allowance-management_allowance-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./allowance-management/allowance-management.module */
            35400)).then(function (m) {
              return m.AllowanceManagementModule;
            });
          }
        }, {
          path: 'exam-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_exam-management_exam-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./exam-management/exam-management.module */
            15171)).then(function (m) {
              return m.ExamManagementModule;
            });
          }
        }, {
          path: 'bna-exam-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.BNA]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("src_app_bna-exam-management_bna-exam-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./bna-exam-management/bna-exam-management.module */
            17752)).then(function (m) {
              return m.BNAExamManagementModule;
            });
          }
        }, {
          path: 'central-exam',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"), __webpack_require__.e("default-src_app_basic-setup_service_CourseName_service_ts-src_app_central-exam_service_BNASub-9428a5"), __webpack_require__.e("default-src_app_central-exam_service_SubjectMark_service_ts-src_app_subject-management_servic-61b6cc"), __webpack_require__.e("common"), __webpack_require__.e("src_app_central-exam_central-exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./central-exam/central-exam.module */
            47)).then(function (m) {
              return m.CentralExamModule;
            });
          }
        }, {
          path: 'foreign-training',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_foreign-training_foreign-training_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./foreign-training/foreign-training.module */
            71576)).then(function (m) {
              return m.ForeignTrainingModule;
            });
          }
        }, {
          path: 'inter-service',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.InterSeeviceCourse]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_inter-service_inter-service_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./inter-service/inter-service.module */
            15833)).then(function (m) {
              return m.InterServiceModule;
            });
          }
        }, {
          path: 'mist-course',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("src_app_mist-course_mist-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./mist-course/mist-course.module */
            44464)).then(function (m) {
              return m.MISTCourseModule;
            });
          }
        }, {
          path: 'staff-collage',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"), __webpack_require__.e("default-src_app_basic-setup_service_CourseName_service_ts-src_app_central-exam_service_BNASub-9428a5"), __webpack_require__.e("default-src_app_central-exam_service_SubjectMark_service_ts-src_app_subject-management_servic-61b6cc"), __webpack_require__.e("src_app_staff-collage_staff-collage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./staff-collage/staff-collage.module */
            17648)).then(function (m) {
              return m.StaffCollageModule;
            });
          }
        }, {
          path: 'jcos-training',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_attendance-management_service_attendance_service_ts-src_app_basic-setup_servi-a629e6"), __webpack_require__.e("default-src_app_basic-setup_service_CourseName_service_ts-src_app_central-exam_service_BNASub-9428a5"), __webpack_require__.e("src_app_jcos-training_jcos-training_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./jcos-training/jcos-training.module */
            11371)).then(function (m) {
              return m.JCOsTrainingModule;
            });
          }
        }, {
          path: 'teachers-evaluation',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_teachers-evaluation_teachers-evaluation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./teachers-evaluation/teachers-evaluation.module */
            60766)).then(function (m) {
              return m.TeachersEvaluationModule;
            });
          }
        }, {
          path: 'syllabus-entry',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_syllabus-entry_syllabus-entry_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./syllabus-entry/syllabus-entry.module */
            92892)).then(function (m) {
              return m.SyllabusEntryModule;
            });
          }
        }, {
          path: 'course-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Instructor, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-src_app_subject-management_service_BNASubjectName_service_ts-src_app_subject-manageme-0caa46"), __webpack_require__.e("default-src_app_calendar_event-calendar_calendar_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_course-management_course-management_module_ts-src_app_course-management_models_course-cff334")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./course-management/course-management.module */
            18910)).then(function (m) {
              return m.CourseManagementModule;
            });
          }
        }, {
          path: 'bnacourse-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Instructor, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-src_app_subject-management_service_BNASubjectName_service_ts-src_app_subject-manageme-0caa46"), __webpack_require__.e("default-src_app_calendar_event-calendar_calendar_component_ts"), __webpack_require__.e("src_app_bnacourse-management_bnacourse-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./bnacourse-management/bnacourse-management.module */
            95695)).then(function (m) {
              return m.BnaCourseManagementModule;
            });
          }
        }, {
          path: 'reading-materials',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_reading-materials_reading-materials_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./reading-materials/reading-materials.module */
            44433)).then(function (m) {
              return m.ReadingMaterialsModule;
            });
          }
        }, {
          path: 'calendar',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.InterSeeviceCourse]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_fullcalendar_interaction_main_js-node_modules_fullcalendar_list_main_js--1a3d65"), __webpack_require__.e("default-src_app_calendar_event-calendar_calendar_component_ts"), __webpack_require__.e("src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./calendar/calendar.module */
            979)).then(function (m) {
              return m.CalendarsModule;
            });
          }
        }, {
          path: 'routine-management',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("src_app_routine-management_routine-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./routine-management/routine-management.module */
            30833)).then(function (m) {
              return m.RoutineManagementModule;
            });
          }
        }, {
          path: 'trainee-biodata',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_trainee-biodata_trainee-biodata_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./trainee-biodata/trainee-biodata.module */
            68764)).then(function (m) {
              return m.TraineeBiodataModule;
            });
          }
        }, {
          path: 'bna-trainee-biodata',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_bna-trainee-biodata_bna-trainee-biodata-routing_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./bna-trainee-biodata/bna-trainee-biodata-routing.module */
            86758)).then(function (m) {
              return m.BNATraineeBiodataRoutingModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/authentication/signin',
          pathMatch: 'full'
        }, {
          path: 'admin',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.SuperAdmin, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Instructor, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.InterSeeviceCourse, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.BNA]
          },
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./admin/admin.module */
            77095)).then(function (m) {
              return m.AdminModule;
            });
          }
        }, {
          path: 'interservice-dashboard',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.InterSeeviceCourse
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng-mar-112bd9"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-node_modules_fullcalendar_interaction_main_js-node_modules_fullcalendar_list_main_js--1a3d65"), __webpack_require__.e("default-src_app_inter-service-dashboard_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_inter-service-dashboard_inter-service-dashboard_module_ts-src_assets_data_master-data_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./inter-service-dashboard/inter-service-dashboard.module */
            1538)).then(function (m) {
              return m.InterServiceDashboardModule;
            });
          }
        }, {
          path: 'teacher',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng-mar-112bd9"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-src_app_student_services_-1022fb"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-src_app_teacher_assignedsubject-list_assignedsubject-list_component_ts-src_app_teache-597f17"), __webpack_require__.e("src_app_routine-management_models_classroutinePagination_ts-src_app_teacher_teacher_module_ts-a09c62")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./teacher/teacher.module */
            33042)).then(function (m) {
              return m.TeacherModule;
            });
          }
        }, {
          path: 'student',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-src_app_basic-setup_service_codevalue_service_ts-src_app_exam-management_service_bnae-1bbbe0"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng-mar-112bd9"), __webpack_require__.e("default-src_app_subject-management_service_BNASubjectName_service_ts-src_app_subject-manageme-0caa46"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-src_app_student_services_-1022fb"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-src_app_student_assignment-list_assignment-list_component_ts-src_app_student_coursein-1364a9"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./student/student.module */
            47859)).then(function (m) {
              return m.StudentModule;
            });
          }
        }, {
          path: 'school',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.MasterAdmin
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-src_app_routine-management_service_classroutine_service_ts-src_assets_data_master-data_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng-mar-112bd9"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-src_app_student_services_-1022fb"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-src_app_school_attendancebycourse-list_attendancebycourse-list_component_ts-src_app_s-1e0c39"), __webpack_require__.e("src_app_school_school_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./school/school.module */
            13440)).then(function (m) {
              return m.SchoolModule;
            });
          }
        }, {
          path: 'instructor',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            //role: [Role.MasterAdmin,  Role.Instructor], // multiple user role
            role: [_core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Instructor, _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_stepper_js-node_modules_ngx-mater-1aa001"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_instructor_instructor_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./instructor/instructor.module */
            62882)).then(function (m) {
              return m.InstructorModule;
            });
          }
        }, // Extra components
        {
          path: 'extra-pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./extra-pages/extra-pages.module */
            95859)).then(function (m) {
              return m.ExtraPagesModule;
            });
          }
        }, {
          path: 'multilevel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./multilevel/multilevel.module */
            96895)).then(function (m) {
              return m.MultilevelModule;
            });
          }
        }]
      }, {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./authentication/authentication.module */
          41082)).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: '**',
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      66105);

      var _AppComponent = function _AppComponent(_router, location, spinner) {
        var _this2 = this;

        _classCallCheck(this, _AppComponent);

        this._router = _router;
        this.spinner = spinner;

        this._router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
            _this2.spinner.show();

            _this2.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
            _this2.spinner.hide();
          }

          window.scrollTo(0, 0);
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [""]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createTranslateLoader": function createTranslateLoader() {
          return (
            /* binding */
            _createTranslateLoader
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout/header/header.component */
      17876);
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      61954);
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      66105);
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      20129);
      /* harmony import */


      var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/right-sidebar/right-sidebar.component */
      72325);
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      17050);
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      9899);
      /* harmony import */


      var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./core/interceptor/fake-backend */
      43867);
      /* harmony import */


      var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./core/interceptor/error.interceptor */
      56300);
      /* harmony import */


      var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./core/interceptor/jwt.interceptor */
      72624);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modals/confirm-dialog/confirm-dialog.component */
      12935);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      function _createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
      }

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__.HashLocationStrategy
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__.JwtInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__.ErrorInterceptor,
          multi: true
        }, _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_11__.fakeBackendProvider, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_14__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateLoader,
            useFactory: _createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient]
          }
        }), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_6__.PageLoaderComponent, _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.SidebarComponent, _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.RightSidebarComponent, _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__.AuthLayoutComponent, _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__.MainLayoutComponent, _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialogComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_14__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, // core & shared
          _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    1991:
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page404/page404.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Page404Component": function Page404Component() {
          return (
            /* binding */
            _Page404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Page404Component = /*#__PURE__*/function () {
        function _Page404Component() {
          _classCallCheck(this, _Page404Component);
        }

        _createClass(_Page404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Page404Component;
      }();

      _Page404Component.ɵfac = function Page404Component_Factory(t) {
        return new (t || _Page404Component)();
      };

      _Page404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Page404Component,
        selectors: [["app-page404"]],
        decls: 21,
        vars: 0,
        consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]],
        template: function Page404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looks Like You're Lost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Page You Are Looking For Not Available! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go To Home Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Need Help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: [""]
      });
      /***/
    },

    /***/
    8696:
    /*!******************************************!*\
      !*** ./src/app/config/config.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigService": function ConfigService() {
          return (
            /* binding */
            _ConfigService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ConfigService = /*#__PURE__*/function () {
        function _ConfigService() {
          _classCallCheck(this, _ConfigService);

          this.setConfigData();
        }

        _createClass(_ConfigService, [{
          key: "setConfigData",
          value: function setConfigData() {
            this.configData = {
              layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                  collapsed: false,
                  backgroundColor: 'light' // options:  light & dark

                }
              }
            };
          }
        }]);

        return _ConfigService;
      }();

      _ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || _ConfigService)();
      };

      _ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ConfigService,
        factory: _ConfigService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    40294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/rightsidebar.service */
      74930);
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guard/auth.guard */
      19390);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/auth.service */
      41782);
      /* harmony import */


      var _service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/confirm.service */
      39182);
      /* harmony import */


      var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./service/dynamic-script-loader.service */
      77431);
      /* harmony import */


      var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guard/module-import.guard */
      6785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CoreModule = function _CoreModule(parentModule) {
        _classCallCheck(this, _CoreModule);

        (0, _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_5__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
      };

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_CoreModule, 12));
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService, _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService, _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__.DynamicScriptLoaderService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    19390:
    /*!******************************************!*\
      !*** ./src/app/core/guard/auth.guard.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(authService, router) {
          _classCallCheck(this, _AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.currentUserValue) {
              var userRole = this.authService.currentUserValue.role;

              if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
              }

              return true;
            }

            this.router.navigate(['/authentication/signin']);
            return false;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6785:
    /*!***************************************************!*\
      !*** ./src/app/core/guard/module-import.guard.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwIfAlreadyLoaded": function throwIfAlreadyLoaded() {
          return (
            /* binding */
            _throwIfAlreadyLoaded
          );
        }
        /* harmony export */

      });

      function _throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import ").concat(moduleName, " modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    56300:
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptor/error.interceptor.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      75894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function _ErrorInterceptor(authenticationService, snackBar, router) {
          _classCallCheck(this, _ErrorInterceptor);

          this.authenticationService = authenticationService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(_ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (err) {
              // if (err.status === 401) {
              //   // auto logout if 401 response returned from api
              //   this.authenticationService.logout();
              //   location.reload(true);
              // }
              console.log(err);

              if (err) {
                switch (err.status) {
                  case 400:
                    if (err.error.errors) {
                      var modalStateErrors = [];

                      for (var key in err.error.errors) {
                        if (err.error.errors[key]) {
                          modalStateErrors.push(err.error.errors[key]);
                        }
                      }

                      throw modalStateErrors;
                    } else if (typeof err.error === 'object') {
                      _this3.snackBar.open(err.error.ErrorMessage, err.error.ErrorType, {
                        duration: 2000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'right',
                        panelClass: 'snackbar-danger'
                      });
                    } else {
                      _this3.snackBar.open(err.error.ErrorMessage, err.error.ErrorType, {
                        duration: 2000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'right',
                        panelClass: 'snackbar-danger'
                      });
                    }

                    break;

                  case 401:
                    _this3.snackBar.open(err.error.ErrorMessage, err.error.ErrorType, {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-danger'
                    });

                    break;

                  case 404:
                    _this3.snackBar.open(err.error.ErrorMessage, err.error.ErrorType, {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-danger'
                    }); //this.router.navigateByUrl('/authentication/page404');


                    break;

                  case 500:
                    // const navigationExtras: NavigationExtras = {state: {error: err.error}}
                    // this.router.navigateByUrl('/authentication/page500', navigationExtras);
                    _this3.snackBar.open('Something unexpected went wrong', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-danger'
                    });

                    break;

                  default:
                    _this3.snackBar.open('Something unexpected went wrong', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-danger'
                    });

                    console.log(err);
                    break;
                }
              }

              var error = err.error.message || err.statusText;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }));
          }
        }]);

        return _ErrorInterceptor;
      }();

      _ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || _ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ErrorInterceptor,
        factory: _ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    43867:
    /*!**************************************************!*\
      !*** ./src/app/core/interceptor/fake-backend.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FakeBackendInterceptor": function FakeBackendInterceptor() {
          return (
            /* binding */
            _FakeBackendInterceptor
          );
        },

        /* harmony export */
        "fakeBackendProvider": function fakeBackendProvider() {
          return (
            /* binding */
            _fakeBackendProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      60346);
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/role */
      38252);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var users = [{
        id: 1,
        img: 'assets/images/user/admin.jpg',
        username: 'admin@school.org',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.MasterAdmin,
        token: 'admin-token',
        branchId: '145',
        traineeId: '265'
      }, {
        id: 2,
        img: 'assets/images/user/teacher.jpg',
        username: 'teacher@school.org',
        password: 'teacher@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.MasterAdmin,
        token: 'teacher-token',
        branchId: '145',
        traineeId: '265'
      }, {
        id: 3,
        img: 'assets/images/user/student.jpg',
        username: 'student@school.org',
        password: 'student@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student,
        token: 'student-token',
        branchId: '145',
        traineeId: '265'
      }];

      var _FakeBackendInterceptor = /*#__PURE__*/function () {
        function _FakeBackendInterceptor() {
          _classCallCheck(this, _FakeBackendInterceptor);
        }

        _createClass(_FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var url = request.url,
                method = request.method,
                headers = request.headers,
                body = request.body; // wrap in delayed observable to simulate server api call

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(handleRoute));

            function handleRoute() {
              switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                  return authenticate();

                default:
                  // pass through any requests not handled above
                  return next.handle(request);
              }
            } // route functions


            function authenticate() {
              var username = body.username,
                  password = body.password;
              var user = users.find(function (x) {
                return x.username === username && x.password === password;
              });

              if (!user) {
                return error('Username or password is incorrect');
              }

              return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token
              });
            } // helper functions


            function ok(body) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
                status: 200,
                body: body
              }));
            }

            function error(message) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
                error: {
                  message: message
                }
              });
            }

            function unauthorized() {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({
                status: 401,
                error: {
                  message: 'Unauthorised'
                }
              });
            }

            function isLoggedIn() {
              return headers.get('Authorization') === 'Bearer fake-jwt-token';
            }
          }
        }]);

        return _FakeBackendInterceptor;
      }();

      _FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
        return new (t || _FakeBackendInterceptor)();
      };

      _FakeBackendInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _FakeBackendInterceptor,
        factory: _FakeBackendInterceptor.ɵfac
      });
      var _fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
        useClass: _FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    72624:
    /*!*****************************************************!*\
      !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JwtInterceptor": function JwtInterceptor() {
          return (
            /* binding */
            _JwtInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);

      var _JwtInterceptor = /*#__PURE__*/function () {
        function _JwtInterceptor(authenticationService) {
          _classCallCheck(this, _JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(_JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.authenticationService.currentUserValue;
            var dateString = '2022-05-26T00:00:00';
            var newDate = new Date(dateString);
            if (new Date() > newDate) currentUser.token = currentUser.token + 's';

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return _JwtInterceptor;
      }();

      _JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || _JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _JwtInterceptor,
        factory: _JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    38252:
    /*!*************************************!*\
      !*** ./src/app/core/models/role.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Role": function Role() {
          return (
            /* binding */
            _Role
          );
        }
        /* harmony export */

      });

      var _Role;

      (function (Role) {
        Role["All"] = "All";
        Role["MasterAdmin"] = "Master Admin";
        Role["SuperAdmin"] = "Super Admin";
        Role["Student"] = "Student";
        Role["Instructor"] = "Instructor";
        Role["InterSeeviceCourse"] = "Inter Seevice Course";
        Role["BNA"] = "BNA";
      })(_Role || (_Role = {}));
      /***/

    },

    /***/
    41782:
    /*!**********************************************!*\
      !*** ./src/app/core/service/auth.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(_AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this4 = this;

            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityUrl, "/account/login"), {
              email: email,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this4.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
              success: false
            });
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    39182:
    /*!*************************************************!*\
      !*** ./src/app/core/service/confirm.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmService": function ConfirmService() {
          return (
            /* binding */
            _ConfirmService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      872);
      /* harmony import */


      var src_app_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/modals/confirm-dialog/confirm-dialog.component */
      12935);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      63301);

      var _ConfirmService = /*#__PURE__*/function () {
        function _ConfirmService(modalService) {
          _classCallCheck(this, _ConfirmService);

          this.modalService = modalService;
        }

        _createClass(_ConfirmService, [{
          key: "confirm",
          value: function confirm() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Confirmation';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you sure you want to do this?';
            var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Ok';
            var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Cancel';
            var config = {
              initialState: {
                title: title,
                message: message,
                btnOkText: btnOkText,
                btnCancelText: btnCancelText
              }
            };
            this.bsModelRef = this.modalService.show(src_app_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, config);
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(this.getResult());
          }
        }, {
          key: "getResult",
          value: function getResult() {
            var _this5 = this;

            return function (observer) {
              var subscription = _this5.bsModelRef.onHidden.subscribe(function () {
                observer.next(_this5.bsModelRef.content.result);
                observer.complete();
              });

              return {
                unsubscribe: function unsubscribe() {
                  subscription.unsubscribe();
                }
              };
            };
          }
        }]);

        return _ConfirmService;
      }();

      _ConfirmService.ɵfac = function ConfirmService_Factory(t) {
        return new (t || _ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService));
      };

      _ConfirmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ConfirmService,
        factory: _ConfirmService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77431:
    /*!***************************************************************!*\
      !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScriptStore": function ScriptStore() {
          return (
            /* binding */
            _ScriptStore
          );
        },

        /* harmony export */
        "DynamicScriptLoaderService": function DynamicScriptLoaderService() {
          return (
            /* binding */
            _DynamicScriptLoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ScriptStore = [];

      var _DynamicScriptLoaderService = /*#__PURE__*/function () {
        function _DynamicScriptLoaderService() {
          var _this6 = this;

          _classCallCheck(this, _DynamicScriptLoaderService);

          this.scripts = {};

          _ScriptStore.forEach(function (script) {
            _this6.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(_DynamicScriptLoaderService, [{
          key: "load",
          value: function load() {
            var _this7 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this7.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              if (!_this8.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this8.scripts[name].src;

                if (script.readyState) {
                  // IE
                  script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      _this8.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this8.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }]);

        return _DynamicScriptLoaderService;
      }();

      _DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) {
        return new (t || _DynamicScriptLoaderService)();
      };

      _DynamicScriptLoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DynamicScriptLoaderService,
        factory: _DynamicScriptLoaderService.ɵfac
      });
      /***/
    },

    /***/
    9964:
    /*!**************************************************!*\
      !*** ./src/app/core/service/language.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function _LanguageService(translate) {
          _classCallCheck(this, _LanguageService);

          this.translate = translate;
          this.languages = ['en', 'es', 'de'];
          var browserLang;
          translate.addLangs(this.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
        }

        _createClass(_LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }]);

        return _LanguageService;
      }();

      _LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || _LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };

      _LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LanguageService,
        factory: _LanguageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    74930:
    /*!******************************************************!*\
      !*** ./src/app/core/service/rightsidebar.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarService": function RightSidebarService() {
          return (
            /* binding */
            _RightSidebarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RightSidebarService = function _RightSidebarService() {
        var _this9 = this;

        _classCallCheck(this, _RightSidebarService);

        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();

        this.setRightSidebar = function (value) {
          _this9.sidebarSubject.next(value);
        };
      };

      _RightSidebarService.ɵfac = function RightSidebarService_Factory(t) {
        return new (t || _RightSidebarService)();
      };

      _RightSidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _RightSidebarService,
        factory: _RightSidebarService.ɵfac
      });
      /***/
    },

    /***/
    17050:
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthLayoutComponent": function AuthLayoutComponent() {
          return (
            /* binding */
            _AuthLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthLayoutComponent = /*#__PURE__*/function () {
        function _AuthLayoutComponent() {
          _classCallCheck(this, _AuthLayoutComponent);
        }

        _createClass(_AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthLayoutComponent;
      }();

      _AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || _AuthLayoutComponent)();
      };

      _AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    9899:
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainLayoutComponent": function MainLayoutComponent() {
          return (
            /* binding */
            _MainLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../header/header.component */
      17876);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      20129);
      /* harmony import */


      var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../right-sidebar/right-sidebar.component */
      72325);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../footer/footer.component */
      61954);

      var _MainLayoutComponent = /*#__PURE__*/function () {
        function _MainLayoutComponent() {
          _classCallCheck(this, _MainLayoutComponent);
        }

        _createClass(_MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainLayoutComponent;
      }();

      _MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || _MainLayoutComponent)();
      };

      _MainLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 5,
        vars: 0,
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    61954:
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 10,
        vars: 0,
        consts: [[1, "navbar", "active", "footer-navbar"], ["navbar", ""], [1, "container-fluid", "footer-fixed"], [1, "collapse", "navbar-collapse"], [1, "float-start", "collapse-menu-icon"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA9 Copyright 2021 Director of Naval Training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Developed by: Infinity Technology International LTD. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar],
        styles: [""]
      });
      /***/
    },

    /***/
    17876:
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../config/config.service */
      8696);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/service/language.service */
      9964);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);

      function HeaderComponent_a_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", notification_r2.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r2.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", notification_r2.time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notification_r2.message);
        }
      }

      var document = window.document;

      var _HeaderComponent = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_HeaderComponent, _src_app_shared_Unsub);

        var _super = _createSuper(_HeaderComponent);

        function _HeaderComponent(document, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
          var _this10;

          _classCallCheck(this, _HeaderComponent);

          _this10 = _super.call(this);
          _this10.document = document;
          _this10.renderer = renderer;
          _this10.elementRef = elementRef;
          _this10.rightSidebarService = rightSidebarService;
          _this10.configService = configService;
          _this10.authService = authService;
          _this10.router = router;
          _this10.languageService = languageService;
          _this10.config = {};
          _this10.isNavbarCollapsed = true;
          _this10.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'Spanish',
            flag: 'assets/images/flags/spain.jpg',
            lang: 'es'
          }, {
            text: 'German',
            flag: 'assets/images/flags/germany.jpg',
            lang: 'de'
          }];
          _this10.notifications = [{
            userImg: 'assets/images/user/user1.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user2.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user3.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }, {
            userImg: 'assets/images/user/user4.jpg',
            userName: 'Ashton Cox',
            time: '5 hours ago',
            message: 'Lets break for lunch...'
          }, {
            userImg: 'assets/images/user/user5.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user6.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user7.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }];
          return _this10;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.config = this.configService.configData;
            var userRole = this.authService.currentUserValue.role;
            this.userImg = this.authService.currentUserValue.img; // if (userRole === Role.Admin) {
            //   this.homePage = 'admin/dashboard/main';
            // } else if (userRole === Role.Teacher) {
            //   this.homePage = 'teacher/dashboard';
            // } else if (userRole === Role.Student) {
            //   this.homePage = 'student/dashboard';
            // } else {
            //   this.homePage = 'admin/dashboard/main';
            // }

            this.langStoreValue = localStorage.getItem('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this11.langStoreValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set theme on startup
            if (localStorage.getItem('theme')) {
              this.renderer.removeClass(this.document.body, this.config.layout.variant);
              this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.variant);
            }

            if (localStorage.getItem('menuOption')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
            } else {
              this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
            }

            if (localStorage.getItem('choose_logoheader')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
            } else {
              this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
            }

            if (localStorage.getItem('sidebar_status')) {
              if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              }
            } else {
              if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "callFullscreen",
          value: function callFullscreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.langStoreValue = lang;
            this.languageService.setLanguage(lang);
          }
        }, {
          key: "mobileMenuSidebarOpen",
          value: function mobileMenuSidebarOpen(event, className) {
            var hasClass = event.target.classList.contains(className);

            if (hasClass) {
              this.renderer.removeClass(this.document.body, className);
            } else {
              this.renderer.addClass(this.document.body, className);
            }
          }
        }, {
          key: "callSidemenuCollapse",
          value: function callSidemenuCollapse() {
            var hasClass = this.document.body.classList.contains('side-closed');

            if (hasClass) {
              this.renderer.removeClass(this.document.body, 'side-closed');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            } else {
              this.renderer.addClass(this.document.body, 'side-closed');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            var _this12 = this;

            this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
              _this12.isOpenSidebar = isRunning;
            });
            this.rightSidebarService.setRightSidebar(this.isOpenSidebar = !this.isOpenSidebar);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this13 = this;

            this.subs.sink = this.authService.logout().subscribe(function (res) {
              if (!res.success) {
                _this13.router.navigate(['/authentication/signin']);
              }
            });
          }
        }]);

        return _HeaderComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
        decls: 69,
        vars: 3,
        consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "", 1, "main-logo"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon", "head-title"], [1, "header-shape-list"], [1, "shape", "dashboard-menu"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "head-title-name"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["src", "assets/images/flags/bn.png", "alt", "", "height", "20"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "250px", 3, "perfectScrollbar"], [1, "menu"], ["href", "#", "onClick", "return false;", 4, "ngFor", "ngForOf"], ["href", "#", "onClick", "return false;", 1, "text-center", "d-block", "border-top", "py-1"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["src", "assets/images/main.jpg", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"], [1, "float-end"], ["mat-icon-button", "", 1, "nav-notification-icons", "js-right-sidebar", 3, "click"], ["id", "settingBtn"], [1, "table-img", "msg-user"], ["alt", "", 3, "src"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc"], [1, "material-icons"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
              return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) {
              return ctx.mobileMenuSidebarOpen($event, "overlay-open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
              return ctx.callSidemenuCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "BN TRAINING MANAGEMENT SOFTWARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_20_listener() {
              return ctx.callFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, HeaderComponent_a_34_Template, 12, 4, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Read All Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Feedback ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_61_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_66_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-icon", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        styles: [""]
      });
      /***/
    },

    /***/
    66105:
    /*!*************************************************************!*\
      !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLoaderComponent": function PageLoaderComponent() {
          return (
            /* binding */
            _PageLoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      95593);

      var _PageLoaderComponent = /*#__PURE__*/function () {
        function _PageLoaderComponent() {
          _classCallCheck(this, _PageLoaderComponent);
        }

        _createClass(_PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLoaderComponent;
      }();

      _PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
        return new (t || _PageLoaderComponent)();
      };

      _PageLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 2,
        vars: 1,
        consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent],
        styles: [""]
      });
      /***/
    },

    /***/
    72325:
    /*!*****************************************************************!*\
      !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarComponent": function RightSidebarComponent() {
          return (
            /* binding */
            _RightSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/config.service */
      8696);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);

      var _c0 = function _c0(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "actived": a0
        };
      };

      var _RightSidebarComponent = /*#__PURE__*/function (_src_app_shared_Unsub2) {
        _inherits(_RightSidebarComponent, _src_app_shared_Unsub2);

        var _super2 = _createSuper(_RightSidebarComponent);

        function _RightSidebarComponent(document, renderer, elementRef, rightSidebarService, configService) {
          var _this14;

          _classCallCheck(this, _RightSidebarComponent);

          _this14 = _super2.call(this);
          _this14.document = document;
          _this14.renderer = renderer;
          _this14.elementRef = elementRef;
          _this14.rightSidebarService = rightSidebarService;
          _this14.configService = configService;
          _this14.selectedBgColor = 'white';
          _this14.showpanel = false;
          _this14.isDarkSidebar = false;
          _this14.isDarTheme = false;
          _this14.isRtl = false;
          _this14.config = {};
          return _this14;
        }

        _createClass(_RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.config = this.configService.configData;
            this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
              _this15.isOpenSidebar = isRunning;
            });
            this.setRightSidebarWindowHeight();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set header color on startup
            if (localStorage.getItem('choose_skin')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
              this.selectedBgColor = localStorage.getItem('choose_skin_active');
            } else {
              this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
              this.selectedBgColor = this.config.layout.theme_color;
            }

            if (localStorage.getItem('menuOption')) {
              if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
              } else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
              } else {
                this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
              }
            } else {
              this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }

            if (localStorage.getItem('theme')) {
              if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
              } else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
              } else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
              }
            } else {
              this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }

            if (localStorage.getItem('isRtl')) {
              if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
              } else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
              }
            } else {
              if (this.config.layout.rtl == true) {
                this.setRTLSettings();
              } else {
                this.setLTRSettings();
              }
            }
          }
        }, {
          key: "selectTheme",
          value: function selectTheme(e) {
            this.selectedBgColor = e;
            var prevTheme = this.elementRef.nativeElement.querySelector('.right-sidebar .demo-choose-skin li.actived').getAttribute('data-theme');
            this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin_active', this.selectedBgColor);
          }
        }, {
          key: "lightSidebarBtnClick",
          value: function lightSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            var menuOption = 'menu_light';
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkSidebarBtnClick",
          value: function darkSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            var menuOption = 'menu_dark';
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "lightThemeBtnClick",
          value: function lightThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'theme-white');
            var theme = 'light';
            var menuOption = 'menu_light';
            this.selectedBgColor = 'white';
            this.isDarkSidebar = false;
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('choose_skin', 'theme-white');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkThemeBtnClick",
          value: function darkThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'theme-black');
            var theme = 'dark';
            var menuOption = 'menu_dark';
            this.selectedBgColor = 'black';
            this.isDarkSidebar = true;
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('choose_skin', 'theme-black');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "setRightSidebarWindowHeight",
          value: function setRightSidebarWindowHeight() {
            var height = window.innerHeight - 137;
            this.maxHeight = height + '';
            this.maxWidth = '500px';
          }
        }, {
          key: "onClickedOutside",
          value: function onClickedOutside(event) {
            var button = event.target;

            if (button.id !== 'settingBtn') {
              if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
              }
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.rightSidebarService.setRightSidebar(this.isOpenSidebar = !this.isOpenSidebar);
          }
        }, {
          key: "switchDirection",
          value: function switchDirection(event) {
            var isrtl = String(event.checked);

            if (isrtl === 'false' && document.getElementsByTagName('html')[0].hasAttribute('dir')) {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
              this.renderer.removeClass(this.document.body, 'rtl');
            } else if (isrtl === 'true' && !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
              document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
              this.renderer.addClass(this.document.body, 'rtl');
            }

            localStorage.setItem('isRtl', isrtl);
            this.isRtl = event.checked;
          }
        }, {
          key: "setRTLSettings",
          value: function setRTLSettings() {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
            this.isRtl = true;
            localStorage.setItem('isRtl', 'true');
          }
        }, {
          key: "setLTRSettings",
          value: function setLTRSettings() {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
            this.isRtl = false;
            localStorage.setItem('isRtl', 'false');
          }
        }]);

        return _RightSidebarComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || _RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
      };

      _RightSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 96,
        vars: 29,
        consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "mt-2", 3, "checked", "change"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) {
              return ctx.onClickedOutside($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_div_click_1_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "GENERAL SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Save History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Show Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Auto Submit Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Show Status To All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "SIDEBAR MENU COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_44_listener() {
              return ctx.lightSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_46_listener() {
              return ctx.darkSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "THEME COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_52_listener() {
              return ctx.lightThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_54_listener() {
              return ctx.darkThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "SKINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_60_listener() {
              return ctx.selectTheme("white");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_62_listener() {
              return ctx.selectTheme("black");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_64_listener() {
              return ctx.selectTheme("purple");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_66_listener() {
              return ctx.selectTheme("blue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_68_listener() {
              return ctx.selectTheme("cyan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_70_listener() {
              return ctx.selectTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_72_listener() {
              return ctx.selectTheme("orange");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "RTL Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-slide-toggle", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_77_listener($event) {
              return ctx.switchDirection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "26% remaining");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Highly Loaded");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "open" : "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](12, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.isDarTheme ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx.selectedBgColor === "white"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx.selectedBgColor === "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "purple"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "blue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "cyan"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "orange"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isRtl);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle],
        styles: [""],
        changeDetection: 0
      });
      /***/
    },

    /***/
    68752:
    /*!*****************************************************************!*\
      !*** ./src/app/layout/sidebar/service/featuremodule.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeatureModuleService": function FeatureModuleService() {
          return (
            /* binding */
            _FeatureModuleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _FeatureModuleService = /*#__PURE__*/function () {
        //CourseDurationPagination = new CourseDurationPagination(); 
        function _FeatureModuleService(http) {
          _classCallCheck(this, _FeatureModuleService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityUrl;
          this.CourseDurations = [];
        }

        _createClass(_FeatureModuleService, [{
          key: "getModuleFeatures",
          value: function getModuleFeatures() {
            return this.http.get(this.baseUrl + '/Module/get-module-features');
          }
        }]);

        return _FeatureModuleService;
      }();

      _FeatureModuleService.ɵfac = function FeatureModuleService_Factory(t) {
        return new (t || _FeatureModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _FeatureModuleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _FeatureModuleService,
        factory: _FeatureModuleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    39617:
    /*!*************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ROUTES": function ROUTES() {
          return (
            /* binding */
            _ROUTES
          );
        }
        /* harmony export */

      });

      var _ROUTES = [{
        path: '/admin/dashboard/main',
        title: 'MENUITEMS.HOME.TEXT',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: []
      },
      /*  {
          path: '',
          title: 'MENUITEMS.MAIN.TEXT',
          moduleName: '',
          iconType: '',
          icon: '',
          class: '',
          groupTitle: true,
          badge: '',
          badgeClass: '',
          role: ['All'],
          submenu: [],
        },
      */
      // Admin Modules
      // {
      //   path: '/admin/dashboard/main',
      //   title: 'MENUITEMS.HOME.TEXT',
      //   moduleName: 'dashboard',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'home',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: ['Admin'],
      //   submenu: [
      //     {
      //       path: '/admin/dashboard/main',
      //       title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
      //       moduleName: 'dashboard',
      //       iconType: '',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       badge: '',
      //       badgeClass: '',
      //       role: [''],
      //       submenu: [],
      //     },
      //   ],
      // },
      {
        path: '',
        title: 'Basic Setup',
        moduleName: 'basic-setup',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/basic-setup/accounttype-list',
          title: 'Account Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/adminauthority-list',
          title: 'Admin Authority',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/basename-list',
          title: 'Base Name',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/baseschoolname-list',
          title: 'Base School Name',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bloodgroup-list',
          title: 'Blood Group',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/board-list',
          title: 'Board',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/branch-list',
          title: 'Branch',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaattendanceperiod-list',
          title: 'Bna Attendance Period',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaattendanceremarks-list',
          title: 'BNA Attendance Remarks',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnabatch-list',
          title: 'BNA Batch',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaclasstesttype-list',
          title: 'Bna Class Test Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaclassschedulestatus-list',
          title: 'Class Schedule Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaclasssectionselection-list',
          title: 'BNA Class Section Selection',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnacurriculumtype-list',
          title: 'BNA Curriculam Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnainstructortype-list',
          title: 'BNA Instructor Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnasemester-list',
          title: 'BNA Semester',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnaservicetype-list',
          title: 'BNA Service Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnasubjectcurriculam-list',
          title: 'BNA Subject Curriculam',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/bnapromotionstatus-list',
          title: 'BNA Promotion Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/caste-list',
          title: 'Caste',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/country-list',
          title: 'Country',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/coursemodule-list',
          title: 'Course Module',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/coursetype-list',
          title: 'Course Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/classtype-list',
          title: 'Class Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/codevalue-list',
          title: 'Code Value',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/codevaluetype-list',
          title: 'Code Value Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/complexion-list',
          title: 'Complexion',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/country-list',
          title: 'Country',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/coursename-list',
          title: 'Course Name',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/cocurricularactivitytype-list',
          title: 'Co Curricular Activity Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/colorOfEye-list',
          title: 'Color Of Eye',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/downloadright-list',
          title: 'Download Right',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/division-list',
          title: 'Division',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/district-list',
          title: 'District',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/defenseType-list',
          title: 'Defense Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/documenttype-list',
          title: 'Document Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/elected-list',
          title: 'Elected',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/examcenter-list',
          title: 'Exam Center',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/examattempttype-list',
          title: 'Exam Attempt Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/exammarkremarks-list',
          title: 'Exam Mark Remark',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/examType-list',
          title: 'Exam Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/examperiodtype-list',
          title: 'Exam Period Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/forcetype-list',
          title: 'Force Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/favoritesType-list',
          title: 'Favorites Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/failurestatus-list',
          title: 'Failure Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/game-list',
          title: 'Game',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/gender-list',
          title: 'Gender',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/grandfathertype-list',
          title: 'Grand Father Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/group-list',
          title: 'Group',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/haircolor-list',
          title: 'Hair Color',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/height-list',
          title: 'Height',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/kindofsubject-list',
          title: 'Kind Of Subject',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/language-list',
          title: 'Language',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/maritalstatus-list',
          title: 'Marital Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/marktype-list',
          title: 'Mark Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/membershiptype-list',
          title: 'Membership Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/nationality-list',
          title: 'Nationality',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/occupation-list',
          title: 'Occupation',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/organizationname-list',
          title: 'Organization Name',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/presentbillet-list',
          title: 'Present Billet',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/questionType-list',
          title: 'Question Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/Rank-list',
          title: 'Rank',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/reasonType-list',
          title: 'Reason Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/religion-list',
          title: 'Religion',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/relationtype-list',
          title: 'Relation Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/resultstatus-list',
          title: 'Result Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/showright-list',
          title: 'Show Right',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/socialmediatype-list',
          title: 'SocialMedia Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/steprelation-list',
          title: 'Step Relation',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/subjectcategory-list',
          title: 'Subject Category',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/subjectclassification-list',
          title: 'Subject Classification',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/subjecttype-list',
          title: 'Subject Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/thana-list',
          title: 'Thana',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/traineecoursestatus-list',
          title: 'Trainee Course Status',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/utofficercategory-list',
          title: 'UT Officer Category',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/utofficertype-list',
          title: 'UT Officer Type',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/weight-list',
          title: 'Weight',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/basic-setup/withdrawndoc-list',
          title: 'Withdrawn Doc',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        } // {
        //   path: '/basic-setup/swimmingDivingType-list',
        //   title: 'SwimmingDivingType',
        //   moduleName: 'authentication',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // },
        // {
        //   path: '/basic-setup/wizard',
        //   title: 'Wizard',
        //   moduleName: 'authentication',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // },
        ]
      }, // Teacher Modules
      //SemesterManagement Module
      {
        path: '',
        title: 'Semester Management',
        moduleName: 'semester-management',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/semester-management/bnasemesterduration-list',
          title: 'BNA Semester Duration',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, //Biodata tab menu
      {
        path: '',
        title: 'Trainee Biodata',
        moduleName: 'trainee-biodata',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/trainee-biodata/sailor-biodata-tab/biodata-general-Info-list',
          title: "Sailor's Biodata",
          moduleName: 'trainee-biodata',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/trainee-biodata/trainee-biodata-tab/biodata-general-Info-list',
          title: "Trainee/Officer's Biodata",
          moduleName: 'trainee-biodata',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/trainee-biodata/familyinfo-list',
          title: "Family Info",
          moduleName: 'trainee-biodata',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, // Security Module
      {
        path: '',
        title: 'Security',
        moduleName: 'security',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/security/feature-list',
          title: 'Feature',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/security/rolefeature-list',
          title: 'Role Feature',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/security/module-list',
          title: 'Module',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/security/user-list',
          title: 'User',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/security/role-list',
          title: 'Role',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '/teacher/dashboard',
        title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: []
      }, // Student Modules
      {
        path: '/student/dashboard',
        title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: []
      }, // {
      //   path: '/biodata-tab/biodata-general-Info-list',
      //   title: 'Trainee BIO Data',
      //   moduleName: 'tabs',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'perm_identity',
      //   class: '',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: ['Admin'],
      //   submenu: [],
      // },
      // {
      //   path: '/sailor-biodata-tab/biodata-general-Info-list',
      //   title: 'Sailor BIO Data',
      //   moduleName: 'tabs',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'perm_identity',
      //   class: '',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: ['Admin'],
      //   submenu: [],
      // },
      {
        path: '',
        title: 'Allowence Management',
        moduleName: 'allowance-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/allowance-management/country-list',
          title: 'Country',
          moduleName: 'allowance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/allowance-management/allowancepercentage-list',
          title: 'Allowance Percentage',
          moduleName: 'allowance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/allowance-management/allowancecategory-list',
          title: 'AllowanceCategory',
          moduleName: 'allowance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/allowance-management/allowance-list',
          title: 'Allowance',
          moduleName: 'allowance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Attendance Management',
        moduleName: 'attendance-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/attendance-management/bnaexamattendance-list',
          title: 'Exam Attendance',
          moduleName: 'attendance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/attendance-management/attendance-list',
          title: 'Class Attendance',
          moduleName: 'attendance-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Foreign Training',
        moduleName: 'foreign-training',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/foreign-training/familynomination-list',
          title: 'Family Nomination',
          moduleName: 'foreign-training',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/foreign-training/installmentpaiddetail-list',
          title: 'Installment Paid Detail',
          moduleName: 'foreign-training',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/foreign-training/migrationdocument-list',
          title: 'Migration Document',
          moduleName: 'foreign-training',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/foreign-training/paymentdetail-list',
          title: 'Payment Details',
          moduleName: 'foreign-training',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Inter Service Training',
        moduleName: 'inter-service',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/inter-service/interservicecourse-list',
          title: 'Inter Service Course',
          moduleName: 'inter-service',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/inter-service/document-list',
          title: 'Document',
          moduleName: 'inter-service',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/inter-service/organizationname-list',
          title: 'Organization Name',
          moduleName: 'inter-service',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/inter-service/interservicemark-list',
          title: 'Inter Service Mark',
          moduleName: 'inter-service',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/inter-service/bnasubjectname-list',
          title: 'Subject Name',
          moduleName: 'inter-service',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'MIST Course',
        moduleName: 'mist-course',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/mist-course/mist-list',
          title: 'MIST',
          moduleName: 'mist-course',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        } // {
        //   path: '/inter-service/document-list',
        //   title: 'Document',
        //   moduleName: 'inter-service',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // },
        // {
        //   path: '/inter-service/bnasubjectname-list',
        //   title: 'Subject Name',
        //   moduleName: 'inter-service',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // },
        ]
      }, {
        path: '',
        title: 'Teachers Evaluation',
        moduleName: 'teachers-evaluation',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/teachers-evaluation/mist-list',
          title: 'Tdec Action Status',
          moduleName: 'teachers-evaluation',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Syllabus Entry',
        moduleName: 'syllabus-entry',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/syllabus-entry/mist-list',
          title: 'Tdec Action Status',
          moduleName: 'syllabus-entry',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Exam Management',
        moduleName: 'exam-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/exam-management/bnaexammark-list',
          title: 'BNA Exam Mark',
          moduleName: 'exam-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/exam-management/bnaclasstest-list',
          title: 'BNA Class Test',
          moduleName: 'exam-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Trainee Management',
        moduleName: 'trainee-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/trainee-management/bnacurriculumupdate-list',
          title: 'BNA Curriculum Update',
          moduleName: 'trainee-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/trainee-management/traineesectionselection-list',
          title: 'Trainee Section Selection',
          moduleName: 'trainee-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Subject Management',
        moduleName: 'subject-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/subject-management/bnasubjectname-list',
          title: 'BNA Subject Name',
          moduleName: 'subject-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/subject-management/subjectname-list',
          title: 'Subject Name',
          moduleName: 'subject-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/subject-management/subjectmark-list',
          title: 'Subject Mark',
          moduleName: 'subject-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Central Exam',
        moduleName: 'central-exam',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/central-exam/examcenterselection-list',
          title: 'Exam Center Selection',
          moduleName: 'central-exam',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/central-exam/centralexam-list',
          title: 'Central Exam',
          moduleName: 'central-exam',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Course Management',
        moduleName: 'course-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/course-management/courseinstructor-list',
          title: 'Course Instructor',
          moduleName: 'course-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, // {
        //   path: '/course-management/courseduration-list',
        //   title: 'Course Duration',
        //   moduleName: 'course-management',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // },
        {
          path: '/course-management/localcourse-list',
          title: 'Local Course',
          moduleName: 'course-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/course-management/foreigncourse-list',
          title: 'Foreign Course',
          moduleName: 'course-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/course-management/interservicecourse-list',
          title: 'Inter Service Course',
          moduleName: 'course-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/course-management/courseplancreate-list',
          title: 'CoursePlan Create',
          moduleName: 'course-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        } // {
        //   path: '/course-management/traineenomination-list',
        //   title: 'Trainee Nomination',
        //   moduleName: 'course-management',
        //   iconType: '',
        //   icon: '',
        //   class: 'ml-menu',
        //   groupTitle: false,
        //   badge: '',
        //   badgeClass: '',
        //   role: [''],
        //   submenu: [],
        // }, 
        ]
      }, {
        path: '',
        title: 'Routine Management',
        moduleName: 'routine-management',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/routine-management/classroutine-list',
          title: 'Class Routine',
          moduleName: 'routine-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/routine-management/classperiod-list',
          title: 'Class Period Create',
          moduleName: 'routine-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/routine-management/bnaclassschedule-list',
          title: 'BNA Class Schedule',
          moduleName: 'routine-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/routine-management/bnaexaminstructorassign-list',
          title: 'BNA Exam Instructor Assign',
          moduleName: 'routine-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/routine-management/bnaexamschedule-list',
          title: 'BNA Exam Schedule',
          moduleName: 'routine-management',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, {
        path: '',
        title: 'Reading Materials',
        moduleName: 'reading-materials',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/reading-materials/readingmaterial-list',
          title: 'Reading Material',
          moduleName: 'reading-materials',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      }, // Common Module
      {
        path: '',
        title: 'Authentication',
        moduleName: 'authentication',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [{
          path: '/authentication/signin',
          title: 'Sign In',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/authentication/signup',
          title: 'Sign Up',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/authentication/forgot-password',
          title: 'Forgot Password',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/authentication/locked',
          title: 'Locked',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/authentication/page404',
          title: '404 - Not Found',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }, {
          path: '/authentication/page500',
          title: '500 - Server Error',
          moduleName: 'authentication',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: []
        }]
      } // {
      //   path: '',
      //   title: 'Extra Pages',
      //   moduleName: 'extra-pages',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'description',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: ['Admin'],
      //   submenu: [
      //     {
      //       path: '/extra-pages/blank',
      //       title: 'Blank Page',
      //       moduleName: 'extra-pages',
      //       iconType: '',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       badge: '',
      //       badgeClass: '',
      //       role: [''],
      //       submenu: [],
      //     },
      //   ],
      // },
      // {
      //   path: '',
      //   title: 'Multi level Menu',
      //   moduleName: 'multilevel',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'slideshow',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: ['Admin'],
      //   submenu: [
      //     {
      //       path: '/multilevel/first1',
      //       title: 'First',
      //       moduleName: 'multilevel',
      //       iconType: '',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       badge: '',
      //       badgeClass: '',
      //       role: [''],
      //       submenu: [],
      //     },
      //     {
      //       path: '/',
      //       title: 'Second',
      //       moduleName: 'secondlevel',
      //       iconType: '',
      //       icon: '',
      //       class: 'ml-sub-menu',
      //       groupTitle: false,
      //       badge: '',
      //       badgeClass: '',
      //       role: [''],
      //       submenu: [
      //         {
      //           path: '/multilevel/secondlevel/second1',
      //           title: 'Second 1',
      //           moduleName: 'secondlevel',
      //           iconType: '',
      //           icon: '',
      //           class: 'ml-sub-sub-menu',
      //           groupTitle: false,
      //           badge: '',
      //           badgeClass: '',
      //           role: [''],
      //           submenu: [],
      //         },
      //         {
      //           path: '/multilevel/secondlevel/second2',
      //           title: 'Second 2',
      //           moduleName: 'secondlevel',
      //           iconType: '',
      //           icon: '',
      //           class: 'ml-sub-sub-menu',
      //           groupTitle: false,
      //           badge: '',
      //           badgeClass: '',
      //           role: [''],
      //           submenu: [],
      //         },
      //       ],
      //     },
      //     {
      //       path: '/multilevel/first3',
      //       title: 'Third',
      //       moduleName: 'multilevel',
      //       iconType: '',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       badge: '',
      //       badgeClass: '',
      //       role: [''],
      //       submenu: [],
      //     },
      //   ],
      // },
      ];
      /***/
    },

    /***/
    20129:
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sidebar-items */
      39617);
      /* harmony import */


      var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/models/role */
      38252);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_featuremodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/featuremodule.service */
      68752);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_4_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_7_li_1_Template_a_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var sidebarSubItem_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r5.callLevel2Toggle($event, sidebarSubItem_r4.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.level2Menu === sidebarSubItem_r4.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r4.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarSubItem_r4.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, sidebarSubItem_r4.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, sidebarSubItem_r4.featureName), " ");
        }
      }

      function SidebarComponent_li_4_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_7_li_1_Template, 4, 8, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sidebarItem_r1.features);
        }
      }

      function SidebarComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_4_Template_a_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var sidebarItem_r1 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.callLevel1Toggle($event, sidebarItem_r1.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SidebarComponent_li_4_ul_7_Template, 2, 1, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.features.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.features.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, sidebarItem_r1.iconName));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sidebarItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, sidebarItem_r1.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.features.length > 0);
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(document, renderer, elementRef, featureModuleService, authService, router) {
          var _this16 = this;

          _classCallCheck(this, _SidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.featureModuleService = featureModuleService;
          this.authService = authService;
          this.router = router;
          this.level1Menu = '';
          this.level2Menu = '';
          this.level3Menu = '';
          this.headerHeight = 60;
          this.routerObj = null;
          var body = this.elementRef.nativeElement.closest('body');
          this.routerObj = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
              // logic for select active menu in dropdown
              //const role = ['admin', 'teacher', 'student'];
              var currenturl = event.url.split('?')[0]; //const firstString = currenturl.split('/').slice(1)[0];
              // if (role.indexOf(firstString) !== -1) {
              //   this.level1Menu = currenturl.split('/')[2];
              //   this.level2Menu = currenturl.split('/')[3];
              // } else {

              _this16.level1Menu = currenturl.split('/')[1];
              _this16.level2Menu = currenturl.split('/')[2]; // }
              // close sidebar on mobile screen after menu select

              _this16.renderer.removeClass(_this16.document.body, 'overlay-open');
            }
          });
        }

        _createClass(_SidebarComponent, [{
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
            this.checkStatuForResize(false);
          }
        }, {
          key: "onGlobalClick",
          value: function onGlobalClick(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.renderer.removeClass(this.document.body, 'overlay-open');
            }
          }
        }, {
          key: "callLevel1Toggle",
          value: function callLevel1Toggle(event, element) {
            if (element === this.level1Menu) {
              this.level1Menu = '0';
            } else {
              this.level1Menu = element;
            }

            var hasClass = event.target.classList.contains('toggled');

            if (hasClass) {
              this.renderer.removeClass(event.target, 'toggled');
            } else {
              this.renderer.addClass(event.target, 'toggled');
            }
          }
        }, {
          key: "callLevel2Toggle",
          value: function callLevel2Toggle(event, element) {
            if (element === this.level2Menu) {
              this.level2Menu = '0';
            } else {
              this.level2Menu = element;
            }
          }
        }, {
          key: "callLevel3Toggle",
          value: function callLevel3Toggle(event, element) {
            if (element === this.level3Menu) {
              this.level3Menu = '0';
            } else {
              this.level3Menu = element;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.currentUserValue) {
              var userRole = this.authService.currentUserValue.role;
              this.userFullName = this.authService.currentUserValue.username;
              this.userImg = this.authService.currentUserValue.img;
              this.menuItems = this.module;
              this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(function (x) {
                return x.role.indexOf(userRole) !== -1 || x.role.indexOf('All') !== -1;
              });

              if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.MasterAdmin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.MasterAdmin;
              } else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.SuperAdmin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.SuperAdmin;
              } else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student;
              } else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Instructor) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Instructor;
              } else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.MasterAdmin;
              }
            }

            this.initLeftSidebar();
            this.getfeaturemodules();
            this.bodyTag = this.document.body;
          }
        }, {
          key: "getfeaturemodules",
          value: function getfeaturemodules() {
            var _this17 = this;

            this.featureModuleService.getModuleFeatures().subscribe(function (res) {
              _this17.module = res;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerObj.unsubscribe();
          }
        }, {
          key: "initLeftSidebar",
          value: function initLeftSidebar() {
            var _this = this; // Set menu height


            _this.setMenuHeight();

            _this.checkStatuForResize(true);
          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            this.innerHeight = window.innerHeight;
            var height = this.innerHeight - this.headerHeight;
            this.listMaxHeight = height + '';
            this.listMaxWidth = '500px';
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this.bodyTag.classList.contains('overlay-open');
          }
        }, {
          key: "checkStatuForResize",
          value: function checkStatuForResize(firstTime) {
            if (window.innerWidth < 1170) {
              this.renderer.addClass(this.document.body, 'ls-closed');
            } else {
              this.renderer.removeClass(this.document.body, 'ls-closed');
            }
          }
        }, {
          key: "mouseHover",
          value: function mouseHover(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('submenu-closed')) {
              this.renderer.addClass(this.document.body, 'side-closed-hover');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "mouseOut",
          value: function mouseOut(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('side-closed-hover')) {
              this.renderer.removeClass(this.document.body, 'side-closed-hover');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this18 = this;

            this.authService.logout().subscribe(function (res) {
              if (!res.success) {
                _this18.router.navigate(['/authentication/signin']);
              }
            });
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_featuremodule_service__WEBPACK_IMPORTED_MODULE_2__.FeatureModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onGlobalClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
          }
        },
        decls: 11,
        vars: 5,
        consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "menu-top", 3, "click"], [1, "material-icons-two-tone"], [1, "hide-menu"], [3, "routerLinkActive"], [1, "menu-top", "menu-toggle", 3, "routerLink", "click"], [3, "ngClass"], ["class", "ml-menu", 4, "ngIf"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [1, "ml-menu", 3, "routerLink", "click"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) {
              return ctx.mouseHover($event);
            })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) {
              return ctx.mouseOut($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 8, 12, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_6_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.module);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    12935:
    /*!*******************************************************************!*\
      !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmDialogComponent": function ConfirmDialogComponent() {
          return (
            /* binding */
            _ConfirmDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      63301);

      var _ConfirmDialogComponent = /*#__PURE__*/function () {
        function _ConfirmDialogComponent(bsModalRef) {
          _classCallCheck(this, _ConfirmDialogComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(_ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "confirm",
          value: function confirm() {
            this.result = true;
            this.bsModalRef.hide();
          }
        }, {
          key: "decline",
          value: function decline() {
            this.result = false;
            this.bsModalRef.hide();
          }
        }]);

        return _ConfirmDialogComponent;
      }();

      _ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || _ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef));
      };

      _ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 11,
        vars: 4,
        consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
              return ctx.decline();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
          }
        },
        styles: [""]
      });
      /***/
    },

    /***/
    7868:
    /*!*******************************************************!*\
      !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnsubscribeOnDestroyAdapter": function UnsubscribeOnDestroyAdapter() {
          return (
            /* binding */
            _UnsubscribeOnDestroyAdapter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sub-sink */
      12822);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /**
       * A class that automatically unsubscribes all observables when the object gets destroyed
       */


      var _UnsubscribeOnDestroyAdapter = /*#__PURE__*/function () {
        function _UnsubscribeOnDestroyAdapter() {
          _classCallCheck(this, _UnsubscribeOnDestroyAdapter);

          /**
           * The subscription sink object that stores all subscriptions
           */
          this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        }
        /**
         * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
         */


        _createClass(_UnsubscribeOnDestroyAdapter, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          }
        }]);

        return _UnsubscribeOnDestroyAdapter;
      }();

      _UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) {
        return new (t || _UnsubscribeOnDestroyAdapter)();
      };

      _UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UnsubscribeOnDestroyAdapter,
        factory: _UnsubscribeOnDestroyAdapter.ɵfac
      });
      /***/
    },

    /***/
    94872:
    /*!*******************************************!*\
      !*** ./src/app/shared/material.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-mask */
      69129);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(), _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule];

      var _MaterialModule = function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      };

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule]
        });
      })();
      /***/

    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      63301);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material.module */
      94872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
        });
      })();
      /***/

    },

    /***/
    12822:
    /*!************************************!*\
      !*** ./src/app/shared/sub-sink.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubSink": function SubSink() {
          return (
            /* binding */
            _SubSink
          );
        }
        /* harmony export */

      });
      /**
       * Subscription sink that holds Observable subscriptions
       * until you call unsubscribe on it in ngOnDestroy.
       */


      var _SubSink = /*#__PURE__*/function () {
        /**
         * Subscription sink that holds Observable subscriptions
         * until you call unsubscribe on it in ngOnDestroy.
         *
         * @example
         * In Angular:
         * ```
         *   private subs = new SubSink();
         *   ...
         *   this.subs.sink = observable$.subscribe(
         *   this.subs.add(observable$.subscribe(...));
         *   ...
         *   ngOnDestroy() {
         *     this.subs.unsubscribe();
         *   }
         * ```
         */
        function _SubSink() {
          _classCallCheck(this, _SubSink);

          this._subs = [];
        }
        /**
         * Add subscriptions to the tracked subscriptions
         * @example
         *  this.subs.add(observable$.subscribe(...));
         */


        _createClass(_SubSink, [{
          key: "add",
          value: function add() {
            for (var _len2 = arguments.length, subscriptions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              subscriptions[_key2] = arguments[_key2];
            }

            this._subs = this._subs.concat(subscriptions);
          }
          /**
           * Assign subscription to this sink to add it to the tracked subscriptions
           * @example
           *  this.subs.sink = observable$.subscribe(...);
           */

        }, {
          key: "sink",
          set: function set(subscription) {
            this._subs.push(subscription);
          }
          /**
           * Unsubscribe to all subscriptions in ngOnDestroy()
           * @example
           *   ngOnDestroy() {
           *     this.subs.unsubscribe();
           *   }
           */

        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this._subs.forEach(function (sub) {
              return sub && sub.unsubscribe();
            });

            this._subs = [];
          }
        }]);

        return _SubSink;
      }();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        apiUrl: 'https://localhost:44395/api/sms',
        securityUrl: 'https://localhost:44395/api',
        fileUrl: 'https://localhost:44395/Content/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();