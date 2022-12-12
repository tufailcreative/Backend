import React, {FC} from 'react'
import {
  MixedWidget6,
  MixedWidget7,
  MixedWidget8,
  MixedWidget9,
 
  
} from '../../../../_metronic/partials/widgets'
/*
import {
  
  MixedWidget12,
  
} from 'MixedWidget12'
*/
import {
  
  MixedWidget13
  
} from '../../../../_metronic/partials/widgets/mixed/MixedWidget13'

const DashboardGraphs: FC = () => {
  return (
    <>
  

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget6
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
        <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='success'
            chartHeight='200px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
        <MixedWidget8
            className='card-xl-stretch mb-5 mb-xl-8'
            chartColor='danger'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
      
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
        <MixedWidget9
            className='card-xl-stretch mb-xl-8'
            chartColor='danger'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
       
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      

    

 
    </>
  )
}
  
export {DashboardGraphs}
