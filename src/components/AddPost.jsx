import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Avatar,
  Box,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  borderRadius: "5px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add Post"
        sx={{ position: "fixed", bottom: "22px", left: "22px" }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h6"
            sx={{ fontWeight: 400, textAlign: "center" }}
          >
            Create a post
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar alt="Mahmoud Dardier" src="./images/profilepic.jpg" />
            <Typography id="modal-modal-description" sx={{ fontWeight: 500 }}>
              Mahmoud Dardier
            </Typography>
          </Box>

          <TextField
            sx={{ mt: "20px", width: "100%" }}
            multiline
            rows={3}
            placeholder="What's in your mind..."
            variant="standard"
          />
          <Stack sx={{ mt: 2, flexDirection: "row", gap: "7px" }}>
            <AddReactionIcon color="primary" />
            <AddPhotoAlternateRoundedIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddAlt1Icon color="error" />
          </Stack>

          <ButtonGroup
            sx={{ width: "100%", mt: "15px" }}
            variant="contained"
            aria-label="Basic button group"
          >
            <Button sx={{ flexGrow: 1 }}>POST</Button>
            <Button>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
