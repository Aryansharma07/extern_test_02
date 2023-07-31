import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import Scale, { verticalScale } from "../../screens/utils/Scale";
import Fontbook from "../../screens/utils/FontBook";

const CustomButton = ({
    buttonText,
    onPress,
    type,
    img,
    shiftLeft,
    socialBtn
}) => {

    return (
        <TouchableOpacity style={
            [styles.Container,
            styles[`Container_${type}`],
            { marginHorizontal: !socialBtn ? 17 : 0 }
            ]}
            onPress={onPress}
        >
            {img}
            <Text style={{
                color: type == "THIRD" ? '#058945' : type == "FOURTH" ? '#94A3BB' : type == 'FIFTH' ? '#000' : '#fff',
                // fontWeight: 600,
                fontSize: Scale(18),
                fontFamily: Fontbook.bold
            }}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 6,
        height: verticalScale(50),
        elevation: 1,
        marginVertical: Scale(10),
        marginHorizontal: Scale(17)
    },
    Container_PRIMARY: {
        backgroundColor: '#058945',
    },
    Container_SECONDARY: {
        borderWidth: 1,
        borderColor: '#fff',
        borderColor: '#058945'
    },
    Container_THIRD: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#058945',
    },
    Container_FOURTH: {
        backgroundColor: '#E2EBF0',
        borderWidth: 1,
        borderColor: '#E2EBF0',
    },
    Container_FIFTH: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000',
    }
});
