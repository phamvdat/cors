const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com', age: 25 },
  { id: 2, name: 'Alice', email: 'alice@gmail.com', age: 30 },
  { id: 3, name: 'Bob', email: 'bob@gmail.com', age: 35 },
];

export async function GET(request: Request) {
  const data = JSON.stringify(mockUsers);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = { id: mockUsers.length + 1, ...user };
  mockUsers.push(newUser);
  return new Response(JSON.stringify(newUser), {
    status: 200,
  });
}

export async function PUT(request: Request) {
  return new Response(JSON.stringify(mockUsers[1]), {
    status: 201,
  });
}

export async function DELETE(request: Request) {
  return new Response(JSON.stringify({ message: 'User deleted' }), {
    status: 200,
  });
}
