import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div className="container">{children}</div>
    </>
  );
}
