type Advocate = {
    firstName: string,
    lastName: string,
    city: string,
    degree: string,
    specialties: string[],
    yearsOfExperience: number,
    phoneNumber: string,
}

function assertIsAdvocate(data: unknown) : data is Advocate {
    return (
      typeof data === 'object' &&
      data !== null &&
      data !== undefined &&
      'firstName' in data &&
      'lastName' in data &&
      'city' in data &&
      'degree' in data &&
      'specialties' in data &&
      'yearsOfExperience' in data &&
      'phoneNumber' in data &&
      typeof (data as Advocate).firstName === 'string' &&
      typeof (data as Advocate).lastName === 'string' &&
      typeof (data as Advocate).city === 'string' &&
      typeof (data as Advocate).degree === 'string' &&
      Array.isArray((data as Advocate).specialties) &&
      (data as Advocate).specialties.every(item => typeof item === 'string') &&
      typeof (data as Advocate).yearsOfExperience === 'number' &&
      typeof (data as Advocate).phoneNumber === 'string'
    );
  }

export type { Advocate };
export { assertIsAdvocate };