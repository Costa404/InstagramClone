import { faker } from "@faker-js/faker";

type User = {
  userName: string;
  userProfileImage: string;
};

export const generateUsers = (numUsers: number): User[] => {
  return Array.from({ length: numUsers }, () => ({
    userName: faker.internet.username(),
    userProfileImage: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
  }));
};
