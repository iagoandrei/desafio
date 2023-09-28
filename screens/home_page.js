import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';

const styles = {
  title: {
    fontFamily: 'Roboto',
    fontSize: 33,
    fontWeight: '700',
    lineHeight: 38,
    letterSpacing: 0.8,
    textAlign: 'left',
    marginTop: 40
  },
  buttonContainer: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 40,
    marginTop: 105
  },
  errorText: {
    color: 'red'
  }
};


const validationSchema = Yup.object().shape({
  numberField: Yup.number().typeError('Apenas números são permitidos').required('Campo obrigatório').test('hasValid', 'Código inválido', function(value) {
    return value === 123456
  }),
});


export default function HomePage({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: 'white',
      flex: 1
    }}>
      <Text style={styles.title}>Insira o código enviado para o seu E-mail.</Text>
      <Formik
        initialValues={{ numberField: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate('Success')
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              placeholder="000000"
              keyboardType="numeric" 
              onChangeText={formikProps.handleChange('numberField')}
              onBlur={formikProps.handleBlur('numberField')}
              value={formikProps.values.numberField}
              style={styles.inputContainer}
            />
            {formikProps.touched.numberField && formikProps.errors.numberField ? (
              <Text style={styles.errorText}>{formikProps.errors.numberField}</Text>
            ) : null}

            <TouchableOpacity style={styles.buttonContainer} onPress={formikProps.handleSubmit}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}