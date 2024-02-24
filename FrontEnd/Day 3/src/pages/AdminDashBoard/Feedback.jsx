
import AdminNav from '../../components/AdminNav';
import '../../assets/css/Feedback.css'



function Feedback() {
  return (
    <>
    <AdminNav/>
    
      <div className="price-list-container">
        <h1><center>FeedBack</center></h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feed</th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <td>JOHN</td>
              <td>evan@gmail.com</td>
              <td>Best site I have ever Visited</td>
            </tr>   
            <tr>
              <td>Evans</td>
              <td>robe@gmail.com</td>
              <td>Easy to use and low cost</td>
            </tr> 
            <tr>
              <td>Wilson</td>
              <td>win@gmail.com</td>
              <td>Foods were more delicious</td>
            </tr> 
            <tr>
              <td>Diagoo</td>
              <td>cr@gmail.com</td>
              <td>Good in all themes</td>
            </tr> 
            <tr>
              <td>Redri</td>
              <td>movi@gmail.com</td>
              <td>Nice!!!</td>
            </tr> 
          </tbody>
        </table><br></br>
        
      </div>
    </>
  );
}

export default Feedback;