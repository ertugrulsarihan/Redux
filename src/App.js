import {connect} from "react-redux";

const App = (props) => {
  console.log(props.persons);
  return <div>
   Using Redux
   props
   {
     props.persons.map((person)=>(
         <div>
           <h3>{person.name}</h3>
           <h3>{person.age}</h3>
           </div>

     ))
   }
  </div>;
};
const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
  };
};

export default connect(mapStateToProps)(App);
