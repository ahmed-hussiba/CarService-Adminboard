import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, Button, Box, Dialog, DialogContent, DialogActions } from '@mui/material';

const pictures = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const EmailDetails = () => {
  const { email } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState('');

  const handleOpenModal = (pic) => {
    setSelectedPicture(pic);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Approve Pictures for {email}
      </Typography>
      <Grid container spacing={2}>
        {pictures.map((pic, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={pic}
                alt={`Picture ${index + 1}`}
                onClick={() => handleOpenModal(pic)}
                style={{ cursor: 'pointer' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogContent>
          <img src={selectedPicture} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
        <Button 
          variant='contained'
          onClick={() => console.log("Approved")}
          sx={{ backgroundColor: 'green', color: 'white' }}
        >
          Approve
        </Button>
        <Button 
          variant='contained'
          onClick={() => console.log("Declined")}
          sx={{ backgroundColor: 'red', color: 'white' }}
        >
          Decline
        </Button>
      </Box>
    </Container>
  );
};

export default EmailDetails;
