import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";
import "../../../../public/assets/css/Book.css";

export default function Book({
  title,
  author,
  image,
  available,
  total,
  className,
}) {
  return (
    <Card className={className}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          className="media"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {author}
          </Typography>
          <Slider
            className="slider-bar"
            defaultValue={available}
            aria-labelledby="discrete-slider-custom"
            step={0}
            valueLabelDisplay="auto"
            max={total}
            aria-valuetext="Còn"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
