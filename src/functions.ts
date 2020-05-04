import faker from 'faker'

export function makeArrayOf<T>(fn: () => T, maxQty?: number): T[] {
  let contacts = []
  let max = Math.ceil(Math.random() * 10)

  if (maxQty && max>maxQty) max = maxQty

  for (let i = 0; i < max; i++) {
    contacts.push(fn())
  }

  return contacts
}

export function makePhoneNumber() {
  return faker.phone.phoneNumber('(###) ###-####')
}

export function makeContact() {
  return {
    full_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    job_title: faker.name.jobTitle(),
    type: faker.name.jobType(),
    phone: makePhoneNumber(),
    email: faker.internet.email(),
  }
}

export function getStatus() {
  const random = Math.random() * 100
  if (random < 34) return 'pre-construction'
  if (random < 67) return 'construction'
  return 'post-construction'
}

export function makeLargerAmount() {
  const t = Math.ceil(Math.random() * 1000000000)

  return Math.ceil(Math.random() * t) / 100
}

export function makeAddress() {
  return `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`
}

export function makeCompany(): Company {
  return {
    company_name: faker.company.companyName(),
    company_logo: 'https://picsum.photos/200',
    company_description: faker.random.words(4),
    email: faker.internet.email(),
    website: faker.internet.url(),
    phone: makePhoneNumber(),
    address: makeAddress(),
  }
}
