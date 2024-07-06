import useFetch from "../../utils/hooks";
import Figure from "../Figure";
import styled from "../../utils/styles/styled";
import { Fragment } from "react/jsx-runtime";

const Gallery: React.FC = () => {
  const { properties, isLoading, error } = useFetch("/Data/index.json");

  if (error) {
    <span>Il y a un problème</span>;
  }
  console.log(properties);
  return (
    <styled.StyledArticle>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        properties.map((data) => (
          <Fragment key={data.id}>
            <Figure
              key={data.id}
              src={data.pictures[0]}
              alt={data.title}
              text={data.location}
            />
          </Fragment>
        ))
      )}
    </styled.StyledArticle>
  );
};

export default Gallery;
