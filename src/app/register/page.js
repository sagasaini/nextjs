import Head from 'next/head';
import '../login/Page.css'

import Image from 'next/image';
import logo from '../login/images/Logo.png'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 background-2" >
   
      <Head>
        <title>Registration Form</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-lg background">
      <div className="login-section">
      <Image className='logo-image' src={logo} width={100} height={100}/>
        <h1 className="text-lg font-bold text-demo mb-4">Benvenuto nell'area <br /> di registrazione</h1>
        <p className="text-sm mb-4">
          La password deve essere composta da:
          <ul  className="list-disc pl-5">
            <li>Almeno 8 caratteri, massimo 16</li>
            <li>Lettere minuscole e maiuscole</li>
            <li>Almeno 1 numero</li>
            <li>Almeno un carattere speciale</li>
          </ul>
        </p>
        <form className='form-start'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* Effettua l'accesso: */}
            </label>
            <input type="email" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="..........." />
          </div>
          <div className="mb-6">
            <input type="password" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Conferma password"  />
            <p className="text-red-500 text-xs italic">Password non ancora conforme</p>
          </div>
        
          <br />
          <div className="text-demo1">
            <p>Hai già un account? <a href="#" className="text-demo2"> Accedi</a></p>
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