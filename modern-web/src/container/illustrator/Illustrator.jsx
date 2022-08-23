import React from 'react';
import './illustrator.css';
import { RiMedal2Fill, RiEarthLine, RiProfileLine, RiRocket2Line, RiThumbUpFill } from 'react-icons/ri';

const Illustrator = () => {
  return (
    <div className='container'>
      <div className='datazip_illustrator'>
        <div className='datazip_illustrator-content'>
          <h1>Build up the whole picture</h1>
          <p>No matter if you are a data analyst or a business user, you can use the tool stack to build up the whole picture of your data.</p>
        </div>
        <div className='datazip_illustrator-items'>

          <div className='datazip_illustrator-item'>
            <RiMedal2Fill />
            <h2>No-Code</h2>
            <p>A no-code interface brings clarity and keeps it simple.</p>
          </div>
          <div className='datazip_illustrator-item'>
            <RiEarthLine />
            <h2>Managed</h2>
            <p>We manage the versions, the dependencies, the scaling workflow so that your valuable time is saved .</p>
          </div>
          <div className='datazip_illustrator-item'>
            <RiProfileLine />
            <h2>Reliable</h2>
            <p>With us, your data infrastructure is reliable and so will your data be too.</p>
          </div>
          <div className='datazip_illustrator-item'>
            <RiRocket2Line />
            <h2>Ready to Deploy</h2>
            <p>We have pre-configured some of the best data tools that business of all kinds require as a quick set-up.</p>
          </div>
          <div className='datazip_illustrator-item'>
            <RiThumbUpFill />
            <h2>Faster Collaboration</h2>
            <p>Now data and business teams can collaborate much faster and waiting time for the right data is minimal.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Illustrator