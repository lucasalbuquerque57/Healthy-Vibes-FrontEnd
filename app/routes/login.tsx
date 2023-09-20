import type { V2_MetaFunction } from "@remix-run/node";
import { LinksFunction, LoaderArgs, json } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import home from "~/styles/home.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: home },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
  ];
};

export default function Index() {
  return (

    <div></div>

    );
}
 