interface Teacher {
  firstName: string; // Modifiable only when initialized
  lastName: string; // Modifiable only when initialized
  fullTimeEmployee: boolean; // Always defined
  yearsOfExperience?: number; // Optional attribute
  location: string; // Always defined
  [key: string]: any; // Allow any additional attribute without specifying the name
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Example of an additional attribute
};

console.log(teacher3);
