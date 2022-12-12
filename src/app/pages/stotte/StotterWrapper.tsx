/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'
import {ChartsWidget1,ChartsWidget2,ChartsWidget3,ChartsWidget4,ChartsWidget5,ChartsWidget6,ChartsWidget7,ChartsWidget8} from '../../../_metronic/partials/widgets'

const StotterWrapper: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Header')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>

<h4>Kommunication</h4>
<div className='container'>
   <div className="row">

<div className='col-xl-4'>

    <ChartsWidget3 className={''} />
   

 </div>
 <div className='col-xl-4'>

<ChartsWidget3 className={''} />


</div><div className='col-xl-4'>

<ChartsWidget3 className={''} />


</div>
 
   </div>

  
<div className='row'>
<div  style={{marginBottom: "25px"}}></div>


</div>
<div className='row'>

    <div className='card'>
<table className="table gs-7 gy-7 gx-7"  style={{fontWeight:"Bold",paddingTop:"10px"}}>
  <thead style={{fontWeight:500,backgroundColor:'#F3F6F9',color:"#B5B5C3"}}>
      <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
          <th>ORGANISASJON</th>
          <th>FORMAL</th>
          <th>STOTTESPILLERE</th>
          <th>STOTTER</th>
          <th>INNSAMLET</th>
          
      </tr>
  </thead>
  <tbody>
<tr>
<td><img src="/media/logos/demo7.svg"/>    Vilking</td><td>5</td><td>259</td><td>337</td><td>210237</td>
</tr>
<tr>
<td><img src="/"/>    Madia</td><td>5</td><td>400</td><td>337</td><td>210237</td>
</tr>
<tr>
<td><img src="/"/>    Redd barna</td><td>5</td><td>350</td><td>337</td><td>210237</td>
</tr>
<tr>
<td><img src="/"/>    Stotte Ke</td><td>5</td><td>900</td><td>337</td><td>210237</td>
</tr>
 
 


  </tbody>


</table></div>
</div></div>
    </>
  )
}

export {StotterWrapper}
