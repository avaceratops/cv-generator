export default function Form({ onToggleSection, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onToggleSection(e);
  };

  return (
    <form className="form" method="POST" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
