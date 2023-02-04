import React from "react";
import "./home.css"
import Image1 from "../assets/img.gg.jpg"
import Image2 from "../assets/img.gg.jpg"
import Image3 from "../assets/img.gg.jpg"
import Image4 from "../assets/img.gg.jpg"
import Image5 from "../assets/img.gg.jpg"
import Image6 from "../assets/img.gg.jpg"
import Image7 from "../assets/img.gg.jpg"
import Image8 from "../assets/img.gg.jpg"
import Image9 from "../assets/img.gg.jpg"
import Image10 from "../assets/img.gg.jpg"
import Image11 from "../assets/img.gg.jpg"
import Image12 from "../assets/img.gg.jpg"
import Image13 from "../assets/img.gg.jpg"
import Image14 from "../assets/img.gg.jpg"
import Image15 from "../assets/img.gg.jpg"
import Image16 from "../assets/img.gg.jpg"
import Image17 from "../assets/img.gg.jpg"
import Image18 from "../assets/img.gg.jpg"
// import Image19 from "../assets/img.gg.jpg"



const Home =()=>{
    const data=[
        {
            key: 1,
            img: Image1,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 2,
            img: Image2,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 3,
            img: Image3,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 4,
            img: Image4,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 5,
            img: Image5,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 6,
            img: Image6,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 7,
            img: Image7,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 8,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 9,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 10,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 11,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 12,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 13,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 14,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 15,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 16,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 17,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
        {
            key: 18,
            img: Image8,
            description: "Art of Devil 1",
            Read: " МОНГОЛ ХЭЛ"
        },
    ];

    return(
        <div className="bigbox">
            <h2>WoW kino site /horror/</h2>
            <div className="Grid">
                {
                    data.map ((row) =>(
                        <div className="Roww">
                            <div className="columnn">
                                <img src={row.img} alt="//"/>
                                <p className="bookname">{row.description}</p>
                                <p className="unshih">{row.Read}</p>
                            </div>
                        </div>
                    ))
                } 

            </div>
            <h2>Илүүг унших</h2>
        </div>
    )
}
export default Home;