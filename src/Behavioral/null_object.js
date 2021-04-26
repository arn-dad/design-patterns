class User {
  constructor(id, name, role) {
    this.id = id
    this.name = name
    this.role = role
  }

  hasAccess() {
    return this.role === 'ADMIN'
  }
}

const users = [new User(1, 'Max', 'USER'), new User(2, 'Bob', 'ADMIN')]

class NullUser {
  constructor() {
    this.id = -1
    this.name = null
    this.role = 'USER'
  }

  hasAccess() {
    return false
  }
}


function getUserById(id) {
  const user = users.find(user => user.id === id) 
  if (user) {
    return user
  }

  return new NullUser()
}

function checkUserPermission(id) {
  const user = getUserById(id)

  if (user.hasAccess()) {
    return `User ID: ${user.id} access allowed.`
  }

  return `User ID: ${user.id} access denied.`
}