export function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((restaurants) =>
      restaurants?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }