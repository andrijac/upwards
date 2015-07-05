# upwards
Go upwards in URL path.

[Source](/blob/master/upwards.js)
[Minified](/blob/master/upwards-min.js)
[Bookmarklet](/blob/master/upwards-browser.js)

Tests:

| Input     | Expected result|
| --------|---------|
| http:// **subdomain**.example.com/ | http://example.com/ |
| http://example.com/ **path/path/** |http://example.com/ **path/** |
| http://example.com/ **path/** | http://example.com/ |
| http:// **www**.example.com/ | http://example.com/ |
| http:// **www**.example.com:81/ | http://example.com:81/ |
| http://subdomain.example.com/ **ranks.aspx** | http://subdomain.example.com/ |
| http://subdomain.example.com/ **ranks.aspx?test=12322** | http://subdomain.example.com/ |
| http://subdomain.example.com/ **ranks.aspx?t1=12322&t2=testing** | http://subdomain.example.com/ |
| http://subdomain.example.com/path/ **ranks.aspx?t1=12322&t2=testing** | http://subdomain.example.com/path/ |
| http://localhost/  | http://localhost/   |
| http**s**://localhost/ | http**s**://localhost/ |
