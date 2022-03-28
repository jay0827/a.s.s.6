import { SurveyModel } from "../src/survey";

import { QuestionSelectBase } from "../src/question_baseselect";
import { settings } from "../src/settings";
import { QuestionRadiogroupModel } from "../src/question_radiogroup";
import { QuestionImagePickerModel } from "../src/question_imagepicker";
import { QuestionButtonGroupModel } from "../src/question_buttongroup";
import { Serializer } from "../src/jsonobject";

export default QUnit.module("baseselect");

function getValuesInColumns(question: QuestionSelectBase) {
  return question.columns.map((column) => column.map((choice) => choice.value));
}

QUnit.test("Check QuestionSelectBase columns property", function (assert) {
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "Question 1",
        choices: ["Item1", "Item2", "Item3", "Item4", "Item5"],
        colCount: 3,
      },
    ],
  };
  var survey = new SurveyModel(json);

  var question = <QuestionSelectBase>survey.getAllQuestions()[0];
  var columns = getValuesInColumns(question);
  assert.deepEqual(
    columns,
    [["Item1", "Item4"], ["Item2", "Item5"], ["Item3"]],
    "check showItemsBy row"
  );
  settings.showItemsInOrder = "column";
  columns = getValuesInColumns(question);
  assert.deepEqual(
    columns,
    [["Item1", "Item2"], ["Item3", "Item4"], ["Item5"]],
    "check showItemsBy column"
  );
});

QUnit.test("Check QuestionSelectBase head and foot items property", function (assert) {
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "Question 1",
        choices: ["Item1", "Item2", "Item3", "Item4", "Item5"],
        colCount: 3,
      },
    ],
  };
  var survey = new SurveyModel(json);

  var question = <QuestionSelectBase>survey.getAllQuestions()[0];
  assert.notOk(question.hasHeadItems);
  assert.notOk(question.hasFootItems);

  var columns = getValuesInColumns(question);
  columns = getValuesInColumns(question);
  settings.showItemsInOrder = "column";
  assert.deepEqual(
    columns,
    [["Item1", "Item2"], ["Item3", "Item4"], ["Item5"]],
    "check showItemsBy col - runtime"
  );

  survey.setDesignMode(true);
  settings.supportCreatorV2 = true;
  (<any>question).updateVisibleChoices();
  assert.ok(question.hasHeadItems);
  assert.ok(question.hasFootItems);
  columns = getValuesInColumns(question);
  assert.deepEqual(
    columns,
    [["Item1", "Item2"], ["Item3", "Item4"], ["Item5"]],
    "check showItemsBy col - design"
  );
  let headItems = question.headItems.map((item) => item.value);
  let footItems = question.footItems.map((item) => item.value);

  assert.deepEqual(
    headItems,
    ["selectall"],
    "check head items"
  );
  assert.deepEqual(
    footItems,
    ["newitem", "none", "other"],
    "check foot items"
  );
  settings.showItemsInOrder = "row";
  settings.supportCreatorV2 = false;
});

QUnit.test("Check QuestionSelectBase and separateSpecialChoices option", function (assert) {
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "Question 1",
        choices: ["Item1", "Item2"],
        hasOther: true,
        hasSelectAll: true,
        hasNone: true,
        colCount: 2
      },
    ],
  };
  var survey = new SurveyModel(json);

  var question = <QuestionSelectBase>survey.getAllQuestions()[0];
  question.separateSpecialChoices = false;
  assert.notOk(question.hasHeadItems);
  assert.notOk(question.hasFootItems);

  var columns = getValuesInColumns(question);
  columns = getValuesInColumns(question);
  settings.showItemsInOrder = "column";
  assert.deepEqual(
    columns,
    [["selectall", "Item2", "other"], ["Item1", "none"]],
    "check columns with no separateSpecialChoices"
  );

  question.separateSpecialChoices = true;
  assert.ok(question.hasHeadItems);
  assert.ok(question.hasFootItems);

  columns = getValuesInColumns(question);
  assert.deepEqual(
    columns,
    [["Item1"], ["Item2"]],
    "check columns with separateSpecialChoices"
  );
  let headItems = question.headItems.map((item) => item.value);
  let footItems = question.footItems.map((item) => item.value);

  assert.deepEqual(
    headItems,
    ["selectall"],
    "check head items"
  );
  assert.deepEqual(
    footItems,
    ["none", "other"],
    "check foot items"
  );
  settings.showItemsInOrder = "row";
  settings.supportCreatorV2 = false;
});

QUnit.test("Set ", function (assert) {
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "q1",
        choicesByUrl: {
          path: "path1",
          valueName: "val1",
        },
      },
      {
        type: "checkbox",
        name: "q2",
        choicesByUrl: {
          path: "path2",
          titleName: "title1",
        },
      },
    ],
  };
  var survey = new SurveyModel(json);
  var q1 = <QuestionSelectBase>survey.getQuestionByName("q1");
  var q2 = <QuestionSelectBase>survey.getQuestionByName("q2");
  q2.choicesByUrl = q1.choicesByUrl;
  assert.equal(q2.choicesByUrl.path, "path1", "path set correctly");
  assert.equal(q2.choicesByUrl.valueName, "val1", "valueName set correctly");
  assert.equal(q2.choicesByUrl.titleName, "", "titleName is cleard");
});
QUnit.test("check allowhover class in design mode", (assert) => {
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "q1",
        choices: ["Item 1"],
      },
    ],
  };
  const survey = new SurveyModel(json);
  const q1 = <QuestionSelectBase>survey.getQuestionByName("q1");
  q1.cssClasses.itemHover = "sv_q_checkbox_hover";
  const item = q1.visibleChoices[0];
  assert.ok(q1.getItemClass(item).indexOf("sv_q_checkbox_hover") != -1);
  survey.setDesignMode(true);
  assert.ok(q1.getItemClass(item).indexOf("sv_q_checkbox_hover") == -1);
});
QUnit.test("check item value type", (assert) => {
  const survey = new SurveyModel({
    questions: [
      {
        type: "dropdown",
        name: "q1",
        choices: ["Item 1"],
      },
      {
        type: "imagepicker",
        name: "q2",
        choices: ["Item 1"],
      },
      {
        type: "buttongroup",
        name: "q3",
        choices: ["Item 1"],
      },
    ],
  });
  const q1 = <QuestionSelectBase>survey.getQuestionByName("q1");
  const q2 = <QuestionSelectBase>survey.getQuestionByName("q2");
  const q3 = <QuestionSelectBase>survey.getQuestionByName("q3");
  assert.equal(q1.choices[0].getType(), "itemvalue", "load dropdown");
  assert.equal(q1.choices[0].value, "Item 1", "load dropdown, value");
  assert.equal(q2.choices[0].getType(), "imageitemvalue", "load imagepicker");
  assert.equal(q2.choices[0].value, "Item 1", "load imagepicker value");
  assert.equal(q3.choices[0].getType(), "buttongroupitemvalue", "load buttongroup");
  assert.equal(q3.choices[0].value, "Item 1", "load buttongroup value");
  assert.equal(q1.createItemValue(1).getType(), "itemvalue", "create dropdown item");
  assert.equal(q1.createItemValue(1).value, 1, "create dropdown, value");
  assert.equal(q2.createItemValue(1).getType(), "imageitemvalue", "create imagepicker item");
  assert.equal(q2.createItemValue(1).value, 1, "create imagepicker, value");
  assert.equal(q3.createItemValue(1).getType(), "buttongroupitemvalue", "create buttongroup item");
  assert.equal(q3.createItemValue(1).value, 1, "create buttongroup, value");
});

QUnit.test("check item locstring owner and name", (assert) => {
  const survey = new SurveyModel({
    questions: [
      {
        type: "radiogroup",
        name: "q1",
        choices: ["Item 1"],
      }]
  });

  var question = survey.getQuestionByName("q1") as any;
  assert.equal(question.locTitle.owner.getType(), "radiogroup", "Owner for radio question title is radiogroup");
  assert.equal(question.locTitle.name, "title", "Name for radio question title is title");
  var itemValue = (question.choices[0]);
  assert.equal(itemValue.locText.owner.getType(), "itemvalue", "Owner for radio question item text is itemvalue");
  assert.equal(itemValue.locText.name, "text", "Name for radio question item text is text");
});

QUnit.test("check onShowingChoiceItem event", (assert) => {
  const survey = new SurveyModel({
    questions: [
      {
        type: "radiogroup",
        name: "q1",
        choices: [{ value: "Item1", visibleIf: "1 = 2" }, "Item2", "Item3"],
        hasNone: true,
        hasOther: true
      }]
  });

  const question = <QuestionRadiogroupModel>survey.getQuestionByName("q1");
  assert.equal(question.visibleChoices.length, 4);
  assert.equal(question.visibleChoices[0].value, "Item2");
  assert.equal(question.visibleChoices[1].value, "Item3");
  assert.equal(question.visibleChoices[2].value, "none");
  assert.equal(question.visibleChoices[3].value, "other");

  survey.onShowingChoiceItem.add((sender, options) => {
    if (options.question.name !== "q1") return;
    options.visible = ["Item1", "Item2"].indexOf(options.item.value) > -1;
  });

  assert.equal(question.visibleChoices.length, 2);
  assert.equal(question.visibleChoices[0].value, "Item1");
  assert.equal(question.visibleChoices[1].value, "Item2");
});

QUnit.test("check focus comment of other select", (assert) => {
  const survey = new SurveyModel({
    questions: [
      {
        type: "checkbox",
        name: "q1",
        hasOther: true,
        choices: ["item1"]
      }
    ]
  });
  let counter = 0;
  const q = survey.getQuestionByName("q1");
  q["focusOtherComment"] = () => {
    counter ++;
  };
  assert.equal(counter, 0);
  q.value = ["other"];
  assert.equal(counter, 1);
  q.value = ["other", "item1"];
  assert.equal(counter, 1);
  q.value = ["item1"];
  assert.equal(counter, 1);
  q.value = ["item1", "other"];
  assert.equal(counter, 2);
});
QUnit.test("check separateSpecialChoices property visibility", (assert) => {
  assert.notOk(Serializer.findProperty("selectbase", "separateSpecialChoices").visible);
  assert.ok(Serializer.findProperty("checkbox", "separateSpecialChoices").visible);
  assert.ok(Serializer.findProperty("radiogroup", "separateSpecialChoices").visible);
  assert.notOk(Serializer.findProperty("imagepicker", "separateSpecialChoices").visible);
  assert.notOk(Serializer.findProperty("dropdown", "separateSpecialChoices").visible);
});