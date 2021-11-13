export const Filter = (props) => {
  return (
    <section className="select filter-container">
      <div>
        <select
          onChange={(e) => {
            props.setRegions(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
