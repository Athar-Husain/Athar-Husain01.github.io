import React from 'react';
import './feature.css';

const Feature = ({ imgUrl, sub_title, title, content }) => {
  return (
    
      <div className='datazip_features-container_feature'>
        <div className='datazip_features-container_feature-image'>
          <img src={imgUrl} alt='image_here' />
        </div>
        <div className='datazip_features-container-feature-content'>
          <div className='datazip_feature-inner-content'>
            <p className='sub-title'>{sub_title}</p>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
   
  )
}

export default Feature