import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'

const SlideshowSlide = React.forwardRef(function SlideshowSlide(props, ref) {
  const { children, className, component: Component = 'div', ...other } = props

  const [count, setCount ] = React.useState(0);

  const handleOnClick = () => {
    setCount(count => count + 1)
  }

  return (
    <Component className={classnames('swiper-slide', className)} ref={ref} {...other}>
      {children}
      {count}
      <button onClick={handleOnClick}>++</button>
    </Component>
  )
})

SlideshowSlide.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

SlideshowSlide.uiName = 'SlideshowSlide'

export default SlideshowSlide
