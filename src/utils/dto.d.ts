export interface IPatientData {
  login: {
    uuid: string;
  };
  id: {
    name: string;
    value: string;
  };

  email: string;
  phone: number;
  nat: string;
  gender: string;

  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    date: string;
    age: number;
  };

  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };

  picture: {
    medium: string;
  };
}
