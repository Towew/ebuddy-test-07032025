// app/main/page.tsx
"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
// import UpdateButton from "../../components/UpdateButton";

export default function MainPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Main Page
      </Typography>
      {/* <UpdateButton /> */}
    </Container>
  );
}
