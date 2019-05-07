/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-03
 */
import Notification from "./notification";

let messageInstance;

// 单例模式
const getMessageInstance = callback => {
  if (messageInstance) {
    callback(messageInstance);
  } else {
    Notification.newInstance({}, callback);
  }
};

const notice = ({ duration = 1000, content = "" }) => {
  getMessageInstance(getInstance);
  function getInstance(instance) {
    messageInstance = instance;
    instance.add({ ...{ duration, content } });
  }
};

export default {
  info(options) {
    return notice(options);
  }
};
