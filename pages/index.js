import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(
        ({ frontmatter: { title, description, date, cover }, slug }) => (
          <article key={slug}>
            <header>
              <img src={cover} alt="" />
              <h3 className="mb-2">
                <Link href={`/post/${slug}`}>{title}</Link>
              </h3>
            </header>
            <span className="mb-4 text-xs">{date}</span>
            <section>
              <p className="mb-8">{description}</p>
            </section>
          </article>
        )
      )}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
