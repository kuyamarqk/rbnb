export const fetchRestaurants = () => {
    return  $.ajax({
        method: "GET",
        url: "/api/restaurants",
    })
}
   

export const fetchRestaurant = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${id}`, 
    })
}

export const searchRestaurants = search => {
    return $.ajax({
      method: "GET",
      url: "/api/restaurants",
      data: {search}
    });
}
export const createRestaurant = create => {
    return $.ajax({
        method: 'POST',
        url: '/api/restaurants',
        data: {create}
    })
}
export const updateRestaurant = rest => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/restaurants/${rest.id}`,
        data: {rest}
    })
}
export const deleteRestaurant = restId => {
    return $.ajax({
      method: "DELETE",
      url: `/api/restaurants/${restId}`,
    });
}
