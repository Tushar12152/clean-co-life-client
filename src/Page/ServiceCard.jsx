
import { PropTypes } from 'prop-types';

const ServiceCard = ({service}) => {

    const{ description,name,price}=service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">{name}</div>
    </h2>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

ServiceCard.propTypes={
     service:PropTypes.object,
}

export default ServiceCard;