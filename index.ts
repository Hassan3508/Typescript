// utility types
type User = {
  id: number;
  username: string;
  role: 'admin' | 'member' | 'contributor';
};

type UpdateUser = {
  id?: number;
  username?: string;
  role?: 'admin' | 'member' | 'contributor';
};

const users: User[] = [
  { id: 1, username: 'ismail', role: 'admin' },
  { id: 2, username: 'john', role: 'member' },
  { id: 3, username: 'jane', role: 'contributor' },
  { id: 4, username: 'doe', role: 'member' },
];

function updateUser(id: number, updates: UpdateUser) {
  // find the user in the array by the id
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    console.error(`User with id ${id} not found.`);
    return;
  }

  // use Object.assign to update the found user in place
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "ismailshariff" });
updateUser(2, { role: "admin" });

console.log(users);
