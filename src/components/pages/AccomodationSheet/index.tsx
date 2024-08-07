import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Property } from "../../../utils/hooks/useFetch";
import useFetch from "../../../utils/hooks/useFetch";
import Carousel from "../../Carousel";
import "../../../utils/styles/Sass/AccomodationSheet.scss";
import Equipment from "../../Equipment";
import Tag from "../../Tag";
import Description from "../../Description";
import Rating from "../../Rating";
import Profile from "../../Profile";
import Loader from "../../Loader";

interface Dropdown {
  description: boolean;
  equipment: boolean;
}

const AccomodationSheet = () => {
  const { fiche_logementId } = useParams<{ fiche_logementId: string }>();

  const [accomodationSheet, setAccomodationSheet] = useState<Property | null>(
    null
  );

  const [isOpenDropdown, setIsOpenDropDown] = useState<Dropdown>({
    description: false,
    equipment: false,
  });

  const { properties, isLoading, error } = useFetch("/Data/index.json");

  useEffect(() => {
    const foundProperty = properties.find(
      (property) => property.id === fiche_logementId
    );
    setAccomodationSheet(foundProperty || null);
  }, [fiche_logementId, properties]);

  const handleClickDescription = () => {
    setIsOpenDropDown((prev) => ({
      ...prev,
      description: !prev.description,
    }));
  };
  const handleClickEquipement = () => {
    setIsOpenDropDown((prev) => ({
      ...prev,
      equipment: !prev.equipment,
    }));
  };

  const errorPage = () => {
    return (
      <section className="ErrorPageContainer">
        <h1>404</h1>
        <span className="ErrorPage">
          {error ? `Error: ${error}` : "No property found."}
        </span>
      </section>
    );
  };

  if (isLoading) return <Loader />;
  if (error) return errorPage();
  if (!accomodationSheet) return errorPage();
  return (
    <section className="accomodationSheetContainer">
      <Carousel
        items={accomodationSheet?.pictures}
        title={accomodationSheet?.title}
      />
      <article className="articleAccomodation">
        <article className="articleContainerOne">
          <div>
            <article className="title">
              <h1>{accomodationSheet?.title}</h1>
              <p>{accomodationSheet?.location}</p>
            </article>
            <Tag items={accomodationSheet?.tags} />
          </div>
          <div className="profileRating">
            <Profile
              name={accomodationSheet?.host.name}
              picture={accomodationSheet?.host.picture}
            />
            <Rating rating={accomodationSheet?.rating} />
          </div>
        </article>
        <article className="articleContainerTwo">
          <Description
            text={accomodationSheet?.description}
            isOpen={isOpenDropdown.description}
            handleClick={handleClickDescription}
          />
          <Equipment
            items={accomodationSheet?.equipments}
            isOpen={isOpenDropdown.equipment}
            handleClick={handleClickEquipement}
          />
        </article>
      </article>
    </section>
  );
};

export default AccomodationSheet;
