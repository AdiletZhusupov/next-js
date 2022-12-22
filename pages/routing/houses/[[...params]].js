import { useRouter } from "next/router";

export default function FilteredHouses() {
  const houses = [...Array(101).keys()].slice(1);
  const iterateAvailableHouses = (el) => {
    return (
      <div>
        <h1>Available number of houses is {el.length}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {el.map((house, index) => (
            <p
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid tomato",
                marginRight: "5px",
              }}
              key={index}
            >
              {house}
            </p>
          ))}
        </div>
      </div>
    );
  };
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 0) {
    return <>{iterateAvailableHouses(houses)}</>;
  } else if (
    params.length === 2 &&
    0 <= +params[0] &&
    +params[0] < +params[1]
  ) {
    const filteredHouses = houses.filter((house) => {
      return +params[0] <= house && house <= +params[1];
    });
    return <>{iterateAvailableHouses(filteredHouses)}</>;
  }
  return <h1>There are no houses in the range of entered values</h1>;
}
