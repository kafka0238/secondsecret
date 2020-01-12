export interface UserInterface {

  id: number;
  firstName: string;
  lastName: string;
}

export class User implements UserInterface {

  id: number;
  firstName: string;
  lastName: string;

  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
