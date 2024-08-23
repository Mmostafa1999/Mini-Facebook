import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const TimeLine = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const myCards = [
    {
      letter: "A",
      color: "	#a020f0",
      username: "Mahmoud Dardier",
      imgLink:
        "https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      letter: "N",
      color: "	#008080",
      username: "Mahmoud Mustafa",
      imgLink:
        "https://images.pexels.com/photos/11567227/pexels-photo-11567227.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      letter: "M",
      color: "#053ea8",
      username: "Abdelrahman Dardier",
      imgLink:
        "https://images.pexels.com/photos/19799492/pexels-photo-19799492/free-photo-of-red-4x4-in-snow-in-winter.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      letter: "A",
      color: "	#a020f0",
      username: "Mahmoud Dardier",
      imgLink:
        "https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      letter: "N",
      color: "	#008080",
      username: "Mahmoud Mustafa",
      imgLink:
        "https://images.pexels.com/photos/11567227/pexels-photo-11567227.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <Box component="main" sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card
            key={item.imgLink}
            sx={{ maxWidth: { xs: "97%", sm: "444px" }, mx: "auto", my: 5 }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: item.color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.username}
              subheader="September 14, 2024"
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Show Profile</MenuItem>
              <MenuItem onClick={handleClose}>Show More Posts</MenuItem>
              <MenuItem onClick={handleClose}>Hide Post</MenuItem>
            </Menu>
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default TimeLine;
