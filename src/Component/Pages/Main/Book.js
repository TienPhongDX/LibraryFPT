import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 300,
  },
  slider: {
    color: "#f59342",
  },
});

export default function Book(title, author, image, available, total) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          className={classes.media}
          image="https://salt.tikicdn.com/cache/w390/media/catalog/product/i/m/img447.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Đừng bao giờ đi ăn một mình
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            KEITH FERRAZZI & TAHL RAZ
          </Typography>
          <Slider
            className={classes.slider}
            defaultValue={20}
            aria-labelledby="discrete-slider-custom"
            step={0}
            valueLabelDisplay="auto"
            max={30}
            aria-valuetext="Còn"
          />
          <p>74%</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
