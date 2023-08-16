import { Grid, GridColumn, Form, Input } from "semantic-ui-react";
import { useState } from "react";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");
  const onFormSubmit = () => {
    setSearchedQuery(value);
  };
  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <GridColumn>
        <h2 className="search-heading">
          Search Recipe with{" "}
          <span style={{ color: "#2185D0" }}>Our Recipe</span>
        </h2>
        <h4>Input recipe or ingredient seperated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="pizza,burger,fries"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </GridColumn>
    </Grid>
  );
};
export default Search;
