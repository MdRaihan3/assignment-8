import { useEffect, useState } from "react";
import { getStoredBooks } from "../../utility/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

const PagesToRead = () => {

    

    const [readBoooks, setReadBoooks] = useState([]);


    useEffect(() => {
        const storedReadBoooks = getStoredBooks();
        setReadBoooks(storedReadBoooks)
    }, [])

    return (
        <div>
            <BarChart width={1100} height={500} data={readBoooks} margin={{
                    top: 20, right: 30, left: 20, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages"/>
                <Bar dataKey="totalPages" fill="green" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBoooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
          
        </div>
    );
};

export default PagesToRead;