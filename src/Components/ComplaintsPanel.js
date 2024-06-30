import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Box,
} from "@mui/material";
import axios from "axios";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const ComplaintsPanel = () => {
  const [providersData, setProvidersData] = useState([]);

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/serviceProvider/providerswithcomplaints")
      .then((res) => {
        setProvidersData(res.data.sProviders);
      })
      .catch((err) => {
        console.error("Error ", err);
      });
  }, []);

  useEffect(() => {
    if (providersData.length > 0) {
      providersData.forEach((provider) => {
        const imageListRef = ref(storage, "uploads/");
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            if (item.name.split(".")[0] === provider.email.split(".")[0]+"_profile_pic") {
              getDownloadURL(item).then((url) => {
                setImageList((prev) => [...prev, { email: provider.email, url }]);
              });
            }
          });
        });
      });
    }
  }, [providersData]);

  console.log(imageList);

  if (!providersData.length) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      {providersData.map((provider, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                alt={provider.providerName}
                src={imageList.find((img) => img.email === provider.email)?.url || provider.profile_pic}
                style={{ marginRight: "16px" }}
              />
              <Typography variant="h5" component="div" gutterBottom>
                {provider.name}
              </Typography>
            </Box>
            <List>
              {provider.complaints.map((complaint, idx) => (
                <div key={idx}>
                  <ListItem>
                    <ListItemText
                      primary={`Consumer: ${complaint.consumerName}`}
                      secondary={`Service: ${complaint.service_type} - Date: ${complaint.date}`}
                    />
                  </ListItem>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                  >
                    {complaint.content}
                  </Typography>
                  {idx < provider.complaints.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ComplaintsPanel;
