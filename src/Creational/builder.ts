
interface Address {
  name: string;

  age: number;

  phone: string;

  address: any;
}
class AddressImpl {
  zip: string
  street: string

  constructor(zip: string, street: string) {
    this.zip = zip
    this.street = street
  }
}

interface Client {
  name: string;

  age: number;

  phone: string;

  address: any;
}

class ClientImpl implements Client {
  name = null;

  age = null;

  phone = null;

  address = null;

  constructor(name: string) {
    this.name = name
  }

}

interface ClientBuilder {
  user: Client;
}


class ClientBuilderImpl implements ClientBuilder {
  user: Client

  constructor(name: string) {
    this.user = new ClientImpl(name)
  }

  setAge(age: number) {
    this.user.age = age
    return this
  }

  setPhone(phone: string) {
    this.user.phone = phone
    return this
  }

  setAddress(address: AddressImpl) {
    this.user.address = address
    return this
  }

  build() {
    return this.user
  }
}

const client = new ClientBuilderImpl('Max')
                          .setAge(22)
                          .setPhone('121212')
                          .setAddress(new AddressImpl('2563', 'main'))
                          .build()
