import React from "react";

const TagsDisplay = props => {
    console.log(props.tags)
  return (
    <div className="flex-grid-tags">
      {props.tags.map((tag, index) => {
        return (
            <div className="tag" key={index}>
                <p>{tag.tag} - {tag.count}</p>
            </div>
        );
      })}
    </div>
  );
};

export default TagsDisplay;
