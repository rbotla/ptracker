let featureId = 10;
let riskId = 10;

const initiatives = (state = {initiatives: initialInitiatives}, action) => {
  switch (action.type) {
    case 'ADD_INITIATIVE':
      return [
        ...state,
        {
          id: action.id,
          ...action.initiative
        }
      ]
    case 'GET_INITIATIVE_DETAILS':
      const selectedInitiative = state.initiatives && state.initiatives.filter(x => x.id === action.id)[0]
      return {
        ...state,
        ...{
          selectedInitiative
        }
      }
    case 'CREATE_NEW_RISK':
      const _foundIndex = state.initiatives && state.initiatives.findIndex(x => x.id === action.id)
      let __selectedInitiative = state.initiatives && state.initiatives[_foundIndex];
      __selectedInitiative.risks.push({id: ++riskId+"", risk: action.risk, description: action.risk, status: 'open', owner: 'rbotla'})
      let _newInitiativesList = state.initiatives;
      _newInitiativesList[foundIndex] = __selectedInitiative;
      return {
        ...state,
        ...{
          selectedInitiative: __selectedInitiative
        },
        ...{
          initiatives: _newInitiativesList
        }
      }
    case 'CREATE_NEW_FEATURE':
      const foundIndex = state.initiatives && state.initiatives.findIndex(x => x.id === action.id)
      let _selectedInitiative = state.initiatives && state.initiatives[foundIndex];
      _selectedInitiative.features.push({id: ++featureId+"", name: action.feature, description: action.feature, progress: 0, })
      let newInitiativesList = state.initiatives;
      newInitiativesList[foundIndex] = _selectedInitiative;
      return {
        ...state,
        ...{
          selectedInitiative: _selectedInitiative
        },
        ...{
          initiatives: newInitiativesList
        }
      }
    default:
      return state
  }
}

export default initiatives;

const initialInitiatives = [
  {
    id: '123', name: 'Revenue Recognition', progress: 37, status: 'G', stage: 'Implementing',
    description: 'An initiative to comply with 606 revenue recognition standards. The Accounting Standard Codification 606, or ASC 606, made its debut in May 2014. It is an industry-neutral revenue recognition model designed to increase financial statement comparability among companies and industries. The objective is to decrease complexity involved with the current models for revenue recognition.',
    pm: ['ehaynes','lcampbell'], 
    essOwners: ['bbajaj'],
    customers: ['jonathan'],
    features: [
      {id: '1', name: 'Product GL mapping', description: 'Product GL mapping', progress: 23, status: 'G', release: 'Revrec V1'},
      {id: '2', name: 'Product bundling', description: 'Product bundling', progress: 54, status: 'Y', release: 'Revrec V1'},
      {id: '3', name: 'Tiered pricing matrix', description: 'Tiered pricing matrix', progress: 100, status: 'R', release: 'Revrec V1'},
      {id: '4', name: 'Revenue contract grouping', description: 'Revenue contract grouping', progress: 36, status: 'G', release: 'Revrec V2'},
      {id: '5', name: 'Revenue contract treatment', description: 'Revenue contract treatment', progress: 72, status: 'G', release: 'Revrec V2' },
      {id: '6', name: 'Billing Id Mapping', description: 'Product bundling', progress: 92, status: 'G', release: 'Revrec V2' },
    ],
    releases: [
      {id: '1', name: 'Revrec V1', releaseDate: '11/30/2018', status: 'G'},
      {id: '2', name: 'Revrec V2', releaseDate: '12/30/2018', status: ''},
      {id: '3', name: 'Revrec V3', releaseDate: '1/30/2019', status: ''},
    ],
    updates: [
      'UPDATE 1',
      'UPDATE 2'
    ],
    risks: [
      {
        risk:'ERP rollout delay', 
        description: 'Data conversions of master and transactional data are normally the number one reason for ERP implementation delays. While companies understand the data elements that exist in their current ERP systems really well and can effectively estimate the effort it would take to map these data elements into new data elements required by their new ERP software.', 
        likelihood: 'high', severity: 'high', owner: 'rbotla', action: '', status: 'open', notes: ''
      }
    ],
    dependencies: [
      {description: ''}
    ]
  },
  {
    id: '124', name: 'Financial Datamart', progress: 54, status: 'Y', stage: 'Done',
    description: 'Provides time tracking analytics',
    pm: ['ehaynes','lcampbell'], 
    essOwners: ['bbajaj'],
    customers: ['jonathan'],
    features: [
      {id: '1', name: 'Time tracking report', description: 'Time tracking report', progress: 67, },
      {id: '2', name: 'New chart of accounts', description: 'Product bundling', progress: 12, },
    ],
    updates: [
      'UPDATE 1',
      'UPDATE 2'
    ],
    risks: [
      {description: '', likelihood: 'High', impact: 'High'}
    ],
    dependencies: [
      {description: ''}
    ]
  },
]
