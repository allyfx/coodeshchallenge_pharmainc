import React from 'react';
import {FlatList} from 'react-native';

import {useTheme} from 'styled-components';

import {Input} from '../../components/Input';
import {FilterButton} from '../../components/FilterButton';
import {Gap} from '../../components/Gap';
import {PatientCard} from '../../components/PatientCard';

import {ClipboardList} from 'lucide-react-native';

import {
  Container,
  Header,
  Title,
  Form,
  Content,
  Count,
  CountText,
  CountLine,
} from './styles';

const MOCK = [
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Freja',
      last: 'Sørensen',
    },
    location: {
      street: {
        number: 1106,
        name: 'Aastrupvej',
      },
      city: 'Jystrup',
      state: 'Midtjylland',
      country: 'Denmark',
      postcode: 64658,
      coordinates: {
        latitude: '-31.6119',
        longitude: '178.3408',
      },
      timezone: {
        offset: '+3:30',
        description: 'Tehran',
      },
    },
    email: 'freja.sorensen@example.com',
    uuid: '5e791055-903c-42fb-a81c-193500eb2426',
    dob: {
      date: '04/13/1957',
      age: 65,
    },
    registered: {
      date: '2008-03-24T04:08:22.140Z',
      age: 14,
    },
    phone: '09712130',
    cell: '04896001',
    id: {
      name: 'CPR',
      value: '130457-9793',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/4.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/4.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/4.jpg',
    },
    nat: 'DK',
  },
];

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <ClipboardList color={theme.colors.green} />
        <Title>Pacientes</Title>
      </Header>

      <Form>
        <Input placeholder="Pesquisar..." />

        <Gap value={16} />

        <FilterButton />
      </Form>

      <Content>
        <Count>
          <CountText>20 results</CountText>
          <CountLine />
        </Count>

        <FlatList
          data={MOCK}
          renderItem={({item}) => (
            <PatientCard patient={item} onPress={() => {}} />
          )}
        />
      </Content>
    </Container>
  );
}
