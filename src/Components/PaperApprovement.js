import React from 'react';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const PaperApprovement = () => {

    const emails = [
        'user1@gmail.com',
        'user2@gmail.com',
        'user3@gmail.com',
        'user4@gmail.com',
      ];
    
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Paper Approval
      </Typography>
      <List>
        {emails.map((email) => (
          <ListItem button key={email} component={Link} to={`/paper-approval/${email}`}>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PaperApprovement;
