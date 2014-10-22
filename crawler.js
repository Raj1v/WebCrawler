var server = location.host;
var startpage = 'index.html';
var startkeys;
var pages = [[startpage,startkeys,true,false]];//Opbouw array: url,metakeys,intern,gescand

function scan()
{
	
	for(var i = 0;i<10;i++)
	{
		console.log('e');
		var allscanned = true;
		this.pages = pages;
		$.each(pages,function(index,page)
		{
			if(page[2] && !page[3])
			{
				allscanned = false;
				scanPage(page[0]);
				page[3] = true;
			}

		});
		if(allscanned) break;
	}
	
	
	
}
function addPages()
{
	
	
function scanPage(page)
{
	console.log('Started scanning page ' + page);
	$.get(page, function(html) {
    	$.each($(html).find('a'),function(index,url)
		{
		console.log('Link found ' + url);
		var pageInformation = new Array(url,$('meta[name=kewwords]').attr("content"),true);
		var inArray = false;
		if(this.host !== server) pageInformation[2] = false;//Controleert of de link extern of intern is.

		$.each(pages,function(index,url)
		{
			if(String(url[0]) == String(pageInformation[0])) inArray = true;
		});
		if(!inArray) pages.push(pageInformation);
    });
	});
	
}
function view()
{
	$.each(pages,function(index,element)
	{
		alert(element[0] + '   keys: ' + element[1]);
	});
}