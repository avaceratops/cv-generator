import { useImmerReducer } from 'use-immer';
import Collapsible from './Collapsible';
import CV from './CV';
import HamburgerMenu from './HamburgerMenu';
import PersonalForm from './PersonalForm';
import exampleData from '../exampleData.json';
import '../styles/App.scss';

function dataReducer(draft, action) {
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

export default function App() {
  const [data, dispatch] = useImmerReducer(dataReducer, exampleData);

  const handleChangePersonal = (e) => {
    dispatch({
      type: 'change-personal',
      key: e.target.id,
      value: e.target.value,
    });
  };

  return (
    <>
      <HamburgerMenu>
        <Collapsible heading="Personal" icon="user">
          <PersonalForm onChangePersonal={handleChangePersonal} />
        </Collapsible>

        <Collapsible heading="Education" icon="graduation-cap"></Collapsible>

        <Collapsible heading="Experience" icon="briefcase"></Collapsible>
      </HamburgerMenu>

      <CV personal={data.personal} education={data.education} experience={data.experience} />
    </>
  );
}
