import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const useCart = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["OrderItems", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
