import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {DashboardGraphs} from './graph/DashboardGraphs'
import {
  ListsWidget4,
  MixedWidget8,
  MixedWidget3,
  ListsWidget9,
  TablesWidget9,
  ListsWidget3,
  StatisticsWidget4,
  ListsWidget2,
  ListsWidget6,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
       
     <div className='d-flex flex-wrap flex-stack mb-6'>
       

        <div className='d-flex my-2'>

      
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>
          30 Days
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
           
          >
          90 Days
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
          
        </div>
      </div>
    
      
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
        Oversikt Støtter
         
        </h3>

        <div className='d-flex my-2'>
        <div className='d-flex my-2'>

<a
href='#'
className='bg-white btn text-muted'
data-kt-menu-trigger='click'
data-kt-menu-placement='bottom-end'
>
Today
 
</a>
{/* begin::Menu */}
<div
className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
data-kt-menu='true'
>
{/* begin::Menu item */}
<div className='menu-item px-3'>
  <a className='menu-link px-3'>
  30 Days
  </a>
</div>
{/* end::Menu item */}

{/* begin::Menu item */}
<div className='menu-item px-3'>
  <a
    className='menu-link px-3'
   
  >
  90 Days
  </a>
</div>
{/* end::Menu item */}
</div>
{/* end::Menu */}
  
</div>
        </div>
      </div>
      <DashboardGraphs/>
    </>
  
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.DASHBOARD'})}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
