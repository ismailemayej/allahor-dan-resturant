import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UserCart";

const FootCard = ({ items }) => {
  const { name, image, recipe, price, _id } = items;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [refetch] = useCart();
  const handleFoodCart = (item) => {
    if (user && user.email) {
      const CartItem = {
        MenuitemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(CartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Good job!", "Item added successfully", "success");
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Pleace logIn to order the food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "logIn now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="border card w-[80%] h-[80%] my-10 card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body  text-white">
          <div className="relative">
            <h2 className="card-title">{name}</h2>
            <h2 className="absolute top-0 right-0 text-amber-300 font-semibold text-2xl">
              ${price}
            </h2>
          </div>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleFoodCart(items.name)}
              className="btn btn-outline border border-b-4"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
