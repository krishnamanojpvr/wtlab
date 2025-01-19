class UserAuth {
  constructor() {
    this.users = new Map();
  }
  // a) Register a new user
  register(username, password) {
    if (this.users.has(username)) {
      console.log("Username already exists.");
      return false;
    }
    this.users.set(username, password);
    console.log(`User ${username} registered successfully.`);
    return true;
  }
  // b) Delete a user
  deleteUser(username) {
    if (!this.users.has(username)) {
      console.log("User not found.");
      return false;
    }
    this.users.delete(username);
    console.log(`User ${username} deleted successfully.`);
    return true;
  }

  // c) Update a user's password
  updatePassword(username, newPassword) {
    if (!this.users.has(username)) {
      console.log("User not found.");
      return false;
    }
    this.users.set(username, newPassword);
    console.log(`Password for ${username} updated successfully.`);
    return true;
  }
  // d) Authenticate a user
  authenticate(username, password) {
    if (this.users.get(username) === password) {
      console.log("Authentication successful.");
      return true;
    } else {
      console.log("Authentication failed.");
      return false;
    }
  }
  // e) List all registered usernames using an iterator
  listUsers() {
    console.log("Registered users:");
    for (let username of this.users.keys()) {
      console.log(username);
    }
  }
}
const auth = new UserAuth();
// Registering users
auth.register("user1", "password1");
auth.register("user2", "password2");
// Deleting a user

auth.deleteUser("user1");
// Updating a user's password
auth.updatePassword("user2", "newpassword2");
// Authenticating users
auth.authenticate("user2", "newpassword2");
// Listing all registered users
auth.listUsers();
