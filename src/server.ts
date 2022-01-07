import { app } from "./infra/app";

const port = 5001;

app.listen(port, () => console.log(`Connection completed: http://localhost:${port}`));