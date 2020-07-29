import React from "react";
import { View, StyleProp, ViewStyle, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

interface InterfaceProps {
  children: any;
  style?: StyleProp<ViewStyle>;
  props: any;
}

const TestTs = ({children, style, ...props }:InterfaceProps) => {
    const dispatch = useDispatch();
    const store = useSelector((store: { store: any }) => store.store);
    return (
        <View>
            <Text>TestTs</Text>
            {children}
        </View>
    )
}

export default TestTs
