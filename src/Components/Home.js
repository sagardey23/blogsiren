import React from 'react'

import FeaturedArticle from './homeCompo/FeaturedArticle'
import LatestArtAll from './homeCompo/LatestArtAll'
import LatestArtCat1 from './homeCompo/LatestArticleCategory1'
import LatestArticleCategory2 from './homeCompo/LatestArticleCategory2'
import LatestArticleCategory22 from './homeCompo/LatestArticleCategory22'
import TopArtWebsite from './homeCompo/TopArtWebsite'

function Home() {
    
    return (
      <>
      <div className='FlexRow'>
        <FeaturedArticle/>

        
        <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Articles</div>
        
            <div className='FlexRow'>
                <div className='ArtFlxCol'>
                  <LatestArtCat1/>
                <div >
                    <img className='artVerticleImg' alt='gallary' src="https://images.pexels.com/photos/163848/road-mountains-sunset-path-163848.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" /> 
                </div>
                </div>
                <div className='  marginLeft'>
                    <div className='Advertistement'>Advertistement</div>
                    <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
                    <TopArtWebsite/>
                </div>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Technology Article</div>
              
            <LatestArticleCategory2/>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Fitness Article</div>
              
              
              <LatestArticleCategory22/>
            </div>
            <div className='homeLatestTxt'>
          <div className='TxtBorder'>
            The
          </div>
          Latest <br></br>
          <LatestArtAll/>
        </div>
       

        







      </div>
     
      </>
    
    )
}

export default Home


