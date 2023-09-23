'use client'

import { useEffect, useState } from "react"
import Image from "next/image";
export default function Jobs() {
    const [data, setData] = useState([]);

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

    return <>
    <ul className="flex flex-col items-center gap-8">
    {data.map((item) => (
        <li key={item.id} className="flex job-container bg-white p-6 drop-shadow-3xl rounded">
            <div className="flex gap-2">
                <Image src={item.logo} alt={item.company} width={100} height={100}/>
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
            <div className="flex items-center flex-1 gap-4 justify-end ">
                <span className="bg-stacks p-4 rounded">{item.role}</span>
                {item.languages.map((item) => (
                    <span className="bg-stacks p-4 rounded">{item}</span>
                ))}
            </div>
        </li>
    )
    )}
    </ul>
    </>
}