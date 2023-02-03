import React from 'react';
import './Container.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = () => {
    const [data, setData]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((resp)=>{
        console.warn("result",resp)
        setData(resp)
    })
})
},[])
    console.warn(data)
    const [show, seTshow] = useState(false)
    return (
        <>
            <div className="container">
                <div className="containerComp">
                    <div className="boxOne">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <th scope="col">Company</th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td>Google</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="boxTwo">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <th scope="col">contact</th>
                                </tr>
                            </thead>            
                            <tbody>
                                <tr>
                                    <td>Abhishek</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                    <div className="boxThree">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <th scope="col">city</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mumbai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="boxFour">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <th scope="col">state</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Maharashtra</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="boxButton">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <button type="button" onClick={() => seTshow(!show)}> {show === true ? "Hide Details" : "View Details"} </button>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                {show ? <div className="detailDesc">
                    <div className="descBox">
                        <table className="tabular">
                            <thead>
                                <tr>
                                    <th scope="col">Desription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Front-end developers use HTML, CSS, and JavaScript to build the client side of a website. They are responsible for building the visual elements on a page, such as the layout, buttons, menus, forms, and other features that users will see and interact with when they visit a webpage.</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="divideColumnBox">
                            <div className="contactBox">
                                <table className="tabular">
                                    <thead>
                                        <tr>
                                            <th scope="col">Contact Person</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Imran Khan</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Operator</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Imran@google.com</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1800-890-567</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="contactBoxTwo">
                                <table className="tabular">
                                    <thead>
                                        <tr>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cidco garden, Near MGM Hospital, Aurangabad 431136</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Aurangabad</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">state</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Maharashtra</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>India</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>

        </>
    )
}

export default Container
