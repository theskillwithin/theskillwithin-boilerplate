// only use this if you don't want tree shaking of icons
// otherwise use icons directly
import SvgMoneyBag from '~/components/icons/MoneyBag'

const iconsMap = new Map()
iconsMap.set('money-bag', SvgMoneyBag)

export const iconList = Array.from(iconsMap.keys())

const Icon = ({ icon, ...props }) => {
  const IconComponent = iconsMap.get(icon)

  return <IconComponent {...props} />
}

export default Icon
