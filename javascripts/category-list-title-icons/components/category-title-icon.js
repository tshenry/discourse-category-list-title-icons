import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
export default Component.extend({
  categoryIconURL: null,
  @discourseComputed("category.id")
  categoryIconURL(category_id) {
    const rawSettings = settings.category_title_images.split("|")
    const rawCategoryImagePair = rawSettings.find(rawSetting => {
      const splitSetting = rawSetting.split(",");
      return parseInt(splitSetting[0]) === category_id;
    });

    if(rawCategoryImagePair) {
      return rawCategoryImagePair.split(",")[1];
    }
  },
});
