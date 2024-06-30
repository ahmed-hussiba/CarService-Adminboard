import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, Button, Box, Dialog, DialogContent, DialogActions } from '@mui/material';
import { storage } from '../firebase'
import {ref,listAll,getDownloadURL} from 'firebase/storage'
import axios from 'axios';

const EmailDetails = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState('');
  const [imageList,setImageList] = useState([])
  const handleOpenModal = (pic) => {
    setSelectedPicture(pic);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const approveHandler = ()=>{
    axios.post('http://localhost:8000/api/serviceProvider/updateApprovalStatus',{email,status:"approved"}).then((res)=>{
      console.log(res.status);
    })
    .catch((err)=>{console.log(err);})
    navigate('/paper-approval')

  }

  const declineHandler = ()=>{
    axios.post('http://localhost:8000/api/serviceProvider/updateApprovalStatus',{email,status:"rejected"}).then((res)=>{
      console.log(res.status);
    })
    .catch((err)=>{console.log(err);})
    navigate('/paper-approval')

  }

  const imageListRef = ref(storage,'uploads/')
  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        if(item.name.split('_')[0] === email.split('.')[0] )
          {
            getDownloadURL(item).then((url)=>{
              setImageList((prev)=>[...prev,url]);
            })
          }
          else return
      })
    })
  },[])


  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Approve Pictures for {email}
      </Typography>
      <Grid container spacing={2}>
        {imageList.map((pic, index) => (
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
          onClick={approveHandler}
          sx={{ backgroundColor: 'green', color: 'white' }}
        >
          Approve
        </Button>
        <Button 
          variant='contained'
          onClick={declineHandler}
          sx={{ backgroundColor: 'red', color: 'white' }}
        >
          Decline
        </Button>
      </Box>
    </Container>
  );
};

export default EmailDetails;
