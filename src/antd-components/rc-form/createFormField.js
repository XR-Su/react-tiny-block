/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/29
 */

class Field {
  constructor(field) {
    for (let key in field) {
      this[key] = field[key];
    }
  }
}

export function isFormField(obj) {
  return obj instanceof Field;
}

export default function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }
  return new Field(field);
}
