import {IPatientData} from '../../../utils/dto';

interface IFilterByNationalityProps {
  patients: IPatientData[];
  initialPatients: IPatientData[];
  search: string;
}

export function filterByNationality({
  initialPatients,
  patients,
  search,
}: IFilterByNationalityProps) {
  return search !== ''
    ? patients.filter(
        patient => patient.nat.toLowerCase() === search.toLowerCase(),
      )
    : initialPatients;
}
