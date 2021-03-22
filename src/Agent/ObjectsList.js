import React from "react";
import LinesList from "./LinesList";

export default function ObjectsList({object}) {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-3">
            <div className="bg-gray-200 text-lg px-6 py-4 font-black">
                <img src={process.env.REACT_APP_BASE_URL + object.image.tmb}/>
                {object.name}
            </div>
            {object.lines.map((line) => {
                return <LinesList line={line} />
            })}
        </div>
    );
}
