import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function TableSort() {
    const [shownRows, setShownRows] = useState(30)
    const [key, setKey] = useState(0)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let photos = [Object];

    //script for fetching data from specific url 

    useEffect(() => {
        fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLoading(false)
                sessionStorage.setItem("data", JSON.stringify(data.items)) //adding data as JSON string into sessionStorage to avoid to many fetching on single ip during develop
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }, []);
        if(loading) return <p>Wait until page fully load</p>
        if (error) return <p>Data cannot be fetched</p>
        photos = (JSON.parse(sessionStorage.getItem("data")!))

        
        return (
            <div>
                <label htmlFor="rowCount">
                    How many rows would you like to see?
                </label>
                <input id="rowCount" type="number"
                    onChange={(e) => {
                        setShownRows(parseInt(e.currentTarget.value))
                    }} />

                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr><th>nr.</th><th>name</th>
                            <th>count
                                <ArrowDropDownIcon fontSize='large' id="icon_arrow" onClick={(e) => {
                                    if (Object.values(photos[0])[3] > Object.values(photos[1])[3]) {
                                        document.getElementById("icon_arrow")!.style.rotate = "180deg";
                                    }
                                    else {
                                        document.getElementById("icon_arrow")!.style.rotate = "0deg";
                                    }
                                    photos = photos.sort((a: any, b: any) => (a > b ? 1 : -1))

                                    setKey((k) => k + 1)
                                    sessionStorage.setItem("data", JSON.stringify(photos))
                                }} /></th></tr>
                    </thead>
                    <tbody>
                        {photos.map((e: any, index: number) => {
                            if (index < shownRows) {
                                return (<tr><td key={index + 1}>{index + 1}</td><td key={e.name}>{e.name}</td><td key={e.count}>{e.count}</td></tr>)
                            }

                        })}
                    </tbody>
                </table>
            </div>
        )
    }
