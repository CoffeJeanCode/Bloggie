import Seo from "../Seo";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Seo title={title} description={description} />
      {children}
    </>
  );
}
