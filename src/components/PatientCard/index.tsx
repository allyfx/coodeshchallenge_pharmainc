import React from 'react';

import {Gap} from '../Gap';

import {
  Container,
  Picture,
  Content,
  Column,
  PatientName,
  NameTitle,
  Name,
  SubText,
} from './styles';

interface IPatientCardData {
  uuid: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    medium: string;
  };
}

interface IPatientCardProps {
  patient: IPatientCardData;
  onPress: () => void;
}

export function PatientCard({patient, onPress}: IPatientCardProps) {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      {patient.picture.medium && (
        <Picture source={{uri: patient.picture.medium}} resizeMode="contain" />
      )}

      <Gap value={8} />

      <Content>
        <Column>
          <PatientName>
            <NameTitle>{patient.name.title}</NameTitle>
            <Name>{`${patient.name.first}${patient.name.last}`}</Name>
          </PatientName>

          <Gap value={12} orientation="vertical" />

          <SubText>{patient.gender}</SubText>
        </Column>

        <SubText>{patient.dob.date}</SubText>
      </Content>
    </Container>
  );
}
