import React from "react";

const TagsDisplay = props => {
    console.log(props.tags)
  return (
    <div>
      {props.tags.map((tag, index) => {
        return (
            <div key={index}>
                <p>{tag.tag} - {tag.count}</p>
            </div>
        );
      })}
    </div>
  );
};

export default TagsDisplay;
