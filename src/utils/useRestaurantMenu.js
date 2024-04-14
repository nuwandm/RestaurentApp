import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);

      if (!data.ok) {
        throw new Error(`Failed to fetch menu. Status: ${data.status}`);
      }

      const json = await data.json();

      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error.message);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
