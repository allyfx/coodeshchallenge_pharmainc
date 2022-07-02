import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {useTheme} from 'styled-components';
import {useInfoPatient} from '../../contexts/InfoPatientContext';
import {usePatientModal} from '../../contexts/PatientModalContext';

import {Input} from '../../components/Input';
import {FilterButton} from '../../components/FilterButton';

import {Gap} from '../../components/Gap';

import {PatientCard} from '../../components/PatientCard';
import {Load} from '../../components/Load';

import {formatPatientsRequestData} from './functions/formatPatientsRequestData';
import {filterByNationality} from './functions/filterByNationality';
import {filterByGender} from './functions/filterByGender';
import {getGenderValue} from './functions/getGenderValue';

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
  FlatlistLoadingContainer,
  FilterContainer,
  Filter,
  FilterValue,
} from './styles';

export function Home() {
  const theme = useTheme();

  const {setSelectedPatient} = useInfoPatient();
  const {modalRef} = usePatientModal();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [initialPatients, setInitialPatients] = useState<IPatientData[]>([]);
  const [patients, setPatients] = useState<IPatientData[]>([]);

  const [paginationPage, setPaginationPage] = useState(1);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<'female' | 'male'>();

  function onFilterBySearch() {
    setPatients(
      filterByNationality({
        initialPatients,
        patients,
        search,
      }),
    );
  }

  function onPressGender(filter: 'female' | 'male') {
    setGender(
      getGenderValue({
        filter,
        gender,
      }),
    );
  }

  useEffect(() => {
    setPatients(
      filterByGender({
        gender,
        initialPatients,
      }),
    );
  }, [gender]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(
          `/?results=50&page=${paginationPage}&seed=foobar`,
        );

        const newPatients = isLoadingMore
          ? [...initialPatients, formatPatientsRequestData(response)]
          : formatPatientsRequestData(response);

        setPatients(newPatients);
        setInitialPatients(newPatients);
      } catch (err) {
        /** Here you could put an alert  */
        console.log(err);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    }

    getData();
  }, [paginationPage]);

  return (
    <Container>
      <Header>
        <ClipboardList color={theme.colors.green} />
        <Title>Patients</Title>
      </Header>

      <Form>
        <Input placeholder="Search..." onChangeText={setSearch} />

        <Gap value={16} />

        <FilterButton onPress={onFilterBySearch} />
      </Form>

      <FilterContainer>
        <Filter
          selected={gender === 'female'}
          onPress={() => onPressGender('female')}
          activeOpacity={0.5}>
          <FilterValue>Female</FilterValue>
        </Filter>

        <Gap value={8} />

        <Filter
          selected={gender === 'male'}
          onPress={() => onPressGender('male')}
          activeOpacity={0.8}>
          <FilterValue>Male</FilterValue>
        </Filter>
      </FilterContainer>

      <Content>
        <Count>
          <CountText>{patients.length} results</CountText>
          <CountLine />
        </Count>

        {isLoading && <Load />}

        <FlatList
          keyExtractor={item => item.login.uuid}
          data={patients}
          onEndReached={() => {
            if (!isLoadingMore && search === '') {
              setPaginationPage(oldState => oldState + 1);
              setIsLoadingMore(true);
            }
          }}
          renderItem={({item}) => (
            <PatientCard
              patient={item}
              onPress={() => {
                setSelectedPatient(item);
                modalRef.current?.expand();
              }}
            />
          )}
          ListFooterComponent={() =>
            isLoadingMore ? (
              <FlatlistLoadingContainer>
                <Load />
              </FlatlistLoadingContainer>
            ) : null
          }
          ItemSeparatorComponent={() => (
            <Gap value={8} orientation="vertical" />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
