interface IGetGenderValueProps {
  filter: 'female' | 'male' | undefined;
  gender: 'female' | 'male' | undefined;
}

export function getGenderValue({filter, gender}: IGetGenderValueProps) {
  if (gender === filter) {
    return undefined;
  }

  return filter;
}
