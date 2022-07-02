import {AxiosResponse} from 'axios';
import {formatDateToString} from '../../../utils/functions/formatDateToString';

export function formatPatientsRequestData(response: AxiosResponse<any, any>) {
  return response.data.results.map((item: any) => ({
    ...item,
    dob: {
      age: item.dob.age,
      date: formatDateToString(item.dob.date),
    },
  }));
}
