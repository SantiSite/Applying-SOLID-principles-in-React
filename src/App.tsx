import "./App.css";
import SingleResponsibilityPrinciple from "./SingleResponsibilityPrinciple";
import { WithNormalButton } from "./OpenClosedPrinciple";
import LiskovSubstitutionPrinciple from "./LiskovSubstitutionPrinciple";
import InterfaceSegregationPrinciple from "./InterfaceSegregationPrinciple"
import DependencyInversionPrinciple from "./DependencyInversionPrinciple";

function App () {

    return <>
        <SingleResponsibilityPrinciple />
        <WithNormalButton title="Applying SOLID principles in React" buttonText="Open-Closed Principle" onClick={() => {}} />
        <LiskovSubstitutionPrinciple />
        <InterfaceSegregationPrinciple post={{ title: "Interface Segregation Principle", author: {name: "SantiSite", age: 23}, createdAt: new Date()}} />
        <DependencyInversionPrinciple />
    </>;
}

export default App;
