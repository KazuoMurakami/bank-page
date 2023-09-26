'use client'

import { useEffect, useState } from "react"
import Image from "next/image";
import ButtonActive from "./ButtonActive";

export default function Jobs() {
    const [data, setData] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("/data.json")
                const jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.error("erro ao carregar o dado: " + error)
                setData([])
            }
        }
        fetchData()
    },[])

    const toggleLanguage = (language) => {
        // Verifique se o idioma clicado é o mesmo que já está selecionado
        // Se sim, defina o estado como null para desmarcá-lo, senão defina como o idioma clicado
        setSelectedLanguage((prevState) => (prevState === language ? null : language));
    };
    
    const toggleNull = () => {
        setSelectedLanguage((prevState) => (prevState === prevState ? null : null))
    }

    return (
        <>
            <ul className="flex flex-col items-center gap-8">
                {data.map((item) => {
                    if (
                        selectedLanguage === null ||
                        item.languages.includes(selectedLanguage) ||
                        item.role.includes(selectedLanguage)
                    ) {
                        return (
                            <li key={item.id} className="flex job-container bg-white p-6 drop-shadow-3xl rounded">
                                <div className="flex gap-2">
                                    <Image src={item.logo} alt={item.company} width={100} height={100} />
                                    <div>
                                        <h2>{item.company}</h2>
                                        <p>Posição: {item.position}</p>
                                        <div className="flex gap-4">
                                            <p>{item.postedAt}</p>
                                            <p>{item.contract}</p>
                                            <p>Localização: {item.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <ButtonActive
                                    languages={item.languages}
                                    role={item.role}
                                    setSelectedLanguage={toggleLanguage} // Use a função de alternância
                                />
                            </li>
                        );
                    } else {
                        // Retorna null para ocultar itens que não correspondem à seleção
                        return null;
                    }
                })}
            </ul>
        </>
    );
}
