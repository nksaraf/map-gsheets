export const fetchDataFromSheet = async () => {
  try {
    const response = await (
      await fetch(
        "https://opensheet.elk.sh/1m9k7E9mem98y6SUCNHOdfThBC0pTeoe_915tiQbdTyA/Sheet1"
      )
    ).json();

    return response.map(({ name, latitude, longitude, ...props }) => ({
      name,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      ...props,
    }));
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
