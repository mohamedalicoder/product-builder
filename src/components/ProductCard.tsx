import { txtSlice } from '../utils/functions';
import Image from './Image';
import { IProduct } from '../interfaces';
import Button from './ui/Button';

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, price, imgURL, description } = product;

  // Fallback URL
  const fallbackImageUrl = 'https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp';

  return (
    <div className='border border-gray-600 rounded-md p-2 flex flex-col'>
      <Image
        imageUrl={imgURL || fallbackImageUrl}
        alt={title}
        className='rounded-md mb-2 w-full'
      />

      <h3>{title}</h3>
      <p>{txtSlice(description)}</p>
      <div className='flex items-center my-4 space-x-2'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-blue-600 rounded-full cursor-pointer' />
        <span className='w-5 h-5 bg-red-600 rounded-full cursor-pointer' />
      </div>
      <div className='flex items-center justify-between mb-2'>
        <span className='text-indigo-900'>{price}</span>
        <div className='flex space-x-2'>
          <h3>Cars</h3>
          <Image
            imageUrl={imgURL || fallbackImageUrl}
            alt={title}
            className='rounded-full w-10 h-10 object-bottom'
          />
        </div>
      </div>
      <div className='flex gap-2'>
        <Button
          onClick={() => alert('added')}
          className='bg-indigo-600'
        >
          Add to Cart
        </Button>

        <Button className='bg-red-600'>Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
