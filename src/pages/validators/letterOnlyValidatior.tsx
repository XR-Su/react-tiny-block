import { StringValidator } from "./validation";

const letterRegexp = /^[A-Za-z]+$/;

export default class LetterOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return letterRegexp.test(s)
  }
}
