import QuestionDateModel from "../question_date";
import { Question, Serializer, QuestionFactory } from "survey-core";
import { QuestionImplementor } from "../../knockout/koquestion";

export class QuestionDateImplementor extends QuestionImplementor {
  constructor(question: Question) {
    super(question);
    (<any>this.question)["dateId"] = this.inputId;
  }
  protected koQuestionAfterRender(el: any, con: any) {
    eval(con.getjQueryScript(con["dateId"]));
  }
  private get inputId() {
    return "date_" + this.question.id;
  }
}

export class QuestionDate extends QuestionDateModel {
  constructor(name: string) {
    super(name);
    new QuestionDateImplementor(this);
  }
}

//Tell json serializer and survey editor to create exactly this class. Override it from the model that doesn't have any rendering functionality.
Serializer.overrideClassCreator("date", function () {
  return new QuestionDate("");
});
QuestionFactory.Instance.registerQuestion("date", (name) => {
  return new QuestionDate(name);
});
