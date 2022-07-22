import {useState} from 'react';
import { Alert } from 'react-native';
import { Heading, VStack, Icon, useTheme } from "native-base";
import auth from '@react-native-firebase/auth';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import {Envelope, Key} from 'phosphor-react-native'
import Logo from '../assets/logo_primary.svg';

export function SignIn () {
  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  function handleSigIn(){
    if(!email || !password){
      return Alert.alert('Entrar', ' Informe e-mail e senha.')
    }
    setIsloading(true);
    auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error);
      setIsloading(false);

      if(error.code ==='auth/invalid-email'  ){
        return Alert.alert('Entrar', 'E-mail inválida.')
      }

      if(error.code ==='auth/user-not-found' || error.code ==='auth/wrong-password' || error.code==='auth/wrong-email'){
        return Alert.alert('Entrar', 'Usuário não encontrado.')
      }

      return Alert.alert('Entrar', 'Não foi possível acessar.')
    })
  }

  return (
    <VStack flex={1} alignItems='center' bg="gray.600" px={8} pt={24}>

      <Logo width={200} height={200} />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
        Acesse sua conta
      </Heading>

      <Input 
        mb={4}
        placeholder="E-mail"
        InputLeftElement={<Icon as ={ <Envelope color={colors.gray[300]}/>} ml={4}/>}
        onChangeText={setEmail}
        />

      <Input 
        mb={8}  
        placeholder="Senha"
        InputLeftElement={<Icon as = {<Key color={colors.gray[300]} />} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button 
        title="Entrar" 
        w='full' mt={4} 
        onPress={handleSigIn}
        isLoading={isLoading}
      />
    </VStack>
  )
}