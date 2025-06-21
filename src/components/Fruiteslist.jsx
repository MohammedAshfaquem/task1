function Fruits(props) {
  return (
    <div>
      
        {props.items.map((value)=>(
            <p key={value}>
                {value}
            </p>
        ))}
    </div>
  );
}
 export default Fruits;