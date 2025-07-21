import type { Route } from "./+types/home";
import Home from "../pages/welcome";
import 'app/styles/app.sass';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kasa" },
    { name: "description", },
  ];
}

export default function Homepage() {
  return <Home />;
}
