import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";


export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        async function fetchVehicle() {
            let res = await fetch('https://swapi.dev/api/vehicles/');
            let data = await res.json();
            setVehicles(data.results);

        }
        fetchVehicle();
    }, [])
    console.log('data', vehicles);
    return (

        <>

            <p className="text-center">STAR WARS VEHICLES</p>
            {vehicles.map(({ name }, index) => {


               return index % 2 === 0 ?(
                    <section key={index} className="py-5 bg-light" id="scroll-target">
                        <div className="container px-5 my-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                                <div className="col-lg-6">
                                    <h2 className="fw-bolder">{name}</h2>
                                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                                    <Link className="btn btn-primary" to={`/vehiclesDetails/${index}`} >Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </section>) : (

                    <section key={index} className="py-5">
                        <div className="container px-5 my-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                                <div className="col-lg-6">
                                    <h2 className="fw-bolder">{name}</h2>
                                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                                    <Link className="btn btn-primary" to={`/vehiclesDetails/${index}`} >Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            })}

        </>
    )
}

