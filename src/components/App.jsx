import { useState } from 'react';
import { useImmerReducer } from 'use-immer';
import Collapsible from './Collapsible';
import ConfirmDialog from './ConfirmDialog';
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
  const [cache, setCache] = useState(null);

  const handleChangePersonal = (e) => {
    dispatch({
      type: 'change-personal',
      key: e.target.id,
      value: e.target.value,
    });
  };

  const handleAddSection = (e) => {
    setCache(data);
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

  const handleDeleteSection = (category, id) => {
    dispatch({ type: 'delete-section', category, id });
  };

  const handleToggleSection = (e) => {
    setCache(data);
    handleSection('toggle-section', e);
  };

  const handleClearData = () => {
    dispatch({ type: 'clear-data' });
  };

  const handleLoadExample = () => {
    dispatch({ type: 'load-example' });
  };

  const handleRevertChanges = () => {
    dispatch({ type: 'revert-changes', cache });
  };

  const handleSavePDF = () => {
    window.print();
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
            onRevertChanges={handleRevertChanges}
          />
        </Collapsible>

        <Collapsible heading="Experience" icon="briefcase">
          <ExperienceForm
            experience={data.experience}
            onAddSection={handleAddSection}
            onChangeSection={handleChangeSection}
            onDeleteSection={handleDeleteSection}
            onToggleSection={handleToggleSection}
            onRevertChanges={handleRevertChanges}
          />
        </Collapsible>

        <Collapsible heading="Controls" icon="gear" expanded={true}>
          <section className="control-container">
            <ConfirmDialog
              triggerClass="button button--clear"
              triggerText="Clear data"
              title="Clear data?"
              desc="This will delete all manually entered data, and cannot be undone."
              actionOnClick={handleClearData}
            />

            <ConfirmDialog
              triggerClass="button button--load"
              triggerText="Load example"
              title="Load example?"
              desc="This will replace all manually entered data with placeholder text, and cannot be undone."
              actionOnClick={handleLoadExample}
            />

            <button className="button button--pdf" onClick={handleSavePDF}>
              Save as PDF
            </button>
          </section>
        </Collapsible>
      </HamburgerMenu>

      <CV personal={data.personal} education={data.education} experience={data.experience} />
    </>
  );
}
