import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  V2_MetaFunction,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import main from "./styles/main.css";

export const meta: V2_MetaFunction = () => {
  return [
  {charset: "utf-8"},
  {viewport: "width=device-width,initial-scale=1"},
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css", integrity: "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" },
    { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", integrity: "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==", crossOrigin: "anonymous"},

    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    { rel: "stylesheet", href: main }
  ];
};


function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />

        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>

      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}

export default function App() {

  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <Document>
      <div id='oopss'>
        <div id="error-text">
          <ErrorHandle />
          <p className='hmpg'>
            <Link to='/' className="back">Back To Home</Link>
          </p>
        </div>
      </div>
    </Document>
  )
  function ErrorHandle() {
    if (isRouteErrorResponse(error)) {
      return (
        <>
          <span> {error.status} </span>
          <p>
            {error.statusText}
          </p>
          <p>{error.data}</p>
        </>
      );
    } else if (error instanceof Error) {
      return (
        <>
          <span>Error</span>
          <p>{error.message}</p>
        </>
      );
    } else {
      return <p>Unknown Error</p>;
    }
  }
} 