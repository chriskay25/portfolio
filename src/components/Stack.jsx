import data from '../assets/data.js'

const Stack = () => {
    return (
        <div className='stack'>
            <h2>My Software Stack</h2>
            <ul>
                {data.map((item, index) => (
                    <li>
                        <div>{item.name}</div>
                        <img src={item.img} alt={item.alt} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stack