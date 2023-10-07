const FormElement = () => {
  return (
    <form>
      <label htmlFor="search-input">Search:</label>
      <input id="search-input" />
      <button aria-label="Submit" className="submit-btn">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
        />
      </button>
    </form>
  );
};

export default FormElement;
