"use client";

import { useState } from "react";

const ItemsTracker = () => {
  const [itemCount, setItemCount] = useState(0);
  return { itemCount, setItemCount };
};

export default ItemsTracker;
