"use client"
import { useState } from "react";

export default function ButtonActive({ languages, role ,setSelectedLanguage}) {
  // Usar um estado local para rastrear o estado de seleção de cada span
  const [button, setButton] = useState({});

  // Função para alternar o estado de seleção de um span quando clicado
  const ToggleButton = (button) => {
    setButton((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
    setSelectedLanguage(button);
  };

  return (
    <div className="flex items-center flex-1 gap-4 justify-end">
        
      <span
        className={`bg-stacks p-4 rounded cursor-pointer ${
          button[role] ? "bg-selected" : ""
        }`}
        onClick={() => ToggleButton(role)}
      >
        {role}
      </span>
      {languages.map((item) => (
        <span
          key={item}
          className={`bg-stacks p-4 rounded cursor-pointer ${
            button[item] ? "bg-selected" : ""
          }`}
          onClick={() => ToggleButton(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
