import PropTypes from 'prop-types'
import React from 'react'
import Bullet from './bullet.js'
import cx from 'classnames'

const BASE_CLASS = 'sui-ListBullet'

const ListBullet = ({listItems, responsive, smallFont}) => {
  const listBulletClass = cx(BASE_CLASS, {
    [`${BASE_CLASS}--responsive`]: responsive,
    [`${BASE_CLASS}--smallFont`]: smallFont
  })

  return (
    <div className={listBulletClass}>
      {listItems &&
        listItems.map((item, index) => (
          <Bullet {...item} key={index} baseClass={BASE_CLASS} />
        ))}
    </div>
  )
}

ListBullet.displayName = 'ListBullet'

ListBullet.propTypes = {
  /**
   * List of bullet items
   */
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      illustration: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,

  /**
   * Responsive behaviour
   */
  responsive: PropTypes.bool,
  /**
   * Small font size
   */
  smallFont: PropTypes.bool
}

ListBullet.defaultProps = {
  responsive: false,
  smallFont: false
}

export default ListBullet
