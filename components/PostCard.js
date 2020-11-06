import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { usePalette } from "react-palette";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  coverContainer: {
    display: "flex",
    justifyCotent: "center",
  },
});
export default function PostCard({
  frontmatter: { title, description, date, cover, tags },
  slug,
}) {
  const { data, loading, error } = usePalette(
  cover
  );
  const { coverContainer } = useStyles();
  console.log(data);

  return (
    <Card key={slug}>
      <div
        style={{ display: "flex", justifyContent: "center", background: data.muted }}
      >
        {!loading && <img src={cover} alt="Cover" />}
        {error && console.log(error)}
      </div>
      <Typography variant="h4">{title}</Typography>
      <CardContent>
        {tags.map((tag, i) => (
          <Chip
            label={tag}
            variant="outlined"
            size="small"
            color="primary"
            key={i}
          />
        ))}
        <Typography variant="h5">{date}</Typography>
        <Typography variant="h6">{description}</Typography>
        <Button variant="outlined" color="secondary">
          <Link href={`/post/${slug}`}>Go To Post</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
