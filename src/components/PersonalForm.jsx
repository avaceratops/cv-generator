import Form from './Form';
import FormField from './FormField';

export default function PersonalForm({ personal, onChangePersonal }) {
  return (
    <section className="section-container">
      <Form>
        <FormField
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={personal.firstName}
          onChange={onChangePersonal}
        />
        <FormField
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={personal.lastName}
          onChange={onChangePersonal}
        />
        <FormField
          id="profession"
          label="Profession"
          value={personal.profession}
          onChange={onChangePersonal}
        />
        <FormField
          id="contactNumber"
          label="Contact number"
          type="tel"
          autoComplete="tel"
          value={personal.contactNumber}
          onChange={onChangePersonal}
        />
        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          value={personal.email}
          onChange={onChangePersonal}
        />
        <FormField
          id="location"
          label="Location"
          autoComplete="address-level2"
          value={personal.location}
          onChange={onChangePersonal}
        />
      </Form>
    </section>
  );
}
