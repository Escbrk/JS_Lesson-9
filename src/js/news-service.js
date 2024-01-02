export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: '4330ebfabc654a6992c2aa792f3173a3',
      },
    };
    const URL = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

    fetch(URL, options)
      .then(r => r.json())
      .then(this.incrementPage())
      .catch(err => console.log(err));
    //   .finally(() => this.searchQuery.reset());
  }

  incrementPage() {
    this.page += 1;
    }
    
    resetPage() {
        this.page = 1
    }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
