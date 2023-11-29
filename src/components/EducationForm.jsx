import Form from './Form';
import FormField from './FormField';
import Sections from './Sections';

export default function EducationForm({
  education,
  onAddSection,
  onChangeSection,
  onDeleteSection,
  onToggleSection,
  onRevertChanges,
}) {
  const openSection = education.find((section) => section.isOpen);

  return (
    <section className="section-container">
      {openSection ? (
        <section data-category="education" data-id={openSection.id}>
          <Form onToggleSection={onToggleSection}>
            <FormField
              id="institute"
              label="Institute"
              value={openSection.institute}
              onChange={onChangeSection}
              required={true}
            />
            <FormField
              id="location"
              label="Location"
              value={openSection.location}
              onChange={onChangeSection}
            />
            <FormField
              id="qualification"
              label="Qualification"
              value={openSection.qualification}
              onChange={onChangeSection}
            />
            <FormField
              id="yearStart"
              label="Year started"
              value={openSection.yearStart}
              onChange={onChangeSection}
            />
            <FormField
              id="yearEnd"
              label="Year ended"
              value={openSection.yearEnd}
              onChange={onChangeSection}
            />
            <FormField
              id="desc"
              label="Description"
              type="textarea"
              value={openSection.desc}
              onChange={onChangeSection}
            />
            <section className="button-container button-container--editing">
              <button className="button button--cancel" type="button" onClick={onRevertChanges}>
                Cancel
              </button>
              <button className="button button--save" type="submit">
                Save
              </button>
            </section>
          </Form>
        </section>
      ) : (
        <Sections
          array={education}
          category="education"
          headingKey="institute"
          onAddSection={onAddSection}
          onDeleteSection={onDeleteSection}
          onToggleSection={onToggleSection}
        />
      )}
    </section>
  );
}
