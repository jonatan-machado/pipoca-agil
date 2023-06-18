export class RemovePassword {
  getUser(user) {
    const userWithoutPassword = this.setUser(user);
    return userWithoutPassword;
  }

  getUsers(users) {
    const usersWithoutPassword = this.setUsers(users);
    return usersWithoutPassword;
  }

  private setUser(user) {
    delete user.password;
    delete user.confirm_password;
    return user;
  }

  private setUsers(users) {
    users.map((user) => {
      delete user.password;
      delete user.confirm_password;
      return { user, ...users };
    });
    return users;
  }
}
