import React, { ReactNode } from 'react'
import styles from './styles.css'

type Props = {
    elementOne: ReactNode
}

const CustomGridItemSmall =({ elementOne }: Props)=> {
    return <div className={styles['grid__item--small']}>
                 { elementOne }
            </div>
}

export default CustomGridItemSmall