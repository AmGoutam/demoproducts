import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
const TableRow = ({ curElm }) => {
  const { _id, name, price, company, color, category } = curElm;
  const router = useRouter();
  const deleteRecord = async (id) => {
    if(confirm("Are you sure you want to delete this record")){
      try {
        const response = await fetch(`https://demoproducts.vercel.app/api/products/${id}`,{
          method : "DELETE",
        });
        const retundata = await response.json();
        if (retundata.success === true) {
          alert("Data deleted Successfully",router);
          router.push("/")
        } else {
          alert("Please try again some error is there");
        }
      } catch (error) {
        alert("Please try again some error is there");
      }
    }
  };

  return (
    <>
      <tr key={_id}>
        <td scope="row">{0 + 1}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{company}</td>
        <td>{color}</td>
        <td>{category}</td>
        <td>
          <Link href={`/${_id}`} className="btn btn-warning text-light me-2">
            <FiEdit />
          </Link>
          <button className="btn btn-danger" onClick={() => deleteRecord(_id)}>
            <AiTwotoneDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
