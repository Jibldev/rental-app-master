import { type RouteConfig, index, route } from "@react-router/dev/routes";
import 'app/styles/app.sass';

export default [
  index("routes/home.tsx"),
  route("about","./pages/about.tsx"),
  
] satisfies RouteConfig;
