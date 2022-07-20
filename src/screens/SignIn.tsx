import {useState} from 'react';
import { Heading, VStack, Icon, useTheme } from "native-base";

import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';

import {Envelope, Key} from 'phosphor-react-native'
import { Button } from '../components/Button';
 

export function SignIn () {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  function handleSigIn(){
    return(
      setName("ola botao")
    )
  }

  return (
    <VStack flex={1} alignItems='center' bg="gray.600" px={8} pt={24}>

      <Logo width={200} height={200} />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
        Acesse sua conta {name}
      </Heading>

      <Input 
        mb={4}
        placeholder="E-mail"
        InputLeftElement={<Icon as ={ <Envelope color={colors.gray[300]}/>} ml={4}/>}
        onChangeText={setName}
        />

      <Input 
        mb={8}  
        placeholder="Senha"
        InputLeftElement={<Icon as = {<Key color={colors.gray[300]} />} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w='full' mt={4} onPress={handleSigIn}/>
    </VStack>
  )
}