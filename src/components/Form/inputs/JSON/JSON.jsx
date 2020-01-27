import React from 'react'
import { JsonEditor as Editor } from 'jsoneditor-react'
import GridItem from '../../../../components/Grid/GridItem.jsx'
import './JSON.scss'

function JSON ({ onChange, value, layout, sm }) {
  const getSM = () => {
    if (sm) return sm
    return layout === 'vertical' ? 12 : 7
  }

  return (
    <GridItem sm={getSM()} xs={12}>
      <div className="mt10 mb10">
        <Editor
          allowedModes={['code', 'tree']}
          mode="code"
          navigationBar={false}
          onChange={onChange}
          search={false}
          statusBar={false}
          value={value}
        />
      </div>
    </GridItem>
  )
}

export default JSON
