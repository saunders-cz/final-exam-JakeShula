import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const HomePage = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h1">Shula's Family Restaurant</Typography>
        <Typography variant="h6">Quality Italian Cuisine Since 1947</Typography>
      </Grid>
      <img src="img/Shop.jpg" width="550" height="300" alt="restuarant" />
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h5">Our Story</Typography>
            <Typography variant="body1">
              Tradition and ritual are the heart and soul of Italian cuisine.
              Since 1896 the Shula family has believed in sharing those
              traditions. We invite you to take part in sharing- with us and
              with each other—the Shula family way of feasting. If you follow
              along with our menu, you will experience rituals vincent rao and
              anne pellegrino have passed to our generation. With the help of
              your server, enjoy the most important ingredients in your dining
              experience: food, friends, and family. We promise that you will
              not only leave full but fulfilled.
            </Typography>
            <Typography variant="h5">Our History</Typography>
            <Typography variant="body1">
              All locations, New york, Las Vegas and Los Angeles, serve and
              satiate some of the most powerful appetites in the world. At the
              new york location, the list of regulars reads like the "who's who"
              of new york cognoscenti, including woody allen, billy crystal, rob
              reiner, nicholas pileggi and danny aiello. Legions of politicians,
              sports figures and matinee idols have jockeyed for a reservation.
              There, dining at Shula's is a legendary experience so beloved that
              getting a seat is only possible if you are a regular and have,
              "table rights," or if you're lucky enough to be invited as a guest
              by someone who does. In Las Vegas, you are lucky enough to be our
              guest. From our family to yours, we invite you to sit back and
              relax while filling yourself with more than food. Cheers bruv!
            </Typography>
            <Typography variant="h5">Our Values</Typography>
            <Typography variant="body1">
              Staying focused on the goal. Practicing until we get it perfect.
              Never compromising, yet knowing when to call an audible. It’s
              these values that separate the good from the great, and we walk
              our talk. Through our pursuit of perfection, we can achieve
              excellence.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3">Hours</Typography>
            <FolderList></FolderList>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export const FolderList = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <RestaurantIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Monday - Thursday" secondary="11am - 11pm" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <RestaurantIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Friday" secondary="10am - 11pm" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <RestaurantIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Saturday - Sunday" secondary="12pm - 10pm" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone Number" secondary="(222) 222-2222" />
      </ListItem>
    </List>
  );
};
