import {useState} from 'react'
import { HStack, VStack, IconButton, useTheme, Text, Heading, FlatList, Center} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import {Order ,OrderProps } from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
  const [statusSelected, setStatusSelected] =useState<'open'| 'closed'>('open');
  // const [orders, setOrders] =useState<OrderProps[]>([])

  
  const [orders, setOrders] =useState<OrderProps[]>([
    {
      id: '12345',
      patrimony: '1D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'open',
    },
    {
      id: '1234235',
      patrimony: 'DE561D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'closed',
    },{
      id: '1234uj5',
      patrimony: '1D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'open',
    },
    {
      id: '123l4235',
      patrimony: 'DE561D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'closed',
    },{
      id: '1w2345',
      patrimony: '1D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'open',
    },
    {
      id: '12342kuu35',
      patrimony: 'DE561D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'closed',
    },{
      id: '1234kku5',
      patrimony: '1D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'open',
    },
    {
      id: '1234hg235',
      patrimony: 'DE561D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'closed',
    },{
      id: '123qwe45',
      patrimony: '1D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'open',
    },
    {
      id: '1234asd235',
      patrimony: 'DE561D3D5F',
      when: '18/06/2020 as 18:00',
      status: 'closed',
    }
])
  const {colors} = useTheme();

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  // function handleLogout() {
  //   auth()
  //     .signOut()
  //     .catch(error => {
  //       console.log(error);
  //       return Alert.alert('Sair', 'Não foi possível sair.');
  //     });
  // }



  return (
    <VStack flex = '1' pb={6} bg="gray.700"> 
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg='gray.800'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo/>
        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]}/>}
        />
      </HStack>

      <VStack flex = '1' px={6}>
        <HStack w={'full'} mt={8} mb={4} justifyContent="space-between" alignItems={"center"}>
          <Heading color="gray.100">
            Solicitações
          </Heading>
          <Text color={colors.gray[200]}>
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter 
            title='em andamento' 
            type="open" 
            onPress={()=> setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter 
            title='finalizados' 
            type="closed" 
            onPress={()=> setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> <Order data={item} onPress={()=> handleOpenDetails(item.id)}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={()=> (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40}/>
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                    Você ainda não possui {'\n'}
                    solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                  </Text>
            </Center>
          )}
        />

      <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}