import generateFakeUsers from "./generateFakeUsers";

export const saveFakeUsersToFirebase = async (numUsers: number) => {
  const users = generateFakeUsers(numUsers);
  console.log(`Generating ${numUsers} fake users:`, users);

  for (const user of users) {
    console.log(`Attempting to save user: ${JSON.stringify(user)}`);

    try {
      // // Aqui usamos 'doc' para especificar o nome documento
      // const userDoc = doc(db, "users", user?.email);
      // await setDoc(userDoc, user);
      // console.log(`User ${user.userName} saved successfully.`);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error saving user:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }
};
