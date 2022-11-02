import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {




  return (
    <div>
      {/* props.content.filter((content) => content[searchCategory].include(searchTerm)).map()*/}
      {props.content.filter((content) => content[props.filterCategory].toLowerCase().includes(props.filterTerm.toLowerCase())).map((content) => 
        <>
          <span 
            id={content.id}
            className='deleteCross' 
            onClick={props.delete}
            style={{position:'absolute', left:'20px', left:'20px', fontWeight:'bold'}}>x
          </span>
          <Tile key={content.id} content={content} />
        </>  
       )}
    </div>
  );
};
