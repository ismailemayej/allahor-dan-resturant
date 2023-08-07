const MenuItem = ({ items }) => {
  const { name, image, price, recipe } = items;
  return (
    <div className="flex my-4">
      <img
        src={image}
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="rounded-lg w-[120px]"
        alt=""
      />
      <div className="pl-5">
        <div className="flex">
          <h2 className="uppercase font-semibold">{name}</h2>{" "}
          <p className="text-yellow-500 right-50">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
