import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <Header title="Our Recipes" bgClass="bg-image">
      <Button
        content="Search Recipes"
        color="primary"
        as={Link}
        to="/recipes"
        size="big"
      />
    </Header>
  );
};
export default Home;
