/**
 * @Name:
 * @Description: alert 组件的挂载实现
 * @author RiSusss
 * @date 2019-05-03
 */
import React from "react";
import ReactDom from "react-dom";
import Alert from "./alert";

const getContainer = (() => {
  let container;
  return () => {
    if (!container) {
      container = document.createElement("div");
      container.style.cssText = ";position: absolute;width: 100%;top:0;left:0;";
      document.body.append(container);
    }
    return container;
  };
})();

Alert.newInstance = (properties, callback) => {
  const props = properties || {};
  const container = getContainer();
  // 重点！将 Alert 实例化
  ReactDom.render(
    React.createElement(Alert, { ...props, ref: ref }),
    container
  );

  // 对外暴露出 add、remove 两个接口
  function ref(alert) {
    callback({
      add: alertProps => {
        alert.add(alertProps);
      },
      remove: name => {
        alert.remove(name);
      }
    });
  }
};

export default Alert;
