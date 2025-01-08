import type { Route } from "./+types/home";
import Home from "../pages/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kaza" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Homepage() {
  return <Home />;
}
