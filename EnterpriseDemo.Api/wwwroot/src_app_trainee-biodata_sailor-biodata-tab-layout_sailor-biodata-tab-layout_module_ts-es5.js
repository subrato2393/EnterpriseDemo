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

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_trainee-biodata_sailor-biodata-tab-layout_sailor-biodata-tab-layout_module_ts"], {
    /***/
    76837:
    /*!*************************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/biodata-general-info/biodata-general-info-list/biodata-general-info-list.component.ts ***!
      \*************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BIODataGeneralInfoListComponent": function BIODataGeneralInfoListComponent() {
          return (
            /* binding */
            _BIODataGeneralInfoListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
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


      var _service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/BIODataGeneralInfo.service */
      35137);
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

      function BIODataGeneralInfoListComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BIODataGeneralInfoListComponent_mat_cell_50_Template(rf, ctx) {
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

      function BIODataGeneralInfoListComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
        }
      }

      function BIODataGeneralInfoListComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", element_r18.bnaPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", element_r18.bnaPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function BIODataGeneralInfoListComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Rank & Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BIODataGeneralInfoListComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", element_r19.rank, " ", element_r19.name, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (P No ", element_r19.pno, ")");
        }
      }

      function BIODataGeneralInfoListComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Officer Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BIODataGeneralInfoListComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.traineeStatus, " ");
        }
      }

      function BIODataGeneralInfoListComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function BIODataGeneralInfoListComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.mobile, " ");
        }
      }

      function BIODataGeneralInfoListComponent_mat_header_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/update-biodata-general-Info";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/";

      var _c3 = function _c3(a1) {
        return [_c2, a1];
      };

      function BIODataGeneralInfoListComponent_mat_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BIODataGeneralInfoListComponent_mat_cell_65_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function BIODataGeneralInfoListComponent_mat_cell_65_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var row_r22 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r25.deleteItem(row_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "find_replace");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, row_r22.traineeId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c3, row_r22.traineeId));
        }
      }

      function BIODataGeneralInfoListComponent_mat_header_row_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BIODataGeneralInfoListComponent_mat_row_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _BIODataGeneralInfoListComponent = /*#__PURE__*/function () {
        function _BIODataGeneralInfoListComponent(snackBar, BIODataGeneralInfoService, router, confirmService) {
          _classCallCheck(this, _BIODataGeneralInfoListComponent);

          this.snackBar = snackBar;
          this.BIODataGeneralInfoService = BIODataGeneralInfoService;
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
          this.displayedColumns = ['sl', 'bnaPhotoUrl', 'pno', 'traineeStatus', 'mobile', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_BIODataGeneralInfoListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBIODataGeneralInfos();
          }
        }, {
          key: "getBIODataGeneralInfos",
          value: function getBIODataGeneralInfos() {
            var _this = this;

            this.isLoading = true;
            this.BIODataGeneralInfoService.getBIODataGeneralInfos(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(function (response) {
              _this.dataSource.data = response.items;
              _this.paging.length = response.totalItemsCount;
              _this.isLoading = false;
            });
          }
        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.filteredData.length;
            return numSelected === numRows;
          }
        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this2 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.filteredData.forEach(function (row) {
              return _this2.selection.select(row);
            });
          }
        }, {
          key: "addNew",
          value: function addNew() {}
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getBIODataGeneralInfos();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getBIODataGeneralInfos();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this3 = this;

            var id = row.traineeId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This  Item').subscribe(function (result) {
              if (result) {
                _this3.BIODataGeneralInfoService["delete"](id).subscribe(function () {
                  _this3.getBIODataGeneralInfos();

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

        return _BIODataGeneralInfoListComponent;
      }();

      _BIODataGeneralInfoListComponent.ɵfac = function BIODataGeneralInfoListComponent_Factory(t) {
        return new (t || _BIODataGeneralInfoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_1__.BIODataGeneralInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _BIODataGeneralInfoListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BIODataGeneralInfoListComponent,
        selectors: [["app-biodata-general-info-list"]],
        decls: 69,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/trainee-biodata/sailor-biodata-tab/add-biodata-general-Info", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "bnaPhotoUrl"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6 img-on-hover", 4, "matCellDef"], ["matColumnDef", "pno"], ["class", "bio-name", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "bio-name", 4, "matCellDef"], ["matColumnDef", "traineeStatus"], ["matColumnDef", "mobile"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6", "img-on-hover"], [3, "src"], [1, "pop-on-hover"], ["mat-sort-header", "", 1, "bio-name"], [1, "bio-name"], [1, "t-n-pno-d"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", "update-trainee", 3, "routerLink"]],
        template: function BIODataGeneralInfoListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Sailor BIO Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sailor BIO Data ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BIODataGeneralInfoListComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BIODataGeneralInfoListComponent_Template_button_click_34_listener() {
              return ctx.applyFilter(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-table", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BIODataGeneralInfoListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BIODataGeneralInfoListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BIODataGeneralInfoListComponent_mat_header_cell_52_Template, 2, 1, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, BIODataGeneralInfoListComponent_mat_cell_53_Template, 4, 2, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BIODataGeneralInfoListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BIODataGeneralInfoListComponent_mat_cell_56_Template, 4, 3, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BIODataGeneralInfoListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, BIODataGeneralInfoListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, BIODataGeneralInfoListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BIODataGeneralInfoListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BIODataGeneralInfoListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, BIODataGeneralInfoListComponent_mat_cell_65_Template, 10, 6, "mat-cell", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, BIODataGeneralInfoListComponent_mat_header_row_66_Template, 1, 0, "mat-header-row", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BIODataGeneralInfoListComponent_mat_row_67_Template, 1, 0, "mat-row", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-paginator", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function BIODataGeneralInfoListComponent_Template_mat_paginator_page_68_listener($event) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    2700:
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/biodata-general-info/new-biodata-general-info/new-biodata-general-info.component.ts ***!
      \***********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBIODataGeneralInfoComponent": function NewBIODataGeneralInfoComponent() {
          return (
            /* binding */
            _NewBIODataGeneralInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/BIODataGeneralInfo.service */
      35137);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      function NewBIODataGeneralInfoComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name in Full (English) is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r27.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r27.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Rank is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " P No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Local No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Chest No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " NID is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date Of Birth is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r28.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Weight is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r29.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r29.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Height is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r30.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r30.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Color Of Eye is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r31.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r31.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Hair Color is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r32.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r32.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_133_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Blood Group is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r33.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r33.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Religion is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_165_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r34.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r34.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_166_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Caste is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r35.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r35.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_173_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Maritial Status is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewBIODataGeneralInfoComponent_mat_option_194_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r36.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r36.text, " ");
        }
      }

      function NewBIODataGeneralInfoComponent_mat_error_195_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _NewBIODataGeneralInfoComponent = /*#__PURE__*/function () {
        function _NewBIODataGeneralInfoComponent(snackBar, BIODataGeneralInfoService, fb, router, route, confirmService) {
          _classCallCheck(this, _NewBIODataGeneralInfoComponent);

          this.snackBar = snackBar;
          this.BIODataGeneralInfoService = BIODataGeneralInfoService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.validationErrors = [];
          this.imageUrl = "/assets/img/icon.png";
          this.files = [];
        }

        _createClass(_NewBIODataGeneralInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var id = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit Sailor BIO Data';
              this.destination = 'Edit';
              this.buttonText = "Update";
              this.BIODataGeneralInfoService.find(+id).subscribe(function (res) {
                if (res) {
                  _this4.BIODataGeneralInfoForm.patchValue(res);
                }

                _this4.onReligionSelectionChangeGetCastes(res.religionId);
              });
            } else {
              this.pageTitle = 'Create Sailor BIO Data';
              this.destination = 'Add';
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getRanks();
            this.getGenders();
            this.getselectedheight();
            this.getselectedweight();
            this.getselectedcolorofeye();
            this.getselectedbloodgroup();
            this.getreligions();
            this.getselectedcaste();
            this.gethaircolors();
            this.getMaritialStatus();
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            if (event.target.files.length > 0) {
              var file = event.target.files[0]; // this.labelImport.nativeElement.value = file.name;

              console.log(file); // this.BIODataGeneralInfoForm.controls["picture"].setValue(event.target.files[0]);

              this.BIODataGeneralInfoForm.patchValue({
                image: file
              });
            }
          }
        }, {
          key: "getreligions",
          value: function getreligions() {
            var _this5 = this;

            this.BIODataGeneralInfoService.getselectedreligion().subscribe(function (res) {
              _this5.religionValues = res;
            });
          }
        }, {
          key: "gethaircolors",
          value: function gethaircolors() {
            var _this6 = this;

            this.BIODataGeneralInfoService.getselectedhaircolor().subscribe(function (res) {
              _this6.hairColorValues = res;
            });
          }
        }, {
          key: "getselectedcaste",
          value: function getselectedcaste() {
            var _this7 = this;

            this.BIODataGeneralInfoService.getselectedcaste().subscribe(function (res) {
              _this7.casteValues = res;
            });
          }
        }, {
          key: "getselectedheight",
          value: function getselectedheight() {
            var _this8 = this;

            this.BIODataGeneralInfoService.getselectedheight().subscribe(function (res) {
              _this8.heightValues = res;
            });
          }
        }, {
          key: "getselectedweight",
          value: function getselectedweight() {
            var _this9 = this;

            this.BIODataGeneralInfoService.getselectedweight().subscribe(function (res) {
              _this9.weightValues = res;
            });
          }
        }, {
          key: "getselectedcolorofeye",
          value: function getselectedcolorofeye() {
            var _this10 = this;

            this.BIODataGeneralInfoService.getselectedcolorofeye().subscribe(function (res) {
              _this10.colorOfEyeValues = res;
            });
          }
        }, {
          key: "getselectedbloodgroup",
          value: function getselectedbloodgroup() {
            var _this11 = this;

            this.BIODataGeneralInfoService.getselectedbloodgroup().subscribe(function (res) {
              _this11.bloodValues = res;
            });
          }
        }, {
          key: "getRanks",
          value: function getRanks() {
            var _this12 = this;

            this.BIODataGeneralInfoService.getselectedrank().subscribe(function (res) {
              _this12.rankValues = res;
            });
          }
        }, {
          key: "getGenders",
          value: function getGenders() {
            var _this13 = this;

            this.BIODataGeneralInfoService.getselectedgender().subscribe(function (res) {
              _this13.genderValues = res;
            });
          }
        }, {
          key: "getMaritialStatus",
          value: function getMaritialStatus() {
            var _this14 = this;

            this.BIODataGeneralInfoService.getselectedmaritialstatus().subscribe(function (res) {
              _this14.maritialStatusValues = res;
              console.log(res);
            });
          }
        }, {
          key: "onReligionSelectionChangeGetCastes",
          value: function onReligionSelectionChangeGetCastes(religionId) {
            var _this15 = this;

            this.BIODataGeneralInfoService.getcastebyreligion(religionId).subscribe(function (res) {
              _this15.selectedCastes = res;
              console.log(_this15.selectedCastes);
            });
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BIODataGeneralInfoForm = this.fb.group({
              traineeId: [0],
              traineeStatusId: ['5'],
              rankId: [],
              heightId: [],
              weightId: [],
              colorOfEyeId: [],
              genderId: [],
              bloodGroupId: [],
              religionId: [],
              casteId: [],
              maritalStatusId: [],
              hairColorId: [],
              bnaPhotoUrl: [''],
              image: [''],
              name: [''],
              nameBangla: [''],
              nickName: [''],
              localNo: [''],
              chestNo: [''],
              idCardNo: [''],
              shoeSize: [''],
              pantSize: [''],
              nominee: [''],
              closeRelative: [''],
              relativeRelation: [''],
              mobile: [''],
              email: [''],
              pno: [''],
              dateOfBirth: [''],
              joiningDate: [],
              identificationMark: [''],
              presentAddress: [''],
              permanentAddress: [''],
              passportNo: [''],
              nid: [''],
              remarks: [''],
              isActive: [true]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this16 = this;

            var id = this.BIODataGeneralInfoForm.get('traineeId').value;
            this.BIODataGeneralInfoForm.get('dateOfBirth').setValue(new Date(this.BIODataGeneralInfoForm.get('dateOfBirth').value).toUTCString());
            this.BIODataGeneralInfoForm.get('joiningDate').setValue(new Date(this.BIODataGeneralInfoForm.get('joiningDate').value).toUTCString());
            var formData = new FormData();

            for (var _i = 0, _Object$keys = Object.keys(this.BIODataGeneralInfoForm.value); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              var value = this.BIODataGeneralInfoForm.value[key];
              formData.append(key, value);
            }

            console.log(this.BIODataGeneralInfoForm.value);

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update  Item').subscribe(function (result) {
                if (result) {
                  _this16.BIODataGeneralInfoService.update(+id, formData).subscribe(function (response) {
                    _this16.router.navigateByUrl('/trainee-biodata/sailor-biodata-tab/biodata-general-Info-list');

                    _this16.snackBar.open('Information Updated Successfully ', '', {
                      duration: 3000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this16.validationErrors = error;
                  });
                }
              });
            } else {
              this.BIODataGeneralInfoService.submit(formData).subscribe(function (response) {
                _this16.router.navigateByUrl('/trainee-biodata/sailor-biodata-tab/biodata-general-Info-list');

                _this16.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this16.validationErrors = error;
              });
            }
          }
        }]);

        return _NewBIODataGeneralInfoComponent;
      }();

      _NewBIODataGeneralInfoComponent.ɵfac = function NewBIODataGeneralInfoComponent_Factory(t) {
        return new (t || _NewBIODataGeneralInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_0__.BIODataGeneralInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
      };

      _NewBIODataGeneralInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _NewBIODataGeneralInfoComponent,
        selectors: [["app-new-BIODataGeneralInfo"]],
        decls: 222,
        vars: 33,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "nickName"], ["matInput", "", "formControlName", "nameBangla"], ["formControlName", "rankId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "pno", "required", ""], ["matInput", "", "formControlName", "localNo", "required", ""], ["matInput", "", "formControlName", "chestNo", "required", ""], ["matInput", "", "formControlName", "mobile"], ["matInput", "", "formControlName", "nid", "required", ""], ["matInput", "", "formControlName", "dateOfBirth", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["birthpicker", ""], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "passportNo"], ["formControlName", "weightId", "required", ""], ["formControlName", "heightId", "required", ""], ["matInput", "", "formControlName", "idCardNo"], ["formControlName", "colorOfEyeId", "required", ""], ["formControlName", "hairColorId", "required", ""], ["formControlName", "bloodGroupId", "required", ""], ["matInput", "", "formControlName", "shoeSize"], ["matInput", "", "formControlName", "pantSize"], ["matInput", "", "formControlName", "identificationMark"], ["formControlName", "religionId", "required", "", 3, "selectionChange"], ["value", "0"], ["formControlName", "casteId", "required", ""], ["formControlName", "maritalStatusId", "required", ""], ["matInput", "", "formControlName", "nominee"], ["matInput", "", "formControlName", "closeRelative"], ["matInput", "", "formControlName", "relativeRelation"], ["formControlName", "genderId", "required", ""], ["matInput", "", "formControlName", "remarks"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "presentAddress"], ["matInput", "", "formControlName", "permanentAddress"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "custom-file"], ["type", "file", "id", "customFile", "accept", ".jpg,.png,.gif", 1, "custom-file-input", 3, "change"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", "routerLink", "/trainee-biodata/sailor-biodata-tab/biodata-general-Info-list"], [3, "value"]],
        template: function NewBIODataGeneralInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sailor BIO Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewBIODataGeneralInfoComponent_Template_form_ngSubmit_21_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Name in Full (English)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, NewBIODataGeneralInfoComponent_mat_error_28_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Nickname");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Name in Full (Bangla)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Rank");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, NewBIODataGeneralInfoComponent_mat_option_44_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, NewBIODataGeneralInfoComponent_mat_error_45_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "P No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, NewBIODataGeneralInfoComponent_mat_error_51_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Local No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, NewBIODataGeneralInfoComponent_mat_error_57_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Chest No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, NewBIODataGeneralInfoComponent_mat_error_63_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "NID");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, NewBIODataGeneralInfoComponent_mat_error_74_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Date Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "mat-datepicker-toggle", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "mat-datepicker", null, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, NewBIODataGeneralInfoComponent_mat_error_83_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Passport No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "mat-select", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, NewBIODataGeneralInfoComponent_mat_option_99_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, NewBIODataGeneralInfoComponent_mat_error_100_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Height");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mat-select", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, NewBIODataGeneralInfoComponent_mat_option_106_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, NewBIODataGeneralInfoComponent_mat_error_107_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "ID Card No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Color Of Eye");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "mat-select", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, NewBIODataGeneralInfoComponent_mat_option_118_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, NewBIODataGeneralInfoComponent_mat_error_119_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Hair Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "mat-select", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, NewBIODataGeneralInfoComponent_mat_option_125_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](126, NewBIODataGeneralInfoComponent_mat_error_126_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Blood Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "mat-select", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, NewBIODataGeneralInfoComponent_mat_option_132_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, NewBIODataGeneralInfoComponent_mat_error_133_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Shoe's Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Pant's Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Identification Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Religion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "mat-select", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function NewBIODataGeneralInfoComponent_Template_mat_select_selectionChange_153_listener($event) {
              return ctx.onReligionSelectionChangeGetCastes($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "mat-option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](156, NewBIODataGeneralInfoComponent_mat_option_156_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](157, NewBIODataGeneralInfoComponent_mat_error_157_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Caste");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "mat-select", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "mat-option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, NewBIODataGeneralInfoComponent_mat_option_165_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](166, NewBIODataGeneralInfoComponent_mat_error_166_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Maritial Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "mat-select", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](172, NewBIODataGeneralInfoComponent_mat_option_172_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](173, NewBIODataGeneralInfoComponent_mat_error_173_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Nominee's Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Close Relative of Nominee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Relation With Nominee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "mat-select", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](194, NewBIODataGeneralInfoComponent_mat_option_194_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](195, NewBIODataGeneralInfoComponent_mat_error_195_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Remark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Present Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "textarea", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Permanent Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "textarea", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NewBIODataGeneralInfoComponent_Template_input_change_215_listener($event) {
              return ctx.onFileChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.BIODataGeneralInfoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rankValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("rankId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("pno").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("localNo").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("chestNo").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("nid").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("dateOfBirth").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.weightValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("weightId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heightValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("heightId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colorOfEyeValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("colorOfEyeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hairColorValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("hairColorId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bloodValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("bloodGroupId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.religionValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("religionId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedCastes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("casteId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.maritialStatusValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("maritalStatusId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genderValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("genderId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.BIODataGeneralInfoForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError],
        styles: [""]
      });
      /***/
    },

    /***/
    85029:
    /*!****************************************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/educational-qualification/educational-qualification-list/educational-qualification-list.component.ts ***!
      \****************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EducationalQualificationListComponent": function EducationalQualificationListComponent() {
          return (
            /* binding */
            _EducationalQualificationListComponent
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


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
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


      var _service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/EducationalQualification.service */
      30991);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      function EducationalQualificationListComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r18 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r2.paging.pageIndex - 1) * ctx_r2.paging.pageSize + i_r18 + 1, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Certification");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r19.examType, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passing Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.passingYear, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.group, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GPA");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r22.result, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EducationalQualificationListComponent_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r23.board, " ");
        }
      }

      function EducationalQualificationListComponent_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/view-educational-qualification-details";

      var _c1 = function _c1(a1, a2) {
        return [_c0, a1, a2];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-educational-qualification-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      function EducationalQualificationListComponent_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EducationalQualificationListComponent_mat_cell_38_Template_button_click_7_listener($event) {
            return $event.stopPropagation();
          })("click", function EducationalQualificationListComponent_mat_cell_38_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var row_r24 = restoredCtx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r27.deleteItem(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, row_r24.traineeId, row_r24.educationalQualificationId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c3, row_r24.traineeId, row_r24.educationalQualificationId));
        }
      }

      function EducationalQualificationListComponent_mat_header_row_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function EducationalQualificationListComponent_mat_row_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c4 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/add-educational-qualification-details/";

      var _c5 = function _c5(a1) {
        return [_c4, a1];
      };

      var _EducationalQualificationListComponent = /*#__PURE__*/function () {
        function _EducationalQualificationListComponent(route, snackBar, EducationalQualificationService, router, confirmService) {
          _classCallCheck(this, _EducationalQualificationListComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.EducationalQualificationService = EducationalQualificationService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          }; // searchText="";

          this.displayedColumns = ['ser', 'examType', 'passingYear', 'group', 'result', 'board', 'actions']; //public dataSource = new MatTableDataSource<EducationalQualification>();

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.SelectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_EducationalQualificationListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEducationalQualifications();
          }
        }, {
          key: "getEducationalQualifications",
          value: function getEducationalQualifications() {
            var _this17 = this;

            this.isLoading = true;
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');
            this.EducationalQualificationService.getdatabytraineeid(+this.traineeId).subscribe(function (response) {
              _this17.dataSource.data = response;
            });
          } // pageChanged(event: PageEvent) {
          //   this.paging.pageIndex = event.pageIndex
          //   this.paging.pageSize = event.pageSize
          //   this.paging.pageIndex = this.paging.pageIndex + 1
          //   this.getEducationalQualifications();
          // }
          // applyFilter(searchText: any){ 
          //   this.searchText = searchText;
          //   this.getEducationalQualifications();
          // } 

        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this18 = this;

            var id = row.educationalQualificationId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              if (result) {
                _this18.EducationalQualificationService["delete"](id).subscribe(function () {
                  _this18.getEducationalQualifications();

                  _this18.snackBar.open('Information Deleted Successfully ', '', {
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

        return _EducationalQualificationListComponent;
      }();

      _EducationalQualificationListComponent.ɵfac = function EducationalQualificationListComponent_Factory(t) {
        return new (t || _EducationalQualificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_1__.EducationalQualificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _EducationalQualificationListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EducationalQualificationListComponent,
        selectors: [["app-educational-qualification-list"]],
        decls: 41,
        vars: 6,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "m-t-10"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "examType"], ["matColumnDef", "passingYear"], ["matColumnDef", "group"], ["matColumnDef", "result"], ["matColumnDef", "board"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function EducationalQualificationListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Educational Qualification List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-table", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EducationalQualificationListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EducationalQualificationListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EducationalQualificationListComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EducationalQualificationListComponent_mat_cell_23_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, EducationalQualificationListComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EducationalQualificationListComponent_mat_cell_26_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, EducationalQualificationListComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EducationalQualificationListComponent_mat_cell_29_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EducationalQualificationListComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, EducationalQualificationListComponent_mat_cell_32_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, EducationalQualificationListComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, EducationalQualificationListComponent_mat_cell_35_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, EducationalQualificationListComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, EducationalQualificationListComponent_mat_cell_38_Template, 10, 8, "mat-cell", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EducationalQualificationListComponent_mat_header_row_39_Template, 1, 0, "mat-header-row", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, EducationalQualificationListComponent_mat_row_40_Template, 1, 0, "mat-row", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c5, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    69433:
    /*!**************************************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/educational-qualification/new-educational-qualification/new-educational-qualification.component.ts ***!
      \**************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewEducationalQualificationComponent": function NewEducationalQualificationComponent() {
          return (
            /* binding */
            _NewEducationalQualificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/EducationalQualification.service */
      30991);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function NewEducationalQualificationComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Trainee name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewEducationalQualificationComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r8.text, " ");
        }
      }

      function NewEducationalQualificationComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Exam Type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewEducationalQualificationComponent_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r9.text, " ");
        }
      }

      function NewEducationalQualificationComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Board is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewEducationalQualificationComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r10.text, " ");
        }
      }

      function NewEducationalQualificationComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Group is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewEducationalQualificationComponent_mat_error_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Result is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/educational-qualification-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _NewEducationalQualificationComponent = /*#__PURE__*/function () {
        function _NewEducationalQualificationComponent(snackBar, EducationalQualificationService, fb, router, route, confirmService) {
          _classCallCheck(this, _NewEducationalQualificationComponent);

          this.snackBar = snackBar;
          this.EducationalQualificationService = EducationalQualificationService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.validationErrors = [];
        }

        _createClass(_NewEducationalQualificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var id = this.route.snapshot.paramMap.get('educationalQualificationId');
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit Educational Qualification';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.EducationalQualificationService.find(+id).subscribe(function (res) {
                _this19.EducationalQualificationForm.patchValue({
                  educationalQualificationId: res.educationalQualificationId,
                  traineeId: res.traineeId,
                  examTypeId: res.examTypeId,
                  boardId: res.boardId,
                  //address: res.address,
                  //subject: res.subject,
                  //instituteName: res.instituteName,
                  groupId: res.groupId,
                  passingYear: res.passingYear,
                  result: res.result //outOfResult: res.outOfResult,
                  //courseDuration: res.courseDuration,
                  //status: res.status,            
                  //additionaInformation: res.additionaInformation,            
                  //   menuPosition: res.menuPosition,

                });
              });
            } else {
              this.pageTitle = 'Create Educational Qualification';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getExamType();
            this.getBoardName();
            this.getGroupName();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.EducationalQualificationForm = this.fb.group({
              educationalQualificationId: [0],
              traineeId: [this.traineeId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              examTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              boardId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              //address: [''],
              //subject: [''],
              //instituteName: [''],
              groupId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              passingYear: [''],
              result: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              //outOfResult: [''],
              //courseDuration: [''],
              //additionaInformation: [],
              //status: ['2'],           
              //  menuPosition: ['', Validators.required],
              isActive: [true]
            });
          }
        }, {
          key: "getExamType",
          value: function getExamType() {
            var _this20 = this;

            this.EducationalQualificationService.getselectedexamtype().subscribe(function (res) {
              _this20.examTypeValues = res;
            });
          }
        }, {
          key: "getBoardName",
          value: function getBoardName() {
            var _this21 = this;

            this.EducationalQualificationService.getselectedboard().subscribe(function (res) {
              _this21.boardValues = res;
            });
          }
        }, {
          key: "getGroupName",
          value: function getGroupName() {
            var _this22 = this;

            this.EducationalQualificationService.getselectedgroup().subscribe(function (res) {
              _this22.groupValues = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this23 = this;

            var id = this.EducationalQualificationForm.get('educationalQualificationId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This Item').subscribe(function (result) {
                if (result) {
                  _this23.EducationalQualificationService.update(+id, _this23.EducationalQualificationForm.value).subscribe(function (response) {
                    _this23.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/educational-qualification-details/' + _this23.traineeId);

                    _this23.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this23.validationErrors = error;
                  });
                }
              });
            } else {
              this.EducationalQualificationService.submit(this.EducationalQualificationForm.value).subscribe(function (response) {
                _this23.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/educational-qualification-details/' + _this23.traineeId);

                _this23.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this23.validationErrors = error;
              });
            }
          }
        }]);

        return _NewEducationalQualificationComponent;
      }();

      _NewEducationalQualificationComponent.ɵfac = function NewEducationalQualificationComponent_Factory(t) {
        return new (t || _NewEducationalQualificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_0__.EducationalQualificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
      };

      _NewEducationalQualificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _NewEducationalQualificationComponent,
        selectors: [["app-new-educational-qualification"]],
        decls: 66,
        vars: 16,
        consts: [[1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], ["hidden", "", 1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "traineeId", "required", ""], [4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "examTypeId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "boardId", "required", ""], ["formControlName", "groupId", "required", ""], ["matInput", "", "formControlName", "passingYear"], ["matInput", "", "formControlName", "result", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", 3, "routerLink"], [3, "value"]],
        template: function NewEducationalQualificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Educational Qualification");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewEducationalQualificationComponent_Template_form_ngSubmit_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Trainee Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, NewEducationalQualificationComponent_mat_error_27_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Exam Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, NewEducationalQualificationComponent_mat_option_33_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, NewEducationalQualificationComponent_mat_error_34_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NewEducationalQualificationComponent_mat_option_40_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, NewEducationalQualificationComponent_mat_error_41_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, NewEducationalQualificationComponent_mat_option_47_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, NewEducationalQualificationComponent_mat_error_48_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Passing Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, NewEducationalQualificationComponent_mat_error_59_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.EducationalQualificationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.EducationalQualificationForm.get("traineeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.examTypeValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.EducationalQualificationForm.get("examTypeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.boardValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.EducationalQualificationForm.get("boardId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.groupValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.EducationalQualificationForm.get("groupId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.EducationalQualificationForm.get("result").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.EducationalQualificationForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, ctx.traineeId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
        styles: [""]
      });
      /***/
    },

    /***/
    14997:
    /*!****************************************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/educational-qualification/view-educational-qualification/view-educational-qualification.component.ts ***!
      \****************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewEducationalQualificationComponent": function ViewEducationalQualificationComponent() {
          return (
            /* binding */
            _ViewEducationalQualificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/EducationalQualification.service */
      30991);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/educational-qualification-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-educational-qualification-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      var _ViewEducationalQualificationComponent = /*#__PURE__*/function () {
        function _ViewEducationalQualificationComponent(route, snackBar, EducationalQualificationService, router, confirmService) {
          _classCallCheck(this, _ViewEducationalQualificationComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.EducationalQualificationService = EducationalQualificationService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
        }

        _createClass(_ViewEducationalQualificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            var id = this.route.snapshot.paramMap.get('educationalQualificationId');
            this.EducationalQualificationService.find(+id).subscribe(function (res) {
              _this24.educationalQualificationId = res.educationalQualificationId, _this24.traineeId = res.traineeId, _this24.examTypeId = res.examTypeId, _this24.examType = res.examType, _this24.groupId = res.groupId, _this24.group = res.group, _this24.boardId = res.boardId, _this24.board = res.board, _this24.passingYear = res.passingYear, _this24.result = res.result;
            });
          }
        }]);

        return _ViewEducationalQualificationComponent;
      }();

      _ViewEducationalQualificationComponent.ɵfac = function ViewEducationalQualificationComponent_Factory(t) {
        return new (t || _ViewEducationalQualificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_EducationalQualification_service__WEBPACK_IMPORTED_MODULE_1__.EducationalQualificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _ViewEducationalQualificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewEducationalQualificationComponent,
        selectors: [["app-view-educational-qualification"]],
        decls: 46,
        vars: 12,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "table", "table-bordered"], ["scope", "row"], ["colspan", "2", "scope", "row"], ["colspan", "2"]],
        template: function ViewEducationalQualificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Educational Qualification");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Exam Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Passing Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c3, ctx.traineeId, ctx.educationalQualificationId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.examType);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.board);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.passingYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.result);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.group);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
        styles: [""]
      });
      /***/
    },

    /***/
    45831:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/family-info/family-info-list/family-info-list.component.ts ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ParentRelativeListComponent": function ParentRelativeListComponent() {
          return (
            /* binding */
            _ParentRelativeListComponent
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


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
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


      var _service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/ParentRelative.service */
      8189);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      function ParentRelativeListComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r20 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r2.paging.pageIndex - 1) * ctx_r2.paging.pageSize + i_r20 + 1, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Relation Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.relationType, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r22.nameInFull, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r23.age, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Dead Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.deadStatusValue, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r25.mobile, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Occupation");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ParentRelativeListComponent_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r26.occupation, " ");
        }
      }

      function ParentRelativeListComponent_mat_header_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/view-family-info-details";

      var _c1 = function _c1(a1, a2) {
        return [_c0, a1, a2];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-family-info-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      function ParentRelativeListComponent_mat_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParentRelativeListComponent_mat_cell_41_Template_button_click_7_listener($event) {
            return $event.stopPropagation();
          })("click", function ParentRelativeListComponent_mat_cell_41_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);

            var row_r27 = restoredCtx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r30.deleteItem(row_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, row_r27.traineeId, row_r27.parentRelativeId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c3, row_r27.traineeId, row_r27.parentRelativeId));
        }
      }

      function ParentRelativeListComponent_mat_header_row_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ParentRelativeListComponent_mat_row_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c4 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/add-family-info-details/";

      var _c5 = function _c5(a1) {
        return [_c4, a1];
      };

      var _ParentRelativeListComponent = /*#__PURE__*/function () {
        function _ParentRelativeListComponent(route, snackBar, ParentRelativeService, router, confirmService) {
          _classCallCheck(this, _ParentRelativeListComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.ParentRelativeService = ParentRelativeService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          }; // searchText="";

          this.displayedColumns = ['ser', 'nameInFull', 'relationType', 'deadStatusValue', 'occupation', 'mobile', 'actions']; //public dataSource = new MatTableDataSource<ParentRelative>();

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.SelectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_ParentRelativeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getParentRelatives();
          }
        }, {
          key: "getParentRelatives",
          value: function getParentRelatives() {
            var _this25 = this;

            this.isLoading = true;
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');
            this.ParentRelativeService.getdatabytraineeid(+this.traineeId).subscribe(function (response) {
              _this25.dataSource.data = response;
            });
          } // pageChanged(event: PageEvent) {
          //   this.paging.pageIndex = event.pageIndex
          //   this.paging.pageSize = event.pageSize
          //   this.paging.pageIndex = this.paging.pageIndex + 1
          //   this.getParentRelatives();
          // }
          // applyFilter(searchText: any){ 
          //   this.searchText = searchText;
          //   this.getParentRelatives();
          // } 

        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this26 = this;

            var id = row.parentRelativeId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              if (result) {
                _this26.ParentRelativeService["delete"](id).subscribe(function () {
                  _this26.getParentRelatives();

                  _this26.snackBar.open('Information Deleted Successfully ', '', {
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

        return _ParentRelativeListComponent;
      }();

      _ParentRelativeListComponent.ɵfac = function ParentRelativeListComponent_Factory(t) {
        return new (t || _ParentRelativeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_1__.ParentRelativeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _ParentRelativeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ParentRelativeListComponent,
        selectors: [["app-family-info-list"]],
        decls: 44,
        vars: 6,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "m-t-10"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "relationType"], ["matColumnDef", "nameInFull"], ["matColumnDef", "age"], ["matColumnDef", "deadStatusValue"], ["matColumnDef", "mobile"], ["matColumnDef", "occupation"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function ParentRelativeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Family Information List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-table", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ParentRelativeListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ParentRelativeListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ParentRelativeListComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ParentRelativeListComponent_mat_cell_23_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ParentRelativeListComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ParentRelativeListComponent_mat_cell_26_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ParentRelativeListComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ParentRelativeListComponent_mat_cell_29_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ParentRelativeListComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ParentRelativeListComponent_mat_cell_32_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ParentRelativeListComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ParentRelativeListComponent_mat_cell_35_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ParentRelativeListComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ParentRelativeListComponent_mat_cell_38_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ParentRelativeListComponent_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ParentRelativeListComponent_mat_cell_41_Template, 10, 8, "mat-cell", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ParentRelativeListComponent_mat_header_row_42_Template, 1, 0, "mat-header-row", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ParentRelativeListComponent_mat_row_43_Template, 1, 0, "mat-row", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c5, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    10688:
    /*!********************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/family-info/new-family-info/new-family-info.component.ts ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewParentRelativeComponent": function NewParentRelativeComponent() {
          return (
            /* binding */
            _NewParentRelativeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/basic-setup/service/codevalue.service */
      88509);
      /* harmony import */


      var _service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/ParentRelative.service */
      8189);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function NewParentRelativeComponent_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", code_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", code_r8.text, " ");
        }
      }

      function NewParentRelativeComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Relation Type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewParentRelativeComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Trainee name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewParentRelativeComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name In Full is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewParentRelativeComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deadStatus_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", deadStatus_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", deadStatus_r9.text, " ");
        }
      }

      function NewParentRelativeComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Dead Status is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NewParentRelativeComponent_mat_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", code_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", code_r10.text, " ");
        }
      }

      function NewParentRelativeComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Occupation is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/family-info-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _NewParentRelativeComponent = /*#__PURE__*/function () {
        function _NewParentRelativeComponent(snackBar, CodeValueService, ParentRelativeService, fb, router, route, confirmService) {
          _classCallCheck(this, _NewParentRelativeComponent);

          this.snackBar = snackBar;
          this.CodeValueService = CodeValueService;
          this.ParentRelativeService = ParentRelativeService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.masterData = src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.validationErrors = [];
        }

        _createClass(_NewParentRelativeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            var id = this.route.snapshot.paramMap.get('parentRelativeId');
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit Family Information';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.ParentRelativeService.find(+id).subscribe(function (res) {
                _this27.ParentRelativeForm.patchValue({
                  parentRelativeId: res.parentRelativeId,
                  traineeId: res.traineeId,
                  relationTypeId: res.relationTypeId,
                  nameInFull: res.nameInFull,
                  deadStatus: res.deadStatus,
                  occupationId: res.occupationId,
                  mobile: res.mobile,
                  //   menuPosition: res.menuPosition,
                  isActive: res.isActive
                });
              });
            } else {
              this.pageTitle = 'Create Family Information';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getRelationType();
            this.getMaritialStatus();
            this.getNationality();
            this.getReligion();
            this.getCaste();
            this.getOccupation();
            this.getDivision();
            this.getDistrict();
            this.getThana();
            this.getDefenseType();
            this.getRank();
            this.getSelectedDeadStatus();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.ParentRelativeForm = this.fb.group({
              parentRelativeId: [0],
              traineeId: [this.traineeId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              relationTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              nameInFull: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              deadStatus: [''],
              occupationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              mobile: [''],
              //   menuPosition: res.menuPosition,
              isActive: [true]
            });
          }
        }, {
          key: "changeNationality",
          value: function changeNationality(e) {
            this.nationalityToggle = e.value;
          }
        }, {
          key: "changedefenseExperience",
          value: function changedefenseExperience(e) {
            this.defenseToggle = e.value;
          }
        }, {
          key: "getRelationType",
          value: function getRelationType() {
            var _this28 = this;

            this.ParentRelativeService.getselectedrelationtype().subscribe(function (res) {
              _this28.relationTypeValues = res;
            });
          }
        }, {
          key: "getMaritialStatus",
          value: function getMaritialStatus() {
            var _this29 = this;

            this.ParentRelativeService.getselectedmaritialstatus().subscribe(function (res) {
              _this29.maritialStatusValues = res;
            });
          }
        }, {
          key: "getNationality",
          value: function getNationality() {
            var _this30 = this;

            this.ParentRelativeService.getselectednationality().subscribe(function (res) {
              _this30.nationalityValues = res;
            });
          }
        }, {
          key: "getReligion",
          value: function getReligion() {
            var _this31 = this;

            this.ParentRelativeService.getselectedreligion().subscribe(function (res) {
              _this31.religionValues = res;
            });
          }
        }, {
          key: "getCaste",
          value: function getCaste() {
            var _this32 = this;

            this.ParentRelativeService.getselectedcaste().subscribe(function (res) {
              _this32.casteValues = res;
            });
          }
        }, {
          key: "getOccupation",
          value: function getOccupation() {
            var _this33 = this;

            this.ParentRelativeService.getselectedoccupation().subscribe(function (res) {
              _this33.occupationValues = res;
            });
          }
        }, {
          key: "getDivision",
          value: function getDivision() {
            var _this34 = this;

            this.ParentRelativeService.getselecteddivision().subscribe(function (res) {
              _this34.divisionValues = res;
            });
          }
        }, {
          key: "getDistrict",
          value: function getDistrict() {
            var _this35 = this;

            this.ParentRelativeService.getselecteddistrict().subscribe(function (res) {
              _this35.districtValues = res;
            });
          }
        }, {
          key: "getThana",
          value: function getThana() {
            var _this36 = this;

            this.ParentRelativeService.getselectedthana().subscribe(function (res) {
              _this36.thanaValues = res;
            });
          }
        }, {
          key: "getDefenseType",
          value: function getDefenseType() {
            var _this37 = this;

            this.ParentRelativeService.getselecteddefensetype().subscribe(function (res) {
              _this37.defenseTypeValues = res;
            });
          }
        }, {
          key: "getRank",
          value: function getRank() {
            var _this38 = this;

            this.ParentRelativeService.getselectedrank().subscribe(function (res) {
              _this38.rankValues = res;
            });
          }
        }, {
          key: "getSelectedDeadStatus",
          value: function getSelectedDeadStatus() {
            var _this39 = this;

            this.CodeValueService.getSelectedCodeValueByType(this.masterData.codevaluetype.DeadStatus).subscribe(function (res) {
              _this39.selectedDeadStatus = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this40 = this;

            var id = this.ParentRelativeForm.get('parentRelativeId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This Item').subscribe(function (result) {
                if (result) {
                  _this40.ParentRelativeService.update(+id, _this40.ParentRelativeForm.value).subscribe(function (response) {
                    _this40.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/family-info-details/' + _this40.traineeId);

                    _this40.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this40.validationErrors = error;
                  });
                }
              });
            } else {
              this.ParentRelativeService.submit(this.ParentRelativeForm.value).subscribe(function (response) {
                _this40.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/family-info-details/' + _this40.traineeId);

                _this40.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this40.validationErrors = error;
              });
            }
          }
        }]);

        return _NewParentRelativeComponent;
      }();

      _NewParentRelativeComponent.ɵfac = function NewParentRelativeComponent_Factory(t) {
        return new (t || _NewParentRelativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_basic_setup_service_codevalue_service__WEBPACK_IMPORTED_MODULE_1__.CodeValueService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_2__.ParentRelativeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService));
      };

      _NewParentRelativeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _NewParentRelativeComponent,
        selectors: [["app-new-family-info"]],
        decls: 67,
        vars: 16,
        consts: [[1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-12", "col-lg-12", "col-md-6", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3", "important-type"], ["formControlName", "relationTypeId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["hidden", "", 1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "traineeId", "required", ""], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "nameInFull", "required", ""], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "mb-2"], ["formControlName", "deadStatus", "required", ""], ["formControlName", "occupationId", "required", ""], ["matInput", "", "formControlName", "mobile"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", 3, "routerLink"], [3, "value"]],
        template: function NewParentRelativeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Family Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "form", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function NewParentRelativeComponent_Template_form_ngSubmit_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Relation Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NewParentRelativeComponent_mat_option_27_Template, 2, 2, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, NewParentRelativeComponent_mat_error_28_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Trainee Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, NewParentRelativeComponent_mat_error_35_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Name In Full");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, NewParentRelativeComponent_mat_error_41_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Dead Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, NewParentRelativeComponent_mat_option_47_Template, 2, 2, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, NewParentRelativeComponent_mat_error_48_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Occupation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, NewParentRelativeComponent_mat_option_54_Template, 2, 2, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, NewParentRelativeComponent_mat_error_55_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.ParentRelativeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.relationTypeValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentRelativeForm.get("relationTypeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentRelativeForm.get("traineeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentRelativeForm.get("nameInFull").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedDeadStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentRelativeForm.get("deadStatus").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.occupationValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ParentRelativeForm.get("occupationId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.ParentRelativeForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx.traineeId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError],
        styles: [""]
      });
      /***/
    },

    /***/
    90508:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/family-info/view-family-info/view-family-info.component.ts ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewParentRelativeComponent": function ViewParentRelativeComponent() {
          return (
            /* binding */
            _ViewParentRelativeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/ParentRelative.service */
      8189);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/family-info-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-family-info-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      var _ViewParentRelativeComponent = /*#__PURE__*/function () {
        function _ViewParentRelativeComponent(route, snackBar, ParentRelativeService, router, confirmService) {
          _classCallCheck(this, _ViewParentRelativeComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.ParentRelativeService = ParentRelativeService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
        }

        _createClass(_ViewParentRelativeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            var id = this.route.snapshot.paramMap.get('parentRelativeId');
            this.ParentRelativeService.find(+id).subscribe(function (res) {
              _this41.parentRelativeId = res.parentRelativeId, _this41.traineeId = res.traineeId, _this41.relationTypeId = res.relationTypeId, _this41.relationType = res.relationType, _this41.nameInFull = res.nameInFull, _this41.deadStatus = res.deadStatus, _this41.deadStatusValue = res.deadStatusValue, _this41.occupationId = res.occupationId, _this41.occupation = res.occupation, _this41.mobile = res.mobile;
            }); // this.getExamType();
            // this.getBoard();
            // this.getGroup();
          }
        }]);

        return _ViewParentRelativeComponent;
      }();

      _ViewParentRelativeComponent.ɵfac = function ViewParentRelativeComponent_Factory(t) {
        return new (t || _ViewParentRelativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_ParentRelative_service__WEBPACK_IMPORTED_MODULE_1__.ParentRelativeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _ViewParentRelativeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewParentRelativeComponent,
        selectors: [["app-view-family-info"]],
        decls: 46,
        vars: 12,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "table", "table-bordered"], ["scope", "row"], ["colspan", "2", "scope", "row"], ["colspan", "2"]],
        template: function ViewParentRelativeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Family Information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Relation Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Dead Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Occupation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c3, ctx.traineeId, ctx.parentRelativeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nameInFull);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.relationType);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.deadStatusValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.occupation);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.mobile);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
        styles: [""]
      });
      /***/
    },

    /***/
    14389:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/game-sport/game-sport-list/game-sport-list.component.ts ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameSportListComponent": function GameSportListComponent() {
          return (
            /* binding */
            _GameSportListComponent
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


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
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


      var _service_GameSport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/GameSport.service */
      18643);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      function GameSportListComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GameSportListComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r2.paging.pageIndex - 1) * ctx_r2.paging.pageSize + i_r12 + 1, " ");
        }
      }

      function GameSportListComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GameSportListComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.game, " ");
        }
      }

      function GameSportListComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GameSportListComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.performance, " ");
        }
      }

      function GameSportListComponent_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/view-game-sport-details";

      var _c1 = function _c1(a1, a2) {
        return [_c0, a1, a2];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-game-sport-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      function GameSportListComponent_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameSportListComponent_mat_cell_29_Template_button_click_7_listener($event) {
            return $event.stopPropagation();
          })("click", function GameSportListComponent_mat_cell_29_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var row_r15 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.deleteItem(row_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, row_r15.traineeId, row_r15.gameSportId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c3, row_r15.traineeId, row_r15.gameSportId));
        }
      }

      function GameSportListComponent_mat_header_row_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function GameSportListComponent_mat_row_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c4 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/add-game-sport-details/";

      var _c5 = function _c5(a1) {
        return [_c4, a1];
      };

      var _GameSportListComponent = /*#__PURE__*/function () {
        function _GameSportListComponent(route, snackBar, GameSportService, router, confirmService) {
          _classCallCheck(this, _GameSportListComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.GameSportService = GameSportService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          }; // searchText="";

          this.displayedColumns = ['ser', 'game', 'performance', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.SelectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_GameSportListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getGameSports();
          }
        }, {
          key: "getGameSports",
          value: function getGameSports() {
            var _this42 = this;

            this.isLoading = true;
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');
            this.GameSportService.getdatabytraineeid(+this.traineeId).subscribe(function (response) {
              _this42.dataSource.data = response;
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this43 = this;

            var id = row.gameSportId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              if (result) {
                _this43.GameSportService["delete"](id).subscribe(function () {
                  _this43.getGameSports();

                  _this43.snackBar.open('Information Deleted Successfully ', '', {
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

        return _GameSportListComponent;
      }();

      _GameSportListComponent.ɵfac = function GameSportListComponent_Factory(t) {
        return new (t || _GameSportListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_GameSport_service__WEBPACK_IMPORTED_MODULE_1__.GameSportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _GameSportListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _GameSportListComponent,
        selectors: [["app-game-sport-list"]],
        decls: 32,
        vars: 6,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "m-t-10"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "game"], ["matColumnDef", "performance"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function GameSportListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Game & Sports List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-table", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, GameSportListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GameSportListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, GameSportListComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, GameSportListComponent_mat_cell_23_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, GameSportListComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, GameSportListComponent_mat_cell_26_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, GameSportListComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, GameSportListComponent_mat_cell_29_Template, 10, 8, "mat-cell", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, GameSportListComponent_mat_header_row_30_Template, 1, 0, "mat-header-row", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, GameSportListComponent_mat_row_31_Template, 1, 0, "mat-row", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c5, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    54455:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/game-sport/new-game-sport/new-game-sport.component.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewGameSportComponent": function NewGameSportComponent() {
          return (
            /* binding */
            _NewGameSportComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_GameSport_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/GameSport.service */
      18643);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function NewGameSportComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Trainee name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewGameSportComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r4.text, " ");
        }
      }

      function NewGameSportComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Game is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewGameSportComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Performance is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/game-sport-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _NewGameSportComponent = /*#__PURE__*/function () {
        function _NewGameSportComponent(snackBar, GameSportService, fb, router, route, confirmService) {
          _classCallCheck(this, _NewGameSportComponent);

          this.snackBar = snackBar;
          this.GameSportService = GameSportService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.validationErrors = [];
        }

        _createClass(_NewGameSportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            var id = this.route.snapshot.paramMap.get('gameSportId');
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit Game & Sport';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.GameSportService.find(+id).subscribe(function (res) {
                _this44.GameSportForm.patchValue({
                  gameSportId: res.gameSportId,
                  traineeId: res.traineeId,
                  gameId: res.gameId,
                  //levelOfParticipation: res.levelOfParticipation,
                  performance: res.performance //additionalInformation: res.additionalInformation,
                  //   menuPosition: res.menuPosition,

                });
              });
            } else {
              this.pageTitle = 'Create Game & Sport';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getGame();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.GameSportForm = this.fb.group({
              gameSportId: [0],
              traineeId: [this.traineeId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              gameId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              // levelOfParticipation: ['', Validators.required],
              performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              //additionalInformation: [''],       
              //  menuPosition: ['', Validators.required],
              isActive: [true]
            });
          }
        }, {
          key: "getGame",
          value: function getGame() {
            var _this45 = this;

            this.GameSportService.getselectedgame().subscribe(function (res) {
              _this45.gameValues = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this46 = this;

            var id = this.GameSportForm.get('gameSportId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This Item').subscribe(function (result) {
                if (result) {
                  _this46.GameSportService.update(+id, _this46.GameSportForm.value).subscribe(function (response) {
                    _this46.router.navigateByUrl('/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/game-sport-details/' + _this46.traineeId);

                    _this46.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this46.validationErrors = error;
                  });
                }
              });
            } else {
              this.GameSportService.submit(this.GameSportForm.value).subscribe(function (response) {
                _this46.router.navigateByUrl('/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/game-sport-details/' + _this46.traineeId);

                _this46.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this46.validationErrors = error;
              });
            }
          }
        }]);

        return _NewGameSportComponent;
      }();

      _NewGameSportComponent.ɵfac = function NewGameSportComponent_Factory(t) {
        return new (t || _NewGameSportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_GameSport_service__WEBPACK_IMPORTED_MODULE_0__.GameSportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
      };

      _NewGameSportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _NewGameSportComponent,
        selectors: [["app-new-game-sport"]],
        decls: 47,
        vars: 12,
        consts: [[1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], ["hidden", "", 1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "traineeId", "required", ""], [4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "gameId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "performance", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", 3, "routerLink"], [3, "value"]],
        template: function NewGameSportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Game & Sport");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewGameSportComponent_Template_form_ngSubmit_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Trainee Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, NewGameSportComponent_mat_error_27_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Game");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, NewGameSportComponent_mat_option_33_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, NewGameSportComponent_mat_error_34_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NewGameSportComponent_mat_error_40_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.GameSportForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.GameSportForm.get("traineeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.gameValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.GameSportForm.get("gameId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.GameSportForm.get("performance").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.GameSportForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.traineeId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
        styles: [""]
      });
      /***/
    },

    /***/
    59282:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/game-sport/view-game-sport/view-game-sport.component.ts ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewGameSportComponent": function ViewGameSportComponent() {
          return (
            /* binding */
            _ViewGameSportComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_GameSport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/GameSport.service */
      18643);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/game-sport-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-game-sport-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      var _ViewGameSportComponent = /*#__PURE__*/function () {
        function _ViewGameSportComponent(route, snackBar, GameSportService, router, confirmService) {
          _classCallCheck(this, _ViewGameSportComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.GameSportService = GameSportService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
        }

        _createClass(_ViewGameSportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this47 = this;

            var id = this.route.snapshot.paramMap.get('gameSportId');
            this.GameSportService.find(+id).subscribe(function (res) {
              _this47.gameSportId = res.gameSportId, _this47.traineeId = res.traineeId, _this47.gameId = res.gameId, _this47.game = res.game, _this47.performance = res.performance;
            }); //this.getGame();
          }
        }]);

        return _ViewGameSportComponent;
      }();

      _ViewGameSportComponent.ɵfac = function ViewGameSportComponent_Factory(t) {
        return new (t || _ViewGameSportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_GameSport_service__WEBPACK_IMPORTED_MODULE_1__.GameSportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _ViewGameSportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewGameSportComponent,
        selectors: [["app-view-game-sport"]],
        decls: 32,
        vars: 9,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "table", "table-bordered"], ["scope", "row"]],
        template: function ViewGameSportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Game & Sports");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Game");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c3, ctx.traineeId, ctx.gameSportId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.game);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.performance);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
        styles: [""]
      });
      /***/
    },

    /***/
    40519:
    /*!********************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/main-tab-layout/main-tab-layout.component.ts ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainTabLayoutComponent": function MainTabLayoutComponent() {
          return (
            /* binding */
            _MainTabLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _service_ChildParameter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/ChildParameter.service */
      85694);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function MainTabLayoutComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r1 = ctx.$implicit;

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, link_r1.link, ctx_r0.id))("active", _r2.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
        }
      }

      var _MainTabLayoutComponent = /*#__PURE__*/function () {
        function _MainTabLayoutComponent(router, route, childParameterService) {
          _classCallCheck(this, _MainTabLayoutComponent);

          this.router = router;
          this.route = route;
          this.childParameterService = childParameterService;
          this.title = 'angular-material-tab-router';
          this.activeLinkIndex = -1;
          this.navLinks = [{
            label: 'General Information',
            link: '../main-tab/update-traineebiodatageneralinfo/',
            index: 0
          }, {
            label: 'Educational Qualification',
            link: '../main-tab/educational-qualification-details',
            index: 1
          }, {
            label: 'Game and Sports',
            link: '../main-tab/game-sport-details',
            index: 2
          }, {
            label: 'Family Info',
            link: '../main-tab/family-info-details',
            index: 3
          }, {
            label: 'Social Media',
            link: '../main-tab/social-media-details',
            index: 4
          }];
        }

        _createClass(_MainTabLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this48 = this;

            this.id = this.route.snapshot.paramMap.get('traineeId'); //this.id = 17;

            if (this.id) {
              this.childParameterService.SetupTraineeId(this.id);
            } else {
              if (this.childParameterService.currentTraineeValue) {
                this.id = this.childParameterService.currentTraineeValue;
              }
            }

            this.router.events.subscribe(function (res) {
              _this48.activeLinkIndex = _this48.navLinks.indexOf(_this48.navLinks.find(function (tab) {
                return tab.link === '.' + _this48.router.url;
              }));
            });
          }
        }]);

        return _MainTabLayoutComponent;
      }();

      _MainTabLayoutComponent.ɵfac = function MainTabLayoutComponent_Factory(t) {
        return new (t || _MainTabLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_ChildParameter_service__WEBPACK_IMPORTED_MODULE_0__.ChildParameterService));
      };

      _MainTabLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MainTabLayoutComponent,
        selectors: [["app-main-tab-layout"]],
        decls: 24,
        vars: 1,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["routerLink", "/biodata-tab/biodata-general-Info-list"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "body"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function MainTabLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "BIO Data Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Trainee BIO Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "BIO Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nav", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MainTabLayoutComponent_a_22_Template, 3, 6, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navLinks);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
        styles: [""]
      });
      /***/
    },

    /***/
    94249:
    /*!**************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/models/BIODataGeneralInfoPagination.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BIODataGeneralInfoPagination": function BIODataGeneralInfoPagination() {
          return (
            /* binding */
            _BIODataGeneralInfoPagination
          );
        }
        /* harmony export */

      });

      var _BIODataGeneralInfoPagination = function _BIODataGeneralInfoPagination() {
        _classCallCheck(this, _BIODataGeneralInfoPagination);

        this.items = [];
      };
      /***/

    },

    /***/
    48211:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/sailor-biodata-tab-layout-routing.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SailorTabsRoutingModule": function SailorTabsRoutingModule() {
          return (
            /* binding */
            _SailorTabsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_tab_layout_main_tab_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-tab-layout/main-tab-layout.component */
      40519);
      /* harmony import */


      var _trainee_biodata_update_traineebiodatageneralinfo_update_traineebiodatageneralinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./trainee-biodata/update-traineebiodatageneralinfo/update-traineebiodatageneralinfo.component */
      29324);
      /* harmony import */


      var _educational_qualification_educational_qualification_list_educational_qualification_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./educational-qualification/educational-qualification-list/educational-qualification-list.component */
      85029);
      /* harmony import */


      var _educational_qualification_new_educational_qualification_new_educational_qualification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./educational-qualification/new-educational-qualification/new-educational-qualification.component */
      69433);
      /* harmony import */


      var _educational_qualification_view_educational_qualification_view_educational_qualification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./educational-qualification/view-educational-qualification/view-educational-qualification.component */
      14997);
      /* harmony import */


      var _game_sport_game_sport_list_game_sport_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-sport/game-sport-list/game-sport-list.component */
      14389);
      /* harmony import */


      var _game_sport_new_game_sport_new_game_sport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-sport/new-game-sport/new-game-sport.component */
      54455);
      /* harmony import */


      var _game_sport_view_game_sport_view_game_sport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./game-sport/view-game-sport/view-game-sport.component */
      59282);
      /* harmony import */


      var _family_info_family_info_list_family_info_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./family-info/family-info-list/family-info-list.component */
      45831);
      /* harmony import */


      var _family_info_new_family_info_new_family_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./family-info/new-family-info/new-family-info.component */
      10688);
      /* harmony import */


      var _family_info_view_family_info_view_family_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./family-info/view-family-info/view-family-info.component */
      90508);
      /* harmony import */


      var _social_media_new_social_media_new_social_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./social-media/new-social-media/new-social-media.component */
      98381);
      /* harmony import */


      var _social_media_view_social_media_view_social_media_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./social-media/view-social-media/view-social-media.component */
      27518);
      /* harmony import */


      var _social_media_social_media_list_social_media_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./social-media/social-media-list/social-media-list.component */
      33569);
      /* harmony import */


      var _biodata_general_info_biodata_general_info_list_biodata_general_info_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./biodata-general-info/biodata-general-info-list/biodata-general-info-list.component */
      76837);
      /* harmony import */


      var _biodata_general_info_new_biodata_general_info_new_biodata_general_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./biodata-general-info/new-biodata-general-info/new-biodata-general-info.component */
      2700);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'main-tab-layout/:traineeId',
        component: _main_tab_layout_main_tab_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainTabLayoutComponent
      }, {
        path: 'main-tab-layout/main-tab',
        component: _main_tab_layout_main_tab_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainTabLayoutComponent,
        children: [{
          path: '',
          redirectTo: 'main-tab-layout',
          pathMatch: 'full'
        }, {
          path: 'family-info-details/:traineeId',
          component: _family_info_family_info_list_family_info_list_component__WEBPACK_IMPORTED_MODULE_8__.ParentRelativeListComponent
        }, {
          path: 'add-family-info-details/:traineeId',
          component: _family_info_new_family_info_new_family_info_component__WEBPACK_IMPORTED_MODULE_9__.NewParentRelativeComponent
        }, {
          path: 'update-family-info-details/:traineeId/:parentRelativeId',
          component: _family_info_new_family_info_new_family_info_component__WEBPACK_IMPORTED_MODULE_9__.NewParentRelativeComponent
        }, {
          path: 'view-family-info-details/:traineeId/:parentRelativeId',
          component: _family_info_view_family_info_view_family_info_component__WEBPACK_IMPORTED_MODULE_10__.ViewParentRelativeComponent
        }, {
          path: 'educational-qualification-details/:traineeId',
          component: _educational_qualification_educational_qualification_list_educational_qualification_list_component__WEBPACK_IMPORTED_MODULE_2__.EducationalQualificationListComponent
        }, {
          path: 'add-educational-qualification-details/:traineeId',
          component: _educational_qualification_new_educational_qualification_new_educational_qualification_component__WEBPACK_IMPORTED_MODULE_3__.NewEducationalQualificationComponent
        }, {
          path: 'update-educational-qualification-details/:traineeId/:educationalQualificationId',
          component: _educational_qualification_new_educational_qualification_new_educational_qualification_component__WEBPACK_IMPORTED_MODULE_3__.NewEducationalQualificationComponent
        }, {
          path: 'view-educational-qualification-details/:traineeId/:educationalQualificationId',
          component: _educational_qualification_view_educational_qualification_view_educational_qualification_component__WEBPACK_IMPORTED_MODULE_4__.ViewEducationalQualificationComponent
        }, {
          path: 'game-sport-details/:traineeId',
          component: _game_sport_game_sport_list_game_sport_list_component__WEBPACK_IMPORTED_MODULE_5__.GameSportListComponent
        }, {
          path: 'add-game-sport-details/:traineeId',
          component: _game_sport_new_game_sport_new_game_sport_component__WEBPACK_IMPORTED_MODULE_6__.NewGameSportComponent
        }, {
          path: 'update-game-sport-details/:traineeId/:gameSportId',
          component: _game_sport_new_game_sport_new_game_sport_component__WEBPACK_IMPORTED_MODULE_6__.NewGameSportComponent
        }, {
          path: 'view-game-sport-details/:traineeId/:gameSportId',
          component: _game_sport_view_game_sport_view_game_sport_component__WEBPACK_IMPORTED_MODULE_7__.ViewGameSportComponent
        }, {
          path: 'update-traineebiodatageneralinfo/:traineeId',
          component: _trainee_biodata_update_traineebiodatageneralinfo_update_traineebiodatageneralinfo_component__WEBPACK_IMPORTED_MODULE_1__.UpdateTraineeBIODataGeneralInfoComponent
        }, {
          path: 'social-media-details/:traineeId',
          component: _social_media_social_media_list_social_media_list_component__WEBPACK_IMPORTED_MODULE_13__.SocialMediaListComponent
        }, {
          path: 'add-social-media-details/:traineeId',
          component: _social_media_new_social_media_new_social_media_component__WEBPACK_IMPORTED_MODULE_11__.NewSocialMediaComponent
        }, {
          path: 'update-social-media-details/:traineeId/:socialMediaId',
          component: _social_media_new_social_media_new_social_media_component__WEBPACK_IMPORTED_MODULE_11__.NewSocialMediaComponent
        }, {
          path: 'view-social-media-details/:traineeId/:socialMediaId',
          component: _social_media_view_social_media_view_social_media_component__WEBPACK_IMPORTED_MODULE_12__.ViewSocialMediaComponent
        }]
      }, {
        path: 'biodata-general-Info-list',
        component: _biodata_general_info_biodata_general_info_list_biodata_general_info_list_component__WEBPACK_IMPORTED_MODULE_14__.BIODataGeneralInfoListComponent
      }, {
        path: 'add-biodata-general-Info',
        component: _biodata_general_info_new_biodata_general_info_new_biodata_general_info_component__WEBPACK_IMPORTED_MODULE_15__.NewBIODataGeneralInfoComponent
      }, {
        path: 'update-biodata-general-Info/:traineeId',
        component: _biodata_general_info_new_biodata_general_info_new_biodata_general_info_component__WEBPACK_IMPORTED_MODULE_15__.NewBIODataGeneralInfoComponent
      }];

      var _SailorTabsRoutingModule = function _SailorTabsRoutingModule() {
        _classCallCheck(this, _SailorTabsRoutingModule);
      };

      _SailorTabsRoutingModule.ɵfac = function SailorTabsRoutingModule_Factory(t) {
        return new (t || _SailorTabsRoutingModule)();
      };

      _SailorTabsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: _SailorTabsRoutingModule
      });
      _SailorTabsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](_SailorTabsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    23207:
    /*!***********************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/sailor-biodata-tab-layout.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SailorTabModule": function SailorTabModule() {
          return (
            /* binding */
            _SailorTabModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      12522);
      /* harmony import */


      var _sailor_biodata_tab_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sailor-biodata-tab-layout-routing.module */
      48211);
      /* harmony import */


      var _main_tab_layout_main_tab_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-tab-layout/main-tab-layout.component */
      40519);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ngx-material-file-input */
      4904);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _educational_qualification_educational_qualification_list_educational_qualification_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./educational-qualification/educational-qualification-list/educational-qualification-list.component */
      85029);
      /* harmony import */


      var _educational_qualification_new_educational_qualification_new_educational_qualification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./educational-qualification/new-educational-qualification/new-educational-qualification.component */
      69433);
      /* harmony import */


      var _educational_qualification_view_educational_qualification_view_educational_qualification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./educational-qualification/view-educational-qualification/view-educational-qualification.component */
      14997);
      /* harmony import */


      var _biodata_general_info_new_biodata_general_info_new_biodata_general_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./biodata-general-info/new-biodata-general-info/new-biodata-general-info.component */
      2700);
      /* harmony import */


      var _biodata_general_info_biodata_general_info_list_biodata_general_info_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./biodata-general-info/biodata-general-info-list/biodata-general-info-list.component */
      76837);
      /* harmony import */


      var _trainee_biodata_update_traineebiodatageneralinfo_update_traineebiodatageneralinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./trainee-biodata/update-traineebiodatageneralinfo/update-traineebiodatageneralinfo.component */
      29324);
      /* harmony import */


      var _game_sport_game_sport_list_game_sport_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./game-sport/game-sport-list/game-sport-list.component */
      14389);
      /* harmony import */


      var _game_sport_new_game_sport_new_game_sport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./game-sport/new-game-sport/new-game-sport.component */
      54455);
      /* harmony import */


      var _game_sport_view_game_sport_view_game_sport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./game-sport/view-game-sport/view-game-sport.component */
      59282);
      /* harmony import */


      var _family_info_family_info_list_family_info_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./family-info/family-info-list/family-info-list.component */
      45831);
      /* harmony import */


      var _family_info_new_family_info_new_family_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./family-info/new-family-info/new-family-info.component */
      10688);
      /* harmony import */


      var _family_info_view_family_info_view_family_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./family-info/view-family-info/view-family-info.component */
      90508);
      /* harmony import */


      var _social_media_new_social_media_new_social_media_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./social-media/new-social-media/new-social-media.component */
      98381);
      /* harmony import */


      var _social_media_social_media_list_social_media_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./social-media/social-media-list/social-media-list.component */
      33569);
      /* harmony import */


      var _social_media_view_social_media_view_social_media_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./social-media/view-social-media/view-social-media.component */
      27518);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SailorTabModule = function _SailorTabModule() {
        _classCallCheck(this, _SailorTabModule);
      };

      _SailorTabModule.ɵfac = function SailorTabModule_Factory(t) {
        return new (t || _SailorTabModule)();
      };

      _SailorTabModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: _SailorTabModule
      });
      _SailorTabModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _sailor_biodata_tab_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.SailorTabsRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__.MaterialFileInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__.MatCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](_SailorTabModule, {
          declarations: [_main_tab_layout_main_tab_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainTabLayoutComponent, _trainee_biodata_update_traineebiodatageneralinfo_update_traineebiodatageneralinfo_component__WEBPACK_IMPORTED_MODULE_7__.UpdateTraineeBIODataGeneralInfoComponent, _educational_qualification_educational_qualification_list_educational_qualification_list_component__WEBPACK_IMPORTED_MODULE_2__.EducationalQualificationListComponent, _educational_qualification_new_educational_qualification_new_educational_qualification_component__WEBPACK_IMPORTED_MODULE_3__.NewEducationalQualificationComponent, _educational_qualification_view_educational_qualification_view_educational_qualification_component__WEBPACK_IMPORTED_MODULE_4__.ViewEducationalQualificationComponent, _game_sport_game_sport_list_game_sport_list_component__WEBPACK_IMPORTED_MODULE_8__.GameSportListComponent, _game_sport_new_game_sport_new_game_sport_component__WEBPACK_IMPORTED_MODULE_9__.NewGameSportComponent, _game_sport_view_game_sport_view_game_sport_component__WEBPACK_IMPORTED_MODULE_10__.ViewGameSportComponent, _biodata_general_info_biodata_general_info_list_biodata_general_info_list_component__WEBPACK_IMPORTED_MODULE_6__.BIODataGeneralInfoListComponent, _biodata_general_info_new_biodata_general_info_new_biodata_general_info_component__WEBPACK_IMPORTED_MODULE_5__.NewBIODataGeneralInfoComponent, _family_info_family_info_list_family_info_list_component__WEBPACK_IMPORTED_MODULE_11__.ParentRelativeListComponent, _family_info_new_family_info_new_family_info_component__WEBPACK_IMPORTED_MODULE_12__.NewParentRelativeComponent, _family_info_view_family_info_view_family_info_component__WEBPACK_IMPORTED_MODULE_13__.ViewParentRelativeComponent, _social_media_new_social_media_new_social_media_component__WEBPACK_IMPORTED_MODULE_14__.NewSocialMediaComponent, _social_media_social_media_list_social_media_list_component__WEBPACK_IMPORTED_MODULE_15__.SocialMediaListComponent, _social_media_view_social_media_view_social_media_component__WEBPACK_IMPORTED_MODULE_16__.ViewSocialMediaComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _sailor_biodata_tab_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.SailorTabsRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__.MaterialFileInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__.MatCheckboxModule]
        });
      })();
      /***/

    },

    /***/
    35137:
    /*!*************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/BIODataGeneralInfo.service.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BIODataGeneralInfoService": function BIODataGeneralInfoService() {
          return (
            /* binding */
            _BIODataGeneralInfoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _models_BIODataGeneralInfoPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/BIODataGeneralInfoPagination */
      94249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BIODataGeneralInfoService = /*#__PURE__*/function () {
        function _BIODataGeneralInfoService(http) {
          _classCallCheck(this, _BIODataGeneralInfoService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.BIODataGeneralInfos = [];
          this.BIODataGeneralInfoPagination = new _models_BIODataGeneralInfoPagination__WEBPACK_IMPORTED_MODULE_1__.BIODataGeneralInfoPagination();
        }

        _createClass(_BIODataGeneralInfoService, [{
          key: "postFile",
          value: function postFile(fileToUpload) {
            var endpoint = '/src/assets/img';
            var formData = new FormData();
            formData.append('bnaPhotoUrl', fileToUpload, fileToUpload.name);
            return this.http.post(endpoint, formData);
          }
        }, {
          key: "getBIODataGeneralInfos",
          value: function getBIODataGeneralInfos(pageNumber, pageSize, searchText) {
            var _this49 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-sailors', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this49.BIODataGeneralInfos = [].concat(_toConsumableArray(_this49.BIODataGeneralInfos), _toConsumableArray(response.body.items));
              _this49.BIODataGeneralInfoPagination = response.body;
              return _this49.BIODataGeneralInfoPagination;
            }));
          } //dropdown data 

        }, {
          key: "getselectedhaircolor",
          value: function getselectedhaircolor() {
            return this.http.get(this.baseUrl + '/hair-color/get-selectedHairColor');
          }
        }, {
          key: "getselectedrank",
          value: function getselectedrank() {
            return this.http.get(this.baseUrl + '/ranks/get-selectedRanks');
          }
        }, {
          key: "getselectedheight",
          value: function getselectedheight() {
            return this.http.get(this.baseUrl + '/height/get-selectedHeight');
          }
        }, {
          key: "getselectedweight",
          value: function getselectedweight() {
            return this.http.get(this.baseUrl + '/weights/get-selectedWeights');
          }
        }, {
          key: "getselectedcolorofeye",
          value: function getselectedcolorofeye() {
            return this.http.get(this.baseUrl + '/color-of-eye/get-selectedColorOfEyes');
          }
        }, {
          key: "getselectedbloodgroup",
          value: function getselectedbloodgroup() {
            return this.http.get(this.baseUrl + '/blood-group/get-selectedBloodGroups');
          }
        }, {
          key: "getselectedreligion",
          value: function getselectedreligion() {
            return this.http.get(this.baseUrl + '/religion/get-selectedReligions');
          }
        }, {
          key: "getselectedcaste",
          value: function getselectedcaste() {
            return this.http.get(this.baseUrl + '/Caste/get-selectedCastes');
          }
        }, {
          key: "getselectedgender",
          value: function getselectedgender() {
            return this.http.get(this.baseUrl + '/gender/get-selectedGender');
          }
        }, {
          key: "getselectedmaritialstatus",
          value: function getselectedmaritialstatus() {
            return this.http.get(this.baseUrl + '/marital-status/get-selectedMaritialStatuses');
          }
        }, {
          key: "getcastebyreligion",
          value: function getcastebyreligion(id) {
            return this.http.get(this.baseUrl + '/Caste/get-selectedCasteByReligion?religionId=' + id);
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineedetail/' + id);
          }
        }, {
          key: "findTraineeDetails",
          value: function findTraineeDetails(id) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineedetails/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/trainee-bio-data-general-info/update-traineeBioDataGeneralInfo/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/trainee-bio-data-general-info/save-traineeBioDataGeneralInfo', model);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/trainee-bio-data-general-info/delete-traineeBioDataGeneralInfo/' + id);
          }
        }]);

        return _BIODataGeneralInfoService;
      }();

      _BIODataGeneralInfoService.ɵfac = function BIODataGeneralInfoService_Factory(t) {
        return new (t || _BIODataGeneralInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _BIODataGeneralInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _BIODataGeneralInfoService,
        factory: _BIODataGeneralInfoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    85694:
    /*!*********************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/ChildParameter.service.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChildParameterService": function ChildParameterService() {
          return (
            /* binding */
            _ChildParameterService
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
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ChildParameterService = /*#__PURE__*/function () {
        function _ChildParameterService(http) {
          _classCallCheck(this, _ChildParameterService);

          this.http = http;
          this.currentTraineeIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentTraineeId')));
          this.currentUser = this.currentTraineeIdSubject.asObservable();
        }

        _createClass(_ChildParameterService, [{
          key: "currentTraineeValue",
          get: function get() {
            return this.currentTraineeIdSubject.value;
          }
        }, {
          key: "SetupTraineeId",
          value: function SetupTraineeId(traineeId) {
            localStorage.setItem('currentTraineeId', JSON.stringify(traineeId));
            this.currentTraineeIdSubject.next(traineeId);
          }
        }]);

        return _ChildParameterService;
      }();

      _ChildParameterService.ɵfac = function ChildParameterService_Factory(t) {
        return new (t || _ChildParameterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ChildParameterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ChildParameterService,
        factory: _ChildParameterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    30991:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/EducationalQualification.service.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EducationalQualificationService": function EducationalQualificationService() {
          return (
            /* binding */
            _EducationalQualificationService
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

      var _EducationalQualificationService = /*#__PURE__*/function () {
        function _EducationalQualificationService(http) {
          _classCallCheck(this, _EducationalQualificationService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.EducationalQualifications = [];
        }

        _createClass(_EducationalQualificationService, [{
          key: "getselectedexamtype",
          value: function getselectedexamtype() {
            return this.http.get(this.baseUrl + '/exam-type/get-selectedExamType');
          }
        }, {
          key: "getselectedboard",
          value: function getselectedboard() {
            return this.http.get(this.baseUrl + '/board/get-selectedBoards');
          }
        }, {
          key: "getselectedgroup",
          value: function getselectedgroup() {
            return this.http.get(this.baseUrl + '/group/get-selectedGroup');
          }
        }, {
          key: "getdatabytraineeid",
          value: function getdatabytraineeid(id) {
            return this.http.get(this.baseUrl + '/educational-qualification/get-listByTrainee?Traineeid=' + id).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              //this.EducationalQualifications = [...this.EducationalQualifications, ...response.body.items];        
              //response = this.EducationalQualifications;
              return response;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/educational-qualification/get-educationalQualificationDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/educational-qualification/update-educationalQualification/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/educational-qualification/save-educationalQualification', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (EducationalQualification) {
              if (EducationalQualification) {
                return EducationalQualification;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/educational-qualification/delete-educationalQualification/' + id);
          }
        }]);

        return _EducationalQualificationService;
      }();

      _EducationalQualificationService.ɵfac = function EducationalQualificationService_Factory(t) {
        return new (t || _EducationalQualificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _EducationalQualificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _EducationalQualificationService,
        factory: _EducationalQualificationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    18643:
    /*!****************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/GameSport.service.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameSportService": function GameSportService() {
          return (
            /* binding */
            _GameSportService
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

      var _GameSportService = /*#__PURE__*/function () {
        function _GameSportService(http) {
          _classCallCheck(this, _GameSportService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.GameSports = [];
        }

        _createClass(_GameSportService, [{
          key: "getselectedgame",
          value: function getselectedgame() {
            return this.http.get(this.baseUrl + '/game/get-selectedGame');
          }
        }, {
          key: "getdatabytraineeid",
          value: function getdatabytraineeid(id) {
            return this.http.get(this.baseUrl + '/game-sport/get-listByTrainee?Traineeid=' + id).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              //this.EducationalQualifications = [...this.EducationalQualifications, ...response.body.items];        
              //response = this.EducationalQualifications;
              return response;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/game-sport/get-gameSportDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/game-sport/update-gameSport/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/game-sport/save-gameSport', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (GameSport) {
              if (GameSport) {
                console.log(GameSport);
                return GameSport;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/game-sport/delete-gameSport/' + id);
          }
        }]);

        return _GameSportService;
      }();

      _GameSportService.ɵfac = function GameSportService_Factory(t) {
        return new (t || _GameSportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _GameSportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _GameSportService,
        factory: _GameSportService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8189:
    /*!*********************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/ParentRelative.service.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ParentRelativeService": function ParentRelativeService() {
          return (
            /* binding */
            _ParentRelativeService
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

      var _ParentRelativeService = /*#__PURE__*/function () {
        function _ParentRelativeService(http) {
          _classCallCheck(this, _ParentRelativeService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.ParentRelatives = [];
        }

        _createClass(_ParentRelativeService, [{
          key: "getselectedrelationtype",
          value: function getselectedrelationtype() {
            return this.http.get(this.baseUrl + '/relation-type/get-selectedrelationTypes');
          }
        }, {
          key: "getselectedmaritialstatus",
          value: function getselectedmaritialstatus() {
            return this.http.get(this.baseUrl + '/marital-status/get-selectedMaritialStatuses');
          }
        }, {
          key: "getselectednationality",
          value: function getselectednationality() {
            return this.http.get(this.baseUrl + '/nationality/get-selectedNationalities');
          }
        }, {
          key: "getselectedreligion",
          value: function getselectedreligion() {
            return this.http.get(this.baseUrl + '/religion/get-selectedReligions');
          }
        }, {
          key: "getselectedcaste",
          value: function getselectedcaste() {
            return this.http.get(this.baseUrl + '/Caste/get-selectedCastes');
          }
        }, {
          key: "getselectedoccupation",
          value: function getselectedoccupation() {
            return this.http.get(this.baseUrl + '/occupation/get-selectedOccupation');
          }
        }, {
          key: "getselecteddivision",
          value: function getselecteddivision() {
            return this.http.get(this.baseUrl + '/division/get-selectedDivisions');
          }
        }, {
          key: "getselecteddistrict",
          value: function getselecteddistrict() {
            return this.http.get(this.baseUrl + '/district/get-selectedDistricts');
          }
        }, {
          key: "getselectedthana",
          value: function getselectedthana() {
            return this.http.get(this.baseUrl + '/thana/get-selectedThanas');
          }
        }, {
          key: "getselecteddefensetype",
          value: function getselecteddefensetype() {
            return this.http.get(this.baseUrl + '/defense-type/get-selectedDefenseTypes');
          }
        }, {
          key: "getselectedrank",
          value: function getselectedrank() {
            return this.http.get(this.baseUrl + '/ranks/get-selectedRanks');
          }
        }, {
          key: "getdatabytraineeid",
          value: function getdatabytraineeid(id) {
            return this.http.get(this.baseUrl + '/parent-relative/get-listByTrainee?Traineeid=' + id).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              //this.ParentRelatives = [...this.ParentRelatives, ...response.body.items];        
              //response = this.ParentRelatives;
              return response;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/parent-relative/get-parentRelativeDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/parent-relative/update-parentRelative/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/parent-relative/save-parentRelative/', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (ParentRelative) {
              if (ParentRelative) {
                console.log(ParentRelative);
                return ParentRelative;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/parent-relative/delete-parentRelative/' + id);
          }
        }]);

        return _ParentRelativeService;
      }();

      _ParentRelativeService.ɵfac = function ParentRelativeService_Factory(t) {
        return new (t || _ParentRelativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ParentRelativeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ParentRelativeService,
        factory: _ParentRelativeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    38075:
    /*!******************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/service/SocialMedia.service.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaService": function SocialMediaService() {
          return (
            /* binding */
            _SocialMediaService
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

      var _SocialMediaService = /*#__PURE__*/function () {
        function _SocialMediaService(http) {
          _classCallCheck(this, _SocialMediaService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
          this.SocialMedias = [];
        }

        _createClass(_SocialMediaService, [{
          key: "getSelectedSocialMediaType",
          value: function getSelectedSocialMediaType() {
            return this.http.get(this.baseUrl + '/social-media-type/get-selectedSocialMediaType');
          }
        }, {
          key: "getSocialMediaByTraineeId",
          value: function getSocialMediaByTraineeId(id) {
            return this.http.get(this.baseUrl + '/social-media/get-listByTrainee?Traineeid=' + id).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "find",
          value: function find(id) {
            return this.http.get(this.baseUrl + '/social-media/get-socialMediaDetail/' + id);
          }
        }, {
          key: "update",
          value: function update(id, model) {
            return this.http.put(this.baseUrl + '/social-media/update-socialMedia/' + id, model);
          }
        }, {
          key: "submit",
          value: function submit(model) {
            return this.http.post(this.baseUrl + '/social-media/save-socialMedia', model).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (SocialMedia) {
              if (SocialMedia) {
                console.log(SocialMedia);
                return SocialMedia;
              }
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + '/social-media/delete-socialMedia/' + id);
          }
        }]);

        return _SocialMediaService;
      }();

      _SocialMediaService.ɵfac = function SocialMediaService_Factory(t) {
        return new (t || _SocialMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _SocialMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SocialMediaService,
        factory: _SocialMediaService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98381:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/social-media/new-social-media/new-social-media.component.ts ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewSocialMediaComponent": function NewSocialMediaComponent() {
          return (
            /* binding */
            _NewSocialMediaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/SocialMedia.service */
      38075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function NewSocialMediaComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Trainee name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewSocialMediaComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var social_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", social_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", social_r4.text, " ");
        }
      }

      function NewSocialMediaComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Social Media Type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NewSocialMediaComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Social Media Account Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/social-media-details/";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _NewSocialMediaComponent = /*#__PURE__*/function () {
        function _NewSocialMediaComponent(snackBar, SocialMediaService, fb, router, route, confirmService) {
          _classCallCheck(this, _NewSocialMediaComponent);

          this.snackBar = snackBar;
          this.SocialMediaService = SocialMediaService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.validationErrors = [];
        }

        _createClass(_NewSocialMediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this50 = this;

            var id = this.route.snapshot.paramMap.get('socialMediaId');
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Edit Educational Qualification';
              this.destination = "Edit";
              this.buttonText = "Update";
              this.SocialMediaService.find(+id).subscribe(function (res) {
                _this50.SocialMediaForm.patchValue({
                  socialMediaId: res.socialMediaId,
                  traineeId: res.traineeId,
                  socialMediaTypeId: res.socialMediaTypeId,
                  socialMediaAccountName: res.socialMediaAccountName,
                  //additionalInformation:res.additionalInformation,
                  isActive: true
                });
              });
            } else {
              this.pageTitle = 'Create SocialMedia';
              this.destination = "Add";
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getSelectedSocialMediaType();
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.SocialMediaForm = this.fb.group({
              socialMediaId: [0],
              traineeId: [this.traineeId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              socialMediaTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              socialMediaAccountName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              //additionalInformation: ['', Validators.required],
              isActive: [true]
            });
          }
        }, {
          key: "getSelectedSocialMediaType",
          value: function getSelectedSocialMediaType() {
            var _this51 = this;

            this.SocialMediaService.getSelectedSocialMediaType().subscribe(function (res) {
              _this51.selectedSocialMedia = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this52 = this;

            var id = this.SocialMediaForm.get('socialMediaId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This Item').subscribe(function (result) {
                if (result) {
                  _this52.SocialMediaService.update(+id, _this52.SocialMediaForm.value).subscribe(function (response) {
                    _this52.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/social-media-details/' + _this52.traineeId);

                    _this52.snackBar.open('Information Updated Successfully ', '', {
                      duration: 2000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this52.validationErrors = error;
                  });
                }
              });
            } else {
              this.SocialMediaService.submit(this.SocialMediaForm.value).subscribe(function (response) {
                _this52.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/social-media-details/' + _this52.traineeId);

                _this52.snackBar.open('Information Inserted Successfully ', '', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'right',
                  panelClass: 'snackbar-success'
                });
              }, function (error) {
                _this52.validationErrors = error;
              });
            }
          }
        }]);

        return _NewSocialMediaComponent;
      }();

      _NewSocialMediaComponent.ɵfac = function NewSocialMediaComponent_Factory(t) {
        return new (t || _NewSocialMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_0__.SocialMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
      };

      _NewSocialMediaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _NewSocialMediaComponent,
        selectors: [["app-new-social-media"]],
        decls: 47,
        vars: 12,
        consts: [[1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], ["hidden", "", 1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "traineeId", "required", ""], [4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "socialMediaTypeId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "socialMediaAccountName", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", 3, "routerLink"], [3, "value"]],
        template: function NewSocialMediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Social Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewSocialMediaComponent_Template_form_ngSubmit_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Trainee Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, NewSocialMediaComponent_mat_error_27_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Social Media Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, NewSocialMediaComponent_mat_option_33_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, NewSocialMediaComponent_mat_error_34_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Social Media Account Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NewSocialMediaComponent_mat_error_40_Template, 2, 0, "mat-error", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.SocialMediaForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.SocialMediaForm.get("traineeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedSocialMedia);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.SocialMediaForm.get("socialMediaTypeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.SocialMediaForm.get("socialMediaAccountName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.SocialMediaForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.traineeId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
        styles: [""]
      });
      /***/
    },

    /***/
    33569:
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/social-media/social-media-list/social-media-list.component.ts ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaListComponent": function SocialMediaListComponent() {
          return (
            /* binding */
            _SocialMediaListComponent
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


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
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


      var _service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/SocialMedia.service */
      38075);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      function SocialMediaListComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SocialMediaListComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r2.paging.pageIndex - 1) * ctx_r2.paging.pageSize + i_r12 + 1, " ");
        }
      }

      function SocialMediaListComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Social Media Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SocialMediaListComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.socialMediaTypeName, " ");
        }
      }

      function SocialMediaListComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Account Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SocialMediaListComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.socialMediaAccountName, " ");
        }
      }

      function SocialMediaListComponent_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/view-social-media-details";

      var _c1 = function _c1(a1, a2) {
        return [_c0, a1, a2];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-social-media-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      function SocialMediaListComponent_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialMediaListComponent_mat_cell_29_Template_button_click_7_listener($event) {
            return $event.stopPropagation();
          })("click", function SocialMediaListComponent_mat_cell_29_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var row_r15 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.deleteItem(row_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, row_r15.traineeId, row_r15.socialMediaId));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c3, row_r15.traineeId, row_r15.socialMediaId));
        }
      }

      function SocialMediaListComponent_mat_header_row_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function SocialMediaListComponent_mat_row_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c4 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/add-social-media-details";

      var _c5 = function _c5(a1) {
        return [_c4, a1];
      };

      var _SocialMediaListComponent = /*#__PURE__*/function () {
        function _SocialMediaListComponent(route, snackBar, SocialMediaService, router, confirmService) {
          _classCallCheck(this, _SocialMediaListComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.SocialMediaService = SocialMediaService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
          this.paging = {
            pageIndex: this.masterData.paging.pageIndex,
            pageSize: this.masterData.paging.pageSize,
            length: 1
          };
          this.searchText = "";
          this.displayedColumns = ['ser', 'socialMediaTypeName', 'socialMediaAccountName', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
          this.SelectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        }

        _createClass(_SocialMediaListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSocialMedias();
          }
        }, {
          key: "getSocialMedias",
          value: function getSocialMedias() {
            var _this53 = this;

            this.isLoading = true;
            this.traineeId = this.route.snapshot.paramMap.get('traineeId');
            this.SocialMediaService.getSocialMediaByTraineeId(+this.traineeId).subscribe(function (response) {
              _this53.dataSource.data = response;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.paging.pageIndex = event.pageIndex;
            this.paging.pageSize = event.pageSize;
            this.paging.pageIndex = this.paging.pageIndex + 1;
            this.getSocialMedias();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(searchText) {
            this.searchText = searchText;
            this.getSocialMedias();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this54 = this;

            var id = row.socialMediaId;
            this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(function (result) {
              if (result) {
                _this54.SocialMediaService["delete"](id).subscribe(function () {
                  _this54.getSocialMedias();

                  _this54.snackBar.open('Information Deleted Successfully ', '', {
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

        return _SocialMediaListComponent;
      }();

      _SocialMediaListComponent.ɵfac = function SocialMediaListComponent_Factory(t) {
        return new (t || _SocialMediaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_1__.SocialMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _SocialMediaListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SocialMediaListComponent,
        selectors: [["app-social-media-list"]],
        decls: 32,
        vars: 6,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "m-t-10"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "socialMediaTypeName"], ["matColumnDef", "socialMediaAccountName"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function SocialMediaListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "SocialMedia List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-table", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SocialMediaListComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SocialMediaListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SocialMediaListComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SocialMediaListComponent_mat_cell_23_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SocialMediaListComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SocialMediaListComponent_mat_cell_26_Template, 2, 1, "mat-cell", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SocialMediaListComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SocialMediaListComponent_mat_cell_29_Template, 10, 8, "mat-cell", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, SocialMediaListComponent_mat_header_row_30_Template, 1, 0, "mat-header-row", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SocialMediaListComponent_mat_row_31_Template, 1, 0, "mat-row", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c5, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        styles: [""]
      });
      /***/
    },

    /***/
    27518:
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/social-media/view-social-media/view-social-media.component.ts ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewSocialMediaComponent": function ViewSocialMediaComponent() {
          return (
            /* binding */
            _ViewSocialMediaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/data/master-data */
      65960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/SocialMedia.service */
      38075);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627); //import{MasterData} from 'src/assets/data/master-data'


      var _c0 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/social-media-details";

      var _c1 = function _c1(a1) {
        return [_c0, a1];
      };

      var _c2 = "/trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-social-media-details";

      var _c3 = function _c3(a1, a2) {
        return [_c2, a1, a2];
      };

      var _ViewSocialMediaComponent = /*#__PURE__*/function () {
        function _ViewSocialMediaComponent(route, snackBar, SocialMediaService, router, confirmService) {
          _classCallCheck(this, _ViewSocialMediaComponent);

          this.route = route;
          this.snackBar = snackBar;
          this.SocialMediaService = SocialMediaService;
          this.router = router;
          this.confirmService = confirmService;
          this.masterData = _assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__.MasterData;
          this.ELEMENT_DATA = [];
          this.isLoading = false;
        }

        _createClass(_ViewSocialMediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this55 = this;

            var id = this.route.snapshot.paramMap.get('socialMediaId');
            this.SocialMediaService.find(+id).subscribe(function (res) {
              console.log(res);
              _this55.socialMediaId = res.socialMediaId, _this55.traineeId = res.traineeId, _this55.socialMediaTypeId = res.socialMediaTypeId, _this55.socialMediaTypeName = res.socialMediaTypeName, _this55.socialMediaAccountName = res.socialMediaAccountName, //this.additionalInformation=res.additionalInformation,
              _this55.isActive = true;
            });
          }
        }]);

        return _ViewSocialMediaComponent;
      }();

      _ViewSocialMediaComponent.ɵfac = function ViewSocialMediaComponent_Factory(t) {
        return new (t || _ViewSocialMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_SocialMedia_service__WEBPACK_IMPORTED_MODULE_1__.SocialMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService));
      };

      _ViewSocialMediaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewSocialMediaComponent,
        selectors: [["app-social-media"]],
        decls: 32,
        vars: 9,
        consts: [[1, "responsive_table"], [1, "materialTableHeader"], [1, "row"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "warn", 1, "btn-space", 3, "routerLink"], [1, "col-white"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "routerLink"], [1, "table", "table-bordered"], ["scope", "row"]],
        template: function ViewSocialMediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Social Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Social Media Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Social Media Account Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx.traineeId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c3, ctx.traineeId, ctx.socialMediaId));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.socialMediaTypeName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.socialMediaAccountName);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
        styles: [""]
      });
      /***/
    },

    /***/
    29324:
    /*!**********************************************************************************************************************************************************!*\
      !*** ./src/app/trainee-biodata/sailor-biodata-tab-layout/trainee-biodata/update-traineebiodatageneralinfo/update-traineebiodatageneralinfo.component.ts ***!
      \**********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdateTraineeBIODataGeneralInfoComponent": function UpdateTraineeBIODataGeneralInfoComponent() {
          return (
            /* binding */
            _UpdateTraineeBIODataGeneralInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/BIODataGeneralInfo.service */
      35137);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/service/confirm.service */
      39182);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name in Full (English) is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r28.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Rank is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " P No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Local No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Chest No is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " NID is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date Of Birth is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r29.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r29.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Weight is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r30.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r30.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Height is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r31.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r31.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Color Of Eye is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r32.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r32.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Hair Color is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r33.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r33.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Blood Group is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_160_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r34.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r34.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Religion is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r35.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r35.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Caste is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_176_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r36.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r36.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_177_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Maritial Status is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_option_198_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var code_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", code_r37.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", code_r37.text, " ");
        }
      }

      function UpdateTraineeBIODataGeneralInfoComponent_mat_error_199_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _UpdateTraineeBIODataGeneralInfoComponent = /*#__PURE__*/function () {
        function _UpdateTraineeBIODataGeneralInfoComponent(snackBar, BIODataGeneralInfoService, fb, router, route, confirmService) {
          _classCallCheck(this, _UpdateTraineeBIODataGeneralInfoComponent);

          this.snackBar = snackBar;
          this.BIODataGeneralInfoService = BIODataGeneralInfoService;
          this.fb = fb;
          this.router = router;
          this.route = route;
          this.confirmService = confirmService;
          this.validationErrors = [];
          this.imageUrl = "/assets/img/icon.png";
          this.files = [];
        }

        _createClass(_UpdateTraineeBIODataGeneralInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this56 = this;

            var id = this.route.snapshot.paramMap.get('traineeId');

            if (id) {
              this.pageTitle = 'Update General Information';
              this.destination = 'Update';
              this.buttonText = "Update";
              this.BIODataGeneralInfoService.find(+id).subscribe(function (res) {
                if (res) {
                  _this56.BIODataGeneralInfoForm.patchValue(res);
                }

                _this56.onReligionSelectionChangeGetCastes(res.religionId);
              });
            } else {
              this.pageTitle = 'Create General Information';
              this.destination = 'Add';
              this.buttonText = "Save";
            }

            this.intitializeForm();
            this.getRanks();
            this.getGenders();
            this.getselectedheight();
            this.getselectedweight();
            this.getselectedcolorofeye();
            this.getselectedbloodgroup();
            this.getreligions();
            this.getselectedcaste();
            this.gethaircolors();
            this.getMaritialStatus();
          }
        }, {
          key: "getreligions",
          value: function getreligions() {
            var _this57 = this;

            this.BIODataGeneralInfoService.getselectedreligion().subscribe(function (res) {
              _this57.religionValues = res;
            });
          }
        }, {
          key: "gethaircolors",
          value: function gethaircolors() {
            var _this58 = this;

            this.BIODataGeneralInfoService.getselectedhaircolor().subscribe(function (res) {
              _this58.hairColorValues = res;
            });
          }
        }, {
          key: "getselectedcaste",
          value: function getselectedcaste() {
            var _this59 = this;

            this.BIODataGeneralInfoService.getselectedcaste().subscribe(function (res) {
              _this59.casteValues = res;
            });
          }
        }, {
          key: "getselectedheight",
          value: function getselectedheight() {
            var _this60 = this;

            this.BIODataGeneralInfoService.getselectedheight().subscribe(function (res) {
              _this60.heightValues = res;
            });
          }
        }, {
          key: "getselectedweight",
          value: function getselectedweight() {
            var _this61 = this;

            this.BIODataGeneralInfoService.getselectedweight().subscribe(function (res) {
              _this61.weightValues = res;
            });
          }
        }, {
          key: "getselectedcolorofeye",
          value: function getselectedcolorofeye() {
            var _this62 = this;

            this.BIODataGeneralInfoService.getselectedcolorofeye().subscribe(function (res) {
              _this62.colorOfEyeValues = res;
            });
          }
        }, {
          key: "getselectedbloodgroup",
          value: function getselectedbloodgroup() {
            var _this63 = this;

            this.BIODataGeneralInfoService.getselectedbloodgroup().subscribe(function (res) {
              _this63.bloodValues = res;
            });
          }
        }, {
          key: "getRanks",
          value: function getRanks() {
            var _this64 = this;

            this.BIODataGeneralInfoService.getselectedrank().subscribe(function (res) {
              _this64.rankValues = res;
            });
          }
        }, {
          key: "getGenders",
          value: function getGenders() {
            var _this65 = this;

            this.BIODataGeneralInfoService.getselectedgender().subscribe(function (res) {
              _this65.genderValues = res;
            });
          }
        }, {
          key: "getMaritialStatus",
          value: function getMaritialStatus() {
            var _this66 = this;

            this.BIODataGeneralInfoService.getselectedmaritialstatus().subscribe(function (res) {
              _this66.maritialStatusValues = res;
              console.log(res);
            });
          }
        }, {
          key: "onReligionSelectionChangeGetCastes",
          value: function onReligionSelectionChangeGetCastes(religionId) {
            var _this67 = this;

            this.BIODataGeneralInfoService.getcastebyreligion(religionId).subscribe(function (res) {
              _this67.selectedCastes = res;
              console.log(_this67.selectedCastes);
            });
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.BIODataGeneralInfoForm = this.fb.group({
              traineeId: [0],
              traineeStatusId: ['5'],
              rankId: [],
              heightId: [],
              weightId: [],
              colorOfEyeId: [],
              genderId: [],
              bloodGroupId: [],
              religionId: [],
              casteId: [],
              maritalStatusId: [],
              hairColorId: [],
              bnaPhotoUrl: [''],
              name: [''],
              nameBangla: [''],
              nickName: [''],
              localNo: [''],
              chestNo: [''],
              idCardNo: [''],
              shoeSize: [''],
              pantSize: [''],
              nominee: [''],
              closeRelative: [''],
              relativeRelation: [''],
              mobile: [''],
              email: [''],
              pno: [''],
              dateOfBirth: [''],
              identificationMark: [''],
              presentAddress: [''],
              permanentAddress: [''],
              passportNo: [''],
              nid: [''],
              remarks: [''],
              isActive: [true]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this68 = this;

            var id = this.BIODataGeneralInfoForm.get('traineeId').value;

            if (id) {
              this.confirmService.confirm('Confirm Update message', 'Are You Sure Update  Item').subscribe(function (result) {
                if (result) {
                  _this68.BIODataGeneralInfoService.update(+id, _this68.BIODataGeneralInfoForm.value).subscribe(function (response) {
                    _this68.router.navigateByUrl('trainee-biodata/sailor-biodata-tab/main-tab-layout/main-tab/update-traineebiodatageneralinfo/' + _this68.traineeId);

                    _this68.snackBar.open('Information Updated Successfully ', '', {
                      duration: 3000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'right',
                      panelClass: 'snackbar-success'
                    });
                  }, function (error) {
                    _this68.validationErrors = error;
                  });
                }
              });
            }
          }
        }]);

        return _UpdateTraineeBIODataGeneralInfoComponent;
      }();

      _UpdateTraineeBIODataGeneralInfoComponent.ɵfac = function UpdateTraineeBIODataGeneralInfoComponent_Factory(t) {
        return new (t || _UpdateTraineeBIODataGeneralInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_BIODataGeneralInfo_service__WEBPACK_IMPORTED_MODULE_0__.BIODataGeneralInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
      };

      _UpdateTraineeBIODataGeneralInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UpdateTraineeBIODataGeneralInfoComponent,
        selectors: [["app-update-BIODataGeneralInfo"]],
        decls: 220,
        vars: 34,
        consts: [[1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "body"], [1, "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "nickName"], ["matInput", "", "formControlName", "nameBangla"], ["formControlName", "rankId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "pno", "required", ""], ["matInput", "", "formControlName", "bnaPhotoUrl", "required", ""], ["matInput", "", "formControlName", "localNo", "required", ""], ["matInput", "", "formControlName", "chestNo", "required", ""], ["matInput", "", "formControlName", "mobile"], ["matInput", "", "formControlName", "nid", "required", ""], ["matInput", "", "formControlName", "dateOfBirth", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["birthpicker", ""], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "passportNo"], ["formControlName", "weightId", "required", ""], ["formControlName", "heightId", "required", ""], ["matInput", "", "formControlName", "idCardNo"], ["formControlName", "colorOfEyeId", "required", ""], ["formControlName", "hairColorId", "required", ""], ["formControlName", "bloodGroupId", "required", ""], ["matInput", "", "formControlName", "shoeSize"], ["matInput", "", "formControlName", "pantSize"], ["matInput", "", "formControlName", "identificationMark"], ["formControlName", "religionId", "required", "", 3, "selectionChange"], ["value", "0"], ["formControlName", "casteId", "required", ""], ["formControlName", "maritalStatusId", "required", ""], ["matInput", "", "formControlName", "nominee"], ["matInput", "", "formControlName", "closeRelative"], ["matInput", "", "formControlName", "relativeRelation"], ["formControlName", "genderId", "required", ""], ["matInput", "", "formControlName", "remarks"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "presentAddress"], ["matInput", "", "formControlName", "permanentAddress"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], [3, "value"]],
        template: function UpdateTraineeBIODataGeneralInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sailor BIO Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UpdateTraineeBIODataGeneralInfoComponent_Template_form_ngSubmit_19_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Name in Full (English)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, UpdateTraineeBIODataGeneralInfoComponent_mat_error_26_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Nickname");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Name in Full (Bangla)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Rank");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, UpdateTraineeBIODataGeneralInfoComponent_mat_option_42_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, UpdateTraineeBIODataGeneralInfoComponent_mat_error_43_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "P No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, UpdateTraineeBIODataGeneralInfoComponent_mat_error_49_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, UpdateTraineeBIODataGeneralInfoComponent_mat_error_55_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Local No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, UpdateTraineeBIODataGeneralInfoComponent_mat_error_61_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Chest No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, UpdateTraineeBIODataGeneralInfoComponent_mat_error_67_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "NID");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, UpdateTraineeBIODataGeneralInfoComponent_mat_error_78_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Date Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "mat-datepicker-toggle", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "mat-datepicker", null, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, UpdateTraineeBIODataGeneralInfoComponent_mat_error_87_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Passport No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Weight");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, UpdateTraineeBIODataGeneralInfoComponent_mat_option_103_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, UpdateTraineeBIODataGeneralInfoComponent_mat_error_104_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Height");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "mat-select", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, UpdateTraineeBIODataGeneralInfoComponent_mat_option_110_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, UpdateTraineeBIODataGeneralInfoComponent_mat_error_111_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "ID Card No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Color Of Eye");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "mat-select", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, UpdateTraineeBIODataGeneralInfoComponent_mat_option_122_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, UpdateTraineeBIODataGeneralInfoComponent_mat_error_123_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Hair Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "mat-select", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, UpdateTraineeBIODataGeneralInfoComponent_mat_option_129_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, UpdateTraineeBIODataGeneralInfoComponent_mat_error_130_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Blood Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-select", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, UpdateTraineeBIODataGeneralInfoComponent_mat_option_136_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, UpdateTraineeBIODataGeneralInfoComponent_mat_error_137_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Shoe's Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Pant's Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Identification Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Religion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "mat-select", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function UpdateTraineeBIODataGeneralInfoComponent_Template_mat_select_selectionChange_157_listener($event) {
              return ctx.onReligionSelectionChangeGetCastes($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "mat-option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](160, UpdateTraineeBIODataGeneralInfoComponent_mat_option_160_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](161, UpdateTraineeBIODataGeneralInfoComponent_mat_error_161_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Caste");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "mat-select", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "mat-option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](169, UpdateTraineeBIODataGeneralInfoComponent_mat_option_169_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](170, UpdateTraineeBIODataGeneralInfoComponent_mat_error_170_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Maritial Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "mat-select", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](176, UpdateTraineeBIODataGeneralInfoComponent_mat_option_176_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](177, UpdateTraineeBIODataGeneralInfoComponent_mat_error_177_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Nominee's Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Close Relative of Nominee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Relation With Nominee");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "mat-select", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](198, UpdateTraineeBIODataGeneralInfoComponent_mat_option_198_Template, 2, 2, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](199, UpdateTraineeBIODataGeneralInfoComponent_mat_error_199_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Remark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Present Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "textarea", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Permanent Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "textarea", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.destination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.BIODataGeneralInfoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rankValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("rankId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("pno").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("bnaPhotoUrl").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("localNo").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("chestNo").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("nid").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("dateOfBirth").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.weightValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("weightId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heightValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("heightId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colorOfEyeValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("colorOfEyeId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hairColorValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("hairColorId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bloodValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("bloodGroupId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.religionValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("religionId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedCastes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("casteId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.maritialStatusValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("maritalStatusId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genderValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.BIODataGeneralInfoForm.get("genderId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.BIODataGeneralInfoForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError],
        styles: [""]
      });
      /***/
    }
  }]);
})();