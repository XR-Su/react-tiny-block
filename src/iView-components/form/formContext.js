/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-05-02
 */
import React from "react";

const FormContext = React.createContext();
export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;
export default FormContext;
