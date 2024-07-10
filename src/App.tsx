

import ProductCard from './components/ProductCard'
import {products} from './data' 

 function App() {

    // render products 
    const productList = products.map((product)=>{
      return <ProductCard key={product.id} product={product} />  // pass product data to product card component  // use map function to create multiple product cards based on product data  // use unique key prop to avoid react warning about key prop changes in development mode  // product data is passed as a prop to the ProductCard component  // map function is used to create a new array by transforming an existing array  // map function returns a new array with the results of calling a provided function on every element in the calling array  // key prop is used to uniquely identify each element in the array in the DOM  // the unique key prop is important for React to reconcile the DOM and avoid unnecessary re-renders  // the key prop is required when using the array.map() method to create a new array with elements created from an existing array  // the key prop is used to identify each individual element in the array in the DOM  // the unique key prop is important
    })

  return (
  
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 p-3 ">
      {productList}
      </div>

    </div>

  )
}

export default App
