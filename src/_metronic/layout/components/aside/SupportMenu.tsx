/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function SupportMenu() {
  const intl = useIntl()

  return (
    <>
 <h2>Zendesk</h2>
      <AsideMenuItem
        to='/zendesk'
        icon='/media/equalizer.svg'
        title= 'Overview' /*{intl.formatMessage({id: 'MENU.DASHBOARD'})}*/
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='#'
        icon='/media/rocket.svg'
        title='Org. tickets'
        fontIcon='bi-layers'
      />
        <AsideMenuItem
        to='#'
        icon='/media/boatsafety.svg'
        title='Customer Service'
        fontIcon='bi-layers'
      />



    </>
  )
}
