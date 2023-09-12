import React from 'react'
import DynamicChart from './Dynamic'

export default function ChartDisplay({ text }) {
   
    return (
        <div>
            { text === 'meters' && <DynamicChart unit="meters" /> }
            { text === 'spm' && <DynamicChart unit="spm" /> }
            { text === 'watts' && <DynamicChart unit="watts" /> }
        </div>
    )
}
