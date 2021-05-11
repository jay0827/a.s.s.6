import * as ko from "knockout";
import { SurveyModel } from "../../survey";
import { SurveyTemplateRendererViewModel } from "../../template-renderer";

ko.components.register(SurveyModel.TEMPLATE_RENDERER_COMPONENT_NAME, {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel) => {
      return params;
    }
  },
  template: "<!-- ko template: { name: templateData.name, data: templateData.data, afterRender: templateData.afterRender } --><!-- /ko -->"
});