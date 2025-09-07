import React from 'react';

const LiveAct: React.FC = () => {
  return (
    <div style={{
      width: '90%',
      margin: '0 auto',
      backgroundColor: '#000000cf',
      scrollMarginTop: '500px',
      paddingTop: 20,
      paddingBottom: 30,
      paddingLeft: 35,
      paddingRight: 35,
      marginTop: 200,
      textAlign: 'center'
    }}>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/wwIQL0ACsh4"
        title="Balcosmos – Full Live Set"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveAct;
