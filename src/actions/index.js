let nextInitiativeId = 0

export const getInitiatives = filter => ({
  type: 'GET_INITIATIVES',
  filter
})

export const addInitiative = initiative => ({
  type: 'ADD_INITIATIVE',
  id: nextInitiativeId++,
  initiative
})

export const updateInitiative = initiative => ({
  type: 'UPDATE_INITIATIVE',
  initiative
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const fetchInitiativeDetails = id => ({
  type: 'GET_INITIATIVE_DETAILS',
  id
})

export const onFeatureCreate = (id, feature) => ({
  type: 'CREATE_NEW_FEATURE',
  id,
  feature
})

export const onRiskCreate = (id, risk) => ({
  type: 'CREATE_NEW_RISK',
  id,
  risk
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_MY: 'SHOW_MY',
}

