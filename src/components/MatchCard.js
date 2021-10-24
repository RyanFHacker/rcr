import React from 'react';
 
import {Link} from 'react-router-dom'
 
// import '../style.css';
 
function MatchCard(props) {
  const {id} = props
return (
<div>
    <div className="SomeItem-title">
      <h2>
      {/* event.sets.nodes.map(( node ) => ( */}

        <Link>{id}</Link>
      </h2>
{/*  
      <div className="SomeItem-title-action">
        {stargazers.totalCount} Stars
      </div> */}
    </div>
 
    <div className="SomeItem-description">
      {/* <div
        className="SomeItem-description-info"
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      /> */}
      <div className="SomeItem-description-details">
        {/* <div>
          {primaryLanguage && (
            <span>Language: {primaryLanguage.name}</span>
          )}
        </div> */}
        {/* <div>
          {owner && (
            <span>
              Owner: <a href={owner.url}>{owner.login}</a>
            </span>
          )}
        </div> */}
      </div>
    </div>
  </div>
)
  
      }

export default MatchCard;