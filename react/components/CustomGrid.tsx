import React, { ReactNode } from 'react'
import customGridSchema from '../schemas/custom-grid-schema'
import CustomGridItemBig from './CustomGridItemBig'
import CustomGridItemSmall from './CustomGridItemSmall'

import styles from './styles.css'

type Props = {
    gridType: number,
    children: [
        ReactNode, 
        ReactNode, 
        ReactNode
    ]
}

const CustomGrid =({gridType = 1, children}: Props)=> {
    console.log("gridType: ", gridType )

     const gridTypeClass:string = `grid__${gridType}`

    return <div className={styles[gridTypeClass]}>
                <CustomGridItemBig
                    element={children[0]}
                    />
                <CustomGridItemSmall 
                    elementOne={children[1]}
                    />
                <CustomGridItemSmall 
                    elementOne={children[2]}
                />
            </div>
}

CustomGrid.schema = customGridSchema

export default CustomGrid