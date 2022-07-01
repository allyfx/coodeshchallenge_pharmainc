import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {useTheme} from 'styled-components';

import {Input} from '../../components/Input';
import {FilterButton} from '../../components/FilterButton';
import {Gap} from '../../components/Gap';
import {PatientCard} from '../../components/PatientCard';

import {formatPatientsRequestData} from './utils/formatPatientsRequestData';

import {ClipboardList} from 'lucide-react-native';

import {api} from '../../services/api';

import {IPatientData} from '../../utils/dto';

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

export function Home() {
  const theme = useTheme();

  const [patients, setPatients] = useState<IPatientData[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('/?results=50');
        setPatients(formatPatientsRequestData(response));
      } catch (err) {
        /** Here you could put an alert  */
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <Container>
      <Header>
        <ClipboardList color={theme.colors.green} />
        <Title>Patients</Title>
      </Header>

      <Form>
        <Input placeholder="Search..." />

        <Gap value={16} />

        <FilterButton />
      </Form>

      <Content>
        <Count>
          <CountText>{patients.length} results</CountText>
          <CountLine />
        </Count>

        <FlatList
          keyExtractor={item => item.login.uuid}
          data={patients}
          renderItem={({item}) => (
            <PatientCard patient={item} onPress={() => {}} />
          )}
          ItemSeparatorComponent={() => (
            <Gap value={8} orientation="vertical" />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
