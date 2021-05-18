import faker from 'faker'

export function makeArrayOf<T>(fn: () => T, maxQty?: number): T[] {
  const contacts = []

  let max = Math.ceil(Math.random() * 10)

  if (maxQty && max > maxQty) max = maxQty

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

export function makeCompany() {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const fn = (...c: any) => {
//   // throw new Error()
//   return c[0].toString()
// }

// async function tryCatch<T, C>(fn: (...c: unknown[]) => Promise<T>, args: unknown[], def: C): Promise<T | C> {
//   try {
//     return (await fn(...args)) as T
//   } catch (err) {
//     return def
//   }
// }

export function makeStringFromTemplate(template: string, params: string[]): string {
  let result = template

  if (params) {
    params.forEach((param, key) => {
      result = result.replace(new RegExp(`%${key + 1}`, 'g'), param)
    })
  }

  return result
}

export function capitalize(word: string): string {
  if (typeof word !== 'string') return ''

  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function Type<T>(data: unknown): T {
  return data as T
}
