import { faker } from "@faker-js/faker";
import { User } from "../Interface/Interface";

export const generateFakeUsers = (num: number): User[] => {
  const fakeUsers: User[] = [];

  for (let i = 0; i < num; i++) {
    fakeUsers.push({
      userName: faker.internet.userName(), // Gera um username único
      fullName: faker.person.fullName(), // Gera um nome completo fictício
      profileImg: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`, // Gera uma URL de imagem de perfil do Pravatar
      bio: faker.lorem.sentence(), // Gera uma biografia fictícia
      followersCount: faker.number.int({ min: 0, max: 1000 }), // Gera um número aleatório de seguidores
      followingCount: faker.number.int({ min: 0, max: 500 }), // Gera um número aleatório de seguindo
      postsCount: faker.number.int({ min: 0, max: 100 }), // Gera um número aleatório de posts
      email: faker.internet.email(),
    });
  }

  return fakeUsers;
};

export default generateFakeUsers;
