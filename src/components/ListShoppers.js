import React, { Component } from 'react';

class ListShoppers extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e8f5e9' }}>
        <h1 style={{ color: '#3F51B5' }}>Welcome to the Shop!</h1>
        <p>Explore our wide range of products and start shopping now!</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
    <img 
      src="C:\Users\pavan\OneDrive\Documents\MyProjects\pluck-and-pack\ALDI_2017.png" 
      alt="Aldi" 
      style={{ width: '150px', height: '150px', borderRadius: '10px', cursor: 'pointer' }}
    />

    <img 
      src="C:\Users\pavan\OneDrive\Documents\MyProjects\pluck-and-pack\Walgreens-Logo.png" 
      alt="Walgreens" 
      style={{ width: '150px', height: '150px', borderRadius: '10px', cursor: 'pointer' }}
    />
    <img 
      src="C:\Users\pavan\OneDrive\Documents\MyProjects\pluck-and-pack\Wendy's_full_logo_2012.svg.png" 
      alt="Wendys" 
      style={{ width: '150px', height: '150px', borderRadius: '10px', cursor: 'pointer' }}
    />
    <img 
      src="C:\Users\pavan\OneDrive\Documents\MyProjects\pluck-and-pack\Walmart-Logo.png" 
      alt="Walmart" 
      style={{ width: '150px', height: '150px', borderRadius: '10px', cursor: 'pointer' }}
    />
    <img 
      src = "C:\Users\pavan\OneDrive\Documents\MyProjects\pluck-and-pack\patelbrothers.png"
      alt="Indian Store" 
      style={{ width: '150px', height: '150px', borderRadius: '10px', cursor: 'pointer' }}
    />
  </div>

      </div>
    );
  }
}

export default ListShoppers;
