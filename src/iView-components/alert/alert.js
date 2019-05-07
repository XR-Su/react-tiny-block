/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-03
 */
import React, { Component } from "react";
import "./alert.scss";

const getUuid = (() => {
  let seed = 0;
  return () => "alert_" + seed++;
})();

const _initialise = _this => {
  _this.add = notice => {
    const name = getUuid();
    let _notice = { ...notice, name };
    _this.setState(preState => ({ notices: [...preState.notices, _notice] }));

    const duration = notice.duration;
    setTimeout(() => {
      _this.remove(name);
    }, duration);
  };
  _this.remove = name => {
    const { notices } = _this.state;
    let newNotices = [...notices];
    for (let i = 0; i < notices.length; i++) {
      if (notices[i].name === name) {
        newNotices.splice(i, 1);
        _this.setState({ notices: newNotices });
        break;
      }
    }
  };
};

export default class Alert extends Component {
  constructor(props) {
    super(props);
    _initialise(this);
    this.state = {
      notices: []
    };
  }
  renderAlertNotices = () => {
    const { notices } = this.state;
    return notices.map(notice => (
      <div className="alert-content" key={notice.name}>
        {notice.content}
      </div>
    ));
  };
  render() {
    const { renderAlertNotices } = this;
    return (
      <div className="alert">
        <div className="alert-main">{renderAlertNotices()}</div>
      </div>
    );
  }
}
