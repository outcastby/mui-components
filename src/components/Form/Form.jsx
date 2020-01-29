import React from 'react'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import Button from '../../components/CustomButtons/Button.jsx'
import PropTypes from 'prop-types'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  seed: 'mui-components-',
})

function Form ({ settings: { doubleActionsButtons }, customButtons, onSubmit, children }) {
  return (
    <JssProvider generateClassName={generateClassName}>
      <div id="form-container">
        <form>
          {doubleActionsButtons && <ActionButtons onSubmit={onSubmit} />}
          {children}
          {customButtons ? customButtons({ onSubmit }) : <ActionButtons onSubmit={onSubmit} />}
        </form>
      </div>
    </JssProvider>
  )
}

Form.defaultProps = {
  config: {},
  customButtons: null,
}

Form.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  config: PropTypes.object,
  customButtons: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  entity: PropTypes.object.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
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
  // eslint-disable-next-line react/no-unused-prop-types
  state: PropTypes.object.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
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
