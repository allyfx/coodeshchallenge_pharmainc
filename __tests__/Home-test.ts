import {filterByGender} from '../src/pages/Home/functions/filterByGender';
import {filterByNationality} from '../src/pages/Home/functions/filterByNationality';

import {IPatientData} from '../src/utils/dto';

it('should filter patients by gender', () => {
  const initialPatientsMock = [
    {
      gender: 'female',
      id: 'one',
    } as unknown,
    {
      gender: 'female',
      id: 'two',
    } as unknown,
    {
      gender: 'male',
      id: 'three',
    } as unknown,
  ] as IPatientData[];

  expect(
    filterByGender({
      gender: 'female',
      initialPatients: initialPatientsMock,
    }),
  ).toEqual([
    {
      gender: 'female',
      id: 'one',
    },
    {
      gender: 'female',
      id: 'two',
    },
  ]);
  expect(
    filterByGender({
      gender: 'male',
      initialPatients: initialPatientsMock,
    }),
  ).toEqual([
    {
      gender: 'male',
      id: 'three',
    },
  ]);
});

it('should filter patients by nationality', () => {
  const initialPatientsMock = [
    {
      nat: 'br',
      id: 'one',
    } as unknown,
    {
      nat: 'br',
      id: 'two',
    } as unknown,
    {
      nat: 'ie',
      id: 'three',
    } as unknown,
  ] as IPatientData[];

  expect(
    filterByNationality({
      patients: initialPatientsMock,
      initialPatients: initialPatientsMock,
      search: 'Br',
    }),
  ).toEqual([
    {
      nat: 'br',
      id: 'one',
    } as unknown,
    {
      nat: 'br',
      id: 'two',
    } as unknown,
  ]);
});
