import { CDN_URL } from "../utils/constants";

const FoodItem = ({name,description,imageId,cuisines,price}) => {
  

//   const { user } = useContext(UserContext);

  
  return (
    <div className="w-48 bg-pink-50 p-2 m-2 shadow-lg">
      <img
        className="w-48 p-1 m-1"
        alt="res-logo"
        src={CDN_URL + imageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      
      <h4>{price / 100} for two</h4>
    </div>
  );
};

export default FoodItem;
