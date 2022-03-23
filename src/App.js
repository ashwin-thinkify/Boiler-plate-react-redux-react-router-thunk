import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/Expenses";
// import Invoices from "./routes/Invoices";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
		  {/* 
		  
		  Use the below config to make other routes 
		  https://reactrouter.com/docs/en/v6/getting-started/tutorial
		  https://reactrouter.com/docs/en/v6/examples/auth 
		  
		  */}
		  
          {/* <Route path="invoices" element={<Invoices />} >
			<Route
					index
					element={
					<main style={{ padding: "1rem" }}>
						<p>Select an invoice</p>
					</main>
					}
				/>
				<Route path=":invoiceId" element={<Invoice />} />
		  </Route>*/}
         </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
