//Creating an Element by React.createElement which takes 3 paramters:(type, props, and children)
//** 1) The tag name **
//** 2) an empty object which take atttributes to the tag e.g:(id,class) **
//** 3) what we want to show **
const createElement = React.createElement(
  "h1",
  {id: 'header'},
  "How react works under the hoods"
);
//Finding the main div where we gonna append that child element
const root = ReactDOM.createRoot(document.getElementById("root"));
//Then append it by render method of react to bind
//basically it takes those object created by createElement and transfer into a tag
root.render(createElement);
