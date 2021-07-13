function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/img/header/logo.png" alt="logo" width={40} height={40} />
          <div className="headerInfo">
            <h3 className="text-uppercase">React snikers</h3>
            <p>Магазин лучшех красовок</p>
          </div>
        </div>
        <ul>
          <li className="mr-30">
            <img src="/img/header/corzin.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/header/like.svg" alt="" />
          </li>
          <li>
            <img src="/img/header/account.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="slider">slider</div>
        <h1>Все крассовки</h1>
        <div className="forCards">
          <div className="card">
            <div className="like">
              <img src="/img/content/likeSimple.svg" alt="like" />
            </div>
            <div className="imageCard">
              <img src="/img/content/sn1.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="priceCard">
              <p className="price">
                ЦЕНА: <span>8499 руб.</span>
              </p>
              <div className="btnPlass">
                <img src="/img/content/plas.svg" alt="ADD" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="like">
              <img src="/img/content/likeSimple.svg" alt="like" />
            </div>
            <div className="imageCard">
              <img src="/img/content/sn2.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="priceCard">
              <p className="price">
                ЦЕНА: <span>12999 руб.</span>
              </p>
              <div className="btnPlass">
                <img src="/img/content/plas.svg" alt="ADD" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="like">
              <img src="/img/content/likeSimple.svg" alt="like" />
            </div>
            <div className="imageCard">
              <img src="/img/content/sn3.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="priceCard">
              <p className="price">
                ЦЕНА: <span>12999 руб.</span>
              </p>
              <div className="btnPlass">
                <img src="/img/content/plas.svg" alt="ADD" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="like">
              <img src="/img/content/likeSimple.svg" alt="like" />
            </div>
            <div className="imageCard">
              <img src="/img/content/sn4.jpg" alt="sneakers" />
            </div>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="priceCard">
              <p className="price">
                ЦЕНА: <span>8499 руб.</span>
              </p>
              <div className="btnPlass">
                <img src="/img/content/plas.svg" alt="ADD" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
