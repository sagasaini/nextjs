import Head from 'next/head';
import './Page.css'

import Image from 'next/image';
import logo from './images/Logo.png'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 background-2" >
   
      <Head>
        <title>Login Form</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-lg background">
      <div className="login-section">
      <Image className='logo-image' src={logo} width={100} height={100}/>
        <h1 className="text-lg font-bold text-demo mb-4">Benvenuto! <br />Effettua l’accesso:</h1>
        <form className='form-start'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* Effettua l'accesso: */}
            </label>
            <input type="email" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="sample@mail.com" />
          </div>
          <div className="mb-6">
            <input type="password" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="........."  />
            <p className="text-red-500 text-xs italic">E-mail e password non corrispondenti</p>
          </div>
          <div className="flex items-center justify-between">
           
            <a className="text-demo1" href="#">
              Password dimenticata?
            </a>
          </div>
          <br />
          <div className="text-demo1">
            <p>Non hai un account? <a href="#" className="text-demo2">Registrati</a></p>
            <button className="button-demo" type="button">
              Accedi
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};


export default Page