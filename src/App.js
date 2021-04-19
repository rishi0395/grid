import './App.css';

function App() {
  const array = [
    {
      image: '/images/1.jpg',
      name: 'Ganesh'
    },
    {
      image: '/images/2.jpg',
      name: 'Srikanthan'
    },
    {
      image: '/images/3.jpg',
      name: 'Balagurur'
    },
    {
      image: '/images/4.jpg',
      name: 'Vigneswari'
    },
    {
      image: '/images/5.jpg',
      name: 'Mohan'
    },
    {
      image: '/images/6.jpg',
      name: 'Surya'
    },
    {
      image: '/images/7.jpg',
      name: 'Venkatagiri'
    },
    {
      image: '/images/8.jpg',
      name: 'Prabeela'
    },
    {
      image: '/images/9.jpg',
      name: 'Rubiya'
    },
    {
      image: '/images/10.jpg',
      name: 'Yogakani'
    },
    {
      image: '/images/11.jpg',
      name: 'Sarath'
    },
    {
      image: '/images/12.jpg',
      name: 'Rishi'
    },
    {
      image: '/images/13.jpg',
      name: 'Vamsi'
    },
    {
      image: '/images/14.jpg',
      name: 'Neha'
    },
    {
      image: '/images/15.jpg',
      name: 'Poornima'
    },
    {
      image: '/images/16.jpg',
      name: 'Ravi'
    },
    {
      image: '/images/17.jpg',
      name: 'Udhaya'
    },
    {
      image: '/images/18.jpg',
      name: 'Saravanan'
    },
    {
      image: '/images/19.jpg',
      name: 'Santhosh'
    },
    {
      image: '/images/20.jpg',
      name: 'Suman'
    },
    {
      image: '/images/21.jpg',
      name: 'Raman'
    },
    {
      image: '/images/22.jpg',
      name: 'MJ'
    },
    {
      image: '/images/23.jpg',
      name: 'Akshata'
    },
    {
      image: '/images/24.jpg',
      name: 'Mehak'
    },
    {
      image: '/images/25.jpg',
      name: 'Ganesh'
    },
    {
      image: '/images/26.jpg',
      name: 'Dhanya'
    },
    {
      image: '/images/27.jpg',
      name: 'Ujitha'
    },
    {
      image: '/images/28.jpg',
      name: 'Robbi'
    },
    {
      image: '/images/29.jpg',
      name: 'Shunmuga'
    },
    {
      image: '/images/30.jpg',
      name: 'Uma'
    },
    {
      image: '/images/31.jpg',
      name: 'Selvam'
    },
    {
      image: '/images/32.jpg',
      name: 'Michael'
    },
    {
      image: '/images/33.jpg',
      name: 'Vijayakumar'
    },
    {
      image: '/images/34.jpg',
      name: 'Jabir'
    },
    {
      image: '/images/35.jpg',
      name: 'Prasanth'
    },
    {
      image: '/images/36.jpg',
      name: 'Vinoth'
    },
    {
      image: '/images/37.jpg',
      name: 'Aabhas'
    },
    {
      image: '/images/38.jpg',
      name: 'Prajwal'
    },
    {
      image: '/images/39.jpg',
      name: 'Rohini'
    },
    {
      image: '/images/40.jpg',
      name: 'Ravi'
    },
    {
      image: '/images/41.jpg',
      name: 'Deepa'
    },
    {
      image: '/images/42.jpg',
      name: 'Nilesh'
    },
    {
      image: '/images/43.jpg',
      name: 'Shiny'
    },
    {
      image: '/images/44.jpg',
      name: 'Vasan'
    },
    {
      image: '/images/45.jpg',
      name: 'Vijay'
    },
    {
      image: '/images/46.jpg',
      name: 'Ganesh'
    }
  ];
  return (
    <div className='container'>
      {array.map((ele, index) => {
        console.log(index);
        return (
          <div className='gallery__container'>
            <div className='gallery-item'>
              <div className='image'>
                <img src={ele.image} alt='' />
              </div>
              <div className='text'>{ele.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
