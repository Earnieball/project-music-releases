import React from 'react';


export const ArtistName = (props) =>{
  
  return(
    <div className='artist-name'>
     {
      props.item.artists.map((artist, index) => {
        return <a
        key={artist.id}
        href={artist.external_urls.spotify}>
          {artist.name}
          <span>{props.item.artists.length-1>index?', ': ''}</span>  
          </a>
      })
     }
    
    </div>
  )
}

// &nbsp; = nonbreakingspace