import React from 'react';

import CryptoCard from './Crypto_Card';

const CryptoApp = () => {
    return(
      <div>
        <CryptoCard 
        name="Bitcoin" 
        symbol="BTC" />
      </div>
    )
  }

  export default CryptoApp;