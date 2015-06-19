# upwards
Go up in url path:

Tests:

```
	testUrl("http://localhost/", "http://localhost/");
		
	testUrl("https://localhost/", "https://localhost/");
	
	testUrl("http://subdomain.example.com/"
			, "http://example.com/");
	
	testUrl("http://www.example.com/"
			, "http://example.com/");
	
	testUrl("http://www.example.com:81/"
			, "http://example.com:81/");
	
	testUrl("http://subdomain.example.com/ranks.aspx"
			, "http://subdomain.example.com/");
	
	testUrl("http://subdomain.example.com/ranks.aspx?test=12322"
			, "http://subdomain.example.com/");
	
	testUrl("http://subdomain.example.com/ranks.aspx?t1=12322&t2=testing"
			, "http://subdomain.example.com/");
	
	testUrl("http://subdomain.example.com/ranks.aspx?t1=12322&t2=testing"
			, "http://subdomain.example.com/");
	
	testUrl("http://subdomain.example.com/path/ranks.aspx?t1=12322&t2=testing"
			, "http://subdomain.example.com/path/");
	
	testUrl("http://example.com/path/ranks.aspx?t1=12322&t2=testing"
			, "http://example.com/path/");
	
	testUrl("http://example.com/path/"
			, "http://example.com/");
	
	testUrl("http://example.com/path/path/"
			, "http://example.com/path/");

```