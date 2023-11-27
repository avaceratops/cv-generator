import Form from './Form';
import FormField from './FormField';
import Sections from './Sections';

export default function ExperienceForm({
  experience,
  onAddSection,
  onChangeSection,
  onDeleteSection,
  onToggleSection,
}) {
  const openSection = experience.find((section) => section.isOpen);

  return (
    <section className="section-container">
      {openSection ? (
        <section data-category="experience" data-id={openSection.id}>
          <Form onToggleSection={onToggleSection}>
            <FormField
              id="employer"
              label="Employer"
              value={openSection.employer}
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
              id="position"
              label="Position"
              value={openSection.position}
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
              <button className="button button--cancel" type="button" onClick={onToggleSection}>
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
          array={experience}
          category="experience"
          headingKey="employer"
          onAddSection={onAddSection}
          onDeleteSection={onDeleteSection}
          onToggleSection={onToggleSection}
        />
      )}
    </section>
  );
}
