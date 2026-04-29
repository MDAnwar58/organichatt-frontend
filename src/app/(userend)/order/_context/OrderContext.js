import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { get_order_summaries } from "../_api/action";

export default function OrderContext() {
   const router = useRouter();
   const dispatch = useDispatch();
   const getOrderSummaries = (userId) => {
      dispatch(get_order_summaries(userId));
   };
   return { getOrderSummaries };
}
