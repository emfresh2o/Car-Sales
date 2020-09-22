export const ADD_FEATURE_ITEM = 'ADD_FEATURE_ITEM'
export const REMOVE_FEATURE_ITEM = 'REMOVE_FEATURE_ITEM'

export const addFeature = action => {
  return { type: ADD_FEATURE_ITEM, payload: action }
}

export const removeFeature = action => {
  return { type: REMOVE_FEATURE_ITEM, payload: action }
}