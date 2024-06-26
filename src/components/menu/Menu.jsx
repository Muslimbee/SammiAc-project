import './Menu.css'


export default function Menu() {
  return (
    <div>
        <div className="menu">
           <div className='menu__data'>
           <p className='manu__data_name'>Sahifalar</p>
            <div className='hr' > </div>
            <ul>
                <li>
                    <a href="#">
                    <i class='bx bx-home'></i>
                        <span>Bosh sahifa</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-home'></i>
                        <span>Home</span>
                    </a>
                </li><li>
                    <a href="#">
                    <i class='bx bx-home'></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-home'></i>
                        <span>Home</span>
                    </a>
                </li>
            </ul>

        <p className='manu__data_name'>Startuplar</p>
         <div className='hr'></div>
         <ul>
            <li>
                <a href="#">
                <i class='bx bx-podcast'></i>
                <span>Blogs</span>
                </a>
            </li>
        </ul>
           </div>

           <div className="menu__share">
             <p className='menu__share_name'>Ijtimoiy tarmoqlarda bizni kuzating</p>
             <div className='hr'> </div>
             <div className='share'>
                <a href=""><i class='bx bxl-instagram-alt' ></i></a>
                <a href=""><i class='bx bxl-telegram' ></i></a>
                <a href=""><i class='bx bxl-linkedin-square' ></i></a>
                <a href=""><i class='bx bxl-github' ></i></a>
                <a href=""><i class='bx bxl-youtube' ></i></a>
             </div>
           </div>
        </div>
    </div>
  )
}
