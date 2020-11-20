import React from 'react'
import { Card } from '@chakra-ui/react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { usePalette } from 'react-palette'

const useStyles = makeStyles({
  coverImage: {
    height: '100%',
  },
})

export default function PostCard({
  frontmatter: { title, description, date, cover, tags },
  slug,
}) {
  const { coverImage } = useStyles()
  const { push } = useRouter()
  const { data, loading, error } = usePalette(cover)
  return (
    <Card key={slug}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: data.vibrant,
          maxHeight: '10rem',
          overflow: 'hidden',
        }}
      >
        {!loading && !error && (
          <img src={cover} alt={title} className={coverImage} />
        )}
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
        <Button
          onClick={() => push(`/post/${slug}`)}
          variant="outlined"
          color="secondary"
        >
          Go To Post
        </Button>
      </CardContent>
    </Card>
  )
}
