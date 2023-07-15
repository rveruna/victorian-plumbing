import React from 'react';

const Header = () => {
  return (
    <h1 style={styles.heading}>
      <img
        src={require('../../assets/images/logo.png')}
        alt='Green V graphic and Victorian Plumbing heading'
        style={styles.img}
      />
    </h1>
  );
};

export default Header;

const styles = {
  img: {
    width: 400,
  },
  heading: {
    margin: 0,
  },
};
