import {IPatientData} from '../../../utils/dto';

interface IFilterByGender {
  gender: 'female' | 'male' | undefined;
  initialPatients: IPatientData[];
}

export function filterByGender({gender, initialPatients}: IFilterByGender) {
  if (gender) {
    return initialPatients.filter(
      patient => patient.gender.toLowerCase() === gender,
    );
  } else {
    return initialPatients;
  }
}
