import '../stylesheets/tailwind.scss';
import Nav from '../components/Nav';
import hhrCC from './banners/hhrCC';
import Prueba from '../components/Prueba';

class Layout extends React.Component {

     state = {
          hhrCC: false
     }

     handleClick = () => {
          console.log('click');
          this.setState({
               hhrCC: !this.state.hhrCC
          })
     }

     banners() {
          
     }

     render() {
          return (
               <React.Fragment>
                    <Nav />
                    <aside className="fixed w-48 h-screen bg-gray-200 p-8 text-gray-600">
                         <ul>
                              <li className="text-black my-2">HR's</li>
                              <li className={`py-2 pl-2 border-l-2 ${this.state.hhrCC ? 'text-black border-black ml-2 hover:text-gray-500 hover:border-gray-500' : 'border-gray-500 ml-2 hover:text-black hover:border-black'} cursor-pointer`} onClick={this.handleClick} data-id='hhrCC'>H(HR)</li>
                              <li className="py-2 pl-2 border-l-2 border-gray-500 ml-2 hover:text-black hover:border-black cursor-pointer">C(HR)</li>
                              <li className="py-2 pl-2 border-l-2 border-gray-500 ml-2 hover:text-black hover:border-black cursor-pointer">B(HR)</li>
                              <li className="py-2 pl-2 border-l-2 border-gray-500 ml-2 hover:text-black hover:border-black cursor-pointer">M(HR)</li>
                              <li className="py-2 pl-2 border-l-2 border-gray-500 ml-2 hover:text-black hover:border-black cursor-pointer">APP(HR)</li>
                         </ul>
                    </aside>
                    <div className="ml-48 p-2">

                    </div>
               </React.Fragment>
          )
     }
}

export default Layout;