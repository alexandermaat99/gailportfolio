import BackToPortfolio from "../../components/BackToPortfolio";
import CollectionCarousel from "../../components/CollectionCarousel";


export default function TechPacks() {
  const PantTechPack = [
    "Pant Tech Pack png-01.png",
    "Pant Tech Pack png-02.png",
    "Pant Tech Pack png-03.png",
    "Pant Tech Pack png-04.png",
    "Pant Tech Pack png-05.png",
    "Pant Tech Pack png-06.png",
    "Pant Tech Pack png-07.png",
    "Pant Tech Pack png-08.png",
    "Pant Tech Pack png-09.png",
    "Pant Tech Pack png-10.png",
    "Pant Tech Pack png-11.png"
  ];

  const SkirtTechPack = [
    "Skirt Tech Pack-01.png",
    "Skirt Tech Pack-02.png",
    "Skirt Tech Pack-03.png",
    "Skirt Tech Pack-04.png",
  ];

  return (
      <div>
        <BackToPortfolio />
        <CollectionCarousel
          title="Pant Tech Pack"
          images={PantTechPack}
          collectionPath="/PantTechPack"
        />
        <CollectionCarousel
          title="Skirt Tech Pack"
          images={SkirtTechPack}
          collectionPath="/SkirtTechPack"
        />
      </div>
    );
}
