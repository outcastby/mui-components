import React from 'react'
import { fp } from '@outcast.by/js-ext'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import { InputRow } from '@outcast.by/js-ext'
import PropTypes from 'prop-types'

function Form({
  settings: { doubleActionsButtons, fields, layout },
  customButtons,
  errors,
  type,
  entity,
  onChange,
  onSubmit,
  state,
  config,
}) {
  return (
    <div id="form-container">
      <form>
        {doubleActionsButtons && <ActionButtons onSubmit={onSubmit} />}
        {fields.map((field) => {
          const value = fp.getIn(state, field.path || [field.name])
          console.log('INPUT ROW', field, InputRow)
          return (
            <InputRow
              actionType={type}
              config={config}
              error={!!errors[field.name]}
              field={field}
              helpText={errors[field.name] ? errors[field.name][0] : ''}
              id={entity.id}
              key={field.name}
              layout={layout}
              onChange={onChange}
              success={false}
              value={value === 0 ? 0 : value || ''}
            />
          )
        })}
        {customButtons ? customButtons({ onSubmit }) : <ActionButtons onSubmit={onSubmit} />}
      </form>
    </div>
  )
}

Form.defaultProps = {
  config: {},
  customButtons: null,
}

Form.propTypes = {
  config: PropTypes.object,
  customButtons: PropTypes.func,
  entity: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  /**
   Form settings, can be used within CRUD of independently
   */
  settings: PropTypes.shape({
    doubleActionsButtons: PropTypes.bool,
    fields: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
  }).isRequired,
  state: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['new', 'edit']).isRequired,
}

export default Form

const ActionButtons = ({ onSubmit }) => {
  const handleBack = () => window.history.back()

  return (
    <GridContainer>
      <GridItem sm={3} xs={12} />
      <GridItem className="align-right" sm={7} xs={12}>
        <Button onClick={handleBack}>Back</Button>
        <Button color="success" onClick={onSubmit}>
          Save
        </Button>
      </GridItem>
    </GridContainer>
  )
}
