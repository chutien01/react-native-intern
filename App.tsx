import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CustomButton from './src/CustomButton';
import CustomInput from './src/CustomInput';

const App = () => {

  {/* cach2 */}
  const InputList =[
    {
      label:'Name',
      placeholder:'Join Doe'
    },
    {
      label:'Email',
      placeholder:'.....@gmail.com',
      isEmail:true
    },
    {
      label:'Password',
      placeholder:'********'
    },
    {
      label:'ReturnPass',
      placeholder:'********'
    },
  ];
  {/* cach2 */}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Join active econommerce</Text>
      </View>
      <View style={styles.csInput}>
        {/* cach1 */}
        {/* <CustomInput label={'Name'} placeholder={'Join Doe'} />
        <CustomInput label={'Email'} placeholder={'Email'} />
        <CustomInput label={'Pastword'} placeholder={'Password'} />
        <CustomInput label={'ReturnPass'} placeholder={'ReturnPass'} /> */}
        {/* cach1 */}
        {/* cach2 */}
        {
          InputList.map((input,index) =>(
             <CustomInput key={index} label={input.label} placeholder={input.placeholder} isEmail={input.isEmail}></CustomInput>
          ))
        }
        {/* cach2 */}

        <CustomButton label={'SignUp'} colorCode={'#F45326'}></CustomButton>
        <CustomButton label={'Login'} colorCode={'#F8B55D'}></CustomButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    
  },
  title: {
    marginVertical: 70
  },
  textTitle: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  csInput:{
    margin: 20
  }
});

export default App;
