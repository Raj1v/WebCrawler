var server = location.host;
var startpage = 'http://www.kvtulder.nl/webcrawler/index.html';
var startkeys;
var pages = [[startpage,startkeys,true]];

function scan()
{
	getLinks(startpage);
	$(pages).each(function(index, element) {
        alert(element[0] + " " + element[1] + " " + element[2]);
    });
}
function getLinks(page)
{
	$.get(page,function(data)
	{
		$(data).find('a').each(function(index, element) {
			
			if(inArray(String(element)))
			{
				var a;
				if(!checkExternal(element)) a = [element,'placeholder',true];
				else a = [element,'placeholder',false];
				pages.push(a);
			}
        });
	});
}
function inArray(arg1)
{
	var a = true;
	for(i=0;i < pages.length; i++)
	{
		if(pages[i][0]==arg1)
		{
		a = false;
		}
	}
	return a;
}
function checkExternal(href)
{
	if(href.toLowerCase().indexOf(server)==-1)
	{
	return true;
	}
	else
	{
	return false;	
	}
}