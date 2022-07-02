import React from 'react';

import {useTheme} from 'styled-components';

import {useInfoPatient} from '../../contexts/InfoPatientContext';

import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

import {PatientInfoContent} from './PatientInfoContent';

import {Picture, PictureWrapper} from './styles';

interface IPatientInfoModalProps {
  modalRef: React.RefObject<BottomSheetMethods>;
}

export function PatientInfoModal({modalRef}: IPatientInfoModalProps) {
  const theme = useTheme();

  const {selectedPatient, setSelectedPatient} = useInfoPatient();

  return (
    <>
      <BottomSheet
        ref={modalRef}
        index={-1}
        enablePanDownToClose
        snapPoints={['65%']}
        handleComponent={() => (
          <>
            {selectedPatient && (
              <PictureWrapper style={theme.shadows.elevation_yellow}>
                <Picture source={{uri: selectedPatient?.picture.medium}} />
              </PictureWrapper>
            )}
          </>
        )}
        onClose={() => setSelectedPatient(undefined)}
        backgroundStyle={{
          borderRadius: 0,
        }}>
        <PatientInfoContent />
      </BottomSheet>
    </>
  );
}
