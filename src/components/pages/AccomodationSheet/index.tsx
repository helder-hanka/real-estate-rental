import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Property } from "../../../utils/hooks";
import useFetch from "../../../utils/hooks";
import Carousel from "../../Carousel";
import "../../../utils/styles/Sass/AccomodationSheet.scss";

const AccomodationSheet = () => {
  const { fiche_logementId } = useParams<{ fiche_logementId: string }>();

  const [accomodationSheet, setAccomodationSheet] = useState<Property | null>(
    null
  );

  const { properties, isLoading, error } = useFetch("/Data/index.json");

  useEffect(() => {
    const foundProperty = properties.find(
      (property) => property.id === fiche_logementId
    );
    setAccomodationSheet(foundProperty || null);
  }, [fiche_logementId, properties]);
  // console.log(accomodationSheet);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!accomodationSheet) return <div>No property found.</div>;
  return (
    <section className="accomodationSheetContainer">
      <Carousel
        items={accomodationSheet?.pictures}
        title={accomodationSheet?.title}
      />
    </section>
  );
};

export default AccomodationSheet;
