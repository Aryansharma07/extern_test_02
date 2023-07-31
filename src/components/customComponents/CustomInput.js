import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Scale, { verticalScale } from '../../utils/Scale';
import Fontbook from '../../utils/FontBook'
const CustomInput = ({
  defaultValue,
  setValue,
  value,
  label,
  keyboardType,
  secureTextEntry,
  required,
  rightIcon,
  editable,
  maxLength,
}) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ marginHorizontal: Scale(17), marginVertical: Scale(10), }}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={[
        styles.container,
        isFocused || value !== ''
          ? styles.focusStyle
          : null]}>
        <TextInput
          style={styles.inputContainer}
          onChangeText={setValue}
          //value={value}
          value={value ? String(value) : value}
          defaultValue={defaultValue}
          autoComplete="off"
          secureTextEntry={secureTextEntry}
          onFocus={() => { setIsFocused(true); }}
          onBlur={() => { setIsFocused(false) }}
          keyboardType={keyboardType}
          editable={editable}
          maxLength={maxLength}
        />
        {rightIcon}
      </View>
    </View>
  )
}

export default CustomInput;

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  container: {
    backgroundColor: '#F6F6F6',
    borderRadius: Scale(6),
    marginTop: verticalScale(5),
    paddingHorizontal: Scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation:2

  },
  focusStyle: {
    // marginVertical:5,
    borderWidth: Scale(1),
    borderRadius: Scale(4),
    borderColor: '#058945',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2
  },
  inputContainer: {
    alignContent: 'center',
    position: 'relative',
    height: verticalScale(50),
    paddingVertical: verticalScale(10),
    fontSize: Scale(14),
    fontWeight: '600',
    color: '#3C3C3C',
    flex: 1,
  },
  labelText: {
    fontSize: Scale(12),
    color: '#3C3C3C',
    fontFamily: Fontbook.regular,
  },
})
