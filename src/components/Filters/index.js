import React from 'react';

const Filters = ({ priceRange, handlePriceRangeChange }) => {
  return (
    <>
      <h3>Price</h3>
      <div style={styles.filterContainer} className='filterContainer'>
        <div>
          <input
            type='checkbox'
            id='100-150'
            name='100-150'
            checked={priceRange.min === 100 && priceRange.max === 150}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor='100-150'>£100 - £150</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='150-200'
            name='150-200'
            checked={priceRange.min === 150 && priceRange.max === 200}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor='150-200'>£150 - £200</label>
        </div>
      </div>
    </>
  );
};

export default Filters;

const styles = {
  filterContainer: {
    marginBottom: '20px',
  },
};
