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

  const handleAddSection = (e) => {
    dispatch({
      type: 'add-section',
      category: e.currentTarget.dataset.category,
    });
  };

  const handleSection = (actionType, e) => {
    const container = e.target.closest('[data-id]');
    if (!container) return;

    dispatch({
      type: actionType,
      category: container.dataset.category,
      id: container.dataset.id,
      key: e.target.id,
      value: e.target.value,
    });
  };

  const handleChangeSection = (e) => {
    handleSection('change-section', e);
  };

  const handleDeleteSection = (e) => {
    handleSection('delete-section', e);
  };

  const handleToggleSection = (e) => {
    handleSection('toggle-section', e);
  };

  const handleClearData = () => {
    dispatch({ type: 'clear-data' });
  };

  const handleLoadExample = () => {
    dispatch({ type: 'load-example' });
  };

  return (
    <>
      <HamburgerMenu>
        <Collapsible heading="Personal" icon="user">
          <PersonalForm personal={data.personal} onChangePersonal={handleChangePersonal} />
        </Collapsible>

        <Collapsible heading="Education" icon="graduation-cap">
          <EducationForm
            education={data.education}
            onAddSection={handleAddSection}
            onChangeSection={handleChangeSection}
            onDeleteSection={handleDeleteSection}
            onToggleSection={handleToggleSection}
          />
        </Collapsible>

        <Collapsible heading="Experience" icon="briefcase">
          <ExperienceForm
            experience={data.experience}
            onAddSection={handleAddSection}
            onChangeSection={handleChangeSection}
            onDeleteSection={handleDeleteSection}
            onToggleSection={handleToggleSection}
          />
        </Collapsible>

        <section className="button-container">
          <button className="button button--clear" type="button" onClick={handleClearData}>
            Clear data
          </button>
          <button className="button button--load" type="button" onClick={handleLoadExample}>
            Load example
          </button>
        </section>
      </HamburgerMenu>

      <CV personal={data.personal} education={data.education} experience={data.experience} />
    </>
  );
}
