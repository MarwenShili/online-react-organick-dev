import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";
import { useSelector } from "react-redux";

function CartHeader() {
  const { totalCount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="cart_header" onClick={() => navigate("/cart")}>
      <span>
        <img src={cartIcon} alt="" />
      </span>
      Cart ({totalCount})
    </div>
  );
}

export default CartHeader;
