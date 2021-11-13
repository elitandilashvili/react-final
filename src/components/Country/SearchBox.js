export const Search = (props) => {
  return (
    <div>
      <form>
        <input
          type="serch"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete="off"
          onChange={(e) => {
            props.setSearchTest(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
