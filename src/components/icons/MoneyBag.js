import { string } from 'prop-types'

const SvgMoneyBag = ({ title, ...props }) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      style={{ verticalAlign: 'middle' }}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M8.875 4.563h5.25l1.928-2.913c.04-.082.123-.246.123-.369 0-.328-.328-.656-.656-.656H7.44c-.329 0-.657.328-.657.656 0 .123.082.287.123.37l1.969 2.912zm5.25 1.312h-5.25C.549 10.633 1 16.908 1 17.688c0 2.173 2.01 3.937 4.47 3.937h12.018c2.461 0 4.471-1.764 4.471-3.938 0-.779.41-7.095-7.834-11.812zm-1.928 11.402v.739c0 .205-.164.328-.369.328h-.697c-.205 0-.37-.123-.37-.328v-.739c-.41 0-1.066-.246-1.394-.492-.082-.04-.123-.164-.123-.287 0-.082.041-.164.082-.246l.533-.492c.082-.041.164-.082.246-.082.082 0 .165 0 .205.04.165.124.41.165.575.165h1.271c.287 0 .492-.246.492-.574 0-.246-.123-.493-.369-.575l-2.01-.574c-.82-.246-1.394-1.025-1.394-1.928 0-1.066.82-1.968 1.887-1.968v-.739c0-.205.164-.369.369-.369h.697c.205 0 .37.164.37.37v.738c.41 0 1.066.246 1.394.492.082.04.123.164.123.287 0 .082-.041.164-.082.246l-.533.492a.582.582 0 01-.246.082c-.082 0-.164 0-.206-.04-.164-.083-.41-.165-.574-.165h-1.271c-.287 0-.493.246-.493.574 0 .247.124.493.37.575l2.01.574a2.03 2.03 0 011.435 1.928c-.041 1.066-.861 1.968-1.928 1.968z"
        fill="currentColor"
      />
    </svg>
  )
}

SvgMoneyBag.defaultProps = {
  title: null,
}

SvgMoneyBag.propTypes = {
  title: string,
}

export default SvgMoneyBag
