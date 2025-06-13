test("Get api/v1/status should return 200", async () => {
  const result = await fetch("http://localhost:3000/api/v1/status", {
    method: "GET",
  });
  expect(result.status).toBe(200);
});
