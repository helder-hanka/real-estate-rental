import useFetch from "../../utils/hooks/useFetch";
import Figure from "../Figure";
import styled from "../../utils/styles/styled";
import { Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import Loader from "../Loader";

const Gallery: React.FC = () => {
  const { properties, isLoading, error } = useFetch("/Data/index.json");

  if (error) {
    <span>Il y a un problème</span>;
  }
  return (
    <styled.StyledArticle>
      {isLoading ? (
        <Loader />
      ) : (
        properties.map((data) => (
          <Fragment key={data.id}>
            <NavLink to={`/fiche-logement/${data.id}`}>
              <Figure key={data.id} src={data.cover} title={data.title} />
            </NavLink>
          </Fragment>
        ))
      )}
    </styled.StyledArticle>
  );
};

export default Gallery;
