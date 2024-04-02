import { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function TableSort() {
    const [key, setKey] = useState(0)

    let photos = [Object];
    // useEffect(() => {
    //   fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       sessionStorage.setItem("data", JSON.stringify(data.items))
    //     });
    // }, []);

    photos = (JSON.parse(sessionStorage.getItem("data")!))
    console.log(photos, "-------------")
    const [shownRows, setShownRows] = useState(30)
    return (
        <div>
            <label htmlFor="">
                how many rows would you like to see?
                <input type="number" onChange={(e) => {
                    setShownRows(parseInt(e.currentTarget.value))
                }} />
            </label>
            <table className='table table-striped table-dark'>
                <thead className='thead-dark'>
                    <tr><th>nr.</th><th>name</th><th onClick={(e) => {
                        if (Object.values(photos[0])[3] > Object.values(photos[1])[3]) {
                            document.getElementById("icon_arrow")!.style.rotate = "180deg";
                        }
                        else {
                            document.getElementById("icon_arrow")!.style.rotate = "0deg";
                        }
                        // e.currentTarget.style.rotate = "180deg"
                        photos = photos.sort((a: any, b: any) => (a > b ? 1 : -1))

                        setKey((k) => k + 1)
                        console.log(photos[0])
                        sessionStorage.setItem("data", JSON.stringify(photos))
                    }}>count
                        <ArrowDropDownIcon fontSize='large' id="icon_arrow" /></th></tr>
                </thead>
                <tbody>
                    {photos.map((e: any, index: number) => {
                        if (index < shownRows) {
                            return (<tr><td key={index + 1}>{index + 1}</td><td key={e.name}>{e.name}</td><td>{e.count}</td></tr>)
                        }

                    })}
                </tbody>
            </table>
        </div>
    )
}
