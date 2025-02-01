import { useEffect, useState } from "react";
import useViewModel from "./UrlListViewModel";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  CircularProgress,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { AddCircleOutline, OpenInNew } from "@mui/icons-material";

export default function UrlListView() {
  const {
    getUrls,
    createUrl,
    onChangeValue,
    value,
    urls,
  } = useViewModel();
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    getUrls();
  }, [getUrls]);

  const handleAddUrl = async () => {
    setLoading(true);
    try {
      await createUrl();
      setSnackOpen(true); 
    } catch (error) {
      console.error("Error adding URL:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          label="Shorten your URL"
          variant="outlined"
          fullWidth
          value={value}
          onChange={onChangeValue}
          disabled={loading}
          error={!!(value && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value))}
          helperText={
            value && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value)
              ? "Please enter a valid URL"
              : ""
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUrl}
          disabled={loading || !value}
          startIcon={<AddCircleOutline />}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Add"}
        </Button>
      </Box>

      <List>
        {urls.map((url, i) => (
          <ListItem
            key={i}
            sx={{
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <ListItemIcon>
                <OpenInNew />
              </ListItemIcon>
              <ListItemText
                primary={url.shortCode}
                secondary={url.originalUrl}
                sx={{ flexGrow: 1 }}
              />
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              href={`http://localhost:3000/url/${url.shortCode}`}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              Open
            </Button>
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          URL added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
