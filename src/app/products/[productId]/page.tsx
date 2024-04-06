import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};


const ProductDetails = ({ params }: Props) => {
  return (
    <div>Details about product {params.productId} </div>
  )
}

export default ProductDetails