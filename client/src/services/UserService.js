class UserService {

  async getUsers() {
    const response = await fetch('/api/user/get-users', {
      credentials: 'include',
    });
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  async saveUser(user) {
    const response = await fetch('/api/user/save-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }
}

const userService = new UserService();
export default userService;