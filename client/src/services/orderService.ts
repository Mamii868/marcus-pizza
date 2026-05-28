const orderService = async () => {

  const getOrder = async () => {
    const response = await fetch(`${import.meta.env.SERVER_BACKEND_URL}/orders/get`);

    if (!response.ok) {
      throw new Error("Failed to fetch order data");
    }

    const data = await response.json();
    return data;
  };
};

export default orderService;
