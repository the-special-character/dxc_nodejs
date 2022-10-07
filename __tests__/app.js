const { checkData, sum } = require("../app");

describe("test app", () => {
//   beforeAll(() => {
//     console.log("before all");
//   });

//   beforeEach(() => {
//     console.log("before each");
//   });

//   afterEach(() => {
//     console.log("after each");
//   });

  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should test obj", () => {
    const obj = ["1", "2"];
    expect(obj.length).toBe(2);
  });

  it("should sum 0.1 + 02", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  it("should test checkdata", () => {
    expect(checkData(true)).toBe("data is available");
    expect(checkData(false)).toBe("data is not available");
  });

//   afterAll(() => {
//     console.log("after all");
//   });
});
