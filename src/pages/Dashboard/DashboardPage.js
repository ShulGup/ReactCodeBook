import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./Components/DashboardCard";
import { DashboardEmpty } from "./Components/DashboardEmpty";
import { getUserOrder } from "../../services";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");
  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrder();
        setOrders(data);
      } catch (error) {
        toast.error("🦄 Wow so easy!", {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchOrders();
  }, []);
  return (
    <>
      <section>
        <p>My DashboardPage</p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>
      <section>{!orders.length && <DashboardEmpty />}</section>
    </>
  );
};
