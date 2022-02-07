import userRoutes from "../user.routes.js";

const apiV1Routes = (app) => {
  app.use("/users", userRoutes);
  //app.use('/user', userRoutes);
};

export default apiV1Routes;
