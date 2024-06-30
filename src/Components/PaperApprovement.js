import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import axios from 'axios';

const PaperApprovement = () => {
    const [serviceProviders,setServiceProviders] = useState([]);
    // const emails = [
    //     'user1@gmail.com',
    //     'user2@gmail.com',
    //     'user3@gmail.com',
    //     'user4@gmail.com',
    //   ];

      useEffect(()=>{
        axios.get('http://localhost:8000/api/serviceProvider/unapproved').then((res)=>{
          setServiceProviders(res.data);
          // console.log(res.data);
        })
      },[])


    if(!serviceProviders)
        return <p> loading.....</p>
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Paper Approval
      </Typography>
      <List>
        {serviceProviders.map((sp) => (
          <ListItem button key={sp._id} component={Link} to={`/paper-approval/${sp.email}`}>
            <ListItemText primary={sp.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PaperApprovement;
