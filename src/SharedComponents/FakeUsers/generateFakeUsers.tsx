import { faker } from "@faker-js/faker";
import { User } from "../Interface/Interface";

export const generateFakeUsers = (num: number): User[] => {
  const fakeUsers: User[] = [];

  for (let i = 0; i < num; i++) {
    fakeUsers.push({
      userName: faker.internet.userName(),
      fullName: faker.person.fullName(),
      profileImg: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
      bio: faker.lorem.sentence(),
      followersCount: faker.number.int({ min: 0, max: 1000 }),
      followingCount: faker.number.int({ min: 0, max: 500 }),
      postsCount: faker.number.int({ min: 0, max: 100 }),
      email: faker.internet.email(),
    });
  }

  return fakeUsers;
};

export default generateFakeUsers;
