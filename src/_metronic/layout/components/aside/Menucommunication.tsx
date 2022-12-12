/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function MenuComunication() {
  const intl = useIntl()

  return (
    <>
 <h2>Communication</h2>
      <AsideMenuItem
        to='/kommunication'
        icon='/media/equalizer.svg'
        title= 'Overview' /*{intl.formatMessage({id: 'MENU.DASHBOARD'})}*/
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='#'
        icon='/media/rocket.svg'
        title='Organistaions'
        fontIcon='bi-layers'
      />
        <AsideMenuItem
        to='#'
        icon='/media/boatsafety.svg'
        title='Customer'
        fontIcon='bi-layers'
      />



    </>
  )
}
