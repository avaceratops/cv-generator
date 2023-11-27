import { useImmerReducer } from 'use-immer';
import Collapsible from './Collapsible';
import CV from './CV';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import HamburgerMenu from './HamburgerMenu';
import PersonalForm from './PersonalForm';
import dataReducer from '../dataReducer';
import exampleData from '../exampleData.json';
import '../styles/App.scss';

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

        <Collapsible heading="Education" icon="graduation-cap">
          <EducationForm education={data.education} />
        </Collapsible>

        <Collapsible heading="Experience" icon="briefcase">
          <ExperienceForm experience={data.experience} />
        </Collapsible>
      </HamburgerMenu>

      <CV personal={data.personal} education={data.education} experience={data.experience} />
    </>
  );
}
