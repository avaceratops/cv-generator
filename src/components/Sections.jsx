import ConfirmDialog from './ConfirmDialog';

export default function Sections({
  array,
  category,
  headingKey,
  onAddSection,
  onDeleteSection,
  onToggleSection,
}) {
  return (
    <>
      {array.map((section) => (
        <section key={section.id} className="section" data-category={category} data-id={section.id}>
          <span>{section[headingKey] || 'Unnamed'}</span>
          <section className="button-container">
            <ConfirmDialog
              triggerIcon="trash-can"
              triggerClass="button button--delete"
              triggerText="Delete section"
              title={`Delete ${section[headingKey]}?`}
              actionOnClick={() => onDeleteSection(category, section.id)}
            />
            <button className="button button--edit" onClick={onToggleSection}>
              <i className="fa-solid fa-pencil" aria-hidden="true"></i>
              <span className="fa-sr-only">Edit section</span>
            </button>
          </section>
        </section>
      ))}
      <button className="button button--add" data-category={category} onClick={onAddSection}>
        <i className="fa-solid fa-plus" aria-hidden="true"></i>
        <span>Add section</span>
      </button>
    </>
  );
}
