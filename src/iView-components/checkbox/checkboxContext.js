/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-03
 */
import React from "react";

const CheckboxContext = React.createContext();
export const CheckboxProvider = CheckboxContext.Provider;
export const CheckboxConsumer = CheckboxContext.Consumer;
export default CheckboxContext;
