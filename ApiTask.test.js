const axios = require("axios");
describe("JSONplaceholder", () => {
  beforeAll(() => {
    console.log("Start");
  });

  afterAll(() => {
    console.log("Finish");
  });

  test("GET photos status code is 200", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    expect(response.status).toBe(200);
  });

  test("Get Contact Data", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("email");
    expect(response.data).toHaveProperty("address.zipcode");
  });

  test("Add new post", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: 11,
        title: "Challenge becomes opportunity",
        body: "My first API task",
      }
    );
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
  });

  test("Check any post", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/99"
    );
    expect(response.data).toHaveProperty("id", 99);
    expect(response.data).toHaveProperty("title");
  });

  test("Add additional post", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users/1/todos",
      {
        userId: 1,
        id: 21,
        title: "Automation cources",
        completed: true,
      }
    );
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("completed");
  });
});
