import CVHeading from './CVHeading';
import '../styles/CV.scss';

export default function CV({ personal, education, experience }) {
  return (
    <article className="cv">
      <h2 className="cv__name">
        <span className="cv__first-name">{personal.firstName}</span>{' '}
        <span className="cv__last-name">{personal.lastName}</span>
      </h2>
      <section className="cv__personal">
        <p className="cv__profession">{personal.profession}</p>
        <p>
          {personal.contactNumber && (
            <>
              <span className="cv__personal-detail">
                <i className="fa-solid fa-phone"></i> {personal.contactNumber}
              </span>
              <span className="cv__pipe">{(personal.email || personal.location) && ' | '}</span>
            </>
          )}

          {personal.email && (
            <>
              <span className="cv__personal-detail">
                <i className="fa-solid fa-envelope"></i>{' '}
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </span>
              <span className="cv__pipe">{personal.location && ' | '}</span>
            </>
          )}

          {personal.location && (
            <span className="cv__personal-detail">
              <i className="fa-solid fa-location-dot"></i> {personal.location}
            </span>
          )}
        </p>
      </section>

      {education.length > 0 && (
        <section className="cv__education">
          <CVHeading text="Education" />
          {education.map((section) => (
            <article key={section.id} className="cv__section">
              <p className="cv__institute">{section.institute}</p>
              <p className="cv__location">{section.location}</p>
              <p className="cv__qualification">{section.qualification}</p>
              <p className="cv__year">
                {section.yearStart}
                {section.yearStart && section.yearEnd && ' – '}
                {section.yearEnd}
              </p>
              <p className="cv__desc">{section.desc}</p>
            </article>
          ))}
        </section>
      )}

      {experience.length > 0 && (
        <section className="cv__education">
          <CVHeading text="Experience" />
          {experience.map((section) => (
            <article key={section.id} className="cv__section">
              <p className="cv__employer">{section.employer}</p>
              <p className="cv__location">{section.location}</p>
              <p className="cv__position">{section.position}</p>
              <p className="cv__year">
                {section.yearStart}
                {section.yearStart && section.yearEnd && ' – '}
                {section.yearEnd}
              </p>
              <p className="cv__desc">{section.desc}</p>
            </article>
          ))}
        </section>
      )}
    </article>
  );
}
