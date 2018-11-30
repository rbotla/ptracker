import { connect } from 'react-redux'
import { getInitiatives, 
          VisibilityFilters, 
          addInitiative, 
          updateInitiative,
          fetchInitiativeDetails,
          onFeatureCreate,
          onRiskCreate,
        } from '../../actions'
//import WeeklyStatus from './components/WeeklyStatus'
import Initiative from './Initiative'

const getVisibleinitatives = (initatives, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return initatives
    case VisibilityFilters.SHOW_COMPLETED:
      return initatives.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return initatives.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  initiatives: getVisibleinitatives(state.initiatives.initiatives, state.visibilityFilter), //state.visibilityFilter)
  selectedInitiative: state.initiatives.selectedInitiative,
})

const mapDispatchToProps = dispatch => ({
  fetchInitiativeDetails: id => dispatch(fetchInitiativeDetails(id)),
  onFeatureCreate: (id, feature) => dispatch(onFeatureCreate(id, feature)),
  onRiskCreate: (id, risk) => dispatch(onRiskCreate(id, risk))
  //toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initiative)
//)(WeeklyStatus)
