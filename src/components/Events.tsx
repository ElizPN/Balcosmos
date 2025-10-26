import React from 'react';
import { events, Event } from './eventData';
import { Box, Typography, List, ListItem, ListItemText, Button, Paper, Divider } from '@mui/material';

const Events: React.FC = () => {
  return (
    <Box id="events" sx={{ p: 3, color: 'white', width: '90%', scrollMarginTop: '200px' }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
        Tour Dates
      </Typography>
      <Paper sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <List>
          {events.map((event: Event, index: number) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  py: 2,
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {event.date}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" sx={{ color: 'lightgray' }}>
                      {event.location} - {event.venue}
                    </Typography>
                  }
                  sx={{ flex: '1 1 auto', mb: { xs: 2, sm: 0 } }}
                />
                {event.ticketsUrl ? (
                  <Button
                    variant="contained"
                    color="primary"
                    href={event.ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: '#FFD700',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: '#FFC700',
                      },
                    }}
                  >
                    Buy Tickets
                  </Button>
                ) : (
                  <Button variant="outlined" disabled>
                    Coming Soon
                  </Button>
                )}
              </ListItem>
              {index < events.length - 1 && <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Events;