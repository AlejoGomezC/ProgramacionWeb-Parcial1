import React, { useState, useEffect } from 'react';
import './VehicleList.css';

const strings = {
    en: {
        headerBrand: 'Brand',
        headerLine: 'Line',
        headerModel: 'Model',
        mileage: 'Mileage',
        color: 'Color',
        reference: 'Reference',
        noCarSelected: 'No car selected'
    },
    es: {
        headerBrand: 'Marca',
        headerLine: 'Línea',
        headerModel: 'Modelo',
        mileage: 'Kilometraje',
        color: 'Color',
        reference: 'Referencia',
        noCarSelected: 'Ningún carro seleccionado'
    }
};

function VehicleList() {

    const [language, setLanguage] = useState("en");
    const [cars, setCars] = useState([]);
    const [carDetails, setCarDetails] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/cars", {
                method: "GET",
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchCarDetails = async (carId) => {
        try {
            const response = await fetch(`http://localhost:3001/cars/${carId}`, {
                method: "GET",
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            setCarDetails(data);
        } catch (error) {
            console.error("Error fetching car details:", error);
        }
    };

    const handleCarSelection = (carId) => {
        fetchCarDetails(carId);
    };

    return (
        <div className="list">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{strings[language].headerBrand}</th>
                        <th scope="col">{strings[language].headerLine}</th>
                        <th scope="col">{strings[language].headerModel}</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={car.id} onClick={() => handleCarSelection(car.id)}>
                            <th scope="row">{index + 1}</th>
                            <td>{car.marca}</td>
                            <td>{car.linea}</td>
                            <td>{car.modelo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='mostrar_carro'>
                {carDetails ? (
                    <>
                        <h3 className='h3_id'>{carDetails.marca} {carDetails.linea}</h3>
                        <img src={carDetails.imagen} alt="Carro" />
                        <p>{'->'} {strings[language].mileage}: {carDetails.kilometraje}</p>
                        <p>{'->'} {strings[language].color}: {carDetails.color}</p>
                        <p>{'->'} {strings[language].reference}: {carDetails.referencia}</p>
                    </>
                ) : (
                    <p>{strings[language].noCarSelected}</p>
                )}
            </div>
        </div>
    );
}

export default VehicleList;
