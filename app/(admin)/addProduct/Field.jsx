"use client"
import { Input, Option, Select, Typography, } from '@material-tailwind/react'
import React  from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useSelector } from 'react-redux';

const InputFields = ({label, type, placeholder, name ,}) => {
//   const { getCategory } = useSelector((state) => state.category);

  if (type === 'select') {
    return (
      <>
      <label >
      <Typography
        variant="small"
        color="blue-gray"
        className="block font-medium mb-2"
      >
        {label}
      </Typography>
    </label>
      <Field
        name={name}
        type={type}
        as="select"
        className="!w-full !px-3 !py-3 !bg-white !border border-blue-gray-300 rounded-md shadow-sm focus:!outline-none focus:!ring-2  !transition duration-200 ease-in-out !text-gray-700"
      >
        {/* <Select label="Select Version"> */}
        <option >Select Category</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
        <option value="unisex">Unisex</option>
      {/* </Select> */}
        {/* {
          getCategory.length == 0 ? <option>No Category Avalaible</option> :
          getCategory?.map((opt ,idx)=>(
            <option className="" key={idx} value={`${opt?._id.toString()}`} >{opt?.categoryName|| "No category Avalaible"}</option>
          ))
        }   */}
          
      </Field>
      </> 
    );
  }
  if (type === "textarea") {
    return (
      <div>
        <label>
          <Typography
            variant="small"
            color="blue-gray"
            className="block font-medium mb-2"
          >
            {label}
          </Typography>
        </label>
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          rows={4}
          className="!w-full !px-3 !py-2 !bg-white !border border-blue-gray-300 rounded-md shadow-sm focus:!outline-none focus:!ring-2 !transition duration-200 ease-in-out !text-gray-700"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    );
  }

  return (
    <div>
            <label >
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                {label}
              </Typography>
            </label>
            <Field
            as={Input}
              color="gray"
              size="lg"
              type={type}
              name={name}
              placeholder={placeholder}
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary  !border-t-blue-gray-200"
              
            />

          </div>
  )
}

export default InputFields