class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class Client {
  name = null;

  age = null;

  phone = null;

  address = null;

  constructor(name) {
    this.name = name
  }

}


class ClientBuilder {
  constructor(name) {
    this.user = new Client(name)
  }

  setAge(age) {
    this.user.age = age
    return this
  }

  setPhone(phone) {
    this.user.phone = phone
    return this
  }

  setAddress(address) {
    this.user.address = address
    return this
  }

  build() {
    return this.user
  }
}

const client = new ClientBuilder('Max')
                          .setAge(22)
                          .setPhone('121212')
                          .build()
