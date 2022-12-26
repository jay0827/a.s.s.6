export var defaultCss = {
  root: "sv_main sv_bootstrap_css",
  container: "sv_container",
  header: "panel-heading card-header",
  body: "panel-body card-block mt-4",
  bodyEmpty: "panel-body card-block mt-4 sv_body_empty",
  footer: "panel-footer card-footer",
  title: "",
  description: "",
  logo: "sv_logo",
  logoImage: "sv_logo__image",
  headerText: "sv_header__text",
  navigationButton: "btn sv_nav_btn",
  completedPage: "",
  navigation: {
    complete: "sv_complete_btn",
    prev: "sv_prev_btn",
    next: "sv_next_btn",
    start: "sv_start_btn",
    preview: "sv_preview_btn",
    edit: "sv_edit_btn",
  },
  progress: "progress center-block mx-auto mb-4",
  progressBar: "progress-bar",
  progressTextUnderBar: "sv-hidden",
  progressTextInBar: "sv-hidden",
  progressButtonsContainerCenter: "sv_progress-buttons__container-center",
  progressButtonsContainer: "sv_progress-buttons__container",
  progressButtonsImageButtonLeft: "sv_progress-buttons__image-button-left",
  progressButtonsImageButtonRight: "sv_progress-buttons__image-button-right",
  progressButtonsImageButtonHidden: "sv_progress-buttons__image-button--hidden",
  progressButtonsListContainer: "sv_progress-buttons__list-container",
  progressButtonsList: "sv_progress-buttons__list",
  progressButtonsListElementPassed: "sv_progress-buttons__list-element--passed",
  progressButtonsListElementCurrent:
    "sv_progress-buttons__list-element--current",
  progressButtonsListElementNonClickable:
    "sv_progress-buttons__list-element--nonclickable",
  progressButtonsPageTitle: "sv_progress-buttons__page-title",
  progressButtonsPageDescription: "sv_progress-buttons__page-description",
  page: {
    root: "",
    title: "",
    description: "small",
  },
  pageTitle: "",
  pageDescription: "small",
  row: "sv_row",
  question: {
    mainRoot: "sv_qstn",
    flowRoot: "sv_q_flow sv_qstn",
    header: "",
    headerLeft: "title-left",
    content: "",
    contentLeft: "content-left",
    titleLeftRoot: "sv_qstn_left",
    title: "",
    titleExpandable: "sv_q_title_expandable",
    titleExpanded: "sv_q_title_expanded",
    titleCollapsed: "sv_q_title_collapsed",
    number: "sv_q_num",
    description: "small",
    descriptionUnderInput: "small",
    requiredText: "sv_q_required_text",
    comment: "form-control",
    required: "",
    titleRequired: "",
    hasError: "has-error",
    indent: 20,
    formGroup: "form-group",
    disabled: "sv_q--disabled",
  },
  panel: {
    title: "sv_p_title",
    titleExpandable: "sv_p_title_expandable",
    titleExpanded: "sv_p_title_expanded",
    titleCollapsed: "sv_p_title_collapsed",
    titleOnError: "",
    icon: "sv_panel_icon",
    iconExpanded: "sv_expanded",
    description: "small sv_p_description",
    container: "sv_p_container",
    footer: "sv_p_footer",
    number: "sv_q_num",
    requiredText: "sv_q_required_text",
  },
  error: {
    root: "alert alert-danger",
    icon: "glyphicon glyphicon-exclamation-sign",
    item: "",
    locationTop: "sv_qstn_error_top",
    locationBottom: "sv_qstn_error_bottom",
  },
  boolean: {
    root: "sv_qbln form-inline checkbox",
    rootRadio: "sv_qbln form-inline checkbox",
    item: "sv-boolean",
    control: "sv-visuallyhidden",
    controlCheckbox: "sv-visuallyhidden",
    itemChecked: "sv-boolean--checked checked",
    itemIndeterminate: "sv-boolean--indeterminate",
    itemDisabled: "sv-boolean--disabled",
    switch: "sv-boolean__switch",
    slider: "sv-boolean__slider",
    label: "sv-boolean__label ",
    disabledLabel: "sv-boolean__label--disabled",
    materialDecorator: "sv-item__decorator sv-boolean__decorator",
    itemDecorator: "sv-item__svg sv-boolean__svg",
    checkedPath: "sv-boolean__checked-path",
    uncheckedPath: "sv-boolean__unchecked-path",
    indeterminatePath: "sv-boolean__indeterminate-path",
  },
  checkbox: {
    root: "sv_qcbc sv_qcbx form-inline",
    item: "checkbox",
    itemChecked: "checked",
    itemSelectAll: "sv_q_checkbox_selectall",
    itemNone: "sv_q_checkbox_none",
    itemInline: "sv_q_checkbox_inline",
    itemControl: "",
    itemDecorator: "sv-hidden",
    label: "",
    labelChecked: "",
    controlLabel: "",
    materialDecorator: "checkbox-material",
    other: "sv_q_checkbox_other form-control",
    column: "sv_q_select_column",
  },
  ranking: {
    root: "sv-ranking",
    rootMobileMod: "sv-ranking--mobile",
    rootDragMod: "sv-ranking--drag",
    rootDisabled: "sv-ranking--disabled",
    item: "sv-ranking-item",
    itemContent: "sv-ranking-item__content",
    itemIndex: "sv-ranking-item__index",
    // itemText: "sv-ranking-item__text",
    controlLabel: "sv-ranking-item__text",
    itemGhostNode: "sv-ranking-item__ghost",
    itemIconContainer: "sv-ranking-item__icon-container",
    itemIcon: "sv-ranking-item__icon",
    itemIconHoverMod: "sv-ranking-item__icon--hover",
    itemIconFocusMod: "sv-ranking-item__icon--focus",
    itemGhostMod: "sv-ranking-item--ghost",
    itemDragMod: "sv-ranking-item--drag",
  },
  comment: "form-control",
  dropdown: {
    root: "sv_q_dd_root",
    selectWrapper: "sv_q_dd_select_wrapper",
    control: "form-control sv_q_dd_control",
    controlValue: "sv_q_dd_value",
    other: "sv_q_dd_other form-control",
    cleanButton: "sv_q_dd_clean-button",
    cleanButtonSvg: "sv_q_dd_clean-button-svg",
    cleanButtonIconId: "icon-clear_16x16",
    filterStringInput: "sv_q_dd_filter-string-input",
  },
  tagbox: {
    root: "sv_q_dd_root",
    selectWrapper: "sv_q_dd_select_wrapper",
    control: "form-control sv_q_dd_control",
    controlValue: "sv_q_dd_value",
    other: "sv_q_dd_other form-control",
    cleanButton: "sv_q_dd_clean-button",
    cleanButtonSvg: "sv_q_dd_clean-button-svg",
    cleanButtonIconId: "icon-clear_16x16",
    filterStringInput: "sv_q_dd_filter-string-input",
  },
  html: { root: "" },
  image: { root: "sv_q_image", image: "sv_image_image" },
  matrix: {
    root: "table sv_q_matrix",
    label: "sv_q_m_label",
    itemChecked: "checked",
    itemDecorator: "sv-hidden",
    cellText: "sv_q_m_cell_text",
    cellTextSelected: "sv_q_m_cell_selected bg-primary",
    cellLabel: "sv_q_m_cell_label",
    cellResponsiveTitle: "sv-hidden"
  },
  matrixdropdown: {
    root: "table",
    cell: "sv_matrix_cell",
    headerCell: "sv_matrix_cell_header",
    row: "sv_matrix_row",
    rowAdditional: "sv-matrix__row--additional",
    detailRow: "sv_matrix_detail_row",
    detailRowText: "sv_matrix_cell_detail_rowtext",
    detailCell: "sv_matrix_cell_detail",
    detailButton: "sv_matrix_cell_detail_button",
    detailButtonExpanded: "sv_matrix_cell_detail_button_expanded",
    detailIcon: "sv_detail_panel_icon",
    detailIconExpanded: "sv_detail_expanded",
    detailPanelCell: "sv_matrix_cell_detail_panel",
    actionsCell: "sv_matrix_cell sv_matrix_cell_actions",
  },
  matrixdynamic: {
    root: "table",
    button: "button",
    buttonAdd: "",
    buttonRemove: "",
    iconAdd: "",
    iconRemove: "",
    iconDrag: "sv-matrixdynamic__drag-icon",
    headerCell: "sv_matrix_cell_header",
    row: "sv_matrix_row",
    detailRow: "sv_matrix_detail_row",
    detailCell: "sv_matrix_cell_detail",
    detailButton: "sv_matrix_cell_detail_button",
    detailButtonExpanded: "sv_matrix_cell_detail_button_expanded",
    detailIcon: "sv_detail_panel_icon",
    detailIconExpanded: "sv_detail_expanded",
    detailPanelCell: "sv_matrix_cell_detail_panel",
    actionsCell: "sv_matrix_cell sv_matrix_cell_actions",
    emptyRowsSection: "sv_matrix_empty_rows_section",
    emptyRowsText: "sv_matrix_empty_rows_text",
    emptyRowsButton: "",
    ghostRow: "sv-matrix-row--drag-drop-ghost-mod"
  },
  paneldynamic: {
    root: "",
    navigation: "sv-paneldynamic__navigation",
    progressTop: "sv-paneldynamic__progress sv-paneldynamic__progress--top",
    progressBottom:
      "sv-paneldynamic__progress sv-paneldynamic__progress--bottom",
    title: "sv-title sv-question__title",
    button: "button",
    buttonAdd: "button sv-paneldynamic__add-btn",
    buttonRemove: "sv_p_remove_btn",
    buttonRemoveRight: "button sv-paneldynamic__remove-btn--right",
    buttonPrev: "sv-paneldynamic__prev-btn",
    buttonNext: "sv-paneldynamic__next-btn",
    buttonPrevDisabled: "sv-paneldynamic__prev-btn--disabled",
    buttonNextDisabled: "sv-paneldynamic__next-btn--disabled",
    progressContainer: "sv-paneldynamic__progress-container",
    progress: "sv-progress",
    progressBar: "sv-progress__bar",
    progressText: "sv-paneldynamic__progress-text",
    panelWrapper: "sv_p_wrapper",
    panelWrapperInRow: "sv_p_wrapper_in_row",
    footer: "",
    progressBtnIcon: "icon-progressbutton"
  },
  multipletext: {
    root: "sv_q_mt table",
    itemTitle: "sv_q_mt_title",
    item: "sv_q_mt_item",
    itemLabel: "sv_q_mt_label",
    row: "form-group bmd-form-group",
    itemValue: "sv_q_mt_item_value form-control",
  },
  radiogroup: {
    root: "sv_qcbc form-inline",
    item: "radio",
    itemChecked: "checked",
    itemInline: "sv_q_radiogroup_inline",
    label: "",
    labelChecked: "",
    itemControl: "",
    itemDecorator: "sv-hidden",
    controlLabel: "",
    materialDecorator: "circle",
    other: "sv_q_radiogroup_other form-control",
    clearButton: "sv_q_radiogroup_clear button",
    column: "sv_q_select_column",
  },
  buttongroup: {
    root: "sv-button-group",
    item: "sv-button-group__item",
    itemIcon: "sv-button-group__item-icon",
    itemDecorator: "sv-button-group__item-decorator",
    itemCaption: "sv-button-group__item-caption",
    itemHover: "sv-button-group__item--hover",
    itemSelected: "sv-button-group__item--selected",
    itemDisabled: "sv-button-group__item--disabled",
    itemControl: "sv-visuallyhidden",
  },
  imagepicker: {
    root: "sv_imgsel",
    item: "sv_q_imgsel",
    itemChecked: "checked",
    itemInline: "sv_q_imagepicker_inline",
    label: "sv_q_imgsel_label",
    itemControl: "sv_q_imgsel_control_item",
    image: "sv_q_imgsel_image",
    itemText: "sv_q_imgsel_text",
    clearButton: "sv_q_radiogroup_clear",
  },
  rating: {
    root: "btn-group",
    item: "btn btn-default btn-secondary",
    selected: "active",
    minText: "sv_q_rating_min_text",
    itemText: "sv_q_rating_item_text",
    maxText: "sv_q_rating_max_text",
    disabled: "",
  },
  text: "form-control",
  expression: "form-control",
  file: {
    root: "sv_q_file",
    placeholderInput: "sv_q_file_placeholder",
    preview: "sv_q_file_preview",
    removeButton: "sv_q_file_remove_button",
    fileInput: "sv_q_file_input",
    removeFile: "sv_q_file_remove",
    fileDecorator: "sv-hidden",
    fileSign: "sv_q_file_sign",
    removeButtonBottom: "sv-hidden",
    dragAreaPlaceholder: "sv-hidden",
    fileList: "",
  },
  signaturepad: {
    root: "sv_q_signaturepad sjs_sp_container",
    controls: "sjs_sp_controls",
    placeholder: "sjs_sp_placeholder",
    clearButton: "sjs_sp_clear",
  },
  saveData: {
    root: "",
    saving: "alert alert-info",
    error: "alert alert-danger",
    success: "alert alert-success",
    saveAgainButton: "",
  },
  window: {
    root: "modal-content",
    body: "modal-body",
    header: {
      root: "modal-header panel-title",
      title: "pull-left",
      button: "glyphicon pull-right",
      buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
      buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down",
    },
  },
};