import React from 'react';

import {useInfoPatient} from '../../../contexts/InforPatientContext';

import {formatDateToString} from '../../../utils/functions/formatDateToString';
import {formatPatientAddress} from '../../../utils/functions/formatPatientAddress';

import {Load} from '../../Load';
import {DefaultInfo} from './DefaultInfo';
import {Gap} from '../../Gap';
import {ClipButton} from '../../ClipButton';

import {
  Container,
  NameInfo,
  Title,
  Name,
  Code,
  CodeValue,
  Row,
  Divider,
  AddressContainer,
  AddressTitle,
  Address,
} from './styles';

export function PatientInfoContent() {
  const {selectedPatient} = useInfoPatient();

  if (!selectedPatient) {
    return <Load />;
  }

  return (
    <Container>
      <NameInfo>
        <Title>{selectedPatient.name.title}</Title>
        <Name>{`${selectedPatient.name.first} ${selectedPatient.name.last}`}</Name>
        {selectedPatient.id.name && (
          <Code>
            <CodeValue>{`${selectedPatient.id.value}`}</CodeValue>
          </Code>
        )}
      </NameInfo>

      <Row>
        <DefaultInfo label="Gender" value={selectedPatient.gender} />
        <Gap value={40} />
        <DefaultInfo
          label="Date Of Birth"
          value={formatDateToString(selectedPatient.dob.date)}
        />
        <Gap value={40} />

        <DefaultInfo label="Nationality" value={selectedPatient.nat} />
      </Row>

      <Divider />

      <ClipButton
        label="Phone Number"
        value={selectedPatient.phone.toString()}
        valueToCopy={selectedPatient.phone.toString()}
      />

      <Gap value={16} orientation="vertical" />

      <ClipButton
        label="Email"
        value={selectedPatient.email}
        valueToCopy={selectedPatient.email}
      />

      <AddressContainer>
        <AddressTitle>Address</AddressTitle>
        <Address>
          {formatPatientAddress({location: selectedPatient.location})}
        </Address>
      </AddressContainer>
    </Container>
  );
}
