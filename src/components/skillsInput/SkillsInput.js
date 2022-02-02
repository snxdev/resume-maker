import Autosuggest from "react-autosuggest";

function getSuggestions() {
  return [
    { abbr: "HT", name: "HTML" },
    { abbr: "CS", name: "CSS" },
    { abbr: "PH", name: "PHP" },
    { abbr: "PY", name: "Python" },
    { abbr: "Ja", name: "Java" },
    { abbr: "Jav", name: "Javascript" },
    { abbr: "Re", name: "React" },
    { abbr: "An", name: "Angular" },
    { abbr: "Vu", name: "Vue" },
    { abbr: "My", name: "MySql" },
  ];
}

const SkillsInput = ({ addTag, ...props }) => {
  const handleOnChange = (e, { newValue, method }) => {
    if (method === "enter") {
      e.preventDefault();
    } else {
      props.onChange(e);
    }
  };

  const inputValue = (props.value && props.value.trim().toLowerCase()) || "";
  const inputLength = inputValue.length;

  let suggestions = getSuggestions().filter((state) => {
    return state.name.toLowerCase().slice(0, inputLength) === inputValue;
  });

  return (
    <Autosuggest
      ref={props.ref}
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      inputProps={{ ...props, onChange: handleOnChange }}
      onSuggestionSelected={(e, { suggestion }) => {
        addTag(suggestion.name);
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  );
};

export default SkillsInput;
