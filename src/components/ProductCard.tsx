import { txtSlice } from '../utils/functions';
import Image from './Image';
import { IProduct } from '../interfaces';
import Button from './ui/Button';



interface IProps {
  product: IProduct;
}

const fullImage = '';
const ProductCard = ({ product }: IProps) => {
  const { title, price, imgURL, description } = product;
  return (
    <div className='border rounded-md p-sm flex flex-col hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out '>
      
      <Image
        imageUrl={imgURL || fullImage}
        alt='product name'
        className='rounded-md h-52 mb-2 object-cover w-full'
      />
<div className='h-20'>


      <h3 className='text-lg font-semibold '>{title}</h3>
      <p className='text-xs text-gray-500 break-words'>
        {txtSlice(description)}
      </p>
      </div>
      <div className='flex items-center  space-x-3 my-4'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer ' />
        <span className='w-5 h-5 bg-blue-600 rounded-full cursor-pointer ' />
        <span className='w-5 h-5 bg-red-600 rounded-full  cursor-pointer ' />
      </div>
      <div className='flex items-center justify-between '>
        <span className='text-gray-700 text-lg font-semibold'>{price}$</span>
        <div className='flex space-x-2'>
          <Image
            imageUrl={imgURL || fullImage}
            alt='product name'
            className='rounded-full w-10 h-10 object-bottom'
          />
        </div>
      </div>

      <div className='flex items-center justify-between space-x-2 mt-3 '>
        <Button className='bg-indigo-900 '
        onClick={()=>{
        
          
          console.log("the model is open")
        }}>
     
      <>
     
add the product 

     </>
    
        </Button>

        <Button className='bg-red-600 '>Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
