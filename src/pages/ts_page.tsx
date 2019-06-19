import React, { Component } from "react";
import { LetterOnlyValidator, ZipCodeValidator } from "./validators";
import { StringValidator } from "./validators/validation";

export default class TsxPage extends Component {
  private validators: { [s: string]: StringValidator } = {};
  constructor(props: object) {
    super(props);
    this.validators["ZIP Code"] = new ZipCodeValidator();
    this.validators["Letter only"] = new LetterOnlyValidator();
  }
  componentWillMount() {}
  render() {
    const isAcceptable: boolean = this.validators["ZIP Code"].isAcceptable('98052');
    return (
      <div>
        tsx
        <p>{isAcceptable ? "t" : "f"}</p>
      </div>
    );
  }
}
