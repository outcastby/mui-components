import { primaryColor } from '../../assets/material-dashboard-pro-react.jsx'

const accordionStyle = (theme) => ({
  root: {
    flexGrow: 1,
  },
  expansionPanel: {
    backgroundColor: 'transparent',
    '&:before': {
      display: 'none !important',
    },
  },
  expansionPanelExpanded: {},
  expansionPanelSummary: {
    minHeight: 'auto !important',
    backgroundColor: 'transparent',
    padding: '0',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    color: '#3C4858',
    '&:hover': {
      color: primaryColor,
    },
  },
  expansionPanelSummaryExpanded: {
    color: primaryColor,
    '& $expansionPanelSummaryExpandIcon': {
      [theme.breakpoints.up('md')]: {
        top: 'auto !important',
        marginRight: '0',
      },
      transform: 'rotate(180deg)',
      [theme.breakpoints.down('sm')]: {
        top: '10px !important',
      },
    },
  },
  expansionPanelSummaryContent: {
    margin: '15px 0 !important',
    flex: 1,
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up('md')]: {
      top: 'auto !important',
      marginRight: '0',
    },
    transform: 'rotate(0deg)',
    color: 'inherit',
    [theme.breakpoints.down('sm')]: {
      top: '10px !important',
    },
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: '15px',
    fontWeight: 'bolder',
    marginTop: '0',
    marginBottom: '0',
    color: 'inherit',
    flex: 1,
  },
  expansionPanelDetails: {
    borderTop: '1px solid #ddd',
    padding: '15px 0px 5px',
    display: 'block',
  },
})

export default accordionStyle
