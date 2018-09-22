function initial(){

	$.ajax({
		url:"https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=6014b9f1114b426c98f2db15ff60e190",
		success: function(data){
			console.log(data);
			for(i=0; i<7; i++){
				document.querySelector(".main-container").innerHTML +=
				`<div>
				<h1> ${data.articles[i].title}</h1>
				<p> ${data.articles[i].description}</p>
				</div>
				<div class="head-line">
				<span class="news-image" style="background-image:url(${data.articles[i].urlToImage});"><span>
				<div class="border-set"></div>

				</div>`

			}
		}

	})
}

