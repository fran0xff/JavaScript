

const users = ['pepe', 'maria', 'luis', 'jose', 'ana', 'laura', 'pablo', 'carla', 'jorge', 'lucia'];

const [user1, user2, user3, ...rest] = users;

console.log(user1, user2, user3, ...rest);