import {IPatientData} from '../dto';

type IFormatPatientAddressProps = Pick<IPatientData, 'location'>;

// 1106 Aastrupvej, Jystrup Midtjylland 64658 Denmark

export function formatPatientAddress({location}: IFormatPatientAddressProps) {
  return `${location.street.number} ${location.street.name}, ${location.city} ${
    location.state
  } ${location.postcode}\n${location.country.toUpperCase()}`;
}
