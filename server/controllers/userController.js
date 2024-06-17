const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com', age: 25 },
  { id: 2, name: 'Alice', email: 'alice@gmail.com', age: 30 },
  { id: 3, name: 'Bob', email: 'bob@gmail.com', age: 35 },
];

const userController = {
  getUser: (req, res, next) => {
    res.status(200).json({
      status: 'success',
      data: {
        users: mockUsers[0],
      },
    });
  },

  createUser: (req, res, next) => {
    res.status(201).json({
      status: 'success',
      data: {
        user: mockUsers[1],
      },
    });
  },

  updateUser: (req, res, next) => {
    res.status(200).json({
      status: 'success',
      data: {
        user: mockUsers[2],
      },
    });
  },

  deleteUser: async (req, res, next) => {
    try {
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
