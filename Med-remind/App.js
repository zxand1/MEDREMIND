
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("Informe seu usuário"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 digitos").required("informe sua senha"),
})

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })


  function handleSighIn(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/wallpapper.png')} style={styles.ImageBackground}>
        <View testID='name'>
          <Text style={styles.text}>  Med</Text>
          <Text style={styles.text}>Remind</Text>
        </View>
        <View>
          <Text style={styles.textlogin}>Faça o Login:</Text>
          <Controller
            control={control}
            name='username'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input, {
                    borderWidth: errors.username && 1,
                    borderColor: errors.username && '#ff375b'
                  }
                ]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textiput é tocado.
                value={value}
                placeholder='Usuário'
                placeholderTextColor='rgba(255, 255, 255, 0.5)'
              />
            )}
          />
          {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input, {
                    borderWidth: errors.password && 1,
                    borderColor: errors.password && '#ff375b'
                  }
                ]}
                onChangeText={onChange}
                onBlur={onBlur}//chamado quando o textiput é tocado.
                value={value}
                placeholder='Senha'
                placeholderTextColor='rgba(255, 255, 255, 0.5)'
                secureTextEntry={true}
              />
            )}
          />
          {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
          <TouchableOpacity style={styles.buttom_login} onpress={handleSubmit(handleSighIn)}>
            <Text style={styles.textbuttom}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Text: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textlogin: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 10
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.3)',
    borderRadius: 30,
    width: 300,
    height: 45,
    color: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(1, 1, 1, 0.3)',
    marginBottom: 20
  },

  buttom_login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    width: 300,
    height: 45,
    padding: 10,
    marginBottom: 20

  },

  textbuttom: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8
  }

});
