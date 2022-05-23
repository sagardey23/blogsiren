import React, { useContext } from 'react'
import { AllContext } from '../AllContext'
import { Link } from 'react-router-dom'


function FeaturedArticle (){

    let cat1 = []
    let cat2 = []

    const [data] = useContext(AllContext)
    data.forEach((a) => {
        let key = a.Id
        switch(key){
            case "36":
                cat1.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    category: a.Category,
                    about: a.About

                })
                break;case "15":
               cat2.push({
                name: a.Name,
                img: a.Img,
                id: a.Id,
                date: a.Date,
                category: a.Category,
                about: a.About

               })
               break;case "32":
                   cat2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    category: a.Category,
                    about: a.About
                   })
                   break;

            default:
                break;
        }
    })
     console.log(cat2);

    return(
        <>
        <div className='FeatureArtBox'>
            {cat1.map((data) => 
            <div key={data.id} className="FeatureBox1">
                <Link to={`/artReading/${data.id}`}> <img className='FeatureImgBox1' src={data.img} alt='' /> </Link>
                <div className='box1Txt'> {data.name}</div>
                <div className='box1TxtDate'> {data.category} / {data.date} </div>
            </div>
            )}
            <div>
            {cat2.map((data) => 
            <div key={data.id} className="FeatureBox2">
                <Link to={`/artReading/${data.id}`}> <img className='FeatureImgBox2' src={data.img} alt='' /> </Link>
                <div className='box1Txt'> {data.name}</div>
                <div className='box1TxtDate'> {data.category} / {data.date} </div>
            </div>
            )}
            </div>

        </div>
        </>
    )
}
export default FeaturedArticle

