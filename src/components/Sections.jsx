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
            <button className="button button--delete" onClick={onDeleteSection}>
              <i className="fa-solid fa-trash-can" aria-hidden="true"></i>
              <span className="fa-sr-only">Delete section</span>
            </button>
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
