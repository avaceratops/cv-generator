export default function Form({ children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" method="POST" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
