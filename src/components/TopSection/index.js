import React from 'react';

const TopSection = ({ filteredProducts }) => {
  return (
    <div style={styles.grid} aria-label='Filter section'>
      <h2 style={styles.heading}>Filter by</h2>
      <div style={styles.container}>
        <select style={styles.sort} aria-label='Sort by'>
          <option value='recommended'>Recommended</option>
          <option value='reviews'>Review: high to low</option>
        </select>
        <div style={styles.results} aria-live='polite'>
          {filteredProducts.length} results
        </div>
      </div>
    </div>
  );
};

export default TopSection;

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: '22px',
    margin: 0,
    paddingBottom: 20,
    textAlign: 'left',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'start',
  },
  sort: {
    padding: 4,
  },
};
