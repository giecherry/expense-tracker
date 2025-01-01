import React from 'react'
import Select from 'react-select'
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";


const SelectDropdown = () => {

    const categories = [
        { value: 'housing', label: 'Housing' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'groceries', label: 'Groceries' },
        { value: 'lifestyle', label: 'Lifestyle' },
        { value: 'others', label: 'Others' }
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: "1.5rem", // Matches `rounded-3xl`
            padding: "0.5rem", // Matches your inputs
            width: "90%", // Matches `w-[80%]`
            borderWidth: "2px",
            borderColor: state.isFocused ? "#d1d5db" : "#f5f5f5", // Match the subtle border
            backgroundColor: "#ffffff", // Same as your input fields
            boxShadow: "none", // Removes default shadow
            "&:hover": {
                borderColor: "#d1d5db", // Hover border color to match inputs
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "1.5rem", // Rounded dropdown menu
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for dropdown
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#f3f4f6" : "#ffffff", // Subtle hover effect
            color: "#000", // Black text
            borderRadius: "0.5rem", // Slightly rounded options
            padding: "0.5rem 1rem",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#9ca3af", // Matches placeholder color of input fields
            fontSize: "1rem",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#000", // Matches text color of inputs
            fontSize: "1rem",
        }),
    };
    
    return (
    <Select options={categories} placeholder="Select a category" styles={customStyles} />
    )
}

export default SelectDropdown