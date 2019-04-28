/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/26
 */

export const setDomStyle = (target_dom, style_obj) => {
  let style_str = ";";
  for (let key in style_obj) {
    style_str += key + ":" + style_obj[key] + ";";
  }
  target_dom.style.cssText = style_str;
};

export const extractPropertise = (obj, keys) => {
  let target = {};
  for (let key in obj) {
    if (keys.indexOf(key) == -1) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue; // ???
    target[key] = obj[key];
  }
  return target;
};

export const containDomNode = (target, container) => {
  let node = container;
  while (node) {
    if (target === container) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
