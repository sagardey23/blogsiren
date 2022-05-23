import React, { useContext } from 'react'
import { AllContext } from './AllContext'
import { Link } from 'react-router-dom'


const Bollywood = () => {
    const content = []
    const [data] = useContext(AllContext)

    data.forEach((props) => {
        if (props.Category === "bollywood") {
            content.push({
                id: props.Id,
                name: props.Name,
                date: props.Date,
                img: props.Img,
                about: props.About,
                category: props.Category
            });
        }
    })
    return (
        <>
            {/* <h1>Bollywood</h1> */}
            <h1 className='bollytext'>Bollywood </h1>


            <div className='bollyparent1'>
                <div>
                    {content.map((e) =>
                        <div key={e.id} className='bollyparent2' >
                            <div >
                            <Link to={`/artReading/${e.id}`}>

                                    <img className='imagesizing' src={e.img} alt="" />
                                </Link>
                            </div>
                            <div>
                                <h3>{e.name}</h3>
                                <p>{e.about}</p>
                                <h6>{e.date}</h6>
                            </div>

                        </div>

                    )}
                </div>
                {/* <hr className="hrsize"></hr> */}

            </div>
        </>
    )
}
export default Bollywood