

const Button = () => {
    const handleClick = () =>{
        alert('Test')
    };
  return (
    <Button type = "Button" className= "" onClick={() => handleClick()}>
        More
    </Button>
  );
};

export {Button};