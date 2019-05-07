/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-04
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./table.scss";

const getUuid = (() => {
  let seed = 0;
  return () => seed++;
})();

export default class Table extends Component {
  renderTableHeader = () => {
    const { columns } = this.props;
    const ths = columns.map(col => <th key={col.title}>{col.title}</th>);
    return (
      <thead>
        <tr>{ths}</tr>
      </thead>
    );
  };
  renderTableBody = () => {
    const { data, columns } = this.props;
    const trs = data.map((row, index) => (
      <tr key={getUuid()}>
        {columns.map(col => {
          if ("render" in col) {
            return (
              <td key={col.key}>
                {typeof col.render == "function"
                  ? col.render(row[col.key], row, index)
                  : col.render}
              </td>
            );
          } else {
            return <td key={col.key}>{row[col.key]}</td>;
          }
        })}
      </tr>
    ));
    return <tbody>{trs}</tbody>;
  };
  render() {
    const { renderTableHeader, renderTableBody } = this;
    return (
      <table>
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

Table.defaultProps = {
  columns: [],
  data: []
};
