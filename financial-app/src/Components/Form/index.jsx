import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";


const Form = () => {
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [valores, setValores] = useState({
    descripcion: '',
    cantidad: '',
    tipo: 'DEFAULT'
  });
  const onChange = (e) => {
    const { id, value } = e.target;
    setValores((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      descripcion: valores.descripcion,
      cantidad: parseFloat(valores.cantidad),
      tipo: valores.tipo
    };

    setItems((prevItems) => [...prevItems, newItem]);

    if (newItem.tipo === 'Ingreso') {
      setAmount((prevAmount) => prevAmount + newItem.cantidad);
    } else if (newItem.tipo === 'Gasto') {
      setAmount((prevAmount) => prevAmount - newItem.cantidad);
    }

    // Reset form fields
    setValores({
      descripcion: '',
      cantidad: '',
      tipo: 'DEFAULT'
    });
  };

  const onDelete = (id) => {
    const updatedItems = items.filter((_, index) => index !== id);
    setItems(updatedItems);
    // Optionally, you can also update the amount if you want to subtract the value of the deleted item
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/platforms/allPlatforms")
      .then(function (res) {
        setitems(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post("http://localhost:8080/platforms/newPlatform", {
        objectApp: valores.objectApp,
        categoryApp: valores.categoryApp,
      })
      .then(function (response) {
        setFlag(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onDeletee = (id) => {
    axios
      .delete(`http://localhost:8080/platforms/deletePlatform/${id}`)
      .then(function (res) {
        setFlag(true);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      });
  };

  // const onChange = (event) => {
  //   const { id, value } = event.target;
  //   setValores((prevValores) => ({
  //     ...prevValores,
  //     [id]: value,
  //   }));
  // };



  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   postData();
  // };

  // useEffect(() => {
  //   getData();
  //   if (flag) {
  //     setFlag(false)
  //   }
  // }, [flag]);
  return (
    <form className="mt-8" onSubmit={onSubmit}>
     <div className="flex justify-between">
        <div>
          <div className="mb-6">
            <label
              htmlFor="descripcion"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Descripción
            </label>
            <input
              type="text"
              onChange={onChange}
              value={valores.descripcion}
              id="descripcion"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-gray-700 dark:border-green-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="cantidad"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Cantidad
            </label>
            <input
              type="number"
              onChange={onChange}
              value={valores.cantidad}
              id="cantidad"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-gray-700 dark:border-green-500"
            />
          </div>
          <div>
            <select
              id="tipo"
              onChange={onChange}
              value={valores.tipo}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <option value="DEFAULT" disabled>
                Selecciona una Tipo
              </option>
              <option value="Gasto">Gasto</option>
              <option value="Ingreso">Ingreso</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">Cantidad actual</h2>
          <h2 className="flex justify-end text-2xl">${amount.toFixed(2)}</h2>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Agregar movimiento
      </button>

      <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
          Mis Movimientos
        </label>


        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
          {items.map((data, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={i}
              >
                <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
                <td className="px-6 py-4">{data.tipo}</td>
                <td className="px-6 py-4">${data.cantidad.toFixed(2)}</td>
                <td className="px-6 py-4">{data.descripcion}</td>
                <td className="px-6 py-4" onClick={() => onDelete(i)}>
                  <span className="text-red-600 cursor-pointer">Eliminar</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default Form;
