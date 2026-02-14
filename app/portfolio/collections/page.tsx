import CollectionCarousel from "../../components/CollectionCarousel";
import BackToPortfolio from "../../components/BackToPortfolio";

// Images from public/CollectionA/ and public/CollectionB/
const COLLECTION_A_IMAGES = [
  "mood1.png",
  "fabric2.png",
  "illustrationGreen3.png",
  "illustrationYellow4.png",
  "flatGreen5.png",
  "flatYellow6.png",
];

const COLLECTION_B_IMAGES = [
  "mood1.png",
  "fabirc2.png",
  "illustration3.png",
  "idIllustration4.png",
  "illustration5.png",
  "idIllustration6.png",
];

export default function Collections() {
  return (
    <div className="bg-[#fffbeb] min-h-screen">
      <BackToPortfolio />
      <CollectionCarousel
        title="Fall/Winter Collection"
        images={COLLECTION_A_IMAGES}
        collectionPath="/CollectionA"
      />
      <CollectionCarousel
        title="Spring/Summer Collection"
        images={COLLECTION_B_IMAGES}
        collectionPath="/CollectionB"
      />
    </div>
  );
}
