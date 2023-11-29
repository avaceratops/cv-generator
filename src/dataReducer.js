import blankData from './blankData.json';
import exampleData from './exampleData.json';

let nextId = 0;

function createNewSection(category) {
  const education = { institute: '', qualification: '' };
  const experience = { employer: '', position: '' };

  const base = {
    id: nextId++,
    isOpen: true,
    location: '',
    yearStart: '',
    yearEnd: '',
    desc: '',
  };
  return Object.assign({}, base, category === 'education' ? education : experience);
}

function findSectionById(array, id) {
  return array.find((s) => s.id == id);
}

export default function dataReducer(draft, action) {
  switch (action.type) {
    case 'change-personal': {
      draft.personal[action.key] = action.value;
      break;
    }
    case 'add-section': {
      const newSection = createNewSection(action.category);
      draft[action.category].push(newSection);
      break;
    }
    case 'change-section': {
      const section = findSectionById(draft[action.category], action.id);
      section[action.key] = action.value;
      break;
    }
    case 'delete-section': {
      draft[action.category] = draft[action.category].filter((s) => s.id != action.id);
      break;
    }
    case 'toggle-section': {
      const section = findSectionById(draft[action.category], action.id);
      section.isOpen = !section.isOpen;
      break;
    }
    case 'clear-data': {
      return blankData;
    }
    case 'load-example': {
      return exampleData;
    }
    case 'revert-changes': {
      return action.cache;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
