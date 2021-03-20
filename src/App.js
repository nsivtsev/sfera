import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
      <div className="bg-white w-full sm:w-5/6 md:w-4/5 lg:w-2/3 max-w-md mx-auto rounded-lg my-20 px-4 py-4 shadow-lg">
          <div className="flex font-bold justify-center mt-6">
              <img className="h-20"
                   src="https://sfera.com.ru/assets/images/sphere_logo_2.af66c013.png" />
          </div>
          <h2 className="text-3xl text-center text-gray-700 mb-4">СФЕРА 2.0</h2>
          <input type='text' placeholder="Имя пользователя или email"
                 className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"/>
          <input type='text' placeholder="Пароль"
                 className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"/>
          <button className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider"
                  style={{backgroundColor: "#1977f2"}}>Войти
          </button>
          <div className="flex justify-center my-4">
              <a className="text-blue-500 text-sm" href="#">Забыли пароль?</a>
          </div>
      </div>
  );
}

export default App;
