(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_basic-setup_basic-setup_module_ts"],{

/***/ 78858:
/*!***************************************************!*\
  !*** ./src/app/basic-setup/basic-setup.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSetupModule": function() { return /* binding */ BasicSetupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _nationality_nationality_list_nationality_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nationality/nationality-list/nationality-list.component */ 85229);
/* harmony import */ var _exammarkremarks_exammarkremarks_list_exammarkremarks_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exammarkremarks/exammarkremarks-list/exammarkremarks-list.component */ 59428);
/* harmony import */ var _exammarkremarks_new_exammarkremarks_new_exammarkremarks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exammarkremarks/new-exammarkremarks/new-exammarkremarks.component */ 81645);
/* harmony import */ var _nationality_new_nationality_new_nationality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nationality/new-nationality/new-nationality.component */ 54997);
/* harmony import */ var _game_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game-list/game-list.component */ 50379);
/* harmony import */ var _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/new-game/new-game.component */ 89580);
/* harmony import */ var _basic_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-setup-routing.module */ 64121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branch/branch-list/branch-list.component */ 10162);
/* harmony import */ var _branch_new_branch_new_branch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch/new-branch/new-branch.component */ 49256);
/* harmony import */ var _weight_weight_list_weight_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weight/weight-list/weight-list.component */ 22111);
/* harmony import */ var _weight_new_weight_new_weight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weight/new-weight/new-weight.component */ 98305);
/* harmony import */ var _complexion_new_complexion_new_complexion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./complexion/new-complexion/new-complexion.component */ 84481);
/* harmony import */ var _complexion_complexion_list_complexion_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./complexion/complexion-list/complexion-list.component */ 4360);
/* harmony import */ var _gender_gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gender/gender-list/gender-list.component */ 38369);
/* harmony import */ var _gender_new_gender_new_gender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gender/new-gender/new-gender.component */ 22739);
/* harmony import */ var _bnaservicetype_bnaservicetype_list_bnaservicetype_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bnaservicetype/bnaservicetype-list/bnaservicetype-list.component */ 83783);
/* harmony import */ var _bnaservicetype_new_bnaervicetype_new_bnaservicetype_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bnaservicetype/new-bnaervicetype/new-bnaservicetype.component */ 27632);
/* harmony import */ var _utofficertype_utofficertype_list_utofficertype_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utofficertype/utofficertype-list/utofficertype-list.component */ 43557);
/* harmony import */ var _utofficertype_new_utofficertype_new_utofficertype_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utofficertype/new-utofficertype/new-utofficertype.component */ 42578);
/* harmony import */ var _utofficercategory_utofficercategory_list_utofficercategory_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utofficercategory/utofficercategory-list/utofficercategory-list.component */ 94559);
/* harmony import */ var _utofficercategory_new_utofficercategory_new_utofficercategory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utofficercategory/new-utofficercategory/new-utofficercategory.component */ 5862);
/* harmony import */ var _bloodgroup_bloodgroup_list_bloodgroup_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bloodgroup/bloodgroup-list/bloodgroup-list.component */ 80431);
/* harmony import */ var _bloodgroup_new_bloodgroup_new_bloodgroup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bloodgroup/new-bloodgroup/new-bloodgroup.component */ 2569);
/* harmony import */ var _bnacurriculamtype_bnacurriculamtype_list_bnacurriculamtype_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bnacurriculamtype/bnacurriculamtype-list/bnacurriculamtype-list.component */ 39303);
/* harmony import */ var _bnacurriculamtype_new_bnacurriculamtype_new_bnacurriculamtype_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bnacurriculamtype/new-bnacurriculamtype/new-bnacurriculamtype.component */ 62943);
/* harmony import */ var _height_height_list_height_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./height/height-list/height-list.component */ 66463);
/* harmony import */ var _height_new_height_new_height_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./height/new-height/new-height.component */ 99560);
/* harmony import */ var _bnaattendanceperiod_bnaattendanceperiod_list_bnaattendanceperiod_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bnaattendanceperiod/bnaattendanceperiod-list/bnaattendanceperiod-list.component */ 63370);
/* harmony import */ var _bnaattendanceperiod_new_bnaattendanceperiod_new_bnaattendanceperiod_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bnaattendanceperiod/new-bnaattendanceperiod/new-bnaattendanceperiod.component */ 31242);
/* harmony import */ var _bnaclasstesttype_bnaclasstesttype_list_bnaclasstesttype_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bnaclasstesttype/bnaclasstesttype-list/bnaclasstesttype-list.component */ 48561);
/* harmony import */ var _bnaclasstesttype_new_bnaclasstesttype_new_bnaclasstesttype_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./bnaclasstesttype/new-bnaclasstesttype/new-bnaclasstesttype.component */ 81959);
/* harmony import */ var _accounttype_accounttype_list_accounttype_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./accounttype/accounttype-list/accounttype-list.component */ 80243);
/* harmony import */ var _accounttype_new_accounttype_new_accounttype_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./accounttype/new-accounttype/new-accounttype.component */ 38386);
/* harmony import */ var _grandfathertype_grandfathertype_list_grandfathertype_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./grandfathertype/grandfathertype-list/grandfathertype-list.component */ 48334);
/* harmony import */ var _grandfathertype_new_grandfathertype_new_grandfathertype_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./grandfathertype/new-grandfathertype/new-grandfathertype.component */ 47336);
/* harmony import */ var _relationtype_relationtype_list_relationtype_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./relationtype/relationtype-list/relationtype-list.component */ 81612);
/* harmony import */ var _relationtype_new_relationtype_new_relationtype_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./relationtype/new-relationtype/new-relationtype.component */ 25259);
/* harmony import */ var _presentbillet_presentbillet_list_presentbillet_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./presentbillet/presentbillet-list/presentbillet-list.component */ 86381);
/* harmony import */ var _presentbillet_new_presentbillet_new_presentbillet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./presentbillet/new-presentbillet/new-presentbillet.component */ 17890);
/* harmony import */ var _bnainstructortype_bnainstructortype_list_bnainstructortype_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./bnainstructortype/bnainstructortype-list/bnainstructortype-list.component */ 82055);
/* harmony import */ var _bnainstructortype_new_bnainstructortype_new_bnainstructortype_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./bnainstructortype/new-bnainstructortype/new-bnainstructortype.component */ 68448);
/* harmony import */ var _maritalstatus_maritalstatus_list_maritalstatus_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./maritalstatus/maritalstatus-list/maritalstatus-list.component */ 85405);
/* harmony import */ var _maritalstatus_new_maritalstatus_new_maritalstatus_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./maritalstatus/new-maritalstatus/new-maritalstatus.component */ 82700);
/* harmony import */ var _marktype_marktype_list_marktype_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./marktype/marktype-list/marktype-list.component */ 47291);
/* harmony import */ var _marktype_new_marktype_new_marktype_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./marktype/new-marktype/new-marktype.component */ 60453);
/* harmony import */ var _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./group/group-list/group-list.component */ 94151);
/* harmony import */ var _group_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./group/new-group/new-group.component */ 52675);
/* harmony import */ var _bnasemester_bnasemester_list_bnasemester_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./bnasemester/bnasemester-list/bnasemester-list.component */ 53886);
/* harmony import */ var _bnasemester_new_bnasemester_new_bnasemester_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./bnasemester/new-bnasemester/new-bnasemester.component */ 88373);
/* harmony import */ var _Rank_Rank_list_Rank_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Rank/Rank-list/Rank-list.component */ 27724);
/* harmony import */ var _Rank_new_Rank_new_Rank_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Rank/new-Rank/new-Rank.component */ 2736);
/* harmony import */ var _religion_religion_list_religion_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./religion/religion-list/religion-list.component */ 3239);
/* harmony import */ var _religion_new_religion_new_religion_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./religion/new-religion/new-religion.component */ 43919);
/* harmony import */ var _colorOfEye_colorOfEye_list_colorOfEye_list_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./colorOfEye/colorOfEye-list/colorOfEye-list.component */ 55525);
/* harmony import */ var _colorOfEye_new_colorOfEye_new_colorOfEye_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./colorOfEye/new-colorOfEye/new-colorOfEye.component */ 23793);
/* harmony import */ var _defenseType_defenseType_list_defenseType_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./defenseType/defenseType-list/defenseType-list.component */ 38633);
/* harmony import */ var _defenseType_new_defenseType_new_defenseType_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./defenseType/new-defenseType/new-defenseType.component */ 44420);
/* harmony import */ var _occupation_occupation_list_occupation_list_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./occupation/occupation-list/occupation-list.component */ 60717);
/* harmony import */ var _occupation_new_occupation_new_occupation_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./occupation/new-occupation/new-occupation.component */ 98153);
/* harmony import */ var _examType_examType_list_examType_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./examType/examType-list/examType-list.component */ 8469);
/* harmony import */ var _examType_new_examType_new_examType_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./examType/new-examType/new-examType.component */ 98094);
/* harmony import */ var _reasonType_reasonType_list_reasonType_list_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./reasonType/reasonType-list/reasonType-list.component */ 57119);
/* harmony import */ var _reasonType_new_reasonType_new_reasonType_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./reasonType/new-reasonType/new-reasonType.component */ 21530);
/* harmony import */ var _favoritesType_favoritesType_list_favoritesType_list_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./favoritesType/favoritesType-list/favoritesType-list.component */ 99277);
/* harmony import */ var _favoritesType_new_favoritesType_new_favoritesType_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./favoritesType/new-favoritesType/new-favoritesType.component */ 63184);
/* harmony import */ var _coursename_coursename_list_coursename_list_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./coursename/coursename-list/coursename-list.component */ 74415);
/* harmony import */ var _coursename_new_coursename_new_coursename_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./coursename/new-coursename/new-coursename.component */ 16554);
/* harmony import */ var _codevaluetype_codevaluetype_list_codevaluetype_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./codevaluetype/codevaluetype-list/codevaluetype-list.component */ 34670);
/* harmony import */ var _codevaluetype_new_codevaluetype_new_codevaluetype_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./codevaluetype/new-codevaluetype/new-codevaluetype.component */ 9764);
/* harmony import */ var _bnapromotionstatus_bnapromotionstatus_list_bnapromotionstatus_list_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./bnapromotionstatus/bnapromotionstatus-list/bnapromotionstatus-list.component */ 72595);
/* harmony import */ var _bnapromotionstatus_new_bnapromotionstatus_new_bnapromotionstatus_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./bnapromotionstatus/new-bnapromotionstatus/new-bnapromotionstatus.component */ 94172);
/* harmony import */ var _steprelation_steprelation_list_steprelation_list_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./steprelation/steprelation-list/steprelation-list.component */ 30442);
/* harmony import */ var _steprelation_new_steprelation_new_steprelation_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./steprelation/new-steprelation/new-steprelation.component */ 70044);
/* harmony import */ var _cocurricularactivitytype_cocurricularactivitytype_list_cocurricularactivitytype_list_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./cocurricularactivitytype/cocurricularactivitytype-list/cocurricularactivitytype-list.component */ 4455);
/* harmony import */ var _cocurricularactivitytype_new_cocurricularactivitytype_new_cocurricularactivitytype_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./cocurricularactivitytype/new-cocurricularactivitytype/new-cocurricularactivitytype.component */ 27477);
/* harmony import */ var _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./board/board-list/board-list.component */ 64592);
/* harmony import */ var _board_new_board_new_board_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./board/new-board/new-board.component */ 1580);
/* harmony import */ var _failurestatus_failurestatus_list_failurestatus_list_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./failurestatus/failurestatus-list/failurestatus-list.component */ 3431);
/* harmony import */ var _failurestatus_new_failurestatus_new_failurestatus_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./failurestatus/new-failurestatus/new-failurestatus.component */ 74054);
/* harmony import */ var _division_division_list_division_list_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./division/division-list/division-list.component */ 65382);
/* harmony import */ var _division_new_division_new_division_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./division/new-division/new-division.component */ 45938);
/* harmony import */ var _membershiptype_membershiptype_list_membershiptype_list_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./membershiptype/membershiptype-list/membershiptype-list.component */ 2601);
/* harmony import */ var _membershiptype_new_membershiptype_new_membershiptype_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./membershiptype/new-membershiptype/new-membershiptype.component */ 10266);
/* harmony import */ var _elected_new_elected_new_elected_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./elected/new-elected/new-elected.component */ 34352);
/* harmony import */ var _elected_elected_list_elected_list_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./elected/elected-list/elected-list.component */ 53963);
/* harmony import */ var _socialmediatype_socialmediatype_list_socialmediatype_list_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./socialmediatype/socialmediatype-list/socialmediatype-list.component */ 13447);
/* harmony import */ var _socialmediatype_new_socialmediatype_new_socialmediatype_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./socialmediatype/new-socialmediatype/new-socialmediatype.component */ 84569);
/* harmony import */ var _bnaclasssectionselection_bnaclasssectionselection_list_bnaclasssectionselection_list_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./bnaclasssectionselection/bnaclasssectionselection-list/bnaclasssectionselection-list.component */ 50455);
/* harmony import */ var _bnaclasssectionselection_new_bnaclasssectionselectiont_new_bnaclasssectionselectiont_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./bnaclasssectionselection/new-bnaclasssectionselectiont/new-bnaclasssectionselectiont.component */ 2185);
/* harmony import */ var _language_language_list_language_list_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./language/language-list/language-list.component */ 41658);
/* harmony import */ var _language_new_language_new_language_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./language/new-language/new-language.component */ 91480);
/* harmony import */ var _codevalue_codevalue_list_codevalue_list_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./codevalue/codevalue-list/codevalue-list.component */ 12188);
/* harmony import */ var _codevalue_new_codevalue_new_codevalue_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./codevalue/new-codevalue/new-codevalue.component */ 69634);
/* harmony import */ var _caste_caste_list_caste_list_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./caste/caste-list/caste-list.component */ 65257);
/* harmony import */ var _caste_new_caste_new_caste_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./caste/new-caste/new-caste.component */ 11995);
/* harmony import */ var _district_district_list_district_list_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./district/district-list/district-list.component */ 43802);
/* harmony import */ var _district_new_district_new_district_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./district/new-district/new-district.component */ 87031);
/* harmony import */ var _adminauthority_adminauthority_list_adminauthority_list_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./adminauthority/adminauthority-list/adminauthority-list.component */ 32003);
/* harmony import */ var _adminauthority_new_adminauthority_new_adminauthority_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./adminauthority/new-adminauthority/new-adminauthority.component */ 56759);
/* harmony import */ var _subjectclassification_subjectclassification_list_subjectclassification_list_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./subjectclassification/subjectclassification-list/subjectclassification-list.component */ 73270);
/* harmony import */ var _subjectclassification_new_subjectclassification_new_subjectclassification_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./subjectclassification/new-subjectclassification/new-subjectclassification.component */ 79039);
/* harmony import */ var _basename_basename_list_basename_list_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./basename/basename-list/basename-list.component */ 72470);
/* harmony import */ var _basename_new_basename_new_basename_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./basename/new-basename/new-basename.component */ 89896);
/* harmony import */ var _forcetype_forcetype_list_forcetype_list_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./forcetype/forcetype-list/forcetype-list.component */ 9000);
/* harmony import */ var _forcetype_new_forcetype_new_forcetype_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./forcetype/new-forcetype/new-forcetype.component */ 39417);
/* harmony import */ var _baseschoolname_baseschoolname_list_baseschoolname_list_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./baseschoolname/baseschoolname-list/baseschoolname-list.component */ 68096);
/* harmony import */ var _baseschoolname_new_baseschoolname_new_baseschoolname_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./baseschoolname/new-baseschoolname/new-baseschoolname.component */ 81446);
/* harmony import */ var _thana_thana_list_thana_list_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./thana/thana-list/thana-list.component */ 61486);
/* harmony import */ var _thana_new_thana_new_thana_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./thana/new-thana/new-thana.component */ 4117);
/* harmony import */ var _questionType_questionType_list_questionType_list_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./questionType/questionType-list/questionType-list.component */ 87959);
/* harmony import */ var _questionType_new_questionType_new_questionType_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./questionType/new-questionType/new-questionType.component */ 48699);
/* harmony import */ var _bnabatch_bnabatch_list_bnabatch_list_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./bnabatch/bnabatch-list/bnabatch-list.component */ 5588);
/* harmony import */ var _bnabatch_new_bnabatch_new_bnabatch_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./bnabatch/new-bnabatch/new-bnabatch.component */ 81830);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./country/country-list/country-list.component */ 17358);
/* harmony import */ var _country_new_country_new_country_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./country/new-country/new-country.component */ 26134);
/* harmony import */ var _withdrawndoc_withdrawndoc_list_withdrawndoc_list_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./withdrawndoc/withdrawndoc-list/withdrawndoc-list.component */ 91366);
/* harmony import */ var _withdrawndoc_new_withdrawndoc_new_withdrawndoc_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./withdrawndoc/new-withdrawndoc/new-withdrawndoc.component */ 62465);
/* harmony import */ var _showright_showright_list_showright_list_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./showright/showright-list/showright-list.component */ 65458);
/* harmony import */ var _showright_new_showright_new_showright_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./showright/new-showright/new-showright.component */ 43726);
/* harmony import */ var _documenttype_documenttype_list_documenttype_list_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./documenttype/documenttype-list/documenttype-list.component */ 26656);
/* harmony import */ var _documenttype_new_documenttype_new_documenttype_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./documenttype/new-documenttype/new-documenttype.component */ 28440);
/* harmony import */ var _resultstatus_resultstatus_list_resultstatus_list_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./resultstatus/resultstatus-list/resultstatus-list.component */ 49970);
/* harmony import */ var _resultstatus_new_resultstatus_new_resultstatus_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./resultstatus/new-resultstatus/new-resultstatus.component */ 3722);
/* harmony import */ var _bnaclassschedulestatus_bnaclassschedulestatus_list_bnaclassschedulestatus_list_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./bnaclassschedulestatus/bnaclassschedulestatus-list/bnaclassschedulestatus-list.component */ 13120);
/* harmony import */ var _bnaclassschedulestatus_new_bnaclassschedulestatus_new_bnaclassschedulestatus_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./bnaclassschedulestatus/new-bnaclassschedulestatus/new-bnaclassschedulestatus.component */ 64582);
/* harmony import */ var _examperiodtype_examperiodtype_list_examperiodtype_list_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./examperiodtype/examperiodtype-list/examperiodtype-list.component */ 91968);
/* harmony import */ var _examperiodtype_new_examperiodtype_new_examperiodtype_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./examperiodtype/new-examperiodtype/new-examperiodtype.component */ 96881);
/* harmony import */ var _classtype_classtype_list_classtype_list_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./classtype/classtype-list/classtype-list.component */ 96285);
/* harmony import */ var _classtype_new_classtype_new_classtype_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./classtype/new-classtype/new-classtype.component */ 67951);
/* harmony import */ var _downloadright_downloadright_list_downloadright_list_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./downloadright/downloadright-list/downloadright-list.component */ 3906);
/* harmony import */ var _downloadright_new_downloadright_new_downloadright_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./downloadright/new-downloadright/new-downloadright.component */ 22861);
/* harmony import */ var _traineecoursestatus_traineecoursestatus_list_traineecoursestatus_list_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./traineecoursestatus/traineecoursestatus-list/traineecoursestatus-list.component */ 59068);
/* harmony import */ var _traineecoursestatus_new_traineecoursestatus_new_traineecoursestatus_component__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./traineecoursestatus/new-traineecoursestatus/new-traineecoursestatus.component */ 94341);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _courseType_coursetype_list_coursetype_list_component__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./courseType/coursetype-list/coursetype-list.component */ 16665);
/* harmony import */ var _courseType_new_coursetype_new_coursetype_component__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./courseType/new-coursetype/new-coursetype.component */ 89842);
/* harmony import */ var _bnasubjectcurriculam_new_bnasubjectcurriculam_new_bnasubjectcurriculam_component__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./bnasubjectcurriculam/new-bnasubjectcurriculam/new-bnasubjectcurriculam.component */ 15735);
/* harmony import */ var _bnasubjectcurriculam_bnasubjectcurriculam_list_bnasubjectcurriculam_list_component__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./bnasubjectcurriculam/bnasubjectcurriculam-list/bnasubjectcurriculam-list.component */ 14815);
/* harmony import */ var _subjecttype_subjecttype_list_subjecttype_list_component__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./subjecttype/subjecttype-list/subjecttype-list.component */ 74981);
/* harmony import */ var _subjecttype_new_subjecttype_new_subjecttype_component__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./subjecttype/new-subjecttype/new-subjecttype.component */ 50360);
/* harmony import */ var _subjectcategory_subjectcategory_list_subjectcategory_list_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./subjectcategory/subjectcategory-list/subjectcategory-list.component */ 24715);
/* harmony import */ var _subjectcategory_new_subjectcategory_new_subjectcategory_component__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./subjectcategory/new-subjectcategory/new-subjectcategory.component */ 98840);
/* harmony import */ var _kindofsubject_kindofsubject_list_kindofsubject_list_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./kindofsubject/kindofsubject-list/kindofsubject-list.component */ 20798);
/* harmony import */ var _kindofsubject_new_kindofsubject_new_kindofsubject_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./kindofsubject/new-kindofsubject/new-kindofsubject.component */ 31768);
/* harmony import */ var _bnaattendanceremarks_bnaattendanceremarks_list_bnaattendanceremarks_list_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./bnaattendanceremarks/bnaattendanceremarks-list/bnaattendanceremarks-list.component */ 1220);
/* harmony import */ var _bnaattendanceremarks_new_bnaattendanceremarks_new_bnaattendanceremarks_component__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./bnaattendanceremarks/new-bnaattendanceremarks/new-bnaattendanceremarks.component */ 76846);
/* harmony import */ var _coursemodule_coursemodule_list_coursemodule_list_component__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./coursemodule/coursemodule-list/coursemodule-list.component */ 76582);
/* harmony import */ var _coursemodule_new_coursemodule_new_coursemodule_component__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./coursemodule/new-coursemodule/new-coursemodule.component */ 3907);
/* harmony import */ var _haircolor_haircolor_list_haircolor_list_component__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./haircolor/haircolor-list/haircolor-list.component */ 25662);
/* harmony import */ var _haircolor_new_haircolor_new_haircolor_component__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./haircolor/new-haircolor/new-haircolor.component */ 32724);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _examcenter_examcenter_list_examcenter_list_component__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./examcenter/examcenter-list/examcenter-list.component */ 65783);
/* harmony import */ var _examcenter_new_examcenter_new_examcenter_component__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./examcenter/new-examcenter/new-examcenter.component */ 20052);
/* harmony import */ var _examattempttype_examattempttype_list_examattempttype_list_component__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./examattempttype/examattempttype-list/examattempttype-list.component */ 91584);
/* harmony import */ var _examattempttype_new_examattempttype_new_examattempttype_component__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./examattempttype/new-examattempttype/new-examattempttype.component */ 10150);
/* harmony import */ var _organizationname_organizationname_list_organizationname_list_component__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./organizationname/organizationname-list/organizationname-list.component */ 49483);
/* harmony import */ var _organizationname_new_organizationname_new_organizationname_component__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./organizationname/new-organizationname/new-organizationname.component */ 85166);
/* harmony import */ var _coursegradingentry_coursegradingentry_list_coursegradingentry_list_component__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./coursegradingentry/coursegradingentry-list/coursegradingentry-list.component */ 57235);
/* harmony import */ var _coursegradingentry_new_coursegradingentry_new_coursegradingentry_component__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./coursegradingentry/new-coursegradingentry/new-coursegradingentry.component */ 80217);
/* harmony import */ var _weekname_weekname_list_weekname_list_component__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./weekname/weekname-list/weekname-list.component */ 81122);
/* harmony import */ var _weekname_new_weekname_new_weekname_component__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./weekname/new-weekname/new-weekname.component */ 5653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! @angular/core */ 37716);













































//import { EditBNACurriculamTypeComponent } from './bNACurriculamType/edit-bNACurriculamType/edit-bNACurriculamType.component';





































































































































class BasicSetupModule {
}
BasicSetupModule.ɵfac = function BasicSetupModule_Factory(t) { return new (t || BasicSetupModule)(); };
BasicSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_159__["ɵɵdefineNgModule"]({ type: BasicSetupModule });
BasicSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_159__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_160__.CommonModule,
            _basic_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__.BasicSetupRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_160__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_161__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_161__.ReactiveFormsModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_162__.NgxDatatableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_163__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_164__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_165__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_166__.MatInputModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_167__.MatStepperModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_168__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_169__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_170__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_171__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_172__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_173__.MatNativeDateModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_174__.MaterialFileInputModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_175__.MatProgressSpinnerModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_176__.HttpClientModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_177__.MatAutocompleteModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_159__["ɵɵsetNgModuleScope"](BasicSetupModule, { declarations: [_accounttype_accounttype_list_accounttype_list_component__WEBPACK_IMPORTED_MODULE_31__.AccountTypeListComponent,
        _accounttype_new_accounttype_new_accounttype_component__WEBPACK_IMPORTED_MODULE_32__.NewAccountTypeComponent,
        _game_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__.GameListComponent,
        _gender_gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_13__.GenderListComponent,
        _game_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__.NewGameComponent,
        _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_7__.BranchListComponent,
        _branch_new_branch_new_branch_component__WEBPACK_IMPORTED_MODULE_8__.NewBranchComponent,
        _weight_weight_list_weight_list_component__WEBPACK_IMPORTED_MODULE_9__.WeightListComponent,
        _weight_new_weight_new_weight_component__WEBPACK_IMPORTED_MODULE_10__.NewWeightComponent,
        _gender_new_gender_new_gender_component__WEBPACK_IMPORTED_MODULE_14__.NewGenderComponent,
        _bnaservicetype_bnaservicetype_list_bnaservicetype_list_component__WEBPACK_IMPORTED_MODULE_15__.BNAServiceTypeListComponent,
        _bnaservicetype_new_bnaervicetype_new_bnaservicetype_component__WEBPACK_IMPORTED_MODULE_16__.NewBNAServiceTypeComponent,
        _utofficertype_utofficertype_list_utofficertype_list_component__WEBPACK_IMPORTED_MODULE_17__.UTOfficerTypeListComponent,
        _utofficertype_new_utofficertype_new_utofficertype_component__WEBPACK_IMPORTED_MODULE_18__.NewUTOfficerTypeComponent,
        _utofficercategory_utofficercategory_list_utofficercategory_list_component__WEBPACK_IMPORTED_MODULE_19__.UTOfficerCategoryListComponent,
        _utofficercategory_new_utofficercategory_new_utofficercategory_component__WEBPACK_IMPORTED_MODULE_20__.NewUTOfficerCategoryComponent,
        _bloodgroup_bloodgroup_list_bloodgroup_list_component__WEBPACK_IMPORTED_MODULE_21__.BloodGroupListComponent,
        _bloodgroup_new_bloodgroup_new_bloodgroup_component__WEBPACK_IMPORTED_MODULE_22__.NewBloodGroupComponent,
        _height_height_list_height_list_component__WEBPACK_IMPORTED_MODULE_25__.HeightListComponent,
        _height_new_height_new_height_component__WEBPACK_IMPORTED_MODULE_26__.NewHeightComponent,
        _traineecoursestatus_traineecoursestatus_list_traineecoursestatus_list_component__WEBPACK_IMPORTED_MODULE_131__.TraineeCourseStatusListComponent,
        _traineecoursestatus_new_traineecoursestatus_new_traineecoursestatus_component__WEBPACK_IMPORTED_MODULE_132__.NewTraineeCourseStatusComponent,
        _withdrawndoc_withdrawndoc_list_withdrawndoc_list_component__WEBPACK_IMPORTED_MODULE_115__.WithdrawnDocListComponent,
        _withdrawndoc_new_withdrawndoc_new_withdrawndoc_component__WEBPACK_IMPORTED_MODULE_116__.NewWithdrawnDocComponent,
        _showright_showright_list_showright_list_component__WEBPACK_IMPORTED_MODULE_117__.ShowRightListComponent,
        _showright_new_showright_new_showright_component__WEBPACK_IMPORTED_MODULE_118__.NewShowRightComponent,
        _documenttype_documenttype_list_documenttype_list_component__WEBPACK_IMPORTED_MODULE_119__.DocumentTypeListComponent,
        _documenttype_new_documenttype_new_documenttype_component__WEBPACK_IMPORTED_MODULE_120__.NewDocumentTypeComponent,
        _resultstatus_resultstatus_list_resultstatus_list_component__WEBPACK_IMPORTED_MODULE_121__.ResultStatusListComponent,
        _resultstatus_new_resultstatus_new_resultstatus_component__WEBPACK_IMPORTED_MODULE_122__.NewResultStatusComponent,
        _bnaclassschedulestatus_bnaclassschedulestatus_list_bnaclassschedulestatus_list_component__WEBPACK_IMPORTED_MODULE_123__.BNAClassScheduleStatusListComponent,
        _bnaclassschedulestatus_new_bnaclassschedulestatus_new_bnaclassschedulestatus_component__WEBPACK_IMPORTED_MODULE_124__.NewBNAClassScheduleStatusComponent,
        _examperiodtype_examperiodtype_list_examperiodtype_list_component__WEBPACK_IMPORTED_MODULE_125__.ExamPeriodTypeListComponent,
        _examperiodtype_new_examperiodtype_new_examperiodtype_component__WEBPACK_IMPORTED_MODULE_126__.NewExamPeriodTypeComponent,
        _classtype_classtype_list_classtype_list_component__WEBPACK_IMPORTED_MODULE_127__.ClassTypeListComponent,
        _classtype_new_classtype_new_classtype_component__WEBPACK_IMPORTED_MODULE_128__.NewClassTypeComponent,
        _downloadright_downloadright_list_downloadright_list_component__WEBPACK_IMPORTED_MODULE_129__.DownloadRightListComponent,
        _downloadright_new_downloadright_new_downloadright_component__WEBPACK_IMPORTED_MODULE_130__.NewDownloadRightComponent,
        _bnacurriculamtype_bnacurriculamtype_list_bnacurriculamtype_list_component__WEBPACK_IMPORTED_MODULE_23__.BNACurriculamTypeListComponent,
        _bnacurriculamtype_new_bnacurriculamtype_new_bnacurriculamtype_component__WEBPACK_IMPORTED_MODULE_24__.NewBNACurriculamTypeComponent,
        _complexion_new_complexion_new_complexion_component__WEBPACK_IMPORTED_MODULE_11__.NewComplexionComponent,
        _complexion_complexion_list_complexion_list_component__WEBPACK_IMPORTED_MODULE_12__.ComplexionListComponent,
        _grandfathertype_grandfathertype_list_grandfathertype_list_component__WEBPACK_IMPORTED_MODULE_33__.GrandFatherTypeListComponent,
        _grandfathertype_new_grandfathertype_new_grandfathertype_component__WEBPACK_IMPORTED_MODULE_34__.NewGrandFatherTypeComponent,
        _relationtype_relationtype_list_relationtype_list_component__WEBPACK_IMPORTED_MODULE_35__.RelationTypeListComponent,
        _relationtype_new_relationtype_new_relationtype_component__WEBPACK_IMPORTED_MODULE_36__.NewRelationTypeComponent,
        _presentbillet_presentbillet_list_presentbillet_list_component__WEBPACK_IMPORTED_MODULE_37__.PresentBilletListComponent,
        _presentbillet_new_presentbillet_new_presentbillet_component__WEBPACK_IMPORTED_MODULE_38__.NewPresentBilletComponent,
        _bnainstructortype_bnainstructortype_list_bnainstructortype_list_component__WEBPACK_IMPORTED_MODULE_39__.BNAInstructorTypeListComponent,
        _bnainstructortype_new_bnainstructortype_new_bnainstructortype_component__WEBPACK_IMPORTED_MODULE_40__.NewBNAInstructorTypeComponent,
        _maritalstatus_maritalstatus_list_maritalstatus_list_component__WEBPACK_IMPORTED_MODULE_41__.MaritalstatusListComponent,
        _maritalstatus_new_maritalstatus_new_maritalstatus_component__WEBPACK_IMPORTED_MODULE_42__.NewMaritalstatusComponent,
        _marktype_marktype_list_marktype_list_component__WEBPACK_IMPORTED_MODULE_43__.MarkTypeListComponent,
        _marktype_new_marktype_new_marktype_component__WEBPACK_IMPORTED_MODULE_44__.NewMarkTypeComponent,
        _group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_45__.GroupListComponent,
        _group_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_46__.NewGroupComponent,
        _nationality_new_nationality_new_nationality_component__WEBPACK_IMPORTED_MODULE_3__.NewNationalityComponent,
        _nationality_nationality_list_nationality_list_component__WEBPACK_IMPORTED_MODULE_0__.NationalityListComponent,
        _bnasemester_bnasemester_list_bnasemester_list_component__WEBPACK_IMPORTED_MODULE_47__.BNASemesterListComponent,
        _bnasemester_new_bnasemester_new_bnasemester_component__WEBPACK_IMPORTED_MODULE_48__.NewBNASemesterComponent,
        _bnaattendanceperiod_bnaattendanceperiod_list_bnaattendanceperiod_list_component__WEBPACK_IMPORTED_MODULE_27__.BnaAttendancePeriodListComponent,
        _bnaattendanceperiod_new_bnaattendanceperiod_new_bnaattendanceperiod_component__WEBPACK_IMPORTED_MODULE_28__.NewBnaAttendancePeriodComponent,
        _bnaclasstesttype_bnaclasstesttype_list_bnaclasstesttype_list_component__WEBPACK_IMPORTED_MODULE_29__.BnaClassTestTypeListComponent,
        _bnaclasstesttype_new_bnaclasstesttype_new_bnaclasstesttype_component__WEBPACK_IMPORTED_MODULE_30__.NewBnaClassTestTypeComponent,
        _Rank_Rank_list_Rank_list_component__WEBPACK_IMPORTED_MODULE_49__.RankListComponent,
        _Rank_new_Rank_new_Rank_component__WEBPACK_IMPORTED_MODULE_50__.NewRankComponent,
        _religion_new_religion_new_religion_component__WEBPACK_IMPORTED_MODULE_52__.NewReligionComponent,
        _religion_religion_list_religion_list_component__WEBPACK_IMPORTED_MODULE_51__.ReligionListComponent,
        _colorOfEye_colorOfEye_list_colorOfEye_list_component__WEBPACK_IMPORTED_MODULE_53__.ColorOfEyeListComponent,
        _colorOfEye_new_colorOfEye_new_colorOfEye_component__WEBPACK_IMPORTED_MODULE_54__.NewColorOfEyeComponent,
        _defenseType_defenseType_list_defenseType_list_component__WEBPACK_IMPORTED_MODULE_55__.DefenseTypeListComponent,
        _defenseType_new_defenseType_new_defenseType_component__WEBPACK_IMPORTED_MODULE_56__.NewDefenseTypeComponent,
        _occupation_occupation_list_occupation_list_component__WEBPACK_IMPORTED_MODULE_57__.OccupationListComponent,
        _occupation_new_occupation_new_occupation_component__WEBPACK_IMPORTED_MODULE_58__.NewOccupationComponent,
        _examType_examType_list_examType_list_component__WEBPACK_IMPORTED_MODULE_59__.ExamTypeListComponent,
        _examType_new_examType_new_examType_component__WEBPACK_IMPORTED_MODULE_60__.NewExamTypeComponent,
        _reasonType_reasonType_list_reasonType_list_component__WEBPACK_IMPORTED_MODULE_61__.ReasonTypeListComponent,
        _reasonType_new_reasonType_new_reasonType_component__WEBPACK_IMPORTED_MODULE_62__.NewReasonTypeComponent,
        _favoritesType_favoritesType_list_favoritesType_list_component__WEBPACK_IMPORTED_MODULE_63__.FavoritesTypeListComponent,
        _favoritesType_new_favoritesType_new_favoritesType_component__WEBPACK_IMPORTED_MODULE_64__.NewFavoritesTypeComponent,
        _coursename_coursename_list_coursename_list_component__WEBPACK_IMPORTED_MODULE_65__.CourseNameListComponent,
        _coursename_new_coursename_new_coursename_component__WEBPACK_IMPORTED_MODULE_66__.NewCourseNameComponent,
        _codevaluetype_codevaluetype_list_codevaluetype_list_component__WEBPACK_IMPORTED_MODULE_67__.CodeValueTypeListComponent,
        _codevaluetype_new_codevaluetype_new_codevaluetype_component__WEBPACK_IMPORTED_MODULE_68__.NewCodeValueTypeComponent,
        _bnapromotionstatus_bnapromotionstatus_list_bnapromotionstatus_list_component__WEBPACK_IMPORTED_MODULE_69__.BNAPromotionStatusListComponent,
        _bnapromotionstatus_new_bnapromotionstatus_new_bnapromotionstatus_component__WEBPACK_IMPORTED_MODULE_70__.NewBNAPromotionStatusComponent,
        _steprelation_steprelation_list_steprelation_list_component__WEBPACK_IMPORTED_MODULE_71__.StepRelationListComponent,
        _steprelation_new_steprelation_new_steprelation_component__WEBPACK_IMPORTED_MODULE_72__.NewStepRelationComponent,
        _cocurricularactivitytype_cocurricularactivitytype_list_cocurricularactivitytype_list_component__WEBPACK_IMPORTED_MODULE_73__.CoCurricularActivityTypeListComponent,
        _cocurricularactivitytype_new_cocurricularactivitytype_new_cocurricularactivitytype_component__WEBPACK_IMPORTED_MODULE_74__.NewCoCurricularActivityTypeComponent,
        _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_75__.BoardListComponent,
        _board_new_board_new_board_component__WEBPACK_IMPORTED_MODULE_76__.NewBoardComponent,
        _failurestatus_failurestatus_list_failurestatus_list_component__WEBPACK_IMPORTED_MODULE_77__.FailureStatusListComponent,
        _failurestatus_new_failurestatus_new_failurestatus_component__WEBPACK_IMPORTED_MODULE_78__.NewFailureStatusComponent,
        _division_division_list_division_list_component__WEBPACK_IMPORTED_MODULE_79__.DivisionListComponent,
        _division_new_division_new_division_component__WEBPACK_IMPORTED_MODULE_80__.NewDivisionComponent,
        _membershiptype_membershiptype_list_membershiptype_list_component__WEBPACK_IMPORTED_MODULE_81__.MembershiptypeListComponent,
        _membershiptype_new_membershiptype_new_membershiptype_component__WEBPACK_IMPORTED_MODULE_82__.NewMembershiptypeComponent,
        _elected_new_elected_new_elected_component__WEBPACK_IMPORTED_MODULE_83__.NewElectedComponent,
        _elected_elected_list_elected_list_component__WEBPACK_IMPORTED_MODULE_84__.ElectedListComponent,
        _socialmediatype_socialmediatype_list_socialmediatype_list_component__WEBPACK_IMPORTED_MODULE_85__.SocialmediatypeListComponent,
        _socialmediatype_new_socialmediatype_new_socialmediatype_component__WEBPACK_IMPORTED_MODULE_86__.NewSocialmediatypeComponent,
        _bnaclasssectionselection_bnaclasssectionselection_list_bnaclasssectionselection_list_component__WEBPACK_IMPORTED_MODULE_87__.BnaclasssectionselectionListComponent,
        _bnaclasssectionselection_new_bnaclasssectionselectiont_new_bnaclasssectionselectiont_component__WEBPACK_IMPORTED_MODULE_88__.NewBnaclasssectionselectiontComponent,
        _language_language_list_language_list_component__WEBPACK_IMPORTED_MODULE_89__.LanguageListComponent,
        _language_new_language_new_language_component__WEBPACK_IMPORTED_MODULE_90__.NewLanguageComponent,
        _codevalue_codevalue_list_codevalue_list_component__WEBPACK_IMPORTED_MODULE_91__.CodeValueListComponent,
        _codevalue_new_codevalue_new_codevalue_component__WEBPACK_IMPORTED_MODULE_92__.NewCodeValueComponent,
        _caste_caste_list_caste_list_component__WEBPACK_IMPORTED_MODULE_93__.CasteListComponent,
        _caste_new_caste_new_caste_component__WEBPACK_IMPORTED_MODULE_94__.NewCasteComponent,
        _district_district_list_district_list_component__WEBPACK_IMPORTED_MODULE_95__.DistrictListComponent,
        _district_new_district_new_district_component__WEBPACK_IMPORTED_MODULE_96__.NewDistrictComponent,
        _subjectclassification_subjectclassification_list_subjectclassification_list_component__WEBPACK_IMPORTED_MODULE_99__.SubjectClassificationListComponent,
        _subjectclassification_new_subjectclassification_new_subjectclassification_component__WEBPACK_IMPORTED_MODULE_100__.NewSubjectClassificationComponent,
        _adminauthority_adminauthority_list_adminauthority_list_component__WEBPACK_IMPORTED_MODULE_97__.AdminAuthorityListComponent,
        _adminauthority_new_adminauthority_new_adminauthority_component__WEBPACK_IMPORTED_MODULE_98__.NewAdminAuthorityComponent,
        _basename_basename_list_basename_list_component__WEBPACK_IMPORTED_MODULE_101__.BaseNameListComponent,
        _basename_new_basename_new_basename_component__WEBPACK_IMPORTED_MODULE_102__.NewBaseNameComponent,
        _forcetype_forcetype_list_forcetype_list_component__WEBPACK_IMPORTED_MODULE_103__.ForceTypeListComponent,
        _forcetype_new_forcetype_new_forcetype_component__WEBPACK_IMPORTED_MODULE_104__.NewForceTypeComponent,
        _baseschoolname_baseschoolname_list_baseschoolname_list_component__WEBPACK_IMPORTED_MODULE_105__.BaseSchoolNameListComponent,
        _baseschoolname_new_baseschoolname_new_baseschoolname_component__WEBPACK_IMPORTED_MODULE_106__.NewBaseSchoolNameComponent,
        _thana_thana_list_thana_list_component__WEBPACK_IMPORTED_MODULE_107__.ThanaListComponent,
        _thana_new_thana_new_thana_component__WEBPACK_IMPORTED_MODULE_108__.NewThanaComponent,
        _questionType_questionType_list_questionType_list_component__WEBPACK_IMPORTED_MODULE_109__.QuestionTypeListComponent,
        _questionType_new_questionType_new_questionType_component__WEBPACK_IMPORTED_MODULE_110__.NewQuestionTypeComponent,
        _bnabatch_bnabatch_list_bnabatch_list_component__WEBPACK_IMPORTED_MODULE_111__.BNABatchListComponent,
        _bnabatch_new_bnabatch_new_bnabatch_component__WEBPACK_IMPORTED_MODULE_112__.NewBNABatchComponent,
        _country_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_113__.CountryListComponent,
        _country_new_country_new_country_component__WEBPACK_IMPORTED_MODULE_114__.NewcountryComponent,
        _courseType_coursetype_list_coursetype_list_component__WEBPACK_IMPORTED_MODULE_133__.CoursetypeListComponent,
        _courseType_new_coursetype_new_coursetype_component__WEBPACK_IMPORTED_MODULE_134__.NewCoursetypeComponent,
        _bnasubjectcurriculam_new_bnasubjectcurriculam_new_bnasubjectcurriculam_component__WEBPACK_IMPORTED_MODULE_135__.NewBnasubjectcurriculamComponent,
        _bnasubjectcurriculam_bnasubjectcurriculam_list_bnasubjectcurriculam_list_component__WEBPACK_IMPORTED_MODULE_136__.BNASubjectCurriculamListComponent,
        _subjecttype_subjecttype_list_subjecttype_list_component__WEBPACK_IMPORTED_MODULE_137__.SubjecttypeListComponent,
        _subjecttype_new_subjecttype_new_subjecttype_component__WEBPACK_IMPORTED_MODULE_138__.NewSubjectTypeComponent,
        _subjectcategory_subjectcategory_list_subjectcategory_list_component__WEBPACK_IMPORTED_MODULE_139__.SubjectCategoryListComponent,
        _subjectcategory_new_subjectcategory_new_subjectcategory_component__WEBPACK_IMPORTED_MODULE_140__.NewSubjectCategoryComponent,
        _kindofsubject_kindofsubject_list_kindofsubject_list_component__WEBPACK_IMPORTED_MODULE_141__.KindOfSubjectListComponent,
        _kindofsubject_new_kindofsubject_new_kindofsubject_component__WEBPACK_IMPORTED_MODULE_142__.NewKindOfSubjectComponent,
        _bnaattendanceremarks_bnaattendanceremarks_list_bnaattendanceremarks_list_component__WEBPACK_IMPORTED_MODULE_143__.BNAAttendanceRemarksListComponent,
        _bnaattendanceremarks_new_bnaattendanceremarks_new_bnaattendanceremarks_component__WEBPACK_IMPORTED_MODULE_144__.NewBNAAttendanceRemarksComponent,
        _coursemodule_coursemodule_list_coursemodule_list_component__WEBPACK_IMPORTED_MODULE_145__.CourseModuleListComponent,
        _coursemodule_new_coursemodule_new_coursemodule_component__WEBPACK_IMPORTED_MODULE_146__.NewCourseModuleComponent,
        _exammarkremarks_exammarkremarks_list_exammarkremarks_list_component__WEBPACK_IMPORTED_MODULE_1__.ExamMarkRemarksListComponent,
        _exammarkremarks_new_exammarkremarks_new_exammarkremarks_component__WEBPACK_IMPORTED_MODULE_2__.NewExamMarkRemarksComponent,
        _haircolor_haircolor_list_haircolor_list_component__WEBPACK_IMPORTED_MODULE_147__.HairColorListComponent,
        _haircolor_new_haircolor_new_haircolor_component__WEBPACK_IMPORTED_MODULE_148__.NewHairColorComponent,
        _examcenter_examcenter_list_examcenter_list_component__WEBPACK_IMPORTED_MODULE_149__.ExamCenterListComponent,
        _examcenter_new_examcenter_new_examcenter_component__WEBPACK_IMPORTED_MODULE_150__.NewExamCenterComponent,
        _examattempttype_examattempttype_list_examattempttype_list_component__WEBPACK_IMPORTED_MODULE_151__.ExamAttemptTypeListComponent,
        _examattempttype_new_examattempttype_new_examattempttype_component__WEBPACK_IMPORTED_MODULE_152__.NewExamAttemptTypeComponent,
        _organizationname_organizationname_list_organizationname_list_component__WEBPACK_IMPORTED_MODULE_153__.OrganizationNameListComponent,
        _organizationname_new_organizationname_new_organizationname_component__WEBPACK_IMPORTED_MODULE_154__.NewOrganizationNameComponent,
        _coursegradingentry_coursegradingentry_list_coursegradingentry_list_component__WEBPACK_IMPORTED_MODULE_155__.CourseGradingEntryListComponent,
        _coursegradingentry_new_coursegradingentry_new_coursegradingentry_component__WEBPACK_IMPORTED_MODULE_156__.NewCourseGradingEntryComponent,
        _weekname_weekname_list_weekname_list_component__WEBPACK_IMPORTED_MODULE_157__.WeekNameListComponent,
        _weekname_new_weekname_new_weekname_component__WEBPACK_IMPORTED_MODULE_158__.NewWeekNameComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_160__.CommonModule,
        _basic_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__.BasicSetupRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_160__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_161__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_161__.ReactiveFormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_162__.NgxDatatableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_163__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_164__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_165__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_166__.MatInputModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_167__.MatStepperModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_168__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_169__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_170__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_171__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_172__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_173__.MatNativeDateModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_174__.MaterialFileInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_175__.MatProgressSpinnerModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_176__.HttpClientModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_177__.MatAutocompleteModule] }); })();


/***/ }),

/***/ 57235:
/*!*************************************************************************************************************!*\
  !*** ./src/app/basic-setup/coursegradingentry/coursegradingentry-list/coursegradingentry-list.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseGradingEntryListComponent": function() { return /* binding */ CourseGradingEntryListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/data/master-data */ 65960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _service_CourseGradingEntry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CourseGradingEntry.service */ 75275);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/confirm.service */ 39182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 99692);













function CourseGradingEntryListComponent_mat_header_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseGradingEntryListComponent_mat_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r3.paging.pageIndex - 1) * ctx_r3.paging.pageSize + i_r13 + 1, " ");
} }
function CourseGradingEntryListComponent_mat_header_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mark Obtained ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseGradingEntryListComponent_mat_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.markObtained, " ");
} }
function CourseGradingEntryListComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseGradingEntryListComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.grade, " ");
} }
function CourseGradingEntryListComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/basic-setup/update-coursegradingentry", a1]; };
function CourseGradingEntryListComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseGradingEntryListComponent_mat_cell_56_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function CourseGradingEntryListComponent_mat_cell_56_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const row_r16 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.deleteItem(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r16.courseGradingEntryId));
} }
function CourseGradingEntryListComponent_mat_header_row_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function CourseGradingEntryListComponent_mat_row_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
} }
class CourseGradingEntryListComponent {
    constructor(snackBar, CourseGradingEntryService, router, confirmService) {
        this.snackBar = snackBar;
        this.CourseGradingEntryService = CourseGradingEntryService;
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
        this.displayedColumns = ['ser', 'markObtained', 'grade', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.getCourseGradingEntry();
    }
    getCourseGradingEntry() {
        this.isLoading = true;
        this.CourseGradingEntryService.getCourseGradingEntry(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
            this.dataSource.data = response.items;
            this.paging.length = response.totalItemsCount;
            this.isLoading = false;
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.filteredData.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.filteredData.forEach((row) => this.selection.select(row));
    }
    addNew() {
    }
    pageChanged(event) {
        this.paging.pageIndex = event.pageIndex;
        this.paging.pageSize = event.pageSize;
        this.paging.pageIndex = this.paging.pageIndex + 1;
        this.getCourseGradingEntry();
    }
    applyFilter(searchText) {
        this.searchText = searchText;
        this.getCourseGradingEntry();
    }
    deleteItem(row) {
        const id = row.courseGradingEntryId;
        this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Item').subscribe(result => {
            console.log(result);
            if (result) {
                this.CourseGradingEntryService.delete(id).subscribe(() => {
                    this.getCourseGradingEntry();
                    this.snackBar.open('Information Delete Successfully ', '', {
                        duration: 2000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'right',
                        panelClass: 'snackbar-danger'
                    });
                });
            }
        });
    }
}
CourseGradingEntryListComponent.ɵfac = function CourseGradingEntryListComponent_Factory(t) { return new (t || CourseGradingEntryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CourseGradingEntry_service__WEBPACK_IMPORTED_MODULE_1__.CourseGradingEntryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService)); };
CourseGradingEntryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CourseGradingEntryListComponent, selectors: [["app-coursegradingentry"]], decls: 60, vars: 8, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/basic-setup/add-coursegradingentry", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "ser"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "markObtained"], ["matColumnDef", "grade"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]], template: function CourseGradingEntryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Course Grading Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Course Grading Entry");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CourseGradingEntryListComponent_Template_input_ngModelChange_28_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseGradingEntryListComponent_Template_button_click_32_listener() { return ctx.applyFilter(ctx.searchText); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CourseGradingEntryListComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, CourseGradingEntryListComponent_mat_cell_47_Template, 2, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](48, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CourseGradingEntryListComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, CourseGradingEntryListComponent_mat_cell_50_Template, 2, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CourseGradingEntryListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, CourseGradingEntryListComponent_mat_cell_53_Template, 2, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CourseGradingEntryListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, CourseGradingEntryListComponent_mat_cell_56_Template, 7, 3, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CourseGradingEntryListComponent_mat_header_row_57_Template, 1, 0, "mat-header-row", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, CourseGradingEntryListComponent_mat_row_58_Template, 1, 0, "mat-row", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-paginator", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function CourseGradingEntryListComponent_Template_mat_paginator_page_59_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], styles: [""] });


/***/ }),

/***/ 76582:
/*!*******************************************************************************************!*\
  !*** ./src/app/basic-setup/coursemodule/coursemodule-list/coursemodule-list.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseModuleListComponent": function() { return /* binding */ CourseModuleListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_assets_data_master_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/data/master-data */ 65960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _service_CourseModule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/CourseModule.service */ 35641);
/* harmony import */ var src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/confirm.service */ 39182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);














function CourseModuleListComponent_mat_header_cell_49_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CourseModuleListComponent_mat_header_cell_49_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r18.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function CourseModuleListComponent_mat_cell_50_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseModuleListComponent_mat_cell_50_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function CourseModuleListComponent_mat_cell_50_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const row_r20 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r22.selection.toggle(row_r20) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r20))("ngClass", "tbl-checkbox");
} }
function CourseModuleListComponent_mat_header_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ser. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseModuleListComponent_mat_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r5.paging.pageIndex - 1) * ctx_r5.paging.pageSize + i_r25 + 1, " ");
} }
function CourseModuleListComponent_mat_header_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " School Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseModuleListComponent_mat_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r26.baseSchoolName, " ");
} }
function CourseModuleListComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseModuleListComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.courseName, " ");
} }
function CourseModuleListComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Of Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseModuleListComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r28.moduleName, " ");
} }
function CourseModuleListComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name Of Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourseModuleListComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r29.nameOfModule, " ");
} }
function CourseModuleListComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/basic-setup/update-coursemodule", a1]; };
function CourseModuleListComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseModuleListComponent_mat_cell_68_Template_button_click_4_listener($event) { return $event.stopPropagation(); })("click", function CourseModuleListComponent_mat_cell_68_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const row_r30 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.deleteItem(row_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, row_r30.courseModuleId));
} }
function CourseModuleListComponent_mat_header_row_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function CourseModuleListComponent_mat_row_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
} }
class CourseModuleListComponent {
    constructor(route, snackBar, CourseModuleService, router, confirmService) {
        this.route = route;
        this.snackBar = snackBar;
        this.CourseModuleService = CourseModuleService;
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
        this.displayedColumns = ['sl', /*'courseModuleId',*/ 'baseSchoolName', 'courseName', 'moduleName', 'nameOfModule', /*'menuPosition',*/ 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
    }
    ngOnInit() {
        this.getCourseModules();
    }
    getCourseModules() {
        this.isLoading = true;
        this.CourseModuleService.getCourseModules(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {
            this.dataSource.data = response.items;
            this.paging.length = response.totalItemsCount;
            this.isLoading = false;
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.filteredData.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.filteredData.forEach((row) => this.selection.select(row));
    }
    addNew() {
    }
    pageChanged(event) {
        this.paging.pageIndex = event.pageIndex;
        this.paging.pageSize = event.pageSize;
        this.paging.pageIndex = this.paging.pageIndex + 1;
        this.getCourseModules();
    }
    applyFilter(searchText) {
        this.searchText = searchText;
        this.getCourseModules();
    }
    deleteItem(row) {
        const id = row.courseModuleId;
        this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This Course Module Item?').subscribe(result => {
            console.log(result);
            if (result) {
                this.CourseModuleService.delete(id).subscribe(() => {
                    this.getCourseModules();
                    this.snackBar.open('Information Deleted Successfully ', '', {
                        duration: 3000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'right',
                        panelClass: 'snackbar-danger'
                    });
                });
            }
        });
    }
}
CourseModuleListComponent.ɵfac = function CourseModuleListComponent_Factory(t) { return new (t || CourseModuleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_CourseModule_service__WEBPACK_IMPORTED_MODULE_1__.CourseModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_confirm_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmService)); };
CourseModuleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CourseModuleListComponent, selectors: [["app-coursemodule-list"]], decls: 72, vars: 8, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "ngModel", "ngModelChange"], ["filter", ""], [1, "icon-button-demo", "m-l-10"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", "routerLink", "/basic-setup/add-coursemodule", 1, "btn-space"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "sl"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "baseSchoolName"], ["matColumnDef", "courseName"], ["matColumnDef", "moduleName"], ["matColumnDef", "nameOfModule"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "routerLink"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]], template: function CourseModuleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Course Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Course Module");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CourseModuleListComponent_Template_input_ngModelChange_30_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseModuleListComponent_Template_button_click_34_listener() { return ctx.applyFilter(ctx.searchText); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CourseModuleListComponent_mat_header_cell_49_Template, 2, 4, "mat-header-cell", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, CourseModuleListComponent_mat_cell_50_Template, 2, 3, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CourseModuleListComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, CourseModuleListComponent_mat_cell_53_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CourseModuleListComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, CourseModuleListComponent_mat_cell_56_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, CourseModuleListComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, CourseModuleListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, CourseModuleListComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, CourseModuleListComponent_mat_cell_62_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, CourseModuleListComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, CourseModuleListComponent_mat_cell_65_Template, 2, 1, "mat-cell", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](66, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, CourseModuleListComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, CourseModuleListComponent_mat_cell_68_Template, 7, 3, "mat-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, CourseModuleListComponent_mat_header_row_69_Template, 1, 0, "mat-header-row", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, CourseModuleListComponent_mat_row_70_Template, 1, 0, "mat-row", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-paginator", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function CourseModuleListComponent_Template_mat_paginator_page_71_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], styles: [""] });


/***/ }),

/***/ 65960:
/*!****************************************!*\
  !*** ./src/assets/data/master-data.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterData": function() { return /* binding */ MasterData; }
/* harmony export */ });
const MasterData = {
    paging: {
        showFirstLastButtons: true,
        pageIndex: 1,
        pageSize: 10,
        pageSizeOptions: [5, 10, 15, 20, 25, 50, 100, 200, 500, 1000]
    },
    codevaluetype: {
        LocationType: "LocationType",
        ResultStatus: "ResultStatus",
        DeadStatus: "DeadStatus",
        FundingDetail: "FundingDetail",
        ModuleIcon: "Material Icon"
    },
    coursetype: {
        LocalCourse: 3,
        ForeignCourse: 18,
        InterService: 19,
        MIST: 1022,
        CentralExam: 1021,
    },
    classType: {
        Class: 3,
        Exam: 4,
    },
    courseName: {
        QExam: 1252,
        StaffCollage: 1251,
        JCOsTraining: 1253,
    },
    country: {
        bangladesh: 1
    },
    examtypefromcoursetype: {
        centralExam: 1021
    },
    TraineeStatus: {
        officer: 4,
        sailor: 5,
        civil: 6
    },
    OfficerType: {
        Bangladesh: 1,
        Foreign: 2
    },
    branch: {
        all: 0,
        mpa: 1,
        hel: 2,
        uav: 4
    },
};


/***/ })

}]);