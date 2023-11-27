import Form from './Form';
import FormField from './FormField';

export default function PersonalForm({ onChangePersonal }) {
  return (
    <section className="section-container">
      <Form>
        <FormField
          id="firstName"
          label="First name"
          autoComplete="given-name"
          onChange={onChangePersonal}
        />
        <FormField
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          onChange={onChangePersonal}
        />
        <FormField id="profession" label="Profession" onChange={onChangePersonal} />
        <FormField
          id="contactNumber"
          label="Contact number"
          type="tel"
          autoComplete="tel"
          onChange={onChangePersonal}
        />
        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          onChange={onChangePersonal}
        />
        <FormField
          id="location"
          label="Location"
          autoComplete="address-level2"
          onChange={onChangePersonal}
        />
      </Form>
    </section>
  );
}
