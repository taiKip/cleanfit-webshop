import React from 'react'
import Shimmer from './Shimmer'
import classes from './SkeletonItem.module.css'
const SkeletonItem = () => {
    return (
        <li className={classes.item}>
            <Shimmer/>
        </li>
    )
}

export default SkeletonItem
