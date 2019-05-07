/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/5/6
 */
import React from "react";

const TreeContext = React.createContext();
export const TreeProvider = TreeContext.Provider;
export const TreeConsumer = TreeContext.Consumer;

export default TreeContext;
