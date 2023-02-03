import Express, { request, response } from "express";

import createCourse from "./routes";

const app = Express();
app.listen(3333);

app.get('/', createCourse);

