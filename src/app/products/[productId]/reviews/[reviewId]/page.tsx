const ReviewDetails = ({ params }: { params: { productId: string, reviewId: string }}) => {
    return (
      <div>Review {params.reviewId} for product {params.productId} </div>
    )
  }
  
  export default ReviewDetails