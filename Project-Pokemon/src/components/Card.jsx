const Card = (props) => {
  const { name, imageUrl, types, color } = props;

  return (
    <>
      <div className='card' style={{ backgroundColor: color }}>
        <img src={imageUrl} className='card-image' alt='card' />
        <div className='card-body'>
          <h1 className='card-title'>{name}</h1>

          <div className='card-text'>
            {types.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
