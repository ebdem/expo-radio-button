import { View } from "react-native";
import React, { createContext } from "react";

export const RadioGroupContext = createContext({});
const { Provider } = RadioGroupContext;

export default function RadioButtonGroup(props) {
  const {
    selected,
    size,
    onSelected,
    children,
    containerStyle,
    containerOptionStyle,
    radioStyle,
    radioBackground,
    labelStyle,
  } = props;

  return (
    <Provider
      value={{
        onSelected,
        selected,
        containerOptionStyle,
        radioStyle,
        radioBackground,
        labelStyle,
        size,
      }}
    >
      <View style={containerStyle}>{children}</View>
    </Provider>
  );
}
