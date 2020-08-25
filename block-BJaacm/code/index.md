```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true, they point to same address;
- `user === newUser;` // true, they point to same address;
- `user.name === newUser.name;` // true, they will fetch the data from the same address, hence, the fetched data will be same;
- `user.name == newUser.name;` // true, they will fetch the data from the same address, hence, the fetched data will be same;
- `user.sibling == newUser.sibling;` // true, they will fetch the data from the same address, hence, the fetched data will be same;
- `user.sibling === newUser.sibling;` // true, they will fetch the data from the same address, hence, the fetched data will be same;
- `user.sibling == allBrothers;` // false, they have the same data but the address is not the same; --
- `user.sibling === allBrothers;` // false, address is not the same;
- `brothersCopy === allBrothers;` // false, address is different;
- `brothersCopy == allBrothers;` // false, they have the same data but at the different address; --
- `brothersCopy == user.sibling;` // true, they have the same data;
- `brothersCopy === user.sibling;` // true, address is also same;
- `brothersCopy[0] === user.sibling[0];` // true, data is same and is primitive.
- `brothersCopy[1] === user.sibling[1];` // true, data is same and is primitive.
- `user.sibling[1] === newUser.sibling[1];` // true, data is fetched from the same address.
