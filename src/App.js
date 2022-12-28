import BoxMilk from "./Components/Button/BoxMilk/BoxMilk";
import { products } from "./data/data (1)";
function App() {
  return (
    <>
    <h3>Danh sách sản phẩm</h3>
      {products.map((index)=>{    
        return (
          <>
          <BoxMilk img={index.image} name={index.name} desc={index.desc} price={index.price}/>
          </>
        )
      })}
    </>
  );
}

export default App;
