import { useState, useEffect, useRef, useCallback } from "react";
import Tag from "./components/Tag";

export default function App() {
  const [tagValue, setTagValue] = useState("");
  const [tagList, setTagList] = useState([]);

  const inputRef = useRef();
  const documentRef = useRef(document);

  const deleteLastTag = (e) => {
    if (e.key === "Delete") removeTag();
  };

  useEffect(() => {
    documentRef.current.addEventListener("keydown", deleteLastTag);
    return () => {
      documentRef.current.removeEventListener("keydown", deleteLastTag);
    };
  }, [tagList]);

  const handleInput = (e) => {
    let value = e.target.value;
    if (value.charCodeAt(value.length - 1) === 44) {
      value = value.replace(",", "");
      if (value.length) {
        setTagList([...tagList, value]);
        value = "";
      }
    }
    setTagValue(() => value);
  };

  const removeTag = (tag) => {
    let listMinusOne = [...tagList];
    if (tag) {
      const tagIndex = listMinusOne.findIndex((element) => element === tag);
      listMinusOne.splice(tagIndex, 1);
    } else if (inputRef.current.value === "" && listMinusOne.length) {
      listMinusOne.pop();
    }
    setTagList(listMinusOne);
  };

  return (
    <div className="App">
      <div id="ui">
        <h1>Tags</h1>
        <div id="tagsContainer">
          {tagList.map((tag, i) => (
            <Tag key={i} text={tag} selfRemove={() => removeTag(tag)} />
          ))}
          <input
            type="text"
            id="userInput"
            value={tagValue}
            onChange={handleInput}
            ref={inputRef}
          />
        </div>
        <ul style={{ textAlign: "left" }}>
          <li>type your tags separated by a coma to create them</li>
          <li>press Del key to delete the last tag created</li>
          <li>click the cross of a tag to delete it</li>
        </ul>
      </div>
    </div>
  );
}
