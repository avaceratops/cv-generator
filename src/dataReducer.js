export default function dataReducer(draft, action) {
  switch (action.type) {
    case 'change-personal': {
      draft.personal[action.key] = action.value;
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
