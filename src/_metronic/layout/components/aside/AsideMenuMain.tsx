/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>


    <h2>Stotte Modules</h2>
    
      <AsideMenuItem
        to='/stotter'
        icon='/media/equalizer.svg'
        title= 'Stotter' /*{intl.formatMessage({id: 'MENU.DASHBOARD'})}*/
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/formal'
        icon='/media/rocket.svg'
        title='Formal'
        fontIcon='bi-layers'
      />
        <AsideMenuItem
        to='/organisation'
        icon='/media/boatsafety.svg'
        title='Organisasjoner'
        fontIcon='bi-layers'
      />



    </>
  )
}
