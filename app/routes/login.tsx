import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";


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

    <body className="backgroundTelaLoginCad">


    </body>

  );
}
