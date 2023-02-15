// Common Dashboard Layout as Box
// Outlet is placeholder for all the children

import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Gear } from "phosphor-react";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/chat-logo.ico";
import { Nav_Buttons } from "../../data";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        {/* Stack 1 for clickable buttons */}
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"Chat App Logo"} />
            </Box>

            {/* Stack-2 for clickable buttons */}
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="cemter"
              spacing={3}
            >
              {Nav_Buttons.map((e) =>
                e.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={e.index}
                    >
                      {e.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(e.index);
                    }}
                    sx={{ width: "max-content", color: "#000" }}
                    key={e.index}
                  >
                    {e.icon}
                  </IconButton>
                )
              )}

              {/* Divider Component */}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          {/* Stack 3 for Avatar */}
          <Stack spacing={4}>
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
