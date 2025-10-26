import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StyledBoxContainer = styled(Box)(() => ({
  backgroundColor: "#000000cf",
  width: "90%",
  padding: 20,
  marginTop: '0',
  scrollMarginTop: "200px",
  textAlign: "center",
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 20,
}));

const Merch: React.FC = () => {
  return (
    <StyledBoxContainer id="merch">
      <StyledTypography variant='h5'>MERCHANDISE</StyledTypography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          style={{ borderRadius: '24px', border: 'none' }}
          src="https://embed.creator-spring.com/widget?slug=balcosmos&per=29&currency=&page=1&layout=grid-sm-4&theme=light"
          title="Balcosmos Merch store powered by Spring"
          width="100%"
          height="960"
        ></iframe>
      </div>
    </StyledBoxContainer>
  );
};

export default Merch;
