import React from 'react';
import { events, Event } from './eventData';
import { Box, Typography, Button, Grid, styled } from '@mui/material';

const StyledBoxContainer = styled(Box)(() => ({
  backgroundColor: "#000000cf",
  width: "90%",
  padding: 20,
  marginTop: '50px',
  scrollMarginTop: "200px",
  textAlign: "center",
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 20,
}));

const StyledGridContainer = styled(Grid)(() => ({
  justifyContent: "center",
  marginTop: 15,
}));

const EventCard = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  padding: '12px',
  margin: 0,
  textAlign: 'left',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

const Events: React.FC = () => {
  return (
    <StyledBoxContainer id="events">
      <StyledTypography variant='h5'>TOUR DATES</StyledTypography>
      <StyledGridContainer container spacing={1}>
        {[...events]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((event: Event, index: number) => (
            <Grid item xs={12} sm={12} md={10} lg={8} key={index}>
              <EventCard>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', marginBottom: 0.5 }}>
                      {event.date}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'lightgray' }}>
                      {event.name || 'TBA'} - {event.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    {event.ticketsUrl ? (
                      (() => {
                        const currentDate = new Date();
                        const eventDate = new Date(event.date);
                        const isPastEvent = eventDate < currentDate;

                        return (
                          <Button
                            variant="contained"
                            href={event.ticketsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: '#FFD700',
                              color: 'black',
                              '&:hover': {
                                backgroundColor: '#FFC700',
                              },
                              minWidth: '120px',
                            }}
                          >
                            {isPastEvent ? 'Event Info' : 'Buy Tickets'}
                          </Button>
                        );
                      })()
                    ) : (
                      (() => {
                        const currentDate = new Date();
                        const eventDate = new Date(event.date);
                        const isPastEvent = eventDate < currentDate;

                        return (
                          <Button variant="outlined" disabled sx={{ minWidth: '120px' }}>
                            {isPastEvent ? 'Past Event' : 'Coming Soon'}
                          </Button>
                        );
                      })()
                    )}
                  </Grid>
                </Grid>
              </EventCard>
            </Grid>
          ))}
      </StyledGridContainer>
    </StyledBoxContainer>
  );
};

export default Events;
