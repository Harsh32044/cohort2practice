import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string,
    lastName: string
}

// Inserting user
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    }, // To display in res
  });
  console.log(res);
}

//Updating User
async function updateUser(
  username: string, {
    firstName, lastName
  }: UpdateParams) {
  const res = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      firstName,
      lastName,
    },
  });
}

// Delete a user

async function deleteUser(username: string) {

    const res = await prisma.user.delete({
        where: {
            username
        }
    })

    console.log(res);
    
    
}

// Getting user details by username

async function getUserDetails(username:string) {
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(res)
}

// insertUser("Sam.M@gmail.com", "changeinprod4!","Samuel", "Clemens")
// insertUser("jacobcraig", "changeinprod2!","Jacob", "Craig")
// updateUser("Sam.M@gmail.com", {firstName: "Sam", lastName: "Manekshaw"})
// deleteUser("jacobcraig")

getUserDetails("Sam.M@gmail.com")
getUserDetails("Sam.M@gmail.co")