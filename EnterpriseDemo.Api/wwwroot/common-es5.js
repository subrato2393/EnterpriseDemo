(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["common"], {
    /***/
    12522:
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatToolbar": function MatToolbar() {
          return (
            /* binding */
            _MatToolbar
          );
        },

        /* harmony export */
        "MatToolbarModule": function MatToolbarModule() {
          return (
            /* binding */
            _MatToolbarModule
          );
        },

        /* harmony export */
        "MatToolbarRow": function MatToolbarRow() {
          return (
            /* binding */
            _MatToolbarRow
          );
        },

        /* harmony export */
        "throwToolbarMixedModesError": function throwToolbarMixedModesError() {
          return (
            /* binding */
            _throwToolbarMixedModesError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatToolbar.

      /** @docs-private */


      var _c0 = ["*", [["mat-toolbar-row"]]];
      var _c1 = ["*", "mat-toolbar-row"];

      var _MatToolbarBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)( /*#__PURE__*/function () {
        function _class(_elementRef) {
          _classCallCheck(this, _class);

          this._elementRef = _elementRef;
        }

        return _class;
      }());

      var _MatToolbarRow = function _MatToolbarRow() {
        _classCallCheck(this, _MatToolbarRow);
      };

      _MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
        return new (t || _MatToolbarRow)();
      };

      _MatToolbarRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatToolbarRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'mat-toolbar-row',
            exportAs: 'matToolbarRow',
            host: {
              'class': 'mat-toolbar-row'
            }
          }]
        }], null, null);
      })();

      var _MatToolbar = /*#__PURE__*/function (_MatToolbarBase2) {
        _inherits(_MatToolbar, _MatToolbarBase2);

        var _super = _createSuper(_MatToolbar);

        function _MatToolbar(elementRef, _platform, document) {
          var _this;

          _classCallCheck(this, _MatToolbar);

          _this = _super.call(this, elementRef);
          _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

          _this._document = document;
          return _this;
        }

        _createClass(_MatToolbar, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this._platform.isBrowser) {
              this._checkToolbarMixedModes();

              this._toolbarRows.changes.subscribe(function () {
                return _this2._checkToolbarMixedModes();
              });
            }
          }
          /**
           * Throws an exception when developers are attempting to combine the different toolbar row modes.
           */

        }, {
          key: "_checkToolbarMixedModes",
          value: function _checkToolbarMixedModes() {
            var _this3 = this;

            if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              // Check if there are any other DOM nodes that can display content but aren't inside of
              // a <mat-toolbar-row> element.
              var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(function (node) {
                return !(node.classList && node.classList.contains('mat-toolbar-row'));
              }).filter(function (node) {
                return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
              }).some(function (node) {
                return !!(node.textContent && node.textContent.trim());
              });

              if (isCombinedUsage) {
                _throwToolbarMixedModesError();
              }
            }
          }
        }]);

        return _MatToolbar;
      }(_MatToolbarBase);

      _MatToolbar.ɵfac = function MatToolbar_Factory(t) {
        return new (t || _MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };

      _MatToolbar.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _MatToolbarRow, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 4,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatToolbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
          }]
        }];
      };

      _MatToolbar.propDecorators = {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
          args: [_MatToolbarRow, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatToolbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'mat-toolbar',
            exportAs: 'matToolbar',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
            inputs: ['color'],
            host: {
              'class': 'mat-toolbar',
              '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
              '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }]
          }];
        }, {
          _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [_MatToolbarRow, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Throws an exception when attempting to combine the different toolbar row modes.
       * @docs-private
       */


      function _throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatToolbarModule = function _MatToolbarModule() {
        _classCallCheck(this, _MatToolbarModule);
      };

      _MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) {
        return new (t || _MatToolbarModule)();
      };

      _MatToolbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatToolbarModule
      });
      _MatToolbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            exports: [_MatToolbar, _MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            declarations: [_MatToolbar, _MatToolbarRow]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatToolbarModule, {
          declarations: function declarations() {
            return [_MatToolbar, _MatToolbarRow];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatToolbar, _MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=toolbar.js.map

      /***/

    },

    /***/
    81439:
    /*!********************************************************************!*\
      !*** ./src/app/central-exam/models/traineenominationPagination.ts ***!
      \********************************************************************/

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
    33593:
    /*!*******************************************************************!*\
      !*** ./src/app/central-exam/service/traineenomination.service.ts ***!
      \*******************************************************************/

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
      81439);
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
            var _this4 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseDurationId', courseDurationId.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominationsByCourseDurationId', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this4.TraineeNominations = [].concat(_toConsumableArray(_this4.TraineeNominations), _toConsumableArray(response.body.items));
              _this4.TraineeNominationPagination = response.body;
              return _this4.TraineeNominationPagination;
            }));
          }
        }, {
          key: "getTraineeNominations",
          value: function getTraineeNominations(pageNumber, pageSize, searchText) {
            var _this5 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-nomination/get-traineeNominations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              _this5.TraineeNominations = [].concat(_toConsumableArray(_this5.TraineeNominations), _toConsumableArray(response.body.items));
              _this5.TraineeNominationPagination = response.body;
              return _this5.TraineeNominationPagination;
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
    1712:
    /*!*********************************************************************!*\
      !*** ./src/app/course-management/service/courseduration.service.ts ***!
      \*********************************************************************/

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
      41313);
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
        }

        _createClass(_CourseDurationService, [{
          key: "getSelectedBaseName",
          value: function getSelectedBaseName() {
            return this.http.get(this.baseUrl + '/base-name/get-selectedBases');
          }
        }, {
          key: "deactiveCourseDuration",
          value: function deactiveCourseDuration(id) {
            return this.http.get(this.baseUrl + '/course-duration/deactive-courseDuration/' + id);
          }
        }, {
          key: "activeCoursePlan",
          value: function activeCoursePlan(id) {
            return this.http.get(this.baseUrl + '/course-plan/active-coursePlan/' + id);
          }
        }, {
          key: "getSchoolByBaseId",
          value: function getSchoolByBaseId(id) {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedBaseSchoolByBase?baseNameId=' + id);
          }
        }, {
          key: "getCourseByType",
          value: function getCourseByType(id) {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseByType?courseTypeId=' + id);
          }
        }, {
          key: "getselectedcoursename",
          value: function getselectedcoursename() {
            return this.http.get(this.baseUrl + '/course-name/get-selectedCourseNames');
          }
        }, {
          key: "getselectedbaseschools",
          value: function getselectedbaseschools() {
            return this.http.get(this.baseUrl + '/base-School-name/get-selectedSchools');
          }
        }, {
          key: "getselectedcountry",
          value: function getselectedcountry() {
            return this.http.get(this.baseUrl + '/country/get-selectedCountries');
          }
        }, {
          key: "getselectedcoursetype",
          value: function getselectedcoursetype() {
            return this.http.get(this.baseUrl + '/course-type/get-selectedCourseTypes');
          }
        }, {
          key: "getCourseDurationsByCourseType",
          value: function getCourseDurationsByCourseType(pageNumber, pageSize, searchText, courseTypeId) {
            var _this6 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            params = params.append('courseTypeId', courseTypeId.toString());
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurationByCourseType', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this6.CourseDurations = [].concat(_toConsumableArray(_this6.CourseDurations), _toConsumableArray(response.body.items));
              _this6.CourseDurationPagination = response.body;
              return _this6.CourseDurationPagination;
            }));
          }
        }, {
          key: "getCourseDurations",
          value: function getCourseDurations(pageNumber, pageSize, searchText) {
            var _this7 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/course-duration/get-courseDurations', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this7.CourseDurations = [].concat(_toConsumableArray(_this7.CourseDurations), _toConsumableArray(response.body.items));
              _this7.CourseDurationPagination = response.body;
              return _this7.CourseDurationPagination;
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
    82250:
    /*!*****************************************************************************!*\
      !*** ./src/app/exam-management/models/bnaexaminstructorassignPagination.ts ***!
      \*****************************************************************************/

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
    20808:
    /*!****************************************************************************!*\
      !*** ./src/app/exam-management/service/bnaexaminstructorassign.service.ts ***!
      \****************************************************************************/

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
      82250);
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
            var _this8 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/bna-exam-instructor-assign/get-bnaExamInstructorAssigns', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this8.BNAExamInstructorAssigns = [].concat(_toConsumableArray(_this8.BNAExamInstructorAssigns), _toConsumableArray(response.body.items));
              _this8.BNAExamInstructorAssignPagination = response.body;
              return _this8.BNAExamInstructorAssignPagination;
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
    82599:
    /*!*******************************************************************************************!*\
      !*** ./src/app/trainee-biodata/biodata-tab-layout/models/BIODataGeneralInfoPagination.ts ***!
      \*******************************************************************************************/

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
    54389:
    /*!******************************************************************************************!*\
      !*** ./src/app/trainee-biodata/biodata-tab-layout/service/BIODataGeneralInfo.service.ts ***!
      \******************************************************************************************/

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
      82599);
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
            var _this9 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            params = params.append('searchText', searchText.toString());
            params = params.append('pageNumber', pageNumber.toString());
            params = params.append('pageSize', pageSize.toString());
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-traineeBioDataGeneralInfoes', {
              observe: 'response',
              params: params
            }).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              _this9.BIODataGeneralInfos = [].concat(_toConsumableArray(_this9.BIODataGeneralInfos), _toConsumableArray(response.body.items));
              _this9.BIODataGeneralInfoPagination = response.body;
              return _this9.BIODataGeneralInfoPagination;
            }));
          } //autocomplete for FamilyInfo

        }, {
          key: "getSelectedPno",
          value: function getSelectedPno(pno) {
            return this.http.get(this.baseUrl + '/trainee-bio-data-general-info/get-autocompletePnoForFamilyInfo?pno=' + pno).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
              return response.map(function (item) {
                return item;
              });
            }));
          } //dropdown data 

        }, {
          key: "getselectedbnabatch",
          value: function getselectedbnabatch() {
            return this.http.get(this.baseUrl + '/bna-batch/get-selectedBnaBatchs');
          }
        }, {
          key: "getselectedrank",
          value: function getselectedrank() {
            return this.http.get(this.baseUrl + '/ranks/get-selectedRanks');
          }
        }, {
          key: "getselectedbranch",
          value: function getselectedbranch() {
            return this.http.get(this.baseUrl + '/branch/get-selectedBranchs');
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
          key: "getdistrictbydivision",
          value: function getdistrictbydivision(id) {
            return this.http.get(this.baseUrl + '/district/get-selectedDistrictByDivisions?divisionId=' + id);
          }
        }, {
          key: "getselectedthana",
          value: function getselectedthana() {
            return this.http.get(this.baseUrl + '/thana/get-selectedThanas');
          }
        }, {
          key: "getthanaByDistrict",
          value: function getthanaByDistrict(id) {
            return this.http.get(this.baseUrl + '/thana/getSelectedThanaByDistrict?districtid=' + id);
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
          key: "getselectedgender",
          value: function getselectedgender() {
            return this.http.get(this.baseUrl + '/gender/get-selectedGender');
          }
        }, {
          key: "getselectedbloodgroup",
          value: function getselectedbloodgroup() {
            return this.http.get(this.baseUrl + '/blood-group/get-selectedBloodGroups');
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
          key: "getcastebyreligion",
          value: function getcastebyreligion(id) {
            return this.http.get(this.baseUrl + '/Caste/get-selectedCasteByReligion?religionId=' + id);
          }
        }, {
          key: "getselectedhaircolor",
          value: function getselectedhaircolor() {
            return this.http.get(this.baseUrl + '/hair-color/get-selectedHairColor');
          } // getselectedMaritialStatus(){
          //   return this.http.get<SelectedModel[]>(this.baseUrl + '/marital-status/get-selectedMaritialStatuses')
          // }

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
    }
  }]);
})();