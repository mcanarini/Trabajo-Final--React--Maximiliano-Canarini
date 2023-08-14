import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../Services/Firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Gracias por tu compra! </h1>
      {orderData !== null ? (
        <div>
          <p>
            Tus productos comprados:
            {orderData.items.map((item) => {
              return (
                <small>
                  {item.name} - {item.count} unidades
                </small>
              );
            })}
          </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default OrderConfirm;