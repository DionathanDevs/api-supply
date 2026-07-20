import * as userController from "./user.controller.js";

export default async function userRoutes(fastify, options) {
  fastify.get("/", userController.get);
}
