"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";

export default function SucessPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "grey.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={2} alignItems="center">
            <CheckCircleIcon sx={{ fontSize: 70, color: "success.main" }} />

            <Typography variant="h5" fontWeight={700}>
              Login Successful 🎉
            </Typography>

            <Typography variant="body2" color="text.secondary">
              You have successfully logged in using Meta authentication.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 2, mt: 2 }}
              onClick={() => router.push("/")}
            >
              Go to Dashboard
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
