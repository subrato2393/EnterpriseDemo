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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_bna-exam-management_bna-exam-management_module_ts"], {
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
    96784:
    /*!***************************************************************************!*\
      !*** ./src/app/bna-exam-management/bna-exam-management-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamManagementRoutingModule": function BNAExamManagementRoutingModule() {
          return (
            /* binding */
            _BNAExamManagementRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bnaexammark_bnaexammark_list_bnaexammark_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bnaexammark/bnaexammark-list/bnaexammark-list.component */
      92461);
      /* harmony import */


      var _bnaexammark_new_bnaexammark_new_bnaexammark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bnaexammark/new-bnaexammark/new-bnaexammark.component */
      10317);
      /* harmony import */


      var _bnaclasstest_bnaclasstest_list_bnaclasstest_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bnaclasstest/bnaclasstest-list/bnaclasstest-list.component */
      86586);
      /* harmony import */


      var _bnaclasstest_new_bnaclasstest_new_bnaclasstest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bnaclasstest/new-bnaclasstest/new-bnaclasstest.component */
      65862);
      /* harmony import */


      var _bnaexaminstructorassign_bnaexaminstructorassign_list_bnaexaminstructorassign_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bnaexaminstructorassign/bnaexaminstructorassign-list/bnaexaminstructorassign-list.component */
      76310);
      /* harmony import */


      var _bnaexaminstructorassign_new_bnaexaminstructorassign_new_bnaexaminstructorassign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bnaexaminstructorassign/new-bnaexaminstructorassign/new-bnaexaminstructorassign.component */
      70299);
      /* harmony import */


      var _bnaexammark_bnaexammark_approve_bnaexammark_approve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bnaexammark/bnaexammark-approve/bnaexammark-approve.component */
      33112);
      /* harmony import */


      var _bnaexammark_new_bnaexammarkinstructor_new_bnaexammarkinstructor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bnaexammark/new-bnaexammarkinstructor/new-bnaexammarkinstructor.component */
      20586);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'bnaexammark-list',
        component: _bnaexammark_bnaexammark_list_bnaexammark_list_component__WEBPACK_IMPORTED_MODULE_0__.BNAExamMarkListComponent
      }, {
        path: 'update-bnaexammark/:bnaExamMarkId',
        component: _bnaexammark_new_bnaexammark_new_bnaexammark_component__WEBPACK_IMPORTED_MODULE_1__.NewBNAExamMarkComponent
      }, {
        path: 'add-bnaexammark',
        component: _bnaexammark_new_bnaexammark_new_bnaexammark_component__WEBPACK_IMPORTED_MODULE_1__.NewBNAExamMarkComponent
      }, {
        path: 'add-bnaexammarkinstructor/:traineeId',
        component: _bnaexammark_new_bnaexammarkinstructor_new_bnaexammarkinstructor_component__WEBPACK_IMPORTED_MODULE_7__.NewBnaExammarkinstructor
      }, {
        path: 'approve-bnaexammark',
        component: _bnaexammark_bnaexammark_approve_bnaexammark_approve_component__WEBPACK_IMPORTED_MODULE_6__.BNAExamMarkApproveComponent
      }, {
        path: 'bnaexaminstructorassign-list',
        component: _bnaexaminstructorassign_bnaexaminstructorassign_list_bnaexaminstructorassign_list_component__WEBPACK_IMPORTED_MODULE_4__.BNAExamInstructorAssignListComponent
      }, {
        path: 'update-bnaexaminstructorassign/:bnaExamInstructorAssignId',
        component: _bnaexaminstructorassign_new_bnaexaminstructorassign_new_bnaexaminstructorassign_component__WEBPACK_IMPORTED_MODULE_5__.NewBNAExamInstructorAssignComponent
      }, {
        path: 'add-bnaexaminstructorassign',
        component: _bnaexaminstructorassign_new_bnaexaminstructorassign_new_bnaexaminstructorassign_component__WEBPACK_IMPORTED_MODULE_5__.NewBNAExamInstructorAssignComponent
      }, {
        path: 'bnaclasstest-list',
        component: _bnaclasstest_bnaclasstest_list_bnaclasstest_list_component__WEBPACK_IMPORTED_MODULE_2__.BnaClassTestListComponent
      }, {
        path: 'update-bnaclasstest/:bnaClassTestId',
        component: _bnaclasstest_new_bnaclasstest_new_bnaclasstest_component__WEBPACK_IMPORTED_MODULE_3__.NewBnaClassTestComponent
      }, {
        path: 'add-bnaclasstest',
        component: _bnaclasstest_new_bnaclasstest_new_bnaclasstest_component__WEBPACK_IMPORTED_MODULE_3__.NewBnaClassTestComponent
      }];

      var _BNAExamManagementRoutingModule = function _BNAExamManagementRoutingModule() {
        _classCallCheck(this, _BNAExamManagementRoutingModule);
      };

      _BNAExamManagementRoutingModule.ɵfac = function BNAExamManagementRoutingModule_Factory(t) {
        return new (t || _BNAExamManagementRoutingModule)();
      };

      _BNAExamManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _BNAExamManagementRoutingModule
      });
      _BNAExamManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_BNAExamManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    17752:
    /*!*******************************************************************!*\
      !*** ./src/app/bna-exam-management/bna-exam-management.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamManagementModule": function BNAExamManagementModule() {
          return (
            /* binding */
            _BNAExamManagementModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-material-file-input */
      4904);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _bna_exam_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bna-exam-management-routing.module */
      96784);
      /* harmony import */


      var _bnaexammark_bnaexammark_list_bnaexammark_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bnaexammark/bnaexammark-list/bnaexammark-list.component */
      92461);
      /* harmony import */


      var _bnaexammark_new_bnaexammark_new_bnaexammark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bnaexammark/new-bnaexammark/new-bnaexammark.component */
      10317);
      /* harmony import */


      var _bnaclasstest_bnaclasstest_list_bnaclasstest_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bnaclasstest/bnaclasstest-list/bnaclasstest-list.component */
      86586);
      /* harmony import */


      var _bnaclasstest_new_bnaclasstest_new_bnaclasstest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bnaclasstest/new-bnaclasstest/new-bnaclasstest.component */
      65862);
      /* harmony import */


      var _bnaexammark_bnaexammark_approve_bnaexammark_approve_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bnaexammark/bnaexammark-approve/bnaexammark-approve.component */
      33112);
      /* harmony import */


      var _bnaexaminstructorassign_bnaexaminstructorassign_list_bnaexaminstructorassign_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bnaexaminstructorassign/bnaexaminstructorassign-list/bnaexaminstructorassign-list.component */
      76310);
      /* harmony import */


      var _bnaexaminstructorassign_new_bnaexaminstructorassign_new_bnaexaminstructorassign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bnaexaminstructorassign/new-bnaexaminstructorassign/new-bnaexaminstructorassign.component */
      70299);
      /* harmony import */


      var _bnaexammark_new_bnaexammarkinstructor_new_bnaexammarkinstructor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bnaexammark/new-bnaexammarkinstructor/new-bnaexammarkinstructor.component */
      20586);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BNAExamManagementModule = function _BNAExamManagementModule() {
        _classCallCheck(this, _BNAExamManagementModule);
      };

      _BNAExamManagementModule.ɵfac = function BNAExamManagementModule_Factory(t) {
        return new (t || _BNAExamManagementModule)();
      };

      _BNAExamManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _BNAExamManagementModule
      });
      _BNAExamManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _bna_exam_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.BNAExamManagementRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__.MaterialFileInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_BNAExamManagementModule, {
          declarations: [_bnaexammark_bnaexammark_list_bnaexammark_list_component__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkListComponent, _bnaexammark_new_bnaexammark_new_bnaexammark_component__WEBPACK_IMPORTED_MODULE_2__.NewBNAExamMarkComponent, _bnaexammark_bnaexammark_approve_bnaexammark_approve_component__WEBPACK_IMPORTED_MODULE_5__.BNAExamMarkApproveComponent, _bnaclasstest_bnaclasstest_list_bnaclasstest_list_component__WEBPACK_IMPORTED_MODULE_3__.BnaClassTestListComponent, _bnaclasstest_new_bnaclasstest_new_bnaclasstest_component__WEBPACK_IMPORTED_MODULE_4__.NewBnaClassTestComponent, _bnaexaminstructorassign_bnaexaminstructorassign_list_bnaexaminstructorassign_list_component__WEBPACK_IMPORTED_MODULE_6__.BNAExamInstructorAssignListComponent, _bnaexaminstructorassign_new_bnaexaminstructorassign_new_bnaexaminstructorassign_component__WEBPACK_IMPORTED_MODULE_7__.NewBNAExamInstructorAssignComponent, _bnaexammark_new_bnaexammarkinstructor_new_bnaexammarkinstructor_component__WEBPACK_IMPORTED_MODULE_8__.NewBnaExammarkinstructor],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _bna_exam_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.BNAExamManagementRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__.MaterialFileInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule]
        });
      })();
      /***/

    },

    /***/
    86586:
    /*!***************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaclasstest/bnaclasstest-list/bnaclasstest-list.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BnaClassTestListComponent": function BnaClassTestListComponent() {
          return (
            /* binding */
            _BnaClassTestListComponent
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


      var _service_BnaClassTest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/BnaClassTest.service */
      30091);
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

      function BnaClassTestListComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r19 + 1, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bna Semester");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.bnaSemester, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "subject Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.subjectCategory, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bna Subject Curriculum");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r22.bnaSubjectCurriculum, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bnaSubjectName");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r23.bnaSubjectName, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bna Class Test Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BnaClassTestListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.bnaClassTestType, " ");
        }
      }

      function BnaClassTestListComponent_mat_header_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/bna-exam-management/update-bnaclasstest", a1];
      };

      function BnaClassTestListComponent_mat_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BnaClassTestListComponent_mat_cell_65_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function BnaClassTestListComponent_mat_cell_65_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var row_r25 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r28.deleteItem(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r25.bnaClassTestId));
        }
      }

      function BnaClassTestListComponent_mat_header_row_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BnaClassTestListComponent_mat_row_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _BnaClassTestListComponent = /*#__PURE__*/function () {
        function _BnaClassTestListComponent(snackBar, BnaClassTestService, router, confirmService) {
          _classCallCheck(this, _BnaClassTestListComponent);

          this.snackBar = snackBar;
          this.BnaClassTestService = BnaClassTestService;
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
          this.displayedColumns = ['ser', 'bnaSemester', 'subjectCategory', 'bnaSubjectCurriculum', 'bnaSubjectName', 'bnaClassTestType', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_BnaClassTestListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBnaClassTests();
          }
        }, {
          key: "getBnaClassTests",
          value: function getBnaClassTests() {
            var _this2 = this;

            this.isLoading = true;
            this.BnaClassTestService.getBnaClassTests(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(function (response) {
              _this2.dataSource.data = response.items;
              _this2.paging.length = response.totalItemsCount;
              _this2.isLoading = false;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getBnaClassTests();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getBnaClassTests();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this3 = this;

            var id = row.bnaClassTestId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this3.BnaClassTestService["delete"](id).subscribe(function () {
                  _this3.getBnaClassTests();

                  _this3.snackBar.open('Information Deleted Successfully ', '', {
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

        return _BnaClassTestListComponent;
      }();

      _BnaClassTestListComponent.ɵfac = function BnaClassTestListComponent_Factory(t) {
        return new (t || _BnaClassTestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_BnaClassTest_service__WEBPACK_IMPORTED_MODULE_1__.BnaClassTestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _BnaClassTestListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BnaClassTestListComponent,
        selectors: [["app-BnaClassTest-list"]],
        decls: 69,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/bna-exam-management/add-bnaclasstest", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaSemester"], ["matColumnDef", "subjectCategory"], ["matColumnDef", "bnaSubjectCurriculum"], ["matColumnDef", "bnaSubjectName"], ["matColumnDef", "bnaClassTestType"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function BnaClassTestListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BNA Class Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "BNA Class Test");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BnaClassTestListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BnaClassTestListComponent_Template_button_click_32_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, BnaClassTestListComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, BnaClassTestListComponent_mat_cell_47_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BnaClassTestListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BnaClassTestListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BnaClassTestListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, BnaClassTestListComponent_mat_cell_53_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BnaClassTestListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BnaClassTestListComponent_mat_cell_56_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BnaClassTestListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, BnaClassTestListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, BnaClassTestListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BnaClassTestListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BnaClassTestListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BnaClassTestListComponent_mat_cell_65_Template, 7, 3, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, BnaClassTestListComponent_mat_header_row_66_Template, 1, 0, "mat-header-row", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BnaClassTestListComponent_mat_row_67_Template, 1, 0, "mat-row", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-paginator", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function BnaClassTestListComponent_Template_mat_paginator_page_68_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    65862:
    /*!*************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaclasstest/new-bnaclasstest/new-bnaclasstest.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBnaClassTestComponent": function NewBnaClassTestComponent() {
          return (
            /* binding */
            _NewBnaClassTestComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_BnaClassTest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/BnaClassTest.service */
      30091);
      /* harmony import */


      var _service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/bnaexammark.service */
      31482);
      /* harmony import */


      var src_app_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/course-management/service/traineenomination.service */
      22247);
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function NewBnaClassTestComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r9.text, " ");
        }
      }

      function NewBnaClassTestComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Base School Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function NewBnaClassTestComponent_mat_option_40_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r11.onCourseNameSelectionChangeGetSubjectAndTraineeList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r10.text, " ");
        }
      }

      function NewBnaClassTestComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Course Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_mat_option_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r13.text, " ");
        }
      }

      function NewBnaClassTestComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_mat_option_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r14.text, " ");
        }
      }

      function NewBnaClassTestComponent_mat_error_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " bnaClassTestTypeId is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r33 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r17.paging.pageIndex - 1) * ctx_r17.paging.pageSize + i_r33 + 1, " ");
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Trainee");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", element_r34.rankPosition, " ", element_r34.traineeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("-(P No ", element_r34.traineePNo, ")");
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CT/ST-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CT/ST-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CT/ST-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CT/ST-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CT/ST-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBnaClassTestComponent_div_58_mat_header_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewBnaClassTestComponent_div_58_mat_row_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewBnaClassTestComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Class Test Entry Screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-table", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NewBnaClassTestComponent_div_58_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NewBnaClassTestComponent_div_58_mat_cell_7_Template, 2, 1, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NewBnaClassTestComponent_div_58_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NewBnaClassTestComponent_div_58_mat_cell_10_Template, 4, 3, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, NewBnaClassTestComponent_div_58_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NewBnaClassTestComponent_div_58_mat_cell_13_Template, 3, 0, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NewBnaClassTestComponent_div_58_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NewBnaClassTestComponent_div_58_mat_cell_16_Template, 3, 0, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, NewBnaClassTestComponent_div_58_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, NewBnaClassTestComponent_div_58_mat_cell_19_Template, 3, 0, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NewBnaClassTestComponent_div_58_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, NewBnaClassTestComponent_div_58_mat_cell_22_Template, 3, 0, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, NewBnaClassTestComponent_div_58_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, NewBnaClassTestComponent_div_58_mat_cell_25_Template, 3, 0, "mat-cell", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, NewBnaClassTestComponent_div_58_mat_header_row_26_Template, 1, 0, "mat-header-row", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, NewBnaClassTestComponent_div_58_mat_row_27_Template, 1, 0, "mat-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r8.traineeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumnsForTraineeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumnsForTraineeList);
        }
      }

      var _NewBnaClassTestComponent = /*#__PURE__*/function () {
        function _NewBnaClassTestComponent(snackBar, confirmService, CodeValueService, BnaClassTestService, bnaexammarkService, traineeNominationService, fb, router, route) {
          _classCallCheck(this, _NewBnaClassTestComponent);

          this.snackBar = snackBar;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BnaClassTestService = BnaClassTestService;
          this.bnaexammarkService = bnaexammarkService;
          this.traineeNominationService = traineeNominationService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isShown = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumnsForTraineeList = ['sl', 'trainee', 'obtainedMark1', 'obtainedMark2', 'obtainedMark3', 'obtainedMark4', 'obtainedMark5'];
        }

        _createClass(_NewBnaClassTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var id = this.route.snapshot.paramMap.get('bnaClassTestId');

            if (id) {
              this.pageTitle = 'Edit BNA Class Test';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BnaClassTestService.find(+id).subscribe(function (res) {
                _this4.BnaClassTestForm.patchValue({
                  bnaClassTestId: res.bnaClassTestId,
                  bnaSemesterDurationId: res.bnaSemesterDurationId,
                  bnaSemesterId: res.bnaSemesterId,
                  subjectCategoryId: res.subjectCategoryId,
                  bnaSubjectCurriculumId: res.bnaSubjectCurriculumId,
                  traineeId: res.traineeId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  bnaClassTestTypeId: res.bnaClassTestTypeId,
                  totalMark: res.totalMark,
                  percentage: res.percentage,
                  obtainedMark1: res.obtainedMark1,
                  obtainedMark2: res.obtainedMark2,
                  obtainedMark3: res.obtainedMark3,
                  obtainedMark4: res.obtainedMark4,
                  obtainedMark5: res.obtainedMark5,
                  isApproved: res.isApproved,
                  approvedBy: res.approvedBy,
                  approvedDate: res.approvedDate,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create BNA Class Test';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getBnaSemesterDurations();
            this.getselectedbnasemester();
            this.getsubjectCategory();
            this.getbnaSubjectCurriculum();
            this.getselectedbnasubjectname();
            this.getbnaClassTestType();
            this.getselectedbaseschools();
            this.getselectedcoursedurationbyschoolname();
            this.onCourseNameSelectionChangeGetSubjectAndTraineeList("");
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BnaClassTestForm = this.fb.group({
              bnaClassTestId: [0],
              baseSchoolNameId: [],
              courseName: [''],
              courseNameId: [],
              bnaSemesterDurationId: [''],
              bnaSemesterId: [''],
              subjectCategoryId: [''],
              bnaSubjectCurriculumId: [''],
              traineeId: [''],
              bnaSubjectNameId: [''],
              bnaClassTestTypeId: [''],
              totalMark: [],
              percentage: [''],
              obtainedMark1: [''],
              obtainedMark2: [''],
              obtainedMark3: [''],
              obtainedMark4: [''],
              obtainedMark5: [''],
              isApproved: [],
              approvedBy: [''],
              approvedDate: [],
              status: [],
              isActive: [true],
              traineeList: this.fb.array([this.createTraineeData()])
            });
          }
        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              obtainedMark1: [''],
              obtainedMark2: [''],
              obtainedMark3: [''],
              obtainedMark4: [''],
              obtainedMark5: [''],
              traineeId: ['']
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectAndTraineeList",
          value: function onCourseNameSelectionChangeGetSubjectAndTraineeList(dropdown) {
            var _this5 = this;

            if (dropdown.isUserInput) {
              this.isShown = true;
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseNameTextArr = dropdown.source.value.text.split('_');
              var courseName = courseNameTextArr[0];
              var coursetitle = courseNameTextArr[1];
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              console.log("Course Duration");
              console.log(courseDurationId);
              this.BnaClassTestForm.get('courseName').setValue(courseName);
              this.BnaClassTestForm.get('courseNameId').setValue(courseNameId);
              var baseSchoolNameId = this.BnaClassTestForm.value['baseSchoolNameId'];
              var courseNameId = this.BnaClassTestForm.value['courseNameId'];

              if (baseSchoolNameId != null && courseNameId != null) {
                this.bnaexammarkService.getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId).subscribe(function (res) {
                  _this5.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId = res;
                });
              }

              this.bnaexammarkService.getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this5.selectedCourseDuration = res;

                _this5.traineeNominationService.getTraineeNominationByCourseDurationId(_this5.selectedCourseDuration).subscribe(function (res) {
                  _this5.traineeList = res; //console.log(this.traineeList);
                });
              });
            }
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this6 = this;

            this.bnaexammarkService.getselectedbaseschools().subscribe(function (res) {
              _this6.selectedbaseschools = res;
            });
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this7 = this;

            var baseSchoolNameId = this.BnaClassTestForm.value['baseSchoolNameId'];
            this.bnaexammarkService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              _this7.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "getBnaSemesterDurations",
          value: function getBnaSemesterDurations() {
            var _this8 = this;

            this.BnaClassTestService.getselectedBnaSemesterDurations().subscribe(function (res) {
              _this8.selectedSemesterDuration = res;
            });
          }
        }, {
          key: "getselectedbnasemester",
          value: function getselectedbnasemester() {
            var _this9 = this;

            this.BnaClassTestService.getselectedbnasemester().subscribe(function (res) {
              _this9.selectedbnasemester = res;
            });
          }
        }, {
          key: "getsubjectCategory",
          value: function getsubjectCategory() {
            var _this10 = this;

            this.BnaClassTestService.getselectedsubjectCategory().subscribe(function (res) {
              _this10.selectedsubjectCategory = res;
            });
          }
        }, {
          key: "getbnaSubjectCurriculum",
          value: function getbnaSubjectCurriculum() {
            var _this11 = this;

            this.BnaClassTestService.getselectedbnaSubjectCurriculum().subscribe(function (res) {
              _this11.selectedbnaSubjectCurriculum = res;
            });
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            var _this12 = this;

            this.BnaClassTestService.getselectedbnasubjectname().subscribe(function (res) {
              _this12.selectedbnaSubjectName = res;
            });
          }
        }, {
          key: "getbnaClassTestType",
          value: function getbnaClassTestType() {
            var _this13 = this;

            this.BnaClassTestService.getselectedbnaClassTestType().subscribe(function (res) {
              _this13.selectedbnaClassTestType = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var id = this.BnaClassTestForm.get('bnaClassTestId').value;
            var bnaSubjectNameId = this.BnaClassTestForm.value['bnaSubjectNameId'];
            var bnaClassTestTypeId = this.BnaClassTestForm.value['bnaClassTestTypeId'];
            console.log(this.BnaClassTestForm);

            for (var i = 0; i < this.traineeList.length; i++) {
              this.traineeList[i]["bnaSubjectNameId"] = bnaSubjectNameId;
              this.traineeList[i]["bnaClassTestTypeId"] = bnaClassTestTypeId; //this.traineeNominationListForAttendance[i]["attendanceDate"] = this.datepipe.transform((new Date), 'MM/dd/yyyy');
            } //   if (id) {
            //     this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(result => {
            //       console.log(result);
            //       if (result) {
            //         this.BnaClassTestService.update(+id,this.BnaClassTestForm.value).subscribe(response => {
            //           this.router.navigateByUrl('/bna-exam-management/bnaclasstest-list');
            //           this.snackBar.open('Information Updated Successfully ', '', {
            //             duration: 2000,
            //             verticalPosition: 'bottom',
            //             horizontalPosition: 'right',
            //             panelClass: 'snackbar-success'
            //           });
            //         }, error => {
            //           this.validationErrors = error;
            //         })
            //       }
            //     })
            //   }else {
            //     this.BnaClassTestService.submit(this.BnaClassTestForm.value).subscribe(response => {
            //       this.router.navigateByUrl('/bna-exam-management/bnaclasstest-list');
            //       this.snackBar.open('Information Inserted Successfully ', '', {
            //         duration: 2000,
            //         verticalPosition: 'bottom',
            //         horizontalPosition: 'right',
            //         panelClass: 'snackbar-success'
            //       });
            //     }, error => {
            //       this.validationErrors = error;
            //     })
            //   }

          }
        }]);

        return _NewBnaClassTestComponent;
      }();

      _NewBnaClassTestComponent.ɵfac = function NewBnaClassTestComponent_Factory(t) {
        return new (t || _NewBnaClassTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_2__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_BnaClassTest_service__WEBPACK_IMPORTED_MODULE_3__.BnaClassTestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_5__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _NewBnaClassTestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _NewBnaClassTestComponent,
        selectors: [["app-new-BnaClassTest"]],
        decls: 65,
        vars: 14,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "baseSchoolNameId", "required", "", 3, "selectionChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "courseName", "required", ""], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["formControlName", "bnaSubjectNameId", "required", ""], ["formControlName", "bnaClassTestTypeId", "required", ""], ["class", "container col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 mt-2", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", "routerLink", "/bna-exam-management/bnaclasstest-list"], [3, "value"], [3, "value", "onSelectionChange"], [1, "container", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "mt-2"], [1, "align-center"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "trainee"], ["matColumnDef", "obtainedMark1"], ["matColumnDef", "obtainedMark2"], ["matColumnDef", "obtainedMark3"], ["matColumnDef", "obtainedMark4"], ["matColumnDef", "obtainedMark5"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "t-n-pno-d"], ["appearance", "outline", 1, "example-full-width", "mt-3"], ["matInput", ""]],
        template: function NewBnaClassTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "BNA Class Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function NewBnaClassTestComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Base School Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function NewBnaClassTestComponent_Template_mat_select_selectionChange_28_listener() {
              return ctx.getselectedcoursedurationbyschoolname();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, NewBnaClassTestComponent_mat_option_31_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, NewBnaClassTestComponent_mat_error_32_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, NewBnaClassTestComponent_mat_option_40_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, NewBnaClassTestComponent_mat_error_41_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, NewBnaClassTestComponent_mat_option_49_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, NewBnaClassTestComponent_mat_error_50_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Class Test Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, NewBnaClassTestComponent_mat_option_56_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, NewBnaClassTestComponent_mat_error_57_Template, 2, 0, "mat-error", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, NewBnaClassTestComponent_div_58_Template, 28, 3, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.BnaClassTestForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedbaseschools);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BnaClassTestForm.get("baseSchoolNameId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedcoursedurationbyschoolname);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BnaClassTestForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BnaClassTestForm.get("bnaSubjectNameId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedbnaClassTestType);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BnaClassTestForm.get("bnaClassTestTypeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.BnaClassTestForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    76310:
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexaminstructorassign/bnaexaminstructorassign-list/bnaexaminstructorassign-list.component.ts ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamInstructorAssignListComponent": function BNAExamInstructorAssignListComponent() {
          return (
            /* binding */
            _BNAExamInstructorAssignListComponent
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


      var _service_bnaexaminstructorassign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/bnaexaminstructorassign.service */
      99080);
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

      function BNAExamInstructorAssignListComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r19 + 1, " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bna Exam Schedule Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.bnaExamScheduleId, " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "examDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r21.examDate, "mediumDate"), " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bnaSubjectNameId");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r22.bnaSubjectNameId, " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "baseNameId");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r23.baseNameId, " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "schoolNamesId");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamInstructorAssignListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.schoolNamesId, " ");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/bna-exam-management/update-bnaexaminstructorassign";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      function BNAExamInstructorAssignListComponent_mat_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNAExamInstructorAssignListComponent_mat_cell_65_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function BNAExamInstructorAssignListComponent_mat_cell_65_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var row_r25 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r28.deleteItem(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, row_r25.bnaExamInstructorAssignId));
        }
      }

      function BNAExamInstructorAssignListComponent_mat_header_row_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BNAExamInstructorAssignListComponent_mat_row_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _BNAExamInstructorAssignListComponent = /*#__PURE__*/function () {
        function _BNAExamInstructorAssignListComponent(snackBar, BNAExamInstructorAssignService, router, confirmService) {
          _classCallCheck(this, _BNAExamInstructorAssignListComponent);

          this.snackBar = snackBar;
          this.BNAExamInstructorAssignService = BNAExamInstructorAssignService;
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
          this.displayedColumns = ['ser', 'bnaExamScheduleId', 'examDate', 'bnaSubjectNameId', 'baseNameId', 'schoolNamesId', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_BNAExamInstructorAssignListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBNAExamInstructorAssigns();
          }
        }, {
          key: "getBNAExamInstructorAssigns",
          value: function getBNAExamInstructorAssigns() {
            var _this14 = this;

            this.isLoading = true;
            this.BNAExamInstructorAssignService.getBNAExamInstructorAssigns(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(function (response) {
              _this14.dataSource.data = response.items;
              _this14.paging.length = response.totalItemsCount;
              _this14.isLoading = false;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getBNAExamInstructorAssigns();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getBNAExamInstructorAssigns();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this15 = this;

            var id = row.bnaExamInstructorAssignId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this15.BNAExamInstructorAssignService["delete"](id).subscribe(function () {
                  _this15.getBNAExamInstructorAssigns();

                  _this15.snackBar.open('Information Deleted Successfully ', '', {
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

        return _BNAExamInstructorAssignListComponent;
      }();

      _BNAExamInstructorAssignListComponent.ɵfac = function BNAExamInstructorAssignListComponent_Factory(t) {
        return new (t || _BNAExamInstructorAssignListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_bnaexaminstructorassign_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamInstructorAssignService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _BNAExamInstructorAssignListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BNAExamInstructorAssignListComponent,
        selectors: [["app-bnaexaminstructorassign-list"]],
        decls: 69,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/bna-exam-management/add-bnaexaminstructorassign", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaExamScheduleId"], ["matColumnDef", "examDate"], ["matColumnDef", "bnaSubjectNameId"], ["matColumnDef", "baseNameId"], ["matColumnDef", "schoolNamesId"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function BNAExamInstructorAssignListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BNA Exam Instructor Assign");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "BNA Exam Instructor Assign");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BNAExamInstructorAssignListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNAExamInstructorAssignListComponent_Template_button_click_32_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, BNAExamInstructorAssignListComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, BNAExamInstructorAssignListComponent_mat_cell_47_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BNAExamInstructorAssignListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BNAExamInstructorAssignListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BNAExamInstructorAssignListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, BNAExamInstructorAssignListComponent_mat_cell_53_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BNAExamInstructorAssignListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BNAExamInstructorAssignListComponent_mat_cell_56_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BNAExamInstructorAssignListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, BNAExamInstructorAssignListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, BNAExamInstructorAssignListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BNAExamInstructorAssignListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BNAExamInstructorAssignListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BNAExamInstructorAssignListComponent_mat_cell_65_Template, 7, 3, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, BNAExamInstructorAssignListComponent_mat_header_row_66_Template, 1, 0, "mat-header-row", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BNAExamInstructorAssignListComponent_mat_row_67_Template, 1, 0, "mat-row", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-paginator", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function BNAExamInstructorAssignListComponent_Template_mat_paginator_page_68_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

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
    70299:
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexaminstructorassign/new-bnaexaminstructorassign/new-bnaexaminstructorassign.component.ts ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBNAExamInstructorAssignComponent": function NewBNAExamInstructorAssignComponent() {
          return (
            /* binding */
            _NewBNAExamInstructorAssignComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var _routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../routine-management/service/classroutine.service */
      60616);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_bnaexaminstructorassign_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/bnaexaminstructorassign.service */
      99080);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
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

      function NewBNAExamInstructorAssignComponent_div_24_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var school_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", school_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", school_r14.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_24_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Select Any School ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "School");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewBNAExamInstructorAssignComponent_div_24_Template_mat_select_selectionChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.getselectedcoursedurationbyschoolname();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewBNAExamInstructorAssignComponent_div_24_mat_option_7_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NewBNAExamInstructorAssignComponent_div_24_mat_error_8_Template, 2, 0, "mat-error", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.selectedschool);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.BNAExamInstructorAssignForm.get("baseSchoolNameId").hasError("required"));
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewBNAExamInstructorAssignComponent_mat_option_32_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var dropdown_r17 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r18.onBaseNameSelectionChangeGetModule(dropdown_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r17.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Course Title is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var semester_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", semester_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", semester_r20.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Select Any Module / Semester ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r21.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, dropdown_r22.text, "mediumDate"), " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dropdown_r23.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", dropdown_r23.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_option_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function NewBNAExamInstructorAssignComponent_mat_option_74_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var item_r24 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.onTraineeSelectionChanged(item_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r24.text, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Select Examiner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r43 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r29.paging.pageIndex - 1) * ctx_r29.paging.pageSize + i_r43 + 1, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Exam Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, element_r44.classRoutine, "mediumDate"), " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Examiner Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r45.bnaInstructorType, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Examiner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", element_r46.traineeRank, " ", element_r46.trainee, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(P No ", element_r46.traineePno, ")");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Exam Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r47.examLocation, " ");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/bna-exam-management/update-bnaexaminstructorassign";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      function NewBNAExamInstructorAssignComponent_div_85_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewBNAExamInstructorAssignComponent_div_85_mat_cell_23_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function NewBNAExamInstructorAssignComponent_div_85_mat_cell_23_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);

            var row_r48 = restoredCtx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r51.deleteItem(row_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c1, row_r48.bnaExamInstructorAssignId));
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_header_row_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_mat_row_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewBNAExamInstructorAssignComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "EXAMINER LIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-table", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](6, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NewBNAExamInstructorAssignComponent_div_85_mat_cell_8_Template, 2, 1, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](9, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NewBNAExamInstructorAssignComponent_div_85_mat_cell_11_Template, 3, 4, "mat-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](12, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, NewBNAExamInstructorAssignComponent_div_85_mat_cell_14_Template, 2, 1, "mat-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NewBNAExamInstructorAssignComponent_div_85_mat_cell_17_Template, 4, 3, "mat-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, NewBNAExamInstructorAssignComponent_div_85_mat_cell_20_Template, 2, 1, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](21, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, NewBNAExamInstructorAssignComponent_div_85_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, NewBNAExamInstructorAssignComponent_div_85_mat_cell_23_Template, 7, 3, "mat-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, NewBNAExamInstructorAssignComponent_div_85_mat_header_row_24_Template, 1, 0, "mat-header-row", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, NewBNAExamInstructorAssignComponent_div_85_mat_row_25_Template, 1, 0, "mat-row", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r11.selectedInstructorList);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumns);
        }
      }

      var _NewBNAExamInstructorAssignComponent = /*#__PURE__*/function () {
        function _NewBNAExamInstructorAssignComponent(snackBar, authService, TraineeNominationService, confirmService, ClassRoutineService, CodeValueService, BNAExamInstructorAssignService, fb, router, route) {
          _classCallCheck(this, _NewBNAExamInstructorAssignComponent);

          this.snackBar = snackBar;
          this.authService = authService;
          this.TraineeNominationService = TraineeNominationService;
          this.confirmService = confirmService;
          this.ClassRoutineService = ClassRoutineService;
          this.CodeValueService = CodeValueService;
          this.BNAExamInstructorAssignService = BNAExamInstructorAssignService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = []; //traineeId:number;

          this.isShown = false;
          this.options = [];
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['ser', 'classRoutine', 'trainee', 'bnaInstructorType', 'examLocation', 'actions'];
        }

        _createClass(_NewBNAExamInstructorAssignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            var id = this.route.snapshot.paramMap.get('bnaExamInstructorAssignId');
            this.role = this.authService.currentUserValue.role.trim();
            this.traineeId = this.authService.currentUserValue.traineeId.trim();
            this.branchId = this.authService.currentUserValue.branchId.trim();
            console.log(this.role, this.traineeId, this.branchId);

            if (id) {
              this.pageTitle = 'Edit Exam Instructor Assign';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNAExamInstructorAssignService.find(+id).subscribe(function (res) {
                _this16.BNAExamInstructorAssignForm.patchValue({
                  bnaExamInstructorAssignId: res.bnaExamInstructorAssignId,
                  baseSchoolNameId: res.baseSchoolNameId,
                  courseDurationId: res.courseDurationId,
                  courseNameId: res.courseNameId,
                  courseModuleId: res.courseModuleId,
                  bnaSubjectNameId: res.bnaSubjectNameId,
                  classRoutineId: res.classRoutineId,
                  bnaInstructorTypeId: res.bnaInstructorTypeId,
                  traineeId: res.traineeId,
                  examLocation: res.examLocation,
                  status: res.status,
                  menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Exam Instructor Assign';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();

            if (this.role === 'Super Admin') {
              this.BNAExamInstructorAssignForm.get('baseSchoolNameId').setValue(this.branchId);
              this.getselectedcoursedurationbyschoolname();
            } //this.getselectedbnasubjectname();


            this.getselectedbasename();
            this.getselectedbnainstructortype();
            this.getselectedbnaclasssectionselection();
            this.getselectedschools();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            var _this17 = this;

            this.BNAExamInstructorAssignForm = this.fb.group({
              bnaExamInstructorAssignId: [0],
              baseSchoolNameId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              courseDurationId: [],
              courseNameId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              courseName: [''],
              courseModuleId: [],
              bnaSubjectNameId: [],
              classRoutineId: [],
              bnaInstructorTypeId: [],
              traineeId: [],
              traineeName: [''],
              examLocation: [''],
              status: [1],
              isActive: [true]
            }); //autocomplete

            this.BNAExamInstructorAssignForm.get('traineeName').valueChanges.subscribe(function (value) {
              _this17.getSelectedTraineeByPno(value);
            });
          } //autocomplete

        }, {
          key: "getSelectedTraineeByPno",
          value: function getSelectedTraineeByPno(pno) {
            var _this18 = this;

            this.TraineeNominationService.getSelectedTraineeByPno(pno).subscribe(function (response) {
              _this18.options = response;
              _this18.filteredOptions = response;
            });
          } //autocomplete

        }, {
          key: "onTraineeSelectionChanged",
          value: function onTraineeSelectionChanged(item) {
            console.log(item.value);
            this.traineeId = item.value;
            this.BNAExamInstructorAssignForm.get('traineeId').setValue(item.value);
            this.BNAExamInstructorAssignForm.get('traineeName').setValue(item.text);
          }
        }, {
          key: "onBaseNameSelectionChangeGetModule",
          value: function onBaseNameSelectionChangeGetModule(dropdown) {
            var _this19 = this;

            var id = this.route.snapshot.paramMap.get('classRoutineId');

            if (id) {
              var courseDurationId = dropdown[0];
              var courseNameId = dropdown[1];
              var baseSchoolNameId = dropdown[2];
            } else {
              var baseSchoolNameId = this.BNAExamInstructorAssignForm.value['baseSchoolNameId'];
              var courseNameArr = dropdown.value.split('_');
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              this.BNAExamInstructorAssignForm.get('courseName').setValue(dropdown.text);
              this.BNAExamInstructorAssignForm.get('courseNameId').setValue(courseNameId);
              this.BNAExamInstructorAssignForm.get('courseDurationId').setValue(courseDurationId);
            }

            if (baseSchoolNameId != null && courseNameId != null) {
              this.ClassRoutineService.getSelectedCourseModuleByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this19.selectedCourseModuleByBaseSchoolAndCourseNameId = res; //console.log("after getting condition"+ this.selectedCourseModuleByBaseSchoolAndCourseNameId); 
              });
              this.ClassRoutineService.getselectedClassPeriodbyschoolandcourse(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this19.selectedclassperiod = res;
              });
            }
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this20 = this;

            this.ClassRoutineService.getselectedbaseschools().subscribe(function (res) {
              _this20.selectedbaseschool = res;
            });
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this21 = this;

            var baseSchoolNameId = this.BNAExamInstructorAssignForm.value['baseSchoolNameId']; //console.log(baseSchoolNameId);

            this.ClassRoutineService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              //console.log(res);
              _this21.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            var _this22 = this;

            var baseSchoolNameId = this.BNAExamInstructorAssignForm.value['baseSchoolNameId'];
            var courseNameId = this.BNAExamInstructorAssignForm.value['courseNameId'];
            var courseModuleId = this.BNAExamInstructorAssignForm.value['courseModuleId'];
            this.ClassRoutineService.getselectedbnasubjectnamebyparameters(baseSchoolNameId, courseNameId, courseModuleId).subscribe(function (res) {
              _this22.selectedsubjectname = res;
            });
          }
        }, {
          key: "getselectedclassroutine",
          value: function getselectedclassroutine() {
            var _this23 = this;

            var baseSchoolNameId = this.BNAExamInstructorAssignForm.value['baseSchoolNameId'];
            var courseNameId = this.BNAExamInstructorAssignForm.value['courseNameId'];
            var courseModuleId = this.BNAExamInstructorAssignForm.value['courseModuleId'];
            var bnaSubjectNameId = this.BNAExamInstructorAssignForm.value['bnaSubjectNameId'];
            this.BNAExamInstructorAssignService.getselectedclassroutinebyparameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId).subscribe(function (res) {
              _this23.selectedclassroutine = res;
            });
            this.onParametersSelectGeInstructorList();
          }
        }, {
          key: "onParametersSelectGeInstructorList",
          value: function onParametersSelectGeInstructorList() {
            var _this24 = this;

            var baseSchoolNameId = this.BNAExamInstructorAssignForm.value['baseSchoolNameId'];
            var courseNameId = this.BNAExamInstructorAssignForm.value['courseNameId'];
            var courseModuleId = this.BNAExamInstructorAssignForm.value['courseModuleId'];
            var bnaSubjectNameId = this.BNAExamInstructorAssignForm.value['bnaSubjectNameId'];
            this.isShown = true;

            if (baseSchoolNameId != null && courseNameId != null && courseModuleId != null && bnaSubjectNameId != null) {
              this.BNAExamInstructorAssignService.getSelectedInstructorByParameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId).subscribe(function (res) {
                _this24.selectedInstructorList = res;
                console.log(_this24.selectedInstructorList);
              });
            }
          }
        }, {
          key: "getselectedCourseModules",
          value: function getselectedCourseModules() {
            var _this25 = this;

            this.ClassRoutineService.getselectedCourseModules().subscribe(function (res) {
              _this25.selectedCourseModule = res;
            });
          }
        }, {
          key: "getselectedbasename",
          value: function getselectedbasename() {
            var _this26 = this;

            this.BNAExamInstructorAssignService.getselectedbasename().subscribe(function (res) {
              _this26.selectedbasename = res;
            });
          }
        }, {
          key: "getselectedschools",
          value: function getselectedschools() {
            var _this27 = this;

            this.BNAExamInstructorAssignService.getselectedschools().subscribe(function (res) {
              _this27.selectedschool = res;
            });
          }
        }, {
          key: "getselectedbnainstructortype",
          value: function getselectedbnainstructortype() {
            var _this28 = this;

            this.BNAExamInstructorAssignService.getselectedbnainstructortype().subscribe(function (res) {
              _this28.selectedinstructor = res;
            });
          }
        }, {
          key: "getselectedbnaclasssectionselection",
          value: function getselectedbnaclasssectionselection() {
            var _this29 = this;

            this.BNAExamInstructorAssignService.getselectedbnaclasssectionselection().subscribe(function (res) {
              _this29.selectedclassselect = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this30 = this;

            var id = this.BNAExamInstructorAssignForm.get('bnaExamInstructorAssignId').value; // console.log(this.BNAExamInstructorAssignForm.value)

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this30.BNAExamInstructorAssignService.update(+id, _this30.BNAExamInstructorAssignForm.value).subscribe(function (response) {
                    _this30.router.navigateByUrl('/bna-exam-management/add-bnaexaminstructorassign');

                    _this30.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this30.validationErrors = error;
                  });
                }
              });
            } else {
              this.BNAExamInstructorAssignService.submit(this.BNAExamInstructorAssignForm.value).subscribe(function (response) {
                //this.router.navigateByUrl('/bna-exam-management/add-bnaexaminstructorassign');
                _this30.onParametersSelectGeInstructorList();

                _this30.BNAExamInstructorAssignForm.reset();

                _this30.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this30.validationErrors = error;
              });
            }
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this31 = this;

            var id = row.bnaExamInstructorAssignId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this31.BNAExamInstructorAssignService["delete"](id).subscribe(function () {
                  _this31.onParametersSelectGeInstructorList();

                  _this31.snackBar.open('Information Deleted Successfully ', '', {
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

        return _NewBNAExamInstructorAssignComponent;
      }();

      _NewBNAExamInstructorAssignComponent.ɵfac = function NewBNAExamInstructorAssignComponent_Factory(t) {
        return new (t || _NewBNAExamInstructorAssignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_routine_management_service_classroutine_service__WEBPACK_IMPORTED_MODULE_4__.ClassRoutineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_5__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_bnaexaminstructorassign_service__WEBPACK_IMPORTED_MODULE_6__.BNAExamInstructorAssignService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
      };

      _NewBNAExamInstructorAssignComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _NewBNAExamInstructorAssignComponent,
        selectors: [["app-new-bnaexaminstructorassign"]],
        decls: 86,
        vars: 20,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "form-border-design", 3, "formGroup", "ngSubmit"], ["class", "col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-2", 4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName"], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "courseModuleId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "bnaSubjectNameId", 3, "selectionChange"], [3, "value"], ["formControlName", "classRoutineId"], ["formControlName", "bnaInstructorTypeId"], ["formControlName", "traineeName", "matInput", "", "type", "text", "required", "", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["matInput", "", "formControlName", "examLocation"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["class", "row create-table ex-i-asgn", 4, "ngIf"], ["formControlName", "baseSchoolNameId", "required", "", 3, "selectionChange"], [3, "value", "onSelectionChange"], [1, "row", "create-table", "ex-i-asgn"], [1, "text-center", "table-title"], [1, "container"], ["matSort", "", 1, "mat-cell", "db-tbl", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "classRoutine"], ["class", "ex-date", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "ex-date", 4, "matCellDef"], ["matColumnDef", "bnaInstructorType"], ["class", "ex-type", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "ex-type", 4, "matCellDef"], ["matColumnDef", "trainee"], ["class", "ex-name", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "ex-name", 4, "matCellDef"], ["matColumnDef", "examLocation"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], ["mat-sort-header", "", 1, "ex-date"], [1, "ex-date"], ["mat-sort-header", "", 1, "ex-type"], [1, "ex-type"], ["mat-sort-header", "", 1, "ex-name"], [1, "ex-name"], [1, "t-n-pno-d"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function NewBNAExamInstructorAssignComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Exam Instructor Assign");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function NewBNAExamInstructorAssignComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, NewBNAExamInstructorAssignComponent_div_24_Template, 9, 2, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Course Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, NewBNAExamInstructorAssignComponent_mat_option_32_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, NewBNAExamInstructorAssignComponent_mat_error_33_Template, 2, 0, "mat-error", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Semister ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewBNAExamInstructorAssignComponent_Template_mat_select_selectionChange_38_listener() {
              return ctx.getselectedbnasubjectname();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, NewBNAExamInstructorAssignComponent_mat_option_41_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, NewBNAExamInstructorAssignComponent_mat_error_42_Template, 2, 0, "mat-error", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function NewBNAExamInstructorAssignComponent_Template_mat_select_selectionChange_47_listener() {
              return ctx.getselectedclassroutine();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, NewBNAExamInstructorAssignComponent_mat_option_50_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " Routine");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, NewBNAExamInstructorAssignComponent_mat_option_58_Template, 3, 5, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " Examiner Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, NewBNAExamInstructorAssignComponent_mat_option_66_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Examiner");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-autocomplete", null, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, NewBNAExamInstructorAssignComponent_mat_option_74_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, NewBNAExamInstructorAssignComponent_mat_error_75_Template, 2, 0, "mat-error", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Exam Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, NewBNAExamInstructorAssignComponent_div_85_Template, 26, 3, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.BNAExamInstructorAssignForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.role != "Super Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedcoursedurationbyschoolname);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.BNAExamInstructorAssignForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedCourseModuleByBaseSchoolAndCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.BNAExamInstructorAssignForm.get("courseModuleId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedsubjectname);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedclassroutine);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.selectedinstructor);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.BNAExamInstructorAssignForm.get("traineeName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.BNAExamInstructorAssignForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [""]
      });
      /***/
    },

    /***/
    33112:
    /*!******************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexammark/bnaexammark-approve/bnaexammark-approve.component.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamMarkApproveComponent": function BNAExamMarkApproveComponent() {
          return (
            /* binding */
            _BNAExamMarkApproveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/bnaexammark.service */
      31482);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function BNAExamMarkApproveComponent_div_28_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r12.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r12.text, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_28_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Base School Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Base School Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function BNAExamMarkApproveComponent_div_28_Template_mat_select_selectionChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.getselectedcoursedurationbyschoolname();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BNAExamMarkApproveComponent_div_28_mat_option_7_Template, 2, 2, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BNAExamMarkApproveComponent_div_28_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.selectedbaseschools);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.BNAExamMarkForm.get("baseSchoolNameId").hasError("required"));
        }
      }

      function BNAExamMarkApproveComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function BNAExamMarkApproveComponent_mat_option_36_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r16.onCourseNameSelectionChangeGetSubjectAndTraineeList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r15.text, " ");
        }
      }

      function BNAExamMarkApproveComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Course Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_mat_option_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function BNAExamMarkApproveComponent_mat_option_45_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r19.onSubjectNameSelectionChangeGetTotalMarkAndPassMark($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r18.text, " ");
        }
      }

      function BNAExamMarkApproveComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_mat_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r21.text, " ");
        }
      }

      function BNAExamMarkApproveComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r34 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r24.paging.pageIndex - 1) * ctx_r24.paging.pageSize + i_r34 + 1, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r35.passMark, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r36.mark, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mark Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r37.markType, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BNAExamMarkApproveComponent_div_66_mat_row_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row");
        }
      }

      function BNAExamMarkApproveComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-table", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BNAExamMarkApproveComponent_div_66_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BNAExamMarkApproveComponent_div_66_mat_cell_5_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BNAExamMarkApproveComponent_div_66_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BNAExamMarkApproveComponent_div_66_mat_cell_8_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BNAExamMarkApproveComponent_div_66_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BNAExamMarkApproveComponent_div_66_mat_cell_11_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, BNAExamMarkApproveComponent_div_66_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BNAExamMarkApproveComponent_div_66_mat_cell_14_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BNAExamMarkApproveComponent_div_66_mat_header_row_15_Template, 1, 0, "mat-header-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, BNAExamMarkApproveComponent_div_66_mat_row_16_Template, 1, 0, "mat-row", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r7.subjectMarkList);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);
        }
      }

      function BNAExamMarkApproveComponent_div_67_tr_20_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r43.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r43.text, " ");
        }
      }

      function BNAExamMarkApproveComponent_div_67_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-select", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BNAExamMarkApproveComponent_div_67_tr_20_mat_option_15_Template, 2, 2, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r40 = ctx.$implicit;
          var i_r41 = ctx.index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", unit_r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r41 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r39.getControlLabel(i_r41, "rankPosition"), " - ", ctx_r39.getControlLabel(i_r41, "traineeName"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(P No ", ctx_r39.getControlLabel(i_r41, "traineePNo"), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r39.selectedmarkremarks);
        }
      }

      function BNAExamMarkApproveComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Name & Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Obtaint Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exam Mark Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, BNAExamMarkApproveComponent_div_67_tr_20_Template, 16, 6, "tr", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.BNAExamMarkForm.get("approveTraineeListForm")["controls"]);
        }
      }

      function BNAExamMarkApproveComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Name & Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Obtaint Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exam Mark Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

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
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.ApproveMsg);
        }
      }

      var _BNAExamMarkApproveComponent = /*#__PURE__*/function () {
        function _BNAExamMarkApproveComponent(snackBar, authService, traineeNominationService, confirmService, CodeValueService, BNAExamMarkService, fb, router, route) {
          _classCallCheck(this, _BNAExamMarkApproveComponent);

          this.snackBar = snackBar;
          this.authService = authService;
          this.traineeNominationService = traineeNominationService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
          this.isShown = false;
          this.ApproveMsgScreen = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.displayedColumns = ['sl', 'markType', 'passMark', 'mark'];
          this.displayedColumnsForTraineeList = ['sl', 'traineePNo', 'traineeName', 'obtaintMark', 'examMarkRemarksId'];
        }

        _createClass(_BNAExamMarkApproveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            var id = this.route.snapshot.paramMap.get('bnaExamMarkId');
            this.role = this.authService.currentUserValue.role.trim();
            this.traineeId = this.authService.currentUserValue.traineeId.trim();
            this.branchId = this.authService.currentUserValue.branchId.trim();
            console.log(this.role, this.traineeId, this.branchId);

            if (id) {
              this.pageTitle = 'Edit  Exam Mark';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNAExamMarkService.find(+id).subscribe(function (res) {
                _this32.BNAExamMarkForm.patchValue({
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
              this.pageTitle = 'Approve  Exam Mark';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();

            if (this.role === 'Super Admin') {
              this.BNAExamMarkForm.get('baseSchoolNameId').setValue(this.branchId);
              this.getselectedcoursedurationbyschoolname();
            }

            this.getselectedbaseschools();
            this.getselectedcoursename(); //this.getSelectedMarkType();

            this.getselectedexammarkremark();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BNAExamMarkForm = this.fb.group({
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
              isApproved: [true],
              isApprovedBy: [],
              isApprovedDate: [],
              remarks: [],
              approveTraineeListForm: this.fb.array([this.createTraineeData()]),
              status: [],
              isActive: [true]
            });
          }
        }, {
          key: "getControlLabel",
          value: function getControlLabel(index, type) {
            return this.BNAExamMarkForm.get('approveTraineeListForm').at(index).get(type).value;
          }
        }, {
          key: "createTraineeData",
          value: function createTraineeData() {
            return this.fb.group({
              bnaExamMarkId: [],
              traineePNo: [],
              traineeId: [],
              traineeName: [],
              rankPosition: [],
              obtaintMark: [],
              examMarkRemarksId: [],
              createdBy: [],
              dateCreated: []
            });
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this33 = this;

            this.BNAExamMarkService.getselectedbaseschools().subscribe(function (res) {
              _this33.selectedbaseschools = res;
            });
          }
        }, {
          key: "getselectedexammarkremark",
          value: function getselectedexammarkremark() {
            var _this34 = this;

            this.BNAExamMarkService.getselectedexammarkremark().subscribe(function (res) {
              _this34.selectedmarkremarks = res;
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectAndTraineeList",
          value: function onCourseNameSelectionChangeGetSubjectAndTraineeList(dropdown) {
            var _this35 = this;

            if (dropdown.isUserInput) {
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseNameTextArr = dropdown.source.value.text.split('_');
              var courseName = courseNameTextArr[0];
              var coursetitle = courseNameTextArr[1];
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              this.BNAExamMarkForm.get('courseName').setValue(dropdown.text);
              this.BNAExamMarkForm.get('courseNameId').setValue(courseNameId);
              this.BNAExamMarkForm.get('courseDurationId').setValue(courseDurationId);
              this.isShown = false;
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              this.baseSchoolNameId = baseSchoolNameId;
              var courseNameId = this.BNAExamMarkForm.value['courseNameId'];

              if (baseSchoolNameId != null && courseNameId != null) {
                this.BNAExamMarkService.getApprovedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId).subscribe(function (res) {
                  _this35.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId = res;
                });
              }

              this.BNAExamMarkService.getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this35.selectedCourseDuration = res;
                console.log("course duration " + _this35.selectedCourseDuration);
              });
            }
          }
        }, {
          key: "getselectedtraineebytype",
          value: function getselectedtraineebytype() {
            var _this36 = this;

            var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
            var courseNameId = this.BNAExamMarkForm.value['courseNameId'];
            var bnaSubjectNameId = this.BNAExamMarkForm.value['bnaSubjectNameId'];
            var SubjectMarkId = this.BNAExamMarkForm.value['SubjectMarkId'];
            this.BNAExamMarkService.getexamMarkListByParameters(baseSchoolNameId, courseNameId, bnaSubjectNameId, SubjectMarkId, false).subscribe(function (res) {
              var unapprovedlistItemCount = res.length;
              console.log(unapprovedlistItemCount);

              if (unapprovedlistItemCount > 0) {
                _this36.traineeList = res;
                _this36.ApproveMsgScreen = false;
                _this36.isShown = true;

                _this36.clearList();

                _this36.getTraineeListonClick();
              } else {
                _this36.isShown = false;
                _this36.ApproveMsgScreen = true;

                _this36.BNAExamMarkService.getexamMarkListByParameters(baseSchoolNameId, courseNameId, bnaSubjectNameId, SubjectMarkId, true).subscribe(function (response) {
                  var approvedlistItemCount = response.length;
                  console.log(approvedlistItemCount);

                  if (approvedlistItemCount > 0) {
                    _this36.ApproveMsg = "Records are already Approved!";
                    console.log(_this36.ApproveMsg);
                  } else {
                    _this36.ApproveMsg = "Marks are not isnerted Yet!";
                    console.log(_this36.ApproveMsg);
                  }
                });
              }
            });
            console.log("list check - " + this.traineeList);
            console.log("Final id to get traineelist - " + baseSchoolNameId + " - " + courseNameId + " - " + bnaSubjectNameId + " - " + SubjectMarkId);
          }
        }, {
          key: "onSubjectNameSelectionChangeGetTotalMarkAndPassMark",
          value: function onSubjectNameSelectionChangeGetTotalMarkAndPassMark(dropdown) {
            var _this37 = this;

            if (dropdown.isUserInput) {
              console.log(dropdown);
              this.isShown = false;
              var subjectArr = dropdown.source.value.value.split('_');
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              var courseNameId = this.BNAExamMarkForm.value['courseNameId'];
              this.bnaSubjectNameId = subjectArr[0];
              var courseModuleId = subjectArr[1];
              this.BNAExamMarkForm.get('bnaSubjectName').setValue(dropdown.text);
              this.BNAExamMarkForm.get('bnaSubjectNameId').setValue(this.bnaSubjectNameId);
              this.BNAExamMarkService.GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this37.subjectMarkList = res;
              });
              this.BNAExamMarkService.GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this37.classRoutineId = res;

                _this37.BNAExamMarkForm.get('classRoutineId').setValue(_this37.classRoutineId);
              });
              this.BNAExamMarkService.getapprovededmarktypes(baseSchoolNameId, courseNameId, this.bnaSubjectNameId, courseModuleId).subscribe(function (res) {
                _this37.selectedmarktype = res;
              });
              this.BNAExamMarkService.GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this37.getTotalMarkAndPassMark = res;
                _this37.totalMark = res[0].totalMark;
                _this37.passMarkBna = res[0].passMarkBNA;

                _this37.BNAExamMarkForm.get('totalMark').setValue(_this37.totalMark);

                _this37.BNAExamMarkForm.get('passMark').setValue(_this37.passMarkBna);
              });
            }
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this38 = this;

            var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
            this.isShown = false;
            this.BNAExamMarkService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              _this38.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this39 = this;

            this.BNAExamMarkService.getselectedcoursename().subscribe(function (res) {
              _this39.selectedcoursename = res;
            });
          }
        }, {
          key: "getTraineeListonClick",
          value: function getTraineeListonClick() {
            var control = this.BNAExamMarkForm.controls["approveTraineeListForm"];
            console.log(this.traineeList);

            for (var i = 0; i < this.traineeList.length; i++) {
              control.push(this.createTraineeData());
              console.log(this.traineeList[i]);
            }

            this.BNAExamMarkForm.patchValue({
              approveTraineeListForm: this.traineeList
            });
          }
        }, {
          key: "clearList",
          value: function clearList() {
            var control = this.BNAExamMarkForm.controls["approveTraineeListForm"];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this40 = this;

            //const id = this.BNAExamMarkForm.get('bnaExamMarkId').value; 
            console.log(this.BNAExamMarkForm.value); // if (id) {
            //   this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(result => {
            //     console.log(result);
            //     if (result) {
            //       this.BNAExamMarkService.update(+id,JSON.stringify(this.BNAExamMarkForm.value)).subscribe(response => {
            //         this.router.navigateByUrl('/bna-exam-management/bnaexammark-list');
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
            // }else {

            this.confirmService.confirm('Confirm Save message', 'Are You Sure Save This Records?').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this40.BNAExamMarkService.approve(JSON.stringify(_this40.BNAExamMarkForm.value)).subscribe(function (response) {
                  //this.router.navigateByUrl('/bna-exam-management/bnaexammark-list');
                  _this40.BNAExamMarkForm.reset();

                  _this40.isShown = false; //this.BNAExamMarkForm.get('bnaExamMarkId').setValue(0);

                  _this40.BNAExamMarkForm.get('isActive').setValue(true);

                  _this40.BNAExamMarkForm.get('isApproved').setValue(false);

                  _this40.snackBar.open('Information Inserted Successfully ', '', {
                    duration: 2000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    panelClass: 'snackbar-warn'
                  });
                }, function (error) {
                  _this40.validationErrors = error;
                });
              }
            }); //}
          }
        }]);

        return _BNAExamMarkApproveComponent;
      }();

      _BNAExamMarkApproveComponent.ɵfac = function BNAExamMarkApproveComponent_Factory(t) {
        return new (t || _BNAExamMarkApproveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_4__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_5__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _BNAExamMarkApproveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _BNAExamMarkApproveComponent,
        selectors: [["app-bnaexammark-approve"]],
        decls: 73,
        vars: 16,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "exam-mark"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], [1, "row", "left-row"], ["class", "col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName", "required", ""], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "bnaSubjectName", "required", ""], ["formControlName", "SubjectMarkId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "right-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["class", "container col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 mt-2 sticky-table ex-mrk-li", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "mt-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["formControlName", "baseSchoolNameId", "required", "", 3, "selectionChange"], [3, "value"], [3, "value", "onSelectionChange"], [1, "container", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "mt-2", "sticky-table", "ex-mrk-li"], ["matSort", "", 1, "mat-cell", "ex-mrk-lft-tbl", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "passMark"], ["matColumnDef", "mark"], ["matColumnDef", "markType"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [1, "cl-mrk-rmrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], [1, "t-n-pno-d"], ["matInput", "", "type", "text", "formControlName", "obtaintMark"], ["formControlName", "examMarkRemarksId"], ["value", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li", "res-msg"], ["colspan", "4"]],
        template: function BNAExamMarkApproveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Exam Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function BNAExamMarkApproveComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, BNAExamMarkApproveComponent_div_28_Template, 9, 2, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, BNAExamMarkApproveComponent_mat_option_36_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, BNAExamMarkApproveComponent_mat_error_37_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, BNAExamMarkApproveComponent_mat_option_45_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, BNAExamMarkApproveComponent_mat_error_46_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Mark Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function BNAExamMarkApproveComponent_Template_mat_select_selectionChange_51_listener() {
              return ctx.getselectedtraineebytype();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, BNAExamMarkApproveComponent_mat_option_54_Template, 2, 2, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, BNAExamMarkApproveComponent_mat_error_55_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, BNAExamMarkApproveComponent_div_66_Template, 17, 3, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, BNAExamMarkApproveComponent_div_67_Template, 21, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, BNAExamMarkApproveComponent_div_68_Template, 24, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Approve");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.BNAExamMarkForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role != "Super Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedcoursedurationbyschoolname);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("bnaSubjectName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedmarktype);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("SubjectMarkId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Mark : ", ctx.totalMark, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Pass Mark : ", ctx.passMarkBna, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ApproveMsgScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.BNAExamMarkForm.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor],
        styles: [""]
      });
      /***/
    },

    /***/
    92461:
    /*!************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexammark/bnaexammark-list/bnaexammark-list.component.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamMarkListComponent": function BNAExamMarkListComponent() {
          return (
            /* binding */
            _BNAExamMarkListComponent
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


      var _service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/bnaexammark.service */
      31482);
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

      function BNAExamMarkListComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r23 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r23 + 1, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Trainee ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.traineeId, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BNA Semester");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r25.bnaSemester, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BNA Batch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r26.bnaBatch, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Exam Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.examType, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BNA Curriculam Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r28.bnaCurriculamType, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BNA Subject Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r29.bnaSubjectName, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BNA Exam Mark Remarks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BNAExamMarkListComponent_mat_cell_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r30.bnaExamMarkRemarks, " ");
        }
      }

      function BNAExamMarkListComponent_mat_header_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/bna-exam-management/update-bnaexammark", a1];
      };

      function BNAExamMarkListComponent_mat_cell_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNAExamMarkListComponent_mat_cell_71_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function BNAExamMarkListComponent_mat_cell_71_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r34.deleteItem(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r31.bnaExamMarkId));
        }
      }

      function BNAExamMarkListComponent_mat_header_row_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BNAExamMarkListComponent_mat_row_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _BNAExamMarkListComponent = /*#__PURE__*/function () {
        function _BNAExamMarkListComponent(snackBar, BNAExamMarkService, router, confirmService) {
          _classCallCheck(this, _BNAExamMarkListComponent);

          this.snackBar = snackBar;
          this.BNAExamMarkService = BNAExamMarkService;
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
          this.displayedColumns = ['ser', 'traineeId', 'bnaSemester', 'bnaBatch', 'examType', 'bnaCurriculamType', 'bnaSubjectName', 'bnaExamMarkRemarks', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_BNAExamMarkListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBNAExamMarks();
          }
        }, {
          key: "getBNAExamMarks",
          value: function getBNAExamMarks() {
            var _this41 = this;

            this.isLoading = true;
            this.BNAExamMarkService.getBNAExamMarks(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(function (response) {
              _this41.dataSource.data = response.items;
              _this41.paging.length = response.totalItemsCount;
              _this41.isLoading = false;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getBNAExamMarks();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getBNAExamMarks();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this42 = this;

            var id = row.bnaExamMarkId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              console.log(result);

              if (result) {
                _this42.BNAExamMarkService["delete"](id).subscribe(function () {
                  _this42.getBNAExamMarks();

                  _this42.snackBar.open('Information Deleted Successfully ', '', {
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

        return _BNAExamMarkListComponent;
      }();

      _BNAExamMarkListComponent.ɵfac = function BNAExamMarkListComponent_Factory(t) {
        return new (t || _BNAExamMarkListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_1__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _BNAExamMarkListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BNAExamMarkListComponent,
        selectors: [["app-bnaexammark-list"]],
        decls: 75,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/bna-exam-management/add-bnaexammark", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "traineeId"], ["matColumnDef", "bnaSemester"], ["matColumnDef", "bnaBatch"], ["matColumnDef", "examType"], ["matColumnDef", "bnaCurriculamType"], ["matColumnDef", "bnaSubjectName"], ["matColumnDef", "bnaExamMarkRemarks"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function BNAExamMarkListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BNA Exam Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "BNA Exam Mark");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BNAExamMarkListComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BNAExamMarkListComponent_Template_button_click_32_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, BNAExamMarkListComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, BNAExamMarkListComponent_mat_cell_47_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BNAExamMarkListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BNAExamMarkListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BNAExamMarkListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, BNAExamMarkListComponent_mat_cell_53_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BNAExamMarkListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BNAExamMarkListComponent_mat_cell_56_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BNAExamMarkListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, BNAExamMarkListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, BNAExamMarkListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BNAExamMarkListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BNAExamMarkListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BNAExamMarkListComponent_mat_cell_65_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](66, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BNAExamMarkListComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, BNAExamMarkListComponent_mat_cell_68_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](69, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, BNAExamMarkListComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, BNAExamMarkListComponent_mat_cell_71_Template, 7, 3, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, BNAExamMarkListComponent_mat_header_row_72_Template, 1, 0, "mat-header-row", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, BNAExamMarkListComponent_mat_row_73_Template, 1, 0, "mat-row", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-paginator", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function BNAExamMarkListComponent_Template_mat_paginator_page_74_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    10317:
    /*!**********************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexammark/new-bnaexammark/new-bnaexammark.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBNAExamMarkComponent": function NewBNAExamMarkComponent() {
          return (
            /* binding */
            _NewBNAExamMarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/bnaexammark.service */
      31482);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function NewBNAExamMarkComponent_div_28_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r11.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r11.text, " ");
        }
      }

      function NewBNAExamMarkComponent_div_28_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Base School Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Base School Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function NewBNAExamMarkComponent_div_28_Template_mat_select_selectionChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.getselectedcoursedurationbyschoolname();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NewBNAExamMarkComponent_div_28_mat_option_7_Template, 2, 2, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewBNAExamMarkComponent_div_28_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.selectedbaseschools);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.BNAExamMarkForm.get("baseSchoolNameId").hasError("required"));
        }
      }

      function NewBNAExamMarkComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function NewBNAExamMarkComponent_mat_option_36_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r15.onCourseNameSelectionChangeGetSubjectAndTraineeList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r14.text, " ");
        }
      }

      function NewBNAExamMarkComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Course Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_mat_option_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function NewBNAExamMarkComponent_mat_option_45_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r18.onSubjectNameSelectionChangeGetTotalMarkAndPassMark($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r17.text, " ");
        }
      }

      function NewBNAExamMarkComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_mat_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r20.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r20.text, " ");
        }
      }

      function NewBNAExamMarkComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r33 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r23.paging.pageIndex - 1) * ctx_r23.paging.pageSize + i_r33 + 1, " ");
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r34.passMark, " ");
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r35.mark, " ");
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mark Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r36.markType, " ");
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewBNAExamMarkComponent_div_66_mat_row_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewBNAExamMarkComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-table", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NewBNAExamMarkComponent_div_66_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NewBNAExamMarkComponent_div_66_mat_cell_5_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NewBNAExamMarkComponent_div_66_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewBNAExamMarkComponent_div_66_mat_cell_8_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NewBNAExamMarkComponent_div_66_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, NewBNAExamMarkComponent_div_66_mat_cell_11_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NewBNAExamMarkComponent_div_66_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, NewBNAExamMarkComponent_div_66_mat_cell_14_Template, 2, 1, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NewBNAExamMarkComponent_div_66_mat_header_row_15_Template, 1, 0, "mat-header-row", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NewBNAExamMarkComponent_div_66_mat_row_16_Template, 1, 0, "mat-row", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r7.subjectMarkList);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);
        }
      }

      function NewBNAExamMarkComponent_div_67_tr_20_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBNAExamMarkComponent_div_67_tr_20_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", dropdown_r43.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dropdown_r43.text, " ");
        }
      }

      function NewBNAExamMarkComponent_div_67_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NewBNAExamMarkComponent_div_67_tr_20_mat_error_10_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-select", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NewBNAExamMarkComponent_div_67_tr_20_mat_option_16_Template, 2, 2, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r39 = ctx.$implicit;
          var i_r40 = ctx.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", unit_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r40 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r38.getControlLabel(i_r40, "rankPosition"), " - ", ctx_r38.getControlLabel(i_r40, "traineeName"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(P No ", ctx_r38.getControlLabel(i_r40, "traineePNo"), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r38.BNAExamMarkForm.get("obtaintMark").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r38.selectedmarkremarks);
        }
      }

      function NewBNAExamMarkComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Name & Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Obtaint Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exam Mark Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, NewBNAExamMarkComponent_div_67_tr_20_Template, 17, 7, "tr", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.BNAExamMarkForm.get("traineeListForm")["controls"]);
        }
      }

      var _NewBNAExamMarkComponent = /*#__PURE__*/function () {
        function _NewBNAExamMarkComponent(snackBar, authService, traineeNominationService, confirmService, CodeValueService, BNAExamMarkService, fb, router, route) {
          _classCallCheck(this, _NewBNAExamMarkComponent);

          this.snackBar = snackBar;
          this.authService = authService;
          this.traineeNominationService = traineeNominationService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
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

        _createClass(_NewBNAExamMarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this43 = this;

            this.role = this.authService.currentUserValue.role.trim();
            this.traineeId = this.authService.currentUserValue.traineeId.trim();
            this.branchId = this.authService.currentUserValue.branchId.trim();
            console.log(this.role, this.traineeId, this.branchId);
            var id = this.route.snapshot.paramMap.get('bnaExamMarkId');

            if (id) {
              this.pageTitle = 'Edit  Exam Mark';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNAExamMarkService.find(+id).subscribe(function (res) {
                _this43.BNAExamMarkForm.patchValue({
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
              this.pageTitle = 'Create  Exam Mark';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();

            if (this.role === 'Super Admin') {
              this.BNAExamMarkForm.get('baseSchoolNameId').setValue(this.branchId);
              this.getselectedcoursedurationbyschoolname();
            }

            this.getselectedbaseschools();
            this.getselectedcoursename(); //this.getSelectedMarkType();

            this.getselectedexammarkremark();
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
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this44 = this;

            this.BNAExamMarkService.getselectedbaseschools().subscribe(function (res) {
              _this44.selectedbaseschools = res;
            });
          }
        }, {
          key: "getselectedexammarkremark",
          value: function getselectedexammarkremark() {
            var _this45 = this;

            this.BNAExamMarkService.getselectedexammarkremark().subscribe(function (res) {
              _this45.selectedmarkremarks = res;
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectAndTraineeList",
          value: function onCourseNameSelectionChangeGetSubjectAndTraineeList(dropdown) {
            var _this46 = this;

            if (dropdown.isUserInput) {
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseNameTextArr = dropdown.source.value.text.split('_');
              var courseName = courseNameTextArr[0];
              var coursetitle = courseNameTextArr[1];
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              this.BNAExamMarkForm.get('courseName').setValue(courseName);
              this.BNAExamMarkForm.get('courseNameId').setValue(courseNameId);
              this.BNAExamMarkForm.get('courseDurationId').setValue(courseDurationId);
              this.isShown = false;
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              this.baseSchoolNameId = baseSchoolNameId;
              var courseNameId = this.BNAExamMarkForm.value['courseNameId'];

              if (baseSchoolNameId != null && courseNameId != null) {
                this.BNAExamMarkService.getSelectedSubjectNameByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId, courseDurationId).subscribe(function (res) {
                  _this46.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId = res;
                });
              }

              this.BNAExamMarkService.getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this46.selectedCourseDuration = res;

                _this46.traineeNominationService.getTestTraineeNominationByCourseDurationId(courseDurationId).subscribe(function (res) {
                  _this46.traineeList = res;
                  console.log(_this46.traineeList);
                });
              });
            }
          }
        }, {
          key: "onSubjectNameSelectionChangeGetTotalMarkAndPassMark",
          value: function onSubjectNameSelectionChangeGetTotalMarkAndPassMark(dropdown) {
            var _this47 = this;

            if (dropdown.isUserInput) {
              console.log(dropdown);
              this.isShown = true;
              var subjectArr = dropdown.source.value.value.split('_');
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              var courseNameId = this.BNAExamMarkForm.value['courseNameId']; //this.bnaSubjectNameId = dropdown.source.value.value;

              this.bnaSubjectNameId = subjectArr[0];
              var courseModuleId = subjectArr[1];
              this.BNAExamMarkForm.get('bnaSubjectName').setValue(dropdown.text);
              this.BNAExamMarkForm.get('bnaSubjectNameId').setValue(this.bnaSubjectNameId);
              this.clearList();
              this.getTraineeListonClick();
              this.BNAExamMarkService.GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this47.subjectMarkList = res;
                console.log("ddddddddddddd");
                console.log(_this47.subjectMarkList);
              });
              this.BNAExamMarkService.GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this47.classRoutineId = res;

                _this47.BNAExamMarkForm.get('classRoutineId').setValue(_this47.classRoutineId); //console.log("routine"+this.classRoutineId)

              });
              this.BNAExamMarkService.getselectedmarktypes(baseSchoolNameId, courseNameId, this.bnaSubjectNameId, courseModuleId).subscribe(function (res) {
                _this47.selectedmarktype = res;
                _this47.examTypeCount = res.length;

                _this47.BNAExamMarkForm.get('examTypeCount').setValue(_this47.examTypeCount);

                console.log("selectedmarktype count" + _this47.examTypeCount);
              });
              this.BNAExamMarkService.GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this47.getTotalMarkAndPassMark = res;
                _this47.totalMark = res[0].totalMark;
                _this47.passMarkBna = res[0].passMarkBNA;

                _this47.BNAExamMarkForm.get('totalMark').setValue(_this47.totalMark);

                _this47.BNAExamMarkForm.get('passMark').setValue(_this47.passMarkBna);
              });
            }
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this48 = this;

            var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
            this.isShown = false;
            this.BNAExamMarkService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              console.log("check name");
              _this48.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this49 = this;

            this.BNAExamMarkService.getselectedcoursename().subscribe(function (res) {
              _this49.selectedcoursename = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this50 = this;

            var id = this.BNAExamMarkForm.get('bnaExamMarkId').value;
            console.log(this.BNAExamMarkForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this50.BNAExamMarkService.update(+id, JSON.stringify(_this50.BNAExamMarkForm.value)).subscribe(function (response) {
                    _this50.router.navigateByUrl('/bna-exam-management/bnaexammark-list');

                    _this50.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this50.validationErrors = error;
                  });
                }
              });
            } else {
              this.confirmService.confirm('Confirm Save message', 'Are You Sure Save This Records?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this50.BNAExamMarkService.submit(JSON.stringify(_this50.BNAExamMarkForm.value)).subscribe(function (response) {
                    //this.router.navigateByUrl('/bna-exam-management/bnaexammark-list');
                    _this50.BNAExamMarkForm.reset();

                    _this50.isShown = false;

                    _this50.BNAExamMarkForm.get('bnaExamMarkId').setValue(0);

                    _this50.BNAExamMarkForm.get('isActive').setValue(true);

                    _this50.BNAExamMarkForm.get('isApproved').setValue(true);

                    _this50.snackBar.open('Information Inserted Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this50.validationErrors = error;
                  });
                }
              });
            }
          }
        }]);

        return _NewBNAExamMarkComponent;
      }();

      _NewBNAExamMarkComponent.ɵfac = function NewBNAExamMarkComponent_Factory(t) {
        return new (t || _NewBNAExamMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_2__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_4__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_5__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
      };

      _NewBNAExamMarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _NewBNAExamMarkComponent,
        selectors: [["app-new-bnaexammark"]],
        decls: 72,
        vars: 16,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "exam-mark"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], [1, "row", "left-row"], ["class", "col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "courseName", "required", ""], ["value", "0"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "bnaSubjectName", "required", ""], ["formControlName", "SubjectMarkId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "right-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["class", "container col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 mt-2 sticky-table ex-mrk-li", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "mt-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["formControlName", "baseSchoolNameId", "required", "", 3, "selectionChange"], [3, "value"], [3, "value", "onSelectionChange"], [1, "container", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "mt-2", "sticky-table", "ex-mrk-li"], ["matSort", "", 1, "mat-cell", "ex-mrk-lft-tbl", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "passMark"], ["matColumnDef", "mark"], ["matColumnDef", "markType"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [1, "cl-mrk-rmrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], [1, "t-n-pno-d"], ["matInput", "", "type", "text", "formControlName", "obtaintMark", "required", ""], ["formControlName", "examMarkRemarksId"], ["value", ""]],
        template: function NewBNAExamMarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Exam Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function NewBNAExamMarkComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, NewBNAExamMarkComponent_div_28_Template, 9, 2, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, NewBNAExamMarkComponent_mat_option_36_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, NewBNAExamMarkComponent_mat_error_37_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, NewBNAExamMarkComponent_mat_option_45_Template, 2, 2, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, NewBNAExamMarkComponent_mat_error_46_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Mark Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, NewBNAExamMarkComponent_mat_option_54_Template, 2, 2, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, NewBNAExamMarkComponent_mat_error_55_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, NewBNAExamMarkComponent_div_66_Template, 17, 3, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, NewBNAExamMarkComponent_div_67_Template, 21, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.BNAExamMarkForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role != "Super Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedcoursedurationbyschoolname);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedSubjectNameByBaseSchoolNameIdAndCourseNameId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("bnaSubjectName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedmarktype);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("SubjectMarkId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Mark : ", ctx.totalMark, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Pass Mark : ", ctx.passMarkBna, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.BNAExamMarkForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor],
        styles: [""]
      });
      /***/
    },

    /***/
    20586:
    /*!******************************************************************************************************************!*\
      !*** ./src/app/bna-exam-management/bnaexammark/new-bnaexammarkinstructor/new-bnaexammarkinstructor.component.ts ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBnaExammarkinstructor": function NewBnaExammarkinstructor() {
          return (
            /* binding */
            _NewBnaExammarkinstructor
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


      var _course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../course-management/service/traineenomination.service */
      22247);
      /* harmony import */


      var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/confirm.service */
      39182);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/bnaexammark.service */
      31482);
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function NewBnaExammarkinstructor_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r10.text, " ");
        }
      }

      function NewBnaExammarkinstructor_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Base School Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_mat_option_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewBnaExammarkinstructor_mat_option_44_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.onCourseNameSelectionChangeGetSubjectAndTraineeList($event);
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

      function NewBnaExammarkinstructor_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Course Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewBnaExammarkinstructor_mat_option_53_Template_mat_option_onSelectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r15.onSubjectNameSelectionChangeGetTotalMarkAndPassMark($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", dropdown_r14.subjectName + "_", " ", dropdown_r14.moduleName + "_", " ", dropdown_r14.periodName, " ");
        }
      }

      function NewBnaExammarkinstructor_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Subject Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_mat_option_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r17.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r17.text, " ");
        }
      }

      function NewBnaExammarkinstructor_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r30 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r20.paging.pageIndex - 1) * ctx_r20.paging.pageSize + i_r30 + 1, " ");
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pass Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r31.passMark, " ");
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r32.mark, " ");
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mark Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", element_r33.markType, " ");
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function NewBnaExammarkinstructor_div_74_mat_row_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      function NewBnaExammarkinstructor_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-table", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NewBnaExammarkinstructor_div_74_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewBnaExammarkinstructor_div_74_mat_cell_5_Template, 2, 1, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NewBnaExammarkinstructor_div_74_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewBnaExammarkinstructor_div_74_mat_cell_8_Template, 2, 1, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, NewBnaExammarkinstructor_div_74_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, NewBnaExammarkinstructor_div_74_mat_cell_11_Template, 2, 1, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NewBnaExammarkinstructor_div_74_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NewBnaExammarkinstructor_div_74_mat_cell_14_Template, 2, 1, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NewBnaExammarkinstructor_div_74_mat_header_row_15_Template, 1, 0, "mat-header-row", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NewBnaExammarkinstructor_div_74_mat_row_16_Template, 1, 0, "mat-row", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r8.subjectMarkList);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
        }
      }

      function NewBnaExammarkinstructor_div_75_tr_20_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mark Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewBnaExammarkinstructor_div_75_tr_20_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dropdown_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dropdown_r40.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dropdown_r40.text, " ");
        }
      }

      function NewBnaExammarkinstructor_div_75_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, NewBnaExammarkinstructor_div_75_tr_20_mat_error_10_Template, 2, 0, "mat-error", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NewBnaExammarkinstructor_div_75_tr_20_mat_option_16_Template, 2, 2, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r36 = ctx.$implicit;
          var i_r37 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", unit_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r37 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r35.getControlLabel(i_r37, "rankPosition"), " - ", ctx_r35.getControlLabel(i_r37, "traineeName"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(P No ", ctx_r35.getControlLabel(i_r37, "traineePNo"), ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r35.BNAExamMarkForm.get("obtaintMark").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r35.selectedmarkremarks);
        }
      }

      function NewBnaExammarkinstructor_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Ser");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Name & Rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Obtaint Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Exam Mark Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, NewBnaExammarkinstructor_div_75_tr_20_Template, 17, 7, "tr", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.BNAExamMarkForm.get("traineeListForm")["controls"]);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/admin/dashboard/instructorexam-list/", a1];
      };

      var _NewBnaExammarkinstructor = /*#__PURE__*/function () {
        function _NewBnaExammarkinstructor(snackBar, traineeNominationService, confirmService, CodeValueService, BNAExamMarkService, fb, router, route) {
          _classCallCheck(this, _NewBnaExammarkinstructor);

          this.snackBar = snackBar;
          this.traineeNominationService = traineeNominationService;
          this.confirmService = confirmService;
          this.CodeValueService = CodeValueService;
          this.BNAExamMarkService = BNAExamMarkService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
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

        _createClass(_NewBnaExammarkinstructor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this51 = this;

            var id = this.route.snapshot.paramMap.get('bnaExamMarkId');
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit  Exam Mark';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.BNAExamMarkService.find(+id).subscribe(function (res) {
                _this51.BNAExamMarkForm.patchValue({
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
              this.pageTitle = 'Create  Exam Mark';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getselectedbaseschools();
            this.getselectedcoursename(); //this.getSelectedMarkType();

            this.getselectedexammarkremark(); //this.onCourseNameSelectionChangeGetSubjectAndTraineeList("");
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
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            var _this52 = this;

            this.BNAExamMarkService.getselectedbaseschools().subscribe(function (res) {
              _this52.selectedbaseschools = res; // console.log(this.selectedbaseschools);
            });
          }
        }, {
          key: "getselectedexammarkremark",
          value: function getselectedexammarkremark() {
            var _this53 = this;

            this.BNAExamMarkService.getselectedexammarkremark().subscribe(function (res) {
              _this53.selectedmarkremarks = res; // console.log(this.selectedbaseschools);
            });
          }
        }, {
          key: "onCourseNameSelectionChangeGetSubjectAndTraineeList",
          value: function onCourseNameSelectionChangeGetSubjectAndTraineeList(dropdown) {
            var _this54 = this;

            if (dropdown.isUserInput) {
              // console.log(dropdown);
              var courseNameArr = dropdown.source.value.value.split('_');
              var courseNameTextArr = dropdown.source.value.text.split('_');
              var courseName = courseNameTextArr[0];
              var coursetitle = courseNameTextArr[1];
              var courseDurationId = courseNameArr[0];
              var courseNameId = courseNameArr[1];
              console.log("COurseDurationId");
              console.log(courseDurationId); // console.log("coursename"+courseNameId);

              this.BNAExamMarkForm.get('courseName').setValue(courseName);
              this.BNAExamMarkForm.get('courseNameId').setValue(courseNameId);
              this.BNAExamMarkForm.get('courseDurationId').setValue(courseDurationId);
              this.isShown = false;
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              this.baseSchoolNameId = baseSchoolNameId;
              var courseNameId = this.BNAExamMarkForm.value['courseNameId'];

              if (baseSchoolNameId != null && courseNameId != null) {
                this.BNAExamMarkService.getSelectedSubjectNameListForInstructorDashBoardByBaseSchoolNameIdAndCourseNameId(this.traineeId, baseSchoolNameId, courseDurationId).subscribe(function (res) {
                  _this54.selectedInstructorList = res;
                  console.log("instructor List");
                  console.log(_this54.selectedInstructorList);
                });
              }

              this.BNAExamMarkService.getCourseDurationByBaseSchoolNameIdAndCourseNameId(baseSchoolNameId, courseNameId).subscribe(function (res) {
                _this54.selectedCourseDuration = res;

                _this54.traineeNominationService.getTestTraineeNominationByCourseDurationId(courseDurationId).subscribe(function (res) {
                  _this54.traineeList = res;
                  console.log(_this54.traineeList);
                });
              });
            }
          }
        }, {
          key: "onSubjectNameSelectionChangeGetTotalMarkAndPassMark",
          value: function onSubjectNameSelectionChangeGetTotalMarkAndPassMark(dropdown) {
            var _this55 = this;

            if (dropdown.isUserInput) {
              console.log("dropdown value subject array");
              console.log(dropdown);
              this.isShown = true;
              var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
              var courseNameId = this.BNAExamMarkForm.value['courseNameId'];
              console.log("Subject array");
              console.log(courseNameId);
              this.bnaSubjectNameId = dropdown.source.value.bnaSubjectNameId;
              var courseModuleId = dropdown.source.value.courseModuleId;
              var bnaSubjectName = dropdown.source.value.subjectName;
              this.BNAExamMarkForm.get('bnaSubjectName').setValue(bnaSubjectName);
              this.BNAExamMarkForm.get('bnaSubjectNameId').setValue(this.bnaSubjectNameId);
              this.clearList();
              this.getTraineeListonClick();
              this.BNAExamMarkService.GetSubjectMarkByBaseSchoolNameIdCourseNameAndSubjectNameId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this55.subjectMarkList = res;
                console.log("ddddddddddddd");
                console.log(_this55.subjectMarkList);
              });
              this.BNAExamMarkService.GetRoutineIdWithSchoolCourseSubject(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this55.classRoutineId = res;

                _this55.BNAExamMarkForm.get('classRoutineId').setValue(_this55.classRoutineId);
              });
              this.BNAExamMarkService.getselectedmarktypes(baseSchoolNameId, courseNameId, this.bnaSubjectNameId, courseModuleId).subscribe(function (res) {
                _this55.selectedmarktype = res;
                _this55.examTypeCount = res.length;

                _this55.BNAExamMarkForm.get('examTypeCount').setValue(_this55.examTypeCount);

                console.log("selectedmarktype count" + _this55.examTypeCount);
              });
              this.BNAExamMarkService.GetTotalMarkAndPassMarkByBaseSchoolIdCourseIdAndSubjectId(baseSchoolNameId, courseNameId, this.bnaSubjectNameId).subscribe(function (res) {
                _this55.getTotalMarkAndPassMark = res;
                _this55.totalMark = res[0].totalMark;
                _this55.passMarkBna = res[0].passMarkBNA;

                _this55.BNAExamMarkForm.get('totalMark').setValue(_this55.totalMark);

                _this55.BNAExamMarkForm.get('passMark').setValue(_this55.passMarkBna);
              });
            }
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname() {
            var _this56 = this;

            var baseSchoolNameId = this.BNAExamMarkForm.value['baseSchoolNameId'];
            this.isShown = false; //console.log(baseSchoolNameId);

            this.BNAExamMarkService.getselectedcoursedurationbyschoolname(baseSchoolNameId).subscribe(function (res) {
              console.log("check name");
              _this56.selectedcoursedurationbyschoolname = res;
            });
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            var _this57 = this;

            this.BNAExamMarkService.getselectedcoursename().subscribe(function (res) {
              _this57.selectedcoursename = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this58 = this;

            var id = this.BNAExamMarkForm.get('bnaExamMarkId').value;
            console.log(this.BNAExamMarkForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this58.BNAExamMarkService.update(+id, JSON.stringify(_this58.BNAExamMarkForm.value)).subscribe(function (response) {
                    _this58.router.navigateByUrl('/bna-exam-management/bnaexammark-list');

                    _this58.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this58.validationErrors = error;
                  });
                }
              });
            } else {
              this.confirmService.confirm('Confirm Save message', 'Are You Sure Save This Records?').subscribe(function (result) {
                console.log(result);

                if (result) {
                  _this58.BNAExamMarkService.submit(JSON.stringify(_this58.BNAExamMarkForm.value)).subscribe(function (response) {
                    _this58.router.navigateByUrl('/admin/dashboard/instructor-dashboard');

                    _this58.BNAExamMarkForm.reset();

                    _this58.isShown = false;

                    _this58.BNAExamMarkForm.get('bnaExamMarkId').setValue(0);

                    _this58.BNAExamMarkForm.get('isActive').setValue(true);

                    _this58.BNAExamMarkForm.get('isApproved').setValue(true);

                    _this58.snackBar.open('Information Inserted Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this58.validationErrors = error;
                  });
                }
              });
            }
          }
        }]);

        return _NewBnaExammarkinstructor;
      }();

      _NewBnaExammarkinstructor.ɵfac = function NewBnaExammarkinstructor_Factory(t) {
        return new (t || _NewBnaExammarkinstructor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_course_management_service_traineenomination_service__WEBPACK_IMPORTED_MODULE_1__.TraineeNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_3__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_bnaexammark_service__WEBPACK_IMPORTED_MODULE_4__.BNAExamMarkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
      };

      _NewBnaExammarkinstructor.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewBnaExammarkinstructor,
        selectors: [["app-new-bnaexammarkinstructor"]],
        decls: 84,
        vars: 20,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "exam-mark"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], [1, "row", "left-row"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "baseSchoolNameId", "required", "", 3, "selectionChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "courseName", "required", ""], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["formControlName", "bnaSubjectName", "required", ""], ["formControlName", "SubjectMarkId", "required", ""], [1, "row", "right-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["class", "container col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 mt-2 sticky-table ex-mrk-li", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], [1, "row", "mt-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"], [3, "value"], [3, "value", "onSelectionChange"], [1, "container", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2", "mt-2", "sticky-table", "ex-mrk-li"], ["matSort", "", 1, "mat-cell", "ex-mrk-lft-tbl", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "passMark"], ["matColumnDef", "mark"], ["matColumnDef", "markType"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "ex-mrk-entry-li"], [1, "body", "table-responsive"], [1, "table", "ex-mrk-entry"], [1, "cl-srl"], [1, "cl-nm-rnk"], [1, "cl-mrk"], [1, "cl-mrk-rmrk"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["scope", "row", 1, "cl-srl"], [1, "t-n-pno-d"], ["matInput", "", "type", "text", "formControlName", "obtaintMark", "required", ""], ["formControlName", "examMarkRemarksId"], ["value", ""]],
        template: function NewBnaExammarkinstructor_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Exam Mark");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NewBnaExammarkinstructor_Template_form_ngSubmit_22_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Base School Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function NewBnaExammarkinstructor_Template_mat_select_selectionChange_32_listener() {
              return ctx.getselectedcoursedurationbyschoolname();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, NewBnaExammarkinstructor_mat_option_35_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, NewBnaExammarkinstructor_mat_error_36_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Course Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, NewBnaExammarkinstructor_mat_option_44_Template, 2, 2, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, NewBnaExammarkinstructor_mat_error_45_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, NewBnaExammarkinstructor_mat_option_53_Template, 2, 4, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, NewBnaExammarkinstructor_mat_error_54_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Mark Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, NewBnaExammarkinstructor_mat_option_62_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, NewBnaExammarkinstructor_mat_error_63_Template, 2, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, NewBnaExammarkinstructor_div_74_Template, 17, 3, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, NewBnaExammarkinstructor_div_75_Template, 21, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-icon", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Back ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedbaseschools);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("baseSchoolNameId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedcoursedurationbyschoolname);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.BNAExamMarkForm.get("courseName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedInstructorList);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx.traineeId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor],
        styles: [""]
      });
      /***/
    },

    /***/
    68940:
    /*!**********************************************************************!*\
      !*** ./src/app/bna-exam-management/models/BnaClassTestPagination.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BnaClassTestPagination": function BnaClassTestPagination() {
          return (
            /* binding */
            _BnaClassTestPagination
          );
        }
        /* harmony export */

      });

      var _BnaClassTestPagination = function _BnaClassTestPagination() {
        _classCallCheck(this, _BnaClassTestPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    18789:
    /*!*********************************************************************************!*\
      !*** ./src/app/bna-exam-management/models/bnaexaminstructorassignPagination.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamInstructorAssignPagination": function BNAExamInstructorAssignPagination() {
          return (
            /* binding */
            _BNAExamInstructorAssignPagination
          );
        }
        /* harmony export */

      });

      var _BNAExamInstructorAssignPagination = function _BNAExamInstructorAssignPagination() {
        _classCallCheck(this, _BNAExamInstructorAssignPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    81712:
    /*!*********************************************************************!*\
      !*** ./src/app/bna-exam-management/models/bnaexammarkPagination.ts ***!
      \*********************************************************************/

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
    30091:
    /*!*********************************************************************!*\
      !*** ./src/app/bna-exam-management/service/BnaClassTest.service.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BnaClassTestService": function BnaClassTestService() {
          return (
            /* binding */
            _BnaClassTestService
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


      var _models_BnaClassTestPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/BnaClassTestPagination */
      68940);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BnaClassTestService = /*#__PURE__*/function () {
        function _BnaClassTestService(http) {
          _classCallCheck(this, _BnaClassTestService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.BnaClassTests = [];
          this.BnaClassTestPagination = new _models_BnaClassTestPagination__WEBPACK_IMPORTED_MODULE_1__.BnaClassTestPagination();
        }

        _createClass(_BnaClassTestService, [{
          key: "getselectedbnasemester",
          value: function getselectedbnasemester() {
            return this.http.get(this.baseUrl + '/bna-semester/get-selectedBnaSemesters');
          }
        }, {
          key: "getselectedBnaSemesterDurations",
          value: function getselectedBnaSemesterDurations() {
            return this.http.get(this.baseUrl + '/bna-semester-duration/get-selectedBnaSemesterDurations');
          }
        }, {
          key: "getselectedsubjectCategory",
          value: function getselectedsubjectCategory() {
            return this.http.get(this.baseUrl + '/subject-category/get-selectedSubjectCategories');
          }
        }, {
          key: "getselectedbnaSubjectCurriculum",
          value: function getselectedbnaSubjectCurriculum() {
            return this.http.get(this.baseUrl + '/bna-subject-curriculum/get-selectedBnaSubjectCurriculums');
          }
        }, {
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
          }
        }, {
          key: "getselectedbnaClassTestType",
          value: function getselectedbnaClassTestType() {
            return this.http.get(this.baseUrl + '/bna-class-test-type/get-selectedBnaClassTestTypes');
          } // getselectedcoursename(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/course-name/get-selectedCourseNames')
          // }
          // getselectedBnaClassTestremarks(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/exam-mark-remark/get-selectedExamMarkRemark')
          // }
          // getselectebnaexamschedule(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/bna-exam-schedule/get-selectedBnaExamSchedules')
          // }

        }, {
          key: "getBnaClassTests",
          value: function getBnaClassTests(pageNumber, pageSize, searchText) {
            var _this59 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-class-test/get-bnaClassTests', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this59.BnaClassTests = [].concat(_toConsumableArray(_this59.BnaClassTests), _toConsumableArray(response.body.items));
              _this59.BnaClassTestPagination = response.body;
              return _this59.BnaClassTestPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/bna-class-test/get-bnaClassTestDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/bna-class-test/update-bnaClassTest/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/bna-class-test/save-bnaClassTest', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (BnaClassTest) {
              if (BnaClassTest) {
                console.log(BnaClassTest);
                return BnaClassTest;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/bna-class-test/delete-bnaClassTest/' + id);
          }
        }]);

        return _BnaClassTestService;
      }();

      _BnaClassTestService.ɵfac = function BnaClassTestService_Factory(t) {
        return new (t || _BnaClassTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _BnaClassTestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _BnaClassTestService,
        factory: _BnaClassTestService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    99080:
    /*!********************************************************************************!*\
      !*** ./src/app/bna-exam-management/service/bnaexaminstructorassign.service.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BNAExamInstructorAssignService": function BNAExamInstructorAssignService() {
          return (
            /* binding */
            _BNAExamInstructorAssignService
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


      var _models_bnaexaminstructorassignPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/bnaexaminstructorassignPagination */
      18789);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BNAExamInstructorAssignService = /*#__PURE__*/function () {
        function _BNAExamInstructorAssignService(http) {
          _classCallCheck(this, _BNAExamInstructorAssignService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.BNAExamInstructorAssigns = [];
          this.BNAExamInstructorAssignPagination = new _models_bnaexaminstructorassignPagination__WEBPACK_IMPORTED_MODULE_1__.BNAExamInstructorAssignPagination();
        }

        _createClass(_BNAExamInstructorAssignService, [{
          key: "getselectedbnasubjectname",
          value: function getselectedbnasubjectname() {
            return this.http.get(this.baseUrl + '/bna-subject-name/get-selectedBnaSubjectNames');
          }
        }, {
          key: "getselectedcoursedurationbyschoolname",
          value: function getselectedcoursedurationbyschoolname(baseSchoolNameId) {
            return this.http.get(this.baseUrl + '/course-duration/get-selectedCourseDurationBySchoolName?baseSchoolNameId=' + baseSchoolNameId);
          }
        }, {
          key: "getselectedschools",
          value: function getselectedschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedbasename",
          value: function getselectedbasename() {
            return this.http.get(this.baseUrl + '/base-name/get-selectedBases');
          }
        }, {
          key: "getSelectedInstructorByParameters",
          value: function getSelectedInstructorByParameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-instructorByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "getInstructorBySchoolAndCourse",
          value: function getInstructorBySchoolAndCourse(baseSchoolNameId, courseNameId) {
            return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-instructorBySchoolAndCourse?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId);
          }
        }, {
          key: "getselectedclassroutinebyparameters",
          value: function getselectedclassroutinebyparameters(baseSchoolNameId, courseNameId, courseModuleId, bnaSubjectNameId) {
            return this.http.get(this.baseUrl + '/class-routine/get-selectedClassRoutineByParameters?baseSchoolNameId=' + baseSchoolNameId + '&courseNameId=' + courseNameId + '&courseModuleId=' + courseModuleId + '&bnaSubjectNameId=' + bnaSubjectNameId);
          }
        }, {
          key: "getselectedbnainstructortype",
          value: function getselectedbnainstructortype() {
            return this.http.get(this.baseUrl + '/bna-instructor-type/get-selectedBnaInstructorTypes');
          }
        }, {
          key: "getselectedbnaclasssectionselection",
          value: function getselectedbnaclasssectionselection() {
            return this.http.get(this.baseUrl + '/bna-class-section-selection/get-selectedBnaClassSectionSelections');
          }
        }, {
          key: "getBNAExamInstructorAssigns",
          value: function getBNAExamInstructorAssigns(pageNumber, pageSize, searchText) {
            var _this60 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-bnaExamInstructorAssigns', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this60.BNAExamInstructorAssigns = [].concat(_toConsumableArray(_this60.BNAExamInstructorAssigns), _toConsumableArray(response.body.items));
              _this60.BNAExamInstructorAssignPagination = response.body;
              return _this60.BNAExamInstructorAssignPagination;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-bnaExamInstructorAssignDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/bna-exam-instructor-assign/update-bnaExamInstructorAssign/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/bna-exam-instructor-assign/save-bnaExamInstructorAssign', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (BNAExamInstructorAssign) {
              if (BNAExamInstructorAssign) {
                console.log(BNAExamInstructorAssign);
                return BNAExamInstructorAssign;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/bna-exam-instructor-assign/delete-bnaExamInstructorAssign/' + id);
          }
        }]);

        return _BNAExamInstructorAssignService;
      }();

      _BNAExamInstructorAssignService.ɵfac = function BNAExamInstructorAssignService_Factory(t) {
        return new (t || _BNAExamInstructorAssignService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _BNAExamInstructorAssignService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _BNAExamInstructorAssignService,
        factory: _BNAExamInstructorAssignService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    31482:
    /*!********************************************************************!*\
      !*** ./src/app/bna-exam-management/service/bnaexammark.service.ts ***!
      \********************************************************************/

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
      81712);
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
            var _this61 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-exam-mark/get-bnaExamMarks', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this61.BNAExamMarks = [].concat(_toConsumableArray(_this61.BNAExamMarks), _toConsumableArray(response.body.items));
              _this61.BNAExamMarkPagination = response.body;
              return _this61.BNAExamMarkPagination;
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
            var _this62 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseDurationId', courseDurationId.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsByCourseDurationId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this62.TraineeNominations = [].concat(_toConsumableArray(_this62.TraineeNominations), _toConsumableArray(response.body.items));
              _this62.TraineeNominationPagination = response.body;
              return _this62.TraineeNominationPagination;
            }));
          }
        }, {
          key: "getTraineeNominations",
          value: function getTraineeNominations(pageNumber, pageSize, searchText) {
            var _this63 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this63.TraineeNominations = [].concat(_toConsumableArray(_this63.TraineeNominations), _toConsumableArray(response.body.items));
              _this63.TraineeNominationPagination = response.body;
              return _this63.TraineeNominationPagination;
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