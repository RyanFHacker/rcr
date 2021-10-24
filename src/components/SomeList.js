import React from 'react';
 
import MatchCard from './MatchCard';
 
// import '../style.css';
 
const SomeList = ({ event }) =>

  event.sets.nodes.map(( node ) => (
    // console.log(node)
    <div key={node.id} className="MatchCard">
      <MatchCard {...node} />
    </div>
  ));
export default SomeList;