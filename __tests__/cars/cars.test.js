const { CarsController } = require("../../src/controllers/CarsController");

const carsController = new CarsController();

describe("Check My Private Cars Garage", () => {
  beforeAll(async () => {
    await carsController.login();
  });

  afterAll(async () => {
    const carsResponse = await carsController.getCars();
    const carIds = carsResponse.data.data.map((car) => car.id);
    for (const carId of carIds) {
      const res = await carsController.deleteCarById(carId);
    }
  });

  test("Inna can get all cars", async () => {
    const carsResponse = await carsController.getCars();
    expect(carsResponse.status).toBe(200);
  });

  test("Inna can create a new Audi", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(1, 2, 1111);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Inna can create a new BMW", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(2, 7, 2222);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Inna can create a new Ford", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(3, 15, 3333);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Inna can create a new Porsche", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(4, 18, 4444);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Inna can create a new Fiat", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(5, 23, 5555);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Inna can't create a new Ford Panda", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(3, 25, 9999);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length);
    expect(newCarResponse.data.status).not.toBe("ok");
  });
  test("Inna can't create a car with huge mileage", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(4, 16, 1000000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length);
    expect(newCarResponse.data.status).not.toBe("ok");
  });
  test("Inna can't create a new VM", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(6, 12, 7777);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length);
    expect(newCarResponse.data.status).not.toBe("ok");
  });
});
