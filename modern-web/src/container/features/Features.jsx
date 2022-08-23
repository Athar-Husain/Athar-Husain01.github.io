import React from 'react';
import './features.css';
import { features_images01, features_images02, features_images03 } from './import';
import { Feature, FeatureRight } from '../../components';


const Features = () => {
  return (
    <div className='container'>
      <div className='datazip_features section_padding'>
        <div className='datazip_features-content'>
          <h1>Workflow that just works</h1>
          <p>Reliable and scalable straight-forward deployments that are powered by a modern and scalable architecture. You can now easily build trusted data asserts.</p>
        </div>
        <Feature imgUrl={features_images01} sub_title='FAST WORKFLOW' title='Full-stack Data Platform' content='All the necessary tools for data ingestion, data warehousing, data transformation and BI can be deployed on your cloud infrastructure but managed by Datazip.' />
        <div>
          <FeatureRight imgUrl={features_images02} sub_title='CENTRALIZE YOUR DATA' title='Data-driven insights' content='Become truly data-driven by working with all the relevant data with ea  se. Spend more time generating actionable insights and not fixing broken data pipelines.' />
        </div>
        <Feature imgUrl={features_images03} sub_title='STREAMLINE DATA' title='Drive Collaboration' content='You no longer need to balance between working fast with your data and setting up the required data flows. Help your teams collaborate much faster.' />
      </div>
    </div>
  )
}

export default Features