import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {/* props.content.filter((content) => content[searchCategory].include(searchTerm)).map()*/}
      {props.content.map((content) => 
        <>
          <span 
            id={content.id} 
            onClick={props.delete}
            style={{position:'absolute', left:'20px', left:'20px', fontWeight:'bold'}}>x
          </span>
          <Tile key={content.id} content={content} />
        </>  
       )}
    </div>
  );
};
