import { useState } from "react";
import MCheckBoxGroup from "../../../core/ui-kit/inputs/checkboxgroup";

export default function MNewPayPortal() {
  const [_price, setPrice] = useState(0);
  const [_quantity, setQuantity] = useState(0);
  const [purchased, setPurchased] = useState(false);

  const [item, setItem] = useState({
    name: "DPO Coin",
    description: "Security Token of DirectPrivateOffers",
    image: "/assets/images/dpo-logo-footer.png",
    quantity: _quantity,
    price: _price,
  });
  return (
    <>
      <MCheckBoxGroup key="" />
    </>
  );
}
