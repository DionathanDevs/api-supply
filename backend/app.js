import Fastify from "fastify";

import userRoutes from "./api/user/user.routes.js";

const app = Fastify({
  logger: true,
});

app.register(userRoutes, { prefix: "api/user" });

export default app;

