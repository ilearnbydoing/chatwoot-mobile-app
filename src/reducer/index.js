import { combineReducers } from 'redux';

import auth from './auth';
import inbox from './inbox';
import conversation from './conversation';
import settings from './settings';
import notification from './notification';
import agent from './agent';
import cannedResponseSlice from './cannedResponseSlice';
import conversationSlice from './conversationSlice';

const rootReducer = combineReducers({
  auth,
  inbox,
  conversation,
  settings,
  notification,
  agent,
  cannedResponses: cannedResponseSlice,
  conversations: conversationSlice,
});

export default (state, action) =>
  action.type === 'USER_LOGOUT'
    ? rootReducer({ settings: state.settings }, action)
    : rootReducer(state, action);
