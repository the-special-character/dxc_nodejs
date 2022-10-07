const request = require("supertest");
const connectDB = require("../dbConnect").default;
console.log(connectDB);

let server;

describe("/api/auth", () => {
  beforeAll(async () => {
    await connectDB();
  });

  beforeEach(() => {
    server = require("../index");
  });

  afterEach(() => {
    server.close();
  });

  it("shoud register user", async () => {
    const newUser = await request(server).post("/api/auth/register").send({
      firstName: "Virat",
      lastName: "Kohli",
      email: "hey@viat.com",
      password: "Password1!",
    });

    console.log("newUser", newUser.body);

    expect(newUser.body).toHaveProperty("_id");
    expect(newUser.body.email).toBe("hey@viat.com");
    expect(newUser.statusCode).toBe(201);
  });
});
