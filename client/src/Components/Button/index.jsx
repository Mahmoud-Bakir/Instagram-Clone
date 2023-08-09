import './style.css';
const Button = ({name,onSubmit}) => {
    return (
        <button onClick={onSubmit}>
            {name}
        </button>
    );
}
export default Button;