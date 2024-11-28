const RoastCard = ({ roastMessage }) => {
    return (
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Roast Result</h2>
        <p>{roastMessage}</p>
      </div>
    );
  };
  
  export default RoastCard;
  