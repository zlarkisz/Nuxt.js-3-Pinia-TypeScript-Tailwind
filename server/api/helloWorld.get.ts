export default defineEventHandler((event) => {
  return {
    // It goes to the client: http://localhost:3000/api/helloWorld
    // message: getMethod(event) + "Hello World!",
    // message: getQuery(event), // add query params to url
    message: "Hello GET!",
  };
});
