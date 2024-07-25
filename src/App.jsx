
import Image from './Components/Atoms/Image.jsx';
import WrappedNavbar from './Components/Organism/Navbar';
import WrappedP from './Components/Organism/Paragraph.jsx';
import WrappedPs from './Components/Organism/ParagraphSnd.jsx';

function App() {

  return (
   
    <div >
      <WrappedNavbar />
      <div className='flex mx-auto'>
          <WrappedP/>
          <Image/>
      </div>
      <div>
        <WrappedPs/>
      </div>
      

    </div>

    
  )
}
export default App;
