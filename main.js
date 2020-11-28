// 資料
const books = [{
  title: '為你自己學Git',
  author: '高見龍',
  image: 'git.jpeg',
  rating: 0
},
{
  title: '為你自己學Ruby On Rails',
  author: '高見龍',
  image: 'rails.png',
  rating: 0
},
{
  title: '金魚都能懂的CSS選取器',
  author: '李建杭',
  image: 'css.jpg',
  rating: 0
},
{
  title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
  author: '許國政',
  image: 'js.jpg',
  rating: 0
}]


// 函式
function displayBookList(data) {
  let htmlContent = `
    <table class="table">
      <thead>
        <tr>
          <th>Book</th>
          <th>Name</th>
          <th>Author</th>
          <th>Rating</th>
          <th>Buy it!</th>
        </tr>
      </thead>
      <tbody>
    `

  for (let i = 0; i < data.length; i++) {
    htmlContent += `
        <tr>
          <td>
            <div class="book-image"><img src = ${data[i].image} ></div>
          </td>

          <td>${data[i].title}</td>

          <td>${data[i].author}</td>

          <td>
            <img src="like.png" alt="like" class="icon like-icon"> 
            <img src="dislike.png" alt="dislike" class="icon dislike-icon">
            <div>${data[i].rating}</div>
          </td>

          <td>
            <a href="https://www.tenlong.com.tw/" class="icon"><img src="cart.png" alt="shopping cart"></a>
          </td>
        </tr>
      `
  }

  htmlContent += `
      </tbody>
    </table>
  `

  dataPanel.innerHTML = htmlContent
}

// 主程式
const dataPanel = document.querySelector('#data-panel')
displayBookList(books)


// 正負評的功能
dataPanel.addEventListener("click", function (event) {
  if (
    event.target.matches(".like-icon") ||
    event.target.matches(".dislike-icon")
  ) {
    const rateBox = event.target.parentElement.children[2];
    let rate = Number(rateBox.innerText);
    if (event.target.matches(".like-icon")) {
      rate += 1;
    } else {
      rate -= 1;
      if (rate < 0) rate = 0;
    }
    console.log(rate);
    rateBox.innerText = rate;

  }
});